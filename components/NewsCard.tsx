import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { NewsItem } from '../data/news';
import { useLanguage } from '../contexts/LanguageContext';

const NewsCard: React.FC<NewsItem> = ({ id, title, date, category, summary, slug }) => {
    const { t, language } = useLanguage();

    const getCategoryColor = (cat: string) => {
        switch (cat) {
            case 'announcement': return 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400';
            case 'feature': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
            case 'article': return 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400';
            default: return 'bg-slate-100 text-slate-600';
        }
    };

    return (
        <Link to={`/news/${slug}`} className="group block h-full">
            <article className="flex flex-col h-full bg-white dark:bg-zinc-900/50 rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-900/30 hover:-translate-y-1">
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getCategoryColor(category)}`}>
                            {t.news.categories[category as keyof typeof t.news.categories]}
                        </span>
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                            <Calendar size={14} />
                            <span>{date}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                        {title[language]}
                    </h3>

                    {/* Summary */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {summary[language]}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center text-orange-600 dark:text-orange-500 font-bold text-sm">
                        {t.news.readMore} <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default NewsCard;
