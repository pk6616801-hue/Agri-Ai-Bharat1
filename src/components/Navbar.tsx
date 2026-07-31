import React, { useState } from 'react';
import {
  Sprout,
  Bot,
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  Smartphone,
  Sparkles,
  Search,
  Volume2
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDoctor: () => void;
  onOpenChat: () => void;
  onVoiceSearchTrigger: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  isDarkMode,
  onToggleTheme,
  activeTab,
  setActiveTab,
  onOpenDoctor,
  onOpenChat,
  onVoiceSearchTrigger
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'crop-doctor', label: t.navCropDoctor, badge: 'AI' },
    { id: 'marketplace', label: t.navMarketplace },
    { id: 'buy-sell', label: t.navBuySell },
    { id: 'drone-services', label: t.navDroneServices },
    { id: 'weather', label: t.navWeather },
    { id: 'mandi-prices', label: t.navMandiPrices, highlight: true },
    { id: 'govt-schemes', label: t.navGovtSchemes },
    { id: 'learning', label: t.navLearning },
    { id: 'career', label: t.navCareer },
    { id: 'about', label: t.navAbout },
    { id: 'contact', label: t.navContact }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        isDarkMode
          ? 'bg-slate-950/80 border-emerald-900/50 text-slate-100'
          : 'bg-white/85 border-emerald-100 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-green-500 to-amber-400 p-0.5 shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Sprout className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-green-400 to-amber-400">
                  Agri AI
                </span>
                <span className={`text-xl sm:text-2xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Bharat
                </span>
              </div>
              <p className="text-[10px] sm:text-xs font-semibold tracking-wider text-amber-500 uppercase">
                {t.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.slice(0, 8).map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1 ${
                    isActive
                      ? isDarkMode
                        ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-700/50 shadow-sm'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm'
                      : isDarkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-900'
                      : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="px-1.5 py-0.2 text-[9px] font-black tracking-wider uppercase rounded-full bg-amber-400 text-slate-950">
                      {item.badge}
                    </span>
                  )}
                  {item.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Bar (Lang, Theme, Voice, AI Crop Doctor CTA) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Voice Search Button */}
            <button
              onClick={onVoiceSearchTrigger}
              title="Voice Search in Hindi / English"
              className={`p-2.5 rounded-xl border transition-all ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-amber-600 hover:bg-amber-50'
              }`}
            >
              <Volume2 className="w-4 h-4 animate-pulse" />
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative group">
              <div
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-semibold cursor-pointer ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-200 hover:border-emerald-600'
                    : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-emerald-500'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-emerald-500" />
                <span className="uppercase">{currentLang}</span>
              </div>
              <div
                className={`absolute right-0 top-full mt-2 w-36 py-2 rounded-2xl shadow-xl border backdrop-blur-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-50 ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-200'
                    : 'bg-white border-slate-200 text-slate-800'
                }`}
              >
                {[
                  { code: 'en', label: 'English' },
                  { code: 'hi', label: 'हिंदी (Hindi)' },
                  { code: 'bho', label: 'भोजपुरी (Bhojpuri)' },
                  { code: 'mai', label: 'मैथिली (Maithili)' }
                ].map((l) => (
                  <button
                    key={l.code}
                    onClick={() => onLanguageChange(l.code as Language)}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-emerald-500/10 hover:text-emerald-500 flex items-center justify-between ${
                      currentLang === l.code ? 'text-emerald-500 font-bold' : ''
                    }`}
                  >
                    <span>{l.label}</span>
                    {currentLang === l.code && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Dark/Light Theme Switcher */}
            <button
              onClick={onToggleTheme}
              className={`p-2.5 rounded-xl border transition-all ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* AI Crop Doctor Button */}
            <button
              onClick={onOpenDoctor}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-amber-500 hover:from-emerald-500 hover:to-amber-400 text-white font-bold text-xs shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>{t.cropDoctor}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl border border-emerald-800/30 text-emerald-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden border-t px-4 pt-3 pb-6 transition-colors ${
            isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between ${
                  activeTab === item.id
                    ? 'bg-emerald-600 text-white font-bold'
                    : isDarkMode
                    ? 'bg-slate-900 text-slate-300'
                    : 'bg-slate-100 text-slate-800'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[9px] bg-amber-400 text-slate-950 rounded font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenDoctor();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{t.cropDoctor}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
