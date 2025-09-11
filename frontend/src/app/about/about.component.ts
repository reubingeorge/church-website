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
  
  timeline = [
    { year: '1988', title: 'Church Foundation', description: 'Rev. Fr. George Abraham relocated from Staten Island, NY to Tampa and organized our church. First services began at Orange River Estate clubhouse in Temple Terrace' },
    { year: '1988', title: 'Incorporation', description: 'Incorporated as Mar Gregorios Syrian Orthodox Church, dedicated to Mor Gregorios of Parumala with affiliation to the Syrian Orthodox Church of North America' },
    { year: '1991', title: 'First Property', description: 'February 7 - Purchased a small house and two acres of land, converting the house into a beautiful chapel for regular Sunday services' },
    { year: '2004', title: 'New Church Building', description: 'Built the church with five altars as envisioned by Rev. Fr. George Abraham, providing adequate space for our growing congregation' },
    { year: 'Present', title: 'Continued Growth', description: 'Serving the Malayalam Syrian Orthodox community in Tampa Bay with dedication and faith' }
  ];

  altars = [
    { name: 'Main Altar', dedication: 'Mor Gregorios of Malankara', description: 'Our primary altar for divine liturgy' },
    { name: 'Second Altar', dedication: 'St. Mary', description: 'Dedicated to the Mother of our Lord' },
    { name: 'Third Altar', dedication: 'St. George', description: 'Honoring the Martyr' },
    { name: 'Fourth Altar', dedication: 'Patriarch St. Ignatius Elias III', description: 'Named after the Patriarch' },
    { name: 'Fifth Altar', dedication: 'St. Basalios Eldo', description: 'Dedicated to the Saint' }
  ];

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
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrollY = window.scrollY;
  }

  getParallaxOffset(speed: number): string {
    return `translateY(${this.scrollY * speed}px)`;
  }
}