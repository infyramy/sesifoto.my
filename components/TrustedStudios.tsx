import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
// @ts-ignore
import StudioRayaLogo from '../img/_studioraya2025__1080_x_1350_px_-removebg-preview.png';
// @ts-ignore
import VisaLogo from '../img/vd-t.png';

interface Studio {
  id: string;
  name: string; // The text to show on hover (Full Name)
  shortName: string; // The text to show by default if no logo
  logo?: string; // Optional logo path
  url: string;
  invert?: boolean; // For white logos that need inversion in light mode
  darkInvert?: boolean; // For black logos that need inversion in dark mode
}

const studios: Studio[] = [
  {
    id: 'sedetik',
    name: 'Sedetik Studio',
    shortName: 'Sedetik',
    logo: StudioRayaLogo,
    url: 'https://www.instagram.com/sedetik.studio/',
    invert: true, // It's white, needs invert on light mode
  },
  {
    id: 'visualdiaries',
    name: 'Visual Diaries Photography',
    shortName: 'Visual Diaries',
    logo: VisaLogo,
    url: 'https://www.instagram.com/the_visualdiaries/',
    darkInvert: true, // It's black, needs invert on dark mode
  },
  {
    id: 'rangka',
    name: 'Rangka Studio',
    shortName: 'Rangka Studio',
    url: 'https://www.instagram.com/rangkastudio',
    // No logo, will use text
  }
];

const StudioLink: React.FC<{ studio: Studio }> = ({ studio }) => {
  return (
    <a
      href={studio.url}
      target="_blank"
      rel="noreferrer"
      className="group relative flex items-center justify-center p-4 w-[200px] h-[80px] transition-all duration-300"
    >
      {/* Default State: Logo or Short Name */}
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm opacity-60 grayscale group-hover:grayscale-0">
        {studio.logo ? (
          <img
            src={studio.logo}
            alt={studio.name}
            className={`
              h-16 w-auto object-contain
              ${studio.invert ? 'invert dark:invert-0' : ''}
              ${studio.darkInvert ? 'dark:invert' : ''}
            `}
          />
        ) : (
          <span className="text-2xl font-serif font-bold text-slate-600 dark:text-slate-400">
            {studio.shortName}
          </span>
        )}
      </div>

      {/* Hover State: Full Name */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
        <span className="text-center font-bold text-sm md:text-base text-studio-primary dark:text-white leading-tight">
          {studio.name}
        </span>
      </div>
    </a>
  );
};

const TrustedStudios: React.FC = () => {
  const { t, isChanging } = useLanguage();

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Positioned in the blur transition area between sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-studio-paper via-studio-paper/95 to-studio-paper dark:from-studio-black dark:via-studio-black/95 dark:to-studio-black pointer-events-none"></div>

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-studio-primary/3 dark:bg-studio-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className={`max-w-7xl mx-auto px-6 relative z-10 transition-all duration-500 ${isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>
        <div className="border-t border-b border-slate-200/60 dark:border-white/5 py-10 bg-white/40 dark:bg-black/20 backdrop-blur-md rounded-2xl">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase mb-8">
            {t.hero.trustedLabel}
          </p>

          {/* Desktop & Mobile Unified View (Centered Flex) */}
          {/* Since we have few items, a centered flex works well for both, wrapping on small screens */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {studios.map((studio) => (
              <StudioLink key={studio.id} studio={studio} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedStudios;
