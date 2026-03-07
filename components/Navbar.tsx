import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Globe,
  Moon,
  Sun,
  MessageCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useRouteTransition } from '../contexts/RouteTransitionContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSupportPromptOpen, setIsSupportPromptOpen] = useState(false);
  const [isLogoLoadFailed, setIsLogoLoadFailed] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const landingSectionKeys = new Set(['features', 'pricing', 'faq']);
  const landingSectionLinks = NAV_LINKS.filter((link) => landingSectionKeys.has(link.key));
  const primaryNavLinks = NAV_LINKS.filter((link) => !landingSectionKeys.has(link.key));
  const supportLink = NAV_LINKS.find((link) => link.key === 'support');
  const supportHref = supportLink?.href || 'https://wa.link/rxj90f';

  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { startHomeToNewsTransition } = useRouteTransition();

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
    let rafId: number | null = null;

    const updateThemeColor = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));

      // ==================== LIGHT MODE DISABLED ====================
      // Update theme-color meta tag - FORCED TO DARK MODE ONLY
      const metaTags = document.querySelectorAll('meta[name="theme-color"]');
      metaTags.forEach(meta => {
        meta.removeAttribute('media');
        if (meta.getAttribute('content') !== '#0A0A0A') {
          meta.setAttribute('content', '#0A0A0A');
        }
      });
      // ============================================================
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        updateThemeColor();
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Call once on mount/theme change
    updateThemeColor();

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', onScroll);
    };
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

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

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

  const handlePrimaryNavClick = async (
    event: React.MouseEvent<HTMLAnchorElement>,
    linkKey: string
  ) => {
    if (linkKey === 'support') {
      event.preventDefault();
      openSupportPrompt(event);
      return;
    }

    setIsMobileMenuOpen(false);
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
                {isLogoLoadFailed ? (
                  <Globe className="w-8 h-8 text-studio-primary" aria-hidden="true" />
                ) : (
                  <img
                    src={theme === 'dark' ? "/img/Asset 5.png" : "/img/Asset 4.png"}
                    alt="SesiFoto Logo"
                    className="h-full w-auto object-contain"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onError={() => setIsLogoLoadFailed(true)}
                  />
                )}
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-0 md:gap-1.5">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-sans font-medium tracking-widest uppercase opacity-90">by Infyra</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {isHomePage ? (
                <div className="relative group">
                  <a
                    href="/"
                    className="text-sm font-bold text-studio-primary transition-colors tracking-wide inline-flex items-center"
                  >
                    {t.nav.home}
                  </a>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="min-w-[180px] rounded-2xl bg-studio-paper/95 dark:bg-studio-black/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl p-2">
                      {landingSectionLinks.map((link) => (
                        <Link
                          key={link.key}
                          to={link.href}
                          className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-studio-primary dark:hover:text-studio-primary hover:bg-slate-100/60 dark:hover:bg-white/5 transition-colors"
                        >
                          {t.nav[link.key as keyof typeof t.nav]}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-studio-primary dark:hover:text-studio-primary transition-colors tracking-wide inline-flex items-center"
                >
                  {t.nav.home}
                </Link>
              )}

              {primaryNavLinks.map((link) => {
                const isActive = location.pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.key}
                    to={link.href}
                    onClick={(event) => {
                      void handlePrimaryNavClick(event, link.key);
                    }}
                    className={`text-sm tracking-wide transition-colors ${isActive
                      ? 'font-bold text-studio-primary'
                      : 'font-medium text-slate-600 dark:text-slate-400 hover:text-studio-primary dark:hover:text-studio-primary'
                      }`}
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 lg:gap-6">

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
                className="lg:hidden relative w-11 h-11 flex items-center justify-center text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-menu"
              >
                <Menu
                  className={`absolute w-6 h-6 transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                    }`}
                />
                <X
                  className={`absolute w-6 h-6 transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                    }`}
                />
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* Mobile Menu - Fullscreen */}
      <div
        id="mobile-navigation-menu"
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <button
          aria-label="Close mobile menu"
          className={`absolute inset-0 bg-slate-950/72 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className={`absolute top-3 left-3 right-3 rounded-3xl bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden max-h-[calc(100vh-1.5rem)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-[0.97]'}`}>
          <div className="flex flex-col">
            <div className="h-16 px-5 flex items-center justify-between border-b border-slate-200/70 dark:border-white/10">
              <div className="h-7 flex items-center">
                {isLogoLoadFailed ? (
                  <Globe className="w-6 h-6 text-studio-primary" aria-hidden="true" />
                ) : (
                  <img
                    src={theme === 'dark' ? "/img/Asset 5.png" : "/img/Asset 4.png"}
                    alt="SesiFoto Logo"
                    className="h-full w-auto object-contain"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onError={() => setIsLogoLoadFailed(true)}
                  />
                )}
              </div>
              <button
                aria-label="Close mobile menu"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto overscroll-contain px-5 py-4 max-h-[calc(100vh-5.5rem)]">
              <div className="space-y-1">
                <Link
                  to="/"
                  className={`flex items-center justify-between min-h-12 py-2 text-lg transition-colors ${isHomePage
                    ? 'font-bold text-studio-primary'
                    : 'font-medium text-slate-900 dark:text-slate-100 hover:text-studio-primary dark:hover:text-studio-primary'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{t.nav.home}</span>
                  {isHomePage && <ChevronRight className="w-4 h-4 text-studio-primary" />}
                </Link>

                {isHomePage && (
                  <div className="ml-2 pl-4 border-l border-slate-200 dark:border-white/10 space-y-0.5">
                    {landingSectionLinks.map((link) => (
                      <Link
                        key={link.key}
                        to={link.href}
                        className="flex items-center justify-between min-h-10 py-1.5 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-studio-primary dark:hover:text-studio-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{t.nav[link.key as keyof typeof t.nav]}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                )}

                <div className="my-2 border-t border-slate-200 dark:border-white/10"></div>

                {primaryNavLinks.map((link) => {
                  const isActive = location.pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.key}
                      to={link.href}
                      className={`flex items-center justify-between min-h-12 py-2 text-lg transition-colors ${isActive
                        ? 'font-bold text-studio-primary'
                        : 'font-medium text-slate-900 dark:text-slate-100 hover:text-studio-primary dark:hover:text-studio-primary'
                        }`}
                      onClick={(event) => {
                        void handlePrimaryNavClick(event, link.key);
                      }}
                    >
                      <span>{t.nav[link.key as keyof typeof t.nav]}</span>
                      {isActive && <ChevronRight className="w-4 h-4 text-studio-primary" />}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://office.sesifoto.my/login"
                    className="relative group w-full px-4 py-3 bg-white dark:bg-studio-card text-slate-700 dark:text-white rounded-full font-bold text-sm hover:bg-slate-50 dark:hover:bg-studio-base transition-all border border-slate-200 dark:border-studio-border shadow-sm text-center flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.signin}
                  </a>
                  <a
                    href="https://office.sesifoto.my/register"
                    className="relative group overflow-hidden w-full px-4 py-3 bg-studio-primary text-white rounded-full font-bold text-sm hover:bg-studio-primary-hover transition-all shadow-[0_10px_30px_-10px_rgba(255,107,44,0.45)] text-center flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t.nav.getStarted}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
