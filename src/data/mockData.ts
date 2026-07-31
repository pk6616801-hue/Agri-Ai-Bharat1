import {
  Product,
  MandiPriceItem,
  ProduceListing,
  DroneServicePackage,
  WeatherInfo,
  GovernmentScheme,
  Expert,
  LearningItem,
  JobPosition
} from '../types';

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'HD 3086 Wheat Certified Seeds (20kg)',
    category: 'Seeds',
    price: 950,
    originalPrice: 1200,
    rating: 4.9,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=600',
    badge: '20% OFF',
    brand: 'IARI Pusa',
    inStock: true,
    description: 'High-yielding certified wheat seeds resistant to yellow rust. Suitable for timely sown irrigated conditions.'
  },
  {
    id: 'p2',
    name: 'Pusa Basmati 1509 Paddy Seeds (10kg)',
    category: 'Seeds',
    price: 1450,
    originalPrice: 1750,
    rating: 4.8,
    reviewsCount: 218,
    image: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&q=80&w=600',
    badge: 'Popular',
    brand: 'Pusa Agri',
    inStock: true,
    description: 'Early maturing basmati paddy variety (120 days). Extra long slender grain with pleasant aroma.'
  },
  {
    id: 'p3',
    name: 'Organic Neem Oil Bio-Pesticide 10,000 PPM (1L)',
    category: 'Organic Products',
    price: 580,
    originalPrice: 750,
    rating: 4.9,
    reviewsCount: 512,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600',
    badge: 'Organic Certified',
    brand: 'BioBharat',
    inStock: true,
    description: 'Cold-pressed pure neem seed kernel extract. Effective against aphids, whiteflies, thrips, and caterpillars.'
  },
  {
    id: 'p4',
    name: 'Nano Liquid DAP Fertilizer (500ml)',
    category: 'Fertilizers',
    price: 600,
    originalPrice: 700,
    rating: 4.7,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=600',
    badge: 'IFFCO Approved',
    brand: 'IFFCO',
    inStock: true,
    description: 'Replaces one 50kg bag of conventional DAP. Highly bio-available phosphorus and nitrogen nanoparticles.'
  },
  {
    id: 'p5',
    name: 'Agri AI Precision Spray Drone 10L Tank',
    category: 'Drones',
    price: 345000,
    originalPrice: 420000,
    rating: 4.95,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=600',
    badge: 'Govt 50% Subsidy Eligible',
    brand: 'Agri AI Bharat Tech',
    inStock: true,
    description: 'Autonomous obstacle radar, terrain following radar, dual atomizing spray nozzles, and dual battery swappable setup.'
  },
  {
    id: 'p6',
    name: 'Coragen Insecticide FMC (150ml)',
    category: 'Pesticides',
    price: 1820,
    originalPrice: 2100,
    rating: 4.85,
    reviewsCount: 410,
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=600',
    badge: 'Best Seller',
    brand: 'FMC India',
    inStock: true,
    description: 'Rynaxypyr powered broad spectrum protection against stem borer, bollworm, and leaf folder.'
  },
  {
    id: 'p7',
    name: 'Solar Powered Battery Knapsack Sprayer 18L',
    category: 'Farm Equipment',
    price: 3800,
    originalPrice: 4800,
    rating: 4.75,
    reviewsCount: 276,
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb1b7a5?auto=format&fit=crop&q=80&w=600',
    badge: 'Solar Charging',
    brand: 'Kisan Shakti',
    inStock: true,
    description: 'Heavy duty 12V 12Ah lithium battery with foldout solar panel lid for all-day field spraying.'
  },
  {
    id: 'p8',
    name: 'Trichoderma Viride Bio-Fungicide (1kg)',
    category: 'Organic Products',
    price: 240,
    originalPrice: 320,
    rating: 4.9,
    reviewsCount: 388,
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600',
    badge: 'Soil Enhancer',
    brand: 'Krishi Bio',
    inStock: true,
    description: 'Biological soil treatment for controlling root rot, wilt, damping-off, and collar rot in all crops.'
  }
];

