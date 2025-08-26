import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService, Language } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isMenuOpen = false;
  currentLanguage: Language;

  constructor(public translationService: TranslationService) {
    this.currentLanguage = this.translationService.getLanguage();
    
    // Subscribe to language changes
    this.translationService.language$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLanguage() {
    this.translationService.toggleLanguage();
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}