export interface Insurer {
  id: string;
  name: string;
  type: "Takaful" | "Conventional";
  logoText: string;
  rating: number;
  reviewsCount: number;
  highlight: string;
  claimSpeed: string;
  freeTowingKm: number;
  baseRateMultiplier: number;
  badge?: string;
}

export interface VehicleSample {
  plate: string;
  make: string;
  model: string;
  variant: string;
  year: number;
  cc: number;
  marketValue: number;
  standardNcd: number;
  roadTaxAnnual: number;
  type: "car" | "motorcycle";
}

export const SAMPLE_VEHICLES: VehicleSample[] = [
  {
    plate: "WUM 9922",
    make: "Perodua",
    model: "Myvi",
    variant: "1.5 AV D-CVT",
    year: 2023,
    cc: 1496,
    marketValue: 54000,
    standardNcd: 55,
    roadTaxAnnual: 90,
    type: "car",
  },
  {
    plate: "VEE 8889",
    make: "Honda",
    model: "Civic",
    variant: "1.5 RS VTEC Turbo",
    year: 2022,
    cc: 1498,
    marketValue: 128000,
    standardNcd: 38.33,
    roadTaxAnnual: 90,
    type: "car",
  },
  {
    plate: "PLA 1010",
    make: "Proton",
    model: "X50",
    variant: "1.5 TGDi Flagship",
    year: 2023,
    cc: 1477,
    marketValue: 96000,
    standardNcd: 55,
    roadTaxAnnual: 90,
    type: "car",
  },
  {
    plate: "WC 4521 A",
    make: "Yamaha",
    model: "Y15ZR",
    variant: "150cc DOHC",
    year: 2023,
    cc: 150,
    marketValue: 9200,
    standardNcd: 25,
    roadTaxAnnual: 2,
    type: "motorcycle",
  },
  {
    plate: "BJK 2026",
    make: "BYD",
    model: "Atto 3",
    variant: "Extended Range EV",
    year: 2024,
    cc: 0,
    marketValue: 149000,
    standardNcd: 30,
    roadTaxAnnual: 0,
    type: "car",
  },
];

export const INSURERS: Insurer[] = [
  {
    id: "zurich",
    name: "Zurich General Takaful",
    type: "Takaful",
    logoText: "ZURICH TAKAFUL",
    rating: 4.9,
    reviewsCount: 84200,
    highlight: "Shariah Compliant • Instant WhatsApp Cover Note",
    claimSpeed: "Fast-track 2-day payouts",
    freeTowingKm: 200,
    baseRateMultiplier: 0.0245,
    badge: "Most Popular",
  },
  {
    id: "allianz",
    name: "Allianz General Insurance",
    type: "Conventional",
    logoText: "Allianz (III)",
    rating: 4.8,
    reviewsCount: 112500,
    highlight: "Official 24/7 Road Rangers Rescue & Towing",
    claimSpeed: "Instant e-Claims under RM5,000",
    freeTowingKm: 150,
    baseRateMultiplier: 0.0255,
    badge: "Top Claims Rating",
  },
  {
    id: "etiqa",
    name: "Etiqa General Takaful",
    type: "Takaful",
    logoText: "eTiQa",
    rating: 4.8,
    reviewsCount: 95400,
    highlight: "Direct JPJ MyDigital Roadtax Sync in 5 mins",
    claimSpeed: "GPS Workshop Concierge",
    freeTowingKm: 200,
    baseRateMultiplier: 0.0248,
    badge: "Best Takaful",
  },
  {
    id: "tokio",
    name: "Tokio Marine Insurance",
    type: "Conventional",
    logoText: "TOKIO MARINE",
    rating: 4.7,
    reviewsCount: 42100,
    highlight: "Over 520 Authorized Diamond Panel Workshops",
    claimSpeed: "3-day guaranteed turnaround",
    freeTowingKm: 150,
    baseRateMultiplier: 0.025,
  },
  {
    id: "ikhlas",
    name: "Takaful Ikhlas General",
    type: "Takaful",
    logoText: "TAKAFUL IKHLAS",
    rating: 4.7,
    reviewsCount: 38900,
    highlight: "0% Compulsory Excess for Named Drivers",
    claimSpeed: "Paperless Shariah settlement",
    freeTowingKm: 100,
    baseRateMultiplier: 0.0238,
    badge: "Lowest Rate",
  },
  {
    id: "msig",
    name: "MSIG Insurance Malaysia",
    type: "Conventional",
    logoText: "MSIG",
    rating: 4.8,
    reviewsCount: 51200,
    highlight: "Complimentary RM1,000 Natural Flood Relief",
    claimSpeed: "MSIG Motor Assist 24/7",
    freeTowingKm: 150,
    baseRateMultiplier: 0.0252,
  },
  {
    id: "generali",
    name: "Generali Malaysia Insurance",
    type: "Conventional",
    logoText: "GENERALI",
    rating: 4.6,
    reviewsCount: 31000,
    highlight: "Smart Driver Protection & Free Child Seat Cover",
    claimSpeed: "Digital damage estimation",
    freeTowingKm: 100,
    baseRateMultiplier: 0.0242,
  },
  {
    id: "liberty",
    name: "Liberty General Insurance",
    type: "Conventional",
    logoText: "Liberty Insurance",
    rating: 4.6,
    reviewsCount: 29400,
    highlight: "Wide Coverage across Peninsular & Sabah/Sarawak",
    claimSpeed: "Express claims approval",
    freeTowingKm: 150,
    baseRateMultiplier: 0.0249,
  },
];

