import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Twitter, Instagram, Facebook, MessageCircle, AtSign, Quote, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SourceIcon = ({ source }: { source: string }) => {
  switch (source) {
    case 'x': return <Twitter className="w-3.5 h-3.5 text-white" />;
    case 'instagram': return <Instagram className="w-3.5 h-3.5 text-white" />;
    case 'facebook': return <Facebook className="w-3.5 h-3.5 text-white" />;
    case 'threads': return <AtSign className="w-3.5 h-3.5 text-white" />;
    default: return <MessageCircle className="w-3.5 h-3.5 text-white" />;
  }
};

const Testimonials: React.FC = () => {
  const { t, isChanging } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const testimonials = t.testimonials.items;
  const displayItems = testimonials;

  const scrollByCard = (direction: -1 | 1) => {
    if (scrollContainerRef.current) {
      const distance = Math.min(356, Math.max(280, scrollContainerRef.current.clientWidth * 0.82));
      scrollContainerRef.current.scrollBy({ left: distance * direction, behavior: 'smooth' });
    }
  };

  const formatContent = (content: string) => {
    const cleanContent = content.replace(/^"|"$/g, '');
    const words = cleanContent.split(' ');
    if (words.length <= 4) return { first: cleanContent, rest: '' };
    const first = words.slice(0, 4).join(' ');
    const rest = words.slice(4).join(' ');
    return { first, rest };
  };

  return (
    <section id="testimonials" className="relative w-full py-16 md:py-24 overflow-visible bg-transparent">

      {/* Seamless Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-studio-primary/5 dark:bg-studio-primary/10 rounded-full blur-[120px] pointer-events-none transform-gpu" />

      <div className={`relative z-10 max-w-[1400px] mx-auto px-6 transition-opacity duration-500 ${isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-studio-primary/10 dark:bg-studio-primary/20 border border-studio-primary/20 dark:border-studio-primary/30 text-studio-primary text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-sm dark:shadow-none">
              <Quote className="w-3.5 h-3.5 fill-current" />
              <span>Testimonial</span>
            </div>
            {/* Same typography as Integrations.tsx */}
            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 dark:text-white mb-2 font-serif leading-tight pb-1">
              {t.testimonials.title}
            </h2>
          </div>
          <a href="https://office.sesifoto.my/register" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden shrink-0 px-8 py-3.5 bg-studio-primary text-white rounded-full font-bold text-sm shadow-[0_10px_40px_-10px_rgba(255,107,44,0.4)] hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10 flex items-center gap-2">
              {t.nav?.register || 'Contact Sales'}
            </span>
          </a>
        </div>

        {/* Carousel Section */}
        <div className="relative -mx-6 px-6">
          <div
            ref={scrollContainerRef}
            className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-24 pb-8 pt-2 scroll-pl-24 scroll-pr-24 scroll-smooth md:px-32 md:scroll-pl-32 md:scroll-pr-32"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}
          >
            {displayItems.map((item, idx) => {
              const testimonialMeta = item as typeof item & {
                highlight?: string;
                excerpt?: string;
                sourceUrl?: string;
                logoText?: string;
              };
              const displayContent = testimonialMeta.highlight || testimonialMeta.excerpt || testimonialMeta.content;
              const { first, rest } = formatContent(displayContent);
              const isLongQuote = displayContent.length > 130;
              const sourceUrl = testimonialMeta.sourceUrl;
              const metaLine = [item.role, item.company].filter(Boolean).join(', ');

              const invertClass = item.invertMode === 'light' ? 'invert dark:invert-0'
                                : item.invertMode === 'dark' ? 'dark:invert'
                                : '';

              // Transparent Frameless Logo Component
              const TransparentLogo = testimonialMeta.logoText ? (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-studio-primary text-center text-[7px] font-black leading-[0.8] text-white shadow-[0_8px_20px_-10px_rgba(255,107,44,0.9)]">
                  <span>{testimonialMeta.logoText.split(' ').map((word) => <React.Fragment key={word}>{word}<br /></React.Fragment>)}</span>
                </div>
              ) : (
                <img
                  src={item.clientLogo}
                  alt={item.company}
                  className={`h-8 w-auto object-contain shrink-0 opacity-80 mix-blend-multiply dark:mix-blend-normal ${invertClass}`}
                />
              );

              // Override for dark backgrounds (video/image-text) which always need white logos
              const forcedLogoClass = item.invertMode === 'dark'
                ? 'brightness-0 invert contrast-125 opacity-100'
                : item.invertMode === 'light'
                  ? 'brightness-0 opacity-90'
                  : 'opacity-90';

              const ForcedWhiteLogo = (
                testimonialMeta.logoText ? TransparentLogo : (
                  <img
                    src={item.clientLogo}
                    alt={item.company}
                    className={`h-8 w-auto object-contain shrink-0 ${forcedLogoClass}`}
                  />
                )
              );

              // Top Header
              const TopHeader = (
                <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10">
                   <div className="h-8 flex items-center justify-start">
                     {TransparentLogo}
                   </div>
                   <div className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 shadow-sm flex items-center justify-center shrink-0">
                     <SourceIcon source={item.source} />
                   </div>
                </div>
              );

              // Bottom Footer (Name, Role, Company, Location)
              const BottomFooter = (
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10 bg-gradient-to-t from-white via-white/80 dark:from-[#111] dark:via-[#111]/80 to-transparent">
                  <div className="flex flex-col text-left mt-4">
                    <h4 className="text-slate-900 dark:text-white font-bold text-[15px] leading-tight">{item.name}</h4>
                    {metaLine && (
                      <p className="text-slate-600 dark:text-slate-400 text-[11px] font-medium mt-0.5">{metaLine}</p>
                    )}
                    {item.location && (
                      <p className="text-slate-400 dark:text-slate-500 text-[10px] mt-1.5 flex items-center gap-1 uppercase tracking-wider font-semibold">
                        <MapPin className="w-3 h-3 text-studio-primary" /> {item.location}
                      </p>
                    )}
                    {sourceUrl && (
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-studio-primary">
                        {t.testimonials.readFull || 'Read full testimonial'}
                      </p>
                    )}
                  </div>
                </div>
              );

              // Standardize text class for readability depending on background
              const TextContentDarkBg = (
                <div className={`absolute inset-0 p-6 pb-28 flex flex-col z-10 ${isLongQuote ? 'justify-start pt-20' : 'justify-center'}`}>
                  <p className={`${isLongQuote ? 'text-[17px] leading-[1.45]' : 'text-[22px] leading-[1.25]'} font-serif whitespace-pre-line`}>
                    <span className="text-white font-medium">"{first} </span>
                    <span className="text-white/80"> {rest}"</span>
                  </p>
                </div>
              );

              const TextContentLightBg = (
                <div className={`absolute inset-0 p-6 pb-28 flex flex-col z-10 ${isLongQuote ? 'justify-start pt-20' : 'justify-center'}`}>
                  <p className={`${isLongQuote ? 'text-[17px] leading-[1.45]' : 'text-[22px] leading-[1.25]'} font-serif whitespace-pre-line`}>
                    <span className="text-slate-900 dark:text-white font-medium">"{first} </span>
                    <span className="text-slate-600 dark:text-slate-300"> {rest}"</span>
                  </p>
                </div>
              );

              return (
                <div
                  key={idx}
                  className={`snap-start shrink-0 w-[300px] md:w-[340px] h-[400px] rounded-[24px] relative overflow-hidden group border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-zinc-900 hover:-translate-y-1 ${sourceUrl ? 'cursor-pointer' : ''}`}
                >
                  {sourceUrl && (
                    <a
                      href={sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read full testimonial from ${item.name}`}
                      className="absolute inset-0 z-30 rounded-[24px] focus:outline-none focus:ring-2 focus:ring-studio-primary/70 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
                    />
                  )}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-slate-900">
                      <img src={item.avatar} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />

                      {/* We override TopHeader/BottomFooter colors since bg is guaranteed dark */}
                      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10">
                        <div className="h-8 flex items-center justify-start">
                          {ForcedWhiteLogo}
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 shadow-sm flex items-center justify-center shrink-0">
                          <SourceIcon source={item.source} />
                        </div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)] z-10">
                        <Play className="w-6 h-6 text-black fill-black ml-1" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <div className="flex flex-col text-left mt-4">
                          <h4 className="text-white font-bold text-[15px] leading-tight">{item.name}</h4>
                          {metaLine && (
                            <p className="text-white/80 text-[11px] font-medium mt-0.5">{metaLine}</p>
                          )}
                          {item.location && (
                            <p className="text-white/50 text-[10px] mt-1.5 flex items-center gap-1 uppercase tracking-wider font-semibold">
                              <MapPin className="w-3 h-3 text-studio-primary" /> {item.location}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {item.type === 'image-text' && (
                    <div className="absolute inset-0 bg-slate-900">
                      <img src={item.avatar} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 blur-[1px]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />

                      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10">
                        <div className="h-8 flex items-center justify-start">
                          {ForcedWhiteLogo}
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 shadow-sm flex items-center justify-center shrink-0">
                          <SourceIcon source={item.source} />
                        </div>
                      </div>

                      {TextContentDarkBg}

                      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <div className="flex flex-col text-left mt-4">
                          <h4 className="text-white font-bold text-[15px] leading-tight">{item.name}</h4>
                          {metaLine && (
                            <p className="text-white/80 text-[11px] font-medium mt-0.5">{metaLine}</p>
                          )}
                          {item.location && (
                            <p className="text-white/50 text-[10px] mt-1.5 flex items-center gap-1 uppercase tracking-wider font-semibold">
                              <MapPin className="w-3 h-3 text-studio-primary" /> {item.location}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {item.type === 'text' && (
                    <div className="absolute inset-0 bg-white dark:bg-[#111111] hover:bg-slate-50 dark:hover:bg-[#161616] transition-colors">
                      {TopHeader}
                      {TextContentLightBg}
                      {BottomFooter}
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* Scroll Buttons */}
          <div className="absolute top-[45%] left-6 md:left-12 -translate-y-1/2 pointer-events-none z-20">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonial"
              className="flex h-14 w-14 transform-gpu items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-xl backdrop-blur-md transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:bg-white dark:border-white/10 dark:bg-black/80 dark:text-white dark:hover:bg-black pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-[45%] right-6 md:right-12 -translate-y-1/2 pointer-events-none z-20">
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonial"
              className="flex h-14 w-14 transform-gpu items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-xl backdrop-blur-md transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:bg-white dark:border-white/10 dark:bg-black/80 dark:text-white dark:hover:bg-black pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
