import React from 'react';
import { ArrowRight, Sparkles, MessageCircle, Calendar, CreditCard, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

interface FooterProps {
  hideCtaBanner?: boolean;
}

const Footer: React.FC<FooterProps> = ({ hideCtaBanner = false }) => {
  const { t, isChanging } = useLanguage();
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className={`relative overflow-hidden border-t border-slate-200 dark:border-white/5 bg-gradient-to-b from-slate-50 via-white to-white dark:from-studio-black dark:via-studio-black dark:to-[#050505] ${hideCtaBanner ? 'pt-16 md:pt-20' : 'pt-10 sm:pt-14 md:pt-20'} pb-10 transition-colors duration-500`}>
      {/* PRE-FOOTER CTA CARD */}
      {!hideCtaBanner && (
        <div className="relative z-10 mb-12 px-4 sm:mb-14 sm:px-6 md:mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-xl dark:border-white/10 dark:bg-[#111111] dark:shadow-[0_30px_90px_-55px_rgba(255,107,44,0.55)] sm:rounded-[32px]">
              {/* Graphic Element Background Composition inside Card */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
                {/* Grid overlay for texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 dark:opacity-30" />

                {/* Floating UI Elements (Graphics) - Removed inner shadows as requested */}
                <div className="absolute top-[15%] left-[8%] hidden h-14 w-14 -rotate-6 animate-float items-center justify-center rounded-2xl border border-slate-100 bg-white text-green-500 opacity-70 [animation-delay:-1s] dark:border-white/10 dark:bg-zinc-800 sm:flex md:left-[15%] md:h-16 md:w-16 md:opacity-100">
                    <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="absolute bottom-[18%] left-[12%] hidden h-12 w-12 rotate-12 animate-float-slow items-center justify-center rounded-2xl border border-slate-100 bg-white text-orange-500 opacity-60 [animation-delay:-2s] dark:border-white/10 dark:bg-zinc-800 sm:flex md:left-[22%] md:h-14 md:w-14 md:opacity-100">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="absolute top-[24%] right-[8%] hidden h-14 w-14 rotate-6 animate-float items-center justify-center rounded-2xl border border-slate-100 bg-white text-blue-500 opacity-70 [animation-delay:-0.5s] dark:border-white/10 dark:bg-zinc-800 sm:flex md:right-[15%] md:h-20 md:w-20 md:opacity-100">
                    <CreditCard className="w-7 h-7 md:w-9 md:h-9" />
                </div>
                <div className="absolute bottom-[22%] right-[12%] hidden h-10 w-10 -rotate-12 animate-bounce-slow items-center justify-center rounded-full border border-slate-100 bg-white text-emerald-500 opacity-60 [animation-delay:-1.5s] dark:border-white/10 dark:bg-zinc-800 sm:flex md:right-[20%] md:h-12 md:w-12 md:opacity-100">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>

              <div className="relative flex flex-col items-center px-5 py-12 text-center sm:px-6 sm:py-16 md:py-24">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-studio-primary/20 bg-studio-primary/10 px-3 py-1 text-studio-primary dark:border-studio-primary/25 dark:bg-studio-primary/10 sm:mb-6 sm:px-4 sm:py-1.5">
                  <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                  <span className="text-[0.75rem] font-bold uppercase tracking-[0.15em]">
                    {t.footer.ctaBanner.badge}
                  </span>
                </div>

                <h2 className="mb-5 max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-slate-950 dark:text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                  {t.footer.ctaBanner.titleLine1}
                </h2>

                <p className="mb-8 max-w-2xl text-base font-medium leading-relaxed text-slate-600 dark:text-slate-400 sm:mb-10 sm:text-lg md:text-xl">
                  {t.footer.ctaBanner.titleLine2}
                </p>

                <div className="relative z-20 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
                  <a
                    href="https://office.sesifoto.my"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden w-full rounded-xl bg-studio-primary px-6 py-3.5 text-center text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-studio-primary-hover active:translate-y-0 sm:w-auto sm:px-8 sm:py-4 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    <div className="relative z-10 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 fill-current opacity-70" aria-hidden="true" />
                      {t.footer.ctaBanner.primaryCta}
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-500 ${isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>
        <div className="flex flex-col items-center text-center">

          {/* Logo & Tagline */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <a href="#" className="flex items-center gap-3">
              <div className="h-10 flex items-center justify-center">
                <img
                  src={theme === 'dark' ? "/img/Asset 5.png" : "/img/Asset 4.png"}
                  alt="SesiFoto Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-slate-600 dark:text-slate-500 text-base font-medium max-w-lg">
              {t.footer.taglineLine1}
            </p>
          </div>



          {/* Footer Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-6 text-sm font-medium">
            <a href="https://office.sesifoto.my/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            <a href="https://office.sesifoto.my/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Copyright & Builder Info */}
          <div className="border-t border-slate-200 dark:border-white/5 pt-8 w-full flex flex-col items-center gap-3 text-sm text-slate-500 dark:text-slate-600">
            <p>© {year} sesifoto by Infyra Ventures. Hak cipta terpelihara.</p>
            <p className="text-xs opacity-70">SSM-202503136836</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
