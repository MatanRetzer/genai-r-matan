import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/landing/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { courses } from '@/data/courses';
import { CheckCircle2 } from 'lucide-react';

const CourseSyllabus = () => {
  const { t, isRTL, language } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-card/50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gradient">
            {t('courses.syllabus.title')}
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-sm md:text-base">
            {t('courses.syllabus.intro')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {courses.map((course) => (
              <AccordionItem
                key={course.id}
                value={course.id}
                className="border border-border rounded-xl px-4 md:px-5 bg-card"
              >
                <AccordionTrigger className="text-start hover:no-underline py-4">
                  <span className="flex items-center gap-3">
                    <course.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-semibold text-foreground text-base md:text-lg">
                      {course.title[language]}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2 pb-2">
                    {course.syllabus[language].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CourseSyllabus;