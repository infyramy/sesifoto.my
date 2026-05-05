import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-3xl
        bg-white/60 dark:bg-studio-card backdrop-blur-2xl
        border border-studio-border-light dark:border-studio-border shadow-xl
        ring-1 ring-studio-border-light/50 dark:ring-studio-border
        ${hoverEffect ? 'transition-all duration-500 hover:bg-white dark:hover:bg-studio-base hover:border-studio-border-light dark:hover:border-studio-border-light-dark hover:shadow-[0_0_30px_-5px_rgba(255,107,44,0.2)] group' : ''}
        ${className}
      `}
    >
      {/* Subtle top shine for 3D glass effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

      {/* Subtle Noise Texture for Glass Effect — inline SVG, no external request */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none md:mix-blend-overlay mix-blend-normal transform-gpu" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '128px 128px' }}></div>

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;