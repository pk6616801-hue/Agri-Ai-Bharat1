import React, { useState } from 'react';
import {
  TrendingUp,
  PlusCircle,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
  X
} from 'lucide-react';
import { ProduceListing, Language } from '../types';
import { mockProduceListings } from '../data/mockData';
import { translations } from '../data/translations';

interface BuySellMandiProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const BuySellMandi: React.FC<BuySellMandiProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  const [listings, setListings] = useState<ProduceListing[]>(mockProduceListings);
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [bidModalItem, setBidModalItem] = useState<ProduceListing | null>(null);
  const [bidAmount, setBidAmount] = useState<number>(2600);
  const [bidSuccess, setBidSuccess] = useState(false);

  // Form states for new listing
  const [newFarmerName, setNewFarmerName] = useState('');
  const [newCrop, setNewCrop] = useState('Sharbati Wheat');
  const [newLocation, setNewLocation] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [newPrice, setNewPrice] = useState('');

  const handleCreateListing = (e: React.FormEvent) => {
    e.preventDefault();
    const item: ProduceListing = {
      id: 'l_' + Date.now(),
      farmerName: newFarmerName || 'Kisan Brother',
      farmerLocation: newLocation || 'Patna, Bihar',
      state: 'Bihar',
      crop: newCrop,
      quantityQuintals: Number(newQuantity) || 100,
      expectedPricePerQuintal: Number(newPrice) || 2450,
      currentHighestBid: Number(newPrice) || 2450,
      bidsCount: 1,
      harvestDate: 'Harvested Today',
      qualityGrade: 'A+',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600',
      verifiedFarmer: true
    };
    setListings([item, ...listings]);
    setPostModalOpen(false);
    setNewFarmerName('');
    setNewLocation('');
    setNewQuantity('');
    setNewPrice('');
  };

  const handlePlaceBid = (e: React.FormEvent) => {
    e.preventDefault();
    if (bidModalItem) {
      setListings((prev) =>
        prev.map((l) =>
          l.id === bidModalItem.id
            ? {
                ...l,
                currentHighestBid: Math.max(l.currentHighestBid, Number(bidAmount)),
                bidsCount: l.bidsCount + 1
              }
            : l
        )
      );
      setBidSuccess(true);
      setTimeout(() => {
        setBidSuccess(false);
        setBidModalItem(null);
      }, 2000);
    }
  };

  return (
    <section id="buy-sell" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs mb-3">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span>DIRECT FARM PRODUCE MARKET & LIVE BIDDING</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {t.buySellTitle}
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              {t.buySellSubtitle}
            </p>
          </div>

          <button
            onClick={() => setPostModalOpen(true)}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-amber-500 text-white font-extrabold text-xs shadow-xl shadow-emerald-600/25 flex items-center gap-2 shrink-0 hover:scale-105 transition-transform"
          >
            <PlusCircle className="w-4 h-4 text-amber-300" />
            <span>Post Harvest for Sale (किसान फसल बेचें)</span>
          </button>
        </div>

        {/* Produce Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {listings.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-3xl border backdrop-blur-xl flex flex-col sm:flex-row gap-6 transition-all hover:border-emerald-500/50 ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div className="relative w-full sm:w-44 h-44 rounded-2xl overflow-hidden shrink-0 bg-slate-950">
                <img
                  src={item.image}
                  alt={item.crop}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-lg bg-emerald-500 text-slate-950 font-black text-[10px] uppercase">
                  Grade {item.qualityGrade}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.farmerLocation}
                    </span>
                    {item.verifiedFarmer && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        Verified Farmer
                      </span>
                    )}
                  </div>

                  <h3 className={`text-lg font-black mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.crop} ({item.quantityQuintals} Quintals)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Farmer: {item.farmerName} • {item.harvestDate}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Expected Rate:</span>
                    <span className="text-xs font-bold text-slate-300">
                      ₹{item.expectedPricePerQuintal}/Qtl
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-amber-400 font-bold block">Current Highest Bid:</span>
                    <span className="text-base font-black text-emerald-400">
                      ₹{item.currentHighestBid}/Qtl
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <span className="text-xs text-slate-400 font-semibold">
                    🔥 {item.bidsCount} Active Bids
                  </span>

                  <button
                    onClick={() => {
                      setBidModalItem(item);
                      setBidAmount(item.currentHighestBid + 50);
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-bold text-xs flex items-center gap-1 shadow-md hover:scale-105 transition-transform"
                  >
                    <span>Place Higher Bid</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Post Harvest Modal */}
      {postModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div
            className={`w-full max-w-md p-6 rounded-3xl border shadow-2xl relative ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <button
              onClick={() => setPostModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-black mb-4">Post Crop Harvest for Sale</h3>

            <form onSubmit={handleCreateListing} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Farmer Name:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ram Kumar Singh"
                  value={newFarmerName}
                  onChange={(e) => setNewFarmerName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Crop Type:</label>
                <select
                  value={newCrop}
                  onChange={(e) => setNewCrop(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs"
                >
                  <option value="Sharbati Wheat">Sharbati Wheat (गेहूं)</option>
                  <option value="Pusa Basmati Rice">Pusa Basmati Rice (धान)</option>
                  <option value="Organic Mustard">Mustard / Sarson (सरसों)</option>
                  <option value="Red Nashik Onion">Onion (प्याज)</option>
                  <option value="Chana / Chickpea">Chana / Chickpea (चना)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Location / District:</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samastipur, Bihar"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Quantity (Quintals):</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 150"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Expected Rate (₹/Qtl):</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 2500"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-bold text-xs shadow-lg mt-2"
              >
                Publish Listing to Live Mandi Traders
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Place Bid Modal */}
      {bidModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div
            className={`w-full max-w-sm p-6 rounded-3xl border shadow-2xl relative ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <button
              onClick={() => setBidModalItem(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {bidSuccess ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-400">Bid Placed Successfully!</h3>
                <p className="text-xs text-slate-300">
                  Your bid of ₹{bidAmount}/Qtl has been submitted to {bidModalItem.farmerName}.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePlaceBid} className="space-y-4">
                <h3 className="text-base font-extrabold">Bid on {bidModalItem.crop}</h3>
                <p className="text-xs text-slate-400">
                  Current Highest Bid: <span className="text-emerald-400 font-bold">₹{bidModalItem.currentHighestBid}/Qtl</span>
                </p>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Your Bid Price (₹ per Quintal):</label>
                  <input
                    type="number"
                    required
                    min={bidModalItem.currentHighestBid + 10}
                    value={bidAmount}
                    onChange={(e) => setBidAmount(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white font-bold text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-bold text-xs"
                >
                  Submit Instant Verified Bid
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
