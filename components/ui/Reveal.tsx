import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = 'fit-content',
  delay = 0,
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [disableMotion, setDisableMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateMotionMode = () => {
      const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
      const saveData = Boolean(connection?.saveData);
      const effectiveType = connection?.effectiveType ?? '';
      const slowConnection = effectiveType === '2g' || effectiveType === 'slow-2g' || effectiveType === '3g';
      setDisableMotion(reducedMotionQuery.matches || saveData || slowConnection);
    };

    updateMotionMode();
    reducedMotionQuery.addEventListener?.('change', updateMotionMode);

    return () => {
      reducedMotionQuery.removeEventListener?.('change', updateMotionMode);
    };
  }, []);

  useEffect(() => {
    if (disableMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [disableMotion]);

  return (
    <div
      ref={ref}
      style={{ width, transitionDelay: `${delay}ms` }}
      className={`
        ${disableMotion ? 'transition-opacity duration-200' : 'transform transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] will-change-[opacity,transform]'}
        ${isVisible ? 'opacity-100 translate-y-0' : (disableMotion ? 'opacity-0' : 'opacity-0 translate-y-8')}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Reveal;
