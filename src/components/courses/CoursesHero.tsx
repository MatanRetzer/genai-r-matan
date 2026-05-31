import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const whatsappHref =
  'https://wa.me/972524538121?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%9E%D7%AA%D7%9F%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A7%D7%95%D7%A8%D7%A1%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9A.%20%D7%A0%D7%95%D7%9B%D7%9C%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%90%D7%99%D7%A4%D7%99%D7%95%D7%9F%3F';

const CoursesHero = () => {
  const { t, isRTL } = useLanguage();
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <section
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 hero-gradient overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-6"
        >
          <BackArrow className="w-4 h-4" />
          {t('courses.back')}
        </Link>

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 mb-6">
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
          {t('courses.hero.title')}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          {t('courses.hero.subtitle')}
        </p>

        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground glow-box"
        >
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            {t('courses.hero.cta')}
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CoursesHero;