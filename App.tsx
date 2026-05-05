import React, { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { RouteTransitionProvider } from './contexts/RouteTransitionContext';
import Navbar from './components/Navbar';

// ---------------------------------------------------------------------------
// Route-level loading bar — thin top bar, only visible if chunk takes > 300ms
// ---------------------------------------------------------------------------
const ROUTE_LOADING_DELAY_MS = 300;

const RouteLoadingBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Grace period: don't show anything if the route resolves quickly
    const timer = setTimeout(() => setVisible(true), ROUTE_LOADING_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9998] h-[2px] pointer-events-none"
      role="progressbar"
      aria-label="Loading page"
    >
      <div
        className="h-full bg-gradient-to-r from-studio-primary to-[#FF8A5C] rounded-r-full"
        style={{
          animation: 'sfRouteBar 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        }}
      />
    </div>
  );
};

// ---------------------------------------------------------------------------
// Page transition wrapper — opacity-only for buttery GPU compositing
// ---------------------------------------------------------------------------
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.08, ease: "easeIn" } }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full"
    >
      <Suspense fallback={<RouteLoadingBar />}>
        {children}
      </Suspense>
    </motion.div>
  );
};

// ---------------------------------------------------------------------------
// Lazy routes
// ---------------------------------------------------------------------------
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

const hasProtectedMedia = (target: EventTarget | null) => {
  if (!(target instanceof Element)) return false;

  const mediaSelector = 'img, video, picture, canvas, source, [data-protected-media]';
  if (target.closest(mediaSelector)) return true;

  let node: Element | null = target;
  while (node && node !== document.body) {
    const backgroundImage = window.getComputedStyle(node).backgroundImage;
    if (backgroundImage && backgroundImage !== 'none' && backgroundImage.includes('url(')) {
      return true;
    }
    node = node.parentElement;
  }

  return false;
};

const MediaProtection = () => {
  useEffect(() => {
    const preventMediaAction = (event: Event) => {
      if (hasProtectedMedia(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventMediaAction, { capture: true });
    document.addEventListener('dragstart', preventMediaAction, { capture: true });

    return () => {
      document.removeEventListener('contextmenu', preventMediaAction, { capture: true });
      document.removeEventListener('dragstart', preventMediaAction, { capture: true });
    };
  }, []);

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
      <MediaProtection />
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
