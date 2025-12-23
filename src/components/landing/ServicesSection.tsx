import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbulb, Users, GraduationCap, Target } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Lightbulb,
      title: t('services.solutions.title'),
      description: t('services.solutions.desc'),
    },
    {
      icon: Users,
      title: t('services.consulting.title'),
      description: t('services.consulting.desc'),
    },
    {
      icon: GraduationCap,
      title: t('services.training.title'),
      description: t('services.training.desc'),
    },
    {
      icon: Target,
      title: t('services.mentoring.title'),
      description: t('services.mentoring.desc'),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-card/50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gradient">
            {t('services.title')}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="group card-gradient p-6 md:p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:glow-box h-full">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
