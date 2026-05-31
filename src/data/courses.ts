import {
  Brain,
  Sparkles,
  Target,
  CalendarDays,
  BookOpen,
  BarChart3,
  Monitor,
  Bot,
  Code2,
  LucideIcon,
} from 'lucide-react';

export interface Course {
  id: string;
  icon: LucideIcon;
  title: { he: string; en: string };
  tagline: { he: string; en: string };
  description: { he: string; en: string };
  duration: { he: string; en: string };
  level: { he: string; en: string };
  format: { he: string; en: string };
  syllabus: { he: string[]; en: string[] };
  detailedSyllabus?: { he: string[]; en: string[] };
}

export const courses: Course[] = [
  {
    id: 'ai-foundations',
    icon: Brain,
    title: {
      he: 'יסודות הבינה המלאכותית ו-GenAI',
      en: 'AI & GenAI Foundations',
    },
    tagline: {
      he: 'היכרות מעמיקה עם עולם ה-AI',
      en: 'Deep dive into the world of AI',
    },
    description: {
      he: 'היכרות עם עולם הבינה המלאכותית, הכלים המרכזיים והשימושים המעשיים בארגון.',
      en: 'An introduction to artificial intelligence, key tools and practical organizational use cases.',
    },
    duration: { he: '4 שעות', en: '4 hours' },
    level: { he: 'מתחילים', en: 'Beginners' },
    format: { he: 'אונליין | פרונטלי | In-House', en: 'Online | In-person | In-House' },
    syllabus: {
      he: [
        'יסודות AI ו-LLM',
        'ChatGPT, Gemini, Claude, Perplexity',
        'שימושים ארגוניים וקהילתיים',
        'פרטיות, אתיקה ושימוש אחראי',
      ],
      en: [
        'AI and LLM fundamentals',
        'ChatGPT, Gemini, Claude, Perplexity',
        'Organizational and community use cases',
        'Privacy, ethics and responsible use',
      ],
    },
    detailedSyllabus: {
      he: [
        'מבוא לעולם ה-AI',
        'סוגי מודלים וכלים',
        'שימושים ארגוניים',
        'פרטיות ואתיקה',
        'תרגול מעשי',
      ],
      en: [
        'Introduction to the world of AI',
        'Types of models and tools',
        'Organizational use cases',
        'Privacy and ethics',
        'Hands-on practice',
      ],
    },
  },
  {
    id: 'prompt-engineering',
    icon: Sparkles,
    title: {
      he: 'פרומפטים, כתיבה מקצועית וסיכום מידע',
      en: 'Prompts, Professional Writing & Summarization',
    },
    tagline: {
      he: 'להפיק תוצרים מקצועיים באמצעות AI',
      en: 'Produce professional outputs with AI',
    },
    description: {
      he: 'ללמוד כיצד לנסח הנחיות איכותיות ולהפיק תוצרים מקצועיים באמצעות AI.',
      en: 'Learn how to craft quality prompts and produce professional deliverables using AI.',
    },
    duration: { he: '4 שעות', en: '4 hours' },
    level: { he: 'מתחילים–בינוניים', en: 'Beginner–Intermediate' },
    format: { he: 'אונליין | פרונטלי | In-House', en: 'Online | In-person | In-House' },
    syllabus: {
      he: [
        'עקרונות Prompt Engineering',
        'כתיבת מיילים ומסמכים',
        'סיכומי פגישות ופרוטוקולים',
        'התאמת מסרים לקהלי יעד שונים',
      ],
      en: [
        'Prompt Engineering principles',
        'Writing emails and documents',
        'Meeting summaries and minutes',
        'Tailoring messages for different audiences',
      ],
    },
    detailedSyllabus: {
      he: [
        'עקרונות Prompt Engineering',
        'כתיבה, שכתוב ועריכה',
        'סיכומים ודוחות',
        'בניית ספריית פרומפטים',
      ],
      en: [
        'Prompt Engineering principles',
        'Writing, rewriting and editing',
        'Summaries and reports',
        'Building a prompt library',
      ],
    },
  },
  {
    id: 'strategic-decisions',
    icon: Target,
    title: {
      he: 'קבלת החלטות אסטרטגיות עם AI',
      en: 'Strategic Decision-Making with AI',
    },
    tagline: {
      he: 'שילוב AI בתהליכי קבלת החלטות',
      en: 'Integrate AI into decision-making',
    },
    description: {
      he: 'שילוב AI בתהליכי קבלת החלטות, ניתוח חלופות ובחינת תרחישים.',
      en: 'Integrating AI into decision-making processes, analyzing alternatives and evaluating scenarios.',
    },
    duration: { he: '4 שעות', en: '4 hours' },
    level: { he: 'בינוני–מתקדם', en: 'Intermediate–Advanced' },
    format: { he: 'אונליין | פרונטלי | In-House', en: 'Online | In-person | In-House' },
    syllabus: {
      he: [
        'איסוף מידע, נתונים ובנצ\'מרקים',
        'יצירת חלופות ופתרונות',
        'מודלים מנטליים וחשיבה ביקורתית',
        '"פרקליט השטן" ובדיקת הנחות',
        'סימולציות מול בעלי עניין',
        'גיוס תמיכה להחלטות אסטרטגיות',
      ],
      en: [
        'Gathering information, data and benchmarks',
        'Generating alternatives and solutions',
        'Mental models and critical thinking',
        '"Devil\'s advocate" and assumption testing',
        'Simulations with stakeholders',
        'Building support for strategic decisions',
      ],
    },
    detailedSyllabus: {
      he: [
        'איסוף מידע וניתוח נתונים',
        'בנצ\'מרקים והשוואות',
        'פיתוח חלופות',
        'חשיבה ביקורתית',
        'סימולציות מול בעלי עניין',
        'בניית תוכנית פעולה',
      ],
      en: [
        'Information gathering and data analysis',
        'Benchmarks and comparisons',
        'Developing alternatives',
        'Critical thinking',
        'Simulations with stakeholders',
        'Building an action plan',
      ],
    },
  },
  {
    id: 'meeting-management',
    icon: CalendarDays,
    title: {
      he: 'ניהול וסיכום פגישות עם AI',
      en: 'Meeting Management & Summarization with AI',
    },
    tagline: {
      he: 'פגישות יעילות, מתועדות ומבוססות משימות',
      en: 'Efficient, documented and task-based meetings',
    },
    description: {
      he: 'הפיכת פגישות לתהליך יעיל, מתועד ומבוסס משימות.',
      en: 'Turning meetings into an efficient, documented and task-driven process.',
    },
    duration: { he: '4 שעות', en: '4 hours' },
    level: { he: 'מתחילים–בינוניים', en: 'Beginner–Intermediate' },
    format: { he: 'אונליין | פרונטלי | In-House', en: 'Online | In-person | In-House' },
    syllabus: {
      he: [
        'הכנת סדר יום',
        'תמלול וסיכום פגישות',
        'חילוץ משימות והחלטות',
        'מעקב ובקרה',
      ],
      en: [
        'Agenda preparation',
        'Transcription and meeting summaries',
        'Extracting tasks and decisions',
        'Follow-up and oversight',
      ],
    },
  },
  {
    id: 'knowledge-management',
    icon: BookOpen,
    title: {
      he: 'ניהול ידע וכלי Google AI',
      en: 'Knowledge Management & Google AI Tools',
    },
    tagline: {
      he: 'ניהול מסמכים וידע ארגוני עם AI',
      en: 'Managing documents and organizational knowledge with AI',
    },
    description: {
      he: 'שימוש בכלי AI לניהול מסמכים, ידע ארגוני ומידע מקצועי.',
      en: 'Using AI tools to manage documents, organizational knowledge and professional information.',
    },
    duration: { he: '4 שעות', en: '4 hours' },
    level: { he: 'מתחילים–בינוניים', en: 'Beginner–Intermediate' },
    format: { he: 'אונליין | פרונטלי | In-House', en: 'Online | In-person | In-House' },
    syllabus: {
      he: [
        'Gemini',
        'NotebookLM',
        'ארגון מידע וידע',
        'סיכום מסמכים ודוחות',
        'יצירת מאגרי ידע',
      ],
      en: [
        'Gemini',
        'NotebookLM',
        'Organizing information and knowledge',
        'Summarizing documents and reports',
        'Building knowledge bases',
      ],
    },
  },
  {
    id: 'data-analysis',
    icon: BarChart3,
    title: {
      he: 'ניתוח נתונים ותובנות עם AI',
      en: 'Data Analysis & Insights with AI',
    },
    tagline: {
      he: 'הפקת תובנות עסקיות מנתונים',
      en: 'Deriving business insights from data',
    },
    description: {
      he: 'הפקת תובנות עסקיות וניהוליות מנתונים בצורה פשוטה ומהירה.',
      en: 'Extracting business and managerial insights from data simply and quickly.',
    },
    duration: { he: '4 שעות', en: '4 hours' },
    level: { he: 'בינוני', en: 'Intermediate' },
    format: { he: 'אונליין | פרונטלי | In-House', en: 'Online | In-person | In-House' },
    syllabus: {
      he: [
        'עבודה עם נתונים',
        'זיהוי מגמות ודפוסים',
        'יצירת דוחות ותרשימים',
        'הפקת תובנות ניהוליות',
      ],
      en: [
        'Working with data',
        'Identifying trends and patterns',
        'Creating reports and charts',
        'Generating managerial insights',
      ],
    },
    detailedSyllabus: {
      he: [
        'ניתוח קבצים ודוחות',
        'זיהוי מגמות',
        'גרפים ודשבורדים',
        'קבלת החלטות מבוססת נתונים',
      ],
      en: [
        'Analyzing files and reports',
        'Identifying trends',
        'Charts and dashboards',
        'Data-driven decision-making',
      ],
    },
  },
  {
    id: 'gamma-ai',
    icon: Monitor,
    title: {
      he: 'Gamma AI, מצגות ויצירת תוכן',
      en: 'Gamma AI, Presentations & Content Creation',
    },
    tagline: {
      he: 'תוצרים ויזואליים מקצועיים עם AI',
      en: 'Professional visual deliverables with AI',
    },
    description: {
      he: 'יצירת מצגות מקצועיות, מסמכי תוכן, דפי מידע ותוצרים ויזואליים באמצעות כלי AI מתקדמים.',
      en: 'Creating professional presentations, content documents, info pages and visual deliverables using advanced AI tools.',
    },
    duration: { he: '4 שעות', en: '4 hours' },
    level: { he: 'מתחילים', en: 'Beginners' },
    format: { he: 'אונליין | פרונטלי | In-House', en: 'Online | In-person | In-House' },
    syllabus: {
      he: [
        'היכרות עם Gamma AI',
        'יצירת מצגות באמצעות הנחיות טקסט',
        'בניית Storytelling ומבנה מצגת אפקטיבי',
        'הפקת מסמכים ודפי מידע מעוצבים',
        'שילוב תמונות, תרשימים ונתונים',
        'התאמת מסרים לקהלי יעד שונים',
        'עבודה משולבת עם ChatGPT וכלי AI נוספים',
      ],
      en: [
        'Introduction to Gamma AI',
        'Creating presentations via text prompts',
        'Building storytelling and effective deck structure',
        'Producing designed documents and info pages',
        'Integrating images, charts and data',
        'Tailoring messages for different audiences',
        'Combined workflow with ChatGPT and additional AI tools',
      ],
    },
    detailedSyllabus: {
      he: [
        'היכרות עם סביבת Gamma',
        'בניית מצגות באמצעות AI',
        'יצירת מסמכים ודפי מידע',
        'Storytelling עסקי וקהילתי',
        'שילוב נתונים ותרשימים',
        'עיצוב מהיר ואפקטיבי',
        'הפקת תוצרים מוכנים לשימוש',
      ],
      en: [
        'Getting to know the Gamma environment',
        'Building presentations with AI',
        'Creating documents and info pages',
        'Business and community storytelling',
        'Integrating data and charts',
        'Fast and effective design',
        'Producing ready-to-use deliverables',
      ],
    },
  },
  {
    id: 'ai-agents',
    icon: Bot,
    title: {
      he: 'סוכני AI ואוטומציות',
      en: 'AI Agents & Automation',
    },
    tagline: {
      he: 'בניית תהליכים אוטומטיים חכמים',
      en: 'Building smart automated workflows',
    },
    description: {
      he: 'הכרת עולם הסוכנים החכמים ובניית תהליכים אוטומטיים.',
      en: 'Getting to know the world of smart agents and building automated workflows.',
    },
    duration: { he: '4 שעות', en: '4 hours' },
    level: { he: 'בינוני–מתקדם', en: 'Intermediate–Advanced' },
    format: { he: 'אונליין | פרונטלי | In-House', en: 'Online | In-person | In-House' },
    syllabus: {
      he: [
        'AI Agents',
        'אוטומציות ארגוניות',
        'זרימות עבודה',
        'תהליכים חוזרים וייעול משימות',
      ],
      en: [
        'AI Agents',
        'Organizational automation',
        'Workflows',
        'Recurring processes and task optimization',
      ],
    },
    detailedSyllabus: {
      he: [
        'בניית סוכנים',
        'תהליכי אוטומציה',
        'ניהול משימות',
        'שיפור תהליכים',
      ],
      en: [
        'Building agents',
        'Automation processes',
        'Task management',
        'Process improvement',
      ],
    },
  },
  {
    id: 'vibe-coding',
    icon: Code2,
    title: {
      he: 'Vibe Coding ובניית פתרונות ללא קוד',
      en: 'Vibe Coding & No-Code Solutions',
    },
    tagline: {
      he: 'פיתוח אפליקציות וכלים דיגיטליים ללא תכנות',
      en: 'Developing apps and digital tools without coding',
    },
    description: {
      he: 'פיתוח אפליקציות, כלים ופתרונות דיגיטליים באמצעות AI ללא צורך בידע בתכנות.',
      en: 'Developing applications, tools and digital solutions using AI without any programming knowledge.',
    },
    duration: { he: '4 שעות', en: '4 hours' },
    level: { he: 'בינוני–מתקדם', en: 'Intermediate–Advanced' },
    format: { he: 'אונליין | פרונטלי | In-House', en: 'Online | In-person | In-House' },
    syllabus: {
      he: [
        'Vibe Coding',
        'No-Code Development',
        'אפיון מוצרים',
        'בניית אב-טיפוס',
        'פיתוח כלים דיגיטליים',
      ],
      en: [
        'Vibe Coding',
        'No-Code Development',
        'Product specification',
        'Building prototypes',
        'Developing digital tools',
      ],
    },
    detailedSyllabus: {
      he: [
        'פיתוח ללא קוד',
        'אפיון פתרונות',
        'בניית אפליקציות',
        'יצירת MVP',
      ],
      en: [
        'No-code development',
        'Solution specification',
        'Building applications',
        'Creating an MVP',
      ],
    },
  },
];
