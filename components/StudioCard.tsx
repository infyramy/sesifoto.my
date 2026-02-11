import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Star, Navigation, MessageCircle, ExternalLink, X } from 'lucide-react';
import { Studio } from '../data/studios';
import { useLanguage } from '../contexts/LanguageContext';

interface StudioCardProps {
    studio: Studio;
    activeId: string | null;
    onToggleAction: (id: string) => void;
}

const StudioCard: React.FC<StudioCardProps> = ({ studio, activeId, onToggleAction }) => {
    const { language } = useLanguage();
    const cardRef = useRef<HTMLDivElement>(null);

    // Check if this card has an active action
    const isAddressActive = activeId === `address-${studio.id}`;
    const isContactActive = activeId === `contact-${studio.id}`;

    const closeActions = () => onToggleAction('');

    // Close popup when clicking outside
    useEffect(() => {
        if (!isAddressActive && !isContactActive) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                closeActions();
            }
        };

        // Add a small delay to prevent the opening click from immediately closing the popup
        const timeoutId = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 50);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isAddressActive, isContactActive]);

    return (
        <>
            {/* Backdrop overlay when popup is active */}
            {(isAddressActive || isContactActive) && (
                <div
                    className="fixed inset-0 bg-black/10 dark:bg-black/30 z-[999] backdrop-blur-[1px]"
                    onClick={closeActions}
                />
            )}

            <div
                ref={cardRef}
                className={`group relative bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-orange-200 dark:hover:border-orange-900/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-visible h-full flex flex-col ${isAddressActive || isContactActive ? 'z-[1000]' : 'hover:z-50'}`}
            >
                {/* Card Content */}
                <div className="p-6 flex flex-col h-full">
                    {/* Studio Header */}
                    <div className="flex items-start gap-4 mb-4">
                        <div className="shrink-0 relative">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 dark:border-zinc-800 bg-white dark:bg-black shadow-sm group-hover:scale-105 transition-transform duration-300">
                                {studio.logo ? (
                                    <img
                                        src={studio.logo}
                                        alt={studio.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-slate-400 dark:text-slate-600">
                                        <Star size={24} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="min-w-0 flex-1 pt-1">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-tight truncate pr-1 mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                                {studio.name}
                            </h3>
                            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs">
                                <MapPin size={12} className="shrink-0 text-orange-500" />
                                <span className="truncate capitalize">{studio.state}, Malaysia</span>
                            </div>
                        </div>
                    </div>

                    {/* Info Text */}
                    <div className="mb-4 space-y-2 flex-1">
                        {studio.address && (
                            <div className="p-3 bg-slate-50 dark:bg-zinc-800/50 rounded-xl border border-slate-100 dark:border-white/5">
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                    <Navigation size={10} /> {language === 'en' ? 'Address' : 'Alamat'}
                                </p>
                                <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug line-clamp-2">
                                    {studio.address}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Actions Grid */}
                    <div className={`grid gap-2 mt-auto ${studio.address && studio.phone ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {/* Navigate Action */}
                        {studio.address && (
                            <div className="relative">
                                <button
                                    onClick={() => onToggleAction(`address-${studio.id}`)}
                                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all ${isAddressActive
                                        ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-lg scale-105 z-20'
                                        : 'bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-600 dark:text-slate-300'
                                        }`}
                                >
                                    <Navigation size={14} className={isAddressActive ? '' : 'text-blue-500'} />
                                    <span>{language === 'en' ? 'Navigate' : 'Navigasi'}</span>
                                </button>

                                {/* Navigate Popup */}
                                {isAddressActive && (
                                    <div className="absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-xl p-2 shadow-2xl z-[9999] animate-in slide-in-from-bottom-2 fade-in md:w-[180%] md:-ml-[40%] origin-bottom">
                                        <div className="flex items-center justify-between px-2 pb-2 mb-1 border-b border-slate-100 dark:border-white/5">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase">{language === 'en' ? 'Open In' : 'Buka Dalam'}</span>
                                            <button onClick={closeActions}><X size={12} className="text-slate-400 hover:text-red-500" /></button>
                                        </div>
                                        <div className="grid gap-1.5">
                                            <a href={`https://waze.com/ul?q=${encodeURIComponent(studio.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors group/waze">
                                                <div className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">W</div>
                                                <span>Waze</span>
                                                <ExternalLink size={10} className="ml-auto opacity-0 group-hover/waze:opacity-50" />
                                            </a>
                                            <a href={`https://maps.google.com/?q=${encodeURIComponent(studio.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors group/maps">
                                                <div className="w-6 h-6 rounded bg-green-100 text-green-600 flex items-center justify-center shrink-0">G</div>
                                                <span>Google Maps</span>
                                                <ExternalLink size={10} className="ml-auto opacity-0 group-hover/maps:opacity-50" />
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Contact Action */}
                        {studio.phone && (
                            <div className="relative">
                                <button
                                    onClick={() => onToggleAction(`contact-${studio.id}`)}
                                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all ${isContactActive
                                        ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-lg scale-105 z-20'
                                        : 'bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-600 dark:text-slate-300'
                                        }`}
                                >
                                    <Phone size={14} className={isContactActive ? '' : 'text-green-500'} />
                                    <span>{language === 'en' ? 'Contact' : 'Hubungi'}</span>
                                </button>

                                {/* Contact Popup */}
                                {isContactActive && (
                                    <div className="absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-xl p-2 shadow-2xl z-[9999] animate-in slide-in-from-bottom-2 fade-in md:w-[180%] md:-ml-[40%] origin-bottom">
                                        <div className="flex items-center justify-between px-2 pb-2 mb-1 border-b border-slate-100 dark:border-white/5">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase">{language === 'en' ? 'Connect via' : 'Hubungi Guna'}</span>
                                            <button onClick={closeActions}><X size={12} className="text-slate-400 hover:text-red-500" /></button>
                                        </div>
                                        <div className="grid gap-1.5">
                                            <a href={`https://wa.me/${studio.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors group/wa">
                                                <div className="w-6 h-6 rounded bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                    <MessageCircle size={14} />
                                                </div>
                                                <span>WhatsApp</span>
                                                <ExternalLink size={10} className="ml-auto opacity-0 group-hover/wa:opacity-50" />
                                            </a>
                                            <a href={`tel:${studio.phone}`} className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors group/call">
                                                <div className="w-6 h-6 rounded bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                                                    <Phone size={14} />
                                                </div>
                                                <span>Call Now</span>
                                                <span className="ml-auto text-[9px] font-mono opacity-50">{studio.phone}</span>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Primary CTA */}
                    <a
                        href={studio.bookingPageLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-3 flex items-center justify-center w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-orange-200/50 dark:shadow-orange-900/30 active:scale-95 ${isAddressActive || isContactActive ? 'opacity-50 pointer-events-none blur-sm' : ''
                            }`}
                    >
                        {language === 'en' ? 'Visit Booking Page' : 'Pergi Ke Halaman Tempahan'}
                    </a>
                </div>
            </div>
        </>
    );
};

export default StudioCard;
