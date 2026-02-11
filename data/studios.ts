export interface Studio {
    id: string; // slug from API
    name: string; // studioName from API
    state: 'johor' | 'kedah' | 'kelantan' | 'melaka' | 'negeri-sembilan' | 'pahang' | 'perak' | 'perlis' | 'pulau-pinang' | 'sabah' | 'sarawak' | 'selangor' | 'terengganu' | 'kuala-lumpur' | 'putrajaya' | 'labuan';
    logo?: string;
    address?: string;
    bookingPageLink: string;
    phone?: string;
}

export const STUDIOS_DATA: Studio[] = [
    {
        id: "studiorayakuantan",
        name: "ARTSY STUDIO",
        logo: "https://cdn.sesifoto.my/logos/d981f51b-73e7-4e2b-bed9-b9c69ec0cb39-02a8bef4d632b6cda6b81066e9609548.webp",
        address: "Kuantan",
        bookingPageLink: "https://studiorayakuantan.sesifoto.my",
        phone: "+601156316736",
        state: "pahang"
    },
    {
        id: "studiorayashahalam",
        name: "CANDYFILM STUDIO",
        logo: "https://cdn.sesifoto.my/logos/52921989-8037-457b-9682-99fa8c1e52e2-f38a7b196326f79b2668cf536ab3d10a.webp",
        address: "13A jalan keluli ap7/ap seksyen 7 40200 shah alam",
        bookingPageLink: "https://studiorayashahalam.sesifoto.my",
        phone: "+601154249851",
        state: "selangor"
    },
    {
        id: "cleographystudio",
        name: "Cleography Studio",
        logo: "https://cdn.sesifoto.my/logos/b026be12-fdae-4f43-8815-2a252d2ae205-4d4511cbbe35fe03e380e62911bd87fd.webp",
        address: "Lot 29150, Jalan Bunga Kertas, Jalan Kampung Gebok, Kampung Gebok, 71700 Pajam, Negeri Sembilan",
        bookingPageLink: "https://cleographystudio.sesifoto.my",
        phone: "+60175274487",
        state: "negeri-sembilan"
    },
    {
        id: "saroja-management-1768982122364",
        name: "Dayang Safwanah's Studio",
        bookingPageLink: "https://saroja-management-1768982122364.sesifoto.my",
        state: "perlis"
    },
    {
        id: "dhuaruangstudio",
        name: "DHÜA RUANG",
        logo: "https://cdn.sesifoto.my/logos/73f27b59-a5b2-46e1-949b-22edfd6b5f94-baa8369f0541de14da34a6540b33be95.webp",
        address: "Balai Raya Taman Desa Perwira, Jalan Perwira 3 Taman Desa Perwira",
        bookingPageLink: "https://dhuaruangstudio.sesifoto.my",
        state: "johor"
    },
    {
        id: "penang",
        name: "DUO STUDIO",
        logo: "https://cdn.sesifoto.my/logos/0ba0c792-2e8e-42fd-92ea-c5bd7bf1edc1-30f10583d2088e2aaf28ba3e024e8b30.webp",
        address: "1-47, PUSAT PERNIAGAAN PERDANA JAYA, BANDAR PERDA",
        bookingPageLink: "https://penang.sesifoto.my",
        phone: "+601154457017",
        state: "pulau-pinang"
    },
    {
        id: "entatajir",
        name: "Enta Tajir Studio",
        logo: "https://cdn.sesifoto.my/logos/485bab97-3117-4950-9635-793cea25ae23-fe07981350c5c8aeb0096da0eafbad48.webp",
        address: "8B, 1, Jalan Nirwana 1/1, Taman Nirwana, 68000 Ampang Jaya, Selangor",
        bookingPageLink: "https://entatajir.sesifoto.my",
        phone: "+60132499168",
        state: "selangor"
    },
    {
        id: "filltheframestudio",
        name: "FILL THE FRAME STUDIO",
        logo: "https://cdn.sesifoto.my/logos/3106d0e7-227a-4520-a7fc-b133b90dafbf-e612ba925f890edd8f1eeb9072f4b22c.webp",
        address: "D2-05-07, Tamarind Square, Persiaran Multimedia, Cyberjaya, 63000 Cyberjaya, Selangor",
        bookingPageLink: "https://filltheframestudio.sesifoto.my",
        phone: "+60137228909",
        state: "selangor"
    },
    {
        id: "kanvasstudio",
        name: "KANVAS STUDIO",
        bookingPageLink: "https://kanvasstudio.sesifoto.my",
        state: "selangor"
    },
    {
        id: "kgr2026",
        name: "Kedai Gambar Raya 2026",
        logo: "https://cdn.sesifoto.my/logos/1d8f93d2-d657-4ac3-8071-2101b054f85a-982af1983cd215de15d6ee66bf0e0c12.webp",
        bookingPageLink: "https://kgr2026.sesifoto.my",
        phone: "+60199063753",
        state: "pahang"
    },
    {
        id: "memorastudio",
        name: "Memora Studio",
        logo: "https://cdn.sesifoto.my/logos/0e828116-d72b-4757-a584-1d15a1425e38-fa17adf63d37c152e25fa7c6e78ec16f.webp",
        address: "Jalan Seluang P8/7, Presint 8, 62250 Putrajaya, Wilayah Persekutuan Putrajaya",
        bookingPageLink: "https://memorastudio.sesifoto.my",
        phone: "+601137949568",
        state: "putrajaya"
    },
    {
        id: "studiokedah-1768357661314",
        name: "Mohamad Iqbal bin Zubir's Studio",
        bookingPageLink: "https://studiokedah-1768357661314.sesifoto.my",
        state: "kedah"
    },
    {
        id: "xia0ddin-work-1768231471523",
        name: "Muhammad Ziauddin Bin Abdul Jalil's Studio",
        bookingPageLink: "https://xia0ddin-work-1768231471523.sesifoto.my",
        state: "selangor"
    },
    {
        id: "oakstudio",
        name: "Oak Studio",
        logo: "https://api.sesifoto.my/uploads/logos/33514c3a-89d6-4956-9e90-88eb573d6485-8782c1c2a89ef142ca6f939e0b058ab4.webp",
        address: "Shorea Glass Hall, Jalan Madrasah, 43100 Hulu Langat, Selangor",
        bookingPageLink: "https://oakstudio.sesifoto.my",
        phone: "+601110201298",
        state: "selangor"
    },
    {
        id: "picxelstudio",
        name: "Picxel Studio",
        logo: "https://cdn.sesifoto.my/logos/e77937e5-461b-468f-a77a-898ab037df7e-544a69f86fe82477250b50234e3997c4.webp",
        address: "C-1, 2, Jalan Prima Saujana 2/A, Prima Saujana, 43000 Kajang, Selangor",
        bookingPageLink: "https://picxelstudio.sesifoto.my",
        phone: "+60148327950",
        state: "selangor"
    },
    {
        id: "povstudio",
        name: "pov studio",
        logo: "https://cdn.sesifoto.my/logos/99af424f-bd8d-4a09-8532-718ec1e13070-b4070c560a0748a384edf3dd94f6666d.webp",
        bookingPageLink: "https://povstudio.sesifoto.my",
        state: "selangor"
    },
    {
        id: "rangkaraya",
        name: "RANGKA RAYA.",
        logo: "https://api.sesifoto.my/uploads/logos/96348c46-b6bc-48d4-aaf4-0f018f5b3cea-a8cfef0d3c8494dae130deafb2905c8b.webp",
        address: "Rangka Studio @ Lightreys 23A-1 JALAN LGSB 1/2, OFF, Jalan Hospital, PUSAT KOMERSIAL LGSB, 47000 Sungai Buloh, Selangor",
        bookingPageLink: "https://rangkaraya.sesifoto.my",
        phone: "+60197053550",
        state: "selangor"
    },
    {
        id: "rawsoulstudio",
        name: "Rawsoul Studio",
        logo: "https://cdn.sesifoto.my/logos/37c232a2-319e-4b99-afd5-975e71e7d960-1a75e443e23a35e709083247a394d309.webp",
        address: "Taman Kohafas Agro Darau, Kampung Darau, 22000 Jerteh, Terengganu",
        bookingPageLink: "https://rawsoulstudio.sesifoto.my",
        phone: "+601155522375",
        state: "terengganu"
    },
    {
        id: "rswcrayastudio",
        name: "RAYA STUDIO By RSWC",
        logo: "https://cdn.sesifoto.my/logos/c9389c10-89e6-4ce9-9187-af76b50cfd9b-bf7a5c9d3f0a2d9ebfc0b4672b123605.webp",
        address: "75, TKT 1 JALAN PEKAKA INDAH 1, PUSAT PERNIAGAAN PEKAKA INDAH, 14300, NIBONG TEBAL, PULAU PINANG",
        bookingPageLink: "https://rswcrayastudio.sesifoto.my",
        phone: "+601134119153",
        state: "pulau-pinang"
    },
    {
        id: "rona",
        name: "RONA STUDIO",
        logo: "https://cdn.sesifoto.my/logos/5c4f643a-24f0-449a-97c8-ee9c92116a21-6b2daa03ab14f2108f770b4898b5c89e.webp",
        address: "2, Jalan KSB 22, 75200, KOTA SHAHBANDAR MELAKA",
        bookingPageLink: "https://rona.sesifoto.my",
        phone: "+60162658483",
        state: "melaka"
    },
    {
        id: "satwostudio",
        name: "Sa'Two Studio",
        logo: "https://cdn.sesifoto.my/logos/bac63a75-a760-4d41-abbb-cecd759487e6-53e1f12b0f748b601aa31686f9ea3eb5.webp",
        address: "No 25B Jalan Belatuk 5 , Taman Scientex , Pasir Gudang 81700 , Johor Bahru",
        bookingPageLink: "https://satwostudio.sesifoto.my",
        phone: "+601120643882",
        state: "johor"
    },
    {
        id: "saferadigitalraya2026",
        name: "SAFERA DIGITAL STUDIO",
        logo: "https://api.sesifoto.my/uploads/logos/912591a3-20af-4144-98fb-eea2ec678501-8510ab58f71bdab156253a9a9206a266.webp",
        bookingPageLink: "https://saferadigitalraya2026.sesifoto.my",
        phone: "+60197751838",
        state: "johor"
    },
    {
        id: "sedetikstudio",
        name: "Sedetik Studio",
        logo: "https://cdn.sesifoto.my/logos/f34be7df-b52f-4812-888d-01597e383236-11ddc7a6b98203f2607f876bec1b87c9.webp",
        address: "46-01, Jalan Kota 2/5, Kawasan Perindustrian Kota Puteri 81750 Masai Johor",
        bookingPageLink: "https://sedetikstudio.sesifoto.my",
        phone: "+601125252375",
        state: "johor"
    },
    {
        id: "spdproduction",
        name: "Spdproduction",
        logo: "https://cdn.sesifoto.my/logos/5496f118-6abb-41d4-a82c-62ca3bad1cb8-82ba15ebcdc8f7f9f452c1e9487378b9.webp",
        address: "Level 4 Block E, Tamarind Square",
        bookingPageLink: "https://spdproduction.sesifoto.my",
        phone: "+60186691482",
        state: "selangor"
    },
    {
        id: "studiopandanindah",
        name: "Studio Pandan Indah",
        logo: "https://cdn.sesifoto.my/logos/a357ec92-4677-4946-bae3-b003d32a5ee4-7d174ea660f5608392bdba6acc8fc5e9.webp",
        address: "No. 15A, Jalan Pandan Indah 4/6a, Pandan Indah, 55100 Kuala Lumpur",
        bookingPageLink: "https://studiopandanindah.sesifoto.my",
        phone: "+60135754375",
        state: "kuala-lumpur"
    },
    {
        id: "perlis",
        name: "STUDIO PERLIS",
        logo: "https://cdn.sesifoto.my/logos/1c1c5fe9-9dc8-4fc3-b5dd-90f80e62498a-6403a12e59b2e54dcf1fdb36989079fc.webp",
        address: "95A, BAZAR MARA KUALA PERLIS, KUALA PERLIS (ATAS LAKSA KAKSU)",
        bookingPageLink: "https://perlis.sesifoto.my",
        phone: "+601154457017",
        state: "perlis"
    },
    {
        id: "studiorayakotak",
        name: "Studio Raya Kotak",
        logo: "https://cdn.sesifoto.my/logos/b2734264-429b-41e6-9d88-6d3f66d52b33-db31fdd5d72d4459ab2a19529cd3a960.webp",
        address: "Kotak Glasshouse, 2111, Jalan Permas Utara, Bandar Baru Permas Jaya, 81750 Masai, Johor Darul Ta'zim",
        bookingPageLink: "https://studiorayakotak.sesifoto.my",
        state: "johor"
    },
    {
        id: "studiorayaseberangjaya",
        name: "Studio Raya Seberang jaya",
        logo: "https://cdn.sesifoto.my/logos/5e87fbed-c0ac-45d8-a8bf-c7e3ac883e58-bf34839b5ea9f24424af9c7ad97dc5da.webp",
        address: "31A, Tingkat Siakap 3, Kompleks Siakap, 13700, Seberang Jaya, Penang",
        bookingPageLink: "https://studiorayaseberangjaya.sesifoto.my",
        phone: "+601123932429",
        state: "pulau-pinang"
    },
    {
        id: "studiobyohsnappictures",
        name: "Studioby.ohsnappictures",
        logo: "https://cdn.sesifoto.my/logos/052d02f5-48f3-42da-bf69-1dd5cce18483-e767179d8184861cb90517466e6f837c.webp",
        address: "7B, Jalan Kenanga 1/4, Bandar Baru Salak Tinggi, 43900 Sepang, Selangor",
        bookingPageLink: "https://studiobyohsnappictures.sesifoto.my",
        phone: "+601114244139",
        state: "selangor"
    },
    {
        id: "rayawithruang26",
        name: "TALES CREATIVE VENTURE",
        logo: "https://cdn.sesifoto.my/logos/bdaf9afa-8ea0-4bea-8f6a-f1c2b5d5674a-2d389fa2c8916a09693338e73a68636d.webp",
        address: "110-2, Jalan 1/5, Bandar Teknologi Kajang, 43500 Semenyih, Selangor",
        bookingPageLink: "https://rayawithruang26.sesifoto.my",
        state: "selangor"
    },
    {
        id: "booking-visualhouse",
        name: "VISUALHOUSE STUDIO",
        logo: "https://cdn.sesifoto.my/logos/41f3cd35-3c95-454d-82aa-fa934a8c7643-f22d146cb76b76b2ec8148d6c7ea351c.webp",
        address: "29-2, Jalan 5/9, Persiaran Bandar Rinching, Bandar Rinching Seksyen 5, 43500 Semenyih, Selangor",
        bookingPageLink: "https://booking-visualhouse.sesifoto.my",
        phone: "+601123746578",
        state: "selangor"
    }
];

