import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  scrollY = 0;
  showContent = false;
  selectedLanguage = 'en';
  saintTab: 'life' | 'ministry' | 'legacy' = 'life';
  
  timeline: any[] = [];
  altars: any[] = [];

  values: any[] = [];

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 100);
    this.selectedLanguage = this.translationService.getLanguage();
    this.updateTimeline();
    this.updateAltars();
    this.updateValues();
    
    // Subscribe to language changes
    this.translationService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
      this.updateTimeline();
      this.updateAltars();
      this.updateValues();
    });
  }

  updateTimeline() {
    this.timeline = [
      { year: '1988', title: this.translate('about.ourJourney.first.title'), description: this.translate('about.ourJourney.first.description') },
      { year: '1988', title: this.translate('about.ourJourney.second.title'), description: this.translate('about.ourJourney.second.description')},
      { year: '1991', title: this.translate('about.ourJourney.third.title'), description: this.translate('about.ourJourney.third.description') },
      { year: '2004', title: this.translate('about.ourJourney.fourth.title'), description: this.translate('about.ourJourney.fourth.description') },
      { year: this.translate('about.ourJourney.fifth.year'), title: this.translate('about.ourJourney.fifth.title'), description: this.translate('about.ourJourney.fifth.description') }
    ];
  }

  updateAltars() {
    this.altars = [
      { name: this.translate('about.altars.first.name'), dedication: this.translate('about.altars.first.dedication'), description: this.translate('about.altars.first.description') },
      { name: this.translate('about.altars.second.name'), dedication: this.translate('about.altars.second.dedication'), description: this.translate('about.altars.second.description') },
      { name: this.translate('about.altars.third.name'), dedication: this.translate('about.altars.third.dedication'), description: this.translate('about.altars.third.description') },
      { name: this.translate('about.altars.fourth.name'), dedication: this.translate('about.altars.fourth.dedication'), description: this.translate('about.altars.fourth.description') },
      { name: this.translate('about.altars.fifth.name'), dedication: this.translate('about.altars.fifth.dedication'), description: this.translate('about.altars.fifth.description') }
    ];
  }

  updateValues() {
    this.values = [
      {
        title: this.translate('about.coreValues.faithWorship.title'),
        description: this.translate('about.coreValues.faithWorship.description'),
        icon: '🙏'
      },
      {
        title: this.translate('about.coreValues.communityFellowship.title'),
        description: this.translate('about.coreValues.communityFellowship.description'),
        icon: '🤝'
      },
      {
        title: this.translate('about.coreValues.serviceCharity.title'),
        description: this.translate('about.coreValues.serviceCharity.description'),
        icon: '💝'
      },
      {
        title: this.translate('about.coreValues.cultureHeritage.title'),
        description: this.translate('about.coreValues.cultureHeritage.description'),
        icon: '🎭'
      }
    ];
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollY = window.scrollY;
  }

  getParallaxOffset(speed: number): string {
    return `translateY(${this.scrollY * speed}px)`;
  }

  setSaintTab(tab: 'life' | 'ministry' | 'legacy') {
    this.saintTab = tab;
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