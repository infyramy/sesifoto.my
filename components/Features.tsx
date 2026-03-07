import React from 'react';
import GlassCard from './ui/GlassCard';
import Reveal from './ui/Reveal';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, LayoutDashboard, Calendar, CalendarClock, BarChart3, CheckCircle2, ShieldCheck, FileSpreadsheet, Ticket, ArrowLeftRight, Download, Search, Clock, ChevronsUpDown, Filter, Users, MessageCircle, MoreHorizontal, MoreVertical, Calendar as CalendarIcon } from 'lucide-react';
import { sanitizeRichHtml } from '../utils/sanitizeHtml';

const Features: React.FC = () => {
   const { t, isChanging } = useLanguage();

   // Map icons to the 5 features dynamically based on index
   const getIcon = (index: number) => {
      switch (index) {
         case 0: return <Globe className="w-6 h-6 text-studio-primary" />; // Booking Site
         case 1: return <LayoutDashboard className="w-6 h-6 text-studio-primary" />; // Management
         case 2: return <Calendar className="w-6 h-6 text-green-600" />; // Google Sync/Whatsapp
         case 3: return <CalendarClock className="w-6 h-6 text-orange-600" />; // Scheduling Rules
         case 4: return <BarChart3 className="w-6 h-6 text-studio-primary" />; // Reporting
         default: return <CheckCircle2 className="w-6 h-6" />;
      }
   };

   // Map bento icon by title so visual meaning stays correct even if card order changes
   const getBentoIcon = (title: string, tier?: string) => {
      const normalized = title.toLowerCase();

      if (normalized.includes('borang') || normalized.includes('booking form')) {
         return <LayoutDashboard className="w-5 h-5" />;
      }
      if (normalized.includes('eksport') || normalized.includes('export')) {
         return <Download className="w-5 h-5" />;
      }
      if (normalized.includes('resit') || normalized.includes('receipt') || normalized.includes('invoice')) {
         return <FileSpreadsheet className="w-5 h-5" />;
      }
      if (normalized.includes('carian') || normalized.includes('search')) {
         return <Search className="w-5 h-5" />;
      }
      if (normalized.includes('calendar')) {
         return <Calendar className="w-5 h-5" />;
      }
      if (normalized.includes('telegram')) {
         return <MessageCircle className="w-5 h-5" />;
      }
      if (normalized.includes('baucar') || normalized.includes('voucher')) {
         return <Ticket className="w-5 h-5" />;
      }
      if (normalized.includes('whatsapp')) {
         return <MessageCircle className="w-5 h-5" />;
      }
      if (normalized.includes('jurugambar') || normalized.includes('photographer') || normalized.includes('payout')) {
         return <Users className="w-5 h-5" />;
      }
      if (normalized.includes('lead')) {
         return <Filter className="w-5 h-5" />;
      }

      return tier === 'prime'
         ? <Filter className="w-5 h-5" />
         : <ShieldCheck className="w-5 h-5" />;
   };

   // Map colors for the icon container background (Main Pillars)
   const getIconBg = (index: number) => {
      switch (index) {
         case 0: return "bg-studio-primary/10 border-studio-primary/20";
         case 1: return "bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800/30";
         case 2: return "bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800/30";
         case 3: return "bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800/30";
         case 4: return "bg-orange-100 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800/30";
         default: return "bg-slate-100";
      }
   };

   const toFormattedHtml = (text: string, emphasisClass: string) =>
      sanitizeRichHtml(
         text.replace(/\*(.*?)\*/g, `<em class="${emphasisClass}">$1</em>`)
      );

   return (
      <section id="features" className="py-16 md:py-24 relative bg-slate-50 dark:bg-zinc-950 overflow-hidden transition-colors duration-500">

         {/* Theme-Aware Background Gradient Orbs */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-orange-200/40 dark:from-studio-primary/10 to-transparent opacity-60 dark:opacity-50 blur-3xl pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-amber-200/30 dark:from-orange-500/10 to-transparent opacity-50 dark:opacity-40 blur-3xl pointer-events-none"></div>

         {/* Additional Orange Accents for Depth */}
         <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-studio-primary/10 dark:bg-studio-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute top-[60%] right-[-10%] w-[500px] h-[500px] bg-orange-400/10 dark:bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

         {/* Grid Pattern Overlay - CSS Based for Reliability */}
         <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
            style={{
               backgroundImage: `linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)`,
               backgroundSize: '40px 40px',
               maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
               WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
            }}
         ></div>

         <div className={`max-w-7xl mx-auto px-6 relative z-10 transition-all duration-500 ${isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>

            {/* HEADER */}
            {/* HEADER */}
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20 w-full px-4">
               <Reveal width="100%">
                  <h2 className="text-3xl md:text-5xl font-medium font-serif mb-6 text-slate-900 dark:text-white leading-[1.1] pb-2">
                     {t.features.titleLine1} <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-slate-800 to-slate-900 dark:from-white dark:to-slate-300 pb-1">
                        {t.features.titleLine2}
                     </span>
                  </h2>
               </Reveal>
               <Reveal delay={100} width="100%">
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
                     {t.features.subtitle}
                  </p>
               </Reveal>
            </div>

            {/* 5 PILLAR FEATURES */}
            <div className="flex flex-col gap-16 mb-32">
               {t.features.list?.map((feature: any, index: number) => {
                  const isLeft = index % 2 === 0;

                  return (
                     <Reveal key={index} className="w-full">
                        {/* Card Container Wrapper */}
                        <div className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-12 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500 overflow-hidden relative group">

                           {/* Shiny Orange Corner Glow - Alternating */}
                           <div className={`absolute -top-24 ${index % 2 === 0 ? '-left-24' : '-right-24'} w-64 h-64 bg-orange-500/10 dark:bg-orange-500/20 blur-[80px] rounded-full pointer-events-none transition-all duration-500 group-hover:bg-orange-500/20 dark:group-hover:bg-orange-500/30`}></div>

                           <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-8 lg:gap-16 group relative z-10`}>

                              {/* TEXT CONTENT */}
                              <div className="flex-1 w-full md:w-7/12 lg:w-1/2">
                                 <div className={`inline-flex items-center justify-center p-3 rounded-xl border mb-8 ${getIconBg(index)}`}>
                                    {getIcon(index)}
                                 </div>

                                 <h3 className="text-3xl md:text-4xl font-medium font-serif text-slate-900 dark:text-white mb-6 leading-tight">
                                    {feature.title}
                                 </h3>

                                 <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: toFormattedHtml(feature.description, 'text-slate-500 dark:text-slate-300 font-medium') }}
                                 />

                                 <ul className="space-y-4">
                                    {feature.checkpoints?.map((point: string, i: number) => (
                                       <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                             <CheckCircle2 size={12} strokeWidth={3} />
                                          </div>
                                          <span dangerouslySetInnerHTML={{ __html: toFormattedHtml(point, 'text-slate-800 dark:text-white') }} />
                                       </li>
                                    ))}
                                 </ul>

                                 {/* Optional Demo Link */}
                                 {feature.demoLink && (
                                    <div className="mt-8">
                                       <a href={feature.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-studio-primary hover:text-studio-primary-hover transition-colors group/link">
                                          {feature.demoLabel}
                                          <span className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded-full group-hover/link:translate-x-1 transition-transform">
                                             <ArrowLeftRight size={14} className="text-studio-primary" />
                                          </span>
                                       </a>
                                    </div>
                                 )}
                              </div>

                              <div className="flex-1 w-full md:w-5/12 lg:w-1/2">
                                 <div className="relative w-full aspect-[27/25] max-w-[420px] md:max-w-[320px] lg:max-w-[500px] mx-auto flex items-center justify-center">

                                    {/* CONDITIONAL MOCKUPS FOR ALL FEATURES */}
                                    {index === 0 && (
                                       <RemotionLoopMockup
                                          src="/remotion/AntimatedBookingPage.mp4"
                                          title={feature.title}
                                          poster={feature.image}
                                       />
                                    )}
                                    {index === 1 && (
                                       <RemotionLoopMockup
                                          src="/remotion/AnimatedBookingCard.mp4"
                                          title={feature.title}
                                          poster={feature.image}
                                       />
                                    )}
                                    {index === 2 && (
                                       <RemotionLoopMockup
                                          src="/remotion/AnimatedNotificationViews.mp4"
                                          title={feature.title}
                                          poster={feature.image}
                                       />
                                    )}
                                    {index === 3 && (
                                       <RemotionLoopMockup
                                          src="/remotion/AnimatedOperatingHours.mp4"
                                          title={feature.title}
                                          poster={feature.image}
                                       />
                                    )}
                                    {index === 4 && (
                                       <RemotionLoopMockup
                                          src="/remotion/AnimatedDashboard.mp4"
                                          title={feature.title}
                                          poster={feature.image}
                                       />
                                    )}

                                    {/* Fallback for safety or future items */}
                                    {![0, 1, 2, 3, 4].includes(index) && (
                                       <GlassCard className={`p-3 bg-white/50 dark:bg-white/5 border border-white/60 dark:border-white/10 shadow-xl shadow-studio-primary/5 dark:shadow-none transition-transform duration-700 hover:scale-[1.02] ${isLeft ? 'rotate-y-2 hover:rotate-y-0' : '-rotate-y-2 hover:rotate-y-0'} origin-center h-full`}>
                                          <div className="relative w-full h-full bg-slate-100 dark:bg-slate-800 shadow-inner rounded-lg overflow-hidden">
                                             <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                             />
                                             {/* Reflection Gloss */}
                                             <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 opacity-50 pointer-events-none"></div>
                                          </div>
                                       </GlassCard>
                                    )}

                                 </div>
                              </div>

                           </div>
                        </div>
                     </Reveal>
                  );
               })}
            </div>

            {/* NEW BENTO GRID SECTION */}
            {t.features.bentoGrid && (
               <div className="mt-16 md:mt-32 max-w-6xl mx-auto px-6">
                  <Reveal width="100%">
                     <div className="text-center mb-16 md:mb-20 w-full max-w-4xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-medium font-serif text-slate-900 dark:text-white mb-3 leading-tight">{t.features.bentoGrid.title}</h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">{t.features.bentoGrid.subtitle}</p>
                     </div>
                  </Reveal>

                  {(() => {
                     const items = t.features.bentoGrid.items || [];
                     const allPackageItems = items.filter((item: any) => item.tier !== 'prime');
                     const primeOnlyItems = items.filter((item: any) => item.tier === 'prime');
                     return (
                        <div className="space-y-10">
                           <div>
                              <div className="mb-5">
                                 <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                                    {t.features.bentoGrid.groupAllTitle}
                                 </span>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5" style={{ gridAutoRows: '1fr' }}>
                                 {allPackageItems.map((item: any, index: number) => (
                                    <Reveal key={`all-${index}`} delay={index * 50} width="100%" className="flex h-full">
                                       <GlassCard className="w-full h-full p-5 md:p-6 flex flex-col items-start gap-6 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 transition-all duration-300 group hover:shadow-md hover:-translate-y-1">
                                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-white/5 dark:to-white/10 border border-slate-200 dark:border-white/10 text-studio-primary dark:text-studio-primary flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm mb-4">
                                             {getBentoIcon(item.title, item.tier)}
                                          </div>
                                          <div className="flex-1 w-full">
                                             <h4 className="font-medium text-xl text-slate-900 dark:text-white mb-2">{item.title}</h4>
                                             <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{item.description}</p>
                                          </div>
                                       </GlassCard>
                                    </Reveal>
                                 ))}
                              </div>
                           </div>

                           <div className="pt-8 border-t border-slate-200 dark:border-white/10">
                              <div className="mb-5">
                                 <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase bg-studio-primary/15 text-studio-primary border border-studio-primary/30">
                                    {t.features.bentoGrid.groupPrimeTitle}
                                 </span>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5" style={{ gridAutoRows: '1fr' }}>
                                 {primeOnlyItems.map((item: any, index: number) => (
                                    <Reveal key={`prime-${index}`} delay={index * 50} width="100%" className="flex h-full">
                                       <GlassCard className="w-full h-full p-5 md:p-6 flex flex-col items-start gap-6 bg-slate-50 dark:bg-zinc-900 border border-studio-primary/20 dark:border-studio-primary/30 hover:border-studio-primary/40 transition-all duration-300 group hover:shadow-md hover:-translate-y-1">
                                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-studio-primary/10 dark:to-orange-500/10 border border-orange-200 dark:border-studio-primary/30 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm mb-4">
                                             {getBentoIcon(item.title, item.tier)}
                                          </div>
                                          <div className="flex-1 w-full">
                                             <h4 className="font-medium text-xl text-slate-900 dark:text-white mb-2">{item.title}</h4>
                                             <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{item.description}</p>
                                          </div>
                                       </GlassCard>
                                    </Reveal>
                                 ))}
                              </div>
                           </div>
                        </div>
                     );
                  })()}
               </div>
            )}

         </div>
      </section >
   );
};

