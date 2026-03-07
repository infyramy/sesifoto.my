import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface StudioLogoProps {
    src?: string;
    name: string;
    link: string;
    wrapperClassName?: string;
    imgClassName?: string;
}

const StudioLogo: React.FC<StudioLogoProps> = ({ src, name, link, wrapperClassName = '', imgClassName = '' }) => {
    const anchorRef = useRef<HTMLAnchorElement | null>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isBubbleOpen, setIsBubbleOpen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');
        const updateDeviceType = () => {
            const touchLike = mediaQuery.matches || navigator.maxTouchPoints > 0;
            setIsTouchDevice(touchLike);
            if (!touchLike) setIsBubbleOpen(false);
        };

        updateDeviceType();
        mediaQuery.addEventListener('change', updateDeviceType);

        return () => {
            mediaQuery.removeEventListener('change', updateDeviceType);
        };
    }, []);

    useEffect(() => {
        if (!isTouchDevice || !isBubbleOpen) return;

        const handleOutsideTap = (event: PointerEvent) => {
            if (anchorRef.current && !anchorRef.current.contains(event.target as Node)) {
                setIsBubbleOpen(false);
            }
        };

        document.addEventListener('pointerdown', handleOutsideTap);
        return () => {
            document.removeEventListener('pointerdown', handleOutsideTap);
        };
    }, [isTouchDevice, isBubbleOpen]);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isTouchDevice) return;

        if (!isBubbleOpen) {
            event.preventDefault();
            setIsBubbleOpen(true);
            return;
        }

        setIsBubbleOpen(false);
    };

    return (
        <a
            ref={anchorRef}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={`group/logo relative isolate z-10 hover:z-[999] flex flex-col items-center justify-center p-2 min-w-[100px] md:min-w-[130px] w-[100px] md:w-[130px] h-12 md:h-16 ${wrapperClassName}`}
        >
            {/* Tooltip */}
            <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 px-4 py-2 bg-slate-900/90 dark:bg-white/90 backdrop-blur-sm text-white dark:text-slate-900 text-xs rounded-xl transition-all duration-200 transform pointer-events-none whitespace-nowrap shadow-xl flex flex-col items-center gap-0.5 z-[1000] border border-white/10 dark:border-slate-200/50 ${isBubbleOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 group-hover/logo:opacity-100 group-hover/logo:translate-y-0'}`}>
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
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    className={`max-h-12 md:max-h-16 w-full object-contain grayscale brightness-0 opacity-40 dark:invert dark:opacity-50 group-hover/logo:opacity-100 dark:group-hover/logo:opacity-100 transition-all duration-300 flex-shrink-0 ${imgClassName}`}
                />
            )}
        </a>
    );
};

export default StudioLogo;
