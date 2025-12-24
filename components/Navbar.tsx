import React, { useState, useEffect } from 'react';
import { Aperture, Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const updateThemeColor = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      // ==================== LIGHT MODE DISABLED ====================
      // Update theme-color meta tag - FORCED TO DARK MODE ONLY
      const metaTags = document.querySelectorAll('meta[name="theme-color"]');
      metaTags.forEach(meta => {
        // Remove media attribute to force browser to respect this color regardless of system theme
        meta.removeAttribute('media');
        // ALWAYS SET DARK MODE COLOR - Ensures dark status bar on mobile
        meta.setAttribute('content', '#0A0A0A');

        /* Uncomment block below to re-enable dynamic light/dark mode later
        if (scrolled) {
          // Scrolled: Match navbar background (Studio Paper/80 or Studio Black/80)
          meta.setAttribute('content', theme === 'dark' ? '#0A0A0A' : '#FAFAFA');
        } else {
          // Top: Match Hero background
          // Light mode hero is bg-studio-paper (#FAFAFA)
          // Dark mode hero is bg-studio-black (#0A0A0A)
          meta.setAttribute('content', theme === 'dark' ? '#0A0A0A' : '#FAFAFA');
        }
        */
      });
      // ============================================================
    };

    window.addEventListener('scroll', updateThemeColor);
    // Call once on mount/theme change
    updateThemeColor();

    return () => window.removeEventListener('scroll', updateThemeColor);
  }, [theme]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bm' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled || isMobileMenuOpen
        ? 'py-3 bg-studio-paper/80 dark:bg-studio-black/80 backdrop-blur-xl border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none'
        : 'py-6 bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl overflow-hidden bg-white dark:bg-studio-card border border-slate-200 dark:border-studio-border flex items-center justify-center">
              <img
                src="/img/SesiFoto.svg"
                alt="SesiFoto Logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  // Fallback to icon if logo doesn't exist
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<svg class="w-5 h-5 text-studio-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>';
                  }
                }}
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-0 md:gap-1.5">
              <span className="text-xl font-bold font-serif tracking-tight text-slate-900 dark:text-white transition-colors leading-none">SesiFoto</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-sans font-medium tracking-widest uppercase opacity-90">by Infyra</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-studio-primary dark:hover:text-studio-primary transition-colors tracking-wide"
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-6">

            {/* Theme Toggle - Hidden */}
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors hidden"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mr-2 md:mr-0"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://office.sesifoto.my/login"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-studio-primary dark:hover:text-white transition-colors"
              >
                {t.nav.signin}
              </a>
              <a
                href="https://office.sesifoto.my/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-studio-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-studio-primary-hover transition-all active:scale-95 shadow-lg shadow-studio-primary/30"
              >
                {t.nav.getStarted}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-studio-paper/90 dark:bg-studio-black/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 p-6 flex flex-col gap-4 shadow-xl">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-studio-primary dark:hover:text-white py-2 border-b border-slate-100 dark:border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a href="https://office.sesifoto.my/login" className="text-center py-3 text-slate-600 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl">{t.nav.signin}</a>
              <a href="https://office.sesifoto.my/register" className="block text-center w-full bg-studio-primary text-white py-3 rounded-xl font-bold hover:bg-studio-primary-hover transition-colors">
                {t.nav.getStarted}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;