// ==========================================
// FEATURE MOCKUPS
// ==========================================

const RemotionLoopMockup: React.FC<{ src: string; title: string; poster?: string }> = ({ src, title }) => {
   const cacheKey = '20260307d';
   const resolvedSrc = `${src}?v=${cacheKey}`;
   const containerRef = React.useRef<HTMLDivElement | null>(null);
   const videoRef = React.useRef<HTMLVideoElement | null>(null);

   // Force muted + inline attributes on mount (required for autoplay policy)
   React.useEffect(() => {
      const video = videoRef.current;
      if (!video) return;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
   }, []);

   // Play when any pixel is visible, pause when fully off-screen
   React.useEffect(() => {
      const container = containerRef.current;
      const video = videoRef.current;
      if (!container || !video) return;

      if (typeof IntersectionObserver === 'undefined') {
         video.play().catch(() => { });
         return;
      }

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               video.play().catch(() => { });
            } else {
               video.pause();
            }
         },
         { threshold: 0 }
      );

      observer.observe(container);
      return () => observer.disconnect();
   }, []);

   // Resume when tab becomes visible if still in viewport
   React.useEffect(() => {
      const video = videoRef.current;
      if (!video) return;
      const onVisibility = () => {
         if (document.visibilityState !== 'visible') return;
         const container = containerRef.current;
         if (!container) return;
         const rect = container.getBoundingClientRect();
         if (rect.bottom > 0 && rect.top < window.innerHeight) video.play().catch(() => { });
      };
      document.addEventListener('visibilitychange', onVisibility);
      return () => document.removeEventListener('visibilitychange', onVisibility);
   }, []);

   return (
      <div ref={containerRef} className="w-full h-full rounded-[30px] overflow-hidden bg-transparent">
         <video
            ref={videoRef}
            src={resolvedSrc}
            muted
            loop
            playsInline
            autoPlay
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload nofullscreen noremoteplayback"
            tabIndex={-1}
            draggable={false}
            preload="auto"
            className="w-full h-full object-contain pointer-events-none select-none bg-transparent"
            aria-label={title}
            onContextMenu={(e) => e.preventDefault()}
         />
      </div>
   );
};

