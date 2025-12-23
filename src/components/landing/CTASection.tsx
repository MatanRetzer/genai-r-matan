import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CTASection = () => {
  const { t, isRTL } = useLanguage();

  // Placeholder link - easily editable
  const WHATSAPP_LINK = 'https://wa.me/972000000000';

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
