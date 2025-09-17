import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../services/translation.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  scrollY = 0;
  showContent = false;
  selectedLanguage = 'en';
  
  // Form data
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  
  // Map configuration
  mapLoaded = false;
  
  // Office bearers data with optional images
  officeBearers = {
    president: {
      title: 'contact.officeBearers.president',
      name: 'Very Rev. Fr. George Abraham',
      image: '' // Add image URL here when available
    },
    vicePresident: {
      title: 'contact.officeBearers.vicePresident',
      name: 'Mathew Ninan',
      image: '' // Add image URL here when available
    },
    secretary: {
      title: 'contact.officeBearers.secretary',
      name: 'George Abraham',
      image: '' // Add image URL here when available
    },
    jointSecretary: {
      title: 'contact.officeBearers.jointSecretary',
      name: 'Alwyn Paul',
      image: '' // Add image URL here when available
    },
    treasurer: {
      title: 'contact.officeBearers.treasurer',
      name: 'Thomas Daniel',
      image: '' // Add image URL here when available
    },
    jointTreasurer: {
      title: 'contact.officeBearers.jointTreasurer',
      name: 'Pathrose Varghese',
      image: '' // Add image URL here when available
    },
    committeeMember: {
      title: 'contact.officeBearers.committeeMember',
      name: 'Thomas Mathew',
      image: '' // Add image URL here when available
    }
  };
  
  constructor(
    public translationService: TranslationService,
    private http: HttpClient
  ) {}
  
  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 100);
    this.selectedLanguage = this.translationService.getLanguage();
    
    // Subscribe to language changes
    this.translationService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
    });
    
    // Load map after a delay
    setTimeout(() => {
      this.mapLoaded = true;
    }, 1000);
  }
  
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollY = window.scrollY;
  }
  
  getParallaxOffset(speed: number): string {
    return `translateY(${this.scrollY * speed}px)`;
  }
  
  // Form validation errors
  formErrors: any = {};
  
  validateForm(): boolean {
    this.formErrors = {};
    let isValid = true;
    
    // Name validation
    if (!this.contactForm.name || this.contactForm.name.trim().length < 2) {
      this.formErrors.name = this.selectedLanguage === 'ml' 
        ? 'പേര് നൽകുക (കുറഞ്ഞത് 2 അക്ഷരങ്ങൾ)' 
        : 'Please enter your name (minimum 2 characters)';
      isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.contactForm.email || !emailRegex.test(this.contactForm.email)) {
      this.formErrors.email = this.selectedLanguage === 'ml' 
        ? 'ശരിയായ ഇമെയിൽ വിലാസം നൽകുക' 
        : 'Please enter a valid email address';
      isValid = false;
    }
    
    // Phone validation (optional but if provided, must be valid)
    if (this.contactForm.phone) {
      const phoneRegex = /^[\d\s\-\(\)\+]+$/;
      if (!phoneRegex.test(this.contactForm.phone)) {
        this.formErrors.phone = this.selectedLanguage === 'ml' 
          ? 'ശരിയായ ഫോൺ നമ്പർ നൽകുക' 
          : 'Please enter a valid phone number';
        isValid = false;
      }
    }
    
    // Message validation
    if (!this.contactForm.message || this.contactForm.message.trim().length < 10) {
      this.formErrors.message = this.selectedLanguage === 'ml' 
        ? 'സന്ദേശം എഴുതുക (കുറഞ്ഞത് 10 അക്ഷരങ്ങൾ)' 
        : 'Please enter your message (minimum 10 characters)';
      isValid = false;
    }
    
    return isValid;
  }
  
  async submitContactForm() {
    if (this.isSubmitting) return;
    
    // Validate form
    if (!this.validateForm()) {
      return;
    }
    
    this.isSubmitting = true;
    this.submitStatus = 'idle';
    
    try {
      // Send to backend API
      const apiUrl = environment.apiUrl || 'http://localhost:3000';
      const response = await this.http.post(`${apiUrl}/api/contact`, this.contactForm).toPromise() as any;
      
      if (response.success) {
        // Clear form on success
        this.contactForm = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        };
        this.formErrors = {};
        
        this.submitStatus = 'success';
        setTimeout(() => {
          this.submitStatus = 'idle';
        }, 5000);
      } else {
        throw new Error(response.message || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      this.submitStatus = 'error';
      
      // Handle specific error messages
      if (error.status === 429) {
        this.formErrors.general = this.selectedLanguage === 'ml' 
          ? 'അധിക സന്ദേശങ്ങൾ. ദയവായി വീണ്ടും ശ്രമിക്കുക.' 
          : 'Too many messages. Please try again later.';
      } else {
        this.formErrors.general = this.selectedLanguage === 'ml' 
          ? 'സന്ദേശം അയയ്ക്കുന്നതിൽ പരാജയപ്പെട്ടു. ദയവായി വീണ്ടും ശ്രമിക്കുക അല്ലെങ്കിൽ (813) 505-9191 വിളിക്കുക.' 
          : 'Failed to send message. Please try again or call us at (813) 505-9191.';
      }
      
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
  
  clearFieldError(field: string) {
    delete this.formErrors[field];
  }
  
  translate(key: string): string {
    return this.translationService.translate(key);
  }
  
  // Dynamic text sizing methods based on language
  getHeadingClass(size: 'xl' | 'lg' | 'md' | 'sm' = 'lg'): string {
    const sizeMap = {
      xl: this.selectedLanguage === 'ml' ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl',
      lg: this.selectedLanguage === 'ml' ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl',
      md: this.selectedLanguage === 'ml' ? 'text-lg md:text-xl' : 'text-xl md:text-2xl',
      sm: this.selectedLanguage === 'ml' ? 'text-base md:text-lg' : 'text-lg md:text-xl'
    };
    return sizeMap[size];
  }
  
  getTextClass(size: 'lg' | 'base' | 'sm' | 'xs' = 'base'): string {
    const sizeMap = {
      lg: this.selectedLanguage === 'ml' ? 'text-base' : 'text-lg',
      base: this.selectedLanguage === 'ml' ? 'text-sm' : 'text-base',
      sm: this.selectedLanguage === 'ml' ? 'text-xs' : 'text-sm',
      xs: this.selectedLanguage === 'ml' ? 'text-[10px]' : 'text-xs'
    };
    return sizeMap[size];
  }
  
  getButtonClass(): string {
    return this.selectedLanguage === 'ml' ? 'text-sm py-2 px-3' : 'text-base py-3 px-4';
  }
  
  getInitials(name: string): string {
    if (!name) return '';
    
    // Handle titles like Fr., Rev., Very Rev., etc.
    const cleanName = name.replace(/(Very Rev\.|Rev\.|Fr\.|Dr\.|Mr\.|Mrs\.|Ms\.)\s*/gi, '');
    
    const words = cleanName.trim().split(' ').filter(word => word.length > 0);
    
    if (words.length === 0) return '';
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
    
    // Take first letter of first and last word
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }
}