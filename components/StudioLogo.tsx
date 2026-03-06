import React from 'react';
import { ExternalLink } from 'lucide-react';

interface StudioLogoProps {
    src?: string;
    name: string;
    link: string;
}

const StudioLogo: React.FC<StudioLogoProps> = ({ src, name, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/logo relative flex flex-col items-center justify-center p-2 min-w-[100px] md:min-w-[130px] w-[100px] md:w-[130px] h-12 md:h-16"
        >
            {/* Tooltip */}
            <div className="absolute top-full mt-3 px-4 py-2 bg-slate-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-slate-900 text-xs rounded-xl opacity-0 group-hover/logo:opacity-100 transition-all duration-200 transform -translate-y-2 group-hover/logo:translate-y-0 pointer-events-none whitespace-nowrap shadow-xl flex flex-col items-center gap-0.5 z-50 border border-white/10 dark:border-slate-200/50">
                {/* Arrow */}
                <div className="absolute -top-1 w-2 h-2 bg-slate-900/90 dark:bg-white/90 rotate-45 border-t border-l border-white/10 dark:border-slate-200/50"></div>
                <span className="font-bold tracking-wide">{name}</span>
                <span className="flex items-center gap-1 text-[10px] opacity-80 font-medium">
                    Visit Page <ExternalLink size={10} strokeWidth={2.5} />
                </span>
            </div>

            {src && (
                <img
                    src={src}
                    alt={name}
                    className="max-h-12 md:max-h-16 w-full object-contain grayscale brightness-0 opacity-40 dark:invert dark:opacity-50 group-hover/logo:opacity-100 dark:group-hover/logo:opacity-100 transition-all duration-300 flex-shrink-0"
                />
            )}
        </a>
    );
};

export default StudioLogo;
