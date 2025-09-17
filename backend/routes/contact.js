const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const emailService = require('../services/emailService');

// Rate limiting for contact form (5 requests per hour per IP)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: 'Too many contact form submissions. Please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Validation middleware
const validateContactForm = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/).withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  
  body('phone')
    .optional()
    .trim()
    .matches(/^[\d\s\-\(\)\+]+$/).withMessage('Please provide a valid phone number'),
  
  body('subject')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Subject must be less than 200 characters'),
  
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 5000 }).withMessage('Message must be between 10 and 5000 characters')
];

// POST /api/contact
router.post('/', contactLimiter, validateContactForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array().map(err => ({
          field: err.path,
          message: err.msg
        }))
      });
    }

    const { name, email, phone, subject, message } = req.body;

    // Send email
    const result = await emailService.sendContactEmail({
      name,
      email,
      phone,
      subject,
      message
    });

    // Log contact form submission (you might want to save this to database)
    console.log('Contact form submitted:', {
      name,
      email,
      phone: phone || 'Not provided',
      subject: subject || 'Not provided',
      timestamp: new Date().toISOString()
    });

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Don't expose internal error details to client
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later or call us directly.'
    });
  }
});

// GET /api/contact/test - Test endpoint to verify email configuration
router.get('/test', async (req, res) => {
  try {
    const isReady = await emailService.verifyConnection();
    
    if (isReady) {
      res.json({
        success: true,
        message: 'Email service is configured and ready',
        config: {
          service: process.env.EMAIL_SERVICE || 'gmail',
          userConfigured: !!process.env.EMAIL_USER,
          churchEmailConfigured: !!process.env.CHURCH_EMAIL,
          autoReplyEnabled: process.env.SEND_AUTO_REPLY === 'true'
        }
      });
    } else {
      res.status(503).json({
        success: false,
        message: 'Email service is not properly configured'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error checking email service',
      error: error.message
    });
  }
});

module.exports = router;