export const mockMandiPrices: MandiPriceItem[] = [
  {
    id: 'm1',
    crop: 'Wheat (गेहूं)',
    variety: 'Sharbati / HD-2967',
    state: 'Punjab',
    district: 'Ludhiana',
    mandiName: 'Khanna Mandi',
    minPrice: 2320,
    maxPrice: 2540,
    modalPrice: 2480,
    prevPrice: 2420,
    change: 2.48,
    lastUpdated: '10 mins ago'
  },
  {
    id: 'm2',
    crop: 'Paddy / Basmati (धान)',
    variety: 'Pusa Basmati 1121',
    state: 'Haryana',
    district: 'Karnal',
    mandiName: 'Karnal Grain Market',
    minPrice: 4100,
    maxPrice: 4650,
    modalPrice: 4520,
    prevPrice: 4400,
    change: 2.72,
    lastUpdated: '15 mins ago'
  },
  {
    id: 'm3',
    crop: 'Mustard / Sarson (सरसों)',
    variety: 'Black Mustard 42% Oil',
    state: 'Rajasthan',
    district: 'Jaipur',
    mandiName: 'Jaipur Grain Mandi',
    minPrice: 5600,
    maxPrice: 6150,
    modalPrice: 5980,
    prevPrice: 6050,
    change: -1.15,
    lastUpdated: '5 mins ago'
  },
  {
    id: 'm4',
    crop: 'Cotton / Kapas (कपास)',
    variety: 'Medium Staple',
    state: 'Gujarat',
    district: 'Rajkot',
    mandiName: 'Rajkot APMC',
    minPrice: 6800,
    maxPrice: 7520,
    modalPrice: 7350,
    prevPrice: 7200,
    change: 2.08,
    lastUpdated: 'Just now'
  },
  {
    id: 'm5',
    crop: 'Tomato (टमाटर)',
    variety: 'Hybrid Tomato',
    state: 'Maharashtra',
    district: 'Nashik',
    mandiName: 'Pimpalgaon Baswant',
    minPrice: 1800,
    maxPrice: 2600,
    modalPrice: 2250,
    prevPrice: 2100,
    change: 7.14,
    lastUpdated: '20 mins ago'
  },
  {
    id: 'm6',
    crop: 'Wheat (गेहूं)',
    variety: 'Sharbati Gold',
    state: 'Madhya Pradesh',
    district: 'Indore',
    mandiName: 'Indore Laxmibai Nagar',
    minPrice: 2450,
    maxPrice: 2890,
    modalPrice: 2720,
    prevPrice: 2680,
    change: 1.49,
    lastUpdated: '12 mins ago'
  },
  {
    id: 'm7',
    crop: 'Chana / Chickpea (चना)',
    variety: 'Desi Chana',
    state: 'Bihar',
    district: 'Patna',
    mandiName: 'Patna APMC Grid',
    minPrice: 5800,
    maxPrice: 6300,
    modalPrice: 6150,
    prevPrice: 6000,
    change: 2.50,
    lastUpdated: '8 mins ago'
  },
  {
    id: 'm8',
    crop: 'Onion (प्याज)',
    variety: 'Red Nashik Onion',
    state: 'Maharashtra',
    district: 'Ahmednagar',
    mandiName: 'Lasalgaon Mandi',
    minPrice: 1600,
    maxPrice: 2400,
    modalPrice: 2150,
    prevPrice: 2100,
    change: 2.38,
    lastUpdated: '2 mins ago'
  }
];

export const mockProduceListings: ProduceListing[] = [
  {
    id: 'l1',
    farmerName: 'Gurpreet Singh',
    farmerLocation: 'Moga, Punjab',
    state: 'Punjab',
    crop: 'Sharbati Wheat',
    quantityQuintals: 150,
    expectedPricePerQuintal: 2500,
    currentHighestBid: 2520,
    bidsCount: 12,
    harvestDate: 'Fresh Harvest (3 days ago)',
    qualityGrade: 'A+',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600',
    verifiedFarmer: true
  },
  {
    id: 'l2',
    farmerName: 'Rameshwar Mahato',
    farmerLocation: 'Samastipur, Bihar',
    state: 'Bihar',
    crop: 'Pusa Basmati Rice',
    quantityQuintals: 85,
    expectedPricePerQuintal: 4400,
    currentHighestBid: 4500,
    bidsCount: 9,
    harvestDate: 'Harvested yesterday',
    qualityGrade: 'A+',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600',
    verifiedFarmer: true
  },
  {
    id: 'l3',
    farmerName: 'Sanjay Patil',
    farmerLocation: 'Nashik, Maharashtra',
    state: 'Maharashtra',
    crop: 'Red Onion (Grade A)',
    quantityQuintals: 220,
    expectedPricePerQuintal: 2200,
    currentHighestBid: 2280,
    bidsCount: 18,
    harvestDate: 'Ready for loading',
    qualityGrade: 'A',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf?auto=format&fit=crop&q=80&w=600',
    verifiedFarmer: true
  },
  {
    id: 'l4',
    farmerName: 'Kalyan Patel',
    farmerLocation: 'Anand, Gujarat',
    state: 'Gujarat',
    crop: 'Organic Mustard Seed',
    quantityQuintals: 110,
    expectedPricePerQuintal: 5900,
    currentHighestBid: 6020,
    bidsCount: 14,
    harvestDate: '2 days ago',
    qualityGrade: 'A+',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600',
    verifiedFarmer: true
  }
];

