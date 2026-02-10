import React from 'react';
import { AlertTriangle, CheckCircle2, MessageCircle, Info, Mail, Send, Settings, Coins } from 'lucide-react';

export interface NewsItem {
    id: string;
    title: {
        en: string;
        bm: string;
    };
    date: string;
    category: 'announcement' | 'feature' | 'article';
    summary: {
        en: string;
        bm: string;
    };
    slug: string;
    content: {
        en: React.ReactNode;
        bm: React.ReactNode;
    };
}


// Components for Rich Content
const SectionHeader = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <div className="flex items-center gap-3 mb-4">
        <div className="bg-slate-100 dark:bg-white/5 p-2 rounded-lg">{icon}</div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
    </div>
);

const WarningIcon = () => (
    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center text-amber-600 dark:text-amber-500">
        <AlertTriangle size={20} />
    </div>
);

const PricingCard = ({ price, messages, bookings, isPopular, t }: { price: string, messages: string, bookings: string, isPopular?: boolean, t: 'en' | 'bm' }) => (
    <div className={`relative bg-white dark:bg-zinc-900 p-6 rounded-xl border ${isPopular ? 'border-orange-500 dark:border-orange-500 ring-4 ring-orange-500/10' : 'border-slate-200 dark:border-white/10'} shadow-sm flex flex-col items-center text-center`}>
        {isPopular && <span className="absolute -top-3 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{t === 'en' ? 'Recommended' : 'Disyorkan'}</span>}
        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{price}</h4>
        <div className="text-3xl font-black text-studio-primary mb-2">{messages} <span className="text-sm font-medium text-slate-400">{t === 'en' ? 'Messages' : 'Mesej'}</span></div>
        <p className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-white/5 px-3 py-1 rounded-full">{t === 'en' ? 'Capacity:' : 'Kapasiti:'} {bookings} {t === 'en' ? 'Bookings' : 'Tempahan'}</p>
    </div>
);

const AlternativeCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex items-start gap-4 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-slate-200 dark:border-white/10">
        <div className="mt-1 text-slate-400">{icon}</div>
        <div>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{title}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
        </div>
    </div>
);

