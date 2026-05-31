import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, Linkedin, Sparkles, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import heroBg from '@/assets/hero-bg.webp';
import logo from '@/assets/logo.webp';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Placeholder links - easily editable
  const WHATSAPP_LINK = 'https://wa.me/972524538121?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%AA%D7%9F%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%20%D7%94AI%20%D7%A9%D7%90%D7%AA%D7%94%20%D7%9E%D7%A6%D7%99%D7%A2.%20%D7%A0%D7%95%D7%9B%D7%9C%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%99%D7%A4%D7%99%D7%95%D7%9F%20%D7%A7%D7%A6%D7%A8%D7%94%3F';
  const LINKEDIN_LINK = 'https://www.linkedin.com/in/matan-retzer-565b2332?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhjLaBVdIT1OVDmnud42T3A%3D%3D';
  const VIDEO_URL = '/welcome-clip.mp4';

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

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

      <div className="container relative z-20 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side: Content */}
          <div className={`lg:col-span-6 text-center lg:text-${isRTL ? 'right' : 'left'} space-y-6`}>
            {/* Logo above headline */}
            <img 
              src={logo} 
              alt="GenAI-R Logo" 
              className="w-40 h-40 md:w-52 md:h-52 mx-auto lg:mx-0 drop-shadow-2xl animate-fade-in"
              loading="eager"
            />
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient">{t('hero.title')}</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                className="glow-box hover:glow-box-strong transition-all duration-300 text-sm sm:text-base px-5 sm:px-6 py-4 sm:py-5 gap-2 w-full sm:w-auto"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'whatsapp_click', {
                      event_category: 'Contact',
                      event_label: 'Hero Section',
                      value: 1
                    });
                  }
                  window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer');
                }}
              >
                <MessageCircle className="w-4 h-4" />
                {t('hero.cta.whatsapp')}
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 hover:border-primary text-sm sm:text-base px-5 sm:px-6 py-4 sm:py-5 gap-2 w-full sm:w-auto"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'join_community_click', {
                      event_category: 'Engagement',
                      event_label: 'Hero Section',
                      value: 1
                    });
                  }
                  document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Sparkles className="w-4 h-4" />
                {isRTL ? 'הצטרפו לקהילה' : 'Join Community'}
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                className="hover:bg-primary/10 text-sm sm:text-base px-5 sm:px-6 py-4 sm:py-5 gap-2 w-full sm:w-auto"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'linkedin_click', {
                      event_category: 'Social',
                      event_label: 'Hero Section LinkedIn Button',
                      value: 1
                    });
                  }
                  window.open(LINKEDIN_LINK, '_blank', 'noopener,noreferrer');
                }}
              >
                <Linkedin className="w-4 h-4" />
                {t('hero.cta.linkedin')}
              </Button>
            </div>

            <p className="text-primary font-medium text-base sm:text-lg md:text-xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {t('hero.cta.tagline')}
            </p>
          </div>

          {/* Right Side: Video */}
          <div className="lg:col-span-6 relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full animate-pulse hidden lg:block" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 blur-[100px] rounded-full animate-pulse hidden lg:block" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/20">
              <video 
                ref={videoRef}
                className="w-full h-auto aspect-video object-cover"
                autoPlay 
                muted 
                playsInline
                poster={heroBg}
              >
                <source src={VIDEO_URL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 z-20 p-2.5 bg-background/80 backdrop-blur-sm rounded-full border border-border/30 hover:bg-background transition-all duration-200 shadow-lg"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-foreground" />
                ) : (
                  <Volume2 className="w-5 h-5 text-primary" />
                )}
              </button>
              {/* Video overlay gradient */}
              <div className="absolute inset-0 pointer-events-none border border-border/10 rounded-3xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 lg:mt-12 animate-fade-up text-center" style={{ animationDelay: '0.5s' }}>
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
    </section>
  );
};

export default HeroSection;
