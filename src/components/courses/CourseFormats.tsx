import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/landing/AnimatedSection';
import { Monitor, MapPin, Building2 } from 'lucide-react';

const CourseFormats = () => {
  const { t, isRTL } = useLanguage();

  const formats = [
    { icon: Monitor, title: t('courses.formats.online.title'), desc: t('courses.formats.online.desc') },
    { icon: MapPin, title: t('courses.formats.inperson.title'), desc: t('courses.formats.inperson.desc') },
    { icon: Building2, title: t('courses.formats.inhouse.title'), desc: t('courses.formats.inhouse.desc') },
  ];

  return (
    <section className="py-16 md:py-24" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14 text-gradient">
            {t('courses.formats.title')}
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {formats.map((f, idx) => (
            <AnimatedSection key={idx} delay={idx * 100}>
              <div className="card-gradient p-6 rounded-2xl border border-border hover:border-primary/50 transition-all hover:glow-box h-full text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFormats;