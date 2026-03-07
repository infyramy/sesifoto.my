import React, { Suspense, lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { RouteTransitionProvider } from './contexts/RouteTransitionContext';

const LandingPage = lazy(() => import('./components/LandingPage'));
const SalesPage = lazy(() => import('./components/SalesPage'));
const NewsPage = lazy(() => import('./components/NewsPage'));
const NewsDetailPage = lazy(() => import('./components/NewsDetailPage'));
const DirectoryPage = lazy(() => import('./components/DirectoryPage'));
const NotFound = lazy(() => import('./components/NotFound'));

const preloadNewsPage = () => import('./components/NewsPage');

const sleep = (ms: number) => new Promise<void>((resolve) => {
  window.setTimeout(resolve, ms);
});

const isConstrainedConnection = () => {
  if (typeof navigator === 'undefined') return false;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (!connection) return false;
  if (connection.saveData) return true;
  return connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g' || connection.effectiveType === '3g';
};

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRouteTransitioning, setIsRouteTransitioning] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') return;
    if (isConstrainedConnection()) return;
    const timerId = window.setTimeout(() => {
      void preloadNewsPage();
    }, 80);
    return () => {
      window.clearTimeout(timerId);
    };
  }, [location.pathname]);

  const startHomeToNewsTransition = useCallback(async () => {
    if (isRouteTransitioning) return;
    if (location.pathname !== '/') {
      navigate('/news');
      return;
    }

    const shouldUseMinimalTransition =
      (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) ||
      isConstrainedConnection();

    if (shouldUseMinimalTransition) {
      navigate('/news');
      return;
    }

    setIsRouteTransitioning(true);

    try {
      await preloadNewsPage();
      await sleep(120);
      navigate('/news');

      await new Promise<void>((resolve) => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => resolve());
        });
      });

      await sleep(220);
    } finally {
      setIsRouteTransitioning(false);
    }
  }, [isRouteTransitioning, location.pathname, navigate]);

  const transitionContextValue = useMemo(() => ({
    isRouteTransitioning,
    startHomeToNewsTransition,
  }), [isRouteTransitioning, startHomeToNewsTransition]);

  return (
    <RouteTransitionProvider value={transitionContextValue}>
      <Suspense fallback={<div className="min-h-screen bg-studio-paper dark:bg-studio-black" />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/salespage" element={<SalesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-[120] transition-opacity duration-300 ${isRouteTransitioning ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute inset-0 bg-studio-paper/92 dark:bg-studio-black/92 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,44,0.14)_0%,rgba(255,107,44,0)_62%)]" />

        <div className="relative h-full w-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            <img src="/img/Asset 4.png" alt="" className="h-9 w-auto object-contain dark:hidden" loading="eager" decoding="async" fetchPriority="high" />
            <img src="/img/Asset 5.png" alt="" className="hidden h-9 w-auto object-contain dark:block" loading="eager" decoding="async" fetchPriority="high" />
            <div className="h-1.5 w-44 rounded-full overflow-hidden bg-slate-200/80 dark:bg-white/10">
              <div className="h-full w-1/2 rounded-full bg-studio-primary animate-[routeTransitionBar_900ms_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes routeTransitionBar {
          0% { transform: translateX(-130%); }
          100% { transform: translateX(230%); }
        }
      `}</style>
    </RouteTransitionProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
