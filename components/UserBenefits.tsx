import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { User, Store, Camera, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AUTO_ROTATE_MS = 5000;

const UserBenefits = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'customer' | 'owner' | 'photographer'>('customer');
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [disableHeavyMotion, setDisableHeavyMotion] = useState(false);
    const activePillRef = useRef<HTMLDivElement | null>(null);
    const [activePillSize, setActivePillSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (typeof window === 'undefined' || typeof navigator === 'undefined') return;

        const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const updateMotionMode = () => {
            const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
            const saveData = Boolean(connection?.saveData);
            const effectiveType = connection?.effectiveType ?? '';
            const slowConnection = effectiveType === '2g' || effectiveType === 'slow-2g' || effectiveType === '3g';
            setDisableHeavyMotion(reducedMotionQuery.matches || saveData || slowConnection);
        };

        updateMotionMode();
        reducedMotionQuery.addEventListener?.('change', updateMotionMode);

        return () => {
            reducedMotionQuery.removeEventListener?.('change', updateMotionMode);
        };
    }, []);

    // Auto-rotate tabs every 5 seconds if user hasn't interacted
    useEffect(() => {
        if (!isAutoPlaying || disableHeavyMotion) return;
        const interval = setInterval(() => {
            setActiveTab(current => {
                if (current === 'customer') return 'owner';
                if (current === 'owner') return 'photographer';
                return 'customer';
            });
        }, AUTO_ROTATE_MS);
        return () => clearInterval(interval);
    }, [disableHeavyMotion, isAutoPlaying]);

    useLayoutEffect(() => {
        const pillEl = activePillRef.current;
        if (!pillEl) return;

        const updatePillSize = () => {
            const { width, height } = pillEl.getBoundingClientRect();
            setActivePillSize({ width, height });
        };

        updatePillSize();

        if (typeof ResizeObserver !== 'undefined') {
            const observer = new ResizeObserver(updatePillSize);
            observer.observe(pillEl);
            return () => observer.disconnect();
        }

        window.addEventListener('resize', updatePillSize);
        return () => window.removeEventListener('resize', updatePillSize);
    }, [activeTab]);

    const handleTabClick = (tab: 'customer' | 'owner' | 'photographer') => {
        setIsAutoPlaying(false);
        setActiveTab(tab);
    };

    const benefits = {
        customer: {
            title: t.userBenefits.roles.customer.title,
            description: t.userBenefits.roles.customer.description,
            points: t.userBenefits.roles.customer.points,
            icon: <User className="w-5 h-5" />,
            color: "text-orange-600 dark:text-orange-400",
            bgColor: "bg-orange-50 dark:bg-orange-900/20",
            borderColor: "border-orange-200 dark:border-orange-800",
            badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300"
        },
        owner: {
            title: t.userBenefits.roles.owner.title,
            description: t.userBenefits.roles.owner.description,
            points: t.userBenefits.roles.owner.points,
            icon: <Store className="w-5 h-5" />,
            color: "text-amber-600 dark:text-amber-400",
            bgColor: "bg-amber-50 dark:bg-amber-900/20",
            borderColor: "border-amber-200 dark:border-amber-800",
            badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300"
        },
        photographer: {
            title: t.userBenefits.roles.photographer.title,
            description: t.userBenefits.roles.photographer.description,
            points: t.userBenefits.roles.photographer.points,
            icon: <Camera className="w-5 h-5" />,
            color: "text-rose-600 dark:text-rose-400",
            bgColor: "bg-rose-50 dark:bg-rose-900/20",
            borderColor: "border-rose-200 dark:border-rose-800",
            badgeColor: "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300"
        }
    };

    return (
        <section id="user-benefits" className="py-16 md:py-20 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-medium mb-6 text-slate-900 dark:text-white font-serif">
                        {t.userBenefits.title} <span className="bg-gradient-to-r from-orange-600 via-slate-800 to-slate-900 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">{t.userBenefits.highlight}</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        {t.userBenefits.description}
                    </p>
                </div>

                {/* Role Switcher Tabs (Segmented Control) */}
                <div className="max-w-md mx-auto mb-16 relative">
                    <style>
                        {`
                        @keyframes pillBorderProgress {
                            to { stroke-dashoffset: 0; }
                        }
                        `}
                    </style>
                    <div className="bg-slate-100 dark:bg-white/5 p-1.5 rounded-full grid grid-cols-3 relative isolate">
                        {/* Sliding Background Pill */}
                        <div
                            ref={activePillRef}
                            className="absolute top-1.5 bottom-1.5 bg-white dark:bg-zinc-700 rounded-full shadow-sm transition-all duration-300 ease-out -z-10"
                            style={{
                                width: 'calc(33.333% - 4px)',
                                left: activeTab === 'customer' ? '4px' : activeTab === 'owner' ? 'calc(33.333% + 1.33px)' : 'calc(66.666% - 1.33px)',
                            }}
                        >
                            {/* SVG Border Progress - Attached to the Pill for Perfect Shape */}
                            {!disableHeavyMotion && isAutoPlaying && activePillSize.width > 0 && activePillSize.height > 0 && (
                                <svg
                                    key={`${activeTab}-${Math.round(activePillSize.width)}-${Math.round(activePillSize.height)}`}
                                    className="absolute inset-0 w-full h-full pointer-events-none"
                                    viewBox={`0 0 ${activePillSize.width} ${activePillSize.height}`}
                                    preserveAspectRatio="none"
                                >
                                    <rect
                                        x="1.25"
                                        y="1.25"
                                        width={Math.max(activePillSize.width - 2.5, 0)}
                                        height={Math.max(activePillSize.height - 2.5, 0)}
                                        rx={Math.max((activePillSize.height - 2.5) / 2, 0)}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        className="text-orange-500 dark:text-orange-400"
                                        pathLength={100}
                                        strokeDasharray="100"
                                        strokeDashoffset="100"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{
                                            animation: `pillBorderProgress ${AUTO_ROTATE_MS}ms linear forwards`
                                        }}
                                    />
                                </svg>
                            )}
                        </div>

                        {(['customer', 'owner', 'photographer'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabClick(tab)}
                                className={`relative flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-2 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${activeTab === tab
                                    ? 'text-slate-900 dark:text-white'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                                    }`}
                            >
                                {tab === 'customer' && <User size={14} className={activeTab === tab ? "text-orange-600 dark:text-orange-400" : ""} />}
                                {tab === 'owner' && <Store size={14} className={activeTab === tab ? "text-amber-600 dark:text-amber-400" : ""} />}
                                {tab === 'photographer' && <Camera size={14} className={activeTab === tab ? "text-rose-600 dark:text-rose-400" : ""} />}
                                <span className="capitalize truncate max-w-[80px] sm:max-w-none relative z-10">
                                    {t.userBenefits.roles[tab].tab}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Content Area */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[500px]">



                        {/* Left: Text Content — always rendered, crossfade via CSS */}
                        <div className="relative">
                            {(['customer', 'owner', 'photographer'] as const).map((tab) => (
                                <div
                                    key={tab}
                                    className={`transition-[opacity,transform] duration-500 ease-out will-change-[opacity,transform] ${activeTab === tab
                                        ? 'opacity-100 translate-y-0 relative'
                                        : 'opacity-0 translate-y-2 absolute inset-0 pointer-events-none'
                                        }`}
                                >
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6 ${benefits[tab].badgeColor}`}>
                                        {benefits[tab].icon}
                                        <span className="uppercase tracking-wider">{t.userBenefits.roles[tab].badge}</span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                        {benefits[tab].title}
                                    </h3>

                                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                        {benefits[tab].description}
                                    </p>

                                    <div className="space-y-6">
                                        {benefits[tab].points.map((point: any, i: number) => (
                                            <div key={i} className="flex gap-4 group">
                                                <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${benefits[tab].bgColor} ${benefits[tab].color}`}>
                                                    <CheckCircle2 size={16} strokeWidth={3} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                                                        {point.title}
                                                    </h4>
                                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                        {point.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center lg:justify-end">
                            <figure className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-zinc-900">
                                <img
                                    key={activeTab}
                                    src={`/media/illustrations/benefit-${activeTab}.webp`}
                                    alt=""
                                    className="block aspect-[3/2] w-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserBenefits;
