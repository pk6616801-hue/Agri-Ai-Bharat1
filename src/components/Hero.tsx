import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Smartphone,
  Shield,
  TrendingUp,
  Sprout,
  Play,
  CheckCircle2,
  Zap,
  Globe2
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
  isDarkMode: boolean;
  onOpenDoctor: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  isDarkMode,
  onOpenDoctor,
  onNavigate
}) => {
  const t = translations[currentLang];

  const stats = [
    { label: t.statsFarmers, value: '2.5 Million+', desc: 'Across 18 States' },
    { label: t.statsAccuracy, value: '98.4%', desc: 'Gemini Pathologist' },
    { label: t.statsYield, value: '₹4,800/Acre', desc: 'Average Income Boost' },
    { label: t.statsMandis, value: '450+ Mandis', desc: 'Real-time Price Feed' }
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
      {/* Background Image / Video Backdrop Simulation */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2000"
          alt="Indian Lush Green Farm Drone Overview"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4] contrast-[1.1] transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        {/* Animated Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966915_1px,transparent_1px),linear-gradient(to_bottom,#05966915_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-bold mb-8 shadow-2xl animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>⚡ Powered by Gemini AI & ISRO Satellite Telemetry</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-1" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          India's Smart Agriculture Platform{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-300 to-amber-300">
            Powered by AI
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          {t.heroDesc}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 max-w-xl mx-auto">
          {/* CTA 1: Get Started */}
          <button
            onClick={() => onNavigate('marketplace')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-amber-500 hover:from-emerald-400 hover:to-amber-400 text-slate-950 font-extrabold text-base shadow-2xl shadow-emerald-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
          >
            <span>{t.getStarted}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* CTA 2: AI Crop Doctor */}
          <button
            onClick={onOpenDoctor}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/90 border-2 border-emerald-500/60 hover:border-emerald-400 text-emerald-300 font-bold text-base backdrop-blur-xl shadow-xl hover:bg-emerald-950/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>{t.cropDoctor}</span>
          </button>

          {/* CTA 3: Download App */}
          <button
            onClick={() => onNavigate('mobile-app')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/60 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-base backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Smartphone className="w-5 h-5 text-amber-400" />
            <span>{t.downloadApp}</span>
          </button>
        </div>

        {/* Feature Pill Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-300 mb-16">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Instant Disease Scan</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero Middlemen Trade</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Drone Spraying Booking</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Multi-language Voice Assistant</span>
          </div>
        </div>

        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-3xl bg-slate-900/70 border border-emerald-900/40 backdrop-blur-xl shadow-2xl hover:border-emerald-500/50 transition-all text-left group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  {s.value}
                </span>
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-200">{s.label}</p>
              <p className="text-[11px] text-slate-400 font-medium">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