const ControlCentreMockup = () => (
   <div className="w-full h-full bg-slate-50 dark:bg-zinc-950 flex flex-col font-sans overflow-hidden relative rounded-xl border border-slate-200 dark:border-white/10 shadow-sm transition-all duration-300">

      {/* 1. Header Section */}
      <div className="px-5 py-4 border-b border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 flex items-center justify-between shrink-0">
         <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">Manage Bookings</h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Active bookings list</p>
         </div>

         {/* Toggle View */}
         <div className="bg-slate-100 dark:bg-zinc-800 p-0.5 rounded-lg flex border border-slate-200 dark:border-white/5">
            <div className="px-3 py-1 bg-white dark:bg-zinc-700 rounded-md shadow-sm border border-slate-200 dark:border-white/5 flex items-center gap-1.5">
               <div className="space-y-0.5">
                  <div className="w-3 h-0.5 bg-studio-primary rounded-full"></div>
                  <div className="w-3 h-0.5 bg-studio-primary rounded-full"></div>
                  <div className="w-3 h-0.5 bg-studio-primary rounded-full"></div>
               </div>
               <span className="text-[10px] font-bold text-studio-primary">List</span>
            </div>
            <div className="px-3 py-1 flex items-center gap-1.5 text-slate-400 dark:text-slate-500 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
               <Calendar size={12} strokeWidth={2.5} />
            </div>
         </div>
      </div>

      {/* 2. Main Content - Booking List */}
      <div className="flex-1 overflow-hidden relative bg-slate-50 dark:bg-black/20 p-4">

         {/* Filter Bar */}
         <div className="flex gap-2 mb-4">
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-lg px-2.5 py-1.5 flex items-center gap-2 flex-1 shadow-sm">
               <Search size={12} className="text-slate-400" />
               <div className="text-[10px] text-slate-400">Search Customers...</div>
            </div>
            <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm text-slate-600 dark:text-slate-300">
               <Filter size={12} />
               <span className="text-[10px] font-medium">Status</span>
            </div>
         </div>

         {/* List Items */}
         <div className="space-y-2.5">

            {/* Item 1 - Active/Selected */}
            <div className="bg-white dark:bg-zinc-900 border border-orange-200 dark:border-orange-500/30 rounded-xl p-3 shadow-md relative group cursor-pointer ring-1 ring-orange-100 dark:ring-orange-900/20 translate-x-1 transition-transform">
               <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2.5">
                     <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/10">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="Sarah" className="w-full h-full rounded-full object-cover" />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Sarah Amira</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                           Confirmed
                        </p>
                     </div>
                  </div>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-green-200 dark:border-green-800/30">
                     PAID
                  </span>
               </div>

               <div className="bg-slate-50 dark:bg-zinc-800/50 rounded-lg p-2 border border-slate-100 dark:border-white/5 space-y-1.5">
                  <div className="flex justify-between items-center text-[10px]">
                     <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <CalendarIcon size={10} /> 12 Mar, 10:00 AM
                     </span>
                     <span className="font-medium text-slate-700 dark:text-slate-300">Raya Family</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px]">
                     <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <Users size={10} /> 5 Pax
                     </span>
                     <div className="flex gap-1">
                        <span className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded text-[9px] font-medium border border-orange-200 dark:border-orange-800/30">+Makeup</span>
                     </div>
                  </div>
               </div>

               {/* Action Overlay (Hover Hint) */}
               <div className="absolute right-2 bottom-9">
                  <div className="w-5 h-5 bg-white dark:bg-zinc-800 rounded-full border border-slate-200 dark:border-white/10 shadow flex items-center justify-center text-slate-400">
                     <MoreHorizontal size={12} />
                  </div>
               </div>
            </div>

            {/* Item 2 - Standard */}
            <div className="bg-white/60 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/5 rounded-xl p-3 shadow-sm hover:bg-white dark:hover:bg-zinc-900 transition-colors cursor-pointer opacity-80 hover:opacity-100">
               <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2.5">
                     <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center text-amber-700 dark:text-amber-500 font-bold text-[10px] shrink-0">
                        HF
                     </div>
                     <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Hafiz Farhan</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Pending Confirmation</p>
                     </div>
                  </div>
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-orange-200 dark:border-orange-800/30">
                     DEPOSIT
                  </span>
               </div>
               <div className="flex justify-between items-center text-[10px] pl-1">
                  <span className="text-slate-500 dark:text-slate-400">12 Mar, 02:00 PM</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Couple Casual</span>
               </div>
            </div>

            {/* Item 3 - Standard */}
            <div className="bg-white/60 dark:bg-zinc-900/60 border border-slate-200 dark:border-white/5 rounded-xl p-3 shadow-sm hover:bg-white dark:hover:bg-zinc-900 transition-colors cursor-pointer opacity-60 hover:opacity-100">
               <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2.5">
                     <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-700 dark:text-purple-500 font-bold text-[10px] shrink-0">
                        LN
                     </div>
                     <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Lisa Nordin</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">New Booking</p>
                     </div>
                  </div>
                  <span className="bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-slate-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/10">
                     PENDING
                  </span>
               </div>
               <div className="flex justify-between items-center text-[10px] pl-1">
                  <span className="text-slate-500 dark:text-slate-400">13 Mar, 10:00 AM</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Convocation</span>
               </div>
            </div>

         </div>

         {/* Bottom Fade */}
         <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-50 dark:from-zinc-950 to-transparent pointer-events-none"></div>
      </div>
   </div>
);

