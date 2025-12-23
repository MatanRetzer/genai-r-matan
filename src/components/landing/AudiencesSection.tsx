import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Users, Rocket, User } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AudiencesSection = () => {
  const { t, isRTL } = useLanguage();

  const audiences = [
    {
      icon: Building2,
      title: t('audiences.business.title'),
      description: t('audiences.business.desc'),
    },
    {
      icon: Users,
      title: t('audiences.teams.title'),
      description: t('audiences.teams.desc'),
    },
    {
      icon: Rocket,
      title: t('audiences.entrepreneurs.title'),
      description: t('audiences.entrepreneurs.desc'),
    },
    {
      icon: User,
      title: t('audiences.personal.title'),
      description: t('audiences.personal.desc'),
    },
  ];

  return (
    <section className="py-16 md:py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gradient">
            {t('audiences.title')}
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed text-sm md:text-base px-4">
            {t('audiences.intro')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
          {audiences.map((item, index) => (
            <AnimatedSection key={index} delay={200 + index * 100}>
              <div className="group p-4 md:p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300 h-full">
                <item.icon className="w-7 h-7 md:w-8 md:h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm md:text-base font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudiencesSection;
