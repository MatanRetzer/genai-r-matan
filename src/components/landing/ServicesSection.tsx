import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbulb, Bot, GraduationCap, Users, Zap, Target } from 'lucide-react';

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Lightbulb,
      title: t('services.strategy.title'),
      description: t('services.strategy.desc'),
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
    {
      icon: Bot,
      title: t('services.agents.title'),
      description: t('services.agents.desc'),
    },
    {
      icon: Zap,
      title: t('services.implementation.title'),
      description: t('services.implementation.desc'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-card/50" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
          {t('services.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:glow-box"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
