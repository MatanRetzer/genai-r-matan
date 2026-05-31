import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/landing/AnimatedSection';
import { CheckCircle2 } from 'lucide-react';

const CoursesWhy = () => {
  const { t, isRTL } = useLanguage();

  const reasons = [
    t('courses.why.1'),
    t('courses.why.2'),
    t('courses.why.3'),
    t('courses.why.4'),
    t('courses.why.5'),
  ];

  return (
    <section className="py-16 md:py-24 bg-card/50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14 text-gradient">
            {t('courses.why.title')}
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-1 gap-4">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-base md:text-lg text-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CoursesWhy;
