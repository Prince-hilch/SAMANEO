import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'te' | 'ta' | 'mr' | 'bn';

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

export const translations: Translations = {
  'nav.vision': {
    en: 'Vision',
    hi: 'दृष्टिकोण',
    te: 'దృష్టి',
    ta: 'பார்வை',
    mr: 'दृष्टी',
    bn: 'দৃষ্টিভঙ্গি'
  },
  'nav.system': {
    en: 'System',
    hi: 'प्रणाली',
    te: 'వ్యవస్థ',
    ta: 'அமைப்பு',
    mr: 'प्रणाली',
    bn: 'সিস্টেম'
  },
  'nav.impact': {
    en: 'Impact',
    hi: 'प्रभाव',
    te: 'ప్రభావం',
    ta: 'தாக்கம்',
    mr: 'प्रभाव',
    bn: 'প্রভাব'
  },
  'nav.shopping': {
    en: 'Shopping',
    hi: 'खरीदारी',
    te: 'షాపింగ్',
    ta: 'ஷாப்பிங்',
    mr: 'खरेदी',
    bn: 'কেনাকাটা'
  },
  'nav.whitepaper': {
    en: 'Whitepaper',
    hi: 'श्वेतपत्र',
    te: 'శ్వేతపత్రం',
    ta: 'வெள்ளைத்தாள்',
    mr: 'श्वेतपत्रिका',
    bn: 'শ্বেতপত্র'
  },
  'nav.demo': {
    en: 'Demo Dashboard',
    hi: 'डेमो डैशबोर्ड',
    te: 'డెమో డ్యాష్‌బోర్డ్',
    ta: 'டெமோ டாஷ்போர்டு',
    mr: 'डेमो डॅशबोर्ड',
    bn: 'ডেমো ড্যাশবোর্ড'
  },
  'hero.badge': {
    en: 'System Online: Aerica X',
    hi: 'सिस्टम ऑनलाइन: Aerica X',
    te: 'సిస్టమ్ ఆన్‌లైన్: Aerica X',
    ta: 'கணினி ஆன்லைன்: Aerica X',
    mr: 'सिस्टम ऑनलाइन: Aerica X',
    bn: 'সিস্টেম অনলাইন: Aerica X'
  },
  'hero.title1': {
    en: 'Farming',
    hi: 'खेती',
    te: 'వ్యవసాయం',
    ta: 'விவசாயம்',
    mr: 'शेती',
    bn: 'কৃষি'
  },
  'hero.title2': {
    en: 'Redefined.',
    hi: 'पुनर्परिभाषित।',
    te: 'పునర్నిర్వచించబడింది.',
    ta: 'மறுவரையறை.',
    mr: 'पुन्हा परिभाषित.',
    bn: 'পুনর্নির্ধারিত।'
  },
  'hero.subtitle': {
    en: 'An integrated ecosystem of autonomous intelligence and modular logistics designed to eliminate agricultural waste.',
    hi: 'कृषि अपशिष्ट को खत्म करने के लिए डिज़ाइन किया गया स्वायत्त बुद्धिमत्ता और मॉड्यूलर लॉजिस्टिक्स का एक एकीकृत पारिस्थितिकी तंत्र।',
    te: 'వ్యవసాయ వ్యర్థాలను తొలగించడానికి రూపొందించబడిన స్వయంప్రతిపత్త మేధస్సు మరియు మాడ్యులర్ లాజిస్టిక్స్ యొక్క సమగ్ర పర్యావరణ వ్యవస్థ.',
    ta: 'விவசாய கழிவுகளை அகற்றுவதற்காக வடிவமைக்கப்பட்ட தன்னாட்சி நுண்ணறிவு மற்றும் மட்டு தளவாடங்களின் ஒருங்கிணைந்த சுற்றுச்சூழல் அமைப்பு.',
    mr: 'कृषी कचरा दूर करण्यासाठी डिझाइन केलेले स्वायत्त बुद्धिमत्ता आणि मॉड्यूलर लॉजिस्टिकची एकात्मिक परिसंस्था.',
    bn: 'কৃষি বর্জ্য দূর করার জন্য ডিজাইন করা স্বায়ত্তশাসিত বুদ্ধিমত্তা এবং মডুলার লজিস্টিকসের একটি সমন্বিত ইকোসিস্টেম।'
  },
  'hero.cta1': {
    en: 'Launch Dashboard',
    hi: 'डैशबोर्ड लॉन्च करें',
    te: 'డ్యాష్‌బోర్డ్‌ను ప్రారంభించండి',
    ta: 'டாஷ்போர்டைத் தொடங்கவும்',
    mr: 'डॅशबोर्ड लाँच करा',
    bn: 'ড্যাশবোর্ড চালু করুন'
  },
  'hero.cta2': {
    en: 'Read Whitepaper',
    hi: 'श्वेतपत्र पढ़ें',
    te: 'శ్వేతపత్రం చదవండి',
    ta: 'வெள்ளைத்தாள் படிக்கவும்',
    mr: 'श्वेतपत्रिका वाचा',
    bn: 'শ্বেতপত্র পড়ুন'
  },
  'stats.nodes': {
    en: 'Active Nodes',
    hi: 'सक्रिय नोड्स',
    te: 'క్రియాశీల నోడ్‌లు',
    ta: 'செயலில் உள்ள முனைகள்',
    mr: 'सक्रिय नोड्स',
    bn: 'সক্রিয় নোড'
  },
  'stats.waste': {
    en: 'Waste Saved',
    hi: 'बचाया गया कचरा',
    te: 'ఆదా చేయబడిన వ్యర్థాలు',
    ta: 'சேமிக்கப்பட்ட கழிவுகள்',
    mr: 'वाचलेला कचरा',
    bn: 'সংরক্ষিত বর্জ্য'
  },
  'stats.farmers': {
    en: 'Farmers Onboarded',
    hi: 'शामिल किसान',
    te: 'ఆన్‌బోర్డ్ చేయబడిన రైతులు',
    ta: 'விவசாயிகள் சேர்க்கப்பட்டனர்',
    mr: 'शेतकरी ऑनबोर्ड',
    bn: 'কৃষক অনবোর্ড'
  },
  'stats.loss': {
    en: 'Post-Harvest Loss',
    hi: 'फसल के बाद का नुकसान',
    te: 'కోత తర్వాత నష్టం',
    ta: 'அறுவடைக்குப் பிந்தைய இழப்பு',
    mr: 'कापणीनंतरचे नुकसान',
    bn: 'ফসল কাটার পরের ক্ষতি'
  },
  'stats.profit': {
    en: 'Farmer Profit',
    hi: 'किसान का लाभ',
    te: 'రైతు లాభం',
    ta: 'விவசாயி லாபம்',
    mr: 'शेतकऱ्याचा नफा',
    bn: 'কৃষকের লাভ'
  },
  'stats.reduction': {
    en: 'Waste Reduction',
    hi: 'कचरे में कमी',
    te: 'వ్యర్థాల తగ్గింపు',
    ta: 'கழிவு குறைப்பு',
    mr: 'कचरा कमी करणे',
    bn: 'বর্জ্য হ্রাস'
  },
  'stats.reach': {
    en: 'Market Reach',
    hi: 'बाजार की पहुंच',
    te: 'మార్కెట్ చేరువ',
    ta: 'சந்தை அணுகல்',
    mr: 'बाजाराची पोहोच',
    bn: 'বাজারের নাগাল'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key; // Fallback to key if translation is missing
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
