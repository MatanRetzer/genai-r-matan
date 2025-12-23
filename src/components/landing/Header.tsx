import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { language, toggleLanguage, t, isRTL } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gradient">GenAI-R</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8" dir={isRTL ? 'rtl' : 'ltr'}>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            {t('nav.about')}
          </a>
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            {t('nav.services')}
          </a>
          <a href="#tools" className="text-muted-foreground hover:text-primary transition-colors">
            {t('nav.tools')}
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            {t('nav.contact')}
          </a>
        </nav>

        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          className="font-semibold border-primary/50 hover:bg-primary/10 hover:border-primary"
        >
          {language === 'he' ? 'EN' : 'עב'}
        </Button>
      </div>
    </header>
  );
};

export default Header;