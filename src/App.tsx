import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { NotificationTicker } from './components/NotificationTicker';
import { Hero } from './components/Hero';
import { CropDoctor } from './components/CropDoctor';
import { Marketplace } from './components/Marketplace';
import { BuySellMandi } from './components/BuySellMandi';
import { DroneServices } from './components/DroneServices';
import { WeatherWidget } from './components/WeatherWidget';
import { MandiPrices } from './components/MandiPrices';
import { ExpertConsultation } from './components/ExpertConsultation';
import { GovtSchemes } from './components/GovtSchemes';
import { LearningCenter } from './components/LearningCenter';
import { Testimonials } from './components/Testimonials';
import { MobileAppSection } from './components/MobileAppSection';
import { Careers } from './components/Careers';
import { ContactSection } from './components/ContactSection';
import { AgriMitraChat } from './components/AgriMitraChat';
import { Footer } from './components/Footer';
import { Language } from './types';
import { Bot, Sparkles } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [chatOpen, setChatOpen] = useState<boolean>(false);

  const handleOpenDoctor = () => {
    setActiveTab('crop-doctor');
    const el = document.getElementById('crop-doctor');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVoiceSearchTrigger = () => {
    setChatOpen(true);
  };

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Live Notification Ticker */}
      <NotificationTicker currentLang={currentLang} isDarkMode={isDarkMode} />

      {/* Glassmorphic Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDoctor={handleOpenDoctor}
        onOpenChat={() => setChatOpen(true)}
        onVoiceSearchTrigger={handleVoiceSearchTrigger}
      />

      {/* Main Page Sections */}
      <main className="space-y-4">
        {/* Section 1: Hero Banner */}
        <Hero
          currentLang={currentLang}
          isDarkMode={isDarkMode}
          onOpenDoctor={handleOpenDoctor}
          onNavigate={(id) => {
            setActiveTab(id);
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 2: AI Crop Doctor */}
        <CropDoctor currentLang={currentLang} isDarkMode={isDarkMode} />

        {/* Section 3: Marketplace */}
        <Marketplace currentLang={currentLang} isDarkMode={isDarkMode} />

        {/* Section 4: Buy & Sell Produce */}
        <BuySellMandi currentLang={currentLang} isDarkMode={isDarkMode} />

        {/* Section 5: Drone Services */}
        <DroneServices currentLang={currentLang} isDarkMode={isDarkMode} />

        {/* Section 6: Live Weather */}
        <WeatherWidget currentLang={currentLang} isDarkMode={isDarkMode} />

        {/* Section 7: Mandi Prices */}
        <MandiPrices currentLang={currentLang} isDarkMode={isDarkMode} />

        {/* Section 8: Expert Consultation */}
        <ExpertConsultation
          currentLang={currentLang}
          isDarkMode={isDarkMode}
          onOpenChat={() => setChatOpen(true)}
        />

        {/* Section 9: Government Schemes */}
        <GovtSchemes currentLang={currentLang} isDarkMode={isDarkMode} />

        {/* Section 10: Learning Center */}
        <LearningCenter currentLang={currentLang} isDarkMode={isDarkMode} />

        {/* Section 11: Testimonials */}
        <Testimonials currentLang={currentLang} isDarkMode={isDarkMode} />

        {/* Section 12: Mobile App */}
        <MobileAppSection currentLang={currentLang} isDarkMode={isDarkMode} />

        {/* Section 13: Careers */}
        <Careers currentLang={currentLang} isDarkMode={isDarkMode} />

        {/* Section 14: Contact & Office */}
        <ContactSection currentLang={currentLang} isDarkMode={isDarkMode} />
      </main>

      {/* Floating Sticky AgriMitra AI Chat Trigger */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-amber-400 text-slate-950 font-black shadow-2xl shadow-emerald-500/50 hover:scale-110 transition-transform flex items-center gap-2 group border-2 border-emerald-300"
        >
          <Bot className="w-6 h-6 text-slate-950 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline text-xs uppercase tracking-wider font-extrabold">
            Ask AgriMitra AI
          </span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
          </span>
        </button>
      )}

      {/* Floating AgriMitra AI Chatbot Drawer */}
      <AgriMitraChat
        currentLang={currentLang}
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
      />

      {/* Footer */}
      <Footer currentLang={currentLang} isDarkMode={isDarkMode} />
    </div>
  );
}
