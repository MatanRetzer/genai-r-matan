import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/landing/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Clock, BarChart3, MonitorSmartphone } from 'lucide-react';
import { courses, Course } from '@/data/courses';

const EMAIL = 'matan.retzer@genai-r.com';

const trackInterest = (id: string) => {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', 'course_interest', {
      event_category: 'Courses',
      event_label: id,
    });
  }
};

const buildMailto = (course: Course, lang: 'he' | 'en') => {
  const subject =
    lang === 'he'
      ? `התעניינות בקורס: ${course.title.he}`
      : `Interest in course: ${course.title.en}`;
  const body =
    lang === 'he'
      ? `שלום מתן,\n\nאני מתעניין/ת בקורס "${course.title.he}".\nאשמח לקבל פרטים נוספים על המועדים, התכנים והעלות.\n\nשם:\nטלפון:\nארגון (אם רלוונטי):\n\nתודה!`
      : `Hi Matan,\n\nI'm interested in the "${course.title.en}" course.\nI'd love more details on dates, content and pricing.\n\nName:\nPhone:\nOrganization (if relevant):\n\nThanks!`;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const CoursesGrid = () => {
  const { t, isRTL, language } = useLanguage();

  return (
    <section id="courses-grid" className="py-16 md:py-24" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14 text-gradient">
            {t('courses.grid.title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {courses.map((course, idx) => (
            <AnimatedSection key={course.id} delay={idx * 100}>
              <div className="group card-gradient p-6 md:p-7 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:glow-box h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <course.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {course.title[language]}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {course.tagline[language]}
                    </p>
                  </div>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  {course.description[language]}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-5 text-xs md:text-sm">
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-secondary/40">
                    <Clock className="w-4 h-4 text-primary mb-1" />
                    <span className="text-muted-foreground">{t('courses.card.duration')}</span>
                    <span className="font-medium text-foreground">{course.duration[language]}</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-secondary/40">
                    <BarChart3 className="w-4 h-4 text-primary mb-1" />
                    <span className="text-muted-foreground">{t('courses.card.level')}</span>
                    <span className="font-medium text-foreground">{course.level[language]}</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-secondary/40">
                    <MonitorSmartphone className="w-4 h-4 text-primary mb-1" />
                    <span className="text-muted-foreground">{t('courses.card.format')}</span>
                    <span className="font-medium text-foreground text-[11px] md:text-xs">{course.format[language]}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a
                      href={buildMailto(course, language)}
                      onClick={() => trackInterest(course.id)}
                    >
                      {t('courses.card.cta')}
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;