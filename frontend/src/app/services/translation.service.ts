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
        ml: ' '
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
        mainDescription: { 
          en: 'In 2004, our church was built with five altars as envisioned by Rev. Fr. George Abraham, each dedicated to significant figures in our faith:', 
          ml: '2004-ൽ റവ. ഫാ. ജോർജ് എബ്രഹാമിന്റെ സങ്കൽപ്പത്തിൽ അഞ്ച് മദ്ബഹകളോടെ നമ്മുടെ പള്ളി പണിതു. ഓരോന്നും നമ്മുടെ വിശ്വാസത്തിലെ പ്രധാന വ്യക്തികൾക്ക് സമർപ്പിച്ചു:' },
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
      },
      ourEponym: {
        quickFactsCard:{
          quickfacts: { en: 'Quick Facts', ml: 'പെട്ടെന്നുള്ള വിവരങ്ങൾ' },
          born: { en: 'Born', ml: 'ജനനം' },
          bornDate: { en: '1848, Mulanthuruthy, Kerala', ml: '1848, മുളന്തുരുത്തി, കേരളം' },
          ordainedBishop: { en: 'Ordained Bishop', ml: 'മെത്രാൻ പട്ടം'},
          ordainedBishopDate: { en: 'December 10, 1876', ml: '1876 ഡിസംബർ 10' },
          heavenlyAbode: { en: 'Heavenly Abode', ml: 'സ്വർഗ്ഗാരോഹണം' },
          heavenlyAbodeDate: { en: 'November 2, 1902', ml: '1902 നവംബർ 2' },
          canonized: { en: 'Canonized', ml: 'വിശുദ്ധ പദവി' },
          canonizedText1: { en: '2 November 1947 by Baselios Geevarghese II of Malankara Orthodox Syrian Church', ml: '1947 നവംബർ 2 - മലങ്കര ഓർത്തഡോക്സ് സുറിയാനി സഭയുടെ ബസേലിയോസ് ഗീവർഗീസ് രണ്ടാമൻ' },
          canonizedText2: {en: '20 October 1987 by Ignatius Zakka I of Syriac Orthodox Church', ml: '1987 ഒക്ടോബർ 20 - സുറിയാനി ഓർത്തഡോക്സ് സഭയുടെ ഇഗ്നാത്തിയോസ് സക്കാ ഒന്നാമൻ' }
        },
        header: { en: 'Our Eponym', ml: 'നമ്മുടെ പള്ളിയുടെ നാമകാരണം' },
        earlyLife: {
          tabTitle: {en: 'Early Life', ml: 'ആദ്യകാല ജീവിതം'},
          header1: { en: 'Early Life & Calling', ml: 'ആദ്യകാല ജീവിതവും വിളിയും' },
          description1: { 
            firstParagraph: { 
              en: 'Geevarghese was born into the Chathuruthy family in Mulanthuruthy, Kerala. His parents, Kochu Mathai and Mariam, had three sons and two daughters. After the birth of the fifth child, Ipeora, Mariam died.' , 
              ml: 'ഗീവർഗീസ് കേരളത്തിലെ മുളന്തുരുത്തിയിലുള്ള ചാത്തുരുത്തി കുടുംബത്തിൽ ജനിച്ചു. അദ്ദേഹത്തിന്റെ മാതാപിതാക്കളായ കൊച്ചു മത്തായിക്കും മറിയത്തിനും മൂന്ന് ആൺമക്കളും രണ്ട് പെൺമക്കളും ഉണ്ടായിരുന്നു. അഞ്ചാമത്തെ കുട്ടിയായ ഇപ്പേറയുടെ ജനനത്തിനു ശേഷം മറിയം മരിച്ചു.' },
            secondParagraph: { 
              en: 'Geevarghese was educated by Malpan (teacher) Geevarghese of Chathuruthy, Kochu, and was ordained as a deacon on September 14, 1859 at the age of ten.', 
              ml: 'ഗീവർഗീസ് ചാത്തുരുത്തി കൊച്ചു മല്പാൻ ഗീവർഗീസിൽ നിന്നും വിദ്യാഭ്യാസം നേടി. 1859 സെപ്റ്റംബർ 14-ന് പത്താം വയസ്സിൽ ശെമ്മാശനായി അഭിഷേകം ചെയ്യപ്പെട്ടു.' }
          },
          header2: { en: 'Divine Vision', ml: 'ദൈവിക കാഴ്ച' },
          description2:{
            firstParagraph: {
              en: 'When Malpan became seriously ill with smallpox, Deacon Geevarghese was the only one who stayed and took care of him. After Malpan\'s death, Geevarghese became ill. During this time, he had a vision of St. Mary descending to console him and exhorting him to dedicate the rest of his life to the Lord. Very soon, the deacon recovered.',
              ml: 'മല്പാൻ വസൂരി ബാധിച്ച് ഗുരുതരാവസ്ഥയിലായപ്പോൾ, ശെമ്മാശൻ ഗീവർഗീസ് മാത്രമാണ് അദ്ദേഹത്തിന്റെ കൂടെ നിന്ന് ശുശ്രൂഷിച്ചത്. മല്പാന്റെ മരണശേഷം ഗീവർഗീസിനും അസുഖം ബാധിച്ചു. ഈ സമയത്ത് പരിശുദ്ധ മറിയം ഇറങ്ങിവന്ന് തന്നെ ആശ്വസിപ്പിക്കുകയും ബാക്കി ജീവിതം കർത്താവിന് സമർപ്പിക്കാൻ ഉപദേശിക്കുകയും ചെയ്യുന്ന ഒരു ദർശനം അദ്ദേഹത്തിനുണ്ടായി. വളരെ പെട്ടെന്ന് തന്നെ ശെമ്മാശൻ സുഖം പ്രാപിച്ചു.'
            }
          },
          header3: { en: 'Ordination', ml: 'കൈവെപ്പ്' },
          description3: {
            firstParagraph: {
              en: 'At the age of 18 in 1865, he was ordained as a priest. Joseph Mar Dionysios raised him to the order of monks (Ramban) in 1872. The Patriarch of Antioch consecrated him as Mar Gregorios on December 10, 1876, at Paravoor Church, Kerala. Because of his age, everybody called him "Kochu Thirumeni" (Young Bishop).',
              ml: '1865-ൽ 18-ാം വയസ്സിൽ അദ്ദേഹം കശീശയായി അഭിഷേകം ചെയ്യപ്പെട്ടു. 1872-ൽ യൂസഫ് മാർ ദിവന്നാസിയോസ് അദ്ദേഹത്തെ റമ്പാൻ പദവിയിലേക്ക് ഉയർത്തി. 1876 ഡിസംബർ 10-ന് കേരളത്തിലെ പരവൂർ പള്ളിയിൽ വച്ച് അന്ത്യോക്യാ പാത്രിയർക്കീസ് അദ്ദേഹത്തെ മാർ ഗ്രിഗോറിയോസായി അഭിഷേകം ചെയ്തു. പ്രായം കുറവായതിനാൽ എല്ലാവരും അദ്ദേഹത്തെ "കൊച്ചു തിരുമേനി" എന്ന് വിളിച്ചു.'
            }
          }
        },
        ministry: { 
          tabTitle: {en: 'Ministry', ml: 'ശുശ്രൂഷ' },
          mainHeader: { en: 'Saintly Life & Service', ml: 'പുണ്യ ജീവിതവും ശുശ്രൂഷയും' },
          header1: { en: 'Daily Spiritual Discipline', ml: 'നിത്യ ആത്മീയ ശീലം' },
          description1: { 
            firstParagraph: { 
              en: 'At Parumala Seminary, he led an ascetic life. He woke up at 4am for prayer until 5am, taught deacons from 6am to 7am, followed by prayer and breakfast. From 9am to 11am he taught again, handled administrative matters from 11am to noon, then prayer and lunch.',
              ml: 'പരുമല സെമിനാരിയിൽ അദ്ദേഹം തപസ്സ് നിറഞ്ഞ ജീവിതം നയിച്ചു. പുലർച്ചെ 4 മണിക്ക് എഴുന്നേറ്റ് 5 മണി വരെ പ്രാർത്ഥിച്ചു. 6 മുതൽ 7 മണി വരെ ശെമ്മാശന്മാരെ പഠിപ്പിച്ചു. തുടർന്ന് പ്രാർത്ഥനയും പ്രഭാത ഭക്ഷണവും. 9 മുതൽ 11 മണി വരെ വീണ്ടും പഠിപ്പിച്ചു. 11 മുതൽ ഉച്ചവരെ ഭരണപരമായ കാര്യങ്ങൾ കൈകാര്യം ചെയ്തു. പിന്നീട് പ്രാർത്ഥനയും ഉച്ചഭക്ഷണവും.'
            },
            secondParagraph: { 
              en: 'After rest until 1:30pm, he taught till 4pm with prayer in between. From 4pm to 5:30pm, he handled administrative duties. After evening prayers and supper, he taught Bible to the deacons. After complining at 9pm, he would let the deacons go to bed, but continued praying until midnight.',
              ml: '1:30 വരെ വിശ്രമത്തിനു ശേഷം, ഇടയ്ക്ക് പ്രാർത്ഥനയോടെ 4 മണി വരെ പഠിപ്പിച്ചു. 4 മുതൽ 5:30 വരെ ഭരണപരമായ കർത്തവ്യങ്ങൾ നിർവഹിച്ചു. സന്ധ്യാ പ്രാർത്ഥനയ്ക്കും അത്താഴത്തിനും ശേഷം ശെമ്മാശന്മാർക്ക് ബൈബിൾ പഠിപ്പിച്ചു. രാത്രി 9 മണിക്ക് കൂത്തമ്മയ്ക്കു ശേഷം ശെമ്മാശന്മാരെ ഉറങ്ങാൻ അയച്ചു. എന്നാൽ അദ്ദേഹം അർദ്ധരാത്രി വരെ പ്രാർത്ഥന തുടർന്നു.'
            },
            thirdParagraph: { 
              en: 'On Wednesdays, Fridays, and Lenten days, he would fast till evening. Besides, he observed his own special fasts.',
              ml: 'ബുധൻ, വെള്ളി ആഴ്ചകളിലും നോമ്പുകാലത്തും വൈകുന്നേരം വരെ ഉപവസിച്ചു. കൂടാതെ, അദ്ദേഹം സ്വന്തം പ്രത്യേക ഉപവാസങ്ങളും അനുഷ്ഠിച്ചു.'
            }
          },
          header2: { en: 'Ministry of Healing', ml: 'ആരോഗ്യ ശുശ്രൂഷ'},
          description2:{
            firstParagraph: {
              en: 'People came from far and near to seek his blessings and paternal advice. In his own words: <em class="italic text-primary-700">"Prayer brings truth, religious faith, honesty and respect among the people."</em>',
              ml: 'ദൂരെയും സമീപവും നിന്ന് ആളുകൾ അദ്ദേഹത്തിന്റെ അനുഗ്രഹവും പിതൃവത്സലമായ ഉപദേശവും തേടി വന്നു. അദ്ദേഹത്തിന്റെ സ്വന്തം വാക്കുകളിൽ: <em class="italic text-primary-700">"പ്രാർത്ഥന ജനങ്ങളിൽ സത്യവും മതവിശ്വാസവും സത്യസന്ധതയും ബഹുമാനവും കൊണ്ടുവരുന്നു."</em>'
            }
          },
          header3: {en: 'Final Days' , ml: 'അവസാന ദിനങ്ങൾ'},
          description3:{
            firstParagraph: {
              en:'St. Gregorios became sick when he returned from Veeyapuram Church after blessing a marriage. Even from the beginning of his illness, he knew that he was in his last days. Although he grew weaker day by day, his face shone brighter and brighter. ',
              ml: 'വീയപുരം പള്ളിയിൽ ഒരു വിവാഹം ആശീർവദിച്ച് തിരിച്ചുവന്നപ്പോൾ മാർ ഗ്രിഗോറിയോസിന് അസുഖം ബാധിച്ചു. അസുഖത്തിന്റെ തുടക്കം മുതൽ തന്നെ തന്റെ അന്ത്യനാളുകളിലാണെന്ന് അദ്ദേഹത്തിന് അറിയാമായിരുന്നു. ദിനംപ്രതി ദുർബലനായെങ്കിലും അദ്ദേഹത്തിന്റെ മുഖം കൂടുതൽ കൂടുതൽ പ്രകാശിച്ചു.'
            },
            secondParagraph: {
              en: 'On November 2, 1902, at midnight, he was ready to meet his heavenly father. He left his earthly abode and flew to eternity. ',
              ml: '1902 നവംബർ 2-ന് അർദ്ധരാത്രിയിൽ പരമപിതാവിന്റെ സന്നിധിയിലേക്ക് യാത്രയായി. ഈ ലോകം വിട്ട് നിത്യവിശ്രമത്തിലേക്ക് പ്രവേശിച്ചു.'
            }
          }

        },
        legacy: { 
          tabTitle: {en: 'Legacy', ml: 'പാരമ്പര്യം' },
          header1: { en: 'Continuing Legacy', ml: 'നിലനിൽക്കുന്ന പാരമ്പര്യം' },
          description1: { 
            firstParagraph: { 
              en: 'St. Gregorios was later proclaimed as a saint by both the Malankara Syriac Orthodox Church and Indian Orthodox Church. He remains an inspiration to millions of faithful around the world.',
              ml: 'പിന്നീട് മലങ്കര സുറിയാനി ഓർത്തഡോക്സ് സഭയും ഇന്ത്യൻ ഓർത്തഡോക്സ് സഭയും മാർ ഗ്രിഗോറിയോസിനെ വിശുദ്ധനായി പ്രഖ്യാപിച്ചു. ലോകമെമ്പാടുമുള്ള ലക്ഷക്കണക്കിന് വിശ്വാസികൾക്ക് അദ്ദേഹം ഇന്നും പ്രേരണയാണ്.'
            },
          },
          header2: { en: 'Miracles & Intercession', ml: 'അത്ഭുതങ്ങളും മാധ്യസ്ഥ്യവും'},
          description2:{
            firstParagraph: {
              en: 'There are hundreds of instances that proved his saintliness. Thousands of people receive favors and blessings through his intercession. The growing flow of pilgrims to his tomb at Parumala, several years after his demise, tells a story of a man of faith, prayer, healing, and great intercession.',
              ml: 'അദ്ദേഹത്തിന്റെ വിശുദ്ധിയെ തെളിയിക്കുന്ന നൂറുകണക്കിന് സംഭവങ്ങളുണ്ട്. ആയിരക്കണക്കിന് ആളുകൾ അദ്ദേഹത്തിന്റെ മധ്യസ്ഥതയിലൂടെ അനുഗ്രഹങ്ങളും പ്രസാദങ്ങളും നേടുന്നു. മരണത്തിനു ശേഷം വർഷങ്ങൾ കഴിഞ്ഞിട്ടും പരുമലയിലെ അദ്ദേഹത്തിന്റെ കബറിടത്തിലേക്ക് വർദ്ധിച്ചുവരുന്ന തീർത്ഥാടകരുടെ പ്രവാഹം വിശ്വാസത്തിന്റെയും പ്രാർത്ഥനയുടെയും സൌഖ്യദാനത്തിന്റെയും മഹത്തായ മധ്യസ്ഥതയുടെയും മനുഷ്യന്റെ കഥ പറയുന്നു.'
            }
          },
          header3: {en: 'Pilgrimage Centers' , ml: 'തീർത്ഥാടന സ്ഥലങ്ങൾ'},
          description3:{
            firstParagraph: {
              en:'His tomb at Parumala and his birthplace in Mulanthuruthy, Kerala have become major pilgrimage centers, drawing thousands of faithful seeking spiritual solace and divine intervention. ',
              ml: 'പരുമലയിലെ അദ്ദേഹത്തിന്റെ കബറിടവും കേരളത്തിലെ മുളന്തുരുത്തിയിലുള്ള ജന്മസ്ഥലവും പ്രധാന തീർത്ഥാടന കേന്ദ്രങ്ങളായി മാറി. ആത്മീയ സാന്ത്വനവും ദൈവിക ഇടപെടലും തേടി ആയിരക്കണക്കിന് വിശ്വാസികൾ ഇവിടേക്ക് വരുന്നു.'
            },
          },
          header4: { en: 'Our Church\'s Dedication', ml: 'നമ്മുടെ പള്ളിയുടെ സമർപ്പണം'},
          description4:{
            firstParagraph: {
              en: 'Our church in Tampa proudly bears the name of St. Gregorios of Parumala, continuing his legacy of faith, prayer, and service to the community. We strive to follow his example of devotion and compassion in all our ministries.',
              ml: 'ടാമ്പയിലെ നമ്മുടെ പള്ളി പരുമല മാർ ഗ്രിഗോറിയോസിന്റെ നാമം അഭിമാനത്തോടെ വഹിക്കുന്നു. വിശ്വാസത്തിന്റെയും പ്രാർത്ഥനയുടെയും സമൂഹസേവനത്തിന്റെയും അദ്ദേഹത്തിന്റെ പൈതൃകം തുടരുന്നു. ഞങ്ങളുടെ എല്ലാ ശുശ്രൂഷകളിലും അദ്ദേഹത്തിന്റെ ഭക്തിയുടെയും കരുണയുടെയും മാതൃക പിന്തുടരാൻ ഞങ്ങൾ ശ്രമിക്കുന്നു.'
            }
          }

        },
        description: { 
          en: 'Our Church in Tampa, Florida is dedicated and named after St. Gregorios of Parumala, popularly known as Parumala Thirumeni', 
          ml: 'ഫ്ലോറിഡയിലെ ടാമ്പയിലുള്ള നമ്മുടെ പള്ളി പരുമല തിരുമേനി എന്ന് അറിയപ്പെടുന്ന പരുമല മാർ ഗ്രിഗോറിയോസിന്റെ നാമത്തിൽ സമർപ്പിക്കപ്പെട്ടിരിക്കുന്നു' }
      },
      coreValues: {
        mainHeader: { en: 'Our Core Values', ml: 'നമ്മുടെ അടിസ്ഥാന മൂല്യങ്ങൾ' },
        faithWorship: {
          title: { en: 'Faith & Worship', ml: 'വിശ്വാസവും ആരാധനയും' },
          description: { 
            en: 'Rooted in the ancient Syrian Orthodox tradition, we celebrate the divine liturgy with reverence and joy', 
            ml: 'പുരാതന സുറിയാനി ഓർത്തഡോക്സ് പാരമ്പര്യത്തിൽ വേരൂന്നി, ഭക്തിയോടും സന്തോഷത്തോടും കൂടി ഞങ്ങൾ വിശുദ്ധ കുർബാന ആഘോഷിക്കുന്നു' }
        },
        communityFellowship: {
          title: { en: 'Community & Fellowship', ml: 'സമുദായവും സഹവാസവും' },
          description: { 
            en: 'Building strong bonds through shared faith, cultural heritage, and mutual support', 
            ml: 'പങ്കുവെക്കുന്ന വിശ്വാസത്തിലൂടെയും സാംസ്കാരിക പൈതൃകത്തിലൂടെയും പരസ്പര പിന്തുണയിലൂടെയും ശക്തമായ ബന്ധങ്ങൾ കെട്ടിപ്പടുക്കുന്നു' }
        },
        serviceCharity: {
          title: { en: 'Service & Charity', ml: 'സേവനവും ജീവകാരുണ്യവും' },
          description: { 
            en: 'Serving those in need through outreach programs, charitable initiatives, and community service', 
            ml: 'ഔട്ട്റീച്ച് പരിപാടികളിലൂടെയും ജീവകാരുണ്യ പ്രവർത്തനങ്ങളിലൂടെയും സമുദായ സേവനത്തിലൂടെയും ആവശ്യമുള്ളവരെ സേവിക്കുന്നു' }
        },
        cultureHeritage: {
          title: { en: 'Culture & Heritage', ml: 'സംസ്കാരവും പാരമ്പര്യവും' },
          description: { 
            en: 'Preserving and celebrating our rich Malayalam cultural traditions for future generations', 
            ml: 'ഭാവി തലമുറകൾക്കായി നമ്മുടെ സമ്പന്നമായ മലയാളി സാംസ്കാരിക പാരമ്പര്യങ്ങൾ സംരക്ഷിക്കുകയും ആഘോഷിക്കുകയും ചെയ്യുന്നു' }
        }
      },

    },
    vicar: {
      milestones: {
        mainTitle: {en: 'Journey of Service', ml: 'സേവന യാത്ര'},
        first: {
          year: { en: '1978', ml: '1978' },
          title: { en: 'Journey to America', ml: 'അമേരിക്കയിലേക്കുള്ള യാത്ര' },
          description: { 
            en: 'Came to America and lived with H.E. Yoohannan Mar Philexinios, beginning his spiritual journey', 
            ml: 'അമേരിക്കയിൽ വന്ന് തിരുമേനി യൂഹാനോൻ മാർ ഫിലക്സിനോസിനോടൊപ്പം താമസിച്ച് തന്റെ ആത്മീയ യാത്ര ആരംഭിച്ചു' }
        },
        second: {
          year: { en: '1981', ml: '1981' },
          title: { en: 'Ordained as Deacon', ml: 'ശെമ്മാശനായി അഭിഷേകം' },
          description: { 
            en: 'September 14 - Ordained by His Holiness Moran Mor Ignatius Zakka I Iwas', 
            ml: 'സെപ്റ്റംബർ 14 - പരിശുദ്ധ മൊറാൻ മോർ ഇഗ്നാത്തിയോസ് സക്കാ ഒന്നാമൻ ഇവാസ് തിരുമേനിയാൽ അഭിഷേകം' }
        },
        third: {
          year: { en: '1984', ml: '1984' },
          title: { en: 'Ordained as Priest', ml: 'കശീശയായി അഭിഷേകം' },
          description: { 
            en: 'December 8 - Ordained by H.E. Geevarghese Mar Gregorios after completing B.Th. from Logos Bible College', 
            ml: 'ഡിസംബർ 8 - ലോഗോസ് ബൈബിൾ കോളേജിൽ നിന്ന് ബി.തിയോ. പൂർത്തിയാക്കിയ ശേഷം ഗീവർഗീസ് മാർ ഗ്രിഗോറിയോസ് തിരുമേനിയാൽ അഭിഷേകം' }
        },
        fourth: {
          year: { en: '1984-1988', ml: '1984-1988' },
          title: { en: 'Vicar of Staten Island', ml: 'സ്റ്റാറ്റൻ ഐലൻഡ് വികാരി' },
          description: {
             en: 'Served as Vicar of the Syrian Orthodox Church in Staten Island, New York', 
             ml: 'ന്യൂയോർക്കിലെ സ്റ്റാറ്റൻ ഐലൻഡിലുള്ള സുറിയാനി ഓർത്തഡോക്സ് പള്ളിയുടെ വികാരിയായി സേവനമനുഷ്ഠിച്ചു' }
        },
        fifth: {
          year: { en: '1988', ml: '1988' },
          title: { en: 'Founded Tampa Church', ml: 'ടാമ്പ പള്ളി സ്ഥാപിച്ചു' },
          description: { 
            en: 'Established Mar Gregorios Syrian Orthodox Church in Tampa, Florida', 
            ml: 'ഫ്ലോറിഡയിലെ ടാമ്പയിൽ മാർ ഗ്രിഗോറിയോസ് സുറിയാനി ഓർത്തഡോക്സ് പള്ളി സ്ഥാപിച്ചു' }
        },
        sixth: {
          year: { en: 'Present', ml: 'ഇന്ന്' },
          title: { en: 'Continuing Service', ml: 'തുടരുന്ന സേവനം' },
          description: { 
            en: 'Continues to serve as "Our George Achen" - beloved spiritual father of the community',
             ml: '"നമ്മുടെ ജോർജ് അച്ചൻ" എന്ന നിലയിൽ സേവനം തുടരുന്നു - സമൂഹത്തിന്റെ പ്രിയപ്പെട്ട ആത്മീയ പിതാവ്' }
        }
      },
      lifeStory:{
        mainTitle: { en: 'Life Story', ml: 'ജീവിതകഥ' },
        header1: { en: 'Early Life & Calling', ml: 'ആദ്യകാല ജീവിതവും വിളിയും' },
        description1: { 
          firstParagraph: { 
            en: 'Georgekutty Abraham was born as the fourth child of Philipose and Annamma Abraham Kalimkoottil, Pampady. In his early age, he took his grandfather as his role model, a predominant member and a well respected elder of St. Simon Syrian Orthodox Church (Karikkamattam).',
            ml: 'ജോർജ്ജുകുട്ടി എബ്രഹാം പമ്പാടി കളിങ്കൂട്ടിൽ ഫിലിപ്പോസിന്റെയും അന്നമ്മ എബ്രഹാമിന്റെയും നാലാമത്തെ മകനായി ജനിച്ചു. ചെറുപ്പത്തിൽ തന്നെ കരിക്കമറ്റം സെന്റ് സൈമൺ സുറിയാനി ഓർത്തഡോക്സ് പള്ളിയുടെ പ്രമുഖ അംഗവും ബഹുമാനിതനായ മൂപ്പനുമായിരുന്ന തന്റെ അപ്പൂപ്പനെ മാതൃകയാക്കി.'
          },
          secondParagraph: {
            en: 'His grandfather\'s prayer life and dedication to the church activities encouraged him to be a devoted Christian from his childhood. His first venture into the service of our Lord was as an altar boy at his local church.',
            ml: 'അപ്പൂപ്പന്റെ പ്രാർത്ഥനാ ജീവിതവും പള്ളി പ്രവർത്തനങ്ങളോടുള്ള സമർപ്പണവും ബാല്യം മുതൽ തന്നെ അദ്ദേഹത്തെ ഭക്തനായ ക്രിസ്ത്യാനിയാകാൻ പ്രേരിപ്പിച്ചു. കർത്താവിന്റെ സേവനത്തിലേക്കുള്ള അദ്ദേഹത്തിന്റെ ആദ്യ ചുവടുവെപ്പ് സ്വന്തം പള്ളിയിലെ മദ്ബഹ ശുശ്രൂഷകനായിട്ടായിരുന്നു.'
          }
        },
        header2: { en: 'Journey to Ministry', ml: 'ശുശ്രൂഷയിലേക്കുള്ള യാത്ര' },
        description2:{
          firstParagraph: {
            en: 'As he came to America in 1978, he had the opportunity to live with H.E. Yoohannan Mar Philexinios for a few years. Under his teachings and guidance, Georgekutty decided to dedicate his life for God\'s ministry. ',
            ml: '1978-ൽ അമേരിക്കയിൽ വന്നപ്പോൾ കുറച്ചു വർഷങ്ങൾ യൂഹാനോൻ മാർ ഫിലക്സിനോസ് തിരുമേനിയോടൊപ്പം താമസിക്കാൻ അവസരം ലഭിച്ചു. തിരുമേനിയുടെ ഉപദേശങ്ങളുടെയും മാർഗ്ഗനിർദ്ദേശങ്ങളുടെയും കീഴിൽ ജോർജ്ജുകുട്ടി തന്റെ ജീവിതം ദൈവശുശ്രൂഷയ്ക്കായി സമർപ്പിക്കാൻ തീരുമാനിച്ചു.'
          },
          secondParagraph: {
            en: 'He was ordained as deacon on September 14, 1981 by the supreme head of the universal Syrian Orthodox Church, His Holiness Moran Mor Ignatius Zakka I Iwas. After completing his B.Th. from Logos Bible College, New York, he was ordained priest by H.E. Geevarghese Mar Gregorios on December 8, 1984. ',
            ml: '1981 സെപ്റ്റംബർ 14-ന് ആഗോള സുറിയാനി ഓർത്തഡോക്സ് സഭയുടെ പരമോന്നത തലവനായ പരിശുദ്ധ മൊറാൻ മോർ ഇഗ്നാത്തിയോസ് സക്കാ ഒന്നാമൻ ഇവാസ് തിരുമേനിയാൽ ശെമ്മാശനായി അഭിഷേകം ചെയ്യപ്പെട്ടു. ന്യൂയോർക്കിലെ ലോഗോസ് ബൈബിൾ കോളേജിൽ നിന്ന് ബി.തിയോ. പൂർത്തിയാക്കിയ ശേഷം 1984 ഡിസംബർ 8-ന് ഗീവർഗീസ് മാർ ഗ്രിഗോറിയോസ് തിരുമേനിയാൽ കശീശയായി അഭിഷേകം ചെയ്യപ്പെട്ടു.'
          }
        },
        header3: { en: 'Service in Tampa', ml: 'ടാമ്പയിലെ ശുശ്രൂഷ' },
        description3:{
          firstParagraph: {
            en: 'He served as Vicar of the Staten Island Church, New York from 1984 to 1988. He came to Tampa, Florida in 1988 and established Mar Gregorios Syrian Orthodox Church and has been the Vicar ever since. ',
            ml: '1984 മുതൽ 1988 വരെ ന്യൂയോർക്കിലെ സ്റ്റാറ്റൻ ഐലൻഡ് പള്ളിയുടെ വികാരിയായി സേവനമനുഷ്ഠിച്ചു. 1988-ൽ ഫ്ലോറിഡയിലെ ടാമ്പയിൽ വന്ന് മാർ ഗ്രിഗോറിയോസ് സുറിയാനി ഓർത്തഡോക്സ് പള്ളി സ്ഥാപിച്ചു. അന്നുമുതൽ ഇവിടുത്തെ വികാരിയായി സേവനം തുടരുന്നു.'
          },
          secondParagraph: {
            en: 'His prayer life and commitment to the community has given him a nickname \'Our George Achen\'.',
            ml: 'അദ്ദേഹത്തിന്റെ പ്രാർത്ഥനാ ജീവിതവും സമൂഹത്തോടുള്ള പ്രതിബദ്ധതയും അദ്ദേഹത്തിന് \'നമ്മുടെ ജോർജ് അച്ചൻ\' എന്ന വിളിപ്പേര് നേടിക്കൊടുത്തു.'
          }
        }
      },
      bottomQuote: {
        quote: { 
          en: 'A spiritual father who has dedicated over 35 years to nurturing and guiding our community in faith', 
          ml: '35 വർഷത്തിലേറെ നമ്മുടെ സമൂഹത്തെ വിശ്വാസത്തിൽ പോഷിപ്പിക്കാനും വഴികാട്ടാനും സമർപ്പിച്ച ആത്മീയ പിതാവ്'},
        description: {
          en: 'From his early days as an altar boy to becoming the founding vicar of our church, Fr. George Abraham\'s journey has been one of unwavering faith and dedicated service. ', 
          ml: 'മദ്ബഹ ശുശ്രൂഷകനായുള്ള ആദ്യകാലം മുതൽ നമ്മുടെ പള്ളിയുടെ സ്ഥാപക വികാരിയാകുന്നത് വരെ, ഫാ. ജോർജ് എബ്രഹാമിന്റെ യാത്ര അചഞ്ചലമായ വിശ്വാസത്തിന്റെയും സമർപ്പിത സേവനത്തിന്റെയും ഒന്നായിരുന്നു.'}
      }
    },
    contact: {
      heroQuote: { en: 'Connect with our community', ml: 'നമ്മുടെ സമൂഹവുമായി ബന്ധപ്പെടുക' },
      mainHeader: { en: 'Get in Touch', ml: 'ബന്ധപ്പെടുക' },
      subHeader: { en: 'We would love to hear from you and welcome you to our parish family', ml: 'നിങ്ങളിൽ നിന്ന് കേൾക്കാനും നമ്മുടെ ഇടവക കുടുംബത്തിലേക്ക് സ്വാഗതം ചെയ്യാനും ഞങ്ങൾ ആഗ്രഹിക്കുന്നു' },
      
      churchInfo: {
        header: { en: 'Church Information', ml: 'പള്ളി വിവരങ്ങൾ' },
        name: { en: 'Mar Gregorios Syrian Orthodox Church', ml: 'മാർ ഗ്രിഗോറിയോസ് സുറിയാനി ഓർത്തഡോക്സ് പള്ളി' },
        address: { en: '1307 Barclay Ave, Tampa, FL 33610', ml: '1307 ബാർക്ലേ അവന്യൂ, ടാമ്പ, FL 33610' },
        phone: { en: 'Phone', ml: 'ഫോൺ' },
        email: { en: 'Email', ml: 'ഇമെയിൽ' },
        website: { en: 'Website', ml: 'വെബ്സൈറ്റ്' }
      },
      
      serviceSchedule: {
        header: { en: 'Service Schedule', ml: 'ശുശ്രൂഷാ സമയക്രമം' },
        sunday: { en: 'Sunday', ml: 'ഞായറാഴ്ച' },
        mondayToSaturday: { en: 'Monday - Saturday', ml: 'തിങ്കൾ - ശനി' },
        morningPrayer: { en: 'Morning Prayer', ml: 'പ്രഭാത പ്രാർത്ഥന' },
        eveningPrayer: { en: 'Evening Prayer', ml: 'സായാഹ്ന പ്രാർത്ഥന' },
        holyQurbana: { en: 'Holy Qurbana', ml: 'വിശുദ്ധ കുർബാന' },
        sundaySchool: { en: 'Sunday School', ml: 'ഞായറാഴ്ച സ്കൂൾ' },
        specialServices: { en: 'Special services and feast days are announced in advance', ml: 'പ്രത്യേക ശുശ്രൂഷകളും തിരുനാളുകളും മുൻകൂട്ടി അറിയിക്കുന്നു' }
      },
      
      clergy: {
        header: { en: 'Our Clergy', ml: 'നമ്മുടെ വൈദികർ' },
        vicar: { en: 'Vicar', ml: 'വികാരി' },
        vicarName: { en: 'Rev. Fr. George Abraham', ml: 'റവ. ഫാ. ജോർജ് എബ്രഹാം' },
        assistantVicar: { en: 'Assistant Vicar', ml: 'സഹായ വികാരി' },
        assistantVicarName: { en: 'Rev. Fr. [Name]', ml: 'റവ. ഫാ. [പേര്]' }
      },
      
      officeHours: {
        header: { en: 'Office Hours', ml: 'ഓഫീസ് സമയം' },
        weekdays: { en: 'Monday - Friday', ml: 'തിങ്കൾ - വെള്ളി' },
        weekdayTime: { en: '9:00 AM - 5:00 PM', ml: 'രാവിലെ 9:00 - വൈകുന്നേരം 5:00' },
        saturday: { en: 'Saturday', ml: 'ശനി' },
        saturdayTime: { en: '10:00 AM - 2:00 PM', ml: 'രാവിലെ 10:00 - ഉച്ചയ്ക്ക് 2:00' },
        sunday: { en: 'Sunday', ml: 'ഞായറാഴ്ച' },
        sundayTime: { en: 'After Holy Qurbana', ml: 'വിശുദ്ധ കുർബാനയ്ക്ക് ശേഷം' },
        note: { en: 'Please call ahead for appointments', ml: 'അപ്പോയിന്റ്മെന്റിനായി മുൻകൂട്ടി വിളിക്കുക' }
      },
      
      contactForm: {
        header: { en: 'Send us a Message', ml: 'ഞങ്ങൾക്ക് സന്ദേശം അയയ്ക്കുക' },
        name: { en: 'Your Name', ml: 'നിങ്ങളുടെ പേര്' },
        email: { en: 'Your Email', ml: 'നിങ്ങളുടെ ഇമെയിൽ' },
        phone: { en: 'Phone Number', ml: 'ഫോൺ നമ്പർ' },
        subject: { en: 'Subject', ml: 'വിഷയം' },
        message: { en: 'Your Message', ml: 'നിങ്ങളുടെ സന്ദേശം' },
        send: { en: 'Send Message', ml: 'സന്ദേശം അയയ്ക്കുക' },
        sending: { en: 'Sending...', ml: 'അയയ്ക്കുന്നു...' },
        success: { en: 'Message sent successfully!', ml: 'സന്ദേശം വിജയകരമായി അയച്ചു!' },
        error: { en: 'Failed to send message. Please try again.', ml: 'സന്ദേശം അയയ്ക്കുന്നതിൽ പരാജയപ്പെട്ടു. വീണ്ടും ശ്രമിക്കുക.' }
      },
      
      directions: {
        header: { en: 'Get Directions', ml: 'വഴി നിർദ്ദേശങ്ങൾ' },
        fromNorth: { en: 'From North Tampa', ml: 'വടക്കൻ ടാമ്പയിൽ നിന്ന്' },
        fromSouth: { en: 'From South Tampa', ml: 'തെക്കൻ ടാമ്പയിൽ നിന്ന്' },
        fromEast: { en: 'From East Tampa', ml: 'കിഴക്കൻ ടാമ്പയിൽ നിന്ന്' },
        fromWest: { en: 'From West Tampa', ml: 'പടിഞ്ഞാറൻ ടാമ്പയിൽ നിന്ന്' },
        parking: { en: 'Parking Information', ml: 'പാർക്കിംഗ് വിവരങ്ങൾ' },
        parkingDetails: { en: 'Ample parking available on church premises', ml: 'പള്ളി പരിസരത്ത് ധാരാളം പാർക്കിംഗ് സൗകര്യം ലഭ്യമാണ്' }
      },
      
      socialMedia: {
        header: { en: 'Follow Us', ml: 'ഞങ്ങളെ പിന്തുടരുക' },
        facebook: { en: 'Facebook', ml: 'ഫേസ്ബുക്ക്' },
        youtube: { en: 'YouTube', ml: 'യൂട്യൂബ്' },
        instagram: { en: 'Instagram', ml: 'ഇൻസ്റ്റാഗ്രാം' },
        whatsapp: { en: 'WhatsApp', ml: 'വാട്സ്ആപ്പ്' }
      },
      
      emergencyContact: {
        header: { en: 'Emergency Contact', ml: 'അടിയന്തര ബന്ധപ്പെടൽ' },
        description: { en: 'For pastoral emergencies, please call', ml: 'ആത്മീയ അടിയന്തരാവസ്ഥകൾക്ക് വിളിക്കുക' },
        available: { en: 'Available 24/7 for emergencies', ml: 'അടിയന്തരാവസ്ഥകൾക്ക് 24/7 ലഭ്യമാണ്' }
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