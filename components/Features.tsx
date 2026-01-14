import React from 'react';
import GlassCard from './ui/GlassCard';
import Reveal from './ui/Reveal';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, LayoutDashboard, Calendar, CalendarClock, BarChart3, CheckCircle2, ShieldCheck, Zap, Smartphone, FileSpreadsheet, Ticket, ArrowLeftRight, Download, Search, Plus, Clock, ChevronsUpDown, Banknote, Filter, Users, MoreHorizontal, Calendar as CalendarIcon } from 'lucide-react';

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

   // Map icons for Bento Grid
   const getBentoIcon = (index: number) => {
      switch (index) {
         case 0: return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
         case 1: return <Zap className="w-5 h-5 text-amber-500" />;
         case 2: return <Smartphone className="w-5 h-5 text-blue-500" />;
         case 3: return <Download className="w-5 h-5 text-green-600" />;
         case 4: return <Ticket className="w-5 h-5 text-pink-500" />;
         case 5: return <ArrowLeftRight className="w-5 h-5 text-indigo-500" />;
         case 6: return <FileSpreadsheet className="w-5 h-5 text-cyan-500" />;
         case 7: return <Search className="w-5 h-5 text-slate-500" />;
         default: return <CheckCircle2 className="w-5 h-5 text-slate-400" />;
      }
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

                           <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16 group relative z-10`}>

                              {/* TEXT CONTENT */}
                              <div className="flex-1 w-full lg:w-1/2">
                                 <div className={`inline-flex items-center justify-center p-3 rounded-xl border mb-8 ${getIconBg(index)}`}>
                                    {getIcon(index)}
                                 </div>

                                 <h3 className="text-3xl md:text-4xl font-medium font-serif text-slate-900 dark:text-white mb-6 leading-tight">
                                    {feature.title}
                                 </h3>

                                 <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: feature.description.replace(/\*(.*?)\*/g, '<em class="text-slate-500 dark:text-slate-300 font-medium">$1</em>') }}
                                 />

                                 <ul className="space-y-4">
                                    {feature.checkpoints?.map((point: string, i: number) => (
                                       <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                          <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                             <CheckCircle2 size={12} strokeWidth={3} />
                                          </div>
                                          <span dangerouslySetInnerHTML={{ __html: point.replace(/\*(.*?)\*/g, '<em class="text-slate-800 dark:text-white">$1</em>') }} />
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

                              <div className="flex-1 w-full lg:w-1/2">
                                 <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">

                                    {/* CONDITIONAL MOCKUPS FOR ALL FEATURES */}
                                    {index === 0 && <BookingSiteMockup />}
                                    {index === 1 && <ControlCentreMockup />}
                                    {index === 2 && <AutoPilotMockup />}
                                    {index === 3 && <StudioRulesMockup />}
                                    {index === 4 && <AnalyticsMockup />}

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

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5" style={{ gridAutoRows: '1fr' }}>
                     {t.features.bentoGrid.items.map((item: any, index: number) => (
                        <Reveal key={index} delay={index * 50} width="100%" className="flex h-full">
                           <GlassCard className="w-full h-full p-5 md:p-6 flex flex-col items-start gap-6 bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 transition-all duration-300 group hover:shadow-md hover:-translate-y-1">
                              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-white/5 dark:to-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm mb-4">
                                 {getBentoIcon(index)}
                              </div>
                              <div className="flex-1 w-full">
                                 <h4 className="font-medium text-xl text-slate-900 dark:text-white mb-2">{item.title}</h4>
                                 <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-sm md:text-base opacity-90">{item.description}</p>
                              </div>
                           </GlassCard>
                        </Reveal>
                     ))}
                  </div>
               </div>
            )}

         </div>
      </section >
   );
};

// ==========================================
// FEATURE MOCKUPS
// ==========================================

const BookingSiteMockup = () => {
   return (
      <div className="w-full h-full relative flex items-center justify-center font-sans select-none perspective-1000">

         {/* Abstract Gradient Background */}
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/30 dark:bg-orange-600/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-400/30 dark:bg-red-900/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
         </div>

         {/* Screen 1: Landing Page (Left - Peaking) */}
         <div className="absolute left-[5%] md:left-[10%] w-[45%] max-w-[220px] aspect-[9/18] bg-[#431407] dark:bg-black rounded-xl md:rounded-[2rem] shadow-2xl shadow-orange-900/20 ring-2 ring-white/10 dark:ring-white/10 flex flex-col overflow-hidden transform -rotate-12 scale-90 origin-bottom-right z-0 blur-[0.5px] opacity-80 transition-all duration-500 hover:opacity-100 hover:blur-none hover:z-20 hover:scale-100">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
            <div className="relative z-20 flex-1 flex flex-col justify-end p-4 pb-8">
               <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center mb-auto pt-4 backdrop-blur-sm">
                  <div className="w-4 h-4 text-white text-[8px] font-bold">SF</div>
               </div>
               <div className="space-y-2 mb-6">
                  <div className="h-6 w-3/4 bg-white/20 rounded-md backdrop-blur-sm"></div>
                  <div className="h-4 w-1/2 bg-white/10 rounded-md backdrop-blur-sm"></div>
               </div>
               <div className="w-full h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center text-[10px] font-bold tracking-widest shadow-lg shadow-orange-500/30">
                  BOOK NOW →
               </div>
            </div>
         </div>

         {/* Screen 3: Summary (Right - Peaking) */}
         <div className="absolute right-[5%] md:right-[10%] w-[45%] max-w-[220px] aspect-[9/18] bg-white dark:bg-zinc-950 rounded-xl md:rounded-[2rem] shadow-2xl ring-2 ring-slate-900/5 dark:ring-white/10 flex flex-col overflow-hidden transform rotate-12 scale-90 origin-bottom-left z-0 blur-[0.5px] opacity-80 transition-all duration-500 hover:opacity-100 hover:blur-none hover:z-20 hover:scale-100">
            <div className="h-12 border-b border-orange-100 dark:border-white/5 flex items-center justify-center bg-orange-50/50 dark:bg-white/5">
               <span className="text-[10px] font-medium text-orange-900 dark:text-orange-100">Summary</span>
            </div>
            <div className="p-4 space-y-4">
               <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white shadow-lg shadow-orange-500/20">
                  <div className="h-2 w-1/2 bg-white/40 rounded-full mb-2"></div>
                  <div className="h-2 w-1/3 bg-white/20 rounded-full"></div>
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between">
                     <div className="h-2 w-16 bg-slate-200 dark:bg-white/10 rounded-full"></div>
                     <div className="h-2 w-8 bg-slate-200 dark:bg-white/10 rounded-full"></div>
                  </div>
                  <div className="flex justify-between">
                     <div className="h-2 w-20 bg-slate-100 dark:bg-white/5 rounded-full"></div>
                     <div className="h-2 w-8 bg-slate-100 dark:bg-white/5 rounded-full"></div>
                  </div>
                  <div className="w-full h-px bg-slate-100 dark:bg-white/5 my-2"></div>
                  <div className="flex justify-between items-center mt-4">
                     <div className="h-3 w-12 bg-slate-900 dark:bg-white rounded-full"></div>
                     <div className="h-3 w-16 bg-slate-900 dark:bg-white rounded-full"></div>
                  </div>
               </div>
            </div>
            <div className="mt-auto p-4 bg-white dark:bg-zinc-950 border-t border-slate-100 dark:border-white/5">
               <div className="w-full h-10 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black text-[10px] font-medium">
                  PAY NOW
               </div>
            </div>
         </div>

         {/* Screen 2: Time Selection (Center - Main) */}
         <div className="relative w-[50%] max-w-[240px] aspect-[9/18] bg-white dark:bg-zinc-900 rounded-2xl md:rounded-[2.5rem] shadow-2xl ring-4 ring-white dark:ring-zinc-800 flex flex-col overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 z-10">

            {/* Header */}
            <div className="h-14 flex items-center justify-between px-5 pt-2 shrink-0 border-b border-slate-50 dark:border-white/5">
               <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 border-l-2 border-b-2 border-slate-900 dark:border-white rotate-45 ml-0.5"></div>
               </div>
               <span className="text-xs font-medium text-slate-900 dark:text-white">Date & Time</span>
               <div className="w-8 h-8"></div>
            </div>

            {/* Content */}
            <div className="flex-1 px-5 pb-5 flex flex-col gap-4 overflow-hidden">
               {/* Month Tabs */}
               <div className="flex gap-2 mt-4 overflow-hidden">
                  <div className="w-10 h-14 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center shrink-0">
                     <span className="text-[10px] opacity-40">FEB</span>
                     <span className="text-sm font-medium opacity-40">1</span>
                  </div>
                  <div className="w-10 h-14 rounded-xl bg-[#78350f] dark:bg-[#d97706] text-white shadow-lg flex flex-col items-center justify-center shrink-0 transform scale-105 border border-amber-900/10">
                     <span className="text-[10px] font-semibold opacity-80">FEB</span>
                     <span className="text-sm font-medium">2</span>
                  </div>
                  <div className="w-10 h-14 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center shrink-0">
                     <span className="text-[10px] opacity-40">FEB</span>
                     <span className="text-sm font-medium opacity-40">3</span>
                  </div>
                  <div className="w-10 h-14 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center shrink-0">
                     <span className="text-[10px] opacity-40">FEB</span>
                     <span className="text-sm font-medium opacity-40">4</span>
                  </div>
               </div>

               <div className="w-full h-px bg-slate-100 dark:bg-white/5"></div>

               {/* Time Title */}
               <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-slate-900 dark:border-white"></div>
                  <span className="text-sm font-medium">Select Time</span>
               </div>

               {/* Time Grid - Dense */}
               <div className="flex-1 overflow-visible space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                     <div className="h-9 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center opacity-40">
                        <span className="text-[9px]">8:00 AM</span>
                     </div>
                     <div className="h-9 rounded-lg bg-[#92400e] dark:bg-[#d97706] shadow-lg text-white flex items-center justify-center border border-amber-900/10">
                        <span className="text-[9px] font-medium">8:45 AM</span>
                     </div>
                     <div className="h-9 rounded-lg bg-white border border-slate-100 dark:border-white/5 flex items-center justify-center">
                        <span className="text-[9px]">9:30 AM</span>
                     </div>
                     <div className="h-9 rounded-lg bg-white border border-slate-100 dark:border-white/5 flex items-center justify-center">
                        <span className="text-[9px]">10:15 AM</span>
                     </div>
                     <div className="h-9 rounded-lg bg-white border border-slate-100 dark:border-white/5 flex items-center justify-center">
                        <span className="text-[9px]">11:00 AM</span>
                     </div>
                     <div className="h-9 rounded-lg bg-white border border-slate-100 dark:border-white/5 flex items-center justify-center">
                        <span className="text-[9px]">11:45 AM</span>
                     </div>
                  </div>
               </div>

               {/* Bottom Actions */}
               <div className="mt-auto space-y-2">
                  <div className="flex items-center justify-between px-1">
                     <span className="text-[8px] font-medium uppercase text-slate-400">Total</span>
                     <span className="text-lg font-black text-amber-900 dark:text-amber-500">RM180.00</span>
                  </div>
                  <div className="w-full h-10 bg-[#78350f] dark:bg-[#d97706] rounded-lg shadow-xl flex items-center justify-center group cursor-pointer hover:scale-[1.02] transition-transform">
                     <span className="text-white font-medium text-[10px] uppercase tracking-wider flex items-center gap-1">
                        Next <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
                     </span>
                  </div>
               </div>
            </div>
         </div>

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
      <div className="h-7 bg-slate-100 dark:bg-zinc-800 border-b border-slate-200 dark:border-white/5 flex items-center px-3 gap-2 shrink-0 z-20">
         <div className="flex gap-1.5 opacity-60">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
         </div>
         <div className="ml-2 w-full max-w-[120px] h-5 bg-white dark:bg-zinc-900 rounded flex items-center px-2 border border-slate-200 dark:border-white/5">
            <span className="text-[9px] text-slate-400 flex items-center gap-1 font-medium">WhatsApp Web</span>
         </div>
      </div>

      {/* WhatsApp Header - Realistic Teal */}
      <div className="h-16 bg-[#008069] dark:bg-[#202c33] flex items-center px-4 gap-3 shrink-0 shadow-sm z-10">
         {/* Profile Pic Placeholder */}
         <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#008069] font-bold text-sm ring-1 ring-white/20">SF</div>
         <div className="flex-1 text-left">
            <p className="text-white text-sm font-semibold leading-tight">SesiFoto Admin</p>
            <p className="text-white/80 text-[11px] leading-tight">Akaun Perniagaan</p>
         </div>
         {/* Header Icons actions */}
         <div className="flex gap-4 text-white/70">
            <Search size={18} />
            <div className="w-1 h-1 rounded-full bg-white/70 shadow-[0_6px_0_0_currentColor,0_-6px_0_0_currentColor]"></div>
         </div>
      </div>

      {/* Chat Area - Doodle Background */}
      <div className="flex-1 p-4 overflow-hidden relative flex flex-col items-center justify-start">
         <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.05] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat"></div>

         {/* Date Divider */}
         <div className="relative z-10 my-3">
            <span className="bg-[#E1F2FB] dark:bg-[#1e2a30] text-[#5b6a73] dark:text-[#8696a0] text-[10px] font-medium px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-wide">
               Hari Ini
            </span>
         </div>

         {/* Message 1 (System - Received) - White Bubble on Left */}
         <div className="flex justify-start w-full relative z-10 px-2">
            <div className="bg-white dark:bg-[#202c33] p-[10px] rounded-lg rounded-tl-none shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] max-w-[95%] text-sm text-[#111b21] dark:text-[#e9edef] leading-[1.3] relative">
               {/* Tail Triangle */}
               <div className="absolute top-0 -left-2 w-0 h-0 border-[8px] border-transparent border-t-white dark:border-t-[#202c33] border-r-white dark:border-r-[#202c33]"></div>

               {/* Greeting */}
               <p className="mb-2">Salam Sejahtera, <span className="font-bold">Aiman</span>. 👋</p>

               {/* Body */}
               <p className="mb-2">Berikut adalah butiran tempahan anda:</p>

               {/* Details Box (Simulating Monospace/Quote slightly) */}
               <div className="mb-3 space-y-1 text-[13px] border-l-4 border-slate-200 dark:border-slate-700 pl-2 text-slate-600 dark:text-slate-300">
                  <p>🗓️ Tarikh: <strong className="text-black dark:text-white">12 Mac 2026</strong></p>
                  <p>⏰ Masa: <strong className="text-black dark:text-white">10:00 Pagi</strong></p>
                  <p>📸 Tema: <strong className="text-black dark:text-white">Raya Family</strong></p>
               </div>

               {/* Location Link */}
               <p className="mb-2">Lokasi Studio:</p>
               <p className="text-[#027eb5] text-[13px] mb-3 cursor-pointer hover:underline truncate">
                  https://maps.google.com/sesifoto-kl
               </p>

               {/* Footer */}
               <p className="text-[13px] italic text-slate-500 dark:text-slate-400">
                  Sila hadir 15 minit awal untuk persiapan. Terima kasih! 🙏
               </p>

               {/* Time Stamp */}
               <div className="text-[10px] text-[#667781] dark:text-[#8696a0] text-right mt-1 flex justify-end items-center gap-1">
                  <span>10:32 AM</span>
               </div>
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