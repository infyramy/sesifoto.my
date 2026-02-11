import React, { useState, useEffect, useRef } from 'react';
import { Studio } from '../data/studios';

interface MalaysiaMapProps {
    onStateSelect: (state: string | null) => void;
    selectedState: string | null;
    studios: Studio[];
}

// Maps SVG element IDs from my.svg to our internal state keys
const STATE_ID_MAP: Record<string, string> = {
    'MY01': 'johor',
    'MY02': 'kedah',
    'MY03': 'kelantan',
    'MY04': 'melaka',
    'MY05': 'negeri-sembilan',
    'MY06': 'pahang',
    'MY07': 'pulau-pinang',
    'MY08': 'perak',
    'MY09': 'perlis',
    'MY10': 'selangor',
    'MY11': 'terengganu',
    'MY12': 'sabah',
    'MY13': 'sarawak',
    'MY14': 'kuala-lumpur',
    'MY15': 'labuan',
    'MY16': 'putrajaya',
};

// Reverse map for lookup
const REVERSE_STATE_MAP: Record<string, string> = Object.fromEntries(
    Object.entries(STATE_ID_MAP).map(([k, v]) => [v, k])
);

// Display names from the SVG
const STATE_NAMES: Record<string, string> = {
    'johor': 'Johor',
    'kedah': 'Kedah',
    'kelantan': 'Kelantan',
    'melaka': 'Melaka',
    'negeri-sembilan': 'Negeri Sembilan',
    'pahang': 'Pahang',
    'pulau-pinang': 'Pulau Pinang',
    'perak': 'Perak',
    'perlis': 'Perlis',
    'selangor': 'Selangor',
    'terengganu': 'Terengganu',
    'sabah': 'Sabah',
    'sarawak': 'Sarawak',
    'kuala-lumpur': 'Kuala Lumpur',
    'labuan': 'Labuan',
    'putrajaya': 'Putrajaya',
};

// Label positions extracted directly from the SVG's label_points group
const LABEL_POSITIONS: Record<string, { cx: number; cy: number }> = {
    'MY01': { cx: 219.2, cy: 262.2 },
    'MY02': { cx: 93.7, cy: 80.9 },
    'MY03': { cx: 156.5, cy: 118.5 },
    'MY04': { cx: 170.3, cy: 249.2 },
    'MY05': { cx: 164.6, cy: 226.1 },
    'MY06': { cx: 174.6, cy: 183.5 },
    'MY07': { cx: 83.1, cy: 106.1 },
    'MY08': { cx: 108.6, cy: 128.6 },
    'MY09': { cx: 73.4, cy: 55.2 },
    'MY10': { cx: 131.5, cy: 198.2 },
    'MY11': { cx: 196.7, cy: 122 },
    'MY12': { cx: 839.8, cy: 111.7 },
    'MY13': { cx: 698.6, cy: 239.9 },
    'MY14': { cx: 140.3, cy: 210.9 },
    'MY15': { cx: 766.6, cy: 109.9 },
    'MY16': { cx: 140.6, cy: 220.8 },
};

