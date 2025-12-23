import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Users, Rocket, User } from 'lucide-react';

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
    <section className="py-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gradient">
          {t('audiences.title')}
        </h2>
        
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          {t('audiences.intro')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="group p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-base font-semibold mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudiencesSection;
