import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, Linkedin } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo.png';

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
      {/* Background Image with lazy loading */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      
      {/* Animated glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] animate-pulse z-10" />

      <div className="container relative z-20 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo above headline */}
          <img 
            src={logo} 
            alt="GenAI-R Logo" 
            className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-4 drop-shadow-2xl animate-fade-in"
            loading="eager"
          />
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient">{t('hero.title')}</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="glow-box hover:glow-box-strong transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 gap-2 order-1 w-full sm:w-auto"
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
              className="border-primary/50 hover:bg-primary/10 hover:border-primary text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 gap-2 order-2 w-full sm:w-auto"
              asChild
            >
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                {t('hero.cta.linkedin')}
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground text-base sm:text-lg mt-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {t('hero.cta.tagline')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
