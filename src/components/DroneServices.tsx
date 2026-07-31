import React, { useState } from 'react';
import {
  Zap,
  MapPin,
  Calendar,
  CheckCircle,
  ShieldAlert,
  Sparkles,
  Layers,
  Map,
  Compass,
  Check
} from 'lucide-react';
import { Language } from '../types';
import { mockDronePackages } from '../data/mockData';
import { translations } from '../data/translations';

interface DroneServicesProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const DroneServices: React.FC<DroneServicesProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  const [acres, setAcres] = useState<number>(5);
  const [selectedPackage, setSelectedPackage] = useState(mockDronePackages[0]);
  const [cropType, setCropType] = useState('Paddy (धान)');
  const [villageLocation, setVillageLocation] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookedSuccess, setBookedSuccess] = useState(false);

  const totalEstimate = selectedPackage.pricePerAcre * acres;

  const handleBookDrone = (e: React.FormEvent) => {
    e.preventDefault();
    setBookedSuccess(true);
    setTimeout(() => {
      setBookedSuccess(false);
      setVillageLocation('');
      setBookingDate('');
    }, 3000);
  };

  return (
    <section id="drone-services" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs mb-3">
            <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>PRECISION DRONE SPRAYING & MAPPING FLEET</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {t.droneTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            {t.droneSubtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mockDronePackages.map((pkg) => {
            const isSelected = selectedPackage.id === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className={`p-6 rounded-3xl border backdrop-blur-xl cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-emerald-950/60 border-2 border-emerald-500 shadow-2xl shadow-emerald-600/30 ring-2 ring-emerald-500/20'
                    : isDarkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-700'
                    : 'bg-white border-slate-200 shadow-lg hover:border-emerald-500'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase">
                    {pkg.category}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{pkg.coveragePerDay}</span>
                </div>

                <h3 className={`text-xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {pkg.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {pkg.description}
                </p>

                <div className="text-2xl font-black text-emerald-400 mb-4">
                  ₹{pkg.pricePerAcre}{' '}
                  <span className="text-xs font-normal text-slate-400">/ acre</span>
                </div>

                <ul className="space-y-2 pt-4 border-t border-slate-800/40 text-xs text-slate-300">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Interactive Booking Estimator Card */}
        <div
          className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-xl max-w-4xl mx-auto ${
            isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-xl font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Instant Drone Booking Estimator
              </h3>
              <p className="text-xs text-slate-400">
                Book a DGCA certified local drone pilot directly to your field
              </p>
            </div>
          </div>

          {bookedSuccess ? (
            <div className="p-8 text-center space-y-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <Check className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="text-2xl font-black text-emerald-400">Drone Pilot Assigned!</h4>
              <p className="text-xs text-slate-300">
                Booking ID #DRONE-{Math.floor(10000 + Math.random() * 90000)}. Pilot Captain Rakesh Verma will contact you within 30 minutes to confirm GPS field entrance.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBookDrone} className="space-y-6">
              
              {/* Acreage Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-slate-300">Farm Size (Acres):</label>
                  <span className="text-lg font-black text-amber-400">{acres} Acres</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={acres}
                  onChange={(e) => setAcres(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-800 accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1">
                  <span>1 Acre</span>
                  <span>25 Acres</span>
                  <span>50 Acres</span>
                </div>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Select Crop:</label>
                  <select
                    value={cropType}
                    onChange={(e) => setCropType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs font-semibold"
                  >
                    <option value="Paddy (धान)">Paddy (धान)</option>
                    <option value="Wheat (गेहूं)">Wheat (गेहूं)</option>
                    <option value="Cotton (कपास)">Cotton (कपास)</option>
                    <option value="Sugarcane (गन्ना)">Sugarcane (गन्ना)</option>
                    <option value="Mustard (सरसों)">Mustard (सरसों)</option>
                    <option value="Vegetables (सब्जियां)">Vegetables (सब्जियां)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Village & District Location:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Moga, Punjab or Patna, Bihar"
                    value={villageLocation}
                    onChange={(e) => setVillageLocation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Preferred Spraying Date:</label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs font-semibold"
                  />
                </div>
              </div>

              {/* Total & Submit */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block">Total Estimated Cost ({acres} Acres x ₹{selectedPackage.pricePerAcre}):</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-emerald-400">
                      ₹{totalEstimate.toLocaleString()}
                    </span>
                    <span className="text-xs text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded-md">
                      Govt 50% Subsidy Claimable
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-amber-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/30 hover:scale-105 transition-transform"
                >
                  Confirm Drone Spraying Booking
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
