import React, { useState, useEffect } from 'react';
import { User, Store, Camera, CheckCircle2, Calendar, CreditCard, Clock, TrendingUp, Users, List, Bell } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const UserBenefits = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'customer' | 'owner' | 'photographer'>('customer');
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-rotate tabs every 5 seconds if user hasn't interacted
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveTab(current => {
                if (current === 'customer') return 'owner';
                if (current === 'owner') return 'photographer';
                return 'customer';
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

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
        <section id="user-benefits" className="py-24 relative overflow-hidden bg-white dark:bg-black">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Gradient Orb - Middle Left Side */}
                <div className="absolute top-1/2 left-0 -translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-studio-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
            </div>
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
                        @keyframes progress {
                            from { width: 0%; }
                            to { width: 100%; }
                        }
                        `}
                    </style>
                    <div className="bg-slate-100 dark:bg-white/5 p-1.5 rounded-full grid grid-cols-3 relative isolate">
                        {/* Sliding Background Pill */}
                        <div
                            className="absolute top-1.5 bottom-1.5 bg-white dark:bg-zinc-700 rounded-full shadow-sm transition-all duration-300 ease-out -z-10"
                            style={{
                                width: 'calc(33.333% - 4px)',
                                left: activeTab === 'customer' ? '4px' : activeTab === 'owner' ? 'calc(33.333% + 1.33px)' : 'calc(66.666% - 1.33px)',
                            }}
                        >
                            {/* SVG Border Progress - Attached to the Pill for Perfect Shape */}
                            {isAutoPlaying && (
                                <svg key={activeTab} className="absolute inset-0 w-full h-full pointer-events-none rounded-full" style={{ overflow: 'visible' }}>
                                    <rect
                                        x="1"
                                        y="1"
                                        width="calc(100% - 2px)"
                                        height="calc(100% - 2px)"
                                        rx="9999"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-orange-500 dark:text-orange-400"
                                        strokeDasharray="400"
                                        strokeDashoffset="400"
                                        style={{
                                            animation: 'borderProgress 5000ms linear forwards'
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
                    <style>
                        {`
                            @keyframes borderProgress {
                                to { stroke-dashoffset: 0; }
                            }
                        `}
                    </style>
                </div>

                {/* Dynamic Content Area */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[500px]">



                        {/* Left: Text Content */}
                        <div className="animate-fade-in-up">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6 ${benefits[activeTab].badgeColor}`}>
                                {benefits[activeTab].icon}
                                <span className="uppercase tracking-wider">{t.userBenefits.roles[activeTab].badge}</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                {benefits[activeTab].title}
                            </h3>

                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                {benefits[activeTab].description}
                            </p>

                            <div className="space-y-6">
                                {benefits[activeTab].points.map((point: any, i: number) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${benefits[activeTab].bgColor} ${benefits[activeTab].color}`}>
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

                        {/* Right: Dynamic Mockup */}
                        <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">

                            {/* Animated Background Blob */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 transition-colors duration-500 ${activeTab === 'customer' ? 'bg-orange-500' :
                                activeTab === 'owner' ? 'bg-slate-500' :
                                    'bg-zinc-500'
                                }`}></div>

                            {/* CUSTOMER MOCKUP */}
                            {activeTab === 'customer' && (
                                <div className="relative w-[280px] animate-float-slow">
                                    {/* Mobile Card */}
                                    <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border-[6px] border-slate-900 dark:border-zinc-800 shadow-2xl p-4 overflow-hidden relative z-10">
                                        {/* Dynamic Island */}
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-slate-900 dark:bg-black rounded-b-xl"></div>

                                        {/* Screen Content */}
                                        <div className="mt-8 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-zinc-800"></div>
                                                <div className="w-20 h-4 rounded-full bg-slate-100 dark:bg-zinc-800"></div>
                                            </div>

                                            <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-2xl border border-green-100 dark:border-green-900/20 text-center">
                                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                                                    <CheckCircle2 size={24} />
                                                </div>
                                                <p className="font-bold text-slate-900 dark:text-white text-sm">{t.userBenefits.roles.customer.mockup.confirmed}</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t.userBenefits.roles.customer.mockup.message}</p>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="h-12 w-full bg-slate-50 dark:bg-zinc-800/50 rounded-xl flex items-center px-3 gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-white/10 text-slate-500 flex items-center justify-center"><Calendar size={16} /></div>
                                                    <div className="w-24 h-2 bg-slate-200 dark:bg-zinc-700 rounded-full"></div>
                                                </div>
                                                <div className="h-12 w-full bg-slate-50 dark:bg-zinc-800/50 rounded-xl flex items-center px-3 gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-500 flex items-center justify-center"><Clock size={16} /></div>
                                                    <div className="w-20 h-2 bg-slate-200 dark:bg-zinc-700 rounded-full"></div>
                                                </div>
                                                <div className="h-12 w-full bg-slate-50 dark:bg-zinc-800/50 rounded-xl flex items-center px-3 gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-white/10 text-slate-500 flex items-center justify-center"><CreditCard size={16} /></div>
                                                    <div className="w-16 h-2 bg-slate-200 dark:bg-zinc-700 rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Element */}
                                    <div className="absolute top-20 -right-12 z-30 bg-white dark:bg-zinc-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-white/5 animate-bounce-slow">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-xs font-bold text-slate-700 dark:text-white">{t.userBenefits.roles.customer.mockup.paymentSuccess}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* OWNER MOCKUP */}
                            {activeTab === 'owner' && (
                                <div className="relative w-[320px] animate-fade-in">
                                    {/* Dashboard Widget */}
                                    <div className="bg-white dark:bg-zinc-950 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl p-5 relative z-10">
                                        <div className="flex justify-between items-center mb-6">
                                            <div>
                                                <p className="text-xs text-slate-500 font-bold uppercase">{t.userBenefits.roles.owner.mockup.salesTitle}</p>
                                                <h4 className="text-2xl font-black text-slate-900 dark:text-white">RM 1,250</h4>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
                                                <TrendingUp size={20} />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-zinc-900 rounded-xl border border-slate-100 dark:border-white/5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 flex items-center justify-center font-bold text-xs">#1</div>
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-800 dark:text-white">Family Portrait</p>
                                                        <p className="text-[10px] text-slate-500">10:00 AM • Paid</p>
                                                    </div>
                                                </div>
                                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-white/10 px-2 py-1 rounded-full">RM 350</span>
                                            </div>
                                            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-zinc-900 rounded-xl border border-slate-100 dark:border-white/5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center font-bold text-xs">#2</div>
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-800 dark:text-white">Graduation</p>
                                                        <p className="text-[10px] text-slate-500">2:00 PM • Paid</p>
                                                    </div>
                                                </div>
                                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-white/10 px-2 py-1 rounded-full">RM 250</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Stats */}
                                    <div className="absolute -top-6 -right-6 z-30 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-white/5 animate-float">
                                        <p className="text-[10px] text-slate-500 mb-1">{t.userBenefits.roles.owner.mockup.totalBookings}</p>
                                        <div className="flex items-center gap-2">
                                            <Users size={16} className="text-studio-primary" />
                                            <span className="font-bold text-slate-900 dark:text-white">12 {t.userBenefits.roles.owner.mockup.new}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* PHOTOGRAPHER MOCKUP */}
                            {activeTab === 'photographer' && (
                                <div className="relative w-[300px] animate-fade-in">
                                    {/* Shotlist Card */}
                                    <div className="bg-white dark:bg-zinc-950 rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden relative z-10">
                                        <div className="bg-slate-900 p-4 flex justify-between items-center">
                                            <span className="text-white font-bold text-sm">{t.userBenefits.roles.photographer.mockup.shotlist}</span>
                                            <List size={16} className="text-white/60" />
                                        </div>
                                        <div className="p-4 space-y-4">
                                            <div className="flex gap-4 relative">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 mb-1"></div>
                                                    <div className="w-0.5 h-full bg-slate-200 dark:bg-zinc-800"></div>
                                                </div>
                                                <div className="pb-4">
                                                    <p className="text-xs font-bold text-slate-500 mb-1">10:00 AM</p>
                                                    <div className="bg-slate-50 dark:bg-zinc-900 p-3 rounded-xl border border-slate-100 dark:border-white/5 w-48">
                                                        <p className="font-bold text-slate-800 dark:text-white text-sm">Raya Family A</p>
                                                        <p className="text-xs text-slate-500 mt-1">Theme: Kampung House</p>
                                                        <div className="mt-2 flex gap-1">
                                                            <span className="text-[9px] bg-orange-100 dark:bg-orange-900/30 text-orange-700 px-1.5 py-0.5 rounded">Child x3</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-4 relative">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-zinc-700 mb-1"></div>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-slate-500 mb-1">11:30 AM</p>
                                                    <div className="bg-white dark:bg-zinc-900 p-3 rounded-xl border border-slate-200 dark:border-white/10 w-48 opacity-60">
                                                        <p className="font-bold text-slate-800 dark:text-white text-sm">Couple Portrait</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Notification */}
                                    <div className="absolute -top-6 -right-6 z-30 bg-white dark:bg-zinc-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-white/5 animate-pulse">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-studio-primary/10 flex items-center justify-center text-studio-primary">
                                                <Bell size={16} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-slate-500">{t.userBenefits.roles.photographer.mockup.newAssignment}</p>
                                                <p className="text-xs font-bold text-slate-900 dark:text-white">{t.userBenefits.roles.photographer.mockup.assignedBy}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserBenefits;
