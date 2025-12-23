import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, Linkedin, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo.png';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  // Placeholder links - easily editable
  const WHATSAPP_LINK = 'https://wa.me/972524538121?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%AA%D7%9F%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%20%D7%94AI%20%D7%A9%D7%90%D7%AA%D7%94%20%D7%9E%D7%A6%D7%99%D7%A2.%20%D7%A0%D7%95%D7%9B%D7%9C%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%99%D7%A4%D7%99%D7%95%D7%9F%20%D7%A7%D7%A6%D7%A8%D7%94%3F';
  const LINKEDIN_LINK = 'https://www.linkedin.com/in/matan-retzer-565b2332?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhjLaBVdIT1OVDmnud42T3A%3D%3D';

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
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 gap-2 order-2 w-full sm:w-auto"
              onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-5 h-5" />
              {isRTL ? 'הצטרפו לקהילה' : 'Join Community'}
            </Button>
            
            <Button
              variant="ghost"
              size="lg"
              className="hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 gap-2 order-3 w-full sm:w-auto"
              asChild
            >
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                {t('hero.cta.linkedin')}
              </a>
            </Button>
          </div>

          <p className="text-primary font-medium text-lg sm:text-xl md:text-2xl mt-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {t('hero.cta.tagline')}
          </p>

          {/* Scroll indicator */}
          <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
              <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                {isRTL ? 'גלול למטה' : 'Scroll down'}
              </span>
              <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center group-hover:border-primary transition-colors">
                <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