const MalaysiaMap: React.FC<MalaysiaMapProps> = ({ onStateSelect, selectedState, studios }) => {
    const [hoveredState, setHoveredState] = useState<string | null>(null);
    const [svgPaths, setSvgPaths] = useState<{ id: string; d: string }[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Count studios by state
    const getStudioCount = (stateKey: string) => {
        return studios.filter(studio => studio.state === stateKey).length;
    };

    // Load the real SVG file and extract paths
    useEffect(() => {
        fetch('/img/my.svg')
            .then(res => res.text())
            .then(svgText => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(svgText, 'image/svg+xml');
                const featuresGroup = doc.getElementById('features');
                if (!featuresGroup) return;

                const paths: { id: string; d: string }[] = [];
                const pathElements = featuresGroup.querySelectorAll('path');
                pathElements.forEach(pathEl => {
                    const id = pathEl.getAttribute('id');
                    const d = pathEl.getAttribute('d');
                    if (id && d) {
                        paths.push({ id, d });
                    }
                });
                setSvgPaths(paths);
            })
            .catch(err => console.error('Failed to load map SVG:', err));
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const getStateKey = (svgId: string) => STATE_ID_MAP[svgId] || svgId;

    const getPathStyle = (svgId: string): React.CSSProperties => {
        const stateKey = getStateKey(svgId);
        const isActive = selectedState === stateKey;
        const isHovered = hoveredState === stateKey;

        if (isActive) {
            return {
                fill: '#f97316',
                stroke: '#fff',
                strokeWidth: 1.5,
                filter: 'drop-shadow(0 2px 4px rgba(249, 115, 22, 0.4))',
                transition: 'fill 0.2s ease, stroke-width 0.2s ease, filter 0.2s ease',
                cursor: 'pointer',
            };
        }
        if (isHovered) {
            return {
                fill: '#fb923c',
                stroke: '#fff',
                strokeWidth: 1,
                filter: 'drop-shadow(0 1px 3px rgba(249, 115, 22, 0.25))',
                transition: 'fill 0.2s ease, stroke-width 0.2s ease, filter 0.2s ease',
                cursor: 'pointer',
            };
        }
        return {
            fill: '',
            stroke: '#ffffff',
            strokeWidth: 0.5,
            transition: 'fill 0.2s ease, stroke-width 0.2s ease, filter 0.2s ease',
            cursor: 'pointer',
        };
    };

    const getPathClass = (svgId: string) => {
        const stateKey = getStateKey(svgId);
        const isActive = selectedState === stateKey;
        const isHovered = hoveredState === stateKey;
        if (isActive || isHovered) return '';
        return 'fill-slate-200 dark:fill-zinc-800 hover:fill-orange-300 dark:hover:fill-zinc-600';
    };

    const displayName = selectedState
        ? STATE_NAMES[selectedState] || selectedState
        : 'All Malaysia';

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="w-full relative bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900/50 dark:to-black rounded-2xl md:rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden p-3 md:p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none"
            style={{ minHeight: 'auto' }}
        >
            {/* Header */}
            <div className="relative text-center md:text-right md:absolute md:top-8 md:right-8 z-20 pointer-events-none mb-2 md:mb-0">
                <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-0.5 md:mb-1">
                    Explore By State
                </h3>
                <h2 className="text-lg md:text-3xl font-serif font-bold text-slate-900 dark:text-white">
                    {displayName}
                </h2>
            </div>

            {/* Clear Filter */}
            {selectedState && (
                <button
                    onClick={(e) => { e.stopPropagation(); onStateSelect(null); }}
                    className="absolute bottom-3 left-3 md:bottom-8 md:left-8 z-30 bg-orange-50/80 dark:bg-orange-900/30 backdrop-blur-md border border-orange-500/20 text-[10px] md:text-xs font-bold text-orange-600 dark:text-orange-400 px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-lg"
                >
                    Clear Filter
                </button>
            )}

            {/* Map */}
            <div className="w-full mt-0 md:mt-4">
                {svgPaths.length > 0 ? (
                    <svg
                        viewBox="10 30 920 290"
                        className="w-full h-auto"
                        onClick={() => onStateSelect(null)}
                    >
                        <g>
                            {svgPaths.map(({ id, d }) => (
                                <path
                                    key={id}
                                    d={d}
                                    className={getPathClass(id)}
                                    style={getPathStyle(id)}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const stateKey = getStateKey(id);
                                        onStateSelect(selectedState === stateKey ? null : stateKey);
                                    }}
                                    onMouseEnter={() => setHoveredState(getStateKey(id))}
                                    onMouseLeave={() => setHoveredState(null)}
                                    onTouchStart={(e) => {
                                        e.stopPropagation();
                                        const stateKey = getStateKey(id);
                                        setHoveredState(stateKey);
                                        onStateSelect(selectedState === stateKey ? null : stateKey);
                                    }}
                                />
                            ))}
                        </g>

                        {/* Labels from exact SVG label_points */}
                        <g>
                            {Object.entries(LABEL_POSITIONS).map(([svgId, pos]) => {
                                const stateKey = getStateKey(svgId);
                                const isVisible = selectedState === stateKey || hoveredState === stateKey;
                                return (
                                    <g key={`label-${svgId}`} className="pointer-events-none">
                                        {isVisible && (
                                            <circle
                                                cx={pos.cx}
                                                cy={pos.cy}
                                                r="4"
                                                fill="#f97316"
                                                className="animate-pulse"
                                            />
                                        )}
                                        <text
                                            x={pos.cx}
                                            y={pos.cy - 8}
                                            textAnchor="middle"
                                            dominantBaseline="auto"
                                            className={`text-[7px] font-bold transition-all duration-300 ${isVisible
                                                ? 'fill-orange-600 dark:fill-orange-400 opacity-100'
                                                : 'fill-slate-400 dark:fill-zinc-500 opacity-40'
                                                }`}
                                        >
                                            {STATE_NAMES[stateKey]}
                                        </text>
                                    </g>
                                );
                            })}
                        </g>
                    </svg>
                ) : (
                    <div className="flex items-center justify-center h-48 text-slate-400 text-sm">
                        Loading map...
                    </div>
                )}
            </div>

            {/* Tooltip - Fixed Top Left */}
            <div className={`absolute top-3 left-3 z-50 pointer-events-none transition-all duration-300 ease-out hidden md:block ${hoveredState
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-2 scale-95'
                }`}>
                {hoveredState && (
                    <div className="bg-zinc-900/95 backdrop-blur-md text-white rounded-xl shadow-2xl border border-white/20 overflow-hidden">
                        <div className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🇲🇾</span>
                                <span className="font-bold text-sm">{STATE_NAMES[hoveredState] || hoveredState}</span>
                            </div>
                        </div>
                        <div className="px-4 py-2">
                            <div className="flex items-center gap-2 text-xs">
                                <span className="text-orange-400">📸</span>
                                <span className="text-slate-300">{getStudioCount(hoveredState)} {getStudioCount(hoveredState) === 1 ? 'Studio' : 'Studios'}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MalaysiaMap;
