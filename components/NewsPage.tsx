import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StudioBackground from './StudioBackground';
import NewsCard from './NewsCard';
import Reveal from './ui/Reveal';

import { NEWS_DATA } from '../data/news';

import { useLanguage } from '../contexts/LanguageContext';
import { Filter as FilterIcon } from 'lucide-react';

const NewsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'announcement' | 'feature' | 'article'>('all');
  const { t } = useLanguage();

  const filteredNews = filter === 'all'
    ? NEWS_DATA
    : NEWS_DATA.filter(news => news.category === filter);

  return (
    <div className="min-h-screen overflow-x-hidden font-sans bg-slate-50 dark:bg-black">
      <StudioBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-24 md:py-32">

          {/* Header Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Reveal width="100%">
              <h1 className="text-4xl md:text-6xl font-serif font-medium text-slate-900 dark:text-white mb-6">
                {t.news.title.split('&')[0] || "News"} & <span className="text-orange-600 dark:text-orange-500">{t.news.title.split('&')[1] || "Updates"}</span>
              </h1>
            </Reveal>
            <Reveal width="100%" delay={100}>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {t.news.subtitle}
              </p>
            </Reveal>
          </div>

          {/* Filter Tabs */}
          <Reveal width="100%" delay={200}>
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-white dark:bg-zinc-900/80 p-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm overflow-x-auto max-w-full">
                {['all', 'announcement', 'feature', 'article'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setFilter(item as any)}
                    className={`px-4 py-2 rounded-full text-sm font-bold capitalize transition-all duration-300 ${filter === item
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5'
                      }`}
                  >
                    {t.news.categories[item as keyof typeof t.news.categories]}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {filteredNews.length > 0 ? (
              filteredNews.map((news, index) => (
                <Reveal key={news.id} delay={index * 100} width="100%" className="h-full">
                  <NewsCard {...news} />
                </Reveal>
              ))
            ) : (
              <div className="col-span-full text-center py-20 opacity-60">
                <FilterIcon className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                <p className="text-slate-500">{t.news.empty}</p>
              </div>
            )}
          </div>

        </main>
        <Footer hideCtaBanner={true} />
      </div>
    </div>
  );
};

export default NewsPage;
