import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from './ui/Reveal';
import { useLanguage } from '../contexts/LanguageContext';
import { sanitizeRichHtml } from '../utils/sanitizeHtml';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, isChanging } = useLanguage();

  return (
    <section id="faq" className="relative overflow-hidden bg-transparent py-16 md:py-20">
      <div className={`relative z-10 mx-auto max-w-5xl px-6 transition-all duration-500 ${isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>
        <Reveal width="100%">
          <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center md:mb-14">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-studio-primary">
              FAQ
            </p>
            <h2 className="max-w-2xl font-serif text-[2rem] font-medium leading-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
              {t.faq.title}
            </h2>
          </div>
        </Reveal>

        <Reveal width="100%">
          <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm dark:border-white/10 dark:bg-white/[0.035]">
            {t.faq.items.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <div
                  key={index}
                  className="border-b border-slate-200/80 last:border-b-0 dark:border-white/10"
                >
                  <button
                    className="flex w-full items-start justify-between gap-5 px-5 py-5 text-left outline-none transition-colors duration-200 hover:bg-slate-50/80 dark:hover:bg-white/[0.04] md:px-6 md:py-6"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className={`text-[1.02rem] font-semibold leading-snug transition-colors duration-200 md:text-lg ${
                      isOpen ? 'text-slate-950 dark:text-white' : 'text-slate-800 dark:text-slate-200'
                    }`}>
                      {faq.question}
                    </span>

                    <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'border-[#C2410C] bg-[#C2410C] text-white'
                        : 'border-slate-300 bg-white/60 text-slate-500 dark:border-white/15 dark:bg-white/[0.03] dark:text-slate-400'
                    }`}>
                      <Plus className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                    </span>
                  </button>

                  <div
                    id={answerId}
                    className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5 pr-16 md:px-6 md:pb-6 md:pr-20">
                      <div
                        className="max-w-2xl text-[0.95rem] leading-relaxed text-slate-600 dark:text-slate-300 md:text-base [&>strong]:font-semibold [&>strong]:text-slate-950 dark:[&>strong]:text-white"
                        dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(faq.answer) }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
