import React from 'react';
import { AlertTriangle, CheckCircle2, MessageCircle, Info, Mail, Send, Settings, Coins, MapPin, Users, ExternalLink, Clock, Calendar, Zap, Award, TrendingUp, Lightbulb, HeartHandshake, Shield, Server, Smile, Quote } from 'lucide-react';

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
        id: 'founder-story-2026',
        title: {
            en: "A Note from the Founder: The Untold Story of SesiFoto",
            bm: "Catatan Pengasas: Cerita Sebenar di Sebalik SesiFoto"
        },
        date: "16 Feb 2026",
        category: 'article',
        slug: 'founder-story-journey',
        summary: {
            en: "It wasn't just a booking system. It was sleepless nights, 24-hour downtimes, and a mission to empower Malaysian photographers. Read our full journey here.",
            bm: "Ia bukan sekadar sistem tempahan. Ia adalah malam tanpa tidur, gangguan 24 jam, dan misi memperkasa jurugambar Malaysia. Baca perjalanan penuh kami di sini."
        },
        content: {
            // ENGLISH CONTENT - TRANSLATED FROM MALAY SOURCE
            en: (
                <article className="prose prose-lg dark:prose-invert max-w-none font-sans text-slate-800 dark:text-slate-200">
                    <p className="lead text-xl md:text-2xl leading-relaxed text-slate-600 dark:text-slate-300 mb-10 font-serif italic">
                        Imagine this. It's already 11:00 PM, but the smartphone beside you won't stop buzzing. WhatsApp notifications are flooding in.
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Introduction: Why This Story Needs to Be Shared</h2>
                    <p>
                        Customers want to book slot sessions for Hari Raya. Some asking for prices, some requesting date changes, and others sending meaningful deposit receipts but getting buried under hundreds of other conversations.
                    </p>
                    <p>
                        For photography studio owners in Malaysia, this is the reality faced every peak season. The pressure of managing schedules, ensuring deposits are received, and avoiding double bookings can make anyone lose their mind. Sometimes, due to chaotic manual management, many potential sales are simply lost.
                    </p>
                    <blockquote className="border-l-4 border-slate-900 dark:border-white pl-6 py-2 my-8 italic font-serif text-xl text-slate-700 dark:text-slate-300 bg-transparent">
                        "We at Infyra Ventures see this not just as a technical problem, but a major challenge for the local creative community."
                    </blockquote>
                    <p>
                        It isn't just a booking system; it's the result of lessons learned through failure, hard work in the dead of night, and a desire to see our photography industry become more organized.
                    </p>

                    <hr className="my-12 border-slate-200 dark:border-slate-800" />

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Who We Are, and What is SesiFoto?</h2>
                    <p>
                        We effectively started as a small team sharing the same passion for technology and problem-solving. We initially came from the same workplace, though we've since moved to different companies for the time being.
                    </p>

                    <h3 className="text-xl font-bold mt-8 mb-4">The Team</h3>
                    <ul className="list-none pl-0 space-y-6">
                        <li>
                            <strong className="text-slate-900 dark:text-white text-lg block mb-1">Zahirul Iman</strong>
                            <span className="text-slate-600 dark:text-slate-400">The UI/UX and product design lead. Ensuring the system isn't just functional but beautiful and easy to use. Also a part-time wedding photographer, bringing real-world insights from the field.</span>
                        </li>
                        <li>
                            <strong className="text-slate-900 dark:text-white text-lg block mb-1">Haqeem Solehan</strong>
                            <span className="text-slate-600 dark:text-slate-400">Our technical heartbeat. A full-stack powerhouse handling security, infrastructure, and technical flow. The real "magic" of the system is his handiwork.</span>
                        </li>
                        <li>
                            <strong className="text-slate-900 dark:text-white text-lg block mb-1">Ammar Hamzi</strong>
                            <span className="text-slate-600 dark:text-slate-400">The youngest but sharpest mind. Joined in Year 2, bringing expertise in AI, machine learning, and product management to complete our team dynamics.</span>
                        </li>
                    </ul>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Humble Beginnings</h2>
                    <p>
                        It started with a simple plan. In the first year, a friend and I planned to run a photography studio project for Raya. But as time passed, we decided to part ways and focus individually.
                    </p>
                    <p>
                        That's when the question hit me: <em>If I need a system to ease my own studio bookings, why not provide the same solution to other studios?</em>
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Year 1: When "Newbies" Try to Help</h2>
                    <p>
                        The first year was a bitter but valuable learning phase. We used Docker containers, installing the system one by one for each studio. It seemed practical at first, but became a heavy burden.
                    </p>
                    <p>
                        System crashes. Database halts. At one critical moment, I almost gave up due to the pressure. But we stayed calm, found a solution, and recovered—despite a 24-hour downtime impact.
                    </p>
                    <p>
                        Despite the chaos, by the end of the Raya season, our system managed over <strong>RM300,000</strong> in total bookings. The demand was real.
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Year 2: Stop Patching, Start Rebuilding</h2>
                    <p>
                        Entering 2026, we realized we couldn't just patch old holes. SesiFoto is now in its second year, and we made the bold decision to rebuild the system <strong>from scratch</strong>.
                    </p>
                    <p>
                        We conducted deep research, meeting studio owners to identify the best, verified workflows for peak seasons. Our goal wasn't just to provide a form; it was to <strong>educate and create a standard</strong>.
                    </p>

                    <h3 className="text-xl font-bold mt-8 mb-4">The Challenges of Scale</h3>
                    <ul className="list-disc pl-5 space-y-2 marker:text-slate-400">
                        <li><strong>WhatsApp Integration:</strong> Shifted from unofficial methods to the Official Meta WhatsApp API. Higher cost, but unmatched stability.</li>
                        <li><strong>Server Stability:</strong> Ensuring uptime when traffic spikes during peak booking releases.</li>
                        <li><strong>Data Security:</strong> Serious backups and retention to prevent any loss of customer info.</li>
                        <li><strong>Design Balance:</strong> Creating an interface that looks professional without clashing with each studio's unique branding.</li>
                    </ul>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">How We Did It</h2>
                    <p>
                        3-4 months of planning. 1.5 months of intensive dev and testing.
                        Since we work at different companies now, we met physically every week, but our daily stand-ups were virtual—often running until 1 or 2 AM.
                    </p>
                    <p>
                        We launched on <strong>Jan 11th</strong> with a special 11% discount for the first 11 studios. The response was overwhelming.
                    </p>

                    <div className="my-10 p-6 border-y border-slate-200 dark:border-slate-800 text-center">
                        <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">Milestone • Feb 16</p>
                        <p className="text-4xl font-serif font-bold text-slate-900 dark:text-white">RM 300,000+</p>
                        <p className="max-w-md mx-auto mt-4 text-slate-600 dark:text-slate-400">
                            Transaction value processed before the fasting month even began.
                        </p>
                    </div>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Expensive Lessons Learned</h2>
                    <ul className="list-disc pl-5 space-y-4 marker:text-slate-400">
                        <li><strong>Excessive Customization Kills Progress:</strong> Trying to support every unique request only slows dev and destabilizes the system.</li>
                        <li><strong>Proven Workflow is Key:</strong> A good system isn't one with 1000 features, but one with the single most effective workflow.</li>
                        <li><strong>Stability & Backups are Mandatory:</strong> Data loss is a cardinal sin.</li>
                        <li><strong>Support = Product:</strong> Building the system is 50%. The other 50% is guiding users.</li>
                        <li><strong>Start with the Problem:</strong> We built SesiFoto because we knew the photographer's pain, not just because we wanted to build a booking system.</li>
                    </ul>

                    <hr className="my-12 border-slate-200 dark:border-slate-800" />

                    <div className="font-serif italic text-lg opacity-80">
                        <p>
                            "We know some see SesiFoto as 'just a booking system'. But for us and our users, it's a tool that saves time, reduces mental load, and ensures hard work turns into guaranteed sales."
                        </p>
                        <p className="mt-4 not-italic font-sans text-base font-bold text-slate-900 dark:text-white">
                            — Infyra Ventures Team
                        </p>
                    </div>
                </article>
            ),

            // MALAY CONTENT - VERBATIM FROM USER REQUEST
            bm: (
                <article className="prose prose-lg dark:prose-invert max-w-none font-sans text-slate-800 dark:text-slate-200">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Pengenalan</h2>
                    <p>
                        Bayangkan situasi ini. Jam sudah menunjukkan pukul 11 malam, tetapi ‘<em>phone</em>’ di sebelah anda tak berhenti berbunyi notifikasi WhatsApp masuk bertalu-talu daripada pelanggan yang mahu menempah slot sesi foto hari raya. Ada yang tanya harga, ada yang minta ubah tarikh, dan ada yang sudah hantar resit deposit tetapi terselit dalam ratusan perbualan lain.
                    </p>
                    <p>
                        Bagi pemilik studio fotografi di Malaysia, inilah realiti yang perlu dihadapi setiap kali tiba musim puncak, terutamanya menjelang Ramadhan dan Syawal. Tekanan menguruskan jadual, memastikan deposit diterima, dan mengelakkan pertindihan slot (<em>double booking</em>) boleh membuatkan sesiapa sahaja pening dan penat. Kadang-kadang, disebabkan pengurusan manual yang kelam-kabut, banyak potensi jualan terlepas begitu sahaja.
                    </p>
                    <p>
                        Kami di Infyra Ventures melihat perkara ini bukan sekadar masalah teknikal, tetapi satu cabaran besar bagi komuniti kreatif tempatan. Itulah sebabnya kami terpanggil untuk berkongsi perjalanan di sebalik pembinaan SesiFoto. Ia bukan sekadar sebuah sistem tempahan, tetapi adalah hasil daripada pengajaran yang kami timba melalui kegagalan, kerja keras di tengah malam, dan keinginan untuk melihat industri fotografi kita lebih tersusun.
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Siapa kami, dan apa itu SesiFoto?</h2>
                    <p>
                        Mungkin ada yang tertanya-tanya, siapa sebenarnya penggerak di belakang tabir SesiFoto? Kami bermula sebagai sebuah ‘<em>team</em>’ kecil yang berkongsi minat yang sama dalam teknologi dan penyelesaian masalah. Kami bertiga sebenarnya datang dari tempat kerja yang sama pada asalnya, walaupun kini masing-masing telah membawa haluan kerjaya di syarikat yang berbeza buat sementara waktu.
                    </p>
                    <p>
                        Infyra Ventures terdiri daripada tiga individu dengan kepakaran yang saling melengkapi:
                    </p>
                    <ul className="list-none pl-0 space-y-6">
                        <li>
                            <strong className="text-slate-900 dark:text-white text-lg block mb-1">Zahirul Iman</strong>
                            <span className="text-slate-600 dark:text-slate-400">Saya sendiri bertindak dalam aspek reka bentuk UI/UX dan reka bentuk produk. Fokus saya adalah memastikan sistem ini bukan sahaja nampak cantik, tetapi mudah digunakan oleh sesiapa sahaja. Selain itu, saya juga mempunyai pemahaman dalam bidang DevOps dan teknikal, serta merupakan seorang jurugambar sambilan yang memfokuskan kepada majlis perkahwinan, pertunangan, majlis dan lain lain. Pengalaman sebagai jurugambar inilah yang banyak memberi input tentang masalah sebenar di lapangan.</span>
                        </li>
                        <li>
                            <strong className="text-slate-900 dark:text-white text-lg block mb-1">Haqeem Solehan</strong>
                            <span className="text-slate-600 dark:text-slate-400">Antara nadi teknikal kami, seorang pembangun <em>full stack</em> yang sangat mahir. Segala aspek keselamatan sistem, infrastruktur pelayan, dan kelancaran aliran teknikal berada di bawah seliaan Haqeem. Kami selalu katakan bahawa "magis" sebenar dalam sistem ini adalah hasil sentuhan beliau.</span>
                        </li>
                        <li>
                            <strong className="text-slate-900 dark:text-white text-lg block mb-1">Ammar Hamzi</strong>
                            <span className="text-slate-600 dark:text-slate-400">Ammar menyertai kami pada tahun kedua. Walaupun beliau adalah ahli termuda, Ammar mempunyai pemikiran yang sangat tajam, terlibat dalam pembangunan kecerdasan buatan (AI), pembelajaran mesin (<em>machine learning</em>), dan banyak membantu dalam pengurusan produk seterusnya melengkapkan lagi dinamik ‘<em>team</em>’ kami.</span>
                        </li>
                    </ul>
                    <p>
                        Gabungan pengalaman sebagai jurugambar, pereka produk, dan pembangun sistem inilah yang melahirkan SesiFoto, sebuah sistem tempahan yang dibina khas untuk keperluan studio fotografi di Malaysia.
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Permulaan yang sederhana, dan kenapa idea ini lahir</h2>
                    <p>
                        Segalanya bermula dengan satu rancangan yang agak ringkas. Pada tahun pertama, saya dan seorang rakan pada mulanya merancang untuk menjalankan projek studio fotografi bersama-sama untuk musim raya. Dipendekkan cerita, kami memutuskan untuk membawa haluan masing-masing dan fokus secara individu.
                    </p>
                    <p>
                        Di sinilah timbul satu persoalan dalam fikiran saya, jika saya perlukan sistem untuk memudahkan urusan tempahan studio saya sendiri, kenapa saya tidak sediakan penyelesaian yang sama untuk studio-studio lain? Sebagai jurugambar, saya mula menghubungi kenalan-kenalan dalam industri. Saya bertanya tentang masalah mereka dan menawarkan bantuan dalam bentuk sistem.
                    </p>
                    <p>
                        Hasilnya, kami berjaya mendapatkan 10 studio sebagai pengguna pertama kami. Pada waktu itu, kami masih dianggap <em>newbie</em> dalam menguruskan produk perisian sebagai sebuah perniagaan. Idea asalnya adalah untuk membantu, tetapi kami tidak menyangka cabaran yang menanti di depan mata jauh lebih besar daripada apa yang kami bayangkan.
                    </p>

                    <hr className="my-12 border-slate-200 dark:border-slate-800" />

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Tahun pertama: bila “newbie” cuba bantu industri sebenar</h2>
                    <p>
                        Tahun pertama adalah fasa pembelajaran yang sangat pahit tetapi berharga. Teknikal yang kami gunakan pada waktu itu adalah ‘<em>deploy</em>’ sistem menggunakan ‘<em>Docker container</em>’, di mana kami memasang sistem tersebut satu demi satu untuk setiap studio. Ia nampak praktikal pada mulanya, tetapi akhirnya menjadi beban yang sangat berat.
                    </p>
                    <p>
                        Setiap studio mempunyai cara kerja (‘<em>flow</em>’) yang berbeza. Ada yang mahu cara A, ada yang mahu cara B. Kami terlalu banyak mengikut kehendak penyesuaian (‘<em>customization</em>’) daripada setiap pengguna sehingga kami sendiri tersangkut dalam fasa pembangunan. Kami kekurangan pengalaman dalam menentukan aliran kerja yang paling efektif untuk sebuah sistem yang stabil.
                    </p>
                    <p>
                        Akibatnya, keadaan menjadi agak kucar-kacir. Sistem pernah mengalami ‘<em>crash</em>’, dan pangkalan data (‘<em>database</em>’) pernah terhenti. Pada satu saat yang sangat kritikal, saya hampir berputus asa kerana tekanan yang dihadapi. Namun, kami cuba bertenang dan mencari jalan penyelesaian. Kami berjaya memulihkan sistem tersebut, walaupun kesan gangguan itu dirasai selama hampir 24 jam oleh pengguna kami.
                    </p>
                    <p>
                        Walaupun berdepan dengan pelbagai masalah tekberbezaan operasi, sistem SesiFoto berjaya menguruskan nilai tempahan keseluruhan mencecah RM300,000 menjelang hari terakhir musim raya tahun tersebut. Angka ini membuktikan satu perkara: permintaan itu wujud, dan industri ini memang memerlukan sistem yang baik.
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Tahun kedua: berhenti “patch”, mula bina semula dari awal</h2>
                    <p>
                        Memasuki tahun 2026, kami sedar bahawa kami tidak boleh lagi sekadar menampal lubang-lubang lama. SesiFoto kini telah masuk tahun kedua, dan kami membuat keputusan berani untuk membina semula sistem ini ‘<em>from scratch</em>’.
                    </p>
                    <p>
                        Langkah pertama yang kami ambil adalah melakukan R&D yang mendalam. Kami mengadakan sesi pertemuan ‘<em>online</em>’ dengan pemilik-pemilik studio untuk memahami bagaimana mereka beroperasi, terutamanya semasa waktu puncak seperti bulan puasa dan hari raya. Kami mengenalpasti aliran kerja terbaik yang telah terbukti berkesan dan disahkan melalui fakta lapangan.
                    </p>
                    <p>
                        Matlamat utama kami kali ini bukan sekadar menyediakan borang tempahan. Kami mahu mendidik dan mewujudkan satu standard pengurusan yang boleh diikuti oleh semua jurugambar. Sebagai seorang jurugambar solo yang bekerja tanpa ‘<em>team</em>’ besar, saya sendiri sentiasa mencari cara yang paling mudah tetapi memberi impak tinggi kepada perniagaan.
                    </p>
                    <p>
                        Dengan gabungan ilmu reka bentuk produk saya dan kepakaran teknikal Haqeem yang mantap, kami membina SesiFoto yang baru. Kini, ia lebih pantas, lebih stabil, dan mampu memenuhi keperluan kebanyakan studio utama. Kami fokus kepada pengalaman pengguna (UX) yang memudahkan pelanggan studio untuk membuat tempahan dan membayar deposit dalam masa beberapa minit sahaja.
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Cabaran sebenar bila nak jadikan sistem ini “boleh pakai untuk ramai”</h2>
                    <p>
                        Membina sistem untuk seorang pengguna adalah mudah, tetapi membina sistem yang boleh menyokong pelbagai studio serentak adalah cerita yang berbeza. Kami berhadapan dengan cabaran untuk meyakinkan pemilik studio bahawa aliran kerja yang kami cadangkan adalah yang terbaik untuk perniagaan mereka.
                    </p>
                    <p>
                        Antara cabaran utama yang kami tangani termasuklah:
                    </p>
                    <ol className="list-decimal pl-5 space-y-4 marker:text-slate-900 dark:marker:text-white font-bold">
                        <li>
                            <span className="font-normal text-slate-600 dark:text-slate-300">
                                <strong>Integrasi WhatsApp:</strong> Sebelum ini kami menggunakan kaedah yang tidak rasmi. Kini, kami beralih kepada API rasmi Meta WhatsApp. Walaupun kosnya lebih tinggi, ia jauh lebih stabil dan profesional untuk jangka masa panjang.
                            </span>
                        </li>
                        <li>
                            <span className="font-normal text-slate-600 dark:text-slate-300">
                                <strong>Kestabilan Pelayan:</strong> Kami perlu memastikan pelayan kami sentiasa aktif dan mampu menampung trafik yang tinggi, terutamanya apabila sesebuah studio memulakan tempahan slot raya secara serentak.
                            </span>
                        </li>
                        <li>
                            <span className="font-normal text-slate-600 dark:text-slate-300">
                                <strong>Keselamatan Data:</strong> Kami mengambil serius aspek ‘<em>backup</em>’ dan penyimpanan data bagi mengelakkan sebarang kehilangan maklumat pelanggan atau rekod bayaran.
                            </span>
                        </li>
                        <li>
                            <span className="font-normal text-slate-600 dark:text-slate-300">
                                <strong>Keseimbangan Reka Bentuk:</strong> Kami perlu mencari titik tengah di mana sistem kami nampak profesional tetapi tidak terlalu kontra dengan identiti jenama (‘<em>branding</em>’) studio masing-masing.
                            </span>
                        </li>
                    </ol>
                    <p className="mt-6">
                        Semua cabaran ini kami lalui sambil masing-masing masih mempunyai komitmen kerja hakiki di siang hari. Kami memerlukan disiplin yang sangat tinggi untuk memastikan setiap ‘<em>bug</em>’ dibetulkan segera dan sokongan pelanggan sentiasa diberikan.
                    </p>

                    <hr className="my-12 border-slate-200 dark:border-slate-800" />

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Cara kami bina: disiplin kecil, kerja malam, dan demo tanpa henti</h2>
                    <p>
                        Bagaimana kami melakukannya? Jawapannya adalah melalui pengurusan masa yang sangat ketat. Kami mengambil masa selama 3 hingga 4 bulan untuk fasa perancangan, diikuti dengan 1.5 bulan untuk pembangunan dan ujian intensif.
                    </p>
                    <p>
                        Oleh kerana kami bekerja di tempat yang berbeza sekarang, kami akan mengadakan perbincangan secara fizikal berkala. Namun, komunikasi harian kami berlaku etiap malam melalui Google Meet. Bayangkan, hampir setiap hari kami bermesyuarat sehingga jam 1 atau 2 pagi untuk menyelesaikan ‘<em>pending</em>’ tugasan teknikal.
                    </p>
                    <p>
                        Selain membina sistem, kami juga melakukan sesi demonstrasi hampir setiap malam. Kami menghubungi pemilik studio, menunjukkan cara sistem berfungsi, dan meyakinkan mereka tentang nilai yang bakal mereka perolehi. Kami sangat bersyukur apabila ramai yang nampak potensi Sesifoto dan bersetuju untuk menjadi sebahagian daripada pengguna kami.
                    </p>
                    <p>
                        Kami melancarkan versi baru Sesifoto pada 11 Januari lepas dengan tawaran istimewa diskaun 11 peratus untuk 11 studio pertama. Respon yang kami terima amat memberangsangkan dan memberi semangat tambahan kepada kami bertiga.
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Hasil setakat 16/2: apa yang berubah bila ‘<em>flow</em>’ betul dan ‘<em>team</em>’ kecil bergerak laju</h2>
                    <p>
                        Hari ini, bertarikh 16 Februari, kami melihat satu pencapaian yang sangat membanggakan. Dalam tempoh yang singkat sejak pelancaran, Sesifoto telah membantu menguruskan nilai transaksi tempahan melebihi RM300,000.
                    </p>
                    <div className="my-10 p-6 border-y border-slate-200 dark:border-slate-800 text-center">
                        <p className="text-4xl font-serif font-bold text-slate-900 dark:text-white">RM 300,000+</p>
                        <p className="max-w-md mx-auto mt-4 text-slate-600 dark:text-slate-400">
                            Nilai transaksi setakat hari ini. Menyamai jumlah keseluruhan tahun lepas, sebelum bulan puasa bermula. Diuruskan oleh pasukan 3 orang.
                        </p>
                    </div>
                    <p>
                        Apa yang menariknya, angka RM300,000 ini adalah nilai yang sama yang kami capai pada tahun lepas untuk sepanjang musim raya. Namun untuk tahun ini, kami berjaya mencapainya sebelum pun bulan puasa bermula. Ini menunjukkan bahawa dengan aliran kerja yang betul dan sistem yang stabil, studio fotografi dapat mengutip tempahan dengan lebih awal dan lebih tersusun.
                    </p>
                    <p>
                        Pencapaian ini diuruskan sepenuhnya oleh hanya tiga orang. Ini membuktikan bahawa saiz pasukan bukan penghalang jika setiap ahli mempunyai peranan yang jelas dan komitmen yang padu. Kami berjaya mengurangkan kekacauan pengurusan manual dan membantu studio menukar pertanyaan pelanggan kepada jualan sebenar dengan lebih efisien.
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Pengajaran paling mahal yang kami belajar</h2>
                    <p>
                        Sepanjang perjalanan membina Sesifoto dan Infyra Ventures, banyak pengajaran yang telah mematangkan kami. Berikut adalah antara perkara penting yang kami pelajari:
                    </p>
                    <ul className="list-disc pl-5 space-y-4 marker:text-slate-400">
                        <li><strong>Kehendak melampau membunuh kemajuan:</strong> Terlalu mengikut kehendak penyesuaian unik setiap pelanggan (‘<em>customization</em>’) hanya akan melambatkan pembangunan dan menjadikan sistem tidak stabil.</li>
                        <li><strong>Aliran kerja yang terbukti adalah kunci:</strong> Sistem yang bagus bukan sistem yang mempunyai seribu fungsi, tetapi sistem yang mempunyai satu aliran kerja yang paling efektif untuk perniagaan.</li>
                        <li><strong>Kestabilan dan ‘<em>data backup</em>’ adalah wajib:</strong> Dalam dunia digital, kehilangan data dianggap satu dosa besar. Pelaburan untuk infrastruktur sistem yang baik tidak boleh dikompromi.</li>
                        <li><strong>Sokongan pelanggan sama penting dengan produk:</strong> Membina sistem hanyalah 50 peratus daripada kerja. 50 peratus lagi adalah bagaimana kita membimbing dan membantu pengguna menggunakan sistem tersebut.</li>
                        <li><strong>Realiti WhatsApp di Malaysia:</strong> Untuk perniagaan yang serius, penggunaan API rasmi adalah jalan terbaik walaupun ada kos tambahan. Ia memberikan ketenangan fikiran kepada pemilik studio.</li>
                        <li><strong>Percaya dengan ‘<em>team</em>’:</strong> Dalam pasukan kecil, setiap orang perlu percaya kepada kepakaran masing-masing. Haqeem dengan teknikalnya, Ammar dengan pengurusan produk dan AI, serta saya dengan aspek reka bentuk dan pengalaman pengguna.</li>
                        <li><strong>Mula dengan masalah, bukan dengan fungsi:</strong> Kami membina SesiFoto kerana kami tahu masalah jurugambar atau studio, bukan sekadar mahu membuat sistem tempahan yang cantik.</li>
                    </ul>

                    <div className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-8">
                        <h2 className="text-3xl font-bold font-serif mb-6 text-slate-900 dark:text-white">Penutup: terima kasih, dan kenapa ini lebih daripada “booking system”</h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-serif italic mb-6">
                            Kami ingin mengucapkan setinggi-tinggi penghargaan kepada semua pemilik studio yang telah memberikan kepercayaan kepada SesiFoto sejak hari pertama. Tanpa sokongan dan maklum balas anda, SesiFoto tidak akan sampai ke tahap ini. Kami sentiasa mendoakan agar semua rakan jurugambar, sama ada pengguna SesiFoto atau tidak, akan terus berjaya dalam perniagaan masing-masing.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 font-serif italic">
                            "Kami sedar ada segelintir pihak yang mungkin melihat Sesifoto sebagai 'sekadar sistem tempahan sahaja'. Namun bagi kami dan pemilik studio yang menggunakannya, ia adalah alat yang menyelamatkan masa mereka, mengurangkan tekanan mental menguruskan WhatsApp yang tidak putus-putus, dan memastikan setiap titik peluh mereka membuahkan hasil jualan yang terjamin."
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                            Kami di Infyra Ventures komited untuk terus menambah baik sistem ini dan membantu industri kreatif di Malaysia bergerak ke arah yang lebih profesional dan sistematik. Perjalanan kami masih jauh, tetapi melihat senyuman pemilik studio yang kini boleh tidur lebih lena tanpa gangguan mesej tempahan di tengah malam sudah cukup memberikan kepuasan kepada kami.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 mt-4">
                            Terima kasih kerana sudi membaca coretan perjalanan kami. Jika anda mempunyai sebarang pandangan atau sekadar mahu berkongsi pengalaman, kami sentiasa terbuka untuk mendengar.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 mt-4 font-bold">
                            Semoga anda semua terus sukses.
                        </p>
                    </div>
                </article>
            ),
        }
    },
    {
        id: 'studio-directory',
        title: {
            en: 'New Feature: Public Studio Directory is Now Live',
            bm: 'Ciri Baharu: Direktori Studio Awam Kini Aktif'
        },
        date: '12 Feb 2026',
        category: 'feature',
        slug: 'studio-directory',
        summary: {
            en: 'Browse and discover onboarded SesiFoto studios across Malaysia. Find a photographer near you and start booking directly.',
            bm: 'Layari dan temui studio SesiFoto di seluruh Malaysia. Cari jurugambar berhampiran anda dan mula buat tempahan terus.'
        },
        content: {
            bm: (
                <div className="space-y-8">
                    {/* Intro */}
                    <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-900/5 pl-6 pr-4 py-5">
                        <h3 className="text-lg font-bold text-purple-900 dark:text-purple-400 mb-2">Direktori Studio Awam</h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            Kami dengan sukacitanya mengumumkan pelancaran <strong>Direktori Studio</strong> — satu halaman awam di mana sesiapa sahaja boleh melihat senarai studio yang telah berdaftar dengan SesiFoto dan terus membuat tempahan.
                        </p>
                    </div>

                    {/* What is it */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Apa Itu Direktori Studio?</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            Direktori Studio adalah halaman awam yang memaparkan semua studio fotografi yang telah mendaftar dan melengkapkan profil mereka di platform SesiFoto. Halaman ini boleh diakses oleh <strong>sesiapa sahaja</strong> — tanpa perlu log masuk.
                        </p>
                    </section>





                    {/* Ciri-ciri */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Ciri-ciri Utama</h2>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="text-purple-500 mt-1">•</span>
                                <div>
                                    <strong className="text-slate-900 dark:text-white">Peta Interaktif Malaysia:</strong> Pilih negeri di peta untuk tapis studio mengikut lokasi
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-500 mt-1">•</span>
                                <div>
                                    <strong className="text-slate-900 dark:text-white">Carian Pantas:</strong> Cari studio mengikut nama, alamat, atau negeri
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-500 mt-1">•</span>
                                <div>
                                    <strong className="text-slate-900 dark:text-white">Tempahan Terus:</strong> Tekan pada mana-mana kad studio untuk terus ke halaman tempahan mereka
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <div className="text-center pt-4">
                        <a href="/directory" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-orange-500/20">
                            <MapPin size={18} />
                            Layari Direktori Studio
                            <ExternalLink size={14} />
                        </a>
                    </div>

                </div>
            ),
            en: (
                <div className="space-y-8">
                    {/* Intro */}
                    <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-900/5 pl-6 pr-4 py-5">
                        <h3 className="text-lg font-bold text-purple-900 dark:text-purple-400 mb-2">Public Studio Directory</h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            We are happy to announce the launch of the <strong>Studio Directory</strong> — a public page where anyone can browse the list of onboarded SesiFoto studios and start booking directly.
                        </p>
                    </div>

                    {/* What is it */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">What is the Studio Directory?</h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            The Studio Directory is a public page that showcases all photography studios that have registered and completed their profile on SesiFoto. This page is accessible by <strong>anyone</strong> — no login required.
                        </p>
                    </section>





                    {/* Features */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Key Features</h2>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                            <li className="flex items-start gap-3">
                                <span className="text-purple-500 mt-1">•</span>
                                <div>
                                    <strong className="text-slate-900 dark:text-white">Interactive Malaysia Map:</strong> Select a state on the map to filter studios by location
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-500 mt-1">•</span>
                                <div>
                                    <strong className="text-slate-900 dark:text-white">Quick Search:</strong> Search studios by name, address, or state
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-500 mt-1">•</span>
                                <div>
                                    <strong className="text-slate-900 dark:text-white">Direct Booking:</strong> Click on any studio card to go directly to their booking page
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <div className="text-center pt-4">
                        <a href="/directory" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-orange-500/20">
                            <MapPin size={18} />
                            Browse Studio Directory
                            <ExternalLink size={14} />
                        </a>
                    </div>

                </div>
            )
        }
    },
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
