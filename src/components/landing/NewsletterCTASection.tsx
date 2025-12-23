import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Mail, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterCTASection = () => {
  const { isRTL } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WHATSAPP_NUMBER = '972524538121';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: isRTL ? 'שגיאה' : 'Error',
        description: isRTL ? 'נא למלא את כל השדות' : 'Please fill all fields',
        variant: 'destructive',
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: isRTL ? 'שגיאה' : 'Error',
        description: isRTL ? 'כתובת אימייל לא תקינה' : 'Invalid email address',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Create WhatsApp message with subscriber details
    const message = `🎉 נרשם חדש לקהילת mAgIc!

שם: ${name.trim()}
אימייל: ${email.trim()}

הנרשם מעוניין לקבל את הניוזלטר החודשי עם עדכונים חמים על יכולות AI לשיפור הפרודקטיביות.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show success message
    toast({
      title: isRTL ? 'תודה! 🎉' : 'Thank you! 🎉',
      description: isRTL 
        ? 'עברת לוואטסאפ להשלמת ההרשמה. שלח את ההודעה ונצרף אותך לקהילה!' 
        : 'You were redirected to WhatsApp to complete signup. Send the message to join!',
    });

    // Reset form
    setName('');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-20 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {isRTL ? 'הצטרפו לקהילת mAgIc ✨' : 'Join the mAgIc Community ✨'}
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            {isRTL 
              ? 'קבלו עדכונים חמים על יכולות AI לשיפור הפרודקטיביות - ישירות למייל שלכם, פעם בחודש, רק הדברים החשובים!'
              : 'Get hot updates on AI capabilities for improving productivity - straight to your email, once a month, only the important stuff!'}
          </p>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="relative">
              <User className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
              <Input
                type="text"
                placeholder={isRTL ? 'השם שלך' : 'Your name'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`${isRTL ? 'pr-10 text-right' : 'pl-10 text-left'} bg-card border-border/50 focus:border-primary h-12`}
                maxLength={100}
              />
            </div>
            
            <div className="relative">
              <Mail className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
              <Input
                type="email"
                placeholder={isRTL ? 'האימייל שלך' : 'Your email'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${isRTL ? 'pr-10 text-right' : 'pl-10 text-left'} bg-card border-border/50 focus:border-primary h-12`}
                maxLength={255}
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isSubmitting 
                ? (isRTL ? 'שולח...' : 'Sending...') 
                : (isRTL ? 'הירשמו לניוזלטר 🚀' : 'Subscribe to Newsletter 🚀')}
            </Button>
          </form>
          
          {/* Privacy note */}
          <p className="text-xs text-muted-foreground mt-4">
            {isRTL 
              ? 'לא נשלח ספאם. רק עדכונים חמים פעם בחודש. ניתן לבטל בכל עת.'
              : 'No spam. Only hot updates once a month. Unsubscribe anytime.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTASection;
