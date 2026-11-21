import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CalendarDays, CreditCard, FileText, Globe, Bell, BarChart3, Download, Ticket, Users, Search, CalendarSync, Send, SlidersHorizontal, Palette, Workflow, Headphones } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const durations = [
  { months: 1, total: 149, saving: 0, percent: 0 },
  { months: 3, total: 399, saving: 48, percent: 11 },
  { months: 12, total: 1188, saving: 600, percent: 34 },
] as const;

const Pricing: React.FC = () => {
  const { language, isChanging } = useLanguage();
  const [selected, setSelected] = useState(2);
  const reduceMotion = useReducedMotion();
  const plan = durations[selected];
  const period = language === 'bm' ? 'bulan' : plan.months === 1 ? 'month' : 'months';
  const bm = language === 'bm';
  const money = (amount: number) => `RM${amount.toLocaleString('en-MY')}`;
  const features = [
    [Globe, bm ? 'Laman & borang tempahan' : 'Booking page & form'],
    [CalendarDays, bm ? 'Kalendar & kawalan slot' : 'Calendar & slot controls'],
    [CreditCard, bm ? 'Bayaran dalam talian' : 'Online payments'],
    [FileText, bm ? 'Resit automatik' : 'Automatic receipts'],
    [CalendarSync, 'Google Calendar'],
    [Send, bm ? 'Notifikasi Telegram' : 'Telegram notifications'],
    [Bell, bm ? 'Peringatan WhatsApp' : 'WhatsApp reminders'],
    [BarChart3, bm ? 'Laporan jualan' : 'Sales reports'],
    [Download, bm ? 'Eksport & carian data' : 'Data export & search'],
    [Ticket, bm ? 'Baucar & diskaun' : 'Vouchers & discounts'],
    [Users, bm ? 'Urus jurugambar & upah' : 'Photographer management & payouts'],
    [Search, bm ? 'Pengurusan lead' : 'Lead management'],
  ] as const;

  return (
    <section id="pricing" className="bg-transparent py-16 md:py-20">
      <div className={`mx-auto max-w-6xl px-5 transition-opacity duration-300 sm:px-6 ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-medium leading-tight text-slate-900 dark:text-white md:text-5xl">{bm ? 'Pilih tempoh anda.' : 'Choose your duration.'}</h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">{bm ? 'Satu pakej, semua fungsi untuk studio anda.' : 'One plan, every feature for your studio.'}</p>
        </div>

        <div className="mx-auto mt-9 flex w-fit max-w-full items-center gap-1 rounded-full border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-[#171719]" role="group" aria-label={bm ? 'Tempoh langganan' : 'Subscription duration'}>
          {durations.map((option, index) => <button key={option.months} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className={`min-h-11 rounded-full px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:px-6 ${selected === index ? 'bg-[#c2410c] text-white' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10'}`}>
            {option.months} {bm ? 'bulan' : option.months === 1 ? 'month' : 'months'}
          </button>)}
        </div>

        <div className="mx-auto mt-6 grid max-w-5xl items-center gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.46fr)] lg:gap-7">
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white dark:border-white/10 dark:bg-[#151517]">
            <div className="bg-slate-50 px-6 py-8 text-center dark:bg-zinc-900 sm:px-9 sm:py-10">
              <div aria-live="polite" aria-atomic="true">
                <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
                  <motion.span
                    key={plan.months}
                    initial={reduceMotion ? false : { opacity: 0.65, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.16 }}
                    className="text-[clamp(2.5rem,8vw,4rem)] font-semibold leading-none tracking-tight tabular-nums text-slate-900 dark:text-white"
                  >
                    {money(plan.total)}
                  </motion.span>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    / {plan.months} {period}
                  </span>
                </div>
                <div className="mt-5 flex min-h-10 justify-center">
                  {plan.saving > 0 && (
                    <div className="inline-flex items-center gap-3 text-left">
                      <span className="flex h-10 items-center rounded-lg bg-studio-primary/10 px-3 text-sm font-bold tabular-nums text-[#9a3412] dark:text-orange-400">−{plan.percent}%</span>
                      <span className="text-sm leading-tight text-slate-500 dark:text-slate-400">
                        <span className="block font-semibold text-slate-900 dark:text-white">{bm ? 'Jimat' : 'Save'} {money(plan.saving)}</span>
                        <span className="text-xs">{bm ? 'berbanding harga bulanan' : 'compared with monthly billing'}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <a href="https://office.sesifoto.my/register" target="_blank" rel="noopener noreferrer" className="mx-auto mt-5 flex min-h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#C2410C] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#9a3412] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500">{bm ? 'Daftar Sekarang' : 'Get started'} <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="border-t border-slate-200 px-6 py-7 dark:border-white/10 sm:px-9 sm:py-8">
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{bm ? 'Dalam pakej ini' : 'In this plan'}</h3>
              <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">{features.map(([Icon, feature]) => <li key={feature} className="flex items-start gap-3 text-sm leading-snug text-slate-600 dark:text-slate-300"><Icon size={17} strokeWidth={1.7} className="mt-0.5 shrink-0 text-[#c2410c] dark:text-orange-400" aria-hidden="true" />{feature}</li>)}</ul>
            </div>
          </div>
          <aside className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-6 py-7 text-center dark:border-white/10 dark:bg-zinc-900 sm:px-8">
            <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-studio-primary/10 text-[#c2410c] dark:text-orange-400">
              <SlidersHorizontal size={19} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-2xl font-medium tracking-tight text-slate-900 dark:text-white">Custom</h3>
            <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{bm ? 'Harga ikut keperluan' : 'Pricing tailored to your needs'}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {bm ? 'Bincang penyelesaian untuk operasi studio anda.' : 'Discuss a solution for your studio operations.'}
            </p>
            <ul className="my-5 divide-y divide-slate-200 border-y border-slate-200 text-left text-sm text-slate-700 dark:divide-white/10 dark:border-white/10 dark:text-slate-300">
              <li className="flex items-center gap-3 py-2.5"><Palette size={16} className="text-studio-primary" aria-hidden="true" />White label</li>
              <li className="flex items-center gap-3 py-2.5"><Workflow size={16} className="text-studio-primary" aria-hidden="true" />{bm ? 'Aliran tempahan khas' : 'Custom booking workflows'}</li>
              <li className="flex items-center gap-3 py-2.5"><CalendarSync size={16} className="text-studio-primary" aria-hidden="true" />{bm ? 'Integrasi khas untuk dibincang' : 'Integration options to discuss'}</li>
              <li className="flex items-center gap-3 py-2.5"><Headphones size={16} className="text-studio-primary" aria-hidden="true" />{bm ? 'Sokongan terus untuk setup' : 'Direct setup support'}</li>
            </ul>
            <a href="https://wa.link/rxj90f" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 dark:border-white/20 dark:text-white dark:hover:bg-white/5">
              {bm ? 'Jom bincang' : 'Let’s talk'} <ArrowRight size={16} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
