# תוכנית: עמוד קורסים חדש

## החלטות ברירת מחדל (לפי ה-Memory והאתר)
- **רשימת קורסים (4, תואמים ל-4 השירותים והכלים הקיימים):**
  1. **ChatGPT & Claude למנהלים** — שימוש יומיומי לפרודוקטיביות (4 שעות).
  2. **בניית AI Agents בפועל** — סדנה מעשית (יום מלא).
  3. **Vibe Coding & BASE44** — בניית אפליקציות ללא קוד (יום מלא).
  4. **NotebookLM & Gamma לצוותים** — מחקר ויצירת תוצרים (3 שעות).
- **מבנה:** עמוד יחיד `/courses` עם כרטיסים + סילבוס באקורדיון (ללא עמודי משנה).
- **הרשמה:** כפתור "פרטים והרשמה" בכל קורס → `mailto:` עם subject מוכן מראש (תואם למדיניות Memory: ללא APIs).
- **ניווט:** לינק "קורסים" ב-Header + Footer; ללא תצוגה מקדימה בדף הבית (נשמר נקי).

## מבנה העמוד (Mobile-First)
```text
Header
├─ Hero: "קורסים והדרכות GenAI" + תת-כותרת + CTA ראשי
├─ Audiences strip: מנהלים / צוותים / יחידים (3 אייקונים)
├─ Courses Grid: 4 כרטיסים (אייקון, שם, משך, רמה, פורמט, תיאור, "פרטים")
├─ Syllabus Accordion: סילבוס מפורט לכל קורס (נפתח בלחיצה)
├─ Formats: אונליין / פרונטלי / In-house (3 כרטיסים)
├─ Testimonials (re-use של הקרוסלה הקיימת)
├─ Newsletter CTA (re-use קיים)
└─ Footer
```

## עיצוב
שימוש מלא ב-Design Tokens הקיימים: רקע navy (`--background`), accent cyan (`--primary`), `card-gradient`, `glow-box`, `rounded-xl`, אנימציית `AnimatedSection`. תאימות מלאה RTL/LTR ו-Mobile-First. אייקונים מ-`lucide-react`.

## SEO
`Helmet` ייעודי: title `קורסים והדרכות GenAI | מתן רטצר`, meta description עם מילות מפתח (ייעוץ GenAI, סדנאות AI, AI Agents), JSON-LD מסוג `Course` לכל קורס.

## פרטים טכניים
**קבצים חדשים:**
- `src/pages/Courses.tsx` — העמוד עצמו (Lazy-loaded, Helmet, LanguageProvider).
- `src/components/courses/CoursesHero.tsx`
- `src/components/courses/CoursesGrid.tsx` — כרטיסי הקורסים.
- `src/components/courses/CourseSyllabus.tsx` — אקורדיון (shadcn `accordion`).
- `src/components/courses/CourseFormats.tsx`
- `src/data/courses.ts` — מערך הקורסים (id, title he/en, duration, level, format, description, syllabus[]).

**קבצים שיתעדכנו:**
- `src/App.tsx` — `Route path="/courses"` (Lazy + Suspense).
- `src/contexts/LanguageContext.tsx` — מפתחות `nav.courses`, `courses.*` בעברית ובאנגלית.
- `src/components/landing/Header.tsx` — הוספת לינק "קורסים" (פנימי `/courses`, לא anchor).
- `src/components/landing/Footer.tsx` — לינק "קורסים".

**Analytics:** הוספת `gtag('event', 'course_interest', {course_id})` בלחיצה על כפתור הרשמה (תואם GA4 הקיים).

## מה לא נכלל
- אין backend, אין תשלום, אין רישום אמיתי — רק mailto (תואם Memory).
- אין עמוד נפרד לכל קורס (אפשר להוסיף בעתיד אם תרצה).
- אין תוכן שיווקי מומצא — אשתמש רק בנתונים שאישרת לעיל; אם יש סילבוסים מדויקים שתרצה להוסיף, שלח אותם ואטמיע כלשונם.