export const NEWS_DATA: NewsItem[] = [
    {
        id: 'whatsapp-update',
        title: {
            en: 'Official Announcement: SesiFoto Official WhatsApp API Integration',
            bm: 'Pengumuman Rasmi: Integrasi WhatsApp API Rasmi SesiFoto'
        },
        date: '10 Feb 2026',
        category: 'announcement',
        slug: 'whatsapp-update',
        summary: {
            en: 'SesiFoto is transitioning to Meta\'s Official WhatsApp integration for system stability. Learn more about the free quota and message packages.',
            bm: 'SesiFoto beralih kepada integrasi WhatsApp Rasmi Meta untuk kestabilan sistem. Ketahui lebih lanjut mengenai kuota percuma dan pakej mesej.'
        },
        content: {
            bm: (
                <div className="space-y-12">
                    {/* Intro Alert */}
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-2xl p-6 md:p-8">
                        <div className="flex gap-4">
                            <div className="shrink-0 mt-1">
                                <WarningIcon />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-amber-800 dark:text-amber-500 mb-2">Peralihan ke Official Meta WhatsApp API</h3>
                                <p className="text-amber-900/80 dark:text-amber-200/80 leading-relaxed text-sm md:text-base">
                                    Untuk memastikan kestabilan dan kelancaran sistem notifikasi, pihak SesiFoto telah mengambil langkah untuk beralih kepada integrasi <strong>Official Meta WhatsApp API</strong>. Langkah ini diambil kerana kaedah tidak rasmi yang digunakan sebelum ini telah menyebabkan nombor perkhidmatan SesiFoto disekat (banned) oleh pihak WhatsApp.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 1. Cost Structure */}
                    <section>
                        <SectionHeader icon={<Coins className="w-6 h-6 text-studio-primary" />} title="1. Kos & Struktur Mesej" />
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            Penggunaan API rasmi melibatkan kos bagi setiap mesej yang dikenakan oleh Meta. Walau bagaimanapun, pihak SesiFoto berusaha untuk <strong>tidak mengambil keuntungan</strong> daripada caj ini dan mengekalkan harga pada kadar kos sebenar demi sokongan kepada komuniti studio.
                        </p>
                    </section>

                    {/* 2. Free Quota */}
                    <section>
                        <SectionHeader icon={<CheckCircle2 className="w-6 h-6 text-green-500" />} title="2. Kuota Percuma" />
                        <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">Sumbangan Permulaan SesiFoto</h4>
                                <p className="text-green-900/70 dark:text-green-200/70">Sebagai permulaan, setiap studio akan menerima kuota mesej percuma yang ditanggung sepenuhnya oleh kami.</p>
                            </div>
                            <div className="bg-white dark:bg-green-950/50 px-6 py-4 rounded-lg border border-green-200 dark:border-green-800/30 text-center shrink-0 min-w-[200px]">
                                <span className="block text-3xl font-black text-green-600 dark:text-green-400">400</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-green-800/60 dark:text-green-400/60">Mesej Percuma</span>
                            </div>
                        </div>
                    </section>

                    {/* 3. Topup Packages */}
                    <section>
                        <SectionHeader icon={<MessageCircle className="w-6 h-6 text-blue-500" />} title="3. Pakej Tambahan (Topup)" />
                        <p className="text-slate-600 dark:text-slate-300 mb-8">
                            Setelah kuota percuma habis, anda boleh membeli pakej tambahan mengikut keperluan. Berikut adalah anggaran jumlah tempahan yang boleh ditampung.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <PricingCard price="RM50" messages="800" bookings="~266" t="bm" />
                            <PricingCard price="RM100" messages="1,600" bookings="~533" isPopular t="bm" />
                            <PricingCard price="RM200" messages="3,200" bookings="~1,066" t="bm" />
                        </div>
                        <p className="text-xs text-slate-400 mt-4 text-center italic">*Anggaran 3 mesej per tempahan: Pengesahan, Peringatan 24 Jam, & Notifikasi Admin.</p>
                    </section>

                    {/* 4. Alternatives */}
                    <section>
                        <SectionHeader icon={<Send className="w-6 h-6 text-purple-500" />} title="4. Pilihan Alternatif (Percuma)" />
                        <p className="text-slate-600 dark:text-slate-300 mb-6">
                            Jika anda memilih untuk tidak menggunakan perkhidmatan WhatsApp berbayar ini, sistem operasi studio anda <strong>tidak akan terjejas</strong> kerana:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <AlternativeCard icon={<Mail className="w-5 h-5" />} title="E-mel Automatik" desc="Pelanggan tetap menerima e-mel pengesahan tempahan secara automatik." />
                            <AlternativeCard icon={<Send className="w-5 h-5" />} title="Notifikasi Telegram" desc="Pemilik studio boleh menerima notifikasi percuma melalui Telegram." />
                        </div>
                    </section>

                    {/* 5. How to Enable */}
                    <section className="bg-slate-100 dark:bg-zinc-800/50 rounded-2xl p-8 text-center">
                        <Settings className="w-8 h-8 mx-auto text-slate-400 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Tetapan Sistem</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">Anda mempunyai kawalan penuh untuk mengaktifkan atau mematikan fungsi ini pada bila-bila masa.</p>

                        <div className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-sm font-medium font-mono text-slate-700 dark:text-slate-300 shadow-sm">
                            <span>Settings</span>
                            <span className="text-slate-300">/</span>
                            <span>Integration</span>
                            <span className="text-slate-300">/</span>
                            <span>WhatsApp</span>
                            <span className="text-slate-300">/</span>
                            <span className="text-studio-primary">Automated Notification</span>
                        </div>
                    </section>

                    <div className="text-center pt-8 border-t border-slate-200 dark:border-white/10">
                        <p className="text-slate-500 dark:text-slate-400 italic">Maaf kerana mengambil masa dan terima kasih atas sokongan berterusan anda.</p>
                        <p className="font-bold text-slate-900 dark:text-white mt-2">– Pasukan SesiFoto</p>
                    </div>

                </div>
            ),
            en: (
                <div className="space-y-12">
                    {/* Intro Alert */}
                    <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-2xl p-6 md:p-8">
                        <div className="flex gap-4">
                            <div className="shrink-0 mt-1">
                                <WarningIcon />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-amber-800 dark:text-amber-500 mb-2">Transition to Official Meta WhatsApp API</h3>
                                <p className="text-amber-900/80 dark:text-amber-200/80 leading-relaxed text-sm md:text-base">
                                    To ensure the stability and smoothness of the notification system, SesiFoto has taken steps to transition to the <strong>Official Meta WhatsApp API</strong> integration. This step was taken because the unofficial method used previously caused the SesiFoto service number to be banned by WhatsApp.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 1. Cost Structure */}
                    <section>
                        <SectionHeader icon={<Coins className="w-6 h-6 text-studio-primary" />} title="1. Message Costs & Structure" />
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            Using the official API involves a cost for each message charged by Meta. However, SesiFoto strives <strong>not to make a profit</strong> from these charges and maintains the price at the actual cost rate to support the studio community.
                        </p>
                    </section>

                    {/* 2. Free Quota */}
                    <section>
                        <SectionHeader icon={<CheckCircle2 className="w-6 h-6 text-green-500" />} title="2. Free Quota" />
                        <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">SesiFoto Initial Contribution</h4>
                                <p className="text-green-900/70 dark:text-green-200/70">To start, each studio will receive a free message quota fully borne by us.</p>
                            </div>
                            <div className="bg-white dark:bg-green-950/50 px-6 py-4 rounded-lg border border-green-200 dark:border-green-800/30 text-center shrink-0 min-w-[200px]">
                                <span className="block text-3xl font-black text-green-600 dark:text-green-400">400</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-green-800/60 dark:text-green-400/60">Free Messages</span>
                            </div>
                        </div>
                    </section>

                    {/* 3. Topup Packages */}
                    <section>
                        <SectionHeader icon={<MessageCircle className="w-6 h-6 text-blue-500" />} title="3. Topup Packages" />
                        <p className="text-slate-600 dark:text-slate-300 mb-8">
                            Once the free quota is exhausted, you can purchase additional packages as needed. Here is the estimated number of bookings that can be covered.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <PricingCard price="RM50" messages="800" bookings="~266" t="en" />
                            <PricingCard price="RM100" messages="1,600" bookings="~533" isPopular t="en" />
                            <PricingCard price="RM200" messages="3,200" bookings="~1,066" t="en" />
                        </div>
                        <p className="text-xs text-slate-400 mt-4 text-center italic">*Estimation: 3 messages per booking: Confirmation, 24-Hour Reminder, & Admin Notification.</p>
                    </section>

                    {/* 4. Alternatives */}
                    <section>
                        <SectionHeader icon={<Send className="w-6 h-6 text-purple-500" />} title="4. Alternative Options (Free)" />
                        <p className="text-slate-600 dark:text-slate-300 mb-6">
                            If you choose not to use this paid WhatsApp service, your studio's operating system <strong>will not be affected</strong> because:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <AlternativeCard icon={<Mail className="w-5 h-5" />} title="Automatic Email" desc="Customers still receive booking confirmation emails automatically." />
                            <AlternativeCard icon={<Send className="w-5 h-5" />} title="Telegram Notifications" desc="Studio owners can receive free notifications via Telegram." />
                        </div>
                    </section>

                    {/* 5. How to Enable */}
                    <section className="bg-slate-100 dark:bg-zinc-800/50 rounded-2xl p-8 text-center">
                        <Settings className="w-8 h-8 mx-auto text-slate-400 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">System Settings</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">You have full control to enable or disable this function at any time.</p>

                        <div className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-sm font-medium font-mono text-slate-700 dark:text-slate-300 shadow-sm">
                            <span>Settings</span>
                            <span className="text-slate-300">/</span>
                            <span>Integration</span>
                            <span className="text-slate-300">/</span>
                            <span>WhatsApp</span>
                            <span className="text-slate-300">/</span>
                            <span className="text-studio-primary">Automated Notification</span>
                        </div>
                    </section>

                    <div className="text-center pt-8 border-t border-slate-200 dark:border-white/10">
                        <p className="text-slate-500 dark:text-slate-400 italic">Sorry for the delay and thank you for your continued support.</p>
                        <p className="font-bold text-slate-900 dark:text-white mt-2">– SesiFoto Team</p>
                    </div>

                </div>
            )
        }
    }
];
