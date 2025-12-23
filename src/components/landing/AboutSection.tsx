import { useLanguage } from '@/contexts/LanguageContext';
import matanProfile from '@/assets/matan-profile.jpg';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-24 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center">
              {t('about.title')}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20">
                  <img 
                    src={matanProfile} 
                    alt="מתן רטצר - יועץ GenAI" 
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Name & Intro Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl md:text-3xl font-bold text-primary text-center md:text-start">
                  {t('about.name')}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center md:text-start">
                  {t('about.intro')}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Details */}
          <AnimatedSection delay={200}>
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {t('about.experience.text')}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {t('about.clients.text')}
              </p>
              <p className="text-foreground font-medium leading-relaxed text-sm md:text-base">
                {t('about.specialty')}
              </p>
            </div>
          </AnimatedSection>

          {/* Vision */}
          <AnimatedSection delay={300}>
            <div className="text-center max-w-2xl mx-auto p-6 rounded-xl bg-primary/5 border border-primary/20">
              <span className="text-primary font-semibold text-lg">{t('about.vision.label')}</span>
              <blockquote className="text-primary/90 italic mt-2 text-base md:text-lg">
                {t('about.vision')}
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
