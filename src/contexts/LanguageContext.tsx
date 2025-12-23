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
    'about.intro': 'בעל תואר שני וניסיון מעמיק בבינה מלאכותית ולמידת מכונה, משתף פעולה עם עסקים לפתיחת אפשרויות חדשות בעזרת חדשנות GenAI. מסייע לעסקים למנף בינה מלאכותית לשיפור תהליכים, העלאת יעילות, והנעת צמיחה.',
    'about.experience.text': 'מהנדס בינה מלאכותית עם ניסיון של למעלה מעשור בתחומי AI ו-Data Science. מוביל תחום GenAI ומטמיע סוכני AI בחברה גלובלית גדולה, עם מעל 3 שנות ניסיון בהטמעת בינה מלאכותית יוצרת בארגונים.',
    'about.clients.text': 'מוביל תחום AI Agents בחברת אנטרפרייז גלובלית, מרצה ויועץ AI של התנועה הקיבוצית, יועץ לחברות אדריכלים והנדסה מהגדולות בישראל, חברות ביטוח, וכן מרצה ויועץ בתחום AI לחברת Precise ולקוחות נוספים.',
    'about.specialty': 'התמחותי היא הנגשת טכנולוגיות מתקדמות לצוותים לא-טכניים ופיתוח פתרונות מותאמים לצרכים עסקיים אמיתיים.',
    'about.quote': '"אני מאמין שכל מנהל או בעל עסק צריך להכיר את הכלים והאפשרויות שבינה מלאכותית יוצרת מביאה לשולחן."',
    
    // Services
    'services.title': 'שירותים',
    'services.strategy.title': 'פיתוח אסטרטגיות GenAI מותאמות',
    'services.strategy.desc': 'פיתוח אסטרטגיות בינה מלאכותית מקצה לקצה. התאמה אישית לכל צורך עסקי. פיתוח אפליקציות בעזרת Vibe Coding.',
    'services.consulting.title': 'ייעוץ טכנולוגי GenAI לצוותים לא-טכניים',
    'services.consulting.desc': 'הנגשת בינה מלאכותית לכל מדרג. תוך הנגשת הכלים לדרג הניהול והביצוע, מפה, מסלול ויישום מעשי לחברות ולמנהלים.',
    'services.training.title': 'הרצאות וסדנאות יישומיות',
    'services.training.desc': 'הרצאות עשירות וסדנאות מותאמות לצרכי הארגון שלך. המשתתפים יוצאים עם ידע מעשי שניתן ליישם מיד בעבודה היומיומית.',
    'services.mentoring.title': 'הדרכות והנטורינג אישיות',
    'services.mentoring.desc': 'ליווי אישי לצוותים ולמנהלים. למידה מידיים של שימוש מעשי בכלי AI, כדי לחסוך זמן, לשפר תוצרים ולהגביר את הפרודוקטיביות האישית והעסקית.',
    'services.agents.title': 'סוכני AI ואוטומציות',
    'services.agents.desc': 'פיתוח סוכני AI חכמים לייעול תהליכים עסקיים. אוטומציות מותאמות אישית לחיסוך זמן ומשאבים.',
    'services.implementation.title': 'יישום מידיי ותוצאות מדידות',
    'services.implementation.desc': 'תרגול מעשי על מקרים אמיתיים מהעבודה או מחיי היום-יום של המשתתפים. הרמת רמת הידע לכל אחד.',
    
    // Tools
    'tools.title': 'כלים ומומחיות',
    
    // CTA
    'cta.title': 'רוצה לבדוק איך GenAI יכול לעבוד בשבילך?',
    'cta.subtitle': 'ההדרכות והייעוץ מתמקדים בהנגשת מגוון רחב של כלי הבינה המלאכותית לעסקים:',
    'cta.button': 'קבע ייעוץ GenAI חינם',
    
    // Target Audiences
    'audiences.business': 'עסקים בצמיחה: המעוניינים לנצל את טכנולוגיות הבינה המלאכותית לצמיחה עסקית, פיתוח מוצרים חדשים ושיפור השירותים הניתנים ללקוחותיהם.',
    'audiences.professional': 'בעלי מקצוע: שצריכים להתעדכן בכלי ה-AI המתקדמים ביותר ולשלב אותם בשגרת עבודתם.',
    'audiences.growth': 'חברות בצמיחה: השואפים לנצל את הטכנולוגיות הבינה המלאכותית לצמיחה עסקית, פיתוח מוצרים חדשים ושיפור השירותים הניתנים ללקוחותיהם.',
    'audiences.personal': 'אנשים פרטיים: המעוניינים לשפר את הפרודוקטיביות האישית שלהם, להשתמש ב-AI ככלי עזר יומיומי ולשלב בתהליכים ופעילויות וחזותיות.',
    
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
    'about.intro': 'Holding a Master\'s degree with deep experience in AI and machine learning, I collaborate with businesses to unlock new possibilities through GenAI innovation. I help businesses leverage AI to improve processes, increase efficiency, and drive growth.',
    'about.experience.text': 'AI Engineer with over a decade of experience in AI and Data Science. Leading GenAI domain and implementing AI agents in a large global company, with over 3 years of experience implementing generative AI in organizations.',
    'about.clients.text': 'Leading AI Agents domain at a global enterprise company, AI lecturer and consultant for the Kibbutz Movement, consultant for leading architecture and engineering firms in Israel, insurance companies, and AI lecturer and consultant for Precise and other clients.',
    'about.specialty': 'My specialty is making advanced technologies accessible to non-technical teams and developing solutions tailored to real business needs.',
    'about.quote': '"I believe every manager or business owner should know the tools and possibilities that generative AI brings to the table."',
    
    // Services
    'services.title': 'Services',
    'services.strategy.title': 'Custom GenAI Strategy Development',
    'services.strategy.desc': 'End-to-end AI strategy development. Personalized for every business need. Application development with Vibe Coding.',
    'services.consulting.title': 'GenAI Consulting for Non-Technical Teams',
    'services.consulting.desc': 'Making AI accessible at every level. Bringing tools to management and execution levels, with roadmap, path and practical implementation for companies and managers.',
    'services.training.title': 'Lectures & Practical Workshops',
    'services.training.desc': 'Rich lectures and workshops tailored to your organization\'s needs. Participants leave with practical knowledge applicable immediately in daily work.',
    'services.mentoring.title': 'Personal Training & Mentoring',
    'services.mentoring.desc': 'Personal guidance for teams and managers. Hands-on learning of AI tools to save time, improve outputs and boost personal and business productivity.',
    'services.agents.title': 'AI Agents & Automation',
    'services.agents.desc': 'Smart AI agent development for business process optimization. Custom automation to save time and resources.',
    'services.implementation.title': 'Immediate Implementation & Measurable Results',
    'services.implementation.desc': 'Practical exercises on real cases from work or participants\' daily lives. Elevating knowledge level for everyone.',
    
    // Tools
    'tools.title': 'Tools & Expertise',
    
    // CTA
    'cta.title': 'Want to see how GenAI can work for you?',
    'cta.subtitle': 'Training and consulting focus on making a wide range of AI tools accessible to businesses:',
    'cta.button': 'Schedule Free GenAI Consultation',
    
    // Target Audiences
    'audiences.business': 'Growing Businesses: Looking to leverage AI technologies for business growth, new product development and improving services to customers.',
    'audiences.professional': 'Professionals: Who need to stay updated with the most advanced AI tools and integrate them into their work routine.',
    'audiences.growth': 'Growth Companies: Aspiring to leverage AI technologies for business growth, new product development and improving services to customers.',
    'audiences.personal': 'Individuals: Looking to improve personal productivity, use AI as a daily helper and integrate into processes and visual activities.',
    
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