import React from 'react';
import { Sprout, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  return (
    <footer className="border-t bg-slate-950 border-slate-900 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-900">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sprout className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white">Agri AI Bharat</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              India's premier AI agricultural platform powering 2.5 million farmers with satellite crop telemetry, drone spraying fleets, and digital Mandi trading.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO 9001:2026 Certified AgriTech Platform</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-3">Quick Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#crop-doctor" className="hover:text-emerald-400 transition-colors">AI Crop Doctor</a></li>
              <li><a href="#marketplace" className="hover:text-emerald-400 transition-colors">Farm Marketplace</a></li>
              <li><a href="#buy-sell" className="hover:text-emerald-400 transition-colors">Buy & Sell Harvest</a></li>
              <li><a href="#drone-services" className="hover:text-emerald-400 transition-colors">Drone Spraying Services</a></li>
            </ul>
          </div>

          {/* Col 3: Govt & Knowledge */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-3">Agri Portals</h4>
            <ul className="space-y-2">
              <li><a href="#mandi-prices" className="hover:text-emerald-400 transition-colors">Live Mandi Prices</a></li>
              <li><a href="#govt-schemes" className="hover:text-emerald-400 transition-colors">PM-Kisan & Govt Schemes</a></li>
              <li><a href="#weather" className="hover:text-emerald-400 transition-colors">Agri Weather Forecast</a></li>
              <li><a href="#learning" className="hover:text-emerald-400 transition-colors">Smart Farming Academy</a></li>
            </ul>
          </div>

          {/* Col 4: Legal & Social */}
          <div>
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider mb-3">Legal & Connect</h4>
            <ul className="space-y-2 mb-4">
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Career & Campus Hiring</a></li>
            </ul>
            <p className="text-[10px] text-slate-500 font-bold">
              Built with ❤️ for Indian Farmers across Bharat 🇮🇳
            </p>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 Agri AI Bharat Pvt. Ltd. All rights reserved.</p>
          <p className="text-amber-400 font-bold">Tagline: "Grow More. Earn More. Farm Smarter."</p>
        </div>

      </div>
    </footer>
  );
};
