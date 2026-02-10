import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StudioBackground from './StudioBackground';
import Reveal from './ui/Reveal';
import { NEWS_DATA } from '../data/news';
import { ArrowLeft, Calendar } from 'lucide-react';

import NotFound from './NotFound';

import { useLanguage } from '../contexts/LanguageContext';

const NewsDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { t, language } = useLanguage();
    const newsItem = NEWS_DATA.find(item => item.slug === slug);

    if (!newsItem) {
        return <NotFound hideCtaBanner={true} />;
    }

    return (
        <div className="min-h-screen overflow-x-hidden font-sans bg-slate-50 dark:bg-black">
            <StudioBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-grow container mx-auto px-4 py-24 md:py-32">

                    {/* Back Button */}
                    <Reveal width="100%">
                        <Link to="/news" className="inline-flex items-center text-slate-500 hover:text-orange-600 transition-colors mb-8 group">
                            <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
                            {t.news.backToNews || "Back to News"}
                        </Link>
                    </Reveal>

                    {/* Article Header */}
                    <article className="max-w-3xl mx-auto">
                        <Reveal width="100%">
                            <div className="flex items-center gap-4 mb-6 text-sm">
                                <span className={`px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs border ${newsItem.category === 'announcement' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200' :
                                    newsItem.category === 'feature' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-200' :
                                        'bg-slate-100 dark:bg-slate-800 text-slate-600 border-slate-200'
                                    }`}>
                                    {t.news.categories[newsItem.category as keyof typeof t.news.categories]}
                                </span>
                                <span className="flex items-center text-slate-500 dark:text-slate-400">
                                    <Calendar size={14} className="mr-1.5" />
                                    {newsItem.date}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                                {newsItem.title[language]}
                            </h1>
                        </Reveal>

                        {/* Content Body */}
                        <Reveal width="100%" delay={100}>
                            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-bold prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-orange-600 hover:prose-a:text-orange-500">
                                {newsItem.content[language]}
                            </div>
                        </Reveal>
                    </article>

                </main>
                <Footer hideCtaBanner={true} />
            </div>
        </div>
    );
};

export default NewsDetailPage;
