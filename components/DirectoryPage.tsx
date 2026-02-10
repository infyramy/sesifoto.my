import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StudioBackground from './StudioBackground';
import Reveal from './ui/Reveal';
import MalaysiaMap from './MalaysiaMap';
import StudioCard from './StudioCard';
import { STUDIOS_DATA } from '../data/studios';
import { MapPin, Search } from 'lucide-react';

import { useLanguage } from '../contexts/LanguageContext';

const DirectoryPage: React.FC = () => {
    const { language, t } = useLanguage();
    const [selectedState, setSelectedState] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [activeCardId, setActiveCardId] = useState<string | null>(null);

    const handleCardAction = (id: string) => {
        setActiveCardId(prev => prev === id ? null : id);
    };

    const filteredStudios = STUDIOS_DATA.filter(studio => {
        const matchesState = selectedState ? studio.state === selectedState : true;
        const matchesSearch = searchQuery.trim() === '' ? true :
            studio.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            studio.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
            studio.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
            studio.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesState && matchesSearch;
    });

    return (
        <div className="min-h-screen overflow-x-hidden font-sans bg-slate-50 dark:bg-black">
            <StudioBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-grow container mx-auto px-4 py-24 md:py-32">

                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <Reveal width="100%">
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-400">
                                {language === 'en' ? 'Find A Photographer' : 'Cari Jurugambar'}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                                {language === 'en' ? 'Studio Directory' : 'Direktori Studio'}
                            </h1>
                        </Reveal>
                        <Reveal width="100%" delay={100}>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                {language === 'en'
                                    ? 'Discover talented photographers across Malaysia. Select a state on the map to find studios near you.'
                                    : 'Temui jurugambar berbakat di seluruh Malaysia. Pilih negeri di peta untuk mencari studio berdekatan anda.'}
                            </p>
                        </Reveal>
                    </div>

                    {/* Interactive Map Section */}
                    <Reveal width="100%" delay={200}>
                        <div className="mb-16">
                            <MalaysiaMap
                                selectedState={selectedState}
                                onStateSelect={setSelectedState}
                                studios={STUDIOS_DATA}
                            />
                        </div>
                    </Reveal>

                    {/* Search Bar */}
                    <div className="mb-8">
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={language === 'en' ? "Search studios by name, location, or tags..." : "Cari studio mengikut nama, lokasi, atau tag..."}
                                className="w-full pl-12 pr-4 py-4 text-sm bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 dark:focus:border-orange-500 transition-all placeholder:text-slate-400 text-slate-900 dark:text-white shadow-sm"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-medium"
                                >
                                    {language === 'en' ? 'Clear' : 'Padam'}
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Results Section */}
                    <div id="studios-grid">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <MapPin className="text-orange-600" />
                                {selectedState
                                    ? (language === 'en' ? `Studios in ${selectedState.charAt(0).toUpperCase() + selectedState.slice(1)}` : `Studio di ${selectedState.charAt(0).toUpperCase() + selectedState.slice(1)}`)
                                    : (language === 'en' ? 'All Studios' : 'Semua Studio')}
                                <span className="ml-2 text-sm font-medium text-slate-400 bg-slate-100 dark:bg-white/10 px-2 py-1 rounded-full">
                                    {filteredStudios.length}
                                </span>
                            </h2>
                        </div>

                        {filteredStudios.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredStudios.map((studio, index) => (
                                    <Reveal key={studio.id} width="100%" delay={index * 50} className="h-full">
                                        <StudioCard
                                            studio={studio}
                                            activeId={activeCardId}
                                            onToggleAction={handleCardAction}
                                        />
                                    </Reveal>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white dark:bg-zinc-900/50 rounded-3xl border border-dashed border-slate-300 dark:border-white/10">
                                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                    {language === 'en' ? 'No studios found' : 'Tiada studio dijumpai'}
                                </h3>
                                <p className="text-slate-500">
                                    {language === 'en' ? "We currently don't have any listed studios in this area." : "Kami belum mempunyai senarai studio di kawasan ini."}
                                </p>
                                <button
                                    onClick={() => setSelectedState(null)}
                                    className="mt-4 text-orange-600 hover:text-orange-500 font-bold text-sm"
                                >
                                    {language === 'en' ? 'View all locations' : 'Lihat semua lokasi'}
                                </button>
                            </div>
                        )}
                    </div>

                </main>
                <Footer hideCtaBanner={true} />
            </div>
        </div>
    );
};

export default DirectoryPage;
