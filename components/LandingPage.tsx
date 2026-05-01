import React, { Suspense, lazy } from 'react';
import Hero from './Hero';
import StudioBackground from './StudioBackground';

// Lazy load below-the-fold components
const UserBenefits = lazy(() => import('./UserBenefits'));
const Features = lazy(() => import('./Features'));
const Integrations = lazy(() => import('./Integrations'));
const Pricing = lazy(() => import('./Pricing'));
const FAQ = lazy(() => import('./FAQ'));
const Footer = lazy(() => import('./Footer'));

// Contexts are provided in App.tsx now, so we don't need providers here

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen overflow-x-hidden font-sans">
            {/* Scroll Driven Technical Background */}
            <StudioBackground />

            <div className="relative z-10 flex flex-col gap-0">
                <main>
                    <Hero />
                    <Suspense fallback={<div className="h-32 flex items-center justify-center text-slate-400">...</div>}>
                        <UserBenefits />
                        <Features />
                        <Integrations />
                        {/* <div className="relative border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-studio-base/40 backdrop-blur-md">
                <Testimonials />
              </div> */}
                        <Pricing />
                        <FAQ />
                    </Suspense>
                </main>
                <Suspense fallback={null}>
                    <Footer />
                </Suspense>
            </div>
        </div>
    );
};

export default LandingPage;
