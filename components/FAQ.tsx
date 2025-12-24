import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './ui/Reveal';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, isChanging } = useLanguage();

  return (
    <section id="faq" className="py-16 pb-32 relative bg-gradient-to-b from-orange-50/20 via-slate-50/20 to-slate-50/30 dark:from-orange-950/5 dark:via-studio-black dark:to-studio-black overflow-hidden">
      {/* Colorful Accent Glows for FAQ */}
      <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] bg-gradient-to-br from-studio-primary/8 to-orange-400/8 dark:from-studio-primary/4 dark:to-orange-400/4 rounded-full blur-[140px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/3 w-[700px] h-[700px] bg-gradient-to-br from-orange-500/6 to-amber-500/6 dark:from-orange-500/3 dark:to-amber-500/3 rounded-full blur-[140px] z-0 pointer-events-none"></div>

      <div className={`max-w-3xl mx-auto px-6 transition-all duration-500 ${isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'} flex flex-col items-center relative z-10`}>
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-medium font-serif text-center mb-16 bg-gradient-to-r from-orange-600 via-slate-800 to-slate-900 dark:from-white dark:to-slate-300 bg-clip-text text-transparent pb-2">
            {t.faq.title}
          </h2>
        </Reveal>

        <div className="space-y-4 w-full">
          {t.faq.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 50}>
                <div
                  className={`
                      relative overflow-hidden rounded-2xl transition-all duration-300 group
                      ${isOpen
                      ? 'bg-studio-primary/10 dark:bg-studio-primary/10 border-studio-primary/20 dark:border-studio-primary/30 shadow-[0_0_30px_-10px_rgba(255,107,44,0.2)]'
                      : 'bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/10'
                    }
                      border backdrop-blur-md
                   `}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 md:p-7 text-left outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className={`font-semibold text-lg md:text-xl pr-8 transition-colors duration-300 ${isOpen ? 'text-studio-primary' : 'text-slate-900 dark:text-slate-200'}`}>
                      {faq.question}
                    </span>
                    <span
                      className={`
                            shrink-0 p-2 rounded-full border transition-all duration-500 ease-out
                            ${isOpen
                          ? 'bg-studio-primary border-studio-primary text-white rotate-180 rotate-45'
                          : 'bg-transparent border-slate-300 dark:border-white/20 text-slate-400 group-hover:text-studio-primary dark:group-hover:text-white group-hover:border-studio-primary dark:group-hover:border-white rotate-0'
                        }
                        `}
                    >
                      <Plus className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`} />
                    </span>
                  </button>

                  <div
                    className={`px-6 md:px-7 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-64 pb-8 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div
                      className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg font-light [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul]:mt-2 [&>strong]:text-slate-900 dark:[&>strong]:text-white [&>strong]:font-semibold"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;