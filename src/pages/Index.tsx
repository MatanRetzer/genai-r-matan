import { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import Footer from '@/components/landing/Footer';

// Lazy load below-fold sections for better performance
const AboutSection = lazy(() => import('@/components/landing/AboutSection'));
const ServicesSection = lazy(() => import('@/components/landing/ServicesSection'));
const ApproachSection = lazy(() => import('@/components/landing/ApproachSection'));
const ToolsSection = lazy(() => import('@/components/landing/ToolsSection'));
const AudiencesSection = lazy(() => import('@/components/landing/AudiencesSection'));
const CTASection = lazy(() => import('@/components/landing/CTASection'));

const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const LandingContent = () => {
  const { isRTL, language } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [isRTL, language]);

  const metaTitle = language === 'he' 
    ? 'GenAI-R | מתן רטצר - ייעוץ GenAI ובינה מלאכותית לעסקים'
    : 'GenAI-R | Matan Retzer - GenAI Consulting for Business';
  
  const metaDescription = language === 'he'
    ? 'ייעוץ GenAI מקצועי לעסקים. מתן רטצר - יועץ בינה מלאכותית עם ניסיון מעשי בהטמעת AI, סוכני AI, הדרכות וסדנאות. קבלו ייעוץ חינם.'
    : 'Professional GenAI consulting for businesses. Matan Retzer - AI consultant with hands-on experience in AI implementation, AI agents, training and workshops. Get a free consultation.';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "GenAI-R Consulting",
    "description": metaDescription,
    "url": "https://genai-r.com",
    "founder": {
      "@type": "Person",
      "name": language === 'he' ? "מתן רטצר" : "Matan Retzer"
    },
    "areaServed": "Israel",
    "serviceType": ["GenAI Consulting", "AI Training", "AI Workshops", "AI Implementation"]
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="GenAI Consulting, ייעוץ GenAI, יועץ בינה מלאכותית, AI לעסקים, Data Science, AI Agents, ChatGPT, Claude, מתן רטצר, Matan Retzer" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genai-r.com" />
        <meta property="og:site_name" content="GenAI-R Consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <link rel="canonical" href="https://genai-r.com" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0d1117" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ServicesSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ApproachSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ToolsSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <AudiencesSection />
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

const Index = () => {
  return (
    <LanguageProvider>
      <LandingContent />
    </LanguageProvider>
  );
};

export default Index;
