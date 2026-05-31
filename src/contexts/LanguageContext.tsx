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
    'nav.courses': 'קורסים',
    'nav.contact': 'צור קשר',
    
    // Hero
    'hero.title': 'GenAI Consulting | מלווה אתכם לעידן הבינה המלאכותית',
    'hero.subtitle': 'ייעוץ, הדרכה והטמעה של בינה מלאכותית יוצרת – ללקוחות פרטיים ולעסקים',
    'hero.cta.whatsapp': 'שיחת איפיון GenAI חינם',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.cta.tagline': 'אני כאן כדי לעזור לכם לאמץ את הבינה המלאכותית – בקלות ובביטחון',
    
    // About
    'about.title': 'מי אני',
    'about.name': 'מתן רטצר',
    'about.subtitle': 'יועץ ומרצה GenAI',
    'about.intro': 'בעל תואר שני וניסיון מעמיק בבינה מלאכותית ולמידת מכונה. משתף פעולה עם עסקים לפתיחת אפשרויות חדשות ומסייע למנף AI לשיפור תהליכים, העלאת יעילות והנעת צמיחה.',
    'about.experience': 'מהנדס AI עם ניסיון של למעלה מעשור בתחומי AI ו-Data Science. מוביל תחום GenAI ומטמיע סוכני AI בחברה גלובלית, עם מעל 3 שנות ניסיון בהטמעת בינה מלאכותית יוצרת.',
    'about.clients': 'מוביל AI Agents בחברת אנטרפרייז גלובלית, מרצה ויועץ AI של התנועה הקיבוצית, יועץ לחברות אדריכלים והנדסה מהגדולות בישראל, חברות ביטוח, ומרצה ויועץ AI לחברת Precise ולקוחות נוספים.',
    'about.specialty': 'מתמחה בהנגשת טכנולוגיות מתקדמות לצוותים לא-טכניים ופיתוח פתרונות מותאמים לצרכים עסקיים אמיתיים.',
    'about.vision.label': 'החזון שלי:',
    'about.vision': '"להפוך כל אדם ועסק ליעילים ומצליחים יותר באמצעות שימוש פשוט וטבעי בכלי בינה מלאכותית."',
    // Expertise cards
    'about.expertise.title': 'תחומי התמחות',
    'about.expertise.experience.title': 'מעל 10 שנות ניסיון',
    'about.expertise.experience.desc': 'ב-AI, ML ושינוי עסקי מבוסס נתונים',
    'about.expertise.development.title': 'התמחות בפיתוח',
    'about.expertise.development.desc': 'פתרונות GenAI, ייעוץ טכנולוגי ויישום, פיתוח אפליקציות',
    'about.expertise.training.title': 'מרצה מנוסה',
    'about.expertise.training.desc': 'הדרכה והרצאות מעשיות לקהלים טכניים ולא טכניים',
    
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
    'cta.button': 'שיחת איפיון GenAI חינם',

    // Courses page
    'courses.hero.title': 'קורסים והדרכות GenAI',
    'courses.hero.subtitle': 'בינה מלאכותית יישומית לארגונים, קיבוצים, מוסדות חינוך וצוותים מקצועיים. הקורסים וההדרכות שלנו נבנו כדי לאפשר למנהלים, צוותים ויחידים לרכוש מיומנויות מעשיות, להטמיע כלי AI בתהליכי העבודה ולהפיק ערך אמיתי מהטכנולוגיה כבר מהיום הראשון.',
    'courses.hero.cta': 'שיחת איפיון GenAI חינם',
    'courses.audiences.title': 'למי הקורסים מיועדים?',
    'courses.audiences.managers.title': 'מנהלים ובעלי תפקידים',
    'courses.audiences.managers.desc': 'קבלת החלטות מבוססת AI, ניהול ידע ותהליכים, סיכום פגישות והפקת תובנות, שיפור פרודוקטיביות וקבלת החלטות.',
    'courses.audiences.teams.title': 'צוותים וארגונים',
    'courses.audiences.teams.desc': 'עבודה משותפת עם כלי AI, כתיבה מקצועית ויצירת תוכן, אוטומציות ותהליכי עבודה, ניהול משימות ושיתוף ידע.',
    'courses.audiences.individuals.title': 'יחידים ואנשי מקצוע',
    'courses.audiences.individuals.desc': 'שיפור מיומנויות אישיות, יצירת תוצרים מקצועיים, בניית מצגות ותוכן, פיתוח פתרונות וכלים דיגיטליים.',
    'courses.grid.title': 'קטלוג קורסים והדרכות',
    'courses.card.duration': 'משך',
    'courses.card.level': 'רמה',
    'courses.card.format': 'פורמט',
    'courses.card.cta': 'פרטים והרשמה',
    'courses.syllabus.title': 'סילבוס מפורט',
    'courses.syllabus.intro': 'לחצו על כל קורס כדי לראות את תכניו המלאים.',
    'courses.formats.title': 'פורמטי הדרכה',
    'courses.formats.online.title': '💻 אונליין',
    'courses.formats.online.desc': 'למידה אינטראקטיבית מרחוק באמצעות Zoom או Teams.',
    'courses.formats.inperson.title': '🏢 פרונטלי',
    'courses.formats.inperson.desc': 'סדנאות והרצאות באתר הלקוח או במרכז הדרכה.',
    'courses.formats.inhouse.title': '🤝 In-House',
    'courses.formats.inhouse.desc': 'תוכנית מותאמת לארגון הכוללת התאמת תכנים, דוגמאות ותרגולים לצורכי הארגון.',
    'courses.why.title': 'למה לבחור בנו?',
    'courses.why.1': 'תוכן עדכני ומעשי',
    'courses.why.2': 'התאמה לקיבוצים, ארגונים ומוסדות חינוך',
    'courses.why.3': 'דגש על תוצרים ויישום מיידי',
    'courses.why.4': 'שילוב בין אסטרטגיה, עבודה מעשית וחדשנות',
    'courses.why.5': 'ליווי והטמעה לפי צורך',
    'courses.back': 'חזרה לדף הבית',

    // Footer
    'footer.copyright': '© 2025 GenAI-R Consulting',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.tools': 'Tools',
    'nav.courses': 'Courses',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'GenAI Consulting | Guides You to the World of AI',
    'hero.subtitle': 'Consulting, training and implementation of generative AI – for individuals and businesses',
    'hero.cta.whatsapp': 'Free GenAI Discovery Call',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.cta.tagline': "I'm here to help you embrace AI – easily and confidently",
    
    // About
    'about.title': 'About Me',
    'about.name': 'Matan Retzer',
    'about.subtitle': 'GenAI Consultant & Lecturer',
    'about.intro': 'Holding a Master\'s degree with deep experience in AI and machine learning. I collaborate with businesses to unlock new possibilities and help leverage AI to improve processes, increase efficiency, and drive growth.',
    'about.experience': 'AI Engineer with over a decade of experience in AI and Data Science. Leading GenAI domain and implementing AI agents in a large global company, with over 3 years of experience implementing generative AI.',
    'about.clients': 'Leading AI Agents at a global enterprise, AI lecturer and consultant for the Kibbutz Movement, consultant for leading architecture and engineering firms in Israel, insurance companies, and AI consultant for Precise and other clients.',
    'about.specialty': 'Specializing in making advanced technologies accessible to non-technical teams and developing solutions tailored to real business needs.',
    'about.vision.label': 'My Vision:',
    'about.vision': '"To make every person and business more efficient and successful through simple and natural use of AI tools."',
    // Expertise cards
    'about.expertise.title': 'Expertise Areas',
    'about.expertise.experience.title': '10+ Years Experience',
    'about.expertise.experience.desc': 'In AI, ML and data-driven business transformation',
    'about.expertise.development.title': 'Development Expertise',
    'about.expertise.development.desc': 'GenAI solutions, technology consulting & implementation, app development',
    'about.expertise.training.title': 'Experienced Lecturer',
    'about.expertise.training.desc': 'Practical training and lectures for technical and non-technical audiences',
    
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
    'cta.button': 'Free GenAI Discovery Call',

    // Courses page
    'courses.hero.title': 'GenAI Courses & Training',
    'courses.hero.subtitle': 'Applied artificial intelligence for organizations, kibbutzim, educational institutions and professional teams. Our courses and training are built to enable managers, teams and individuals to acquire practical skills, embed AI tools in workflows and extract real value from technology from day one.',
    'courses.hero.cta': 'Free GenAI Discovery Call',
    'courses.audiences.title': 'Who Are the Courses For?',
    'courses.audiences.managers.title': 'Managers & Leaders',
    'courses.audiences.managers.desc': 'AI-powered decision-making, knowledge and process management, meeting summaries and insights, productivity and decision improvement.',
    'courses.audiences.teams.title': 'Teams & Organizations',
    'courses.audiences.teams.desc': 'Collaborative work with AI tools, professional writing and content creation, automation and workflows, task management and knowledge sharing.',
    'courses.audiences.individuals.title': 'Individuals & Professionals',
    'courses.audiences.individuals.desc': 'Improving personal skills, creating professional deliverables, building presentations and content, developing solutions and digital tools.',
    'courses.grid.title': 'Course Catalog',
    'courses.card.duration': 'Duration',
    'courses.card.level': 'Level',
    'courses.card.format': 'Format',
    'courses.card.cta': 'Details & Signup',
    'courses.syllabus.title': 'Detailed Syllabus',
    'courses.syllabus.intro': 'Click any course to see its full contents.',
    'courses.formats.title': 'Training Formats',
    'courses.formats.online.title': '💻 Online',
    'courses.formats.online.desc': 'Interactive remote learning via Zoom or Teams.',
    'courses.formats.inperson.title': '🏢 In-person',
    'courses.formats.inperson.desc': 'Workshops and lectures at the client site or training center.',
    'courses.formats.inhouse.title': '🤝 In-House',
    'courses.formats.inhouse.desc': 'A tailored organizational program including customized content, examples and exercises.',
    'courses.why.title': 'Why Choose Us?',
    'courses.why.1': 'Up-to-date and practical content',
    'courses.why.2': 'Tailored for kibbutzim, organizations and educational institutions',
    'courses.why.3': 'Emphasis on deliverables and immediate implementation',
    'courses.why.4': 'Blend of strategy, hands-on work and innovation',
    'courses.why.5': 'Guidance and onboarding as needed',
    'courses.back': 'Back to home',

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