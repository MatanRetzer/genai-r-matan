import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Unsubscribe = () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token') || '';
  const [status, setStatus] = useState<'loading' | 'valid' | 'used' | 'invalid' | 'success' | 'error'>('loading');
  const [email, setEmail] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) { setStatus('invalid'); return; }
    (async () => {
      try {
        const res = await fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`, {
          headers: { apikey: ANON_KEY },
        });
        const data = await res.json();
        if (!res.ok) { setStatus('invalid'); return; }
        if (data.alreadyUnsubscribed) setStatus('used');
        else setStatus('valid');
        if (data.email) setEmail(data.email);
      } catch {
        setStatus('invalid');
      }
    })();
  }, [token]);

  const confirm = async () => {
    setSubmitting(true);
    const { error } = await supabase.functions.invoke('handle-email-unsubscribe', { body: { token } });
    setSubmitting(false);
    setStatus(error ? 'error' : 'success');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6" dir="rtl">
      <div className="max-w-md w-full card-gradient border border-primary/30 rounded-2xl p-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-foreground">ביטול הרשמה</h1>
        {status === 'loading' && <Loader2 className="w-8 h-8 mx-auto animate-spin text-primary" />}
        {status === 'valid' && (
          <>
            <p className="text-muted-foreground mb-6">
              לבטל את הרשמת {email || 'כתובת המייל'} מקבלת מיילים?
            </p>
            <Button onClick={confirm} disabled={submitting} size="lg">
              {submitting ? 'מעבד...' : 'אשר ביטול הרשמה'}
            </Button>
          </>
        )}
        {status === 'used' && <p className="text-muted-foreground">כתובת זו כבר הוסרה מרשימת התפוצה.</p>}
        {status === 'success' && <p className="text-foreground">הוסרת בהצלחה. לא נשלח אליך עוד מיילים.</p>}
        {status === 'invalid' && <p className="text-destructive">קישור לא תקין או שפג תוקפו.</p>}
        {status === 'error' && <p className="text-destructive">משהו השתבש, נסה/י שוב מאוחר יותר.</p>}
      </div>
    </div>
  );
};

export default Unsubscribe;