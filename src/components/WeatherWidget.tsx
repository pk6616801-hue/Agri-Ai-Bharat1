import React, { useState } from 'react';
import {
  CloudSun,
  Sun,
  Wind,
  Droplets,
  CloudRain,
  Thermometer,
  ShieldAlert,
  Compass,
  MapPin
} from 'lucide-react';
import { Language, WeatherInfo } from '../types';
import { mockWeatherData } from '../data/mockData';
import { translations } from '../data/translations';

interface WeatherWidgetProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  const locations = Object.keys(mockWeatherData);
  const [selectedLocation, setSelectedLocation] = useState<string>(locations[0]);

  const weather: WeatherInfo = mockWeatherData[selectedLocation];

  return (
    <section id="weather" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs mb-3">
              <CloudSun className="w-4 h-4 text-amber-400" />
              <span>LIVE AGRICULTURAL METEOROLOGY & SPRAYING ADVISOR</span>
            </div>
            <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {t.weatherTitle}
            </h2>
          </div>

          {/* District Selector */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-500" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className={`px-4 py-2.5 rounded-2xl border text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
              }`}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Weather Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Current Weather Card */}
          <div
            className={`lg:col-span-5 p-8 rounded-3xl border backdrop-blur-xl relative overflow-hidden flex flex-col justify-between ${
              isDarkMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 shadow-2xl text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {weather.state} Agriculture Zone
                </span>
                <h3 className="text-3xl font-black">{weather.district}</h3>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400">
                <Sun className="w-10 h-10 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
            </div>

            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-6xl font-black text-emerald-400">{weather.temp}°C</span>
              <span className="text-lg font-bold text-slate-300">{weather.condition}</span>
            </div>

            {/* Spraying Advisor Banner */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 space-y-1 mb-6">
              <span className="font-extrabold uppercase text-[10px] text-amber-400 block">
                🌾 AI Spraying & Irrigation Advice:
              </span>
              <p>{weather.sprayingAdvice}</p>
            </div>

            {/* Meteorological Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/40 text-xs font-bold">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-400" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">Humidity</span>
                  <span>{weather.humidity}%</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                <Wind className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">Wind Speed</span>
                  <span>{weather.windSpeed} km/h</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                <CloudRain className="w-4 h-4 text-cyan-400" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">Rain Chance</span>
                  <span>{weather.rainProbability}%</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-amber-400" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-normal">Soil Moisture</span>
                  <span>{weather.soilMoisture}%</span>
                </div>
              </div>
            </div>

          </div>

          {/* 5-Day Forecast Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-5 gap-3">
            {weather.forecast.map((f, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-3xl border text-center flex flex-col justify-between transition-all hover:scale-105 ${
                  isDarkMode ? 'bg-slate-900/80 border-slate-800 text-white' : 'bg-white border-slate-200 shadow-lg text-slate-900'
                }`}
              >
                <div>
                  <span className="text-xs font-extrabold text-amber-400 block mb-2">{f.day}</span>
                  <CloudSun className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-[11px] font-semibold text-slate-400 line-clamp-1">{f.condition}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/30">
                  <div className="text-sm font-black text-emerald-400">{f.tempHigh}°C</div>
                  <div className="text-[10px] text-slate-500 font-bold">{f.tempLow}°C low</div>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[9px] font-bold">
                    ☔ {f.rainProb}% Rain
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
