import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.webp';

const Header = () => {
  const { language, toggleLanguage, t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';
  const homeHref = (hash: string) => (onHome ? hash : `/${hash}`);

  const navLinks = [
    { href: homeHref('#about'), label: t('nav.about'), internal: false },
    { href: homeHref('#services'), label: t('nav.services'), internal: false },
    { href: homeHref('#tools'), label: t('nav.tools'), internal: false },
    { href: '/courses', label: t('nav.courses'), internal: true },
    { href: homeHref('#contact'), label: t('nav.contact'), internal: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="GenAI-R Logo" className="h-8 md:h-10 w-auto" loading="eager" />
          <span className="text-xl md:text-2xl font-bold text-gradient">GenAI-R</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" dir={isRTL ? 'rtl' : 'ltr'}>
          {navLinks.map((link) =>
            link.internal ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm lg:text-base"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="font-semibold border-primary/50 hover:bg-primary/10 hover:border-primary text-xs md:text-sm"
          >
            {language === 'he' ? 'EN' : 'עב'}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav 
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/50 py-4"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="container mx-auto px-4 flex flex-col gap-3">
            {navLinks.map((link) =>
              link.internal ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
