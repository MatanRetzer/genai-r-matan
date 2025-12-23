import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const CTASection = () => {
  const { t, isRTL } = useLanguage();

  // Placeholder link - easily editable
  const WHATSAPP_LINK = 'https://wa.me/972000000000';

  return (
    <section id="contact" className="py-24 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center card-gradient p-12 rounded-2xl border border-primary/30 glow-box">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            {t('cta.title')}
          </h2>

          <Button
            size="lg"
            className="animate-glow-pulse text-lg px-10 py-6 gap-3"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6" />
              {t('cta.button')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;