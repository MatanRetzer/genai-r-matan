import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/landing/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Clock, BarChart3, MonitorSmartphone, Check, Info } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
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
  const [openCourse, setOpenCourse] = useState<Course | null>(null);

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
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      variant="outline"
                      className="w-full sm:flex-1 border-primary/40 hover:bg-primary/10"
                      onClick={() => setOpenCourse(course)}
                    >
                      <Info className="w-4 h-4 me-2" />
                      {t('courses.card.more')}
                    </Button>
                    <Button
                      asChild
                      className="w-full sm:flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
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
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Dialog open={!!openCourse} onOpenChange={(o) => !o && setOpenCourse(null)}>
        <DialogContent
          dir={isRTL ? 'rtl' : 'ltr'}
          className="max-w-2xl max-h-[85vh] overflow-y-auto card-gradient border-border"
        >
          {openCourse && (
            <>
              <DialogHeader className={isRTL ? 'text-right' : 'text-left'}>
                <div className="flex items-start gap-3 mb-2">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                    <openCourse.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <DialogTitle className="text-xl md:text-2xl text-gradient">
                      {openCourse.title[language]}
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground mt-1">
                      {openCourse.tagline[language]}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-5">
                <div className="grid grid-cols-3 gap-2 text-xs md:text-sm">
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-secondary/40">
                    <Clock className="w-4 h-4 text-primary mb-1" />
                    <span className="text-muted-foreground">{t('courses.card.duration')}</span>
                    <span className="font-medium text-foreground">{openCourse.duration[language]}</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-secondary/40">
                    <BarChart3 className="w-4 h-4 text-primary mb-1" />
                    <span className="text-muted-foreground">{t('courses.card.level')}</span>
                    <span className="font-medium text-foreground">{openCourse.level[language]}</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-2 rounded-lg bg-secondary/40">
                    <MonitorSmartphone className="w-4 h-4 text-primary mb-1" />
                    <span className="text-muted-foreground">{t('courses.card.format')}</span>
                    <span className="font-medium text-foreground text-[11px] md:text-xs">{openCourse.format[language]}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                    {t('courses.modal.overview')}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {openCourse.description[language]}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                    {t('courses.modal.learn')}
                  </h4>
                  <ul className="space-y-2">
                    {openCourse.syllabus[language].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm md:text-base text-foreground">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {openCourse.detailedSyllabus && (
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                      {t('courses.modal.detailed')}
                    </h4>
                    <ul className="space-y-2 rounded-xl bg-secondary/30 p-4 border border-border/50">
                      {openCourse.detailedSyllabus[language].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <DialogFooter className="mt-4">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href={buildMailto(openCourse, language)}
                    onClick={() => trackInterest(openCourse.id)}
                  >
                    {t('courses.modal.register')}
                  </a>
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CoursesGrid;