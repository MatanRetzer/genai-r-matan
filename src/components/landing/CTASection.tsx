import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CTASection = () => {
  const { t, isRTL } = useLanguage();

  // WhatsApp link
  const WHATSAPP_LINK = 'https://wa.me/972524538121?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%AA%D7%9F%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%20%D7%94AI%20%D7%A9%D7%90%D7%AA%D7%94%20%D7%9E%D7%A6%D7%99%D7%A2.%20%D7%A0%D7%95%D7%9B%D7%9C%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%99%D7%A4%D7%99%D7%95%D7%9F%20%D7%A7%D7%A6%D7%A8%D7%94%3F';

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-0 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center card-gradient p-8 md:p-12 rounded-2xl border border-primary/30 glow-box">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-foreground">
              {t('cta.title')}
            </h2>

            <Button
              size="lg"
              className="animate-glow-pulse text-base md:text-lg px-8 md:px-10 py-5 md:py-6 gap-2 md:gap-3 w-full sm:w-auto"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                {t('cta.button')}
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
