import React, { useEffect, useState } from 'react';
import {
    Zap, Calendar as CalendarIcon, LayoutDashboard, Users, CreditCard,
    FileText, Settings, ChevronRight, ChevronLeft, Bell, Moon, Sun,
    ChevronsUpDown, CheckCircle2, MessageSquare, Plus, Search, Filter, MoreHorizontal, TrendingUp, ExternalLink
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import StudioLogo from './StudioLogo';

const Hero: React.FC = () => {
    const { t, isChanging } = useLanguage();
    const { theme } = useTheme();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const getDelayClass = (delay: number) => {
        return `transform transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${loaded ? 'opacity-100 translate-y-0 filter blur-0' : 'opacity-0 translate-y-12 filter blur-sm'}`;
    };

    return (
        <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-0 overflow-hidden [perspective:2000px] transition-colors duration-500">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* 1. Custom Background */}
                <div
                    className="absolute inset-0 bg-cover bg-top opacity-50 dark:opacity-70 hidden dark:block"
                    style={{ backgroundImage: "url('/img/MacBook Pro 16_ - 1.jpg')" }}
                ></div>

                {/* 2. Content Legibility Overlay (Theme Aware) */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-studio-paper dark:from-black/70 dark:via-black/50 dark:to-studio-black"></div>

                {/* 3. Subtle Noise Texture */}
                <div
                    className="absolute inset-0 opacity-[0.15] dark:opacity-[0.2] mix-blend-overlay dark:mix-blend-soft-light"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                    }}
                ></div>

                {/* Gradient Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-studio-primary/5 rounded-full blur-[100px] animate-pulse-slow mix-blend-overlay dark:mix-blend-screen"></div>
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-studio-primary/10 rounded-full blur-[100px] animate-pulse-slow delay-1000 mix-blend-overlay dark:mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-orange-400/5 rounded-full blur-[100px] animate-pulse-slow delay-2000 mix-blend-overlay dark:mix-blend-screen"></div>

                {/* MOBILE ONLY: Intense Orange Left Glow (SaaS Style) */}
                <div className="md:hidden absolute top-[10%] -left-[100px] w-[300px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,107,44,0.4)_0%,rgba(255,107,44,0)_70%)] blur-[40px] z-0"></div>
            </div>

            <div className={`max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 relative transition-all duration-500 ${isChanging ? 'opacity-0 blur-sm scale-[0.98]' : 'opacity-100 blur-0 scale-100'}`}>

                {/* Badge */}
                <div style={{ transitionDelay: '0ms' }} className={`${getDelayClass(0)} relative z-10`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-studio-primary/10 dark:bg-studio-primary/20 border border-studio-primary/20 dark:border-studio-primary/30 text-studio-primary text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-sm dark:shadow-none relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-studio-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
                        <span className="relative z-10">{t.hero.badge}</span>
                    </div>
                </div>

                {/* Title */}
                <div style={{ transitionDelay: '100ms' }} className={`${getDelayClass(100)} relative z-10`}>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.95] mb-8 transform scale-y-105 relative">
                        <span className="inline-block font-semibold bg-gradient-to-r from-orange-600 via-slate-800 to-slate-900 dark:from-[#ffffff] dark:to-[#e4e4e4] bg-clip-text text-transparent">
                            {t.hero.titleLine1}
                        </span>
                        <br />
                        <span className="relative inline-block bg-gradient-to-b from-slate-900 to-slate-600 dark:from-[#ffffff] dark:to-[#e4e4e4] bg-clip-text text-transparent">
                            {t.hero.titleLine2}
                        </span>
                    </h1>
                </div>

                {/* Subtitle */}
                <div style={{ transitionDelay: '200ms' }} className={getDelayClass(200)}>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
                        {t.hero.subtitle}
                    </p>
                </div>

                {/* Buttons */}
                <div style={{ transitionDelay: '300ms' }} className={`${getDelayClass(300)} relative z-10 mb-20`}>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full relative">
                        <a href="https://wa.link/rxj90f" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden px-10 py-4 bg-studio-primary text-white rounded-full font-bold text-lg hover:bg-studio-primary-hover transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(255,107,44,0.4)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            <div className="relative z-10 flex items-center gap-2">
                                <Zap className="w-5 h-5 fill-current" />
                                {t.hero.startTrial}
                            </div>
                        </a>
                        <button className="relative group px-10 py-4 bg-white dark:bg-studio-card text-slate-700 dark:text-white rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-studio-base transition-all border border-slate-200 dark:border-studio-border shadow-sm hover:scale-105 active:scale-95">
                            <span className="relative z-10">{t.hero.viewShowreel}</span>
                        </button>
                    </div>
                </div>

                {/* SOCIAL PROOF STATS - CLEAN CENTER ALIGNED */}
                <div style={{ transitionDelay: '400ms' }} className={`${getDelayClass(400)} relative z-10 mb-20 grid grid-cols-3 gap-2 md:gap-8 w-full max-w-5xl pt-8 px-2 md:px-0`}>

                    {/* Stat 1 */}
                    <div className="flex flex-col items-center justify-center border-r md:border-r border-slate-200 dark:border-white/10">
                        <span className="text-xl sm:text-2xl md:text-5xl font-black text-slate-900 dark:text-white mb-1 md:mb-2 tracking-tight leading-none">{t.hero.stats.studios.value}</span>
                        <p className="uppercase font-bold text-slate-400 dark:text-zinc-600 text-[8px] sm:text-[10px] md:text-xs tracking-wider text-center leading-tight">{t.hero.stats.studios.label}</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="flex flex-col items-center justify-center border-r md:border-r border-slate-200 dark:border-white/10">
                        <span className="text-xl sm:text-2xl md:text-5xl font-black text-slate-900 dark:text-white mb-1 md:mb-2 tracking-tight leading-none">{t.hero.stats.sales.value}</span>
                        <p className="uppercase font-bold text-slate-400 dark:text-zinc-600 text-[8px] sm:text-[10px] md:text-xs tracking-wider leading-tight text-center">
                            {t.hero.stats.sales.label}<br className="hidden md:block" />
                            <span className="opacity-70 block md:inline">{t.hero.stats.sales.subLabel}</span>
                        </p>
                    </div>

                    {/* Stat 3 */}
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-xl sm:text-2xl md:text-5xl font-black text-slate-900 dark:text-white mb-1 md:mb-2 tracking-tight leading-none">{t.hero.stats.origin.value}</span>
                        <p className="uppercase font-bold text-slate-400 dark:text-zinc-600 text-[8px] sm:text-[10px] md:text-xs tracking-wider text-center leading-tight">
                            {t.hero.stats.origin.label}
                        </p>
                    </div>

                </div>



                {/* DYNAMIC THEME-AWARE INTERFACE */}
                <div className={`w-full max-w-6xl relative [perspective:2000px] ${getDelayClass(400)}`}>
                    <div className="relative [transform:rotateX(12deg)] hover:[transform:rotateX(0deg)] transition-transform duration-1000 ease-out [transform-style:preserve-3d] group">


                        {/* HIDDEN IN LIGHT MODE: Orange Gradient Blobs - Behind Mockup */}
                        <svg className="hidden dark:block absolute -left-[10%] top-[20%] w-64 md:w-96 h-auto -z-20 opacity-40" viewBox="0 0 511 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7" filter="url(#filter0_f_4_96)">
                                <ellipse cx="317" cy="275" rx="217" ry="175" fill="url(#paint0_radial_4_96)" fillOpacity="0.3" />
                            </g>
                            <defs>
                                <filter id="filter0_f_4_96" x="0" y="0" width="634" height="550" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_4_96" />
                                </filter>
                                <radialGradient id="paint0_radial_4_96" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(317 275) rotate(90) scale(175 217)">
                                    <stop offset="0.173077" stopColor="#E03513" />
                                    <stop offset="0.908654" stopColor="#FF7D48" stopOpacity="0.79" />
                                </radialGradient>
                            </defs>
                        </svg>

                        {/* LIGHT MODE ONLY: Subtle Orange Accents */}
                        <div className="block dark:hidden absolute -left-[15%] top-[10%] w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[100px] -z-20 pointer-events-none"></div>
                        <div className="block dark:hidden absolute -right-[15%] bottom-[10%] w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[80px] -z-20 pointer-events-none"></div>

                        <svg className="hidden dark:block absolute -right-[10%] bottom-[20%] w-64 md:w-96 h-auto -z-20 opacity-40" viewBox="0 0 511 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7" filter="url(#filter0_f_4_96_2)">
                                <ellipse cx="317" cy="275" rx="217" ry="175" fill="url(#paint0_radial_4_96_2)" fillOpacity="0.3" />
                            </g>
                            <defs>
                                <filter id="filter0_f_4_96_2" x="0" y="0" width="634" height="550" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_4_96_2" />
                                </filter>
                                <radialGradient id="paint0_radial_4_96_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(317 275) rotate(90) scale(175 217)">
                                    <stop offset="0.173077" stopColor="#E03513" />
                                    <stop offset="0.908654" stopColor="#FF7D48" stopOpacity="0.79" />
                                </radialGradient>
                            </defs>
                        </svg>

                        {/* Shiny Frame Effect - Focused Orange Glow */}
                        <div className="absolute -inset-[1px] rounded-xl bg-[radial-gradient(circle_at_top_left,rgba(255,107,44,0.4)_0%,rgba(255,107,44,0.15)_30%,transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,107,44,0.3)_0%,rgba(255,107,44,0.1)_30%,transparent_60%)] -z-10"></div>

                        {/* Mockup Container */}
                        <div className={`rounded-xl shadow-2xl overflow-hidden ring-1 relative z-10 flex text-left font-sans antialiased 
                            h-[700px] md:h-[700px] 
                            md:w-full w-[1000px] 
                            origin-top-left md:origin-top 
                            scale-[0.55] sm:scale-75 md:scale-100 
                            transition-colors duration-500 
                            md:ml-[50%] md:-translate-x-1/2
                            ${theme === 'dark' ? 'bg-[#050505] ring-white/10' : 'bg-white ring-black/5'}`}
                        >

                            {/* SIDEBAR */}
                            <Sidebar theme={theme} />

                            {/* MAIN CONTENT AREA */}
                            <div className={`flex-1 flex flex-col min-w-0 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]'}`}>
                                <DashboardView theme={theme} />
                            </div>


                        </div>

                        {/* Wrapper Correction for Mobile - Negative Margin to pull up following content because scale leaves space */}
                        <div className="md:hidden -mt-[320px] sm:-mt-[150px] mb-20"></div>

                        {/* FLOATING WIDGETS - Mobile Optimised (Scaled Down) */}
                        {/* 1. Payment Notification (Right Top) */}
                        <div className="absolute -right-4 top-16 md:-right-12 md:top-24 z-30 [transform:translateZ(50px)] animate-float scale-[0.6] md:scale-100 origin-top-right hidden md:block">
                            <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-white/10 flex items-center gap-3 w-64 backdrop-blur-md">
                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500 tracking-wider">Payment Received</p>
                                    <p className="text-sm font-bold text-slate-800 dark:text-white">RM 250.00 <span className="font-normal text-slate-400 text-xs">from Sarah</span></p>
                                </div>
                            </div>
                        </div>

                        {/* 2. WhatsApp Automation (Left Bottom) */}
                        <div className="absolute -left-4 bottom-24 md:-left-16 md:bottom-40 z-30 [transform:translateZ(60px)] animate-float animation-delay-2000 scale-[0.6] md:scale-100 origin-bottom-left hidden md:block">
                            <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-white/10 flex items-center gap-3 w-72 backdrop-blur-md">
                                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 relative">
                                    <MessageSquare size={20} />
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-zinc-800"></div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500 tracking-wider flex justify-between">
                                        WhatsApp Auto-Reply <span>Just now</span>
                                    </p>
                                    <p className="text-xs font-medium text-slate-600 dark:text-zinc-300 mt-0.5 line-clamp-1">"Hi Sarah, receipt #IN-2024 generated..."</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Reflection/Shadow underneath */}
                    <div className="absolute -bottom-10 left-10 right-10 h-20 bg-black/40 blur-3xl rounded-[100%] transform scale-y-50 opacity-50"></div>
                </div>




            </div>

            {/* TRUSTED BY TITLE - Centred in main container */}
            <p className="text-center text-sm font-bold text-slate-400 dark:text-zinc-600 uppercase tracking-widest mt-6 mb-6 relative z-10 animate-fade-in">
                {t.hero.trustedLabel}
            </p>

            {/* TRUSTED BY MARQUEE - Full Width Seamless Scroll */}
            <div className="w-screen relative left-1/2 -translate-x-[50%] mb-0">
                {/* Animation Definition */}
                <style>{`
                    @keyframes marqueeScroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-45%); }
                    }
                    .hero-marquee-scroll {
                        animation: marqueeScroll 50s linear infinite;
                    }
                    .hero-marquee-scroll:hover {
                        animation-play-state: paused;
                    }
                `}</style>

                <div className="relative w-full pt-6 pb-20 overflow-hidden">
                    {/* Scrolling Content - Multiple Copies for Full Coverage */}
                    <div className="flex hero-marquee-scroll w-max -ml-4 hover:[animation-play-state:paused] items-start">
                        {[...Array(6)].map((_, groupIndex) => (
                            <div key={groupIndex} className="flex items-center gap-16 md:gap-20 pr-16 md:pr-20 flex-shrink-0">
                                <StudioLogo
                                    src="/img/vd-t.png"
                                    name="Visual Diaries Photography"
                                    link="https://www.instagram.com/the_visualdiaries/"
                                />
                                <StudioLogo
                                    src="/img/rangka.png"
                                    name="Rangka Studio"
                                    link="https://www.instagram.com/rangkastudio"
                                />
                                <StudioLogo
                                    src="/img/sedetik.png"
                                    name="Sedetik Studio"
                                    link="https://www.instagram.com/sedetik.studio/"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

// ==========================================
// SUB-COMPONENTS
// ==========================================

const Sidebar = ({ theme }: { theme: string }) => {
    const isDark = theme === 'dark';

    return (
        <div className={`w-64 border-r flex flex-col shrink-0 transition-colors duration-500 ${isDark ? 'border-white/5 bg-black' : 'border-slate-200 bg-white'}`}>
            {/* Brand */}
            {/* <div className="h-16 flex items-center px-6">
                <span className={`font-black text-xl tracking-wide ${isDark ? 'text-white' : 'text-slate-900'}`}>SESIFOTO.MY</span>
            </div> */}
            <div className="h-16 flex items-center px-6">
                <img
                    src="/img/Asset 5.png"
                    alt="SesiFoto Logo"
                    className={`h-8 w-auto object-contain ${isDark ? '' : 'invert brightness-0'}`}
                />
            </div>

            {/* Navigation */}
            <div className="flex-1 px-3 py-4 space-y-8 overflow-y-auto custom-scrollbar">
                {/* Main Group */}
                <div>
                    <p className={`px-3 text-[10px] font-medium uppercase tracking-wider mb-2 ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>Main</p>
                    <div className="space-y-0.5">
                        <NavItem icon={<LayoutDashboard size={14} />} label="Dashboard" active={true} theme={theme} />
                        <NavItem icon={<CalendarIcon size={14} />} label="Calendar" theme={theme} />
                        <NavItem icon={<FileText size={14} />} label="Bookings" theme={theme} />
                        <NavItem icon={<Users size={14} />} label="Photographer" theme={theme} />
                        <NavItem icon={<CreditCard size={14} />} label="Payments" theme={theme} />
                        <NavItem icon={<FileText size={14} />} label="Reports" theme={theme} />
                    </div>
                </div>

                {/* Settings Group */}
                <div>
                    <p className={`px-3 text-[10px] font-medium uppercase tracking-wider mb-2 ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>Settings</p>
                    <div className="space-y-0.5">
                        <NavItem icon={<Settings size={14} />} label="General" hasArrow theme={theme} />
                        <NavItem icon={<FileText size={14} />} label="Bookings" hasArrow theme={theme} />
                        <NavItem icon={<Zap size={14} />} label="Integrations" hasArrow theme={theme} />
                    </div>
                </div>
            </div>

            {/* Sidebar Footer - Agency Plan */}
            <div className={`p-4 border-t ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                <div className={`rounded-lg p-3 border ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="flex justify-between items-center mb-2">
                        <span className={`text-[9px] font-bold uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>CURRENT PLAN</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <span className="bg-[#FFB800] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">Agency</span>
                        <ChevronRight size={12} className={isDark ? 'text-zinc-600' : 'text-slate-400'} />
                    </div>
                    <div className={`flex items-center gap-3 pt-3 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
                        <div className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-slate-200 text-slate-500'}`}>SK</div>
                        <div className="flex-1 min-w-0">
                            <p className={`text-xs font-bold truncate ${isDark ? 'text-white' : 'text-slate-800'}`}>StudioKu</p>
                            <p className={`text-[10px] truncate ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>studio@infyra.my</p>
                        </div>
                        <ChevronsUpDown size={12} className={isDark ? 'text-zinc-600' : 'text-slate-400'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, active = false, hasArrow = false, theme }: { icon: React.ReactNode, label: string, active?: boolean, hasArrow?: boolean, theme: string }) => {
    const isDark = theme === 'dark';

    // Active Styles
    const activeClass = isDark
        ? 'bg-zinc-900 border-zinc-800 text-white'
        : 'bg-orange-50 border-orange-100 text-slate-900';

    // Inactive Styles
    const inactiveClass = isDark
        ? 'hover:bg-zinc-900/50 border-transparent text-zinc-400 hover:text-zinc-200'
        : 'hover:bg-slate-50 border-transparent text-slate-500 hover:text-slate-800';

    const iconColor = active ? 'text-[#FF6B2C]' : (isDark ? 'text-zinc-500 group-hover:text-zinc-300' : 'text-slate-400 group-hover:text-slate-600');

    return (
        <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer group transition-colors border ${active ? activeClass : inactiveClass}`}>
            <div className="flex items-center gap-3">
                <span className={iconColor}>{icon}</span>
                <span className="text-sm font-medium">{label}</span>
            </div>
            {active && <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C]"></div>}
            {hasArrow && <ChevronRight size={14} className={isDark ? 'text-zinc-600' : 'text-slate-300'} />}
        </div>
    );
};


// VIEW: UNIFIED DASHBOARD (Theme Aware)
const DashboardView = ({ theme }: { theme: string }) => {
    const isDark = theme === 'dark';

    return (
        <div className="flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className={`h-16 border-b flex items-center justify-between px-4 md:px-8 shrink-0 transition-colors duration-500 ${isDark ? 'bg-[#0A0A0A] border-white/5' : 'bg-white border-slate-200'}`}>
                <div className={`flex items-center gap-4 ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
                    <div className={`w-4 h-4 border rounded ${isDark ? 'border-zinc-700' : 'border-slate-300'}`}></div>
                    <span className="text-sm">Dashboard</span>
                </div>
                <div className={`flex items-center gap-4 ${isDark ? 'text-zinc-500' : 'text-slate-400'}`}>
                    {isDark ? <Moon size={18} /> : <Sun size={18} />}
                    <Bell size={18} />
                </div>
            </div>

            {/* Content */}
            <div className={`flex-1 p-4 md:p-8 overflow-y-auto ${isDark ? 'bg-[#0A0A0A]' : 'bg-[#FAFAFA]'}`}>
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className={`text-2xl md:text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Dashboard</h2>
                        <p className={`text-sm ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>Welcome back StudioKu! Let's get started.</p>
                    </div>
                    <div className={`border rounded-lg px-3 py-1.5 flex items-center gap-2 text-sm shadow-sm ${isDark ? 'bg-zinc-900 border-white/5 text-zinc-400' : 'bg-white border-slate-200 text-slate-600'}`}>
                        Last 7 Days <ChevronRight className="rotate-90" size={12} />
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
                    <div className={`p-4 md:p-6 rounded-xl border shadow-sm ${isDark ? 'bg-[#0F0F0F] border-white/5' : 'bg-white border-slate-200'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <p className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-800'}`}>Total Bookings</p>
                            <CalendarIcon size={16} className={`${isDark ? 'text-zinc-600' : 'text-slate-400'}`} />
                        </div>
                        <p className={`text-2xl md:text-4xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>142</p>
                        <p className="text-xs font-semibold text-green-500">+12.5% <span className={`font-normal ${isDark ? 'text-zinc-600' : 'text-slate-400'}`}>from last period</span></p>
                    </div>
                    <div className={`p-4 md:p-6 rounded-xl border shadow-sm ${isDark ? 'bg-[#0F0F0F] border-white/5' : 'bg-white border-slate-200'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <p className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-800'}`}>Sales</p>
                            <p className={`font-serif ${isDark ? 'text-zinc-600' : 'text-slate-400'}`}>$</p>
                        </div>
                        <p className={`text-2xl md:text-4xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>RM 12,450</p>
                        <p className="text-xs font-semibold text-green-500">+8.2% <span className={`font-normal ${isDark ? 'text-zinc-600' : 'text-slate-400'}`}>from last period</span></p>
                    </div>
                </div>

                {/* Lists Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`p-4 md:p-6 rounded-xl border shadow-sm h-64 ${isDark ? 'bg-[#0F0F0F] border-white/5' : 'bg-white border-slate-200'}`}>
                        <p className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>Popular Themes</p>
                        <p className={`text-xs mb-6 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>Top performing themes</p>

                        <div className="space-y-5">
                            <div>
                                <div className="flex justify-between items-center mb-1.5">
                                    <span className={`text-xs font-semibold ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}>Set 1: Kampung</span>
                                    <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>86 bookings</span>
                                </div>
                                <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-slate-100'}`}>
                                    <div className="h-full bg-studio-primary w-[85%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1.5">
                                    <span className={`text-xs font-semibold ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}>Set 2: Modern</span>
                                    <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>42 bookings</span>
                                </div>
                                <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-slate-100'}`}>
                                    <div className="h-full bg-studio-primary opacity-60 w-[45%] rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1.5">
                                    <span className={`text-xs font-semibold ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}>Set 3: Mini</span>
                                    <span className={`text-xs ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>14 bookings</span>
                                </div>
                                <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-zinc-800' : 'bg-slate-100'}`}>
                                    <div className="h-full bg-studio-primary opacity-30 w-[15%] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`p-4 md:p-6 rounded-xl border shadow-sm h-64 ${isDark ? 'bg-[#0F0F0F] border-white/5' : 'bg-white border-slate-200'}`}>
                        <p className={`font-bold text-sm mb-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>Popular Add-ons</p>
                        <p className={`text-xs mb-6 ${isDark ? 'text-zinc-500' : 'text-slate-500'}`}>Top selling add-ons</p>

                        <div className="space-y-4">
                            <div className={`flex justify-between items-center py-2 border-b ${isDark ? 'border-white/5' : 'border-slate-50'}`}>
                                <span className={`text-sm font-semibold ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}>Makeup Service</span>
                                <span className={`text-xs font-medium ${isDark ? 'text-zinc-500' : 'text-slate-600'}`}>24 added</span>
                            </div>
                            <div className={`flex justify-between items-center py-2 border-b ${isDark ? 'border-white/5' : 'border-slate-50'}`}>
                                <span className={`text-sm font-semibold ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}>Extra Edited Photos</span>
                                <span className={`text-xs font-medium ${isDark ? 'text-zinc-500' : 'text-slate-600'}`}>18 added</span>
                            </div>
                            <div className={`flex justify-between items-center py-2 border-b ${isDark ? 'border-white/5' : 'border-slate-50'}`}>
                                <span className={`text-sm font-semibold ${isDark ? 'text-zinc-300' : 'text-slate-700'}`}>Frame 18x24</span>
                                <span className={`text-xs font-medium ${isDark ? 'text-zinc-500' : 'text-slate-600'}`}>12 added</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
