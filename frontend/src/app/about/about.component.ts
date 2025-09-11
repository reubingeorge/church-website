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

  values = [
    {
      title: 'Faith & Worship',
      description: 'Rooted in the ancient Syrian Orthodox tradition, we celebrate the divine liturgy with reverence and joy',
      icon: '🙏'
    },
    {
      title: 'Community & Fellowship',
      description: 'Building strong bonds through shared faith, cultural heritage, and mutual support',
      icon: '🤝'
    },
    {
      title: 'Service & Charity',
      description: 'Serving those in need through outreach programs, charitable initiatives, and community service',
      icon: '💝'
    },
    {
      title: 'Culture & Heritage',
      description: 'Preserving and celebrating our rich Malayalam cultural traditions for future generations',
      icon: '🎭'
    }
  ];

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 100);
    this.selectedLanguage = this.translationService.getLanguage();
    this.updateTimeline();
    this.updateAltars();
    
    // Subscribe to language changes
    this.translationService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
      this.updateTimeline();
      this.updateAltars();
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
}