const AutoPilotMockup = () => (
   <div className="w-full h-full bg-[#EFE7DE] dark:bg-[#0b141a] flex flex-col font-sans overflow-hidden relative rounded-xl border border-slate-200 dark:border-white/10 shadow-sm transition-all duration-300">
      {/* Window Frame for Desktop WhatsApp look */}
      <div className="h-6 bg-slate-100 dark:bg-zinc-800 border-b border-slate-200 dark:border-white/5 flex items-center px-2.5 gap-2 shrink-0 z-20">
         <div className="flex gap-1.5 opacity-60">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
         </div>
         <div className="ml-1.5 w-full max-w-[108px] h-[18px] bg-white dark:bg-zinc-900 rounded flex items-center px-1.5 border border-slate-200 dark:border-white/5">
            <span className="text-[9px] text-slate-400 flex items-center gap-1 font-medium">WhatsApp Web</span>
         </div>
      </div>

      {/* WhatsApp Header - Realistic Teal */}
      <div className="h-12 bg-[#008069] dark:bg-[#202c33] flex items-center px-3 gap-2 shrink-0 shadow-sm z-10">
         {/* Profile Pic Placeholder */}
         <img
            src="/img/logo-bg.png"
            alt="SesiFoto profile"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-white/20"
            loading="lazy"
         />
         <div className="flex-1 text-left">
            <p className="text-white text-[13px] font-semibold leading-tight">SesiFoto</p>
         </div>
         {/* Header Icons actions */}
         <div className="flex items-center gap-3 text-white/80">
            <Search size={15} strokeWidth={2.2} />
            <MoreVertical size={15} strokeWidth={2.2} />
         </div>
      </div>

      {/* Chat Area - Doodle Background */}
      <div className="flex-1 p-3 overflow-hidden relative flex flex-col items-center justify-start">
         <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.05] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"></div>

         {/* Date Divider */}
         <div className="relative z-10 my-2">
            <span className="bg-[#E1F2FB] dark:bg-[#1e2a30] text-[#5b6a73] dark:text-[#8696a0] text-[9px] font-medium px-2.5 py-1 rounded-lg shadow-sm uppercase tracking-wide">
               Hari Ini
            </span>
         </div>

         {/* Message 1 (System - Received) */}
         <div className="flex justify-start w-full relative z-10 px-2">
            <div className="bg-[#2f3438] p-3 rounded-lg rounded-tl-none shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] max-w-[94%] text-sm text-[#f3f4f6] leading-[1.45] relative">
               {/* Tail Triangle */}
               <div className="absolute top-0 -left-[7px] w-0 h-0 border-[7px] border-transparent border-t-[#2f3438] border-r-[#2f3438]"></div>

               <p className="mb-2 text-[15px] font-bold leading-tight text-[#f8f9fa]">
                  Booking Reminder
               </p>

               <p className="mb-2 text-[12px] leading-[1.45] text-[#f8f9fa]">
                  Hi <span className="font-bold">Ammar</span>,
               </p>

               <p className="mb-2 text-[12px] leading-[1.45] text-[#f8f9fa]">
                  This is a reminder for your booking at <span className="font-bold">SesiFoto Studio.</span>
               </p>

               <div className="mb-2 space-y-0 text-[12px] leading-[1.45] text-[#f8f9fa]">
                  <p>Session ID: <span className="font-bold">RAYA-0023</span></p>
                  <p>Date: <span className="font-bold">29/2/2026</span></p>
                  <p>Time: <span className="font-bold">12:30-1:00</span></p>
                  <p>Theme: <span className="font-bold">Klasik Gen-Z</span></p>
                  <p>Number of Pax: <span className="font-bold">5</span></p>
               </div>

               <p className="mb-2 text-[12px] leading-[1.45] text-[#f8f9fa]">
                  Location:
                  <br />
                  Menara TRX, Tun Razak Exchange, 55188 Kuala Lumpur, Malaysia
               </p>

               <p className="mb-2 text-[12px] leading-[1.45] text-[#f8f9fa]">
                  Contact <span className="font-bold text-[#25d366] underline">+60 12-345 6789</span> for any assistance.
               </p>

               <p className="mb-0 text-[11px] italic leading-[1.45] text-[#aeb7bd]">
                  Please arrive early to avoid missing your session.
               </p>
               <p className="mt-1 text-[9px] leading-none text-right text-[#aeb7bd]">
                  11:26 AM
               </p>
            </div>
         </div>

      </div>
   </div>
);