export const mockDronePackages: DroneServicePackage[] = [
  {
    id: 'd1',
    title: 'Precision Ultra-Mist Chemical & Bio Spray',
    category: 'Spraying',
    pricePerAcre: 450,
    coveragePerDay: 'Up to 60 Acres/Day',
    description: 'Autonomous micro-droplet liquid fertilizer & insecticide spray with ZERO soil compaction and 100% leaf canopy coverage.',
    features: [
      'Radar obstacle detection around trees/power poles',
      'Dual atomized nozzles for sub-micron droplets',
      'Real-time flight path telemetry report',
      'Free crop health initial video inspection'
    ],
    icon: 'Drone'
  },
  {
    id: 'd2',
    title: 'Multispectral Soil & Crop Health NDVI Survey',
    category: 'Mapping',
    pricePerAcre: 250,
    coveragePerDay: 'Up to 200 Acres/Day',
    description: 'High-resolution multispectral imagery maps nitrogen deficiency, weed infestations, and early water stress before visible to eyes.',
    features: [
      'NDVI & EVI color thermal map generation',
      'GPS field boundary polygon export',
      'Precise spot-treatment fertilizer prescription maps',
      '24-hour turnaround cloud report'
    ],
    icon: 'Map'
  },
  {
    id: 'd3',
    title: '3D Terrain Elevation & Drainage Survey',
    category: 'Survey',
    pricePerAcre: 350,
    coveragePerDay: 'Up to 150 Acres/Day',
    description: 'Digital Elevation Models (DEM) for precision laser land leveling and canal irrigation flow planning.',
    features: [
      'Centimeter-accurate RTK positioning',
      'Water stagnation zone prediction',
      'Contour mapping for drip irrigation planning',
      'Sub-surface soil moisture index'
    ],
    icon: 'Layers'
  }
];

