import React from 'react';
import { Bell, TrendingUp, AlertTriangle, Sparkles, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface TickerProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const NotificationTicker: React.FC<TickerProps> = ({ currentLang, isDarkMode }) => {
  const alerts = [
    {
      type: 'mandi',
      icon: TrendingUp,
      color: 'text-emerald-400',
      text: ' Khana Mandi Wheat Price Jumped +₹60/Qtl to ₹2,480/Qtl. High buyer demand!'
    },
    {
      type: 'weather',
      icon: AlertTriangle,
      color: 'text-amber-400',
      text: ' Bihar & Eastern UP: Passing showers forecast for Thursday. Complete crop spraying today.'
    },
    {
      type: 'scheme',
      icon: ShieldCheck,
      color: 'text-blue-400',
      text: ' PM-Kisan 17th Installment e-KYC deadline extended. Check eligibility now.'
    },
    {
      type: 'drone',
      icon: Sparkles,
      color: 'text-green-400',
      text: ' Special 50% Subsidy available on Agri AI Precision Drone spraying booking this week!'
    }
  ];

  return (
    <div
      className={`border-b text-xs font-semibold overflow-hidden py-2 transition-colors ${
        isDarkMode
          ? 'bg-slate-900/90 border-emerald-950 text-slate-300'
          : 'bg-emerald-900 text-white border-emerald-950'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wider shrink-0">
          <Bell className="w-3 h-3 animate-bounce" />
          <span>LIVE AGRI ALERT</span>
        </div>

        <div className="relative flex-1 overflow-hidden h-5 flex items-center">
          <div className="whitespace-nowrap animate-marquee flex items-center gap-8 text-xs font-medium">
            {alerts.concat(alerts).map((a, i) => {
              const IconComp = a.icon;
              return (
                <span key={i} className="inline-flex items-center gap-1.5 shrink-0">
                  <IconComp className={`w-3.5 h-3.5 ${a.color}`} />
                  <span>{a.text}</span>
                  <span className="text-emerald-500 font-bold ml-4">●</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
