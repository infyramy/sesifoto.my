import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';

const options = [
  { months: 1, monthly: 149, total: 149, saving: 0 },
  { months: 3, monthly: 133, total: 399, saving: 48 },
  { months: 12, monthly: 99, total: 1188, saving: 600 },
] as const;

/** Standalone pricing selector. Pricing data is illustrative until connected to billing. */
export default function PlanSwitch() {
  const [selected, setSelected] = useState(2);
  const [direction, setDirection] = useState(1);
  const controls = useRef<HTMLDivElement>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const leftTarget = useMotionValue(0);
  const rightTarget = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const leftLead = useSpring(leftTarget, { stiffness: 620, damping: 36 });
  const leftTrail = useSpring(leftTarget, { stiffness: 190, damping: 19 });
  const rightLead = useSpring(rightTarget, { stiffness: 620, damping: 36 });
  const rightTrail = useSpring(rightTarget, { stiffness: 190, damping: 19 });
  const left = direction > 0 ? leftTrail : leftLead;
  const right = direction > 0 ? rightLead : rightTrail;
  const width = useTransform(() => Math.max(0, right.get() - left.get()));
  const plan = options[selected];

  useLayoutEffect(() => {
    const update = () => {
      const button = buttons.current[selected];
      if (!button) return;
      leftTarget.set(button.offsetLeft);
      rightTarget.set(button.offsetLeft + button.offsetWidth);
    };
    update();
    const observer = new ResizeObserver(update);
    if (controls.current) observer.observe(controls.current);
    return () => observer.disconnect();
  }, [selected, leftTarget, rightTarget]);

  const select = (index: number) => {
    setDirection(index > selected ? 1 : -1);
    setSelected(index);
  };

  useEffect(() => {
    if (!reduceMotion) return;
    leftLead.jump(leftTarget.get()); leftTrail.jump(leftTarget.get());
    rightLead.jump(rightTarget.get()); rightTrail.jump(rightTarget.get());
  }, [selected, reduceMotion, leftLead, leftTrail, rightLead, rightTrail, leftTarget, rightTarget]);

  return (
    <div className="w-full max-w-sm rounded-[1.5rem] border border-slate-200 bg-white p-5 text-slate-900 dark:border-white/10 dark:bg-zinc-900 dark:text-white">
      <div ref={controls} role="radiogroup" aria-label="Tempoh langganan" className="relative flex rounded-full bg-slate-100 p-1 dark:bg-white/5" onKeyDown={(event) => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        const next = (selected + (event.key === 'ArrowRight' ? 1 : -1) + options.length) % options.length;
        select(next); buttons.current[next]?.focus();
      }}>
        <motion.span aria-hidden="true" className="absolute bottom-1 top-1 rounded-full bg-white shadow-sm dark:bg-white/10" style={{ left: 0, x: left, width }} />
        {options.map((option, index) => <button key={option.months} ref={element => { buttons.current[index] = element; }} role="radio" aria-checked={selected === index} tabIndex={selected === index ? 0 : -1} type="button" onClick={() => select(index)} className="relative z-10 flex-1 rounded-full px-2 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500">{option.months} bulan</button>)}
      </div>
      <div className="px-1 pb-5 pt-6">
        <div className="flex items-center justify-between"><h3 className="font-semibold">SesiFoto</h3>{plan.saving > 0 && <motion.span key={plan.saving} initial={reduceMotion ? false : { scale: 0.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 520, damping: 16 }} className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-700 dark:text-orange-400">Jimat RM{plan.saving}</motion.span>}</div>
        <div className="mt-4 flex items-baseline text-4xl font-semibold tabular-nums" aria-live="polite" aria-label={`RM${plan.monthly} sebulan`}>
          <span aria-hidden="true">RM</span>
          {String(plan.monthly).split('').map((digit, index) => (
            <span key={index} className="inline-block h-[1.2em] w-[0.6em] overflow-hidden" aria-hidden="true">
              <motion.span className="block" animate={{ y: `-${Number(digit) * 10}%` }} transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 22 + index * 2, delay: index * 0.045 }}>
                {Array.from({ length: 10 }, (_, number) => <span key={number} className="block h-[1.2em] text-center leading-[1.2]">{number}</span>)}
              </motion.span>
            </span>
          ))}
          <span aria-hidden="true" className="ml-1 text-sm font-medium text-slate-500 dark:text-slate-400">/ bulan</span>
        </div>
        <motion.p key={plan.months} initial={reduceMotion ? false : { y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 420, damping: 32 }} className="mt-2 text-sm text-slate-600 dark:text-slate-400">RM{plan.total.toLocaleString('en-MY')} untuk {plan.months} bulan, dibayar di awal</motion.p>
        <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-300"><li className="flex items-center gap-2"><Check size={16} className="text-studio-primary" />Tempahan tanpa had</li><li className="flex items-center gap-2"><Check size={16} className="text-studio-primary" />Kalendar dan bayaran online</li></ul>
      </div>
      <a href="https://office.sesifoto.my/register" target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center rounded-full bg-[#c2410c] px-5 text-sm font-semibold text-white hover:bg-[#9a3412] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Daftar Sekarang</a>
    </div>
  );
}
