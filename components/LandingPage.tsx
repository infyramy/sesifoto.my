import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Footer from './Footer';
import StudioBackground from './StudioBackground';
import UserBenefits from './UserBenefits';
import Integrations from './Integrations';
import SpecialAnnouncement from './SpecialAnnouncement';
// Contexts are provided in App.tsx now, so we don't need providers here

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen overflow-x-hidden font-sans">
            {/* Scroll Driven Technical Background */}
            <StudioBackground />

            <div className="relative z-10 flex flex-col gap-0">
                <Navbar />
                <main>
                    <Hero />
                    <SpecialAnnouncement />
                    <UserBenefits />
                    <Features />
                    <Integrations />
                    {/* <div className="relative border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-studio-base/40 backdrop-blur-md">
            <Testimonials />
          </div> */}
                    <Pricing />
                    <FAQ />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default LandingPage;
