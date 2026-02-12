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
                <div className="space-y-8">
                    {/* Intro Alert - Simplified */}
                    <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-900/5 pl-6 pr-4 py-5">
                        <h3 className="text-lg font-bold text-amber-900 dark:text-amber-400 mb-2">Peralihan ke Official Meta WhatsApp API</h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Untuk memastikan kestabilan dan kelancaran sistem notifikasi, pihak SesiFoto telah mengambil langkah untuk beralih kepada integrasi <strong>Official Meta WhatsApp API</strong>. Langkah ini diambil kerana kaedah tidak rasmi yang digunakan sebelum ini telah menyebabkan nombor perkhidmatan SesiFoto disekat oleh pihak WhatsApp.
                        </p>
                    </div>

                    {/* 1. Cost Structure */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Kos & Struktur Mesej</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Penggunaan API rasmi melibatkan kos bagi setiap mesej yang dikenakan oleh Meta. Walau bagaimanapun, pihak SesiFoto berusaha untuk <strong>tidak mengambil keuntungan</strong> daripada caj ini dan mengekalkan harga pada kadar kos sebenar demi sokongan kepada komuniti studio.
                        </p>
                    </section>

                    {/* 2. Free Quota */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Kuota Percuma</h2>
                        <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-900/5 pl-6 pr-4 py-5">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                                Sebagai permulaan, setiap studio akan menerima <strong className="text-green-700 dark:text-green-400">400 mesej percuma</strong> yang ditanggung sepenuhnya oleh kami.
                            </p>
                        </div>
                    </section>

                    {/* 3. Topup Packages - Minimal Table */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Pakej Tambahan (Topup)</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            Setelah kuota percuma habis, anda boleh membeli pakej tambahan mengikut keperluan. Berikut adalah anggaran jumlah tempahan yang boleh ditampung:
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                                        <th className="py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold">Harga</th>
                                        <th className="py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold">Mesej</th>
                                        <th className="py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold">Kapasiti Tempahan</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600 dark:text-slate-400">
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-3 px-4 font-medium">RM50</td>
                                        <td className="py-3 px-4">800</td>
                                        <td className="py-3 px-4">~266 tempahan</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-800 bg-orange-50/30 dark:bg-orange-900/5">
                                        <td className="py-3 px-4 font-medium">RM100</td>
                                        <td className="py-3 px-4 font-semibold text-orange-600 dark:text-orange-500">1,600</td>
                                        <td className="py-3 px-4">~533 tempahan</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-medium">RM200</td>
                                        <td className="py-3 px-4">3,200</td>
                                        <td className="py-3 px-4">~1,066 tempahan</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 mt-3 italic mb-6">*Anggaran 3 mesej per tempahan: Pengesahan, Peringatan 24 Jam, & Notifikasi Admin</p>

                        <div className="bg-slate-50 dark:bg-white/5 p-5 rounded-xl border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Cara Topup</h3>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-300 text-sm mb-4">
                                <li>Pilih pakej mesj yang diinginkan sebagai kredit WhatsApp studio anda.</li>
                                <li>Klik butang <span className="font-mono bg-slate-200 dark:bg-black px-1 rounded">Purchase</span>.</li>
                                <li>Lakukan pembayaran melalui gerbang pembayaran yang disediakan.</li>
                                <li>Kredit mesej akan dikemaskini dalam baki anda secara automatik.</li>
                            </ol>

                            <div className="flex gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30 p-3 rounded-lg">
                                <AlertTriangle size={16} className="text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                                <p className="text-xs text-amber-800 dark:text-amber-400 leading-relaxed font-medium">
                                    Penting: Pastikan baki mesej sentiasa mencukupi. Sistem <span className="underline decoration-amber-500/50">tidak dapat menghantar notifikasi</span> jika baki tidak mencukupi.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Alternatives - Simple List */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Pilihan Alternatif (Percuma)</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            Jika anda memilih untuk tidak menggunakan perkhidmatan WhatsApp berbayar ini, sistem operasi studio anda <strong>tidak akan terjejas</strong> kerana:
                        </p>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">•</span>
                                <div>
                                    <strong className="text-slate-900 dark:text-white">E-mel Automatik:</strong> Pelanggan tetap menerima e-mel pengesahan tempahan secara automatik
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">•</span>
                                <div>
                                    <strong className="text-slate-900 dark:text-white">Notifikasi Telegram:</strong> Pemilik studio boleh menerima notifikasi percuma melalui Telegram
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* 5. How to Enable - Expanded */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Tetapan Sistem</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            Anda mempunyai kawalan penuh untuk mengaktifkan atau mematikan fungsi ini pada bila-bila masa melalui:
                        </p>
                        <p className="font-mono text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded inline-block mb-6">
                            Settings → Integration → WhatsApp → <span className="text-orange-600 dark:text-orange-500">Automated Notification</span>
                        </p>

                        <div className="space-y-6">
                            {/* Studio Number */}
                            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                    <Settings size={18} className="text-slate-400" />
                                    Studio WhatsApp Number
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    Masukkan nombor telefon untuk menerima notifikasi tempahan baru di ruangan ini. Nombor ini adalah <span className="font-medium text-slate-900 dark:text-white">untuk kegunaan dalaman sahaja</span> dan tidak akan didedahkan kepada pelanggan.
                                </p>
                            </div>

                            {/* Toggles */}
                            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-green-500" />
                                    Pilihan Notifikasi
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                    Anda boleh memilih untuk hidupkan atau matikan mana-mana automasi notifikasi berikut mengikut keperluan studio anda:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="mt-1"><div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div></div>
                                        <div>
                                            <strong className="block text-slate-900 dark:text-white text-sm">Payment Confirmation (Customer)</strong>
                                            <span className="text-slate-500 dark:text-slate-400 text-xs">Menghantar resit dan butiran tempahan kepada pelanggan selepas pembayaran berjaya.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1"><div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div></div>
                                        <div>
                                            <strong className="block text-slate-900 dark:text-white text-sm">New Booking Alert (Studio)</strong>
                                            <span className="text-slate-500 dark:text-slate-400 text-xs">Notifikasi ke nombor studio anda apabila tempahan baharu diterima.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1"><div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div></div>
                                        <div>
                                            <strong className="block text-slate-900 dark:text-white text-sm">24-Hour Reminder</strong>
                                            <span className="text-slate-500 dark:text-slate-400 text-xs">Peringatan automatik kepada pelanggan 1 hari sebelum sesi dijadualkan.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="text-center pt-6 mt-8 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-slate-500 dark:text-slate-400 italic mb-1">Maaf kerana mengambil masa dan terima kasih atas sokongan anda.</p>

                    </div>

                </div>
            ),
            en: (
                <div className="space-y-8">
                    {/* Intro Alert - Simplified */}
                    <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-900/5 pl-6 pr-4 py-5">
                        <h3 className="text-lg font-bold text-amber-900 dark:text-amber-400 mb-2">Transition to Official Meta WhatsApp API</h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            To ensure the stability and smoothness of the notification system, SesiFoto has taken steps to transition to the <strong>Official Meta WhatsApp API</strong> integration. This step was taken because the unofficial method used previously caused the SesiFoto service number to be banned by WhatsApp.
                        </p>
                    </div>

                    {/* 1. Cost Structure */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Message Costs & Structure</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Using the official API involves a cost for each message charged by Meta. However, SesiFoto strives <strong>not to make a profit</strong> from these charges and maintains the price at the actual cost rate to support the studio community.
                        </p>
                    </section>

                    {/* 2. Free Quota */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Free Quota</h2>
                        <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-900/5 pl-6 pr-4 py-5">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
                                To start, each studio will receive <strong className="text-green-700 dark:text-green-400">400 free messages</strong> fully borne by us.
                            </p>
                        </div>
                    </section>

                    {/* 3. Topup Packages - Minimal Table */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Topup Packages</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                            Once the free quota is exhausted, you can purchase additional packages as needed. Here is the estimated number of bookings that can be covered:
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                                        <th className="py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold">Price</th>
                                        <th className="py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold">Messages</th>
                                        <th className="py-3 px-4 text-slate-700 dark:text-slate-300 font-semibold">Booking Capacity</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600 dark:text-slate-400">
                                    <tr className="border-b border-slate-100 dark:border-slate-800">
                                        <td className="py-3 px-4 font-medium">RM50</td>
                                        <td className="py-3 px-4">800</td>
                                        <td className="py-3 px-4">~266 bookings</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 dark:border-slate-800 bg-orange-50/30 dark:bg-orange-900/5">
                                        <td className="py-3 px-4 font-medium">RM100</td>
                                        <td className="py-3 px-4 font-semibold text-orange-600 dark:text-orange-500">1,600</td>
                                        <td className="py-3 px-4">~533 bookings</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 font-medium">RM200</td>
                                        <td className="py-3 px-4">3,200</td>
                                        <td className="py-3 px-4">~1,066 bookings</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 mt-3 italic mb-6">*Estimation: 3 messages per booking: Confirmation, 24-Hour Reminder, & Admin Notification</p>

                        <div className="bg-slate-50 dark:bg-white/5 p-5 rounded-xl border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-sm uppercase tracking-wide">How to Topup</h3>
                            <ol className="list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-300 text-sm mb-4">
                                <li>Select the desired package to add WhatsApp credits to your studio.</li>
                                <li>Click the <span className="font-mono bg-slate-200 dark:bg-black px-1 rounded">Purchase</span> button.</li>
                                <li>Complete the payment via the provided gateway.</li>
                                <li>Message credits will be automatically updated in your balance.</li>
                            </ol>

                            <div className="flex gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30 p-3 rounded-lg">
                                <AlertTriangle size={16} className="text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                                <p className="text-xs text-amber-800 dark:text-amber-400 leading-relaxed font-medium">
                                    Important: Ensure sufficient message balance. Unfortunately, the system <span className="underline decoration-amber-500/50">cannot send notifications</span> if the balance is insufficient.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 4. Alternatives - Simple List */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Alternative Options (Free)</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            If you choose not to use this paid WhatsApp service, your studio's operating system <strong>will not be affected</strong> because:
                        </p>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">•</span>
                                <div>
                                    <strong className="text-slate-900 dark:text-white">Automatic Email:</strong> Customers still receive booking confirmation emails automatically
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500 mt-1">•</span>
                                <div>
                                    <strong className="text-slate-900 dark:text-white">Telegram Notifications:</strong> Studio owners can receive free notifications via Telegram
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* 5. How to Enable - Expanded */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">System Settings</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                            You have full control to enable or disable this function at any time via:
                        </p>
                        <p className="font-mono text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded inline-block mb-6">
                            Settings → Integration → WhatsApp → <span className="text-orange-600 dark:text-orange-500">Automated Notification</span>
                        </p>

                        <div className="space-y-6">
                            {/* Studio Number */}
                            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                    <Settings size={18} className="text-slate-400" />
                                    Studio WhatsApp Number
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    Enter the number to receive administrative alerts here. This number is <span className="font-medium text-slate-900 dark:text-white">kept private</span> and is not visible to customers.
                                </p>
                            </div>

                            {/* Toggles */}
                            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                    <CheckCircle2 size={18} className="text-green-500" />
                                    Notification Options
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                                    You can toggle on any of the following notifications based on your needs:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="mt-1"><div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div></div>
                                        <div>
                                            <strong className="block text-slate-900 dark:text-white text-sm">Payment Confirmation (Customer)</strong>
                                            <span className="text-slate-500 dark:text-slate-400 text-xs">Send receipt and booking details to customer after payment.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1"><div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div></div>
                                        <div>
                                            <strong className="block text-slate-900 dark:text-white text-sm">New Booking Alert (Studio)</strong>
                                            <span className="text-slate-500 dark:text-slate-400 text-xs">Notify your studio number when a new booking is received.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="mt-1"><div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div></div>
                                        <div>
                                            <strong className="block text-slate-900 dark:text-white text-sm">24-Hour Reminder</strong>
                                            <span className="text-slate-500 dark:text-slate-400 text-xs">Remind customers 1 day before their scheduled session.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="text-center pt-6 mt-8 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-slate-500 dark:text-slate-400 italic mb-1">Sorry for the delay and thank you for your continued support.</p>
                        <p className="font-semibold text-slate-900 dark:text-white">– SesiFoto Team</p>
                    </div>

                </div>
            )
        }
    }
];
