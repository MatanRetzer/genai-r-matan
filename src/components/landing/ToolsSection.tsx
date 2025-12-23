import { useLanguage } from '@/contexts/LanguageContext';

const ToolsSection = () => {
  const { t, isRTL } = useLanguage();

  const tools = [
    'ChatGPT',
    'Claude',
    'NotebookLM',
    'AI Agents',
    'Copilot',
    'Gamma',
    'Vibe Coding / BASE44',
  ];

  return (
    <section id="tools" className="py-24 relative" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
          {t('tools.title')}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default group"
            >
              <span className="text-lg font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {tool}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;