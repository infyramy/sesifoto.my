import React, { useState } from 'react';
import { ArrowRight, RotateCw, Store, WalletCards } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Integrations = () => {
    const { t, language } = useLanguage();
    const [replay, setReplay] = useState(0);
    const bm = language === 'bm';

    return (
        <section className="py-16 md:py-20 bg-transparent relative overflow-hidden">
            <style>{`
                @keyframes payment-dash { to { stroke-dashoffset: -24; } }
                @keyframes payment-token { 0% { transform: translateX(-70px); opacity: 0; } 15%, 80% { opacity: 1; } 100% { transform: translateX(70px); opacity: 0; } }
                .payment-dash { animation: payment-dash 2s linear infinite; }
                .payment-token { animation: payment-token 3s ease-in-out infinite; }
                .payment-illustration:hover .payment-dash, .payment-illustration:focus-within .payment-dash { animation-duration: 1s; }
                @media (prefers-reduced-motion: reduce) { .payment-dash, .payment-token { animation: none; } .payment-token { opacity: 1; } }
            `}</style>
            <div className="container mx-auto px-4 relative z-10">

                <div className="max-w-5xl mx-auto">
                    {/* Standardized Card Container - Split Layout */}
                    <div className="bg-[#090909] border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">

                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                            {/* Left Column: Content */}
                            <div className="text-left flex flex-col items-start relative z-10">
                                <div className="bg-white/5 p-1.5 rounded-lg border border-white/10 mb-5 shadow-sm inline-block">
                                    <img src="/img/chip.svg" alt="CHIP Logo" width={104} height={20} className="h-5 w-auto opacity-90" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 font-serif leading-tight pb-1">
                                    {t.integrations.title}
                                </h2>

                                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                    {t.integrations.description}
                                </p>

                                <div className="flex flex-row gap-2 md:gap-4 w-full items-center">
                                    {/* Primary: Register */}
                                    <a href="https://www.chip-in.asia/?ref=a9232883" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#C2410C] hover:bg-[#9A3412] text-white px-3 py-3 md:px-8 md:py-3.5 text-sm md:text-base whitespace-nowrap rounded-xl font-bold transition-all duration-300 shadow-lg shadow-orange-900/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group flex-1 md:flex-none min-w-[140px]">
                                        <span>{t.integrations.cta}</span>
                                    </a>

                                    {/* Secondary: Info (No BG, No Border) */}
                                    <a href="https://chip-in.asia/features" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white px-3 py-3 md:px-4 md:py-3.5 text-sm md:text-base whitespace-nowrap rounded-xl font-bold transition-all duration-300 group">
                                        <span>{t.integrations.moreInfo}</span>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                    </a>
                                </div>

                                {/* Footer Note */}
                                <p className="text-[10px] text-slate-400 mt-6 italic">
                                    {t.integrations.note}
                                </p>
                            </div>

                            <div className="payment-illustration relative rounded-[28px] border border-white/10 bg-[#101012] p-5 sm:p-7" aria-label={bm ? 'Ilustrasi aliran bayaran melalui CHIP' : 'Illustration of payment flow through CHIP'}>
                                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">
                                    <img src="/img/sesifoto-logo-dark.webp" alt="SesiFoto" className="h-6 w-auto" />
                                    <span className="text-xs text-slate-400">{bm ? 'Ilustrasi aliran bayaran' : 'Payment flow illustration'}</span>
                                </div>
                                <div className="relative mt-7 flex items-center justify-between gap-2" key={replay}>
                                    <div className="relative z-10 flex w-20 shrink-0 flex-col items-center gap-2 text-center">
                                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-orange-300"><WalletCards size={23} strokeWidth={1.7} /></span>
                                        <span className="text-xs font-medium text-slate-300">{bm ? 'Pelanggan' : 'Customer'}</span>
                                    </div>
                                    <div className="relative flex h-14 min-w-0 flex-1 items-center justify-center">
                                        <svg className="absolute inset-0 h-full w-full text-orange-400/70" preserveAspectRatio="none" viewBox="0 0 200 56" fill="none" aria-hidden="true"><path d="M0 28H200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="payment-dash" /></svg>
                                        <span className="relative z-10 rounded-lg border border-white/10 bg-[#1b1b1d] px-3 py-2"><img src="/img/chip.svg" alt="CHIP" className="h-4 w-auto" /></span>
                                        <span className="payment-token absolute left-1/2 top-[-12px] z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-orange-400/30 bg-[#241910] text-base" aria-hidden="true">💸</span>
                                    </div>
                                    <div className="relative z-10 flex w-20 shrink-0 flex-col items-center gap-2 text-center">
                                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-200"><Store size={23} strokeWidth={1.7} /></span>
                                        <span className="text-xs font-medium text-slate-300">{bm ? 'Studio anda' : 'Your studio'}</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                                    <p className="text-xs leading-relaxed text-slate-400">{bm ? 'Bayaran diproses melalui CHIP' : 'Payments processed through CHIP'}</p>
                                    <button type="button" onClick={() => setReplay(value => value + 1)} className="inline-flex min-h-10 items-center gap-2 rounded-lg px-2 text-xs font-semibold text-orange-400 transition-colors hover:bg-white/5 hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400" aria-label={bm ? 'Main semula animasi aliran bayaran' : 'Replay payment flow animation'}><RotateCw size={14} aria-hidden="true" />{bm ? 'Lihat semula' : 'Replay'}</button>
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
