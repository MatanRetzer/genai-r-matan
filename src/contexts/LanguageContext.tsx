import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'he' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  he: {
    // Navigation
    'nav.about': 'מי אני',
    'nav.services': 'שירותים',
    'nav.tools': 'כלים',
    'nav.contact': 'צור קשר',
    
    // Hero
    'hero.title': 'GenAI Consulting שמייצר תוצאות עסקיות',
    'hero.subtitle': 'ייעוץ, תכנון והטמעה של בינה מלאכותית יוצרת – מהחזון ועד הביצוע',
    'hero.cta.whatsapp': 'ייעוץ GenAI חינם',
    'hero.cta.linkedin': 'LinkedIn',
    
    // About
    'about.title': 'מי אני',
    'about.text': 'יועץ GenAI ו-Data Science עם ניסיון מעשי בהפיכת בינה מלאכותית לפתרונות שעובדים באמת. ללא הייפ – עם ערך עסקי מדיד.',
    'about.experience': 'שנות ניסיון',
    'about.projects': 'פרויקטים',
    'about.clients': 'לקוחות מרוצים',
    
    // Services
    'services.title': 'שירותים',
    'services.strategy.title': 'ייעוץ ואסטרטגיית GenAI',
    'services.strategy.desc': 'בניית אסטרטגיה מותאמת לארגון שלך. זיהוי הזדמנויות, הערכת היתכנות ותכנון מפת דרכים להטמעת AI יעילה.',
    'services.agents.title': 'סוכני AI ואוטומציות',
    'services.agents.desc': 'פיתוח סוכנים חכמים לאוטומציה של תהליכים עסקיים. מענה אוטומטי ללקוחות, עיבוד מסמכים וניהול משימות.',
    'services.datascience.title': 'Data Science ו-AI יישומי',
    'services.datascience.desc': 'ניתוח נתונים מתקדם, בניית מודלים והסקת תובנות עסקיות. פתרונות ML מותאמים לצרכי הארגון.',
    'services.training.title': 'הדרכות וסדנאות',
    'services.training.desc': 'העברת ידע מעשי לצוותים טכניים ולא-טכניים. סדנאות מותאמות לרמת המשתתפים ולצרכי הארגון.',
    
    // Tools
    'tools.title': 'כלים ומומחיות',
    
    // CTA
    'cta.title': 'רוצה לבדוק איך GenAI יכול לעבוד בשבילך?',
    'cta.button': 'קבע ייעוץ GenAI חינם',
    
    // Footer
    'footer.copyright': '© 2025 GenAI-R Consulting',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.tools': 'Tools',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'GenAI Consulting that Delivers Business Results',
    'hero.subtitle': 'Consulting, planning and implementation of generative AI – from vision to execution',
    'hero.cta.whatsapp': 'Free GenAI Consultation',
    'hero.cta.linkedin': 'LinkedIn',
    
    // About
    'about.title': 'About Me',
    'about.text': 'GenAI and Data Science consultant with hands-on experience turning AI into solutions that actually work. No hype – just measurable business value.',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects',
    'about.clients': 'Happy Clients',
    
    // Services
    'services.title': 'Services',
    'services.strategy.title': 'GenAI Strategy & Consulting',
    'services.strategy.desc': 'Building a tailored strategy for your organization. Identifying opportunities, feasibility assessment and roadmap planning for effective AI implementation.',
    'services.agents.title': 'AI Agents & Automation',
    'services.agents.desc': 'Developing smart agents for business process automation. Automated customer response, document processing and task management.',
    'services.datascience.title': 'Applied Data Science & AI',
    'services.datascience.desc': 'Advanced data analysis, model building and business insights. Custom ML solutions tailored to organizational needs.',
    'services.training.title': 'Training & Workshops',
    'services.training.desc': 'Practical knowledge transfer for technical and non-technical teams. Workshops tailored to participant level and organizational needs.',
    
    // Tools
    'tools.title': 'Tools & Expertise',
    
    // CTA
    'cta.title': 'Want to see how GenAI can work for you?',
    'cta.button': 'Schedule Free GenAI Consultation',
    
    // Footer
    'footer.copyright': '© 2025 GenAI-R Consulting',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('he');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'he' ? 'en' : 'he');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'he';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};