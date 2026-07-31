import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  BarChart3,
  MapPin,
  RefreshCcw,
  Sparkles
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import { MandiPriceItem, Language } from '../types';
import { mockMandiPrices } from '../data/mockData';
import { translations } from '../data/translations';

interface MandiPricesProps {
  currentLang: Language;
  isDarkMode: boolean;
}

const chartData = [
  { day: '1 Jul', Wheat: 2380, Paddy: 4300, Mustard: 5800 },
  { day: '5 Jul', Wheat: 2400, Paddy: 4350, Mustard: 5850 },
  { day: '10 Jul', Wheat: 2420, Paddy: 4400, Mustard: 5900 },
  { day: '15 Jul', Wheat: 2450, Paddy: 4480, Mustard: 5950 },
  { day: '20 Jul', Wheat: 2460, Paddy: 4500, Mustard: 6000 },
  { day: '25 Jul', Wheat: 2470, Paddy: 4510, Mustard: 5960 },
  { day: '30 Jul', Wheat: 2480, Paddy: 4520, Mustard: 5980 }
];

export const MandiPrices: React.FC<MandiPricesProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  const [selectedState, setSelectedState] = useState<string>('All');
  const [searchCrop, setSearchCrop] = useState<string>('');

  const states = ['All', 'Punjab', 'Haryana', 'Rajasthan', 'Gujarat', 'Maharashtra', 'Madhya Pradesh', 'Bihar'];

  const filteredItems = mockMandiPrices.filter((item) => {
    const matchesState = selectedState === 'All' || item.state === selectedState;
    const matchesSearch =
      item.crop.toLowerCase().includes(searchCrop.toLowerCase()) ||
      item.variety.toLowerCase().includes(searchCrop.toLowerCase()) ||
      item.mandiName.toLowerCase().includes(searchCrop.toLowerCase());
    return matchesState && matchesSearch;
  });

  return (
    <section id="mandi-prices" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs mb-3">
              <BarChart3 className="w-4 h-4 text-amber-400" />
              <span>LIVE APMC & MANDI COMMODITY INTELLIGENCE</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {t.mandiTitle}
            </h2>
          </div>

          {/* Search & State Filter */}
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Search crop or Mandi name..."
              value={searchCrop}
              onChange={(e) => setSearchCrop(e.target.value)}
              className={`px-4 py-2.5 rounded-2xl border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            />

            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className={`px-4 py-2.5 rounded-2xl border text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              {states.map((s) => (
                <option key={s} value={s}>
                  State: {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Commodity Price Chart */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl mb-12 ${
            isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-lg font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                30-Day Commodity Price Trend (₹ per Quintal)
              </h3>
              <p className="text-xs text-slate-400">Live price trajectory across major North & Central Indian Mandis</p>
            </div>
            <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              ● Synced Live
            </span>
          </div>

          <div className="h-64 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#334155' : '#e2e8f0'} />
                <XAxis dataKey="day" stroke={isDarkMode ? '#94a3b8' : '#64748b'} fontSize={12} />
                <YAxis stroke={isDarkMode ? '#94a3b8' : '#64748b'} fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
                    borderColor: '#10b981',
                    borderRadius: '16px',
                    color: isDarkMode ? '#ffffff' : '#000000',
                    fontSize: '12px'
                  }}
                />
                <Line type="monotone" dataKey="Wheat" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Paddy" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="Mustard" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mandi Price Table Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => {
            const isPositive = item.change >= 0;
            return (
              <div
                key={item.id}
                className={`p-5 rounded-3xl border backdrop-blur-xl transition-all hover:-translate-y-1 ${
                  isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400">
                    {item.state}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">{item.lastUpdated}</span>
                </div>

                <h3 className={`text-base font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.crop}
                </h3>
                <p className="text-xs text-slate-400">{item.mandiName}</p>

                <div className="mt-4 pt-3 border-t border-slate-800/20 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Modal Rate:</span>
                    <span className="text-2xl font-black text-emerald-400">
                      ₹{item.modalPrice.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-400 block">per Quintal</span>
                  </div>

                  <div className={`flex items-center gap-1 text-xs font-black px-2.5 py-1 rounded-xl ${
                    isPositive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                    <span>{isPositive ? `+${item.change}%` : `${item.change}%`}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] font-bold text-slate-400 pt-2 border-t border-slate-800/20">
                  <span>Min: ₹{item.minPrice}</span>
                  <span className="text-right">Max: ₹{item.maxPrice}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
