import React from 'react';
import { Aperture, Instagram, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { t, isChanging } = useLanguage();
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer className={`relative border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-studio-black pt-0 pb-10 transition-colors duration-500`}>

      {/* PRE-FOOTER CTA BANNER */}
      <div className="relative z-10 -mt-24 mb-12 md:mb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto bg-slate-900/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-slate-200/20 dark:border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 text-center text-white shadow-2xl overflow-hidden relative group">
          {/* Light & Elegant Background Effects */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>

          {/* Radial Light Leaks - Top Right */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-radial from-white/30 via-white/10 to-transparent rounded-full blur-3xl group-hover:from-white/40 group-hover:via-white/15 transition-all duration-700"></div>

          {/* Radial Light Leaks - Bottom Left */}
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-radial from-yellow-200/20 via-orange-200/10 to-transparent rounded-full blur-3xl"></div>

          {/* Center Glow for Depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 rounded-full bg-white/10 border border-white/20 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
              <Clock size={12} className="w-3 h-3 md:w-3.5 md:h-3.5" /> {t.footer.ctaBanner.badge}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight transform scale-y-105 mb-6 leading-[0.95] pb-4">
              <span className="inline-block bg-gradient-to-r from-orange-400 via-white to-white bg-clip-text text-transparent pb-2">
                {t.footer.ctaBanner.titleLine1}
              </span>
              <br />
              <span className="text-white">{t.footer.ctaBanner.titleLine2}</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-2 w-full sm:w-auto">
              {/* Primary CTA Button */}
              <a href="https://wa.link/rxj90f" target="_blank" rel="noopener noreferrer" className="relative group px-6 py-3 md:px-8 md:py-4 bg-studio-primary text-white rounded-full font-bold text-base md:text-lg overflow-hidden shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors"></div>
                <span className="relative z-10">{t.footer.ctaBanner.primaryCta}</span>
              </a>

              <button className="px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-base md:text-lg hover:bg-white/20 transition-all border border-white/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                {t.hero.viewShowreel}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>
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

          {/* Social Links */}
          <div className="flex gap-4 mb-10">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#E4405F] dark:hover:text-[#E4405F] hover:bg-slate-50 dark:hover:bg-white/10 transition-all border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md hover:-translate-y-1">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#000000] dark:hover:text-[#00f2ea] hover:bg-slate-50 dark:hover:bg-white/10 transition-all border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md hover:-translate-y-1">
              {/* TikTok Icon SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.09v10.95c-.001 3.09-2.519 5.588-5.602 5.588-3.083 0-5.602-2.498-5.602-5.588 0-2.863 2.158-5.216 4.965-5.539v4.06c-.958.077-1.748.88-1.748 1.867 0 1.037.842 1.875 1.879 1.875 1.026 0 1.879-.838 1.879-1.875V.02z" />
              </svg>
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