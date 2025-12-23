import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Linkedin, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="py-8 border-t border-border" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gradient">GenAI-R</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a 
              href="mailto:matan.retzer@genai-r.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>matan.retzer@genai-r.com</span>
            </a>
            
            <a 
              href="tel:+972524538121" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>052-453-8121</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/matan-retzer-565b2332" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://wa.me/972524538121?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%AA%D7%9F%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%20%D7%94AI%20%D7%A9%D7%90%D7%AA%D7%94%20%D7%9E%D7%A6%D7%99%D7%A2.%20%D7%A0%D7%95%D7%9B%D7%9C%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%99%D7%A4%D7%99%D7%95%D7%9F%20%D7%A7%D7%A6%D7%A8%D7%94%3F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
          
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;