export const BNPL_PARTNERS = [
  { name: "Maybank", type: "0% Bank Card", icon: "MBB", tenure: "3 / 6 / 12 mos" },
  { name: "CIMB Bank", type: "0% Bank Card", icon: "CIMB", tenure: "3 / 6 / 12 mos" },
  { name: "RHB Bank", type: "0% Bank Card", icon: "RHB", tenure: "3 / 6 / 12 mos" },
  { name: "Public Bank", type: "0% Bank Card", icon: "PBB", tenure: "3 / 6 / 12 mos" },
  { name: "SPayLater", type: "E-Wallet BNPL", icon: "SPAY", tenure: "1 / 3 / 6 mos" },
  { name: "GrabPay Later", type: "E-Wallet BNPL", icon: "GRAB", tenure: "4 installments" },
  { name: "Atome", type: "No Card Needed", icon: "ATOME", tenure: "3 months 0%" },
];

export const VERIFIED_REVIEWS = [
  {
    id: "r1",
    author: "Roey Lim",
    date: "September 2025",
    vehicle: "Perodua Myvi 1.5",
    rating: 5,
    title: "Renewed in literally 4 minutes with 0% installment!",
    text: "Seriously blown away by the speed. I compared 5 quotes side by side, saved RM 285 vs my previous agent, and split the RM 680 payment over 6 months on SPayLater. Digital road tax appeared on my MyJPJ app within hours.",
    verified: true,
  },
  {
    id: "r2",
    author: "Paramasivam V.",
    date: "August 2025",
    vehicle: "Proton X70 TGDi",
    rating: 5,
    title: "Best roadside assistance experience on the PLUS highway",
    text: "My tyre burst near Tapah at 11pm on a Sunday. Used the BJAK SOS button, the tow truck driver Ahmad called in 2 minutes and arrived in 25 minutes. Towed straight to the panel workshop with zero out of pocket charge.",
    verified: true,
  },
  {
    id: "r3",
    author: "Nurul Aisyah bt Mansor",
    date: "September 2025",
    vehicle: "Honda City Hatchback",
    rating: 5,
    title: "Clear Takaful options & transparent breakdown",
    text: "I only buy Islamic Takaful. BJAK lets me filter exclusively for Shariah-compliant operators like Zurich Takaful and Etiqa. No hidden fees, clear 55% NCD deduction, and WhatsApp cover note arrived instantaneously.",
    verified: true,
  },
  {
    id: "r4",
    author: "Mohd Hafizuddin",
    date: "October 2025",
    vehicle: "Yamaha NVX 155",
    rating: 5,
    title: "Motorcycle renewal with road tax done in one click",
    text: "Every bike owner knows the pain of finding motorcycle insurance online. With BJAK it was seamless. Total was RM 312 including road tax and personal accident. Super fast!",
    verified: true,
  },
];

export const FAQS = [
  {
    q: "How does BJAK compare quotes from 16 insurers?",
    a: "BJAK is an authorized digital aggregator integrated directly with the API engines of 16 licensed Malaysian insurance companies and Takaful operators. When you enter your vehicle registration number, our system queries your verified market value and NCD status with ISM (Insurance Services Malaysia) and retrieves real-time official quotes instantaneously.",
  },
  {
    q: "How does the JPJ Digital Road Tax renewal work?",
    a: "Under the Ministry of Transport's digital initiative, physical road tax stickers are no longer mandatory. When you renew road tax via BJAK, your vehicle's road tax is digitally registered in the JPJ national database. You can instantly view your active digital road tax in the official MyJPJ app. Physical doorstep delivery is also available if you prefer a printed copy.",
  },
  {
    q: "Can I pay in installments without a credit card?",
    a: "Yes! BJAK offers Buy Now Pay Later (BNPL) options via SPayLater, GrabPay Later, and Atome, which allow you to split your insurance premium into 3, 4, or 6 equal monthly payments without requiring a conventional credit card. Credit card holders also enjoy 0% easy payment plans across major banks (Maybank, CIMB, RHB, HSBC, Public Bank).",
  },
  {
    q: "What is NCD (No Claim Discount) and can I transfer it?",
    a: "NCD is a discount reward from Bank Negara Malaysia for not making any claims during your policy period. For private cars, it scales: 1 year (25%), 2 years (30%), 3 years (38.33%), 4 years (45%), and 5+ years (55%). You can transfer your accumulated NCD entitlement from an old vehicle to a newly purchased vehicle seamlessly during checkout on BJAK.",
  },
  {
    q: "What is included with BJAK VIP Roadside Assistance?",
    a: "Every comprehensive policy renewed through BJAK comes with complimentary VIP roadside support including 24/7 towing up to 200km, on-the-spot jumpstart and battery delivery, puncture tyre replacement, emergency 10L fuel dispatch, and an allocated claims concierge in the event of an accident.",
  },
];