export const mockWeatherData: Record<string, WeatherInfo> = {
  'Patna, Bihar': {
    district: 'Patna',
    state: 'Bihar',
    temp: 32,
    condition: 'Partly Cloudy',
    icon: 'CloudSun',
    humidity: 68,
    windSpeed: 11,
    rainProbability: 20,
    soilMoisture: 74,
    uvIndex: 6,
    sprayingAdvice: 'Ideal spraying window today between 6:00 AM - 10:30 AM before wind speed picks up.',
    forecast: [
      { day: 'Today', tempHigh: 33, tempLow: 25, condition: 'Partly Cloudy', rainProb: 20 },
      { day: 'Tomorrow', tempHigh: 34, tempLow: 26, condition: 'Sunny', rainProb: 10 },
      { day: 'Thu', tempHigh: 31, tempLow: 24, condition: 'Light Rain', rainProb: 65 },
      { day: 'Fri', tempHigh: 30, tempLow: 23, condition: 'Thunderstorm', rainProb: 80 },
      { day: 'Sat', tempHigh: 32, tempLow: 25, condition: 'Clear Sky', rainProb: 15 }
    ]
  },
  'Ludhiana, Punjab': {
    district: 'Ludhiana',
    state: 'Punjab',
    temp: 29,
    condition: 'Sunny & Clear',
    icon: 'Sun',
    humidity: 52,
    windSpeed: 8,
    rainProbability: 5,
    soilMoisture: 65,
    uvIndex: 7,
    sprayingAdvice: 'Excellent weather conditions all day for pesticide and foliar fertilizer application.',
    forecast: [
      { day: 'Today', tempHigh: 30, tempLow: 21, condition: 'Sunny', rainProb: 5 },
      { day: 'Tomorrow', tempHigh: 31, tempLow: 22, condition: 'Clear', rainProb: 0 },
      { day: 'Thu', tempHigh: 32, tempLow: 23, condition: 'Sunny', rainProb: 5 },
      { day: 'Fri', tempHigh: 29, tempLow: 20, condition: 'Partly Cloudy', rainProb: 25 },
      { day: 'Sat', tempHigh: 30, tempLow: 21, condition: 'Sunny', rainProb: 10 }
    ]
  },
  'Nashik, Maharashtra': {
    district: 'Nashik',
    state: 'Maharashtra',
    temp: 27,
    condition: 'Humid Breeze',
    icon: 'Wind',
    humidity: 78,
    windSpeed: 14,
    rainProbability: 40,
    soilMoisture: 82,
    uvIndex: 5,
    sprayingAdvice: 'Moderate rain probability in afternoon. Complete spraying early morning only.',
    forecast: [
      { day: 'Today', tempHigh: 28, tempLow: 20, condition: 'Passing Showers', rainProb: 40 },
      { day: 'Tomorrow', tempHigh: 27, tempLow: 19, condition: 'Moderate Rain', rainProb: 70 },
      { day: 'Thu', tempHigh: 29, tempLow: 21, condition: 'Partly Cloudy', rainProb: 30 },
      { day: 'Fri', tempHigh: 30, tempLow: 22, condition: 'Sunny', rainProb: 10 },
      { day: 'Sat', tempHigh: 31, tempLow: 22, condition: 'Clear', rainProb: 5 }
    ]
  }
};

export const mockSchemes: GovernmentScheme[] = [
  {
    id: 's1',
    name: 'PM-Kisan Samman Nidhi Yojana',
    shortDescription: '₹6,000 per year direct income transfer in 3 equal installments of ₹2,000 directly into farmer bank accounts.',
    financialBenefit: '₹6,000 / Year (100% Direct Transfer)',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    category: 'Direct Income',
    eligibility: [
      'Small and marginal landholder farmer families',
      'Ownership of cultivable landholding in revenue records',
      'Aadhaar seeded active bank account with e-KYC verified'
    ],
    documentsRequired: ['Aadhaar Card', 'Land Ownership Khatauni/Khasra', 'Bank Passbook copy', 'Active Mobile Number'],
    applyLink: 'https://pmkisan.gov.in'
  },
  {
    id: 's2',
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    shortDescription: 'Comprehensive crop insurance cover against yield losses from non-preventable natural risks, drought, flood, and pests.',
    financialBenefit: 'Up to 100% Sum Insured Coverage',
    ministry: 'Ministry of Agriculture',
    category: 'Insurance',
    eligibility: [
      'All farmers growing notified crops in notified areas',
      'Sharecroppers and tenant farmers also eligible'
    ],
    documentsRequired: ['Aadhaar Card', 'Land Sowing Certificate', 'Bank Account details', 'Land possession proof'],
    applyLink: 'https://pmfby.gov.in'
  },
  {
    id: 's3',
    name: 'Kisan Credit Card (KCC) Subsidized Scheme',
    shortDescription: 'Concessional crop loan up to ₹3 Lakhs at an effective low interest rate of 4% per annum upon prompt repayment.',
    financialBenefit: 'Low 4% Effective Interest Rate',
    ministry: 'Reserve Bank of India & NABARD',
    category: 'Credit & Loan',
    eligibility: [
      'Individual farmers, joint borrowers, tenant farmers',
      'Self Help Groups (SHGs) or Joint Liability Groups (JLGs)'
    ],
    documentsRequired: ['KCC Application Form', 'Land Records', 'Identity & Address Proof', 'Pashu Kisan Credit Card details (if applicable)'],
    applyLink: 'https://kcc.agricoop.gov.in'
  },
  {
    id: 's4',
    name: 'PM-KUSUM Solar Pump Subsidy Yojana',
    shortDescription: 'Up to 60% subsidy for setting up standalone off-grid solar agriculture water pumps.',
    financialBenefit: '60% Central + State Subsidy',
    ministry: 'Ministry of New & Renewable Energy',
    category: 'Equipment Subsidy',
    eligibility: [
      'Individual farmers, Water User Associations, Panchayats',
      'Farmers with land for solar pump installation'
    ],
    documentsRequired: ['Land Registry Papers', 'Aadhaar Card', 'Electricity Connection NOC', 'Bank Passbook'],
    applyLink: 'https://pmkusum.mnre.gov.in'
  }
];

