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
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;