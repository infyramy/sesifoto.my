import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, ArrowDown, CalendarClock, Info } from 'lucide-react';
import Reveal from './ui/Reveal';

const SpecialAnnouncement: React.FC = () => {
    const { t } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);
    const [displayText, setDisplayText] = useState('');

    // Update default text when translation changes
    useEffect(() => {
        if (!isHovered) {
            setDisplayText(t.announcement.ticketCta);
        }
    }, [t.announcement.ticketCta, isHovered]);

    // Typewriter Effect Logic
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const targetText = isHovered ? t.announcement.ticketCtaHover : t.announcement.ticketCta;

        if (displayText !== targetText) {
            if (isHovered && targetText.startsWith(displayText)) {
                // Typing forward
                timeout = setTimeout(() => {
                    setDisplayText(targetText.slice(0, displayText.length + 1));
                }, 30); // Faster typing for longer text
            } else if (isHovered && !targetText.startsWith(displayText)) {
                // Initial switch to hover: clear
                setDisplayText('');
            } else if (!isHovered) {
                // Revert instantly
                setDisplayText(t.announcement.ticketCta);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isHovered, t.announcement.ticketCta, t.announcement.ticketCtaHover]);


    const scrollToBenefits = () => {
        const section = document.getElementById('user-benefits');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="relative overflow-hidden w-full py-16 md:py-24 -mt-2 z-20 border-none">
            {/* Seamless Background Wrapper */}
            <div className="absolute inset-0 bg-gradient-to-b from-studio-paper via-orange-50/30 to-white dark:from-studio-black dark:via-orange-950/20 dark:to-black"></div>

            <div className="container mx-auto px-4 relative z-10 w-full max-w-4xl">
                <Reveal width="100%">
                    <div className="flex flex-col items-center text-center">

                        {/* Alert / Badge Style - Matched font/size generally */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800/30 text-orange-700 dark:text-orange-400 text-xs font-bold uppercase tracking-widest">
                            <Info size={14} className="fill-orange-600 dark:fill-orange-400 animate-pulse stroke-orange-100" />
                            {t.announcement.badge}
                        </div>

                        {/* Title - Matched to Features.tsx style */}
                        <h2 className="text-3xl md:text-5xl font-medium font-serif mb-6 text-slate-900 dark:text-white leading-[1.1] pb-2">
                            {t.announcement.title}
                        </h2>

                        {/* SINGLE FOCUS PARAGRAPH - Matched to UserBenefits style */}
                        <div className="mx-auto mb-10 max-w-3xl px-4 text-center">
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                {t.announcement.intro}
                            </p>
                        </div>

                        {/* COMPACT ORANGE PASS - Centered Block */}
                        <div className="w-full flex justify-center mb-10">
                            <div
                                onClick={scrollToBenefits}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="relative group cursor-pointer w-full max-w-[360px]"
                            >
                                {/* Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

                                {/* Main Pass Container */}
                                <div className="relative bg-white dark:bg-zinc-900 text-slate-900 dark:text-white border-2 border-orange-200 dark:border-orange-900/50 rounded-2xl flex flex-col overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">

                                    {/* Header */}
                                    <div className="bg-orange-50 dark:bg-orange-900/20 px-6 py-4 border-b border-orange-100 dark:border-orange-900/30 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center p-1.5 shrink-0 shadow-sm">
                                                {/* Logo or Fallback */}
                                                <img
                                                    src="/img/SesiFoto.svg"
                                                    alt="Logo"
                                                    className="w-full h-full object-contain brightness-0 invert"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.parentElement!.innerHTML = '<svg class="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>';
                                                    }}
                                                />
                                            </div>
                                            <span className="font-bold text-xs uppercase tracking-widest text-orange-800 dark:text-orange-300">
                                                {t.announcement.specTitle}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full border border-green-200 dark:border-green-800/30">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                            <span className="text-[10px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">AKTIF</span>
                                        </div>
                                    </div>

                                    {/* Content Grid */}
                                    <div className="p-6 grid grid-cols-2 gap-4 divide-x divide-slate-100 dark:divide-slate-800">
                                        <div className="text-center pr-2 flex flex-col justify-center">
                                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">{t.announcement.specPayLabel}</p>
                                            <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{t.announcement.specPayVal}</p>
                                        </div>
                                        <div className="text-center pl-2 flex flex-col justify-center">
                                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">{t.announcement.specValidLabel}</p>
                                            <p className="text-sm font-black text-orange-600 dark:text-orange-400 tracking-tight leading-tight">{t.announcement.specValidVal}</p>
                                        </div>
                                    </div>

                                    {/* CTA Footer with/Typewriter */}
                                    <div className="bg-slate-50 dark:bg-slate-800/50 py-3 flex items-center justify-center gap-2 border-t border-slate-100 dark:border-slate-800 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/10 transition-colors h-10">
                                        <span className="text-xs font-bold uppercase tracking-widest group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors font-mono">
                                            {displayText}
                                            {isHovered && displayText !== t.announcement.ticketCtaHover && <span className="animate-pulse">|</span>}
                                        </span>
                                        {!isHovered && (
                                            <ArrowDown size={14} className="group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:translate-y-0.5 transition-all" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Expiry Note (Left Aligned RELATIVE to centered container) */}
                        <div className="w-full flex justify-center">
                            <div className="flex items-start gap-3 max-w-[360px] opacity-70 hover:opacity-100 transition-opacity px-1">
                                <CalendarClock size={16} className="text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                                <p className="text-xs text-slate-500 dark:text-slate-400 text-left leading-tight font-medium">
                                    {t.announcement.expiryNote}
                                </p>
                            </div>
                        </div>

                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default SpecialAnnouncement;
