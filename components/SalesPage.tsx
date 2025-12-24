import React, { useState, useEffect } from 'react';
import StudioBackground from './StudioBackground';
import { CheckCircle2, XCircle, Play, Calendar, CreditCard, MessageCircle, Clock, Gift, ShieldCheck, MessageSquare, TrendingUp, AlertTriangle } from 'lucide-react';

const SalesPage: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

    // Fake countdown timer for urgency
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds === 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                }
                return { ...prev, seconds: prev.seconds - 1 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen overflow-x-hidden font-sans text-slate-900 dark:text-slate-100 bg-studio-black selection:bg-studio-primary/30 pb-20 md:pb-0">
            <StudioBackground />

            {/* === ULTRA ELEMENT: URGENCY TOP BANNER === */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-xs md:text-sm font-bold text-center py-2 px-4 shadow-lg animate-pulse-slow">
                🔥 <span className="uppercase text-yellow-300">AMARAN:</span> Slot 'Early Bird' Raya 2026 Tinggal <span className="underline text-white mx-1 text-base">7 Sahaja</span> Lagi! Offer Tamat Dalam {timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds} Minit.
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 pt-24 pb-12 md:py-28 flex flex-col gap-24">

                {/* Branding */}
                <div className="flex justify-center mb-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl overflow-hidden bg-studio-card border border-white/10 flex items-center justify-center">
                            <img src="/img/SesiFoto.svg" alt="SesiFoto" className="h-full w-full object-contain" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">SesiFoto</span>
                    </div>
                </div>

                {/* ==================================================================
            ELEMEN 1: HEADLINE (AGITATE PAIN + 2025 POWER WORDS)
            Angle: "Serabut" & "Penat" -> "Settled"
           ================================================================== */}
                <section className="text-center space-y-8">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
                        "Sampai Bila Nak <span className="text-red-500">Serabut</span> Reply WhatsApp & Urus Booking Manual?"
                    </h1>
                    <p className="text-xl md:text-2xl text-studio-primary font-medium leading-relaxed bg-studio-primary/10 inline-block px-6 py-3 rounded-lg border border-studio-primary/20">
                        Terbongkar: Cara Mudah Automasi Studio Anda & 'Lock' Customer Tanpa Pening Kepala.
                    </p>

                    <div className="text-slate-300 text-lg max-w-2xl mx-auto">
                        <p>Wujudkan impian studio yang <span className="text-white font-bold underline decoration-studio-primary">Auto-Pilot</span>. Tonton video 2 minit ini sekarang.</p>
                    </div>

                    {/* Video Placeholder */}
                    <div className="relative aspect-video bg-studio-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden group cursor-pointer hover:border-studio-primary/50 transition-colors">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                            <div className="w-20 h-20 bg-studio-primary rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(255,107,44,0.6)] group-hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-white fill-current" />
                            </div>
                        </div>
                        <img src="https://placehold.co/1280x720/1e293b/FFF?text=Video:+Rahsia+Studio+Auto-Pilot" alt="Video Demo" className="w-full h-full object-cover opacity-50" />
                        <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-xs font-bold">
                            MUST WATCH: 2:14 Minit
                        </div>
                    </div>
                </section>

                {/* ==================================================================
            ELEMEN 2: MASALAH (MIMPI NGERI)
            Angle: Deep emotional pain (Malu, Rugi, Leceh)
           ================================================================== */}
                <section className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 md:p-12 space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center gap-3">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                            Adakah Anda Sedang Hadapi "Mimpi Ngeri" Ini?
                        </h2>
                        <p className="text-slate-400">
                            Jangan tipu diri sendiri. Jika anda masih manual, anda sedang rugi besar.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { title: "Customer 'Ghosting' Lepas Tanya Harga", desc: "Penat reply 'PM tepi', bagi harga, lepastu senyap (krik krik). Buang masa!" },
                            { title: "Malu Besar Isu 'Double Booking'", desc: "Dua client datang serentak sebab terlupa catat. Jatuh reputasi studio, nampak tak profesional." },
                            { title: "Duit 'Bocor' & Resit Hilang", desc: "Tak tahu sales sebenar berapa. Duit masuk akaun peribadi campur aduk. Sayang duit!" },
                            { title: "Kerja Hujung Minggu Terganggu", desc: "Tengah cuti pun kena reply WhatsApp. Stress, tak ada masa untuk diri sendiri." }
                        ].map((problem, idx) => (
                            <div key={idx} className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-red-500/20">
                                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-white text-lg">{problem.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{problem.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ==================================================================
            ELEMEN 3: PENYELESAIAN (JALAN KELUAR)
            Angle: SesiFoto = PA Digital Murah
           ================================================================== */}
                <section className="space-y-12 py-8">
                    <div className="text-center space-y-4">
                        <span className="text-studio-primary font-bold tracking-widest uppercase text-sm">Jalan Penyelesaian</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            SesiFoto: "PA" Digital Yang Tak Pernah MC.
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Sistem Lokal (Buatan Malaysia 🇲🇾) Paling Dipercayai Untuk Studio Fotografi Terus Maju Ke Depan.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg z-10">Live Sales: RM1,299 Hari Ini</div>
                        <img src="https://placehold.co/1000x600/1e293b/FFF?text=Dashboard+SesiFoto+Power" alt="Dashboard" className="w-full transform group-hover:scale-[1.02] transition-transform duration-700" />
                    </div>

                    <div className="grid gap-6">
                        <div className="bg-studio-card border border-white/5 p-6 rounded-2xl flex gap-5 items-start hover:border-studio-primary/30 transition-colors">
                            <div className="p-3 bg-studio-primary/20 rounded-lg text-studio-primary shrink-0">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Customer Booking Sendiri (Auto)</h3>
                                <p className="text-slate-400">Tak perlu 'PM Tepi'. Customer pilih pakej, pilih tarikh, dan terus book. Anda cuma tunggu notifikasi masuk.</p>
                            </div>
                        </div>

                        <div className="bg-studio-card border border-white/5 p-6 rounded-2xl flex gap-5 items-start hover:border-studio-primary/30 transition-colors">
                            <div className="p-3 bg-studio-primary/20 rounded-lg text-studio-primary shrink-0">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Bayaran Pantas (FPX Secured)</h3>
                                <p className="text-slate-400">Integrasi CHIP. Bayaran deposit terus masuk akaun. Resit auto-generate. Nampak 'Mahal' & Profesional.</p>
                            </div>
                        </div>

                        <div className="bg-studio-card border border-white/5 p-6 rounded-2xl flex gap-5 items-start hover:border-studio-primary/30 transition-colors">
                            <div className="p-3 bg-studio-primary/20 rounded-lg text-studio-primary shrink-0">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">WhatsApp Reminder (Zero No-Show)</h3>
                                <p className="text-slate-400">Sistem tolong ingatkan customer 24 jam sebelum sesi. Kurangkan risiko customer lupa atau lambat.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================================================
            ELEMEN 4: TESTIMONI (AUTHENTIC WHATSAPP STYLE)
            Angle: Real Results, Local Lingo
           ================================================================== */}
                <section className="space-y-10 border-t border-white/10 pt-16">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Bukti Dari Pemilik Studio Macam Anda
                        </h2>
                        <p className="text-slate-400">Bukan cakap kosong. Ini screenshot group support kami.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Testimonial 1 */}
                        <div className="bg-[#0b141a] p-4 rounded-xl border border-white/10 relative font-sans shadow-lg">
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">H</div>
                                <div>
                                    <div className="text-white font-bold text-sm">Haziq (Lensa Klasik)</div>
                                    <div className="text-xs text-slate-500">Online</div>
                                </div>
                            </div>
                            <div className="bg-[#1f2c34] text-slate-100 p-3 rounded-tr-lg rounded-bl-lg rounded-br-lg inline-block max-w-[95%] text-sm leading-relaxed relative">
                                Salam tuan. Fuhh lega gila guna sistem ni. Dulu Raya saya menangis nak reply 500 WhatsApp. <br /><br />Tahun ni <b>senyap sunyi</b> tapi sales masuk non-stop! Memang berbaloi, terima kasih team SesiFoto! 🙌🏻
                                <div className="text-[10px] text-slate-400 text-right mt-1">10:42 AM <span className="text-blue-400">✓✓</span></div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-[#0b141a] p-4 rounded-xl border border-white/10 relative font-sans shadow-lg">
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">S</div>
                                <div>
                                    <div className="text-white font-bold text-sm">Sarah (Momento Shah Alam)</div>
                                    <div className="text-xs text-slate-500">Online</div>
                                </div>
                            </div>
                            <div className="bg-[#1f2c34] text-slate-100 p-3 rounded-tr-lg rounded-bl-lg rounded-br-lg inline-block max-w-[95%] text-sm leading-relaxed relative">
                                Recommended! Takde lagi isu staff dua kali book slot. Customer pun puji sistem nampak <b>profesional & canggih</b>. Senang dorang nak bayar FPX. 👍🏻
                                <div className="text-[10px] text-slate-400 text-right mt-1">11:15 AM <span className="text-blue-400">✓✓</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================================================================
            ULTRA ELEMENT: BONUS STACK (VALUE STACKING)
            Angle: "Jimat Besar", "Rugi Kalau Tak Grab"
           ================================================================== */}
                <section className="bg-gradient-to-b from-white/5 to-transparent rounded-3xl p-8 border border-white/5 text-center space-y-8 mt-12 bg-white/5 backdrop-blur-sm">
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                        Daftar Hari Ini (Eksklusif) & Dapat <span className="text-yellow-400">3 Bonus PERCUMA</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "E-Book: Script Close Sales Raya", val: "Bernilai RM99", desc: "Copy paste je ayat ni, customer confirm bayar.", icon: <CheckCircle2 className="w-8 h-8 text-green-500" /> },
                            { title: "Template Invoice Pro", val: "Bernilai RM49", desc: "Nampak corporate, bukan resit tulis tangan.", icon: <CheckCircle2 className="w-8 h-8 text-green-500" /> },
                            { title: "Sesi Setup 1-on-1 Zoom", val: "Bernilai RM150", desc: "Kami tolong setup sampai jadi.", icon: <CheckCircle2 className="w-8 h-8 text-green-500" /> },
                        ].map((bonus, idx) => (
                            <div key={idx} className="bg-studio-black p-6 rounded-xl border border-dashed border-white/20 flex flex-col items-center gap-3 hover:bg-white/5 transition-colors group">
                                <div className="group-hover:scale-110 transition-transform">{bonus.icon}</div>
                                <h3 className="font-bold text-white text-lg">{bonus.title}</h3>
                                <p className="text-xs text-slate-400">{bonus.desc}</p>
                                <div className="text-xs font-bold text-yellow-500 uppercase tracking-widest bg-yellow-500/10 px-2 py-1 rounded">{bonus.val}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ==================================================================
            ELEMEN 5: CALL TO ACTION (CTA)
            Angle: Urgency + Risk Reversal
           ================================================================== */}
                <section className="bg-gradient-to-br from-red-600 to-studio-primary rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden group border border-red-500/30">
                    <div className="absolute inset-0 bg-[url('/img/noise.png')] opacity-20 mix-blend-overlay"></div>

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-black leading-tight">
                            Bertindak Sekarang! <br /> Jangan Biarkan Studio Anda "Kecundang".
                        </h2>

                        <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 max-w-md mx-auto border border-white/20 shadow-xl">
                            <div className="flex justify-between items-center mb-2 text-slate-200 text-sm">
                                <span>Langganan SesiFoto Basic</span>
                                <span className="line-through text-slate-400">RM99/b</span>
                            </div>
                            <div className="flex justify-between items-center mb-2 text-slate-200 text-sm">
                                <span>3 Bonus Eksklusif (Hanya Hari Ini)</span>
                                <span className="line-through text-slate-400">RM298</span>
                            </div>
                            <div className="h-px bg-white/20 my-4"></div>
                            <div className="flex justify-between items-center text-xl font-bold text-white">
                                <span>Jumlah Perlu Bayar:</span>
                                <span className="text-yellow-300 text-4xl animate-pulse">PERCUMA*</span>
                            </div>
                            <div className="text-right text-xs text-slate-300 mt-2 italic">*Untuk 14 hari percubaan pertama.</div>
                        </div>

                        <div className="py-2">
                            <a
                                href="https://office.sesifoto.my/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full sm:w-auto min-w-[320px] px-8 py-5 bg-white text-red-600 rounded-full font-black text-2xl hover:bg-slate-100 transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.4)] uppercase tracking-wide animate-pulse-slow border-4 border-white/50"
                            >
                                Daftar Akaun Sekarang
                            </a>
                            <p className="mt-6 text-sm font-medium opacity-90 flex items-center justify-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-400" /> Jaminan 100% Puas Hati • Tiada Kontrak • Cancel Anytime
                            </p>
                        </div>
                    </div>
                </section>


                {/* ==================================================================
            ELEMEN 6: FAQ
            Angle: Removing final friction
           ================================================================== */}
                <section className="space-y-8 pt-8">
                    <h2 className="text-2xl font-bold text-center text-white">Soalan Lazim (FAQ)</h2>
                    <div className="space-y-3">
                        {[
                            { q: "Susah ke nak setup? Saya buta IT.", a: "Jangan risau. Sistem ni direka memang untuk orang tak pandai IT. 5 minit siap setup. Ada video tutorial lagi." },
                            { q: "Duit customer masuk akaun siapa?", a: "Terus masuk akaun bank anda via FPX (Chip). Kami tak pegang duit anda. Selamat & telus." },
                            { q: "Ada kontrak ke ikat-ikat?", a: "Tiada kontrak. Anda bebas nak cancel bulan depan kalau tak suka. No hard feelings." },
                            { q: "Boleh try dulu ke?", a: "Mesti! Ambil free trial 14 hari ni. Test power dulu. Kalau puashati, baru sambung." }
                        ].map((faq, i) => (
                            <div key={i} className="border border-white/10 rounded-xl p-5 hover:bg-white/5 transition-colors">
                                <h3 className="font-bold text-white mb-2 flex items-center gap-3">
                                    <span className="bg-studio-primary text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">?</span>
                                    {faq.q}
                                </h3>
                                <p className="text-slate-400 pl-9 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center text-slate-500 text-sm pt-12 pb-24 md:pb-6 border-t border-white/5 mt-12">
                    <p>© 2024 SesiFoto. Hak Cipta Terpelihara.</p>
                    <p className="mt-2 text-xs opacity-50">Bangga Buatan Malaysia 🇲🇾 | Dibina Untuk Komuniti Fotografi</p>
                </footer>

            </div>

            {/* === ULTRA ELEMENT: STICKY MOBILE CTA === */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#0F172A] border-t border-white/10 p-4 md:hidden z-40 flex items-center gap-4 shadow-[0_-10px_50px_rgba(0,0,0,0.8)]">
                <div className="flex-1">
                    <div className="text-[10px] text-red-400 font-bold uppercase animate-pulse">Tawaran Tamat Segera!</div>
                    <div className="text-lg font-black text-white leading-none">PERCUMA <span className="text-xs font-normal text-slate-400">/ 14 hari</span></div>
                </div>
                <a href="https://office.sesifoto.my/register" className="flex-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-3 px-8 rounded-full text-center shadow-lg hover:scale-105 active:scale-95 transition-transform">
                    Daftar Sekarang
                </a>
            </div>

            {/* === ULTRA ELEMENT: FLOATING WHATSAPP === */}
            <a
                href="https://wa.link/rxj90f"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform flex items-center gap-2 pr-5 group"
            >
                <MessageCircle className="w-8 h-8" fill="white" stroke="none" />
                <span className="font-bold hidden group-hover:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
                    Tanya Sales
                </span>
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center font-bold text-white">1</span>
                </span>
            </a>

        </div>
    );
};

export default SalesPage;
