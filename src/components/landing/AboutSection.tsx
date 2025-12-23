import { useLanguage } from '@/contexts/LanguageContext';
import matanProfile from '@/assets/matan-profile.jpg';

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-24 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center">
            {t('about.title')}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8">
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
            
            {/* Intro Text */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-start">
              {t('about.intro')}
            </p>
          </div>

          {/* Details */}
          <div className="space-y-6 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              {t('about.experience.text')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.clients.text')}
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              {t('about.specialty')}
            </p>
          </div>

          {/* Quote */}
          <blockquote className="text-primary italic text-center border-s-2 border-primary ps-4 max-w-2xl mx-auto">
            {t('about.quote')}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