export const mockExperts: Expert[] = [
  {
    id: 'e1',
    name: 'Dr. Ramesh Chandra Sharma',
    title: 'Senior Agronomist & Soil Specialist',
    specialization: 'Soil Pathology, Organic Wheat & Cereal Management',
    experienceYears: 24,
    rating: 4.9,
    available: true,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    languages: ['Hindi', 'English', 'Punjabi']
  },
  {
    id: 'e2',
    name: 'Dr. Ananya Roy Choudhury',
    title: 'Plant Pathologist (ICAR Fellow)',
    specialization: 'Paddy Blight, Cotton Leaf Diseases & Fungal Management',
    experienceYears: 18,
    rating: 4.95,
    available: true,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    languages: ['English', 'Hindi', 'Bengali']
  },
  {
    id: 'e3',
    name: 'Er. Vikrant Singh Solanki',
    title: 'Drone Fleet Operations Director',
    specialization: 'Precision Spraying Calibration & Satellite Mapping',
    experienceYears: 12,
    rating: 4.88,
    available: false,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    languages: ['Hindi', 'Bhojpuri', 'English']
  }
];

export const mockLearningItems: LearningItem[] = [
  {
    id: 'l1',
    title: 'Complete Masterclass: Smart Nitrogen Management using Nano Urea',
    category: 'Smart Farming Guides',
    readTimeOrDuration: '8 min read',
    authorOrInstructor: 'Dr. R. C. Sharma',
    thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600',
    date: 'July 28, 2026',
    summary: 'Learn how replacing 1 bag of granular Urea with Nano Urea increases yield by 8% while saving soil microbial health.'
  },
  {
    id: 'l2',
    title: 'How to Prepare Natural Jeevamrut Bio-Fertilizer at Home',
    category: 'Video Tutorials',
    readTimeOrDuration: '12 min video',
    authorOrInstructor: 'Kisan Krishi Kendra',
    thumbnail: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600',
    date: 'July 24, 2026',
    summary: 'Step-by-step video guide on cow dung fermentation, jaggery, and pulse flour mixture to enrich soil carbon.'
  },
  {
    id: 'l3',
    title: 'AI Crop Diagnostics & Drone Spraying Certification Course',
    category: 'AI Courses',
    readTimeOrDuration: '4 Weeks (Online + Field)',
    authorOrInstructor: 'Agri AI Academy',
    thumbnail: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=600',
    date: 'Enrollment Open',
    summary: 'Become a certified DGCA Drone Pilot and AI Crop Doctor technician for rural entrepreneurship.',
    level: 'Beginner to Advanced'
  }
];

export const mockJobs: JobPosition[] = [
  {
    id: 'j1',
    title: 'Lead AI Agronomist & Computer Vision Scientist',
    department: 'AI Research & Plant Pathology',
    location: 'New Delhi / Hybrid',
    type: 'Full-time',
    experienceNeeded: '3-6 Years',
    description: 'Develop multi-crop disease classification models using Gemini multi-modal AI and satellite spectral data.'
  },
  {
    id: 'j2',
    title: 'Regional Drone Fleet Operations Manager',
    department: 'Field Drone Operations',
    location: 'Patna, Bihar & Ludhiana, Punjab',
    type: 'Full-time',
    experienceNeeded: '2+ Years',
    description: 'Manage DGCA certified drone pilot network, farmer booking schedules, and maintenance hubs.'
  },
  {
    id: 'j3',
    title: 'Agri AI Youth Ambassador Internship 2026',
    department: 'Community & Farmer Growth',
    location: 'District Level Across All States',
    type: 'Internship',
    experienceNeeded: 'Students / Graduates',
    description: 'Educate local farmer producer organizations (FPOs) on AI Crop Doctor and digital Mandi trading.'
  }
];
