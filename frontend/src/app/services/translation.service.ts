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
        ml: 'സകല കഷ്ടപ്പെട്ടും ഭാരഭാരിതരും ആയിരിക്കുന്നവർ എന്റെ അടുക്കൽ വരുവിൻ; ഞാൻ നിങ്ങളെ വിശ്രമിപ്പിക്കും.'
      },
      heroBibleChapter: { en: 'Matthew', ml: 'മത്തായി' },
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
          ml: 'രാജ്യത്തിന്റെ സുവിശേഷം ലോകമെങ്ങും സാക്ഷിയായി എല്ലാ ജാതികളോടും പ്രസംഗിക്കപ്പെടും; പിന്നെ അന്ത്യം വരും.'
        },
        bibleReference: { en: 'Matthew 24:14', ml: 'മത്തായി 24:14' },
        firstParagraph: {
          en: 'Throughout generations, believers have seen the local church as the source that enables them to enlighten their spiritual and mental strength in good times and bad times. It is teaching and preaching, fellowship, and worship, that draws one closer to God. The church is where we provide faith and inspiration to our next generation to keep them as a nation "Under GOD".',
          ml: 'തലമുറകളൊടുക്കി വിശ്വാസികൾ നല്ല കാലങ്ങളിലും കഷ്ടകാലങ്ങളിലും ആത്മീയവും മാനസികവുമായ ശക്തി തെളിയിക്കുന്നതിനായി പ്രാദേശിക സഭയെ മുഖ്യകേന്ദ്രമായി കണ്ടുവരുന്നു. ദൈവത്തിന്റെ വചനബോധനം, പ്രസംഗം, സഹവാസം, ആരാധന—ഇവയിലൂടെ മനുഷ്യൻ ദൈവത്തോടടുത്തുവരുന്നു. സഭയാണ് നമ്മുടെ അടുത്ത തലമുറയ്ക്കു വിശ്വാസവും പ്രചോദനവും നൽകി അവരെ “ദൈവത്തിന്റെ കീഴിൽ” നിലനിർത്തുന്നത്.'
        },
        secondParagraph: {
          en: 'It is a community of faith, a home for individuals to express and mature in, and a place for us to renew our relationship with God and with one another. As a congregation of believers, we provide the resources and the atmosphere to enable you to maintain your relationship with God.',
          ml: 'ഇതു ഒരു വിശ്വാസ സമൂഹം ആണ്—ഒരാളുടെ ആത്മീയ ജീവിതം പ്രകടിപ്പിക്കാനും വളരാനും സാധിക്കുന്നൊരു ആത്മീയ വീട്. ദൈവത്തോടും സഹജീവികളോടും ഉള്ള ബന്ധം പുതുക്കിക്കൊണ്ടിരിക്കാൻ നമുക്കുള്ള സ്ഥലം. വിശ്വാസികളുടെ സഭയായ നാം, ദൈവത്തോടുള്ള ബന്ധം നിലനിർത്താൻ സഹായിക്കുന്ന അന്തരീക്ഷവും വിഭവങ്ങളും ഒരുക്കുന്നു.'
        }

      },
      ourParish: {
        header: { en: 'Welcome to Our Parish', ml: 'നമ്മുടെ ദേവാലയത്തിലേക്ക് സ്വാഗതം' },
        bibleVerse: {
          en: 'For God so loved the world that he gave his only begotten Son, that whoever believes in him should not perish but have everlasting life.',
          ml: 'ദൈവം ലോകത്തെ ഇങ്ങനെ സ്നേഹിച്ചു; അവന്റെ ഏകജാതനായ പുത്രനെ തന്നു; അവനിൽ വിശ്വസിക്കുന്നവൻ ഒരുവനും നശിച്ചുപോകാതെ നിത്യജീവൻ പ്രാപിക്കേണ്ടതിന്നു.'
        },
        bibleReference: { en: 'John 3:16', ml: 'യോഹന്നാൻ 3:16' },
        firstParagraph: {
          en: 'We are a small community of South Indian Malayalee families of Tampa bay area under the jurisdiction of Malankara Syrian Orthodox Church of North America. Our church opened its door in 1988 under the leadership of Rev. Father George Abraham to provide spiritual services to our community.',
          ml: 'ഞങ്ങൾ ടാമ്പാ ബേയിലെ മലയാളി കുടുംബങ്ങളുടെ ഒരു ചെറിയ ക്രൈസ്തവ സമൂഹമാണ്. 1988-ൽ സ്ഥാപിതമായ ഞങ്ങളുടെ സഭ, മലങ്കര സിറിയൻ ഓർത്തഡോക്സ് സഭയുടെ കീഴിൽ ആത്മീയ സേവനങ്ങൾ നൽകിവരുന്നു.'
        },
        secondParagraph: {
          en: 'We have an open door policy and all are welcome to worship with us, regardless of the religious group or denomination you belong to. Our prayer is for spiritual strength, preaching is for inspiration, worship is to draw one closer to God and our fellowship is to encourage respect, and to love one another.',
          ml: 'ഞങ്ങളുടെ വാതിൽ എല്ലാവർക്കും തുറന്നിരിക്കുന്നു — ഏത് മതവിഭാഗക്കാരായാലും ആരാധനയ്ക്ക് സ്വാഗതം. പ്രാർത്ഥന ശക്തിക്കായി, പ്രസംഗം പ്രചോദനത്തിനായി, ആരാധന ദൈവസാന്നിധ്യത്തിനായി, സഹവാസം സ്നേഹത്തിനും ബഹുമാനത്തിനുമായി.'
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