import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StudioBackground from './StudioBackground';
import Reveal from './ui/Reveal';
import { AlertOctagon } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen overflow-x-hidden font-sans bg-slate-50 dark:bg-black">
            <StudioBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
                    <Reveal>
                        <div className="w-24 h-24 bg-slate-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                            <AlertOctagon size={48} className="text-slate-400" />
                        </div>
                        <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Page Not Found</h1>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                            The page you are looking for does not exist or has been removed.
                        </p>
                        <Link to="/" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/20">
                            Return Home
                        </Link>
                    </Reveal>
                </main>
                <Footer hideCtaBanner={true} />
            </div>
        </div>
    );
};

export default NotFound;