export const TRANSLATIONS = {
  en: {
    heroTitle: "Compare 16 Insurers.",
    heroHighlight: "Save up to RM380.",
    heroSubtitle: "Instant quotes from Malaysia's top licensed insurers & takaful operators. 0% BNPL installments and digital JPJ road tax in minutes.",
    tabCar: "Car Insurance",
    tabMotor: "Motorcycle",
    tabTravel: "Travel & Umrah",
    tabHealth: "Life & Medical",
    tabAccident: "Personal Accident",
    tabHome: "Home Content",
    platePlaceholder: "e.g. WUM 9922 or VEE 8889",
    plateLabel: "Vehicle Registration Plate",
    nricLabel: "Owner's NRIC / Passport",
    nricPlaceholder: "e.g. 920514-10-5843",
    phoneLabel: "WhatsApp Mobile Number",
    phonePlaceholder: "e.g. 012-3456789",
    btnCompare: "Compare Live Quotes",
    btnChecking: "Fetching Official Quotes from ISM...",
    ncdText: "Verified NCD Discount",
    roadtaxInclude: "Renew JPJ Digital Road Tax",
    windscreenInclude: "Windscreen Coverage (RM 1,200)",
    floodInclude: "Special Perils (Flood & Storm)",
    allDriversInclude: "All Drivers Coverage",
    guaranteedSavings: "Guaranteed Lowest Price",
    splitTitle: "Flexible 0% Installment Plans",
    splitSubtitle: "Protect your vehicle today. Split payments over 3, 6, or 12 months with zero hidden interest.",
    vipTitle: "BJAK VIP 24/7 Roadside Towing",
    vipSubtitle: "Nationwide fleet of 450+ tow trucks on standby. Guaranteed arrival under 30 minutes anywhere in Malaysia.",
    reviewsTitle: "Trusted by Over 9 Million Drivers",
    reviewsSubtitle: "Rated 4.8 / 5.0 from 367,000+ verified customer reviews.",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know about renewing insurance & road tax in Malaysia.",
  },
  ms: {
    heroTitle: "Bandingkan 16 Syarikat Insurans.",
    heroHighlight: "Jimat sehingga RM380.",
    heroSubtitle: "Dapatkan sebut harga segera daripada pengendali insurans & takaful terkemuka di Malaysia. Ansuran 0% BNPL dan cukai jalan digital JPJ dalam beberapa minit.",
    tabCar: "Insurans Kereta",
    tabMotor: "Motosikal",
    tabTravel: "Pelancongan & Umrah",
    tabHealth: "Hayat & Perubatan",
    tabAccident: "Kemalangan Peribadi",
    tabHome: "Isi Rumah",
    platePlaceholder: "cth: WUM 9922 atau VEE 8889",
    plateLabel: "Nombor Pendaftaran Kenderaan",
    nricLabel: "No. Kad Pengenalan / Pasport",
    nricPlaceholder: "cth: 920514-10-5843",
    phoneLabel: "Nombor Telefon WhatsApp",
    phonePlaceholder: "cth: 012-3456789",
    btnCompare: "Bandingkan Sebut Harga",
    btnChecking: "Mendapatkan Sebut Harga Rasmi ISM...",
    ncdText: "Diskaun NCD Sah",
    roadtaxInclude: "Perbaharui Cukai Jalan Digital JPJ",
    windscreenInclude: "Perlindungan Cermin Depan (RM 1,200)",
    floodInclude: "Bencana Khas (Banjir & Ribut)",
    allDriversInclude: "Perlindungan Semua Pemandu",
    guaranteedSavings: "Jaminan Harga Terendah",
    splitTitle: "Pelan Ansuran 0% Mudah & Fleksibel",
    splitSubtitle: "Dapatkan perlindungan hari ini. Bahagikan bayaran kepada 3, 6, atau 12 bulan tanpa faedah tersembunyi.",
    vipTitle: "Bantuan Tunda VIP BJAK 24/7",
    vipSubtitle: "Rangkaian 450+ trak tunda sedia beroperasi seluruh Malaysia. Jaminan ketibaan bawah 30 minit.",
    reviewsTitle: "Dipercayai Lebih 9 Juta Pemandu",
    reviewsSubtitle: "Penilaian 4.8 / 5.0 daripada lebih 367,000 ulasan pelanggan disahkan.",
    faqTitle: "Soalan Lazim (FAQ)",
    faqSubtitle: "Semua jawapan tentang pembaharuan insurans & cukai jalan di Malaysia.",
  },
};
