import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { User, Store, Camera, Check, CalendarDays, Clock, CreditCard, ClipboardList, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type Role = 'customer' | 'owner' | 'photographer';
const roles: Role[] = ['customer', 'owner', 'photographer'];
const roleIcons = { customer: User, owner: Store, photographer: Camera };

const UserBenefits = () => {
    const { t, language } = useLanguage();
    const [activeTab, setActiveTab] = useState<Role>('customer');
    const reduceMotion = useReducedMotion();
    const bm = language === 'bm';
    const active = t.userBenefits.roles[activeTab];
    const transition = reduceMotion ? { duration: 0 } : { duration: 0.32, ease: [0.16, 1, 0.3, 1] as const };

    return (
        <section id="user-benefits" className="relative overflow-hidden bg-transparent py-16 md:py-24">
            <div className="container relative mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-serif text-3xl font-medium leading-tight text-slate-900 dark:text-white md:text-5xl">{t.userBenefits.title} {t.userBenefits.highlight}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">{t.userBenefits.description}</p>
                </div>

                <div role="group" aria-label={bm ? 'Pilih peranan' : 'Choose a role'} className="mx-auto mt-9 grid w-full max-w-lg grid-cols-3 gap-1 rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-white/10 dark:bg-white/5">
                    {roles.map(role => {
                        const Icon = roleIcons[role];
                        const selected = activeTab === role;
                        return <button key={role} type="button" aria-pressed={selected} onClick={() => setActiveTab(role)} className={`relative isolate flex min-h-12 items-center justify-center gap-2 rounded-full px-2 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:text-sm ${selected ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'}`}>
                            {selected && <motion.span layoutId={reduceMotion ? undefined : 'benefit-active'} transition={transition} className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm dark:bg-zinc-700" />}
                            <Icon size={15} className={selected ? 'text-[#c2410c] dark:text-orange-400' : ''} aria-hidden="true" />
                            <span>{t.userBenefits.roles[role].tab}</span>
                        </button>;
                    })}
                </div>

                <div className="mx-auto mt-10 grid max-w-6xl items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-20">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div key={`text-${activeTab}`} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? {} : { opacity: 0, y: -5 }} transition={transition}>
                            <h3 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">{active.title}</h3>
                            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">{active.description}</p>
                            <div className="mt-8 space-y-5">
                                {active.points.map((point: { title: string; desc: string }) => <div key={point.title} className="flex items-start gap-3.5">
                                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#c2410c] dark:bg-orange-500/10 dark:text-orange-400"><Check size={15} strokeWidth={2.5} aria-hidden="true" /></span>
                                    <div><h4 className="text-base font-semibold text-slate-900 dark:text-white">{point.title}</h4><p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{point.desc}</p></div>
                                </div>)}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="relative flex min-h-[410px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-[#141416] sm:min-h-[470px] sm:p-10">
                        <div className="absolute inset-x-8 top-8 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400"><span>SesiFoto</span><span>{bm ? 'Paparan contoh' : 'Example view'}</span></div>
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div key={`visual-${activeTab}`} initial={reduceMotion ? false : { opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={reduceMotion ? {} : { opacity: 0, x: -12 }} transition={transition} className="flex w-full items-center justify-center pt-8">
                                {activeTab === 'customer' ? (
                                    <div className="relative aspect-[9/19.5] w-[185px] overflow-hidden rounded-[2rem] border-[5px] border-zinc-800 bg-white shadow-xl dark:border-zinc-700 dark:bg-[#151517] sm:w-[205px]">
                                        <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-zinc-800 dark:bg-zinc-700" />
                                        <div className="px-4 pt-9"><p className="text-[10px] text-slate-500">{bm ? 'Contoh tempahan' : 'Example booking'}</p><h4 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{bm ? 'Pilih sesi anda' : 'Choose your session'}</h4>
                                            <div className="mt-5 rounded-xl border border-slate-200 p-3 dark:border-white/10"><CalendarDays size={17} className="text-studio-primary" /><p className="mt-2 text-xs font-semibold text-slate-800 dark:text-white">{bm ? 'Pilih tarikh' : 'Choose a date'}</p><p className="mt-1 text-[10px] text-slate-500">{bm ? 'Semak slot yang tersedia' : 'View available slots'}</p></div>
                                            <div className="mt-3 rounded-xl border border-slate-200 p-3 dark:border-white/10"><Clock size={17} className="text-studio-primary" /><p className="mt-2 text-xs font-semibold text-slate-800 dark:text-white">{bm ? 'Pilih masa' : 'Choose a time'}</p></div>
                                            <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#c2410c] px-2 py-3 text-xs font-semibold text-white"><CreditCard size={14} />{bm ? 'Teruskan bayaran' : 'Continue to payment'}</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full max-w-[400px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#19191b]">
                                        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-white/10"><div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">{activeTab === 'owner' ? <CalendarDays size={18} className="text-studio-primary" /> : <ClipboardList size={18} className="text-studio-primary" />}{activeTab === 'owner' ? (bm ? 'Jadual tempahan' : 'Booking schedule') : (bm ? 'Jadual sesi' : 'Session schedule')}</div><span className="text-[10px] text-slate-500">{bm ? 'Contoh' : 'Example'}</span></div>
                                        <div className="space-y-3 p-5">{['10:00', '11:30', '14:00'].map((time, index) => <motion.div key={time} initial={reduceMotion ? false : { opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.06 }} className="flex items-center gap-4 rounded-xl border border-slate-100 px-4 py-3 dark:border-white/10"><span className="w-12 text-xs font-semibold tabular-nums text-slate-500">{time}</span><span className="h-9 w-px bg-orange-500/40" /><div className="min-w-0 flex-1"><p className="text-sm font-medium text-slate-800 dark:text-slate-200">{index === 0 ? (bm ? 'Sesi keluarga' : 'Family session') : index === 1 ? (bm ? 'Sesi pasangan' : 'Couple session') : (bm ? 'Sesi potret' : 'Portrait session')}</p><p className="mt-1 text-xs text-slate-500">{activeTab === 'owner' ? (bm ? 'Butiran tempahan' : 'Booking details') : (bm ? 'Butiran sesi' : 'Session details')}</p></div><ArrowRight size={15} className="shrink-0 text-slate-400" aria-hidden="true" /></motion.div>)}</div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserBenefits;
