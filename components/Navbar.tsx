import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Aperture, Menu, X, Globe, Moon, Sun, MessageCircle, ExternalLink } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportPromptOpen, setIsSupportPromptOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const landingSectionKeys = new Set(['features', 'pricing', 'faq']);
  const landingSectionLinks = NAV_LINKS.filter((link) => landingSectionKeys.has(link.key));
  const primaryNavLinks = NAV_LINKS.filter((link) => !landingSectionKeys.has(link.key));
  const supportLink = NAV_LINKS.find((link) => link.key === 'support');
  const supportHref = supportLink?.href || 'https://wa.link/rxj90f';

  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const supportPromptCopy = language === 'bm'
    ? {
      title: 'Teruskan ke WhatsApp?',
      description: 'Anda akan dialihkan ke WhatsApp Customer Support SesiFoto untuk bantuan segera.',
      note: 'Jika anda setuju, tekan Teruskan.',
      cancel: 'Batal',
      continue: 'Teruskan'
    }
    : {
      title: 'Continue to WhatsApp Support?',
      description: 'You will be redirected to SesiFoto Customer Support on WhatsApp for assistance.',
      note: 'If this is okay, press Continue.',
      cancel: 'Cancel',
      continue: 'Continue'
    };

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

  useEffect(() => {
    if (!isSupportPromptOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSupportPromptOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isSupportPromptOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bm' : 'en');
  };

  const openSupportPrompt = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    setIsSupportPromptOpen(true);
  };

  const handleSupportContinue = () => {
    setIsSupportPromptOpen(false);
    window.location.href = supportHref;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled || isMobileMenuOpen
          ? 'py-3 bg-studio-paper/80 dark:bg-studio-black/80 backdrop-blur-xl border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none'
          : 'py-6 bg-transparent border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-8 md:h-11 p-1 flex items-center justify-center">
                <img
                  src={theme === 'dark' ? "/img/Asset 5.png" : "/img/Asset 4.png"}
                  alt="SesiFoto Logo"
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    // Fallback to icon if logo doesn't exist
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<svg class="w-8 h-8 text-studio-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>';
                    }
                  }}
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-0 md:gap-1.5">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-sans font-medium tracking-widest uppercase opacity-90">by Infyra</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {isHomePage && (
                <div className="relative group">
                  <a
                    href="/"
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-studio-primary dark:hover:text-studio-primary transition-colors tracking-wide inline-flex items-center"
                  >
                    {t.nav.home}
                  </a>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="min-w-[180px] rounded-2xl bg-studio-paper/95 dark:bg-studio-black/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl p-2">
                      {landingSectionLinks.map((link) => (
                        <a
                          key={link.key}
                          href={link.href}
                          className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-studio-primary dark:hover:text-studio-primary hover:bg-slate-100/60 dark:hover:bg-white/5 transition-colors"
                        >
                          {t.nav[link.key as keyof typeof t.nav]}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {primaryNavLinks.map((link) => {
                const isSupport = link.key === 'support';
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={isSupport ? openSupportPrompt : undefined}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-studio-primary dark:hover:text-studio-primary transition-colors tracking-wide"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 lg:gap-6">

              {/* Home Link (Only on non-home pages) */}
              {!isHomePage && (
                <Link
                  to="/"
                  className="hidden lg:block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-studio-primary dark:hover:text-studio-primary transition-colors mr-2"
                >
                  {t.nav.home}
                </Link>
              )}

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
                className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mr-2 lg:mr-0"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{language}</span>
              </button>

              <div className="hidden lg:flex items-center gap-4">
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
                className="lg:hidden p-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="bg-studio-paper/90 dark:bg-studio-black/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 p-6 flex flex-col gap-4 shadow-xl">
              {isHomePage && (
                <div className="pb-2 border-b border-slate-100 dark:border-white/5">
                  <Link
                    to="/"
                    className="block text-lg font-medium text-slate-700 dark:text-slate-200 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.home}
                  </Link>
                  <div className="pl-4 flex flex-col gap-1">
                    {landingSectionLinks.map((link) => (
                      <a
                        key={link.key}
                        href={link.href}
                        className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-studio-primary dark:hover:text-white py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t.nav[link.key as keyof typeof t.nav]}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {primaryNavLinks.map((link) => {
                const isSupport = link.key === 'support';
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-studio-primary dark:hover:text-white py-2 border-b border-slate-100 dark:border-white/5"
                    onClick={(event) => {
                      if (isSupport) {
                        openSupportPrompt(event);
                        return;
                      }
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </a>
                );
              })}
              <div className="flex flex-col gap-3 mt-4">
                <a href="https://office.sesifoto.my/login" className="text-center py-3 text-slate-600 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl">{t.nav.signin}</a>
                <a href="https://office.sesifoto.my/register" className="block text-center w-full bg-studio-primary text-white py-3 rounded-xl font-bold hover:bg-studio-primary-hover transition-colors">
                  {t.nav.getStarted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isSupportPromptOpen && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-3">
            <button
              aria-label="Close support prompt"
              className="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px] animate-[supportBackdropIn_180ms_ease-out]"
              onClick={() => setIsSupportPromptOpen(false)}
            />

            <div className="relative w-full max-w-[300px] rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-[supportModalIn_220ms_cubic-bezier(0.22,1,0.36,1)]">
              <div className="p-3.5">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-500/20 dark:to-orange-400/10 text-studio-primary flex items-center justify-center shadow-sm shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white leading-tight whitespace-nowrap">
                    {supportPromptCopy.title}
                  </h3>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed mb-1">
                  {supportPromptCopy.description}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                  {supportPromptCopy.note}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={() => setIsSupportPromptOpen(false)}
                    className="flex-1 px-2.5 py-2 rounded-lg border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                  >
                    {supportPromptCopy.cancel}
                  </button>
                  <button
                    onClick={handleSupportContinue}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-lg bg-studio-primary text-white text-xs font-semibold hover:bg-studio-primary-hover transition-colors shadow-lg shadow-studio-primary/30"
                  >
                    <span>{supportPromptCopy.continue}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
      )}

      <style>{`
        @keyframes supportBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes supportModalIn {
          from { opacity: 0; transform: translateY(-16px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
