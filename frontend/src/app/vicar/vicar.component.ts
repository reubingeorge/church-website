import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-vicar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vicar.component.html'
})
export class VicarComponent implements OnInit {
  showContent = false;
  selectedLanguage = 'en';
  selectedImage = 0;
  activeTab: 'story' | 'journey' = 'story';
  
  // Image gallery with church/priest themed images
  vicarImages = [
    { 
      url: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=800&q=80', 
      alt: 'Holding rosary', 
      caption: 'In prayer and devotion' 
    },
    { 
      url: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&w=800&q=80', 
      alt: 'Priest offering communion', 
      caption: 'Leading the Divine Liturgy' 
    },
    { 
      url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80', 
      alt: 'Priest in vestments', 
      caption: 'Serving at the altar' 
    },
    { 
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', 
      alt: 'Priest portrait', 
      caption: 'Our beloved Vicar' 
    },
    { 
      url: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=800&q=80', 
      alt: 'Senior priest at altar', 
      caption: 'Years of faithful service' 
    }
  ];

  milestones: any[] = [];

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 100);
    this.selectedLanguage = this.translationService.getLanguage();
    this.updateMilestones();
    
    // Subscribe to language changes
    this.translationService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
      this.updateMilestones();
    });
    
    // Auto-rotate images
    setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Trigger animations on scroll
    if (!this.showContent) {
      this.showContent = true;
    }
  }

  selectImage(index: number) {
    this.selectedImage = index;
  }

  nextImage() {
    this.selectedImage = (this.selectedImage + 1) % this.vicarImages.length;
  }

  prevImage() {
    this.selectedImage = this.selectedImage === 0 ? this.vicarImages.length - 1 : this.selectedImage - 1;
  }

  setActiveTab(tab: 'story' | 'journey') {
    this.activeTab = tab;
  }

  updateMilestones() {
    this.milestones = [
      { 
        year: this.translate('vicar.milestones.first.year'), 
        title: this.translate('vicar.milestones.first.title'),
        description: this.translate('vicar.milestones.first.description')
      },
      { 
        year: this.translate('vicar.milestones.second.year'), 
        title: this.translate('vicar.milestones.second.title'),
        description: this.translate('vicar.milestones.second.description')
      },
      { 
        year: this.translate('vicar.milestones.third.year'), 
        title: this.translate('vicar.milestones.third.title'),
        description: this.translate('vicar.milestones.third.description')
      },
      { 
        year: this.translate('vicar.milestones.fourth.year'), 
        title: this.translate('vicar.milestones.fourth.title'),
        description: this.translate('vicar.milestones.fourth.description')
      },
      { 
        year: this.translate('vicar.milestones.fifth.year'), 
        title: this.translate('vicar.milestones.fifth.title'),
        description: this.translate('vicar.milestones.fifth.description')
      },
      { 
        year: this.translate('vicar.milestones.sixth.year'), 
        title: this.translate('vicar.milestones.sixth.title'),
        description: this.translate('vicar.milestones.sixth.description')
      }
    ];
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
}