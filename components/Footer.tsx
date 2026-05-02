import React from 'react';
import { Aperture, Instagram, Clock } from 'lucide-react';
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
    <footer className={`relative border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-studio-black ${hideCtaBanner ? 'pt-20' : 'pt-0'} pb-10 transition-colors duration-500`}>

      {/* PRE-FOOTER CTA BANNER */}
      {!hideCtaBanner && (
        <div className="relative z-10 -mt-24 mb-16 md:mb-24 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-orange-600 shadow-[0_20px_60px_-15px_rgba(234,88,12,0.4)] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-10 md:p-14 lg:p-16 relative border border-orange-400/20">
            
            {/* Premium Mesh Gradient Background */}
            <div className="absolute inset-0 bg-[#ea580c] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-300/80 via-transparent to-transparent opacity-90 pointer-events-none mix-blend-screen"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-rose-700/90 via-transparent to-transparent opacity-90 pointer-events-none mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-400/0 via-orange-600/20 to-black/40 pointer-events-none"></div>
            
            {/* Fine Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl text-left md:pr-10 mb-10 md:mb-0 w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/10 border border-white/20 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-white">
                  {t.footer.ctaBanner.badge}
                </span>
              </div>
              
              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.05] mb-4 drop-shadow-sm">
                {t.footer.ctaBanner.titleLine1}
              </h2>
              <p className="text-xl md:text-2xl text-orange-100 font-medium tracking-tight">
                {t.footer.ctaBanner.titleLine2}
              </p>
            </div>
            
            {/* Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
              <a href="https://office.sesifoto.my/register" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-colors duration-200 text-center flex items-center justify-center gap-2 shadow-xl shadow-slate-900/20">
                {t.footer.ctaBanner.primaryCta}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a href="https://office.sesifoto.my/login" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-4 bg-transparent text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors duration-200 border border-white/30 hover:border-white/60 flex items-center justify-center">
                Log Masuk
              </a>
            </div>

          </div>
        </div>
      )}

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