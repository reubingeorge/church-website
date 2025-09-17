const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    // Create transporter based on email service provider
    this.transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  async sendContactEmail(formData) {
    const { name, email, phone, subject, message } = formData;
    
    // Email to church office
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.CHURCH_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject || 'New Message'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information:</h3>
            
            <p style="margin: 10px 0;">
              <strong>Name:</strong> ${name}
            </p>
            
            <p style="margin: 10px 0;">
              <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
            </p>
            
            ${phone ? `
              <p style="margin: 10px 0;">
                <strong>Phone:</strong> ${phone}
              </p>
            ` : ''}
            
            ${subject ? `
              <p style="margin: 10px 0;">
                <strong>Subject:</strong> ${subject}
              </p>
            ` : ''}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 5px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This message was sent from the church website contact form.</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        ${subject ? `Subject: ${subject}` : ''}
        
        Message:
        ${message}
        
        ---
        This message was sent from the church website contact form.
        Time: ${new Date().toLocaleString()}
      `
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      
      // Send auto-reply to sender
      if (process.env.SEND_AUTO_REPLY === 'true') {
        await this.sendAutoReply(name, email);
      }
      
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('Email error:', error);
      throw error;
    }
  }

  async sendAutoReply(name, email) {
    const autoReplyOptions = {
      from: `"Mar Gregorios Church" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting Mar Gregorios Syrian Orthodox Church',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
            Thank You for Contacting Us
          </h2>
          
          <p style="line-height: 1.6;">Dear ${name},</p>
          
          <p style="line-height: 1.6;">
            Thank you for reaching out to Mar Gregorios Syrian Orthodox Church. We have received your message 
            and someone from our church office will respond to you soon.
          </p>
          
          <p style="line-height: 1.6;">
            If your matter is urgent, please feel free to call us at (813) 505-9191.
          </p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Service Times:</h3>
            <p style="margin: 5px 0;"><strong>Sunday:</strong></p>
            <ul style="margin: 5px 0;">
              <li>Morning Prayer: 9:00 AM</li>
              <li>Holy Qurbana: 9:30 AM - 12:00 PM</li>
              <li>Sunday School: 1:00 PM</li>
            </ul>
          </div>
          
          <p style="line-height: 1.6;">
            May God bless you and your family.
          </p>
          
          <p style="line-height: 1.6;">
            In Christ,<br>
            Mar Gregorios Syrian Orthodox Church<br>
            12001 N 58th St, Tampa, FL 33617
          </p>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
      text: `
        Dear ${name},
        
        Thank you for reaching out to Mar Gregorios Syrian Orthodox Church. We have received your message 
        and someone from our church office will respond to you soon.
        
        If your matter is urgent, please feel free to call us at (813) 505-9191.
        
        Service Times:
        Sunday:
        - Morning Prayer: 9:00 AM
        - Holy Qurbana: 9:30 AM - 12:00 PM
        - Sunday School: 1:00 PM
        
        May God bless you and your family.
        
        In Christ,
        Mar Gregorios Syrian Orthodox Church
        12001 N 58th St, Tampa, FL 33617
        
        ---
        This is an automated response. Please do not reply to this email.
      `
    };

    try {
      await this.transporter.sendMail(autoReplyOptions);
      console.log('Auto-reply sent to:', email);
    } catch (error) {
      console.error('Auto-reply error:', error);
      // Don't throw - auto-reply failure shouldn't fail the main operation
    }
  }

  async verifyConnection() {
    try {
      await this.transporter.verify();
      console.log('Email service is ready');
      return true;
    } catch (error) {
      console.error('Email service error:', error);
      return false;
    }
  }
}

module.exports = new EmailService();