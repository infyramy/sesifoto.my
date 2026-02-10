import {
  Calendar,
  Camera,
  Users,
  CreditCard,
  Image as ImageIcon,
  LayoutDashboard,
  MessageCircle,
  Clock,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export type Language = 'en' | 'bm';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      signin: 'Sign in',
      getStarted: 'Get Started',
      support: 'Support'
    },
    announcement: {
      badge: 'Announcement!',
      title: 'Current Focus',
      // Single Paragraph Focus
      intro: 'SesiFoto is focusing support on the Raya 2026 Season with special access: a one-time fixed payment for full access until 30 April 2026.',

      // Compact Smart Pass
      specTitle: 'RAYA 2026 PASS',
      specPayLabel: 'FEE',
      specPayVal: 'ONE-TIME',
      specValidLabel: 'ACTIVE',
      specValidVal: '1 JAN - 30 APR 26',

      ticketCta: 'CHECK PRICE',
      ticketCtaHover: 'SCROLL TO READ MORE...',
      expiryNote: "System active until 30 Apr. Data remains safe & retrievable after season ends.",

      // Legacy/Fallback
      pricingTitle: 'One-Time Fixed Price',
      pricingDate: 'Valid: 1 Jan - 30 April',
      pricingDesc: 'Studio Owner Access',
      futureTitle: 'Future Roadmap',
      futureDescription: 'We will introduce low monthly subscriptions as we expand to other event types later.',
      promo: 'Take advantage of this one-time fixed rate for the entire season.'
    },
    hero: {
      badge: '#1 System for Studio Raya 2026',
      titleLine1: 'Simplify Booking Management',
      titleLine2: 'For Your Photo Studio.',
      subtitle: 'Manage bookings, payments, and customers in one system—customers book and pay themselves, you simply monitor the dashboard.',
      startTrial: 'Start Now',
      viewShowreel: 'Login →',
      noCard: 'No credit card',
      trialDays: '14-day free trial',
      cancelAnytime: 'Cancel anytime',
      screenshotTitle: 'Golden Hour Session',
      screenshotRev: 'Monthly Rev',
      screenshotPaid: 'Invoice Paid',
      trustedLabel: 'Trusted by Photography Studios in 🇲🇾',
      stats: {
        studios: {
          value: '10+',
          label: 'Studios Empowered',
          subLabel: '(Raya 2025)'
        },
        sales: {
          value: 'RM 300k+',
          label: 'Sales Managed',
          subLabel: '(Last Raya)'
        },
        origin: {
          value: '100%',
          label: 'Made in Malaysia 🇲🇾'
        }
      }
    },
    features: {
      titleLine1: 'Complete Solution',
      titleLine2: 'For Your Studio Management.',
      subtitle: 'Integrated system from booking, payment, to reporting. Designed for smooth operations of photography businesses.',
      list: [
        {
          title: "24/7 Booking Site",
          description: "Your studio runs non-stop. Accept bookings and deposits automatically even when you're closed. Customers choose their own slots and pay instantly—no need to wait for an admin to reply.",
          image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Booking+Site+UI&font=roboto",
          checkpoints: ["Real-Time Slot Updates", "Online Payment Integration", "Professional Booking Website"],
          demoLabel: "View Live Demo",
          demoLink: "https://studio-demo2.sesifoto.my"
        },
        {
          title: "Manage Bookings In One View",
          description: "Monitor bookings via list or calendar. Check or update details quickly without the headache.",
          image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Dashboard+UI&font=roboto",
          checkpoints: ["View Customer Booking Details", "Full Access to Customer Data", "Manage Status & Add-ons Easily"]
        },
        {
          title: "WhatsApp Notifications to Customers",
          description: "Official receipts and session reminders (24 hours prior) sent directly to customer's WhatsApp. Avoid 'no-shows' and look more professional.",
          image: "https://placehold.co/800x500/e2e8f0/1e293b?text=WhatsApp+Automation&font=roboto",
          checkpoints: ["Auto-Send Details to WhatsApp", "1-Day Prior Session Reminder", "Direct Sync to Google Calendar"]
        },
        {
          title: "Schedule & Price Control",
          description: "Set blackout dates, break times (like Buka Puasa), or 'Peak Season' prices easily. The system follows your settings automatically.",
          image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Scheduling+Settings&font=roboto",
          checkpoints: ["Specific Non-Operating Day Settings", "Special Pricing Settings (Discount/Peak)", "Dynamic Operating Schedule Settings", "Specific Break Time Settings"]
        },
        {
          title: "Analyze Your Studio Performance",
          description: "Make business decisions based on data, not guesswork. Track sales graphs and booking volume by month or week. Know your actual performance to grow your business.",
          image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Reporting+Dashboard&font=roboto",
          checkpoints: ["Sales Reports by Period", "Quick Filter (7/30 Days)", "Easy-to-Understand Trend Graphs"]
        }
      ],
      bentoGrid: {
        title: "Powerful Utilities",
        subtitle: "Everything else you need to run smoothly.",
        items: [
          { title: "Secure Database", description: "Customer data is encrypted and safe." },
          { title: "Fast Performance", description: "Optimized for speed on all devices." },
          { title: "Mobile Optimized", description: "Looks great on iPhone & Android." },
          { title: "Export Data", description: "Download your bookings to Excel/CSV." },
          { title: "Promo Codes", description: "Create vouchers for marketing campaigns." },
          { title: "Status Management", description: "Track Paid, Pending, and Refund statuses." },
          { title: "Auto-Receipt", description: "System generates digital receipts instantly." },
          { title: "Search & Filter", description: "Find any booking in seconds." }
        ]
      }
    },
    userBenefits: {
      title: "One System,",
      highlight: "Mutual Benefits.",
      description: "SesiFoto streamlines operations not just for studio owners, but also for your customers and photographers.",
      roles: {
        customer: {
          tab: "Customer",
          title: "For Customers",
          description: "A fast, easy, and transparent booking experience without waiting for WhatsApp replies.",
          points: [
            { title: "Book & Pay Instantly", desc: "Select a slot, pay deposit via FPX/Card, and get an instant receipt." },
            { title: "Real-time Availability", desc: "Check latest slot availability on the calendar without asking." },
            { title: "Automatic Receipt", desc: "Receive booking details and session reminders directly via WhatsApp." }
          ],
          badge: "Advantage",
          mockup: {
            confirmed: "Booking Confirmed!",
            message: "See you on 24 Dec, 10:00 AM",
            paymentSuccess: "Payment Success"
          }
        },
        owner: {
          tab: "Studio Owner",
          title: "For Studio Owners",
          description: "Automate your studio operations. Reduce manual work, avoid errors, and focus on business growth.",
          points: [
            { title: "No More Double Booking", desc: "System automatically locks slots once payment is made." },
            { title: "WhatsApp Automation", desc: "No need to reply 'is this slot available?' repeatedly. Robots answer for you." },
            { title: "Track Sales & Performance", desc: "View daily sales performance and booking trends on the dashboard." }
          ],
          badge: "Advantage",
          mockup: {
            salesTitle: "Today's Sales",
            totalBookings: "Total Bookings",
            new: "New"
          }
        },
        photographer: {
          tab: "Photographer",
          title: "For Photographers",
          description: "Focus on your art. Let the system handle scheduling and photography assignments.",
          points: [
            { title: "Daily Assignment Report", desc: "View today's 'Shotlist' clearly on your mobile phone." },
            { title: "Self-Claim Slot", desc: "Choose slots you want to take or accept assignments from admin." },
            { title: "Customer Details", desc: "Access theme info and customer add-ons before the session starts." }
          ],
          badge: "Advantage",
          mockup: {
            shotlist: "Today's Shotlist",
            newAssignment: "New Assignment",
            assignedBy: "Admin assigned you"
          }
        }
      }
    },
    integrations: {
      title: "Integrated with CHIP.",
      description: "Receive payments from your customers instantly. SesiFoto integrates with CHIP for its reliability, speed, and unbeatable rates.",
      cta: "Register CHIP Account",
      moreInfo: "More Info",
      note: "* Verified CHIP account is required to use SesiFoto."
    },
    testimonials: {
      title: 'What Studio Owners Say?',
      subtitle: 'They have switched to an automated system. When will you?',
      rating: '4.9/5 Average Rating',
      items: [
        {
          name: "Haziq",
          role: "Owner",
          company: "Lensa Klasik Bangi",
          content: "\"My admin used to cry trying to reply to 500 WhatsApps a day during Raya. Now customers book themselves, admin just shakes legs checking the dashboard.\"",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
        },
        {
          name: "Sarah",
          role: "Manager",
          company: "Momento Studio Shah Alam",
          content: "\"Love the commission feature the most. No need to fight with freelancers counting jobs. End of month press one button for report.\"",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
        },
        {
          name: "Encik Ramli",
          role: "Founder",
          company: "Cahaya Pictures JB",
          content: "\"Sales up 40% because no more double booking issues or missed customers. ROI is great for my business.\"",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
        }
      ]
    },
    pricing: {
      title: 'Available Plans',
      subtitle: 'Select a plan that fits your studio\'s growth stage.',
      popular: 'Recommended',
      plans: [
        {
          name: "Pro Package",
          price: "RM899",
          period: "",
          description: "Everything you need to automate bookings & payments.",
          features: [
            "Unlimited Booking Sessions",
            "Professional Booking Site",
            "Smart Calendar System",
            "Payment Gateway",
            "Google Calendar Sync",
            "Email Notifications",
            "Custom Domain",
            "Basic Reports"
          ],
          cta: "Get Started"
        },
        {
          name: "Prime Package",
          price: "RM1499",
          period: "",
          description: "Powerful tools to manage your team & grow revenue.",
          features: [
            "Everything in Pro Package, plus:",
            "Manage Photographers",
            "WhatsApp Reminders",
            "Coupons & Vouchers",
            "In-Depth Reporting",
            "Priority Support"
          ],
          cta: "Get Started",
          popular: true
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: "How do I start using this system?",
          answer: "It's simple. 1) Register an account. 2) Complete studio & package details. 3) Connect CHIP account. Done!<br/><br/><strong>When can customers book?</strong> Immediately. Once you complete the steps above and share the booking link, the system is ready to accept bookings 24/7."
        },
        {
          question: "What is the main difference vs. manual management?",
          answer: "<strong>Automation & Efficiency.</strong><br/>Manual management demands your time to reply to WhatsApp & check bank receipts. With SesiFoto, customers select slots and pay online. The system automatically locks the slot. You only need to focus on photography."
        },
        {
          question: "What payment gateway is used & why is it important?",
          answer: "We use <strong>CHIP</strong>. It is required so the system can verify payments & lock slots automatically (without manual receipt checking). Transaction fees are low & settlement funds are deposited directly into your bank account."
        },
        {
          question: "Why is the pricing structure like this?",
          answer: "This is a <strong>One-Off</strong> price specifically for this season. Pay once for usage until 30 April 2026. No monthly commitments. Typically, the system cost is recovered after just 1-2 Raya assignments."
        },
        {
          question: "Is this system active forever?",
          answer: "Full access is provided until <strong>30 April 2026</strong>. After this date, you can still log in to download customer data, but booking functions will be temporarily closed for upgrades to the new version."
        },
        {
          question: "How are refunds handled for cancellations?",
          answer: "Fully subject to your studio's SOP. You have the option to reschedule the slot, provide credit coupons (Agency Plan) for new bookings, or cancel the booking and refund manually."
        },
        {
          question: "Is technical support provided if issues arise?",
          answer: "Yes, our team is ready to assist. You can contact our customer service directly if any technical issues arise. We understand that the Raya season is a critical time for your business."
        }
      ]
    },
    footer: {
      ctaBanner: {
        badge: 'Raya 2026 Ready?',
        titleLine1: 'Maximize Your Studio\'s Potential',
        titleLine2: 'for Raya 2026.',
        primaryCta: 'Start Now'
      },
      preFooterTitle: 'Raya 2026 Ready?',
      preFooterSubtitle: 'Maximize Your Studio\'s Potential for Raya 2026. Don\'t Miss Out. Setup Your System Today.',
      taglineLine1: 'Beautifully designed, powerfully built.',
      taglineLine2: '',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      rights: 'All rights reserved.',
      system: 'System Operational',
      links: {
        features: 'Features',
        pricing: 'Pricing',
        showcase: 'Showcase',
        changelog: 'Changelog',
        about: 'About Us',
        careers: 'Careers',
        blog: 'Blog',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookie: 'Cookie Policy'
      }
    },
    news: {
      title: 'News & Updates',
      subtitle: 'Stay up to date with the latest features, announcements, and tips to get the most out of SesiFoto.',
      readMore: 'Read More',
      backToNews: 'Back to News',
      postedOn: 'Posted on',
      categories: {
        all: 'All Updates',
        announcement: 'Announcement',
        feature: 'Feature',
        article: 'Article'
      },
      empty: 'No updates found for this category.'
    }
  },
  bm: {
    nav: {
      home: 'Utama',
      features: 'Ciri-ciri',
      pricing: 'Harga',
      faq: 'Soalan Lazim',
      signin: 'Log Masuk',
      getStarted: 'Mula Sekarang',
      support: 'Bantuan'
    },
    announcement: {
      badge: 'Pemberitahuan!',
      title: 'Fokus Semasa',
      // Single Paragraph Focus
      intro: 'SesiFoto memfokuskan sokongan kepada Musim Raya 2026 dengan akses khas, cuma bayaran sekali tetap untuk akses penuh SesiFoto sehingga 30 April 2026.',

      // Compact Smart Pass
      specTitle: 'PAS MUSIM RAYA',
      specPayLabel: 'BAYARAN',
      specPayVal: 'SEKALI',
      specValidLabel: 'AKTIF',
      specValidVal: '1 JAN - 30 APR 26',

      ticketCta: 'LIHAT HARGA',
      ticketCtaHover: 'SCROLL UNTUK BACA LEBIH LANJUT...',
      expiryNote: "Sistem aktif hingga 30 Apr. Data kekal selamat & boleh diminta semula selepas tamat.",

      pricingTitle: 'Harga Tetap Sekali Bayar',
      pricingDate: 'Sah: 1 Jan - 30 April',
      pricingDesc: 'Akses Pemilik Studio',
      futureTitle: 'Hala Tuju Masa Depan',
      futureDescription: 'Kami akan perkenalkan langganan bulanan rendah apabila kami berkembang ke acara lain kelak.',
      promo: 'Manfaatkan kadar tetap sekali bayar ini untuk kegunaan sepanjang musim.'
    },
    hero: {
      badge: 'Sistem #1 Untuk Studio Raya 2026',
      titleLine1: 'Mudahkan Urusan Tempahan',
      titleLine2: 'Studio Foto Anda.',
      subtitle: 'Urus tempahan, bayaran dan pelanggan dalam satu sistem — pelanggan tempah dan bayar sendiri, anda cuma pantau dashboard.',
      startTrial: 'Mula Sekarang',
      viewShowreel: 'Log Masuk →',
      noCard: 'Tiada kad kredit',
      trialDays: '14-hari percubaan percuma',
      cancelAnytime: 'Batal bila-bila masa',
      screenshotTitle: 'Sesi Golden Hour',
      screenshotRev: 'Hasil Bulanan',
      screenshotPaid: 'Invois Dibayar',
      trustedLabel: 'Dipercayai oleh Studio Foto di 🇲🇾',
      stats: {
        studios: {
          value: '10+',
          label: 'Studio Dibantu',
          subLabel: '(Raya 2025)'
        },
        sales: {
          value: 'RM 300k+',
          label: 'Jualan Diuruskan',
          subLabel: '(Raya Lepas)'
        },
        origin: {
          value: '100%',
          label: 'Buatan Malaysia 🇲🇾'
        }
      }
    },
    features: {
      titleLine1: 'Solusi Lengkap',
      titleLine2: 'Pengurusan Studio Anda.',
      subtitle: 'Sistem bersepadu dari tempahan, pembayaran, hingga pelaporan. Direka untuk kelancaran operasi bisnes fotografi.',
      list: [
        {
          title: "Laman Tempahan 24/7",
          description: "Studio anda beroperasi tanpa henti. Terima tempahan dan bayaran deposit secara automatik walaupun studio tutup. Pelanggan boleh pilih slot sendiri dan terus bayar tanpa perlu tunggu admin *reply* mesej.",
          image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Booking+Site+UI&font=roboto",
          checkpoints: ["Kemas kini Slot *Real-Time*", "Integrasi Bayaran *Online*", "*Website* Tempahan Profesional"],
          demoLabel: "Lihat Demo Live",
          demoLink: "https://studio-demo2.sesifoto.my"
        },
        {
          title: "Urus Tempahan Dalam Satu Paparan",
          description: "Pantau tempahan dalam bentuk senarai atau kalendar. Semak atau kemaskini booking details dengan pantas tanpa pening kepala.",
          image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Dashboard+UI&font=roboto",
          checkpoints: ["Lihat Booking Details Pelanggan", "Akses Penuh Data Pelanggan", "Urus Status & *Add-on* Mudah"]
        },
        {
          title: "Notifikasi WhatsApp ke Pelanggan",
          description: "Resit rasmi dan peringatan sesi (24 jam sebelum) dihantar terus ke WhatsApp pelanggan. Elak kes 'no-show' dan nampak lebih profesional di mata pelanggan.",
          image: "https://placehold.co/800x500/e2e8f0/1e293b?text=WhatsApp+Automation&font=roboto",
          checkpoints: ["Auto-Hantar Butiran ke WhatsApp", "Peringatan Sesi 1 Hari Sebelum", "*Sync* Terus ke Google Calendar"]
        },
        {
          title: "Kawalan Jadual & Harga",
          description: "Tetapkan tarikh tutup (Blackout), waktu rehat khas (seperti Buka Puasa), atau harga 'Peak Season' dengan mudah. Sistem akan ikut tetapan anda secara automatik.",
          image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Scheduling+Settings&font=roboto",
          checkpoints: ["Tetapan Hari Tak Beroperasi Spesifik", "Tetapan Harga Khas (Diskaun/Puncak)", "Tetapan Jadual Waktu Operasi Dinamik", "Tetapan Masa Rehat Spesifik"]
        },
        {
          title: "Analisa Prestasi Studio Anda",
          description: "Buat keputusan bisnes berdasarkan data, bukan agak-agak. Pantau graf jualan dan jumlah tempahan mengikut bulan atau minggu. Tahu prestasi sebenar untuk kembangkan lagi bisnes anda.",
          image: "https://placehold.co/800x500/e2e8f0/1e293b?text=Reporting+Dashboard&font=roboto",
          checkpoints: ["Laporan Jualan Ikut Tempoh", "Filter Pantas (7/30 Hari)", "Graf <i>Trend</i> Mudah Faham"]
        }
      ],
      bentoGrid: {
        title: "Fungsi Tambahan",
        subtitle: "Kelengkapan lain untuk melancarkan operasi bisnes.",
        items: [
          { title: "Data Selamat", description: "Pangkalan data pelanggan disulitkan dan selamat." },
          { title: "Prestasi Pantas", description: "Dioptimumkan untuk kelajuan akses maksimum." },
          { title: "Mesra Mudah Alih", description: "Paparan responsif untuk iPhone & Android." },
          { title: "Eksport Data", description: "Muat turun rekod tempahan ke Excel/CSV." },
          { title: "Kod Promo", description: "Cipta baucar diskaun untuk kempen pemasaran." },
          { title: "Status Tempahan", description: "Jejak status Bayaran, Pending, atau Refund." },
          { title: "Resit Automatik", description: "Penjanaan invois & resit digital segera." },
          { title: "Carian Pintar", description: "Cari maklumat pelanggan dalam masa saat." }
        ]
      }
    },
    userBenefits: {
      title: "Satu Sistem,",
      highlight: "Manfaat Bersama.",
      description: "SesiFoto memudahkan urusan bukan sahaja untuk pemilik studio, tetapi juga pelanggan dan jurugambar anda.",
      roles: {
        customer: {
          tab: "Pelanggan",
          title: "Untuk Pelanggan (Customer)",
          description: "Pengalaman tempahan yang pantas, mudah, dan telus tanpa perlu menunggu balasan WhatsApp.",
          points: [
            { title: "Tempah & Bayar Terus", desc: "Pilih slot, bayar deposit via FPX/Card, dan dapat resit serta-merta." },
            { title: "Real-time Availability", desc: "Lihat kekosongan slot terkini di kalendar tanpa perlu bertanya." },
            { title: "Resit Automatik", desc: "Terima butiran tempahan dan peringatan sesi terus ke WhatsApp." }
          ],
          badge: "Kelebihan",
          mockup: {
            confirmed: "Booking Confirmed!",
            message: "See you on 24 Dec, 10:00 AM",
            paymentSuccess: "Payment Success"
          }
        },
        owner: {
          tab: "Pemilik Studio",
          title: "Untuk Pemilik Studio",
          description: "Automasikan operasi studio anda. Kurangkan kerja manual, elakkan ralat, dan fokus pada pengembangan bisnes.",
          points: [
            { title: "No More Double Booking", desc: "Sistem mengunci slot secara automatik setelah pembayaran dibuat." },
            { title: "Automasi WhatsApp", desc: "Tak perlu reply 'slot ni kosong ke?' berulang kali. Robot jawab untuk anda." },
            { title: "Track Sales & Performance", desc: "Lihat prestasi jualan harian dan trend tempahan di dashboard." }
          ],
          badge: "Kelebihan",
          mockup: {
            salesTitle: "Today's Sales",
            totalBookings: "Total Bookings",
            new: "New"
          }
        },
        photographer: {
          tab: "Jurugambar",
          title: "Untuk Jurugambar",
          description: "Fokus pada karya seni anda. Biar sistem uruskan jadual dan penugasan sesi fotografi.",
          points: [
            { title: "Laporan Tugasan Harian", desc: "Lihat senarai 'Shotlist' hari ini dengan jelas di telefon bimbit." },
            { title: "Self-Claim Slot", desc: "Pilih slot yang ingin diambil atau terima tugasan daripada admin." },
            { title: "Butiran Pelanggan", desc: "Akses info tema dan add-on pelanggan sebelum sesi bermula." }
          ],
          badge: "Kelebihan",
          mockup: {
            shotlist: "Today's Shotlist",
            newAssignment: "New Assignment",
            assignedBy: "Admin assigned you"
          }
        }
      }
    },
    integrations: {
      title: "Terima bayaran melalui CHIP",
      description: "SesiFoto berintegrasi dengan CHIP. Bayaran pelanggan terus ke akaun bank studio anda. Setup mudah dengan akaun CHIP yang disahkan.",
      cta: "Daftar Akaun CHIP",
      moreInfo: "Maklumat Lanjut",
      note: "* Akaun CHIP yang dah verified diperlukan untuk guna SesiFoto."
    },
    testimonials: {
      title: 'Apa Kata Pemilik Studio?',
      subtitle: 'Mereka telah beralih ke sistem digital. Anda bila lagi?',
      rating: '4.9/5 Purata Penilaian',
      items: [
        {
          name: "Haziq",
          role: "Owner",
          company: "Lensa Klasik Bangi",
          content: "\"Dulu admin saya terkejar-kejar nak reply 500 WhatsApp sehari masa Raya. Sekarang customer book sendiri, admin hanya perlu pantau dashboard sahaja.\"",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
        },
        {
          name: "Sarah",
          role: "Manager",
          company: "Momento Studio Shah Alam",
          content: "\"Sistem yang sangat membantu pengurusan waktu puncak. Laporan jualan hujung bulan pun senang nak dapat. Sangat efisien.\"",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
        },
        {
          name: "Encik Ramli",
          role: "Founder",
          company: "Cahaya Pictures JB",
          content: "\"Sales meningkat 40% sebab tiada lagi isu double booking atau terlepas pandang customer. ROI terbaik untuk bisnes saya.\"",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
        }
      ]
    },
    pricing: {
      title: 'Pakej Tersedia',
      subtitle: 'Pilih pakej yang sesuai dengan tahap pertumbuhan studio anda.',
      popular: 'Disyorkan',
      plans: [
        {
          name: "Pakej Pro",
          price: "RM899",
          period: "",
          description: "Semua yang anda perlukan untuk sistem tempahan digital.",
          features: [
            "Sesi tempahan Tanpa Had",
            "Laman Tempahan Profesional",
            "Kalendar Pintar",
            "Terima bayaran secara online",
            "<i>Sync</i> dengan Google Calendar",
            "Notifikasi Email",
            "<i>Custom Subdomain</i>",
            "Laporan Asas"
          ],
          cta: "Mula Sekarang"
        },
        {
          name: "Pakej Prime",
          price: "RM1499",
          period: "",
          description: "Alat berkuasa untuk urus pasukan & tingkatkan hasil.",
          features: [
            "Semua dalam Pakej Pro, Termasuk:",
            "Pengurusan Jurugambar",
            "Peringatan automatik melalui WhatsApp",
            "Kupon & Baucar",
            "Laporan Terperinci",
            "Sokongan Keutamaan"
          ],
          cta: "Mula Sekarang",
          popular: true
        }
      ]
    },
    faq: {
      title: 'Soalan Lazim Ditanya',
      subtitle: 'Ada soalan lain? Hubungi kami terus.',
      items: [
        {
          question: "Bagaimanakah cara untuk mula menggunakan sistem ini?",
          answer: "Prosesnya mudah sahaja. 1) Daftar akaun. 2) Lengkapkan maklumat studio & pakej. 3) Hubungkan akaun CHIP. Selesai!<br/><br/><strong>Bilakah pelanggan boleh mula menempah?</strong> Serta-merta. Sebaik sahaja anda melengkapkan langkah di atas dan berkongsi pautan tempahan, sistem sedia menerima tempahan 24 jam sehari."
        },
        {
          question: "Apakah perbezaan utama berbanding pengurusan manual?",
          answer: "<strong>Automasi & Kecekapan.</strong><br/>Pengurusan manual menuntut masa anda untuk membalas WhatsApp & menyemak resit bank. Dengan SesiFoto, pelanggan memilih slot dan membuat bayaran dalam talian. Sistem akan mengunci slot secara automatik. Anda hanya perlu fokus kepada fotografi."
        },
        {
          question: "Apakah gerbang pembayaran yang digunakan & kepentingannya?",
          answer: "Kami menggunakan <strong>CHIP</strong>. Ia diperlukan supaya sistem dapat mengesahkan pembayaran & mengunci slot secara automatik (tanpa perlu semakan resit manual). Caj transaksi adalah rendah & wang penyelesaian (<em>settlement</em>) dimasukkan terus ke akaun bank anda."
        },
        {
          question: "Mengapakah struktur harga pakej sebegini?",
          answer: "Ini adalah harga <strong>Sekali Bayar (One-Off)</strong> khusus untuk musim ini. Bayaran sekali sahaja untuk penggunaan sehingga 30 April 2026. Tiada komitmen bulanan. Kebiasaannya, modal kos sistem akan pulang selepas 1-2 tugasan raya sahaja."
        },
        {
          question: "Adakah sistem ini aktif selamanya?",
          answer: "Akses penuh diberikan sehingga <strong>30 April 2026</strong>. Selepas tarikh ini, anda masih boleh log masuk untuk memuat turun data pelanggan, namun fungsi tempahan akan ditutup sementara bagi tujuan penambahbaikan ke versi baharu."
        },
        {
          question: "Bagaimanakah proses pemulangan wang (refund) jika berlaku pembatalan?",
          answer: "Tertakluk sepenuhnya kepada SOP studio anda. Anda mempunyai pilihan untuk mengubah tarikh slot, memberikan kupon kredit (Pelan Agensi) untuk tempahan baharu, atau membatalkan tempahan dan memulangkan wang secara manual."
        },
        {
          question: "Adakah sokongan teknikal disediakan jika timbul masalah?",
          answer: "Ya, pasukan kami bersedia membantu. Anda boleh terus menghubungi khidmat pelanggan kami jika terdapat sebarang isu teknikal. Kami memahami bahawa musim raya adalah waktu kritikal bagi perniagaan anda."
        }
      ]
    },
    footer: {
      ctaBanner: {
        badge: 'Sedia Untuk Raya 2026?',
        titleLine1: 'Maksimumkan Potensi Studio Anda',
        titleLine2: 'Untuk Raya 2026.',
        primaryCta: 'Mula Sekarang'
      },
      preFooterTitle: 'Sedia Untuk Raya 2026?',
      preFooterSubtitle: 'Maksimumkan Potensi Studio Anda Untuk Raya 2026. Jangan Terlepas. Setup Sistem Hari Ini.',
      taglineLine1: 'Direka dengan indah, dibina dengan hebat.',
      taglineLine2: '',
      product: 'Produk',
      company: 'Syarikat',
      legal: 'Perundangan',
      rights: 'Hak cipta terpelihara.',
      system: 'Sistem Beroperasi',
      links: {
        features: 'Ciri-ciri',
        pricing: 'Harga',
        showcase: 'Pameran',
        changelog: 'Log Perubahan',
        about: 'Tentang Kami',
        careers: 'Kerjaya',
        blog: 'Blog',
        contact: 'Hubungi',
        privacy: 'Dasar Privasi',
        terms: 'Terma Perkhidmatan',
        cookie: 'Dasar Kuki'
      }
    },
    news: {
      title: 'Berita & Terkini',
      subtitle: 'Kekal maklum dengan ciri terkini, pengumuman, dan tips untuk memaksimumkan penggunaan SesiFoto.',
      readMore: 'Baca Lagi',
      backToNews: 'Kembali ke Berita',
      postedOn: 'Diterbitkan pada',
      categories: {
        all: 'Semua Terkini',
        announcement: 'Pengumuman',
        feature: 'Ciri Baru',
        article: 'Artikel'
      },
      empty: 'Tiada kemas kini dijumpai untuk kategori ini.'
    }
  }
};