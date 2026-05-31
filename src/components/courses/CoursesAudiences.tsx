import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/landing/AnimatedSection';
import { Briefcase, Users, User } from 'lucide-react';

const CoursesAudiences = () => {
  const { t, isRTL } = useLanguage();

  const items = [
    { icon: Briefcase, title: t('courses.audiences.managers.title'), desc: t('courses.audiences.managers.desc') },
    { icon: Users, title: t('courses.audiences.teams.title'), desc: t('courses.audiences.teams.desc') },
    { icon: User, title: t('courses.audiences.individuals.title'), desc: t('courses.audiences.individuals.desc') },
  ];

  return (
    <section className="py-12 md:py-16 bg-card/30" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-foreground">
            {t('courses.audiences.title')}
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 80}>
              <div className="flex flex-col p-5 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors h-full">
                <div className="flex items-center gap-4 mb-3">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-foreground">
                    {item.title}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesAudiences;
