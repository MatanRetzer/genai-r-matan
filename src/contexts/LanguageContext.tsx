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
    'services.solutions.title': 'פיתוח פתרונות GenAI מותאמים',
    'services.solutions.desc': 'פיתוח פתרונות בינה מלאכותית מקצה לקצה. התאמה אישית לכל צורך עסקי. פיתוח אפליקציות בעזרת Vibe Coding.',
    'services.consulting.title': 'ייעוץ GenAI טכנולוגי לצוותים לא טכניים',
    'services.consulting.desc': 'הנגשת בינה מלאכותית לכל דורש. תוך הנגשת הכלים להגברת היעילות. אסטרטגיה, מפת דרכים וליווי מעשי למנהלים ולצוותים.',
    'services.training.title': 'הרצאות וסדנאות',
    'services.training.desc': 'הרצאות מעשירות וסדנאות יישומיות המותאמות לצרכי הארגון שלך. המשתתפים יוצאים עם ידע מעשי שניתן ליישם מיד בעבודה היומיומית.',
    'services.mentoring.title': 'הדרכות אישיות ומנטורינג',
    'services.mentoring.desc': 'ליווי מותאם אישית לצוותים ולפרטיים. למידה מעשית של כלי AI שימושיים לארגון ולחיי היום-יום לשיפור הפרודוקטיביות האישית והעסקית.',

    
    // Tools
    'tools.title': 'הכלים שאני מלמד',
    'tools.intro': 'אני מתמחה בהכשרה מעמיקה על מגוון רחב של כלי בינה מלאכותית מובילים בתעשייה, במטרה להעצים יחידים ועסקים כאחד. ההדרכות מותאמות באופן אישי, ומאפשרות למשתתפים לרכוש ידע וכישורים מעשיים בשימוש יעיל ומושכל בטכנולוגיות המתקדמות ביותר הקיימות כיום בשוק ה-AI.',

    // Approach
    'approach.title': 'הגישה שלי',
    'approach.intro': 'אני מאמין בלמידה דרך עשייה - כל הדרכה כוללת תרגול מעשי על מקרים אמיתיים מהעבודה או מחיי היומיום של המשתתפים. אני מתאים את שיטת ההוראה לרמת הידע של כל קהל, מאנשים ללא רקע טכני ועד למפתחים מנוסים. הדגש הוא על יישום מיידי - המשתתפים לומדים בדיוק איך להשתמש בכלי AI כדי לחסוך זמן, לשפר תוצרים ולהגביר את הפרודוקטיביות האישית והארגונית באופן מדיד.',
    'approach.learning.title': 'למידה מבוססת עשייה',
    'approach.learning.desc': 'תרגול מעשי על מקרים אמיתיים מחיי העבודה והיום-יום.',
    'approach.personalized.title': 'התאמה אישית',
    'approach.personalized.desc': 'שיטת הוראה המותאמת לרמת הידע ולצרכים הייחודיים של כל קהל.',
    'approach.results.title': 'יישום מיידי ותוצאות מדידות',
    'approach.results.desc': 'שימוש מעשי בכלים כדי לחסוך זמן, לשפר תוצרים ולהגביר פרודוקטיביות.',
    
    // Target Audiences
    'audiences.title': 'למי זה מתאים?',
    'audiences.intro': 'ההדרכות והייעוץ מיועדים למגוון רחב של קהלים המעוניינים לרתום את כוחה של הבינה המלאכותית לטובתם:',
    'audiences.business.title': 'עסקים וארגונים',
    'audiences.business.desc': 'המעוניינים להטמיע פתרונות AI חדשניים בתהליכי העבודה שלהם ולייעל פעילויות שונות.',
    'audiences.teams.title': 'צוותים מקצועיים',
    'audiences.teams.desc': 'הנצרכים להתעדכן בכלי ה-AI המתקדמים ביותר ולשלב אותם ביעילות בשגרת עבודתם.',
    'audiences.entrepreneurs.title': 'יזמים ועצמאיים',
    'audiences.entrepreneurs.desc': 'השואפים למנף את טכנולוגיות הבינה המלאכותית לצמיחה עסקית, פיתוח מוצרים חדשים ושיפור השירותים הניתנים ללקוחותיהם.',
    'audiences.personal.title': 'אנשים פרטיים',
    'audiences.personal.desc': 'המעוניינים לשפר את הפרודוקטיביות האישית שלהם, לייעל משימות חוזרות וסיזיפיות ולהשתמש ב-AI ככלי עזר יומיומי בקלות ובטבעיות.',
    
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
    'about.intro': 'Holding a Master\'s degree with deep experience in AI and machine learning, I collaborate with businesses to unlock new possibilities through GenAI innovation. I help businesses leverage AI to improve processes, increase efficiency, and drive growth.',
    'about.experience.text': 'AI Engineer with over a decade of experience in AI and Data Science. Leading GenAI domain and implementing AI agents in a large global company, with over 3 years of experience implementing generative AI in organizations.',
    'about.clients.text': 'Leading AI Agents domain at a global enterprise company, AI lecturer and consultant for the Kibbutz Movement, consultant for leading architecture and engineering firms in Israel, insurance companies, and AI lecturer and consultant for Precise and other clients.',
    'about.specialty': 'My specialty is making advanced technologies accessible to non-technical teams and developing solutions tailored to real business needs.',
    'about.quote': '"I believe every manager or business owner should know the tools and possibilities that generative AI brings to the table."',
    
    // Services
    'services.title': 'Services',
    'services.solutions.title': 'Custom GenAI Solutions Development',
    'services.solutions.desc': 'End-to-end AI solutions development. Personalized for every business need. Application development with Vibe Coding.',
    'services.consulting.title': 'GenAI Consulting for Non-Technical Teams',
    'services.consulting.desc': 'Making AI accessible to everyone. Providing tools for increased efficiency. Strategy, roadmap and practical guidance for managers and teams.',
    'services.training.title': 'Lectures & Workshops',
    'services.training.desc': 'Enriching lectures and practical workshops tailored to your organization\'s needs. Participants leave with practical knowledge applicable immediately in daily work.',
    'services.mentoring.title': 'Personal Training & Mentoring',
    'services.mentoring.desc': 'Personalized guidance for teams and individuals. Practical learning of useful AI tools for organizations and daily life to improve personal and business productivity.',

    
    // Tools
    'tools.title': 'The Tools I Teach',
    'tools.intro': 'I specialize in in-depth training on a wide range of industry-leading AI tools, with the goal of empowering individuals and businesses alike. Training is personalized, enabling participants to acquire practical knowledge and skills in efficient and informed use of the most advanced technologies available in the AI market today.',

    // Approach
    'approach.title': 'My Approach',
    'approach.intro': 'I believe in learning by doing - every training includes hands-on practice on real cases from work or daily life. I adapt my teaching method to each audience\'s knowledge level, from non-technical people to experienced developers. The emphasis is on immediate implementation - participants learn exactly how to use AI tools to save time, improve outputs and boost personal and organizational productivity measurably.',
    'approach.learning.title': 'Learning by Doing',
    'approach.learning.desc': 'Hands-on practice on real cases from work and daily life.',
    'approach.personalized.title': 'Personalized Approach',
    'approach.personalized.desc': 'Teaching method adapted to the knowledge level and unique needs of each audience.',
    'approach.results.title': 'Immediate Implementation & Measurable Results',
    'approach.results.desc': 'Practical use of tools to save time, improve outputs and boost productivity.',
    
    // Target Audiences
    'audiences.title': 'Who Is This For?',
    'audiences.intro': 'Training and consulting are designed for a wide range of audiences looking to harness the power of AI for their benefit:',
    'audiences.business.title': 'Businesses & Organizations',
    'audiences.business.desc': 'Looking to implement innovative AI solutions in their workflows and streamline various activities.',
    'audiences.teams.title': 'Professional Teams',
    'audiences.teams.desc': 'Who need to stay updated with the most advanced AI tools and integrate them effectively into their work routine.',
    'audiences.entrepreneurs.title': 'Entrepreneurs & Freelancers',
    'audiences.entrepreneurs.desc': 'Aspiring to leverage AI technologies for business growth, new product development and improving services to customers.',
    'audiences.personal.title': 'Individuals',
    'audiences.personal.desc': 'Looking to improve personal productivity, streamline repetitive tasks and use AI as a daily helper easily and naturally.',
    
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