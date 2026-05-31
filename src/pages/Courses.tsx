import { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import CoursesHero from '@/components/courses/CoursesHero';
import CoursesAudiences from '@/components/courses/CoursesAudiences';
import CoursesGrid from '@/components/courses/CoursesGrid';
import { courses } from '@/data/courses';

const CourseSyllabus = lazy(() => import('@/components/courses/CourseSyllabus'));
const CourseFormats = lazy(() => import('@/components/courses/CourseFormats'));
const CoursesWhy = lazy(() => import('@/components/courses/CoursesWhy'));
const TestimonialsSection = lazy(() => import('@/components/landing/TestimonialsSection'));
const NewsletterCTASection = lazy(() => import('@/components/landing/NewsletterCTASection'));
const CTASection = lazy(() => import('@/components/landing/CTASection'));

const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const CoursesContent = () => {
  const { isRTL, language } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    window.scrollTo(0, 0);
  }, [isRTL, language]);

  const metaTitle =
    language === 'he'
      ? 'קורסים והדרכות GenAI | מתן רטצר'
      : 'GenAI Courses & Training | Matan Retzer';

  const metaDescription =
    language === 'he'
      ? 'קטלוג קורסים והדרכות GenAI מעשיים: יסודות AI, פרומפטים, קבלת החלטות, ניהול ידע, Gamma AI, סוכני AI, Vibe Coding ועוד. מותאם לארגונים, קיבוצים ומוסדות חינוך.'
      : 'Practical GenAI courses and training: AI foundations, prompts, decision-making, knowledge management, Gamma AI, AI agents, Vibe Coding and more. Tailored for organizations and educational institutions.';

  const structuredData = courses.map((c) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: c.title[language],
    description: c.description[language],
    provider: {
      '@type': 'Organization',
      name: 'GenAI-R Consulting',
      sameAs: 'https://genai-r.com',
    },
  }));

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genai-r.com/courses" />
        <link rel="canonical" href="https://genai-r.com/courses" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main>
          <CoursesHero />
          <CoursesAudiences />
          <CoursesGrid />
          <Suspense fallback={<SectionLoader />}>
            <CourseSyllabus />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <CourseFormats />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <TestimonialsSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <NewsletterCTASection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <CTASection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

const Courses = () => (
  <LanguageProvider>
    <CoursesContent />
  </LanguageProvider>
);

export default Courses;