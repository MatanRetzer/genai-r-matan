import { Brain, Bot, Code2, BookOpen, LucideIcon } from 'lucide-react';

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
}

export const courses: Course[] = [
  {
    id: 'chatgpt-claude-managers',
    icon: Brain,
    title: {
      he: 'ChatGPT & Claude למנהלים',
      en: 'ChatGPT & Claude for Managers',
    },
    tagline: {
      he: 'שימוש יומיומי לפרודוקטיביות',
      en: 'Daily use for productivity',
    },
    description: {
      he: 'קורס מעשי המקנה למנהלים את היכולת לרתום את ChatGPT ו-Claude לעבודה היומית – ניסוח מסמכים, סיכום פגישות, ניתוח נתונים וקבלת החלטות מהירה יותר.',
      en: 'A hands-on course empowering managers to leverage ChatGPT and Claude for daily work – drafting documents, summarizing meetings, analyzing data and faster decision-making.',
    },
    duration: { he: '4 שעות', en: '4 hours' },
    level: { he: 'מתחילים', en: 'Beginners' },
    format: { he: 'אונליין / פרונטלי', en: 'Online / In-person' },
    syllabus: {
      he: [
        'מבוא ל-GenAI ולמודלי שפה',
        'הבדלים בין ChatGPT ל-Claude ומתי להשתמש בכל אחד',
        'אומנות ה-Prompt: ניסוח נכון לקבלת תוצאות איכותיות',
        'יישומים יומיומיים: מיילים, סיכומים, מצגות, תכנון',
        'תרגול מעשי על מקרים אמיתיים מהארגון',
      ],
      en: [
        'Introduction to GenAI and language models',
        'Differences between ChatGPT and Claude and when to use each',
        'Prompting craft: phrasing for quality results',
        'Daily applications: emails, summaries, decks, planning',
        'Hands-on practice on real organizational cases',
      ],
    },
  },
  {
    id: 'ai-agents-workshop',
    icon: Bot,
    title: {
      he: 'בניית AI Agents בפועל',
      en: 'Building AI Agents in Practice',
    },
    tagline: {
      he: 'סדנה מעשית לאוטומציה חכמה',
      en: 'Hands-on workshop for smart automation',
    },
    description: {
      he: 'סדנה מעשית בה תלמדו לבנות סוכני AI שמבצעים משימות באופן עצמאי – מאפיון הצורך, דרך בחירת הכלים ועד הרצה בארגון.',
      en: 'A hands-on workshop where you build AI agents that perform tasks autonomously – from needs definition, through tool selection, to organizational deployment.',
    },
    duration: { he: 'יום מלא', en: 'Full day' },
    level: { he: 'מתקדמים', en: 'Advanced' },
    format: { he: 'פרונטלי / In-house', en: 'In-person / In-house' },
    syllabus: {
      he: [
        'מהו AI Agent וההבדל ממודל שפה רגיל',
        'מקרי שימוש עסקיים נפוצים',
        'אפיון תהליך וזיהוי הזדמנויות אוטומציה',
        'בניית סוכן ראשון עם כלים מובילים בשוק',
        'אינטגרציה עם מערכות קיימות',
        'בקרה, אבטחה ושיקולי הטמעה בארגון',
      ],
      en: [
        'What is an AI Agent and how it differs from a regular LLM',
        'Common business use cases',
        'Process mapping and automation opportunities',
        'Building your first agent with leading tools',
        'Integration with existing systems',
        'Governance, security and organizational adoption',
      ],
    },
  },
  {
    id: 'vibe-coding-base44',
    icon: Code2,
    title: {
      he: 'Vibe Coding & BASE44',
      en: 'Vibe Coding & BASE44',
    },
    tagline: {
      he: 'בניית אפליקציות ללא קוד',
      en: 'Build apps with no code',
    },
    description: {
      he: 'הקורס הופך אותך ליזם דיגיטלי: לומדים לבנות אפליקציות, אתרים וכלים פנים-ארגוניים באמצעות Vibe Coding ו-BASE44, גם בלי רקע בפיתוח.',
      en: 'This course turns you into a digital builder: learn to create apps, websites and internal tools using Vibe Coding and BASE44 – no development background required.',
    },
    duration: { he: 'יום מלא', en: 'Full day' },
    level: { he: 'כל הרמות', en: 'All levels' },
    format: { he: 'אונליין / פרונטלי', en: 'Online / In-person' },
    syllabus: {
      he: [
        'מבוא ל-Vibe Coding והעקרונות שמאחוריו',
        'היכרות עם פלטפורמת BASE44',
        'מאפיון רעיון לאפליקציה עובדת',
        'עבודה עם נתונים, משתמשים והרשאות',
        'פרסום, שיתוף ושיפור איטרטיבי',
        'תרגול: בניית פרויקט אישי בסדנה',
      ],
      en: [
        'Introduction to Vibe Coding and its principles',
        'Getting to know the BASE44 platform',
        'From idea to working application',
        'Working with data, users and permissions',
        'Publishing, sharing and iterative improvement',
        'Hands-on: build a personal project in the workshop',
      ],
    },
  },
  {
    id: 'notebooklm-gamma',
    icon: BookOpen,
    title: {
      he: 'NotebookLM & Gamma לצוותים',
      en: 'NotebookLM & Gamma for Teams',
    },
    tagline: {
      he: 'מחקר ויצירת תוצרים מהירה',
      en: 'Research and rapid content creation',
    },
    description: {
      he: 'הדרכה ממוקדת לצוותים שצריכים להפיק מהר תוצרים מקצועיים – מחקר מבוסס מקורות עם NotebookLM ויצירת מצגות ומסמכים עיצוביים עם Gamma.',
      en: 'A focused session for teams that need to produce professional outputs fast – source-based research with NotebookLM and designed decks and documents with Gamma.',
    },
    duration: { he: '3 שעות', en: '3 hours' },
    level: { he: 'מתחילים-בינוני', en: 'Beginner-Intermediate' },
    format: { he: 'אונליין', en: 'Online' },
    syllabus: {
      he: [
        'NotebookLM: עבודה עם מקורות וקבלת תובנות מבוססות',
        'בניית מחקר פנים-ארגוני בזמן קצר',
        'Gamma: יצירת מצגות ומסמכים מעוצבים אוטומטית',
        'שילוב בין הכלים בתהליך עבודה אחד',
        'תרגול על תוצרים אמיתיים של הצוות',
      ],
      en: [
        'NotebookLM: working with sources and grounded insights',
        'Building internal research in short time',
        'Gamma: auto-generating designed decks and documents',
        'Combining the tools in one workflow',
        'Hands-on practice on real team deliverables',
      ],
    },
  },
];