import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const StudioBackground: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-studio-paper dark:bg-studio-black transition-colors duration-500">
      {/* Dark Mode: Subtle Orange Radial Glows & Noise Texture */}
      <div className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-500">
        {/* Top Right Orange Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-studio-primary/8 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>

        {/* Center Left Orange Glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-studio-primary/6 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

        {/* Bottom Center Orange Glow */}
        <div className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-studio-primary/5 rounded-full blur-[140px] -translate-x-1/2 translate-y-1/2"></div>

        {/* Noise Texture Overlay for Depth */}
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>
    </div>
  );
};

export default StudioBackground;