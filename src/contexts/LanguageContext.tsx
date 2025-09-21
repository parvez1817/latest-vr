import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ta' | 'ml';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Header
    'header.language': 'Language',
    'header.discover': 'Discover',
    'header.about': 'About',
    'header.pricing': 'Pricing',
    'header.contact': 'Contact',
    'header.tryVR': 'Try VR Demo',

    // Hero Section
    'hero.title': 'Step Into the Soul of India',
    'hero.subtitle': 'In Virtual Reality',
    'hero.description': 'Explore centuries of heritage, monuments, festivals, and stories in a fully immersive VR experience. Where ancient wisdom meets cutting-edge technology.',
    'hero.startJourney': 'Start Your Journey',
    'hero.watchDemo': 'Watch Demo',

    // Discover Section
    'discover.title': 'Choose Your Era.',
    'discover.subtitle': 'Walk Through History.',
    'discover.description': 'Travel through time and experience India\'s rich cultural heritage across different periods',
    'discover.ancient': 'Ancient',
    'discover.medieval': 'Medieval',
    'discover.modern': 'Modern',
    'discover.monuments.title': 'Explore Monuments',
    'discover.monuments.desc': 'Walk through ancient temples, forts, and palaces with authentic reconstructions',
    'discover.traditions.title': 'Interact with Traditions',
    'discover.traditions.desc': 'Experience classical dances, music, and art forms in their original settings',
    'discover.stories.title': 'Learn Through Stories',
    'discover.stories.desc': 'Immersive narratives bring historical events and legends to life',
    'discover.festivals.title': 'Cultural Festivals in VR',
    'discover.festivals.desc': 'Participate in Diwali, Holi, and regional celebrations across India',

    // About Section
    'about.title': 'Where Culture Meets Curiosity',
    'about.description': 'Experience India\'s heritage through two distinct but complementary paths',
    'about.entertainment': 'Entertainment',
    'about.education': 'Education',
    'about.entertainment.desc': 'Immerse yourself in India\'s vibrant culture through interactive experiences',
    'about.education.desc': 'Learn about India\'s rich heritage through structured, immersive lessons',
    'about.tourism': 'Cultural Tourism',
    'about.tourism.desc': 'Experience India\'s rich cultural heritage through immersive virtual tours of historical sites and monuments.',
    'about.gamified': 'Guided Narration',
    'about.gamified.desc': 'Professional audio guides provide context and stories behind each location and cultural artifact.',
    'about.roleplay': 'Interactive Facts',
    'about.roleplay.desc': 'Tap on points of interest to discover fascinating facts, trivia, and detailed information about Indian culture.',
    'about.narration': 'Gamified Interactions',
    'about.narration.desc': 'Solve puzzles, complete quests, and unlock achievements while exploring India\'s heritage.',
    'about.facts': 'Role Playing Adventure',
    'about.facts.desc': 'Step into the shoes of historical characters and live their stories in immersive scenarios.',
    'about.classroom': 'Classroom Integration',
    'about.classroom.desc': 'Seamlessly integrate VR lessons into existing curricula and lesson plans',
    'about.startAdventure': 'Start Adventure',
    'about.exploreLearning': 'Explore Learning',

    // Map Section
    'map.title': 'Discover India,',
    'map.subtitle': 'One State at a Time',
    'map.description': 'Click on any state to experience its unique heritage — virtually walk through temples of India or witness India\'s vibrant festivals.',
    'map.exploreVR': 'Explore in VR',
    'map.viewComplete': 'View Complete Map',
    'map.ready': 'Ready to explore all 28 states and 8 union territories?',

    // Pricing Section
    'pricing.title': 'Choose Your Journey Plan',
    'pricing.description': 'Access India\'s heritage in VR – learn, explore, and experience like never before.',
    'pricing.individual': 'Individual Plan',
    'pricing.family': 'Family Plan',
    'pricing.institutional': 'Institutional Plan',
    'pricing.mostPopular': 'Most Popular',
    'pricing.subscribe': 'Subscribe Now',

    // CTA Section
    'cta.title': 'Ready to Travel',
    'cta.subtitle': 'Through Time?',
    'cta.description': 'Join thousands of cultural explorers, students, and educators in experiencing India\'s magnificent heritage through cutting-edge VR technology.',
    'cta.download': 'Download the App',
    'cta.tryVR': 'Try in VR Now',
    'cta.partnership.title': 'For Schools & Museums',
    'cta.partnership.desc': 'Transform education and cultural experiences with our institutional partnerships. Get custom content, training, and dedicated support.',
    'cta.partner': 'Partner with Us',
    'cta.quickSetup': 'Quick Setup',
    'cta.quickSetup.desc': 'Ready to use in minutes with comprehensive training materials',
    'cta.groupSessions': 'Group Sessions',
    'cta.groupSessions.desc': 'Support for up to 30 students simultaneously',
    'cta.customContent': 'Custom Content',
    'cta.customContent.desc': 'Tailored experiences for your curriculum needs',
    'cta.questions': 'Questions? We\'re here to help you embark on your cultural journey.',

    // Footer
    'footer.tagline': 'Preserving Culture through VR. Experience India\'s magnificent heritage through immersive virtual reality technology that brings history to life.',
    'footer.stayUpdated': 'Stay Updated',
    'footer.emailPlaceholder': 'Enter your email',
    'footer.subscribe': 'Subscribe',
    'footer.quickLinks': 'Quick Links',
    'footer.aboutUs': 'About Us',
    'footer.features': 'Features',
    'footer.partners': 'Partners',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.connect': 'Connect',
    'footer.copyright': '© 2024 Cultural Chronicles. All rights reserved. Preserving culture through technology.',
    'footer.madeWith': 'Made in with ❤️',
  },
  ta: {
    // Header
    'header.language': 'மொழி',
    'header.discover': 'கண்டுபிடி',
    'header.about': 'பற்றி',
    'header.pricing': 'விலை',
    'header.contact': 'தொடர்பு',
    'header.tryVR': 'VR டெமோ முயற்சி',

    // Hero Section
    'hero.title': 'இந்தியாவின் ஆன்மாவில் அடியெடுத்து வைக்கவும்',
    'hero.subtitle': 'மெய்நிகர் யதார்த்தத்தில்',
    'hero.description': 'நூற்றாண்டுகளின் பாரம்பரியம், நினைவுச்சின்னங்கள், திருவிழாக்கள் மற்றும் கதைகளை முழுமையான மெய்நிகர் அனுபவத்தில் ஆராயுங்கள். பண்டைய ஞானம் அதிநவீன தொழில்நுட்பத்துடன் சந்திக்கும் இடம்.',
    'hero.startJourney': 'உங்கள் பயணத்தைத் தொடங்குங்கள்',
    'hero.watchDemo': 'டெமோ பார்க்கவும்',

    // Discover Section
    'discover.title': 'உங்கள் யுகத்தைத் தேர்ந்தெடுக்கவும்.',
    'discover.subtitle': 'வரலாற்றின் வழியே நடக்கவும்.',
    'discover.description': 'காலத்தின் வழியே பயணம் செய்து, வெவ்வேறு காலகட்டங்களில் இந்தியாவின் வளமான கலாச்சார பாரம்பரியத்தை அனுபவிக்கவும்',
    'discover.ancient': 'பண்டைய',
    'discover.medieval': 'இடைக்கால',
    'discover.modern': 'நவீன',
    'discover.monuments.title': 'நினைவுச்சின்னங்களை ஆராயுங்கள்',
    'discover.monuments.desc': 'உண்மையான மறுகட்டமைப்புகளுடன் பண்டைய கோவில்கள், கோட்டைகள் மற்றும் அரண்மனைகள் வழியே நடக்கவும்',
    'discover.traditions.title': 'பாரம்பரியங்களுடன் தொடர்பு கொள்ளுங்கள்',
    'discover.traditions.desc': 'பாரம்பரிய நடனங்கள், இசை மற்றும் கலை வடிவங்களை அவற்றின் அசல் அமைப்புகளில் அனுபவிக்கவும்',
    'discover.stories.title': 'கதைகள் மூலம் கற்றுக்கொள்ளுங்கள்',
    'discover.stories.desc': 'மூழ்கும் கதைகள் வரலாற்று நிகழ்வுகள் மற்றும் புராணங்களை உயிர்ப்பிக்கின்றன',
    'discover.festivals.title': 'VR இல் கலாச்சார திருவிழாக்கள்',
    'discover.festivals.desc': 'இந்தியா முழுவதும் தீபாவளி, ஹோலி மற்றும் பிராந்திய கொண்டாட்டங்களில் பங்கேற்கவும்',

    // About Section
    'about.title': 'கலாச்சாரம் ஆர்வத்தை சந்திக்கும் இடம்',
    'about.description': 'இரண்டு தனித்துவமான ஆனால் பூரக பாதைகள் மூலம் இந்தியாவின் பாரம்பரியத்தை அனுபவிக்கவும்',
    'about.entertainment': 'பொழுதுபோக்கு',
    'about.education': 'கல்வி',
    'about.entertainment.desc': 'ஊடாடும் அனுபவங்கள் மூலம் இந்தியாவின் துடிப்பான கலாச்சாரத்தில் மூழ்குங்கள்',
    'about.education.desc': 'கட்டமைக்கப்பட்ட, மூழ்கும் பாடங்கள் மூலம் இந்தியாவின் வளமான பாரம்பரியத்தைப் பற்றி அறிந்து கொள்ளுங்கள்',
    'about.tourism': 'கலாச்சார சுற்றுலா',
    'about.tourism.desc': 'வரலாற்று தளங்கள் மற்றும் நினைவுச்சின்னங்களின் மூழ்கும் மெய்நிகர் சுற்றுப்பயணங்கள் மூலம் இந்தியாவின் வளமான கலாச்சார பாரம்பரியத்தை அனுபவிக்கவும்.',
    'about.gamified': 'வழிகாட்டப்பட்ட விவரணை',
    'about.gamified.desc': 'தொழில்முறை ஆடியோ வழிகாட்டிகள் ஒவ்வொரு இடத்திற்கும் பின்னால் உள்ள சூழல் மற்றும் கதைகளை வழங்குகின்றன.',
    'about.roleplay': 'ஊடாடும் உண்மைகள்',
    'about.roleplay.desc': 'இந்திய கலாச்சாரத்தைப் பற்றிய வசீகரிக்கும் உண்மைகள், வினோதங்கள் மற்றும் விரிவான தகவல்களைக் கண்டறிய ஆர்வமுள்ள புள்ளிகளைத் தட்டவும்.',
    'about.narration': 'விளையாட்டு தொடர்புகள்',
    'about.narration.desc': 'இந்தியாவின் பாரம்பரியத்தை ஆராயும் போது புதிர்களைத் தீர்க்கவும், தேடல்களை முடிக்கவும், சாதனைகளைத் திறக்கவும்.',
    'about.facts': 'பாத்திர நடிப்பு சாகசம்',
    'about.facts.desc': 'வரலாற்று பாத்திரங்களின் காலணிகளில் அடியெடுத்து வைத்து மூழ்கும் சூழ்நிலைகளில் அவர்களின் கதைகளை வாழுங்கள்.',
    'about.classroom': 'வகுப்பறை ஒருங்கிணைப்பு',
    'about.classroom.desc': 'VR பாடங்களை தற்போதுள்ள பாடத்திட்டங்கள் மற்றும் பாட திட்டங்களில் தடையின்றி ஒருங்கிணைக்கவும்',
    'about.startAdventure': 'சாகசத்தைத் தொடங்குங்கள்',
    'about.exploreLearning': 'கற்றலை ஆராயுங்கள்',

    // Map Section
    'map.title': 'இந்தியாவைக் கண்டுபிடிக்கவும்,',
    'map.subtitle': 'ஒரு நேரத்தில் ஒரு மாநிலம்',
    'map.description': 'அதன் தனித்துவமான பாரம்பரியத்தை அனுபவிக்க எந்த மாநிலத்திலும் கிளிக் செய்யவும் — தமிழ்நாட்டின் கோவில்கள் வழியே மெய்நிகரமாக நடக்கவும் அல்லது ராஜஸ்தானின் துடிப்பான திருவிழாக்களைக் காணவும்.',
    'map.exploreVR': 'VR இல் ஆராயுங்கள்',
    'map.viewComplete': 'முழுமையான வரைபடத்தைப் பார்க்கவும்',
    'map.ready': 'அனைத்து 28 மாநிலங்கள் மற்றும் 8 யூனியன் பிரதேசங்களையும் ஆராய தயாரா?',

    // Pricing Section
    'pricing.title': 'உங்கள் பயண திட்டத்தைத் தேர்ந்தெடுக்கவும்',
    'pricing.description': 'VR இல் தமிழ்நாட்டின் பாரம்பரியத்தை அணுகவும் – முன்பு எப்போதும் இல்லாத வகையில் கற்றுக்கொள்ளுங்கள், ஆராயுங்கள் மற்றும் அனுபவிக்கவும்.',
    'pricing.individual': 'தனிநபர் திட்டம்',
    'pricing.family': 'குடும்ப திட்டம்',
    'pricing.institutional': 'நிறுவன திட்டம்',
    'pricing.mostPopular': 'மிகவும் பிரபலமான',
    'pricing.subscribe': 'இப்போது சந்தா செலுத்துங்கள்',

    // CTA Section
    'cta.title': 'பயணம் செய்ய தயாரா',
    'cta.subtitle': 'காலத்தின் வழியே?',
    'cta.description': 'அதிநவீன VR தொழில்நுட்பத்தின் மூலம் இந்தியாவின் அற்புதமான பாரம்பரியத்தை அனுபவிப்பதில் ஆயிரக்கணக்கான கலாச்சார ஆய்வாளர்கள், மாணவர்கள் மற்றும் கல்வியாளர்களுடன் சேருங்கள்.',
    'cta.download': 'ஆப்ஸை பதிவிறக்கவும்',
    'cta.tryVR': 'இப்போது VR முயற்சி செய்யுங்கள்',
    'cta.partnership.title': 'பள்ளிகள் மற்றும் அருங்காட்சியகங்களுக்கு',
    'cta.partnership.desc': 'எங்கள் நிறுவன கூட்டாண்மைகளுடன் கல்வி மற்றும் கலாச்சார அனுபவங்களை மாற்றுங்கள். தனிப்பயன் உள்ளடக்கம், பயிற்சி மற்றும் அர்ப்பணிப்புள்ள ஆதரவைப் பெறுங்கள்.',
    'cta.partner': 'எங்களுடன் கூட்டாளியாகுங்கள்',
    'cta.quickSetup': 'விரைவு அமைப்பு',
    'cta.quickSetup.desc': 'விரிவான பயிற்சி பொருட்களுடன் நிமிடங்களில் பயன்படுத்த தயார்',
    'cta.groupSessions': 'குழு அமர்வுகள்',
    'cta.groupSessions.desc': '30 மாணவர்கள் வரை ஒரே நேரத்தில் ஆதரவு',
    'cta.customContent': 'தனிப்பயன் உள்ளடக்கம்',
    'cta.customContent.desc': 'உங்கள் பாடத்திட்ட தேவைகளுக்கு ஏற்ப வடிவமைக்கப்பட்ட அனுபவங்கள்',
    'cta.questions': 'கேள்விகள்? உங்கள் கலாச்சார பயணத்தைத் தொடங்க நாங்கள் இங்கே உதவுகிறோம்.',

    // Footer
    'footer.tagline': 'VR மூலம் கலாச்சாரத்தைப் பாதுகாத்தல். வரலாற்றை உயிர்ப்பிக்கும் மூழ்கும் மெய்நிகர் யதார்த்த தொழில்நுட்பத்தின் மூலம் இந்தியாவின் அற்புதமான பாரம்பரியத்தை அனுபவிக்கவும்.',
    'footer.stayUpdated': 'புதுப்பித்த நிலையில் இருங்கள்',
    'footer.emailPlaceholder': 'உங்கள் மின்னஞ்சலை உள்ளிடவும்',
    'footer.subscribe': 'சந்தா',
    'footer.quickLinks': 'விரைவு இணைப்புகள்',
    'footer.aboutUs': 'எங்களைப் பற்றி',
    'footer.features': 'அம்சங்கள்',
    'footer.partners': 'கூட்டாளர்கள்',
    'footer.privacy': 'தனியுரிமை கொள்கை',
    'footer.terms': 'சேவை விதிமுறைகள்',
    'footer.connect': 'இணைக்கவும்',
    'footer.copyright': '© 2024 கலாச்சார குறிப்பேடுகள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. தொழில்நுட்பத்தின் மூலம் கலாச்சாரத்தைப் பாதுகாத்தல்.',
    'footer.madeWith': '❤️ உடன் தயாரிக்கப்பட்டது',
  },
  ml: {
    // Header
    'header.language': 'ഭാഷ',
    'header.discover': 'കണ്ടെത്തുക',
    'header.about': 'കുറിച്ച്',
    'header.pricing': 'വില',
    'header.contact': 'ബന്ധപ്പെടുക',
    'header.tryVR': 'VR ഡെമോ പരീക്ഷിക്കുക',

    // Hero Section
    'hero.title': 'ഇന്ത്യയുടെ ആത്മാവിലേക്ക് കാലുകുത്തുക',
    'hero.subtitle': 'വെർച്വൽ റിയാലിറ്റിയിൽ',
    'hero.description': 'നൂറ്റാണ്ടുകളുടെ പൈതൃകം, സ്മാരകങ്ങൾ, ഉത്സവങ്ങൾ, കഥകൾ എന്നിവ പൂർണ്ണമായും ഇമ്മേഴ്സീവ് VR അനുഭവത്തിൽ പര്യവേക്ഷണം ചെയ്യുക. പുരാതന ജ്ഞാനം അത്യാധുനിക സാങ്കേതികവിദ്യയുമായി കൂടിക്കാഴ്ച നടത്തുന്നിടം.',
    'hero.startJourney': 'നിങ്ങളുടെ യാത്ര ആരംഭിക്കുക',
    'hero.watchDemo': 'ഡെമോ കാണുക',

    // Add more Malayalam translations as needed...
    'discover.title': 'നിങ്ങളുടെ യുഗം തിരഞ്ഞെടുക്കുക.',
    'discover.subtitle': 'ചരിത്രത്തിലൂടെ നടക്കുക.',
    'about.title': 'സംസ്കാരം ജിജ്ഞാസയെ കണ്ടുമുട്ടുന്നിടം',
    'map.title': 'ഇന്ത്യയെ കണ്ടെത്തുക,',
    'pricing.title': 'നിങ്ങളുടെ യാത്രാ പദ്ധതി തിരഞ്ഞെടുക്കുക',
    'cta.title': 'യാത്ര ചെയ്യാൻ തയ്യാറാണോ',
    'footer.tagline': 'VR വഴി സംസ്കാരം സംരക്ഷിക്കുന്നു. ചരിത്രത്തെ ജീവസുറ്റതാക്കുന്ന ഇമ്മേഴ്സീവ് വെർച്വൽ റിയാലിറ്റി സാങ്കേതികവിദ്യയിലൂടെ ഇന്ത്യയുടെ മഹത്തായ പൈതൃകം അനുഭവിക്കുക.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
