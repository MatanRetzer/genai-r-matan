import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import ServicesSection from '@/components/landing/ServicesSection';
import ToolsSection from '@/components/landing/ToolsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const LandingContent = () => {
  const { isRTL, language } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [isRTL, language]);

  const metaTitle = language === 'he' 
    ? 'GenAI-R | ייעוץ GenAI - יועץ בינה מלאכותית לעסקים'
    : 'GenAI-R | GenAI Consulting - AI Consultant for Business';
  
  const metaDescription = language === 'he'
    ? 'ייעוץ GenAI מקצועי לעסקים. יועץ בינה מלאכותית עם ניסיון מעשי בהטמעת AI, סוכני AI, אוטומציות ו-Data Science. קבלו ייעוץ חינם.'
    : 'Professional GenAI consulting for businesses. AI consultant with hands-on experience in AI implementation, AI agents, automation and Data Science. Get a free consultation.';

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="GenAI Consulting, ייעוץ GenAI, יועץ בינה מלאכותית, AI לעסקים, Data Science, AI Agents, ChatGPT, Claude" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genai-r.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <link rel="canonical" href="https://genai-r.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ToolsSection />
          <CTASection />
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