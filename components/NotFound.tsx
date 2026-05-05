import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
    const { language } = useLanguage();
    const title = language === 'bm' ? 'Maaf, kami tak jumpa halaman ini' : "Sorry, we couldn't find this page";
    const description = language === 'bm'
        ? 'Pautan yang anda buka mungkin salah, sudah dipindahkan, atau sudah tidak tersedia.'
        : 'The link you opened may be incorrect, moved, or no longer available.';
    const ctaLabel = language === 'bm' ? 'Kembali ke SesiFoto' : 'Back to SesiFoto';

    return (
        <div className="min-h-screen overflow-x-hidden font-sans bg-slate-50 dark:bg-black">
            <main className="relative z-10 flex min-h-screen items-center justify-center px-5 pb-12 pt-28 sm:px-6">
                <Reveal width="100%">
                    <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:text-left">
                        <div className="order-2 flex w-full max-w-xl flex-col items-center lg:order-1 lg:items-start">
                            <h1 className="text-balance text-3xl font-medium font-serif leading-tight text-slate-900 dark:text-white md:text-5xl">
                                {title}
                            </h1>
                            <p className="mt-3 max-w-xl text-balance text-base font-light leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
                                {description}
                            </p>
                            <Link
                                to="/"
                                className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-studio-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-studio-primary/70 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-black"
                            >
                                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                                {ctaLabel}
                            </Link>
                        </div>
                        <picture className="order-1 block w-full max-w-[360px] lg:order-2 lg:max-w-[460px]">
                            <source srcSet="/media/errors/not-found-404.webp" type="image/webp" />
                            <img
                                src="/media/errors/not-found-404.png"
                                alt="404 illustration"
                                draggable={false}
                                className="h-auto w-full select-none object-contain"
                            />
                        </picture>
                    </div>
                </Reveal>
            </main>
        </div>
    );
};

export default NotFound;
