import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Play, Twitter, Instagram, Facebook, MessageCircle, AtSign, Quote, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SourceIcon = ({ source }: { source: string }) => {
  switch (source) {
    case 'x': return <Twitter className="h-3.5 w-3.5 text-white" />;
    case 'instagram': return <Instagram className="h-3.5 w-3.5 text-white" />;
    case 'facebook': return <Facebook className="h-3.5 w-3.5 text-white" />;
    case 'threads': return <AtSign className="h-3.5 w-3.5 text-white" />;
    default: return <MessageCircle className="h-3.5 w-3.5 text-white" />;
  }
};

const Testimonials: React.FC = () => {
  const { t, isChanging } = useLanguage();
  const testimonials = t.testimonials.items;
  const total = testimonials.length;

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const loopRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const clickBlockedRef = useRef(false);
  const dragRef = useRef({ active: false, lastX: 0, travel: 0, pointerId: -1 });
  const [isDragging, setIsDragging] = useState(false);

  type TestimonialItem = typeof testimonials[number];

  const setMarqueeOffset = useCallback((nextOffset: number) => {
    const loopWidth = loopWidthRef.current;
    const wrappedOffset = loopWidth > 0
      ? ((nextOffset % loopWidth) + loopWidth) % loopWidth
      : nextOffset;

    offsetRef.current = wrappedOffset;
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(-${wrappedOffset}px, 0, 0)`;
    }
  }, []);

  useEffect(() => {
    const updateLoopWidth = () => {
      if (!loopRef.current) return;
      loopWidthRef.current = loopRef.current.scrollWidth;
      setMarqueeOffset(offsetRef.current);
    };

    updateLoopWidth();
    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(updateLoopWidth)
      : null;

    if (loopRef.current && resizeObserver) {
      resizeObserver.observe(loopRef.current);
    }

    window.addEventListener('resize', updateLoopWidth);
    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateLoopWidth);
    };
  }, [setMarqueeOffset, total]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const speed = 26;
    const step = (timestamp: number) => {
      const previous = lastFrameRef.current ?? timestamp;
      const delta = Math.min(timestamp - previous, 64);
      lastFrameRef.current = timestamp;

      if (!dragRef.current.active && loopWidthRef.current > 0) {
        setMarqueeOffset(offsetRef.current + (speed * delta) / 1000);
      }

      rafRef.current = window.requestAnimationFrame(step);
    };

    rafRef.current = window.requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastFrameRef.current = null;
    };
  }, [setMarqueeOffset]);

  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (total <= 1) return;
    dragRef.current = {
      active: true,
      lastX: event.clientX,
      travel: 0,
      pointerId: event.pointerId,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const delta = event.clientX - dragRef.current.lastX;
    dragRef.current.lastX = event.clientX;
    dragRef.current.travel += Math.abs(delta);

    if (dragRef.current.travel > 6) {
      clickBlockedRef.current = true;
    }

    setMarqueeOffset(offsetRef.current - delta);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;

    const shouldBlockClick = dragRef.current.travel > 6;
    dragRef.current.active = false;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(dragRef.current.pointerId)) {
      event.currentTarget.releasePointerCapture(dragRef.current.pointerId);
    }

    if (shouldBlockClick) {
      clickBlockedRef.current = true;
      window.setTimeout(() => {
        clickBlockedRef.current = false;
      }, 160);
    }
  };

  const preventDraggedClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!clickBlockedRef.current) return;
    event.preventDefault();
    event.stopPropagation();
  };

  const formatContent = (content: string) => {
    const clean = content.replace(/^\"|\"$/g, '');
    const words = clean.split(' ');
    if (words.length <= 4) return { first: clean, rest: '' };
    return { first: words.slice(0, 4).join(' '), rest: words.slice(4).join(' ') };
  };

  const renderCard = (item: TestimonialItem, idx: number, isDuplicate = false) => {
    const meta = item as typeof item & {
      highlight?: string;
      excerpt?: string;
      sourceUrl?: string;
      logoText?: string;
    };
    const displayContent = meta.highlight || meta.excerpt || meta.content;
    const { first, rest } = formatContent(displayContent);
    const sourceUrl = meta.sourceUrl;
    const metaLine = [item.role, item.company].filter(Boolean).join(', ');

    const forcedLogoClass = item.invertMode === 'dark'
      ? 'brightness-0 invert contrast-125 opacity-100'
      : item.invertMode === 'light'
        ? 'brightness-0 opacity-90'
        : 'opacity-90';

    const Logo = meta.logoText ? (
      <div className="testimonial-client-logo flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-studio-primary text-center text-[7px] font-black leading-[0.8] text-white shadow-[0_8px_20px_-10px_rgba(255,107,44,0.9)]">
        <span>{meta.logoText.split(' ').map((word) => <React.Fragment key={word}>{word}<br /></React.Fragment>)}</span>
      </div>
    ) : (
      <img
        src={item.clientLogo}
        alt={item.company}
        width={96}
        height={32}
        loading="lazy"
        decoding="async"
        className={`testimonial-client-logo h-8 w-auto shrink-0 object-contain transition-transform duration-500 group-hover:scale-[1.03] ${forcedLogoClass}`}
      />
    );

    const TransparentLogo = meta.logoText ? Logo : (
      <img
        src={item.clientLogo}
        alt={item.company}
        width={96}
        height={32}
        loading="lazy"
        decoding="async"
        className={`testimonial-client-logo h-8 w-auto shrink-0 object-contain opacity-80 mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03] dark:mix-blend-normal ${item.invertMode === 'light' ? 'invert dark:invert-0' : item.invertMode === 'dark' ? 'dark:invert' : ''}`}
      />
    );

    const SourceBadge = sourceUrl ? (
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open testimonial source from ${item.name}`}
        tabIndex={isDuplicate ? -1 : undefined}
        onClick={preventDraggedClick}
        className="testimonial-source-badge testimonial-source-link relative z-40 flex h-9 items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 text-white shadow-[0_12px_30px_-16px_rgba(0,0,0,0.9)] backdrop-blur-md transition-colors hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-studio-primary/80 focus:ring-offset-2 focus:ring-offset-black"
      >
        <SourceIcon source={item.source} />
        <ArrowUpRight className="testimonial-link-arrow h-3.5 w-3.5 text-white/90" />
      </a>
    ) : (
      <div className="testimonial-source-badge relative z-40 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/55 shadow-[0_12px_30px_-16px_rgba(0,0,0,0.9)] backdrop-blur-md">
        <SourceIcon source={item.source} />
      </div>
    );

    const TestimonyText = ({ tone = 'dark' }: { tone?: 'dark' | 'light' }) => (
      <p
        className={`max-w-[92%] font-serif text-[17px] leading-[1.36] ${tone === 'dark' ? 'text-white' : 'text-slate-900 dark:text-white'}`}
        style={tone === 'dark' ? { textShadow: '0 3px 24px rgba(0,0,0,0.78)' } : undefined}
      >
        <span className="font-medium">"{first} </span>
        <span className={tone === 'dark' ? 'text-white/86' : 'text-slate-500 dark:text-slate-300'}>{rest}"</span>
      </p>
    );

    const ImageLogoFrame = (
      <div className="relative flex min-h-10 items-center rounded-2xl border border-white/12 bg-black/35 px-3 py-1.5 shadow-[0_0_34px_-12px_rgba(255,107,44,0.95)] backdrop-blur-md">
        <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-[radial-gradient(circle_at_top_left,rgba(255,107,44,0.36)_0%,rgba(255,107,44,0.13)_34%,rgba(255,107,44,0)_70%)]" />
        <div className="relative flex h-8 items-center">{Logo}</div>
      </div>
    );

    const darkFooter = (
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0 text-left">
            <h4 className="truncate text-[15px] font-bold leading-tight text-white">{item.name}</h4>
            {metaLine && <p className="mt-0.5 truncate text-[11px] text-white/70">{metaLine}</p>}
          </div>
          {item.location && (
            <p className="ml-auto flex max-w-[42%] shrink-0 items-center justify-end gap-1 text-right text-[10px] font-semibold uppercase tracking-wider text-white/60">
              <MapPin className="h-3 w-3 shrink-0 text-studio-primary" />
              <span className="truncate">{item.location}</span>
            </p>
          )}
        </div>
      </div>
    );

    const darkTestimonyFooter = (
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        <TestimonyText />
        <div className="mt-4 flex items-end justify-between gap-4">
          <div className="min-w-0 text-left">
            <h4 className="truncate text-[15px] font-bold leading-tight text-white">{item.name}</h4>
            {metaLine && <p className="mt-0.5 truncate text-[11px] text-white/70">{metaLine}</p>}
          </div>
          {item.location && (
            <p className="ml-auto flex max-w-[42%] shrink-0 items-center justify-end gap-1 text-right text-[10px] font-semibold uppercase tracking-wider text-white/60">
              <MapPin className="h-3 w-3 shrink-0 text-studio-primary" />
              <span className="truncate">{item.location}</span>
            </p>
          )}
        </div>
      </div>
    );

    const lightNameFooter = (
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-white via-white/80 to-transparent p-5 dark:from-[#111] dark:via-[#111]/80">
        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0 text-left">
            <h4 className="truncate text-[15px] font-bold leading-tight text-slate-900 dark:text-white">{item.name}</h4>
            {metaLine && <p className="mt-0.5 truncate text-[11px] text-slate-500 dark:text-slate-400">{metaLine}</p>}
          </div>
          {item.location && (
            <p className="ml-auto flex max-w-[42%] shrink-0 items-center justify-end gap-1 text-right text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              <MapPin className="h-3 w-3 shrink-0 text-studio-primary" />
              <span className="truncate">{item.location}</span>
            </p>
          )}
        </div>
      </div>
    );

    const textOnlyQuote = (
      <div className="absolute inset-0 z-10 flex items-center px-5 pb-24 pt-20 text-left">
        <p className="font-serif text-[21px] leading-[1.28] text-slate-900 dark:text-white">
          <span className="font-medium">"{first} </span>
          <span className="text-slate-500 dark:text-slate-300">{rest}"</span>
        </p>
      </div>
    );

    return (
      <article
        key={idx}
        className={`testimonial-card group relative h-[420px] w-[min(calc(100vw-24px),340px)] shrink-0 select-none overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-white/5 dark:bg-zinc-900 md:w-[340px] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {item.type === 'video' && (
          <div className="absolute inset-0 bg-slate-900">
            <img
              src={item.avatar}
              alt={item.name}
              width={720}
              height={450}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_82%,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.48)_28%,rgba(0,0,0,0)_62%)]" />
            <div className="absolute left-0 right-0 top-0 z-10 flex items-start justify-between p-5">
              <div className="flex h-8 items-center">{Logo}</div>
              {SourceBadge}
            </div>
            <div className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <Play className="ml-0.5 h-5 w-5 fill-black text-black" />
            </div>
            {darkFooter}
          </div>
        )}

        {item.type === 'image-text' && (
          <div className="absolute inset-0 bg-slate-900">
            <img
              src={item.avatar}
              alt={item.name}
              width={720}
              height={450}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.44)_24%,rgba(0,0,0,0.10)_55%,rgba(0,0,0,0)_72%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_88%,rgba(0,0,0,0.54)_0%,rgba(0,0,0,0.22)_32%,rgba(0,0,0,0)_58%)]" />
            <div className="absolute left-0 right-0 top-0 z-10 flex items-start justify-between p-5">
              {ImageLogoFrame}
              {SourceBadge}
            </div>
            {darkTestimonyFooter}
          </div>
        )}

        {item.type === 'text' && (
          <div className="absolute inset-0 bg-white transition-colors hover:bg-slate-50 dark:bg-[#111111] dark:hover:bg-[#161616]">
            <div className="absolute left-0 right-0 top-0 z-10 flex items-start justify-between p-5">
              <div className="flex h-8 items-center">{TransparentLogo}</div>
              {SourceBadge}
            </div>
            {textOnlyQuote}
            {lightNameFooter}
          </div>
        )}
      </article>
    );
  };

  return (
    <section id="testimonials" className="relative w-full overflow-hidden bg-transparent py-16 md:py-20">

      <div className={`relative z-10 mx-auto max-w-6xl transition-opacity duration-500 ${isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>
        <div className="mb-10 flex flex-col items-center px-6 text-center md:mb-14">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-studio-primary/20 bg-studio-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-studio-primary shadow-sm backdrop-blur-md dark:border-studio-primary/30 dark:bg-studio-primary/20">
              <Quote className="h-3.5 w-3.5 fill-current" />
              <span>{t.testimonials.subtitle || 'Testimonial'}</span>
            </div>

            <h2 className="font-serif text-[1.55rem] font-medium leading-tight text-slate-900 dark:text-white sm:text-3xl md:text-5xl">
              {t.testimonials.title}
            </h2>
            {t.testimonials.description && (
              <p className="mx-auto mt-4 max-w-[calc(100vw-2rem)] overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-6 text-slate-500 dark:text-slate-400 md:max-w-2xl md:text-base">
                {t.testimonials.description}
              </p>
            )}
          </div>
        </div>

        <div className="px-3 md:px-6">
          <div
            ref={viewportRef}
            className={`hide-scrollbar overflow-hidden py-2 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            aria-label="Customer testimonials"
            onPointerDown={startDrag}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
          >
            <div ref={trackRef} className="testimonial-marquee-track flex w-max gap-4 will-change-transform">
              <div ref={loopRef} className="flex gap-4 pr-4">
                {testimonials.map((item, idx) => renderCard(item, idx))}
              </div>
              <div className="flex gap-4 pr-4" aria-hidden="true">
                {testimonials.map((item, idx) => renderCard(item, idx + total, true))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .testimonial-marquee-track { transform: translate3d(0, 0, 0); }
        .testimonial-source-badge {
          animation: testimonialSourceBadge 2.8s ease-in-out infinite;
        }
        .testimonial-source-link .testimonial-link-arrow {
          animation: testimonialArrowNudge 1.55s ease-in-out infinite;
        }
        @keyframes testimonialSourceBadge {
          0%, 100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 12px 30px -16px rgba(0,0,0,0.9), 0 0 0 0 rgba(255,107,44,0);
          }
          50% {
            transform: translateY(-1px) scale(1.035);
            box-shadow: 0 16px 34px -16px rgba(0,0,0,0.9), 0 0 0 6px rgba(255,107,44,0.08);
          }
        }
        @keyframes testimonialArrowNudge {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(2px, -2px, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .testimonial-source-badge,
          .testimonial-source-link .testimonial-link-arrow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