const StudioRulesMockup = () => (
   <div className="w-full h-full bg-slate-50 dark:bg-zinc-900/50 flex flex-col font-sans overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
      {/* Window Frame */}
      <div className="h-8 bg-slate-100 dark:bg-zinc-800 border-b border-slate-200 dark:border-white/5 flex items-center px-3 gap-2 shrink-0">
         <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
         </div>
         <div className="ml-4 w-32 h-5 bg-white dark:bg-zinc-900 rounded flex items-center px-2">
            <span className="text-[9px] text-slate-400">Settings</span>
         </div>
      </div>

      <div className="p-4 md:p-6 bg-white dark:bg-zinc-950 flex-1 overflow-y-auto">
         <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-6">Scheduling Rules</h3>

         <div className="space-y-4">
            {/* Setting Item */}
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-zinc-800 flex items-center justify-center text-orange-600">
                     <Clock size={18} />
                  </div>
                  <div>
                     <p className="text-sm font-medium text-slate-800 dark:text-white">Buffer Time</p>
                     <p className="text-[10px] text-slate-500">Gap between sessions</p>
                  </div>
               </div>
               <div className="flex items-center gap-2 bg-white dark:bg-zinc-800 rounded-lg px-2 py-1 shadow-sm border border-slate-100 dark:border-white/5">
                  <span className="text-sm font-medium">15 min</span>
                  <ChevronsUpDown size={12} className="text-slate-400" />
               </div>
            </div>

            {/* Setting Item */}
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-zinc-800 flex items-center justify-center text-red-600">
                     <Calendar size={18} />
                  </div>
                  <div>
                     <p className="text-sm font-medium text-slate-800 dark:text-white">Blackout Dates</p>
                     <p className="text-[10px] text-slate-500">Block public holidays</p>
                  </div>
               </div>
               {/* Toggle Switch */}
               <div className="w-12 h-6 bg-green-500 rounded-full p-1 cursor-pointer flex justify-end">
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
               </div>
            </div>

            {/* Simple Calendar Strip */}
            <div className="bg-slate-50 dark:bg-zinc-900/50 p-4 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm">
               <p className="text-xs font-medium text-slate-500 mb-3 uppercase tracking-wider">Operating Hours</p>
               <div className="flex justify-between">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                     <div key={i} className={`flex flex-col items-center gap-2 ${i === 6 ? 'opacity-30' : ''}`}>
                        <span className="text-[10px] font-medium text-slate-400">{d}</span>
                        <div className={`w-8 h-2 rounded-full ${i === 6 ? 'bg-slate-200 dark:bg-zinc-800' : 'bg-studio-primary'}`}></div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   </div>
);

