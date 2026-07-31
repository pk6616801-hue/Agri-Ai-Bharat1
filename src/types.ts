export type Language = 'en' | 'hi' | 'bho' | 'mai';

export interface Product {
  id: string;
  name: string;
  category: 'Seeds' | 'Fertilizers' | 'Pesticides' | 'Organic Products' | 'Farm Equipment' | 'Drones';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  brand: string;
  inStock: boolean;
  description: string;
}

export interface MandiPriceItem {
  id: string;
  crop: string;
  variety: string;
  state: string;
  district: string;
  mandiName: string;
  minPrice: number;
  maxPrice: number;
  modalPrice: number;
  prevPrice: number;
  change: number; // percentage change
  lastUpdated: string;
}

export interface ProduceListing {
  id: string;
  farmerName: string;
  farmerLocation: string;
  state: string;
  crop: string;
  quantityQuintals: number;
  expectedPricePerQuintal: number;
  currentHighestBid: number;
  bidsCount: number;
  harvestDate: string;
  qualityGrade: 'A+' | 'A' | 'B';
  image: string;
  verifiedFarmer: boolean;
}

export interface DroneServicePackage {
  id: string;
  title: string;
  category: 'Spraying' | 'Mapping' | 'Survey' | 'Yield Estimation';
  pricePerAcre: number;
  coveragePerDay: string;
  description: string;
  features: string[];
  icon: string;
}

export interface WeatherInfo {
  district: string;
  state: string;
  temp: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  rainProbability: number;
  soilMoisture: number;
  uvIndex: number;
  forecast: {
    day: string;
    tempHigh: number;
    tempLow: number;
    condition: string;
    rainProb: number;
  }[];
  sprayingAdvice: string;
}

export interface GovernmentScheme {
  id: string;
  name: string;
  shortDescription: string;
  financialBenefit: string;
  ministry: string;
  category: 'Direct Income' | 'Insurance' | 'Equipment Subsidy' | 'Credit & Loan' | 'Irrigation';
  eligibility: string[];
  documentsRequired: string[];
  applyLink: string;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experienceYears: number;
  rating: number;
  available: boolean;
  image: string;
  languages: string[];
}

export interface LearningItem {
  id: string;
  title: string;
  category: 'Blogs' | 'Video Tutorials' | 'Smart Farming Guides' | 'AI Courses';
  readTimeOrDuration: string;
  authorOrInstructor: string;
  thumbnail: string;
  date: string;
  summary: string;
  level?: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Campus Hiring';
  experienceNeeded: string;
  description: string;
}

export interface CropDiseaseResult {
  diseaseName: string;
  scientificName: string;
  severity: string;
  confidence: number;
  symptoms: string;
  organicRemedies: string[];
  chemicalRemedies: string[];
  dosageInstructions: string;
  preventionTips: string[];
}
