import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'ml';

interface Translation {
  en: string;
  ml: string;
}

interface Translations {
  [key: string]: Translation | any;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<Language>('en');
  public language$ = this.currentLanguage.asObservable();
  public language = signal<Language>('en');

  private translations: Translations = {
    header: {
      title: {
        en: 'Mar Gregorios Syrian Orthodox Church',
        ml: 'മാർ ഗ്രിഗോറിയോസ് സുറിയാനി ഓർത്തഡോക്സ് പള്ളി'
      },

      nav: {
        home: { en: 'Home', ml: 'ഹോം' },
        services: { en: 'Services', ml: 'ശുശ്രൂഷകൾ' },
        events: { en: 'Events', ml: 'പരിപാടികൾ' },
        sermons: { en: 'Sermons', ml: 'പ്രസംഗങ്ങൾ' },
        about: { en: 'About', ml: 'ഞങ്ങളെക്കുറിച്ച്' },
        contact: { en: 'Contact', ml: 'ബന്ധപ്പെടുക' },
        signIn: { en: 'Sign In', ml: 'സൈൻ ഇൻ' }
      }
    },
    home: {
      heroQuote: {
        en: 'Come to me, all who labor and are heavy laden, and I will give you rest.',
        ml: 'അദ്ധ്വാനിക്കുന്നവരും ഭാരം ചുമക്കുന്നവരും ആയുള്ളോരേ, എല്ലാവരും എന്റെ അടുക്കൽ വരുവിൻ; ഞാൻ നിങ്ങളെ ആശ്വസിപ്പിക്കും.'
      },
      heroBibleChapter: { en: 'Matthew 11:28', ml: 'മത്തായി 11:28' },
      serviceTime: {
        en: 'Sunday Service Time',
        ml: 'ഞായറാഴ്ച ശുശ്രൂഷ സമയം'
      },
      morning: { en: 'Morning Prayer', ml: 'പ്രഭാത പ്രാർത്ഥന' },
      evening: { en: 'Evening Prayer', ml: 'സായാഹ്ന പ്രാർത്ഥന' },
      holyQurbana: { en: 'Holy Qurbana', ml: 'വിശുദ്ധ കുർബാന' },
      sundaySchool: { en: 'Sunday School', ml: 'ഞായറാഴ്ച സ്കൂൾ' },
      ourMission: {
        header: { en: 'Our Mission', ml: 'നമ്മുടെ ദൗത്യം' },
        bibleVerse: {
          en: 'And this gospel regarding the kingdom will be preached throughout the whole world, as a testimony to all nations; and then the end will come.',
          ml: 'രാജ്യത്തിന്റെ ഈ സുവിശേഷം സകലജാതികൾക്കും സാക്ഷ്യമായി ഭൂലോകത്തിൽ ഒക്കെയും പ്രസംഗിക്കപ്പെടും; അപ്പോൾ അവസാനം വരും.'
        },
        bibleReference: { en: 'Matthew 24:14', ml: 'മത്തായി 24:14' },
        firstParagraph: {
          en: 'Throughout generations, believers have seen the local church as the source that enables them to enlighten their spiritual and mental strength in good times and bad times. It is teaching and preaching, fellowship, and worship, that draws one closer to God. The church is where we provide faith and inspiration to our next generation to keep them as a nation "Under GOD".',
          ml: 'തലമുറകളായി, വിശ്വാസികൾ പ്രാദേശിക സഭയെ നല്ല കാലത്തും ദുഷ്‌കാലത്തും തങ്ങളുടെ ആത്മീയവും മാനസികവുമായ ശക്തി പ്രകാശിപ്പിക്കാൻ സഹായിക്കുന്ന ഉറവിടമായി കണ്ടിട്ടുണ്ട്. ഉപദേശവും പ്രസംഗവും, കൂട്ടായ്മയും ആരാധനയും - ഇവയാണ് ഒരാളെ ദൈവത്തോട് അടുപ്പിക്കുന്നത്. "ദൈവത്തിൻ കീഴിലുള്ള" ഒരു ജനതയായി നമ്മുടെ അടുത്ത തലമുറയെ നിലനിർത്താൻ വിശ്വാസവും പ്രചോദനവും നൽകുന്നത് സഭയിലാണ്.'
        },
        secondParagraph: {
          en: 'It is a community of faith, a home for individuals to express and mature in, and a place for us to renew our relationship with God and with one another. As a congregation of believers, we provide the resources and the atmosphere to enable you to maintain your relationship with God.',
          ml: 'ഇത് വിശ്വാസത്തിന്റെ ഒരു സമൂഹമാണ്, വ്യക്തികൾക്ക് തങ്ങളെ പ്രകടിപ്പിക്കാനും പക്വത പ്രാപിക്കാനുമുള്ള ഒരു ഭവനമാണ്, ദൈവത്തോടും പരസ്പരവുമുള്ള നമ്മുടെ ബന്ധം പുതുക്കാനുള്ള ഒരു സ്ഥലമാണ്. വിശ്വാസികളുടെ ഒരു സഭ എന്ന നിലയിൽ, ദൈവത്തോടുള്ള നിങ്ങളുടെ ബന്ധം നിലനിർത്താൻ സഹായിക്കുന്ന വിഭവങ്ങളും അന്തരീക്ഷവും ഞങ്ങൾ നൽകുന്നു.'
        }

      },
      ourParish: {
        header: { en: 'Welcome to Our Parish', ml: 'നമ്മുടെ ദേവാലയത്തിലേക്ക് സ്വാഗതം' },
        bibleVerse: {
          en: 'For God so loved the world that he gave his only begotten Son, that whoever believes in him should not perish but have everlasting life.',
          ml: 'തന്റെ ഏകജാതനായ പുത്രനിൽ വിശ്വസിക്കുന്ന ഏവനും നശിച്ചുപോകാതെ നിത്യജീവൻ പ്രാപിക്കേണ്ടതിന്നു ദൈവം അവനെ നല്കുവാൻ തക്കവണ്ണം ലോകത്തെ സ്നേഹിച്ചു.'
        },
        bibleReference: { en: 'John 3:16', ml: 'യോഹന്നാൻ 3:16' },
        firstParagraph: {
          en: 'We are a small community of South Indian Malayalee families of Tampa bay area under the jurisdiction of Malankara Syrian Orthodox Church of North America. Our church opened its door in 1988 under the leadership of Rev. Father George Abraham to provide spiritual services to our community.',
          ml: 'ഞങ്ങൾ വടക്കേ അമേരിക്കയിലെ മലങ്കര സുറിയാനി ഓർത്തഡോക്സ് സഭയുടെ അധികാരപരിധിയിൽ വരുന്ന ടാമ്പാ ബേ പ്രദേശത്തെ ദക്ഷിണേന്ത്യൻ മലയാളി കുടുംബങ്ങളുടെ ഒരു ചെറിയ സമൂഹമാണ്. ഞങ്ങളുടെ സമുദായത്തിന് ആത്മീയ ശുശ്രൂഷകൾ നൽകുന്നതിനായി 1988-ൽ റവ. ഫാദർ ജോർജ് എബ്രഹാമിന്റെ നേതൃത്വത്തിൽ ഞങ്ങളുടെ പള്ളി അതിന്റെ വാതിലുകൾ തുറന്നു.'
        },
        secondParagraph: {
          en: 'We have an open door policy and all are welcome to worship with us, regardless of the religious group or denomination you belong to. Our prayer is for spiritual strength, preaching is for inspiration, worship is to draw one closer to God and our fellowship is to encourage respect, and to love one another.',
          ml: 'ഞങ്ങൾക്ക് തുറന്ന വാതിൽ നയമുണ്ട്, നിങ്ങൾ ഏത് മതവിഭാഗത്തിലോ സഭാവിഭാഗത്തിലോ പെട്ടവരായാലും എല്ലാവരെയും ഞങ്ങളോടൊപ്പം ആരാധിക്കാൻ സ്വാഗതം ചെയ്യുന്നു. ഞങ്ങളുടെ പ്രാർത്ഥന ആത്മീയ ശക്തിക്കുവേണ്ടിയാണ്, പ്രസംഗം പ്രചോദനത്തിനാണ്, ആരാധന ഒരാളെ ദൈവത്തോട് അടുപ്പിക്കാനാണ്, ഞങ്ങളുടെ കൂട്ടായ്മ പരസ്പര ബഹുമാനം പ്രോത്സാഹിപ്പിക്കാനും അന്യോന്യം സ്നേഹിക്കാനുമാണ്.'
        }
        
      }
    },
    common: {
      readMore: { en: 'Read More', ml: 'കൂടുതൽ വായിക്കുക' },
      submit: { en: 'Submit', ml: 'സമർപ്പിക്കുക' },
      cancel: { en: 'Cancel', ml: 'റദ്ദാക്കുക' },
      save: { en: 'Save', ml: 'സംരക്ഷിക്കുക' },
      edit: { en: 'Edit', ml: 'എഡിറ്റ് ചെയ്യുക' },
      delete: { en: 'Delete', ml: 'ഇല്ലാതാക്കുക' },
      loading: { en: 'Loading...', ml: 'ലോഡ് ചെയ്യുന്നു...' },
      error: { en: 'Error', ml: 'പിശക്' },
      success: { en: 'Success', ml: 'വിജയം' }
    },
    footer: {
      quickLinks: { en: 'Quick Links', ml: 'ദ്രുത ലിങ്കുകൾ' },
      connectWithUs: { en: 'Connect With Us', ml: 'ഞങ്ങളുമായി ബന്ധപ്പെടുക' },
      address: { en: 'Address', ml: 'വിലാസം' },
      phone: { en: 'Phone', ml: 'ഫോൺ' },
      email: { en: 'Email', ml: 'ഇമെയിൽ' },
      allRightsReserved: { en: 'All rights reserved', ml: 'എല്ലാ അവകാശങ്ങളും സുരക്ഷിതം' }
    }
  };

  constructor() {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ml')) {
      this.currentLanguage.next(savedLanguage);
      this.language.set(savedLanguage);
    }
  }

  setLanguage(language: Language): void {
    this.currentLanguage.next(language);
    this.language.set(language);
    localStorage.setItem('preferred-language', language);
  }

  getLanguage(): Language {
    return this.currentLanguage.value;
  }

  toggleLanguage(): void {
    const newLanguage = this.currentLanguage.value === 'en' ? 'ml' : 'en';
    this.setLanguage(newLanguage);
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations;
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    if (value && typeof value === 'object' && value[this.currentLanguage.value]) {
      return value[this.currentLanguage.value];
    }
    
    return key; // Return the key if translation not found
  }

  // Method to translate dynamic content (for future API integration)
  async translateText(text: string, targetLang?: Language): Promise<string> {
    // This is where you would integrate with Google Translate API
    // For now, return the original text
    // In production, you would make an API call to your backend
    // which would then call Google Translate API
    return text;
  }

  // Get all translations for a section
  getTranslations(section: string): any {
    return this.translations[section] || {};
  }
}