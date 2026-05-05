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
const Testimonials = lazy(() => import('./Testimonials'));

// Minimal section placeholder — invisible, reserves no space, causes no CLS
const SectionFallback = () => (
    <div className="w-full" aria-hidden="true" />
);

// Contexts are provided in App.tsx now, so we don't need providers here

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen overflow-x-hidden font-sans">
            {/* Scroll Driven Technical Background */}
            <StudioBackground />

            <div className="relative z-10 flex flex-col gap-0">
                <main>
                    <Hero />
                    {/* Each section gets its own Suspense boundary to prevent waterfall loading.
                        Earlier sections render immediately while later ones still download. */}
                    <Suspense fallback={<SectionFallback />}>
                        <UserBenefits />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <Features />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <div className="relative z-10 w-full pt-16 pb-12">
                          <Testimonials />
                        </div>
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <Integrations />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
                        <Pricing />
                    </Suspense>
                    <Suspense fallback={<SectionFallback />}>
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
