import React, { Suspense, lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { RouteTransitionProvider } from './contexts/RouteTransitionContext';
import Navbar from './components/Navbar';

const LoadingFallback = () => (
  <div className="flex items-center justify-center w-full h-[60vh]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-studio-primary border-t-transparent animate-spin"></div>
      <span className="text-sm text-slate-400 font-medium tracking-widest uppercase">Loading</span>
    </div>
  </div>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, transition: { duration: 0.05, ease: "easeIn" } }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full"
    >
      <Suspense fallback={<LoadingFallback />}>
        {children}
      </Suspense>
    </motion.div>
  );
};

const LandingPage = lazy(() => import('./components/LandingPage'));
const SalesPage = lazy(() => import('./components/SalesPage'));
const NewsPage = lazy(() => import('./components/NewsPage'));
const NewsDetailPage = lazy(() => import('./components/NewsDetailPage'));
const DirectoryPage = lazy(() => import('./components/DirectoryPage'));
const NotFound = lazy(() => import('./components/NotFound'));

export const preloadRoute = (path: string) => {
  if (path === '/') void import('./components/LandingPage');
  else if (path.startsWith('/news')) void import('./components/NewsPage');
  else if (path.startsWith('/directory')) void import('./components/DirectoryPage');
  else if (path.startsWith('/salespage')) void import('./components/SalesPage');
};

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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to top, preventing smooth scroll
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const startHomeToNewsTransition = useCallback(async () => {
    if (location.pathname !== '/') {
      navigate('/news');
      return;
    }
    // Preload and immediately navigate so there is no delay/gap
    void preloadNewsPage();
    navigate('/news');
  }, [location.pathname, navigate]);

  const transitionContextValue = useMemo(() => ({
    isRouteTransitioning: false,
    startHomeToNewsTransition,
  }), [startHomeToNewsTransition]);

  return (
    <RouteTransitionProvider value={transitionContextValue}>
      <ScrollToTop />
      {location.pathname !== '/salespage' && <Navbar />}
      <AnimatePresence mode="wait">
        {/* @ts-ignore - key is required for AnimatePresence to trigger exit animations */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
          <Route path="/salespage" element={<PageTransition><SalesPage /></PageTransition>} />
          <Route path="/news" element={<PageTransition><NewsPage /></PageTransition>} />
          <Route path="/news/:slug" element={<PageTransition><NewsDetailPage /></PageTransition>} />
          <Route path="/directory" element={<PageTransition><DirectoryPage /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
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
