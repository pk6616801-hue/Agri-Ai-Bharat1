import React, { useState } from 'react';
import {
  Smartphone,
  QrCode,
  Send,
  CheckCircle2,
  Sparkles,
  Download
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface MobileAppProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const MobileAppSection: React.FC<MobileAppProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  const [phone, setPhone] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setPhone('');
    }, 3000);
  };

  return (
    <section id="mobile-app" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 sm:p-14 rounded-3xl border backdrop-blur-xl relative overflow-hidden bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-emerald-900/60 text-white shadow-2xl`}
        >
          {/* Background Glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs border border-emerald-500/30">
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>AGRI AI BHARAT MOBILE APP (ANDROID & IOS)</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                {t.mobileAppTitle}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Offline AI Crop Doctor, Voice Commands in Hindi & Bhojpuri, Real-time Mandi Price Notifications, and Direct Drone Spraying Booking — right in your pocket!
              </p>

              {/* Send SMS Link Form */}
              <div className="pt-2">
                <span className="text-xs font-bold text-amber-400 block mb-2">
                  Get App Download Link directly on your Phone via SMS:
                </span>

                {sentSuccess ? (
                  <div className="p-4 rounded-2xl bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center gap-2 border border-emerald-500/40">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Download link sent successfully via SMS to +91 {phone}!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSendLink} className="flex flex-col sm:flex-row gap-3 max-w-md">
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit Mobile Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-2xl border border-slate-700 bg-slate-950 text-white text-xs font-semibold focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-amber-500 text-slate-950 font-black text-xs shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Link</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Store Download Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-6 py-3 rounded-2xl bg-slate-900 border border-slate-700 hover:border-emerald-500 text-white font-bold text-xs flex items-center gap-3 shadow-lg">
                  <Download className="w-5 h-5 text-emerald-400" />
                  <div className="text-left">
                    <span className="text-[9px] text-slate-400 block uppercase">Download on</span>
                    <span className="text-sm font-black">Google Play</span>
                  </div>
                </button>

                <button className="px-6 py-3 rounded-2xl bg-slate-900 border border-slate-700 hover:border-emerald-500 text-white font-bold text-xs flex items-center gap-3 shadow-lg">
                  <Download className="w-5 h-5 text-amber-400" />
                  <div className="text-left">
                    <span className="text-[9px] text-slate-400 block uppercase">Download on</span>
                    <span className="text-sm font-black">Apple App Store</span>
                  </div>
                </button>
              </div>

            </div>

            {/* Right QR Code Box */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="p-6 rounded-3xl bg-white border-4 border-emerald-500 shadow-2xl text-slate-900 text-center max-w-xs space-y-3">
                <div className="w-48 h-48 bg-slate-950 rounded-2xl p-3 mx-auto flex items-center justify-center text-emerald-400">
                  {/* Simulated Dynamic QR Code */}
                  <QrCode className="w-full h-full stroke-[1.5]" />
                </div>
                <span className="text-xs font-black text-slate-900 block">
                  Scan QR Code to Install App
                </span>
                <span className="text-[10px] text-emerald-600 font-bold block">
                  Agri AI Bharat v3.4 (4.9 ★ Rated)
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
