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
        signIn: { en: 'Sign In', ml: 'സൈൻ ഇൻ' },
        ourVicar: { en: 'Our Vicar', ml: 'നമ്മുടെ അച്ചൻ'}
      }
    },
    home: {
      heroQuote: {
        en: 'Come to me, all who labor and are heavy laden, and I will give you rest.',
        ml: 'അദ്ധ്വാനിക്കുന്നവരും ഭാരം ചുമക്കുന്നവരും ആയുള്ളോരേ, എല്ലാവരും എന്റെ അടുക്കൽ വരുവിൻ; ഞാൻ നിങ്ങളെ ആശ്വസിപ്പിക്കും.'
      },
      heroBibleChapter: { en: 'Matthew 11:28', ml: 'മത്തായി 11:28' },
      serviceTime: {
        en: 'Service Time',
        ml: 'ആരാധന സമയം'
      },
      morning: { en: 'Morning Prayer', ml: 'പ്രഭാത പ്രാർത്ഥന' },
      evening: { en: 'Evening Prayer', ml: 'സായാഹ്ന പ്രാർത്ഥന' },
      holyQurbana: { en: 'Holy Qurbana', ml: 'വിശുദ്ധ കുർബാന' },
      sundaySchool: { en: 'Sunday School', ml: 'ഞായറാഴ്ച സ്കൂൾ' },
      sundaySchoolSub: { en: 'After Sunday Service', ml: 'ഞായറാഴ്ച ശുശ്രൂഷയ്ക്കു ശേഷം' },
      upcomingEvents: { en: 'Upcoming Events', ml: 'വരാനിരിക്കുന്ന ശുശ്രൂഷകളും പരിപാടികളും' },
      visitUs: { en: 'Visit Us', ml: 'ഞങ്ങളെ സന്ദർശിക്കുക' },
      contactInfo: { en: 'Contact Information', ml: 'ബന്ധപ്പെടുന്നതിനുള്ള വിവരങ്ങൾ' },
      address:{ en: 'Address', ml: 'വിലാസം' },
      ourMission: {
        header: { en: 'Our Mission', ml: 'നമ്മുടെ ദൗത്യം' },
        bibleVerse: {
          en: 'And this gospel regarding the kingdom will be preached throughout the whole world, as a testimony to all nations; and then the end will come.',
          ml: 'രാജ്യത്തിന്റെ ഈ സുവിശേഷം സകലജാതികൾക്കും സാക്ഷ്യമായി ഭൂലോകത്തിൽ ഒക്കെയും പ്രസംഗിക്കപ്പെടും; അപ്പോൾ അവസാനം വരും.'
        },
        bibleReference: { en: 'Matthew 24:14', ml: 'മത്തായി 24:14' },
        firstParagraph: {
          en: 'Throughout generations, believers have seen the local church as the source that enables them to enlighten their spiritual and mental strength in good times and bad times. It is teaching and preaching, fellowship, and worship, that draws one closer to God. The church is where we provide faith and inspiration to our next generation to keep them as a nation "Under GOD".',
          ml: 'തലമുറകളായി വിശ്വാസികൾ പ്രാദേശിക സഭയെ നല്ല കാലത്തും ദുഷ്‌കാലത്തും തങ്ങളുടെ ആത്മീയവും മാനസികവുമായ ശക്തി പ്രകാശിപ്പിക്കാൻ സഹായിക്കുന്ന ഉറവിടമായി കണ്ടുവരുന്നു. ഉപദേശവും പ്രസംഗവും, കൂട്ടായ്മയും ആരാധനയും - ഇവയാണ് നമ്മെ ദൈവത്തോട് അടുപ്പിക്കുന്നത്. അടുത്ത തലമുറയെ "ദൈവത്തിൻ കീഴിലുള്ള" ഒരു ജനതയായി നിലനിർത്താൻ വിശ്വാസവും പ്രചോദനവും നൽകുന്നത് സഭയിലൂടെയാണ്.'
        },
        secondParagraph: {
          en: 'It is a community of faith, a home for individuals to express and mature in, and a place for us to renew our relationship with God and with one another. As a congregation of believers, we provide the resources and the atmosphere to enable you to maintain your relationship with God.',
          ml: 'ഇത് ഒരു വിശ്വാസ സമൂഹമാണ്, വ്യക്തികൾക്ക് തങ്ങളെ പ്രകടിപ്പിക്കാനും ആത്മീയമായി വളരാനുമുള്ള ഗൃഹവും, ദൈവത്തോടും പരസ്പരവുമുള്ള നമ്മുടെ ബന്ധം പുതുക്കാനുള്ള സ്ഥലവുമാണ്. വിശ്വാസികളുടെ സഭയെന്ന നിലയിൽ, ദൈവവുമായുള്ള നിങ്ങളുടെ ബന്ധം നിലനിർത്താൻ ആവശ്യമായ സൗകര്യങ്ങളും അനുകൂലമായ അന്തരീക്ഷവും ഞങ്ങൾ ഒരുക്കുന്നു.'
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
          ml: 'ഞങ്ങൾ വടക്കേ അമേരിക്കയിലെ മലങ്കര സുറിയാനി ഓർത്തഡോക്സ് സഭയുടെ അധികാരപരിധിയിൽ വരുന്ന, ടാമ്പാ ബേ പ്രദേശത്തെ ദക്ഷിണേന്ത്യൻ മലയാളി കുടുംബങ്ങളുടെ ഒരു ചെറിയ സമൂഹമാണ്. 1988-ൽ റവ. ഫാദർ ജോർജ് എബ്രഹാമിന്റെ നേതൃത്വത്തിൽ ഞങ്ങളുടെ സമുദായത്തിന് ആത്മീയ ശുശ്രൂഷകൾ നൽകുന്നതിനായി നമ്മുടെ സഭ അതിന്റെ വാതിലുകൾ തുറന്നു.'
        },
        secondParagraph: {
          en: 'We have an open door policy and all are welcome to worship with us, regardless of the religious group or denomination you belong to. Our prayer is for spiritual strength, preaching is for inspiration, worship is to draw one closer to God and our fellowship is to encourage respect, and to love one another.',
          ml: 'ഞങ്ങൾക്ക് തുറന്ന വാതിൽ നയമാണുള്ളത്, നിങ്ങൾ ഏത് മതവിഭാഗത്തിലോ സഭാവിഭാഗത്തിലോ പെട്ടവരായാലും ഞങ്ങളോടൊപ്പം ആരാധിക്കാൻ എല്ലാവർക്കും സ്വാഗതം. ആത്മീയ ശക്തിക്കായാണ് ഞങ്ങളുടെ പ്രാർത്ഥന, പ്രചോദനത്തിനായാണ് പ്രസംഗം, ദൈവത്തോട് അടുപ്പിക്കാനാണ് ആരാധന, പരസ്പര ബഹുമാനം വളർത്താനും അന്യോന്യം സ്നേഹിക്കാനുമാണ് നമ്മുടെ കൂട്ടായ്മ.'
        }
        
      }
    },
    about:{
      heroQuote: {
        en: 'Established 1988 • Tampa, Florida',
        ml: '1988-ൽ സ്ഥാപിതം • ടാമ്പ, ഫ്ലോറിഡ'
      },
      ourJourney: {
        first:{
          title: { en: 'Church Foundation', ml: 'പള്ളി സ്ഥാപനം' },
          description:{
            en: 'Rev. Fr. George Abraham relocated from Staten Island, NY to Tampa and organized our church. First services began at Orange River Estate clubhouse in Temple Terrace', 
            ml: 'റവ. ഫാ. ജോർജ് എബ്രഹാം സ്റ്റാറ്റൻ ഐലൻഡ്, ന്യൂയോർക്കിൽ നിന്ന് ടാമ്പയിലേക്ക് താമസം മാറ്റി നമ്മുടെ പള്ളി സംഘടിപ്പിച്ചു. ടെമ്പിൾ ടെറസിലെ ഓറഞ്ച് റിവർ എസ്റ്റേറ്റ് ക്ലബ്ബ്ഹൗസിൽ ആദ്യ ശുശ്രൂഷകൾ ആരംഭിച്ചു'}
        },
        second:{
          title: { en: 'Incorporation', ml: 'സംഘടന രജിസ്ട്രേഷൻ' },
          description:{
            en: 'Incorporated as Mar Gregorios Syrian Orthodox Church, dedicated to Mor Gregorios of Parumala with affiliation to the Syrian Orthodox Church of North America',
            ml: 'മാർ ഗ്രിഗോറിയോസ് സുറിയാനി ഓർത്തഡോക്സ് പള്ളി എന്ന പേരിൽ രജിസ്റ്റർ ചെയ്തു. പരുമല തിരുമേനിക്ക് സമർപ്പിതം. നോർത്ത് അമേരിക്കൻ സുറിയാനി ഓർത്തഡോക്സ് സഭയുമായി അഫിലിയേഷൻ'}
        },
        third:{
          title: { en: 'First Property', ml: 'ആദ്യ സ്ഥലം' },
          description:{
            en: 'February 7 - Purchased a small house and two acres of land, converting the house into a beautiful chapel for regular Sunday services',
            ml: 'ഫെബ്രുവരി 7 - ഒരു ചെറിയ വീടും രണ്ട് ഏക്കർ സ്ഥലവും വാങ്ങി. വീട് മനോഹരമായ ഒരു ചാപ്പലാക്കി മാറ്റി എല്ലാ ഞായറാഴ്ചയും കുർബാന നടത്തി'}
        },
        fourth:{
          title: { en: 'New Church Building', ml: 'പുതിയ പള്ളി' },
          description:{
            en: 'Built the church with five altars as envisioned by Rev. Fr. George Abraham, providing adequate space for our growing congregation', 
            ml: 'റവ. ഫാ. ജോർജ് എബ്രഹാമിന്റെ സങ്കൽപ്പത്തിൽ അഞ്ച് മദ്ബഹകളോടെ പള്ളി പണിതു. വളരുന്ന നമ്മുടെ സമൂഹത്തിന് മതിയായ സ്ഥലം ഒരുക്കി'}
        },
        fifth:{
          year: {en: 'Present', ml: 'ഇന്ന്'},
          title: { en: 'Continued Growth', ml: 'തുടർച്ചയായ വളർച്ച' },
          description:{
            en: 'Serving the Malayalam Syrian Orthodox community in Tampa Bay with dedication and faith', 
            ml: 'ടാമ്പാ ബേയിലെ മലയാളി സുറിയാനി ഓർത്തഡോക്സ് സമൂഹത്തെ സമർപ്പണത്തോടും വിശ്വാസത്തോടും കൂടി സേവിക്കുന്നു'}
        }
      },
      altars: {
        first: {
          name: { en: 'Main Altar', ml: 'പ്രധാന മദ്ബഹ' },
          dedication: { en: 'Mor Gregorios of Malankara', ml: 'മലങ്കര ഗ്രിഗോറിയോസ് തിരുമേനി' },
          description: { en: 'Our primary altar for divine liturgy', ml: 'നമ്മുടെ പ്രധാന മദ്ബഹ, വിശുദ്ധ കുർബാനയ്ക്കായി' }
        },
        second: {
          name: { en: 'Second Altar', ml: 'രണ്ടാം മദ്ബഹ' },
          dedication: { en: 'St. Mary', ml: 'പരിശുദ്ധ മറിയം' },
          description: { en: 'Dedicated to the Mother of our Lord', ml: 'നമ്മുടെ കർത്താവിന്റെ മാതാവിന് സമർപ്പിതം' }
        },
        third: {
          name: { en: 'Third Altar', ml: 'മൂന്നാം മദ്ബഹ' },
          dedication: { en: 'St. George', ml: 'വിശുദ്ധ ഗീവർഗ്ഗീസ്' },
          description: { en: 'Honoring the Martyr', ml: 'സഹദയെ ബഹുമാനിക്കുന്നു' }
        },
        fourth: {
          name: { en: 'Fourth Altar', ml: 'നാലാം മദ്ബഹ' },
          dedication: { en: 'Patriarch St. Ignatius Elias III', ml: 'പാത്രിയർക്കീസ് മാർ ഇഗ്നാത്തിയോസ് ഏലിയാസ് മൂന്നാമൻ' },
          description: { en: 'Named after the Patriarch', ml: 'ബാവയുടെ നാമത്തിൽ' }
        },
        fifth: {
          name: { en: 'Fifth Altar', ml: 'അഞ്ചാം മദ്ബഹ' },
          dedication: { en: 'St. Basalios Eldo', ml: 'എൽദോ ബാവ' },
          description: { en: 'Dedicated to the Saint', ml: 'പുണ്യവാനു സമർപ്പിതം' }
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