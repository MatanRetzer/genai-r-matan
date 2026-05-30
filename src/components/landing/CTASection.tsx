import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageCircle, Loader2, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import AnimatedSection from './AnimatedSection';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const CTASection = () => {
  const { t, isRTL } = useLanguage();

  // WhatsApp link
  const WHATSAPP_LINK = 'https://wa.me/972524538121?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%AA%D7%9F%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%20%D7%94AI%20%D7%A9%D7%90%D7%AA%D7%94%20%D7%9E%D7%A6%D7%99%D7%A2.%20%D7%A0%D7%95%D7%9B%D7%9C%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%99%D7%A4%D7%99%D7%95%D7%9F%20%D7%A7%D7%A6%D7%A8%D7%94%3F';

  const isHe = isRTL;
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(1).max(100),
    email: z.string().trim().email().max(255),
    phone: z.string().trim().max(30).optional().or(z.literal('')),
    message: z.string().trim().min(1).max(2000),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(isHe ? 'אנא מלא/י את כל השדות הנדרשים' : 'Please fill in all required fields');
      return;
    }
    setSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.from('contact_submissions').insert({
        id,
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        message: parsed.data.message,
      });
      if (error) throw error;

      await supabase.functions.invoke('send-transactional-email', {
        body: {
          templateName: 'contact-confirmation',
          recipientEmail: parsed.data.email,
          idempotencyKey: `contact-confirm-${id}`,
          templateData: { name: parsed.data.name, message: parsed.data.message },
        },
      });

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submit', { event_category: 'Contact', value: 1 });
      }

      toast.success(isHe ? 'תודה! ההודעה נשלחה ואישור נשלח למייל שלך.' : 'Thanks! Confirmation sent to your email.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      toast.error(isHe ? 'משהו השתבש, נסה/י שוב' : 'Something went wrong, please try again');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-0 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto card-gradient p-8 md:p-12 rounded-2xl border border-primary/30 glow-box">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-foreground text-center">
              {t('cta.title')}
            </h2>

            <form onSubmit={handleSubmit} className="grid gap-4 text-start mb-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">{isHe ? 'שם מלא *' : 'Full name *'}</Label>
                  <Input id="name" required maxLength={100} value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={isHe ? 'השם שלך' : 'Your name'} />
                </div>
                <div>
                  <Label htmlFor="email">{isHe ? 'אימייל *' : 'Email *'}</Label>
                  <Input id="email" type="email" required maxLength={255} value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@example.com" dir="ltr" />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">{isHe ? 'טלפון' : 'Phone'}</Label>
                <Input id="phone" maxLength={30} value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="050-0000000" dir="ltr" />
              </div>
              <div>
                <Label htmlFor="message">{isHe ? 'הודעה *' : 'Message *'}</Label>
                <Textarea id="message" required rows={4} maxLength={2000} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={isHe ? 'ספר/י לי איך אוכל לעזור...' : 'Tell me how I can help...'} />
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto sm:justify-self-center gap-2">
                {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {submitting ? (isHe ? 'שולח...' : 'Sending...') : (isHe ? 'שליחת ההודעה' : 'Send message')}
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground mb-4">
              {isHe ? 'או דברו איתי בוואטסאפ' : 'Or message me on WhatsApp'}
            </div>

            <Button
              variant="outline"
              size="lg"
              className="text-base md:text-lg px-8 md:px-10 py-5 md:py-6 gap-2 md:gap-3 w-full sm:w-auto mx-auto flex"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'whatsapp_click', {
                    event_category: 'Contact',
                    event_label: 'CTA Section',
                    value: 1
                  });
                }
                window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer');
              }}
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              {t('cta.button')}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
