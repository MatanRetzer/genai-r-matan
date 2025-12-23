import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, Linkedin } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  // Placeholder links - easily editable
  const WHATSAPP_LINK = 'https://wa.me/972000000000';
  const LINKEDIN_LINK = 'https://linkedin.com/in/your-profile';

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      {/* Animated glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse z-10" />

      <div className="container relative z-20 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">{t('hero.title')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="glow-box hover:glow-box-strong transition-all duration-300 text-lg px-8 py-6 gap-2 order-1"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {t('hero.cta.whatsapp')}
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary text-lg px-8 py-6 gap-2 order-2"
              asChild
            >
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                {t('hero.cta.linkedin')}
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;