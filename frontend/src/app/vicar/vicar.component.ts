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

  milestones = [
    { 
      year: '1978', 
      title: 'Journey to America',
      description: 'Came to America and lived with H.E. Yoohannan Mar Philexinios, beginning his spiritual journey'
    },
    { 
      year: '1981', 
      title: 'Ordained as Deacon',
      description: 'September 14 - Ordained by His Holiness Moran Mor Ignatius Zakka I Iwas'
    },
    { 
      year: '1984', 
      title: 'Ordained as Priest',
      description: 'December 8 - Ordained by H.E. Geevarghese Mar Gregorios after completing B.Th. from Logos Bible College'
    },
    { 
      year: '1984-1988', 
      title: 'Vicar of Staten Island',
      description: 'Served as Vicar of the Syrian Orthodox Church in Staten Island, New York'
    },
    { 
      year: '1988', 
      title: 'Founded Tampa Church',
      description: 'Established Mar Gregorios Syrian Orthodox Church in Tampa, Florida'
    },
    { 
      year: 'Present', 
      title: 'Continuing Service',
      description: 'Continues to serve as "Our George Achen" - beloved spiritual father of the community'
    }
  ];

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 100);
    this.selectedLanguage = this.translationService.getLanguage();
    
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
}