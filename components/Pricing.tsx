import React from 'react';
import GlassCard from './ui/GlassCard';
import { Check, CalendarDays, Globe, CreditCard, Bell, BarChart2, Users, MessageCircle, Tag, Headset, Star, RefreshCcw, Link } from 'lucide-react';
import Reveal from './ui/Reveal';
import { useLanguage } from '../contexts/LanguageContext';
import { sanitizeRichHtml } from '../utils/sanitizeHtml';

// Each feature string gets a specific, distinct icon
const getFeatureIcon = (featureText: string) => {
  const text = featureText.toLowerCase();
  if (text.includes('everything in') || text.includes('semua dalam')) return <Star className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('unlimited') || text.includes('tiada had')) return <Check className="w-3.5 h-3.5 stroke-[3]" />;
  if (text.includes('payment') || text.includes('bayaran') || text.includes('kutip')) return <CreditCard className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('booking page') || text.includes('laman tempahan')) return <Globe className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('calendar') || text.includes('kalendar') || text.includes('penjadualan') || text.includes('scheduling')) return <CalendarDays className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('sync') || text.includes('sinkronisasi') || text.includes('google')) return <RefreshCcw className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('subdomain') || text.includes('domain') || text.includes('link')) return <Link className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('email') || text.includes('notifikasi') || text.includes('notification')) return <Bell className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('report') || text.includes('laporan') || text.includes('sales') || text.includes('revenue') || text.includes('pendapatan') || text.includes('jualan')) return <BarChart2 className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('photographer') || text.includes('jurugambar') || text.includes('team') || text.includes('ramai')) return <Users className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('whatsapp') || text.includes('peringatan')) return <MessageCircle className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('coupon') || text.includes('kupon') || text.includes('voucher') || text.includes('discount') || text.includes('diskaun') || text.includes('kod')) return <Tag className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('analytics') || text.includes('analitik')) return <BarChart2 className="w-3.5 h-3.5 stroke-[2.5]" />;
  if (text.includes('support') || text.includes('sokongan') || text.includes('onboarding')) return <Headset className="w-3.5 h-3.5 stroke-[2.5]" />;
  return <Check className="w-3.5 h-3.5 stroke-[3]" />;
};

const Pricing: React.FC = () => {
  const { t, isChanging } = useLanguage();

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-orange-50/20 via-amber-50/10 to-rose-50/20 dark:from-orange-950/5 dark:via-amber-950/5 dark:to-rose-950/5">
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-orange-500/15 to-amber-500/15 dark:from-orange-500/10 dark:to-amber-500/10 rounded-full blur-[140px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-studio-primary/12 to-rose-500/12 dark:from-studio-primary/8 dark:to-rose-500/8 rounded-full blur-[140px] z-0 pointer-events-none"></div>

      <div className="absolute inset-x-0 top-0 h-full opacity-[0.15] dark:opacity-[0.2] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#94a3b8 1.2px, transparent 1.2px)`, backgroundSize: '24px 24px' }}
      ></div>

      <div className="absolute inset-x-0 bottom-0 h-56 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-studio-paper/40 dark:via-studio-black/40 to-studio-paper dark:to-studio-black"></div>
      </div>

      <div className={`max-w-7xl mx-auto transition-all duration-500 ${isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'} relative z-10`}>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 px-6 flex flex-col items-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-medium font-serif mb-3 leading-tight bg-gradient-to-r from-orange-600 via-slate-800 to-slate-900 dark:from-white dark:to-slate-300 bg-clip-text text-transparent pb-2">
              {t.pricing.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-snug">
              {t.pricing.subtitle}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-6 max-w-6xl mx-auto">
          {t.pricing.plans.map((plan: any, index: number) => (
            <Reveal key={index} delay={index * 150} className="h-full" width="100%">
              <div className={`relative h-full ${plan.popular ? 'z-20 md:scale-[1.05]' : 'z-0'}`}>
                {plan.popular && (
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-studio-primary/20 to-orange-500/20 rounded-[30px] blur-xl opacity-60 dark:opacity-40 -z-10"></div>
                )}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-studio-primary via-orange-500 to-studio-primary text-white text-xs font-bold px-6 py-2.5 rounded-full tracking-widest uppercase shadow-xl animate-pulse-slow z-50 whitespace-nowrap">
                    ✨ {t.pricing.popular}
                  </div>
                )}

                <GlassCard className={`p-8 lg:p-10 relative transition-all duration-500 h-full flex flex-col ${plan.popular
                  ? 'bg-slate-50 dark:bg-zinc-900 border-2 border-studio-primary/60 dark:border-studio-primary/40 shadow-xl shadow-studio-primary/10 dark:shadow-studio-primary/20'
                  : 'bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:shadow-md transition-all'
                  }`}>
                  <div className={`${plan.popular ? 'mt-6' : ''}`}>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3 font-serif">{plan.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-10 leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="mb-8 relative">
                    {plan.oldPrice && (
                      <div className="absolute -top-7 left-0 flex items-center gap-2">
                        <span className="text-lg text-slate-400 dark:text-slate-500 line-through font-semibold">{plan.oldPrice}</span>
                        <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400 rounded-full font-bold uppercase tracking-wider">Save</span>
                      </div>
                    )}
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-2xl font-bold text-slate-500 dark:text-slate-400">RM</span>
                      <span className={`text-6xl font-black tracking-tight font-serif ${plan.popular ? 'text-studio-primary' : 'text-slate-900 dark:text-white'}`}>{plan.price.replace('RM', '')}</span>
                      {plan.period && <span className="text-slate-500 ml-2 text-sm">{plan.period}</span>}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature: string, idx: number) => {
                      const isStar = feature.toLowerCase().includes('everything in') || feature.toLowerCase().includes('semua dalam');
                      return (
                        <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                          <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${isStar
                            ? 'bg-studio-primary text-white'
                            : plan.popular
                              ? 'bg-studio-primary/15 dark:bg-studio-primary/25 text-studio-primary'
                              : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                            }`}>
                            {getFeatureIcon(feature)}
                          </div>
                          <span
                            className={isStar ? 'font-semibold text-slate-800 dark:text-slate-200' : ''}
                            dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(feature) }}
                          />
                        </li>
                      );
                    })}
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

        {t.pricing.disclaimer && (
          <Reveal delay={400} width="100%">
            <p className="mx-auto mt-10 max-w-2xl px-6 text-center text-xs leading-relaxed text-slate-400 dark:text-slate-600">
              {t.pricing.disclaimer}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Pricing;
