import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
// @ts-ignore
import DesktopHero from '../img/hero_desktop.png';
// @ts-ignore
import MobileHero from '../img/hero_mobile.png';

const Hero: React.FC = () => {
   const { t, isChanging } = useLanguage();
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
      // Trigger animation immediately on mount
      const timer = setTimeout(() => setLoaded(true), 100);
      return () => clearTimeout(timer);
   }, []);

   const getDelayClass = (delay: number) => {
      return `transform transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${loaded ? 'opacity-100 translate-y-0 filter blur-0' : 'opacity-0 translate-y-12 filter blur-sm'
         }`;
   };

   return (
      <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-24 overflow-hidden perspective-1000">
         {/* Studio Photography Background Image with Radial Overlay */}
         <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Photography Studio Background Image */}
            <div
               className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-15"
               style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=2000')`,
                  backgroundPosition: 'center 30%'
               }}
            ></div>

            {/* Multi-color Radial Gradient Overlays */}
            <div className="absolute inset-0">
               {/* Purple radial from top-left */}
               <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-radial from-purple-500/15 via-purple-600/5 to-transparent rounded-full blur-3xl"></div>

               {/* Cyan radial from top-right */}
               <div className="absolute -top-20 -right-60 w-[700px] h-[700px] bg-gradient-radial from-cyan-400/12 via-teal-500/5 to-transparent rounded-full blur-3xl"></div>

               {/* Pink radial from middle-left */}
               <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-gradient-radial from-pink-500/15 via-rose-500/5 to-transparent rounded-full blur-3xl"></div>

               {/* Orange/Yellow radial from bottom-right */}
               <div className="absolute bottom-20 -right-40 w-[750px] h-[750px] bg-gradient-radial from-orange-400/12 via-amber-500/5 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Vignette effect to focus attention on center */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-studio-paper/60 dark:to-studio-black/60"></div>
         </div>

         {/* Seamless Radial Fade Transition to Next Section */}
         <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-studio-paper/50 dark:via-studio-black/50 to-studio-paper dark:to-studio-black z-[5] pointer-events-none"></div>

         {/* Subtle Textured Pattern Background - Hero Only */}
         <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Fine Grain Texture Layer 1 */}
            <div
               className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
               style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                  mixBlendMode: 'overlay'
               }}
            />

            {/* Grain Texture Layer 2 - Coarser */}
            <div
               className="absolute inset-0 opacity-[0.05] dark:opacity-[0.12]"
               style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise2)'/%3E%3C/svg%3E")`,
                  backgroundSize: '150px 150px',
                  mixBlendMode: 'soft-light'
               }}
            />

            {/* Subtle Dot Pattern - Photography Paper Feel */}
            <div
               className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
               style={{
                  backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.3) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
               }}
            />
         </div>

         <div className={`max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 relative transition-all duration-500 ${isChanging ? 'opacity-0 blur-sm scale-[0.98]' : 'opacity-100 blur-0 scale-100'}`}>

            {/* Badge */}
            <div style={{ transitionDelay: '0ms' }} className={`${getDelayClass(0)} relative z-10`}>
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-studio-primary/10 dark:bg-studio-primary/20 border border-studio-primary/20 dark:border-studio-primary/30 text-studio-primary text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-sm dark:shadow-none relative overflow-hidden group">
                  {/* Animated gradient shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-studio-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
                  <span className="relative z-10">{t.hero.badge}</span>
               </div>
            </div>

            {/* Main Title - Massive & Bold Serif */}
            <div style={{ transitionDelay: '100ms' }} className={`${getDelayClass(100)} relative z-10`}>
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-serif tracking-tight leading-[0.95] mb-8 text-slate-900 dark:text-white transform scale-y-105 drop-shadow-sm dark:drop-shadow-none relative">
                  {t.hero.titleLine1} <br />
                  <span className="text-gradient-creative relative inline-block">
                     {t.hero.titleLine2}
                     {/* Glowing underline accent */}
                     <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-studio-primary/40 to-transparent blur-sm"></div>
                  </span>
               </h1>
            </div>

            {/* Subtitle */}
            <div style={{ transitionDelay: '200ms' }} className={getDelayClass(200)}>
               <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
                  {t.hero.subtitle}
               </p>
            </div>

            {/* CTA Button */}
            <div style={{ transitionDelay: '300ms' }} className={`${getDelayClass(300)} relative z-10`}>
               <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full mb-16 relative">
                  {/* Decorative elements around CTA */}
                  <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-full blur-2xl animate-pulse-slow hidden md:block"></div>
                  <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-teal-500/10 rounded-full blur-2xl animate-pulse-slow hidden md:block" style={{ animationDelay: '1s' }}></div>

                  <button className="relative group overflow-hidden px-10 py-4 bg-studio-primary text-white rounded-full font-bold text-lg hover:bg-studio-primary-hover transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(255,107,44,0.4)] dark:shadow-[0_0_40px_-10px_rgba(255,107,44,0.6)]">
                     {/* Animated gradient overlay */}
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                     {/* Particle burst effect on hover */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                     <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.1s' }}></div>
                     <div className="absolute top-1/2 right-0 translate-x-1/2 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>

                     <span className="relative z-10 flex items-center gap-2">
                        <Zap className="w-5 h-5 fill-current" />
                        {t.hero.startTrial}
                     </span>
                  </button>

                  <button className="relative group px-10 py-4 bg-white dark:bg-studio-card text-slate-700 dark:text-white rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-studio-base transition-all border border-slate-200 dark:border-studio-border shadow-sm dark:shadow-none hover:scale-105 active:scale-95 overflow-hidden">
                     {/* Subtle shimmer effect */}
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/20 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                     <span className="relative z-10">{t.hero.viewShowreel}</span>
                  </button>
               </div>
            </div>

            {/* COMPOSITION AREA */}
            <div style={{ transitionDelay: '400ms' }} className={`w-full flex justify-center ${getDelayClass(400)}`}>
               <div className="relative w-full max-w-5xl mx-auto min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-visible">

                  {/* CENTERPIECE: The Main Dashboard Glass */}
                  <div className="relative z-10 w-full max-w-4xl transform transition-transform hover:scale-[1.01] duration-500 group">
                     <div className="absolute -inset-1 bg-gradient-to-r from-studio-primary/30 to-studio-primary/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>

                     {/* Desktop Browser Frame - Cropped on Mobile */}
                     <div className="relative max-h-[280px] sm:max-h-[350px] md:max-h-none rounded-[24px] overflow-hidden">
                        <div className="p-0 bg-studio-black/95 dark:bg-studio-base/80 backdrop-blur-xl border border-slate-900/10 dark:border-white/10 rounded-[24px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.4)] dark:shadow-2xl ring-1 ring-black/5 dark:ring-white/10 relative">
                           {/* Glossy Sheen Overlay */}
                           <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none z-20"></div>
                           <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50 z-20"></div>

                           {/* Window Controls */}
                           <div className="h-10 md:h-12 bg-white/5 border-b border-white/5 flex items-center px-4 md:px-6 gap-2 relative z-30 backdrop-blur-md">
                              <div className="flex gap-1.5 md:gap-2">
                                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56]"></div>
                                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]"></div>
                                 <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F]"></div>
                              </div>
                              <div className="ml-2 md:ml-4 px-2 md:px-4 py-0.5 md:py-1 rounded-md bg-black/20 text-[9px] md:text-[10px] font-mono text-slate-500 flex-1 text-center border border-white/5 truncate">
                                 office.sesifoto.my
                              </div>
                           </div>

                           {/* DESKTOP SCREENSHOT */}
                           <div className="relative aspect-[16/9] w-full bg-slate-900 group-hover:bg-slate-800 transition-colors">
                              <img
                                 src={DesktopHero}
                                 alt="SesiFoto Dashboard"
                                 className="w-full h-full object-cover object-left-top"
                              />
                           </div>
                        </div>
                     </div>

                     {/* MOBILE OVERLAY (Bottom Right) - More Prominent on Mobile */}
                     <div className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-4 md:-right-16 md:-bottom-20 z-30 w-[40%] sm:w-[38%] md:w-1/3 max-w-[160px] sm:max-w-[200px] md:max-w-[280px]">
                        {/* iPhone Pro Max Frame with Enhanced Details */}
                        <div className="relative rounded-[1.75rem] sm:rounded-[2.25rem] md:rounded-[3rem] border-[5px] sm:border-[6px] md:border-[10px] border-slate-950 dark:border-black bg-slate-950 dark:bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden aspect-[9/19] ring-1 ring-white/10">

                           {/* Dynamic Island / Notch */}
                           <div className="absolute top-2 sm:top-2.5 md:top-3 left-1/2 -translate-x-1/2 w-[28%] h-5 sm:h-6 md:h-7 bg-black rounded-full z-30 flex items-center justify-center gap-1 px-1.5 shadow-inner">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-900/60"></div>
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-500/20"></div>
                           </div>

                           {/* Screen Content */}
                           <img
                              src={MobileHero}
                              alt="Mobile App"
                              className="w-full h-full object-cover relative z-10"
                           />

                           {/* Screen Gloss/Reflection */}
                           <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 pointer-events-none z-20"></div>

                           {/* Home Indicator Bar */}
                           <div className="absolute bottom-1 sm:bottom-1.5 md:bottom-2 left-1/2 -translate-x-1/2 w-[32%] h-[3px] sm:h-1 bg-white/30 rounded-full z-30 shadow-sm"></div>
                        </div>

                        {/* Physical Device Buttons */}
                        {/* Left side - Volume buttons */}
                        <div className="absolute top-[15%] -left-[3px] sm:-left-1 md:-left-[6px] w-[2px] sm:w-[2.5px] md:w-[3px] h-6 sm:h-10 md:h-12 bg-slate-950 dark:bg-black rounded-l-full shadow-sm"></div>
                        <div className="absolute top-[28%] -left-[3px] sm:-left-1 md:-left-[6px] w-[2px] sm:w-[2.5px] md:w-[3px] h-10 sm:h-12 md:h-16 bg-slate-950 dark:bg-black rounded-l-full shadow-sm"></div>

                        {/* Right side - Power button */}
                        <div className="absolute top-[22%] -right-[3px] sm:-right-1 md:-right-[6px] w-[2px] sm:w-[2.5px] md:w-[3px] h-12 sm:h-16 md:h-20 bg-slate-950 dark:bg-black rounded-r-full shadow-sm"></div>
                     </div>

                  </div>
               </div>
            </div>

         </div>
      </section>
   );
};

export default Hero;