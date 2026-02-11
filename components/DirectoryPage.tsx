import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StudioBackground from './StudioBackground';
import Reveal from './ui/Reveal';
import MalaysiaMap from './MalaysiaMap';
import StudioCard from './StudioCard';
import { STUDIOS_DATA, Studio } from '../data/studios';
import { MapPin, Search } from 'lucide-react';

import { useLanguage } from '../contexts/LanguageContext';

// Map API studio slugs/addresses to Malaysian states
const deriveStateFromStudio = (apiStudio: any): Studio['state'] => {
    const slug = apiStudio.slug?.toLowerCase() || '';
    const address = apiStudio.address?.toLowerCase() || '';

    if (slug.includes('perlis') || address.includes('perlis')) return 'perlis';
    if (slug.includes('kedah') || address.includes('kedah')) return 'kedah';
    if (slug.includes('penang') || slug.includes('pulau-pinang') || address.includes('penang') || address.includes('pulau pinang')) return 'pulau-pinang';
    if (slug.includes('perak') || address.includes('perak') || address.includes('ipoh')) return 'perak';
    if (slug.includes('selangor') || slug.includes('shahalam') || slug.includes('cyberjaya') || address.includes('selangor') || address.includes('shah alam') || address.includes('cyberjaya') || address.includes('ampang') || address.includes('sepang') || address.includes('kajang') || address.includes('semenyih') || address.includes('sungai buloh')) return 'selangor';
    if (slug.includes('kl') || slug.includes('kuala-lumpur') || address.includes('kuala lumpur')) return 'kuala-lumpur';
    if (slug.includes('putrajaya') || address.includes('putrajaya')) return 'putrajaya';
    if (slug.includes('negeri-sembilan') || address.includes('negeri sembilan') || address.includes('pajam')) return 'negeri-sembilan';
    if (slug.includes('melaka') || address.includes('melaka')) return 'melaka';
    if (slug.includes('johor') || address.includes('johor') || address.includes('masai') || address.includes('pasir gudang')) return 'johor';
    if (slug.includes('pahang') || slug.includes('kuantan') || address.includes('pahang') || address.includes('kuantan')) return 'pahang';
    if (slug.includes('terengganu') || address.includes('terengganu') || address.includes('jerteh')) return 'terengganu';
    if (slug.includes('kelantan') || address.includes('kelantan')) return 'kelantan';
    if (slug.includes('sabah') || address.includes('sabah')) return 'sabah';
    if (slug.includes('sarawak') || address.includes('sarawak')) return 'sarawak';
    if (slug.includes('labuan') || address.includes('labuan')) return 'labuan';

    // Default to Selangor if we can't determine
    return 'selangor';
};

