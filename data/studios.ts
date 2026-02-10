export interface Studio {
    id: string;
    name: string;
    state: 'johor' | 'kedah' | 'kelantan' | 'melaka' | 'negeri-sembilan' | 'pahang' | 'perak' | 'perlis' | 'pulau-pinang' | 'sabah' | 'sarawak' | 'selangor' | 'terengganu' | 'kuala-lumpur' | 'putrajaya' | 'labuan';
    logo: string; // URL
    address: string;
    addressLink: string; // Waze/Google Maps
    phone: string;
    whatsapp: string;
    rating: number;
    reviewCount: number;
    priceStart: number;
    tags: string[];
}

export const STUDIOS_DATA: Studio[] = [
    {
        id: '1',
        name: 'Lensa Studio Shah Alam',
        state: 'selangor',
        logo: 'https://images.unsplash.com/photo-1595867335967-df50e50f38b2?auto=format&fit=crop&q=80&w=200&h=200',
        address: '12-A, Jalan Plumbum Q7/Q, Seksyen 7, 40000 Shah Alam, Selangor',
        addressLink: 'https://waze.com/ul/hw281m352b',
        phone: '+60123456789',
        whatsapp: 'https://wa.me/60123456789',
        rating: 4.9,
        reviewCount: 128,
        priceStart: 250,
        tags: ['Wedding', 'Portrait', 'Studio'],
    },
    {
        id: '2',
        name: 'Momento Pixel KL',
        state: 'kuala-lumpur',
        logo: 'https://images.unsplash.com/photo-1533140778839-4f7f2b1d0336?auto=format&fit=crop&q=80&w=200&h=200',
        address: 'B-2-15, Plaza Arkadia, Desa ParkCity, 52200 Kuala Lumpur',
        addressLink: 'https://maps.google.com/?q=Plaza+Arkadia',
        phone: '+60198765432',
        whatsapp: 'https://wa.me/60198765432',
        rating: 4.8,
        reviewCount: 85,
        priceStart: 350,
        tags: ['Corporate', 'Event', 'Product'],
    },
    {
        id: '3',
        name: 'Cahaya Photography JB',
        state: 'johor',
        logo: 'https://images.unsplash.com/photo-1520699049698-b301b8bef9a7?auto=format&fit=crop&q=80&w=200&h=200',
        address: '55, Jalan Austin Heights 8/5, Taman Mount Austin, 81100 Johor Bahru',
        addressLink: 'https://waze.com/ul/hw23b9y76c',
        phone: '+60176543210',
        whatsapp: 'https://wa.me/60176543210',
        rating: 4.7,
        reviewCount: 204,
        priceStart: 180,
        tags: ['Family', 'Graduation'],
    },
    {
        id: '4',
        name: 'Borneo Lens Kuching',
        state: 'sarawak',
        logo: 'https://images.unsplash.com/photo-1542038784456-1ea8c935640e?auto=format&fit=crop&q=80&w=200&h=200',
        address: 'Lot 123, Saradise Kuching, 93350 Kuching, Sarawak',
        addressLink: 'https://maps.google.com/?q=Saradise+Kuching',
        phone: '+601122334455',
        whatsapp: 'https://wa.me/601122334455',
        rating: 5.0,
        reviewCount: 42,
        priceStart: 300,
        tags: ['Cultural', 'Wedding'],
    },
    {
        id: '5',
        name: 'Kinabalu Vibe',
        state: 'sabah',
        logo: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=200&h=200',
        address: 'Suria Sabah Shopping Mall, 88000 Kota Kinabalu, Sabah',
        addressLink: 'https://maps.google.com/?q=Suria+Sabah',
        phone: '+60109988776',
        whatsapp: 'https://wa.me/60109988776',
        rating: 4.6,
        reviewCount: 95,
        priceStart: 200,
        tags: ['Travel', 'Nature', 'Portrait'],
    },
    {
        id: '6',
        name: 'Heritage Snaps Penang',
        state: 'pulau-pinang',
        logo: 'https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&q=80&w=200&h=200',
        address: '15, Lebuh Armenian, George Town, 10200 George Town, Pulau Pinang',
        addressLink: 'https://maps.google.com/?q=Lebuh+Armenian',
        phone: '+60145566778',
        whatsapp: 'https://wa.me/60145566778',
        rating: 4.9,
        reviewCount: 310,
        priceStart: 280,
        tags: ['Pre-wedding', 'Travel'],
    },
    {
        id: '7',
        name: 'East Coast Captures',
        state: 'terengganu',
        logo: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&q=80&w=200&h=200',
        address: '78, Jalan Sultan Zainal Abidin, 20000 Kuala Terengganu',
        addressLink: 'https://maps.google.com/?q=Jalan+Sultan+Zainal+Abidin',
        phone: '+60134455667',
        whatsapp: 'https://wa.me/60134455667',
        rating: 4.8,
        reviewCount: 67,
        priceStart: 150,
        tags: ['Outdoor', 'Beach'],
    },
    {
        id: '8',
        name: 'Ipoh Vintage Studio',
        state: 'perak',
        logo: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=200&h=200',
        address: '22, Concubine Lane, 30000 Ipoh, Perak',
        addressLink: 'https://maps.google.com/?q=Concubine+Lane',
        phone: '+60156677889',
        whatsapp: 'https://wa.me/60156677889',
        rating: 4.7,
        reviewCount: 150,
        priceStart: 220,
        tags: ['Vintage', 'Classic'],
    }
];
