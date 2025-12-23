import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, UserCheck, Zap } from 'lucide-react';

const ApproachSection = () => {
  const { t, isRTL } = useLanguage();

  const approaches = [
    {
      icon: BookOpen,
      title: t('approach.learning.title'),
      description: t('approach.learning.desc'),
    },
    {
      icon: UserCheck,
      title: t('approach.personalized.title'),
      description: t('approach.personalized.desc'),
    },
    {
      icon: Zap,
      title: t('approach.results.title'),
      description: t('approach.results.desc'),
    },
  ];

  return (
    <section className="py-20 bg-card/30" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gradient">
          {t('approach.title')}
        </h2>
        
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          {t('approach.intro')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {approaches.map((item, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-xl border border-border/50 bg-background/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
