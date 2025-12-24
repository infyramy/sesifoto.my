import React from 'react';
import { Star, Quote } from 'lucide-react';
import Reveal from './ui/Reveal';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t, isChanging } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);

  // Duplicate the items enough times to create a seamless loop
  const allTestimonials = [
    ...t.testimonials.items,
    ...t.testimonials.items,
    ...t.testimonials.items
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 relative overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-500">
      {/* Seamless Transition Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white/50 to-slate-50 dark:from-zinc-950 dark:via-black/20 dark:to-zinc-950 pointer-events-none" />

      {/* Theme-Aware Gradient Orb - Middle Right */}
      <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[800px] h-[800px] bg-studio-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className={`transition-all duration-500 relative z-10 ${isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>

        {/* Header Section - CENTERED */}
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center flex flex-col items-center">
          <Reveal>
            <div className="flex flex-col items-center gap-4 pb-4">
              <h2 className="text-3xl md:text-5xl font-medium font-serif bg-gradient-to-r from-orange-600 via-slate-800 to-slate-900 dark:from-white dark:to-slate-300 bg-clip-text text-transparent pb-2">
                {t.testimonials.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
                {t.testimonials.subtitle}
              </p>
              <div className="flex flex-col gap-2 shrink-0 items-center mt-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-amber-400 dark:fill-[#FBBF24] text-amber-400 dark:text-[#FBBF24]" />
                  ))}
                </div>
                <span className="text-slate-900 dark:text-white font-medium tracking-wide">{t.testimonials.rating}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* MOBILE VIEW: Split Layout (Selector | Content) */}
        {/* MOBILE VIEW: Split Layout (Selector | Content) */}
        <div className="md:hidden px-4">
          <div className="flex gap-3 items-stretch min-h-[200px]">
            {/* Left Column: Detailed Selectors */}
            <div className="flex flex-col gap-3 shrink-0 w-36 overflow-y-auto no-scrollbar p-3">
              {t.testimonials.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`relative flex flex-col items-center p-2 rounded-2xl border transition-all duration-300 ease-out text-center group shrink-0 ${activeTestimonial === index
                      ? 'bg-white dark:bg-zinc-800 border-studio-primary/30 ring-2 ring-studio-primary shadow-lg scale-100 opacity-100 z-10'
                      : 'bg-slate-50 dark:bg-white/5 border-transparent scale-90 opacity-60 grayscale hover:opacity-80 hover:scale-100'
                    }`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className={`rounded-full object-cover mb-2 transition-all duration-300 shadow-sm ${activeTestimonial === index ? 'w-10 h-10 ring-2 ring-white dark:ring-zinc-700' : 'w-8 h-8'
                      }`}
                  />
                  <div className="flex flex-col w-full">
                    <span className={`text-[10px] leading-tight font-bold truncate w-full mb-1 ${activeTestimonial === index ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                      {item.name}
                    </span>
                    <span className="text-[9px] leading-tight text-slate-500 dark:text-slate-500 line-clamp-2">
                      {item.company}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column: Content Card */}
            <div className="flex-1 min-w-0">
              <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-3xl p-5 shadow-sm h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Quote className="w-12 h-12 text-slate-900 dark:text-white" />
                </div>

                <div className="flex-1 flex flex-col justify-center z-10">
                  <div className="flex gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {t.testimonials.items[activeTestimonial].content}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5 shrink-0 relative z-10">
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm">{t.testimonials.items[activeTestimonial].name}</h4>
                  <p className="text-slate-500 dark:text-slate-500 text-[10px] uppercase font-bold tracking-wider">{t.testimonials.items[activeTestimonial].role} @ {t.testimonials.items[activeTestimonial].company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW: Continuous Marquee */}
        <div className="hidden md:block relative w-full overflow-hidden py-10">
          {/* Marquee Container */}
          <div
            className="flex w-max animate-scroll hover:[animation-play-state:paused]"
            style={{ width: 'max-content' }}
          >
            {/* Loop Items */}
            {allTestimonials.map((testimonial, index) => (
              <div key={index} className="w-[480px] mx-5 shrink-0 h-full">
                {/* System Style Card */}
                <div className="relative group overflow-hidden rounded-3xl p-8 h-full min-h-[300px] flex flex-col justify-between bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:hover:border-white/20 text-left">

                  <div className="relative z-10">
                    <div className="mb-6 flex justify-between items-start">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-slate-100 dark:text-white/5 fill-current rotate-180" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-normal">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-4 pt-8 mt-4 border-t border-slate-100 dark:border-white/5">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100 dark:ring-white/10"
                    />
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-slate-500 dark:text-slate-500 text-xs font-semibold uppercase tracking-wider">{testimonial.role} @ {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;