const AnalyticsMockup = () => (
   <div className="w-full h-full relative overflow-hidden">
      {/* Background Decorative Grid - Now DIRECTLY on container */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
         style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '24px 24px'
         }}>
      </div>


      {/* Central "Gravity" Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-studio-primary/5 rounded-full blur-[80px] -z-10 animate-pulse"></div>

      {/* 1. Large Stats Card - Main KPI (Top Left -> Center) */}
      <div className="absolute top-[20%] left-[10%] bg-white dark:bg-zinc-950/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-lg w-[58%] transform -rotate-6 transition-all duration-500 hover:scale-105 z-10 group/card opacity-90 hover:opacity-100 hover:z-40">
         <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-slate-100 dark:bg-zinc-800 rounded-lg text-slate-500">
               <Calendar className="w-4 h-4" />
            </div>
            <span className="flex items-center text-[10px] font-medium text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-1.5 py-0.5 rounded-full">+12.5%</span>
         </div>
         <p className="font-medium text-xs text-slate-500 dark:text-slate-400 mb-1">Total Bookings</p>
         <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-studio-primary transition-colors">142</p>
      </div>

      {/* 2. Sales Stats Card - KPI (Top Right -> Overlapping 1) */}
      <div className="absolute top-[12%] right-[8%] bg-white dark:bg-zinc-950/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[50%] transform rotate-6 transition-all duration-500 hover:scale-105 z-20 group/card delay-75 opacity-90 hover:opacity-100 hover:z-40">
         <div className="flex justify-between items-start mb-3">
            <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600">
               <span className="font-serif font-medium text-sm">$</span>
            </div>
            <span className="flex items-center text-[10px] font-medium text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-1.5 py-0.5 rounded-full">+8.2%</span>
         </div>
         <p className="font-medium text-xs text-slate-500 dark:text-slate-400 mb-1">Total Sales</p>
         <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight group-hover/card:text-studio-primary transition-colors">RM 12.4k</p>
      </div>

      {/* 3. Themes Progress Card (Bottom Left -> Overlapping 1 & 4) */}
      <div className="absolute bottom-[15%] left-[8%] bg-white dark:bg-zinc-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 dark:border-white/10 shadow-lg w-[55%] transform rotate-3 transition-all duration-500 hover:scale-105 z-30 delay-150 opacity-90 hover:opacity-100 hover:z-40">
         <p className="font-medium text-[10px] uppercase tracking-wider text-slate-400 mb-3">Popular Themes</p>
         <div className="space-y-3">
            <div className="group/item">
               <div className="flex justify-between mb-1.5">
                  <span className="text-[10px] font-medium text-slate-700 dark:text-zinc-200">Kampung</span>
                  <span className="text-[9px] text-slate-400">86</span>
               </div>
               <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-studio-primary w-[85%] rounded-full group-hover/item:animate-shimmer bg-[linear-gradient(90deg,theme(colors.orange.500),theme(colors.orange.400),theme(colors.orange.500))] bg-[length:200%_100%]"></div>
               </div>
            </div>
            <div className="group/item">
               <div className="flex justify-between mb-1.5">
                  <span className="text-[10px] font-medium text-slate-700 dark:text-zinc-200">Modern</span>
                  <span className="text-[9px] text-slate-400">42</span>
               </div>
               <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                  <div className="h-full bg-studio-primary/60 w-[45%] rounded-full"></div>
               </div>
            </div>
         </div>
      </div>

      {/* 4. Add-ons List Card (Bottom Right -> Overlapping 3 & 2) */}
      <div className="absolute bottom-[20%] right-[8%] bg-white dark:bg-zinc-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-200/60 dark:border-white/10 shadow-lg w-[48%] transform -rotate-3 transition-all duration-500 hover:scale-105 z-20 delay-100 opacity-90 hover:opacity-100 hover:z-40">
         <p className="font-medium text-[10px] uppercase tracking-wider text-slate-400 mb-3">Top Add-ons</p>
         <div className="divide-y divide-slate-100 dark:divide-white/5">
            <div className="flex justify-between items-center py-2">
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  <span className="text-[10px] font-medium text-slate-700 dark:text-zinc-300">Makeup</span>
               </div>
               <span className="text-[9px] font-medium text-slate-900 dark:text-white">24</span>
            </div>
            <div className="flex justify-between items-center py-2">
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                  <span className="text-[10px] font-medium text-slate-700 dark:text-zinc-300">Photos</span>
               </div>
               <span className="text-[9px] font-medium text-slate-900 dark:text-white">18</span>
            </div>
         </div>
      </div>
   </div>
);

export default Features;
