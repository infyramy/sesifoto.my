import React from 'react';
import GlassCard from './ui/GlassCard';
import { Check } from 'lucide-react';
import Reveal from './ui/Reveal';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
  const { t, isChanging } = useLanguage();

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-orange-50/20 via-amber-50/10 to-rose-50/20 dark:from-orange-950/5 dark:via-amber-950/5 dark:to-rose-950/5">
      {/* Colorful Radial Glows for Pricing */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-orange-500/15 to-amber-500/15 dark:from-orange-500/10 dark:to-amber-500/10 rounded-full blur-[140px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-studio-primary/12 to-rose-500/12 dark:from-studio-primary/8 dark:to-rose-500/8 rounded-full blur-[140px] z-0 pointer-events-none"></div>

      {/* Top Pattern Overlay */}
      <div className="absolute inset-x-0 top-0 h-full opacity-[0.15] dark:opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`,
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Bottom Fade Transition with Noise */}
      <div className="absolute inset-x-0 bottom-0 h-56 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-studio-paper/40 dark:via-studio-black/40 to-studio-paper dark:to-studio-black"></div>
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}
        />
      </div>

      <div className={`max-w-7xl mx-auto transition-all duration-500 ${isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'} relative z-10`}>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-6 flex flex-col items-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-medium font-serif mb-6 bg-gradient-to-r from-orange-600 via-slate-800 to-slate-900 dark:from-white dark:to-slate-300 bg-clip-text text-transparent pb-2">
              {t.pricing.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
              {t.pricing.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-6 max-w-6xl mx-auto">
          {t.pricing.plans.map((plan: any, index: number) => (
            <Reveal key={index} delay={index * 150} className="h-full" width="100%">
              <div className={`relative h-full ${plan.popular ? 'z-20 md:scale-[1.05]' : 'z-0'}`}>
                {/* Glow effect for recommended plan - Moved outside to avid clipping */}
                {plan.popular && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-studio-primary/20 to-orange-500/20 rounded-[30px] blur-xl opacity-60 dark:opacity-40 -z-10"></div>
                )}

                {/* Badge - Moved outside to avoid clipping */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-studio-primary via-orange-500 to-studio-primary text-white text-xs font-bold px-6 py-2.5 rounded-full tracking-widest uppercase shadow-xl animate-pulse-slow z-50 whitespace-nowrap">
                    ✨ {t.pricing.popular}
                  </div>
                )}

                <GlassCard
                  className={`p-8 lg:p-10 relative transition-all duration-500 h-full flex flex-col ${plan.popular
                    ? 'bg-slate-50 dark:bg-zinc-900 border-2 border-studio-primary/60 dark:border-studio-primary/40 shadow-xl shadow-studio-primary/10 dark:shadow-studio-primary/20'
                    : 'bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:shadow-md transition-all'
                    }`}
                >
                  <div className={`${plan.popular ? 'mt-6' : ''}`}>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3 font-serif">{plan.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-slate-500 dark:text-slate-400">RM</span>
                      <span className={`text-6xl font-black tracking-tight font-serif ${plan.popular ? 'text-studio-primary dark:text-studio-primary' : 'text-slate-900 dark:text-white'}`}>{plan.price.replace('RM', '')}</span>
                      {plan.period && <span className="text-slate-500 ml-2">{plan.period}</span>}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'bg-studio-primary/15 dark:bg-studio-primary/25 text-studio-primary ring-2 ring-studio-primary/30' : 'bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400'}`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span 
                          className={`${idx === 0 && plan.popular ? 'font-semibold text-slate-800 dark:text-slate-200' : ''}`}
                          dangerouslySetInnerHTML={{ __html: feature }}
                        />
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://office.sesifoto.my/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-5 rounded-xl font-bold transition-all duration-300 text-sm tracking-wide mt-auto shadow-lg ${plan.popular
                      ? 'bg-gradient-to-r from-studio-primary to-orange-500 text-white hover:from-studio-primary-hover hover:to-orange-600 shadow-xl shadow-studio-primary/40 hover:shadow-2xl hover:shadow-studio-primary/50 transform hover:scale-[1.02] active:scale-[0.98]'
                      : 'bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-white/20 hover:border-slate-300 dark:hover:border-white/30 hover:scale-[1.02] active:scale-[0.98]'
                      }`}
                  >
                    {plan.cta}
                  </a>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Pricing;