const DirectoryPage: React.FC = () => {
    const { language, t } = useLanguage();
    const [selectedState, setSelectedState] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [activeCardId, setActiveCardId] = useState<string | null>(null);
    const [studios, setStudios] = useState<Studio[]>(STUDIOS_DATA);
    const [isLoading, setIsLoading] = useState(true);

    const handleCardAction = (id: string) => {
        setActiveCardId(prev => prev === id ? null : id);
    };

    // Fetch studios from API on mount
    useEffect(() => {
        const fetchStudios = async () => {
            try {
                setIsLoading(true);
                // Add timestamp to force fresh data (bypass all caches)
                const timestamp = new Date().getTime();
                const response = await fetch(`https://api.sesifoto.my/public/studios?_t=${timestamp}`, {
                    cache: 'no-cache',
                    headers: {
                        'Cache-Control': 'no-cache'
                    }
                });
                const apiStudios = await response.json();

                // Map API response to our Studio interface
                const mappedStudios: Studio[] = apiStudios.map((apiStudio: any) => ({
                    id: apiStudio.slug,
                    name: apiStudio.studioName,
                    state: deriveStateFromStudio(apiStudio),
                    logo: apiStudio.logo,
                    address: apiStudio.address,
                    bookingPageLink: apiStudio.bookingPageLink,
                    phone: apiStudio.phoneNumber,
                }));

                setStudios(mappedStudios);
            } catch (error) {
                console.error('Failed to fetch studios from API, using static data:', error);
                // Keep the static data as fallback
            } finally {
                setIsLoading(false);
            }
        };

        fetchStudios();
    }, []);


    // Only show studios with complete production data
    const completeStudios = studios.filter(s => s.logo && s.address && s.phone);

    const filteredStudios = completeStudios.filter(studio => {
        const matchesState = selectedState ? studio.state === selectedState : true;
        const matchesSearch = searchQuery.trim() === '' ? true :
            studio.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (studio.address && studio.address.toLowerCase().includes(searchQuery.toLowerCase())) ||
            studio.state.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesState && matchesSearch;
    });

    return (
        <div className="min-h-screen overflow-x-hidden font-sans bg-slate-50 dark:bg-black">
            <StudioBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-grow container mx-auto px-4 py-20 md:py-32">

                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
                        <Reveal width="100%">
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 rounded-full dark:bg-orange-900/30 dark:text-orange-400">
                                {language === 'en' ? 'Find A Photographer' : 'Cari Jurugambar'}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4 md:mb-6">
                                {language === 'en' ? 'Studio Directory' : 'Direktori Studio'}
                            </h1>
                        </Reveal>
                        <Reveal width="100%" delay={100}>
                            <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400">
                                {language === 'en'
                                    ? 'Discover talented photographers across Malaysia. Select a state on the map to find studios near you.'
                                    : 'Temui jurugambar berbakat di seluruh Malaysia. Pilih negeri di peta untuk mencari studio berdekatan anda.'}
                            </p>
                        </Reveal>
                    </div>

                    {/* Interactive Map Section */}
                    <Reveal width="100%" delay={200}>
                        <div className="mb-8 md:mb-16">
                            {isLoading ? (
                                <div className="w-full relative bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900/50 dark:to-black rounded-2xl md:rounded-3xl border border-slate-200 dark:border-white/5 overflow-hidden p-4 md:p-8 shadow-2xl shadow-slate-200/50 dark:shadow-none flex items-center justify-center" style={{ minHeight: '200px' }}>
                                    <div className="text-center">
                                        <div className="inline-block w-12 h-12 border-4 border-orange-200 dark:border-orange-900/30 border-t-orange-600 dark:border-t-orange-500 rounded-full animate-spin mb-4"></div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Loading studios...</p>
                                    </div>
                                </div>
                            ) : (
                                <MalaysiaMap
                                    selectedState={selectedState}
                                    onStateSelect={setSelectedState}
                                    studios={completeStudios}
                                />
                            )}
                        </div>
                    </Reveal>



                    {/* Results Section */}
                    <div id="studios-grid">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-6 md:mb-8">
                            <h2 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <MapPin className="text-orange-600 shrink-0" size={20} />
                                <span className="truncate">
                                    {selectedState
                                        ? (language === 'en' ? `Studios in ${selectedState.charAt(0).toUpperCase() + selectedState.slice(1)}` : `Studio di ${selectedState.charAt(0).toUpperCase() + selectedState.slice(1)}`)
                                        : (language === 'en' ? 'All Studios' : 'Semua Studio')}
                                </span>
                                <span className="text-xs md:text-sm font-medium text-slate-400 bg-slate-100 dark:bg-white/10 px-2 py-0.5 md:py-1 rounded-full shrink-0">
                                    {filteredStudios.length}
                                </span>
                            </h2>

                            {/* Search Bar - Inline with Header */}
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={language === 'en' ? "Search studios..." : "Cari studio..."}
                                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 dark:focus:border-orange-500 transition-all placeholder:text-slate-400 text-slate-900 dark:text-white shadow-sm"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-medium"
                                    >
                                        {language === 'en' ? 'Clear' : 'Padam'}
                                    </button>
                                )}
                            </div>
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
                            <div className="text-center py-12 md:py-20 bg-white dark:bg-zinc-900/50 rounded-2xl md:rounded-3xl border border-dashed border-slate-300 dark:border-white/10">
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
