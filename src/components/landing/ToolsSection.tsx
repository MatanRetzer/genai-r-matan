import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from './AnimatedSection';
import chatgptLogo from '@/assets/tools/chatgpt.svg';
import claudeLogo from '@/assets/tools/claude.svg';
import notebookLmLogo from '@/assets/tools/notebooklm.svg';
import aiAgentsLogo from '@/assets/tools/ai-agents.png';
import copilotLogo from '@/assets/tools/copilot.png';
import gammaLogo from '@/assets/tools/gamma.png';
import vibeCodingLogo from '@/assets/tools/vibe-coding.png';

const ToolsSection = () => {
  const { t, isRTL } = useLanguage();

  const tools = [
    { name: 'ChatGPT', logo: chatgptLogo },
    { name: 'Claude', logo: claudeLogo },
    { name: 'NotebookLM', logo: notebookLmLogo },
    { name: 'AI Agents', logo: aiAgentsLogo },
    { name: 'Copilot', logo: copilotLogo },
    { name: 'Gamma', logo: gammaLogo },
    { name: 'Vibe Coding / BASE44', logo: vibeCodingLogo },
  ];

  return (
    <section id="tools" className="py-20 md:py-24 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[300px] md:h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gradient">
            {t('tools.title')}
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10 md:mb-12 text-sm md:text-base px-4">
            {t('tools.intro')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default group min-w-[100px] md:min-w-[120px]"
              >
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`} 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  loading="lazy"
                />
                <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ToolsSection;
