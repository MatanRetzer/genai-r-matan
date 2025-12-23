import { useLanguage } from '@/contexts/LanguageContext';
import matanProfile from '@/assets/matan-profile.jpg';
import AnimatedSection from './AnimatedSection';
import { Brain, Code, Mic } from 'lucide-react';

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  const expertiseCards = [
    {
      icon: Brain,
      titleKey: 'about.expertise.experience.title',
      descKey: 'about.expertise.experience.desc',
    },
    {
      icon: Code,
      titleKey: 'about.expertise.development.title',
      descKey: 'about.expertise.development.desc',
    },
    {
      icon: Mic,
      titleKey: 'about.expertise.training.title',
      descKey: 'about.expertise.training.desc',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gradient text-center">
              {t('about.title')}
            </h2>
          </AnimatedSection>
          
          {/* Profile Card */}
          <AnimatedSection delay={100}>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 mb-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20">
                    <img 
                      src={matanProfile} 
                      alt={t('about.name')}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Name & Intro */}
                <div className="flex flex-col gap-2 text-center md:text-start flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">
                    {t('about.name')}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base font-medium">
                    {t('about.subtitle')}
                  </p>
                  <p className="text-foreground/90 leading-relaxed text-sm md:text-base mt-2">
                    {t('about.intro')}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Experience & Clients - Flowing text */}
          <AnimatedSection delay={200}>
            <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-5 md:p-6 mb-10">
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>{t('about.experience')}</p>
                <p>{t('about.clients')}</p>
                <p className="text-foreground font-medium">{t('about.specialty')}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Expertise Cards */}
          <AnimatedSection delay={300}>
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 text-foreground">
              {t('about.expertise.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
              {expertiseCards.map((card, index) => (
                <div 
                  key={index}
                  className="group bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl p-5 md:p-6 text-center hover:border-primary/50 hover:bg-card/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                    {t(card.titleKey)}
                  </h4>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {t(card.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Vision */}
          <AnimatedSection delay={400}>
            <div className="text-center max-w-2xl mx-auto p-6 rounded-xl bg-primary/5 border border-primary/20">
              <span className="text-primary font-semibold text-base md:text-lg">{t('about.vision.label')}</span>
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
