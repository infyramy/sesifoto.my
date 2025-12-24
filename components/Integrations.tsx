import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Integrations = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <div className="max-w-5xl mx-auto">
                    {/* Standardized Card Container - Split Layout */}
                    <div className="bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-sm overflow-hidden relative">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                            {/* Left Column: Content */}
                            <div className="text-left flex flex-col items-start relative z-10">
                                <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm p-1.5 rounded-lg border border-slate-200 dark:border-white/10 mb-5 shadow-sm inline-block">
                                    <img src="/img/chip.svg" alt="CHIP Logo" className="h-5 opacity-90" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 font-serif leading-tight pb-1">
                                    {t.integrations.title}
                                </h2>

                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                    {t.integrations.description}
                                </p>

                                <div className="flex flex-row gap-2 md:gap-4 w-full items-center">
                                    {/* Primary: Register */}
                                    <a href="https://chip-in.asia/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-3 md:px-8 md:py-3.5 text-sm md:text-base whitespace-nowrap rounded-xl font-bold transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group flex-1 md:flex-none min-w-[140px]">
                                        <span>{t.integrations.cta}</span>
                                    </a>

                                    {/* Secondary: Info (No BG, No Border) */}
                                    <a href="https://chip-in.asia/features" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 hover:text-orange-500 dark:hover:text-white px-3 py-3 md:px-4 md:py-3.5 text-sm md:text-base whitespace-nowrap rounded-xl font-bold transition-all duration-300 group">
                                        <span>{t.integrations.moreInfo}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </a>
                                </div>

                                {/* Footer Note */}
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-6 italic">
                                    {t.integrations.note}
                                </p>
                            </div>

                            {/* Right Column: Visual (Payment Gateway Composition) */}
                            <div className="hidden md:flex relative h-full min-h-[400px] w-full items-center justify-center md:justify-end perspective-[1000px] overflow-visible">

                                {/* Decor Blob */}
                                <div className="absolute top-1/2 left-1/2 md:left-2/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-[80px]"></div>

                                {/* Layer 1: Payment Method Selector (Back) */}
                                <div className="absolute top-[10%] right-[15%] w-[260px] bg-white dark:bg-zinc-800 rounded-2xl border border-slate-100 dark:border-white/5 shadow-lg transform rotate-6 opacity-60 scale-90 z-0">
                                    <div className="p-4 space-y-3">
                                        <div className="h-3 w-1/3 bg-slate-100 dark:bg-white/10 rounded-full"></div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 p-2 rounded-lg border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-zinc-900/50">
                                                <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-white/20"></div>
                                                <div className="h-2 w-1/2 bg-slate-200 dark:bg-white/10 rounded-full"></div>
                                            </div>
                                            <div className="flex items-center gap-3 p-2 rounded-lg border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
                                                <div className="w-4 h-4 rounded-full border-4 border-orange-500"></div>
                                                <div className="h-2 w-1/2 bg-orange-200 dark:bg-orange-400/30 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Layer 2: Main Success Receipt (Center) */}
                                <div className="hidden md:block relative z-20 bg-white dark:bg-zinc-900 w-[300px] rounded-2xl shadow-2xl border border-slate-100 dark:border-white/10 overflow-visible transform group">

                                    {/* Floating Notification (Overlapping Top Right - Halfway) */}
                                    <div className="absolute -top-6 -right-12 bg-white dark:bg-zinc-800 p-2.5 rounded-xl shadow-xl border border-slate-100 dark:border-white/5 flex items-center gap-3 z-30 max-w-[180px]">
                                        <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[9px] font-bold text-slate-900 dark:text-white">Payment Received</p>
                                            <p className="text-[8px] text-slate-500 truncate">Booking #2026 paid.</p>
                                        </div>
                                    </div>

                                    {/* Success Header */}
                                    <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-6 flex flex-col items-center justify-center text-white relative overflow-hidden rounded-t-2xl">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <h3 className="font-bold text-lg">Payment Successful</h3>
                                        <p className="text-white/80 text-xs mt-1">Ref: #CHIP-82026</p>
                                    </div>

                                    {/* Receipt Body */}
                                    <div className="p-6 space-y-6">
                                        <div className="flex flex-col items-center border-b border-dashed border-slate-100 dark:border-white/5 pb-6">
                                            <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">Total Amount</span>
                                            <span className="text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">RM 150.00</span>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-slate-500 dark:text-slate-400">Payment via</span>
                                                <div className="flex items-center gap-2 px-2 py-1 rounded bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-white/5">
                                                    <div className="w-4 h-4 rounded-full bg-orange-100 flex items-center justify-center text-[8px] font-bold text-orange-600">F</div>
                                                    <span className="font-bold text-slate-700 dark:text-slate-200 text-xs">FPX Banking</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-slate-500 dark:text-slate-400">Date & Time</span>
                                                <span className="font-medium text-slate-700 dark:text-slate-200 text-xs">12 May, 10:42 AM</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Tear Effect Decor */}
                                    <div className="h-3 bg-slate-50 dark:bg-black/20 w-full relative rounded-b-2xl overflow-hidden">
                                        <div className="absolute -bottom-2 left-0 w-full h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAgMTBMMTAgMEwyMCAxMEgwWiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHBhdGggZD0iTTAgMTBMMTAgMEwyMCAxMEgwWiIgZmlsbD0iIzE4MTgxYiIvPjwvc3ZnPg==')] bg-contain bg-repeat-x rotate-180"></div>
                                    </div>
                                </div>

                                {/* STATIC ELEMENTS - No Animation */}

                                {/* RM 100 - Closer to receipt */}
                                <div className="absolute bottom-[20%] right-[70%] z-30 transform -rotate-12">
                                    <div className="bg-green-500 text-white p-2 rounded-lg shadow-xl flex items-center justify-center border-2 border-white dark:border-zinc-800">
                                        <span className="font-bold text-xs">RM 100</span>
                                    </div>
                                </div>

                                {/* Floating Bank/FPX Logos */}
                                <div className="absolute top-[15%] right-[20px] w-12 h-12 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-slate-50 dark:border-white/5 flex items-center justify-center z-10 rotate-12">
                                    <span className="text-[10px] font-black text-orange-600">FPX</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Integrations;
