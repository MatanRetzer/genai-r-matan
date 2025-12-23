import { useLanguage } from '@/contexts/LanguageContext';
import { User, Briefcase, Award } from 'lucide-react';

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { icon: Award, value: '10+', label: t('about.experience') },
    { icon: Briefcase, value: '50+', label: t('about.projects') },
    { icon: User, value: '30+', label: t('about.clients') },
  ];

  return (
    <section id="about" className="py-24 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
            {t('about.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            {t('about.text')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="card-gradient p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;