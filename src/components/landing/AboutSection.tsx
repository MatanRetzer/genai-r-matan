import { useLanguage } from '@/contexts/LanguageContext';
import { User, Briefcase, Award } from 'lucide-react';
import matanProfile from '@/assets/matan-profile.jpg';

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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center">
            {t('about.title')}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20">
                <img 
                  src={matanProfile} 
                  alt="Matan - GenAI Consultant" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            
            {/* About Text */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-start">
              {t('about.text')}
            </p>
          </div>

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