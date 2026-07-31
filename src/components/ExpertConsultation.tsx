import React, { useState } from 'react';
import {
  UserCheck,
  PhoneCall,
  Video,
  MessageSquare,
  Star,
  Clock,
  CheckCircle,
  X
} from 'lucide-react';
import { Expert, Language } from '../types';
import { mockExperts } from '../data/mockData';
import { translations } from '../data/translations';

interface ExpertConsultationProps {
  currentLang: Language;
  isDarkMode: boolean;
  onOpenChat: () => void;
}

export const ExpertConsultation: React.FC<ExpertConsultationProps> = ({
  currentLang,
  isDarkMode,
  onOpenChat
}) => {
  const t = translations[currentLang];

  const [activeCallExpert, setActiveCallExpert] = useState<Expert | null>(null);
  const [callType, setCallType] = useState<'voice' | 'video'>('voice');
  const [callConnected, setCallConnected] = useState(false);

  const startCall = (expert: Expert, type: 'voice' | 'video') => {
    setActiveCallExpert(expert);
    setCallType(type);
    setCallConnected(false);
    setTimeout(() => {
      setCallConnected(true);
    }, 2000);
  };

  return (
    <section id="expert" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs mb-3">
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>KRISHI VIGYAN KENDRA & SCIENTIST CONSULTATION</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Direct Advice from Top Agronomists
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Connect via 1-on-1 Voice Call, Video Call, or AI Chat with ICAR & KVK certified agricultural scientists.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockExperts.map((expert) => (
            <div
              key={expert.id}
              className={`p-6 rounded-3xl border backdrop-blur-xl flex flex-col justify-between transition-all hover:border-emerald-500/50 ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-16 h-16 rounded-2xl object-cover shrink-0 border-2 border-emerald-500"
                  />
                  <div>
                    <h3 className={`text-base font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {expert.name}
                    </h3>
                    <p className="text-xs text-emerald-400 font-bold">{expert.title}</p>
                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mt-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{expert.rating}</span>
                      <span className="text-slate-400 font-normal">({expert.experienceYears} yrs exp)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500 block">
                    Specialization:
                  </span>
                  <p className="text-xs text-slate-300 font-medium">
                    {expert.specialization}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {expert.languages.map((l, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] text-slate-300">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800">
                <button
                  onClick={onOpenChat}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat</span>
                </button>

                <button
                  onClick={() => startCall(expert, 'voice')}
                  className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Voice</span>
                </button>

                <button
                  onClick={() => startCall(expert, 'video')}
                  className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Video</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Call Overlay Modal */}
      {activeCallExpert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
          <div className="w-full max-w-sm p-8 rounded-3xl bg-slate-900 border border-slate-800 text-white text-center relative space-y-6">
            <button
              onClick={() => setActiveCallExpert(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activeCallExpert.image}
              alt={activeCallExpert.name}
              className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-emerald-500/50 animate-pulse"
            />

            <div>
              <h3 className="text-xl font-black">{activeCallExpert.name}</h3>
              <p className="text-xs text-emerald-400 font-bold">{activeCallExpert.title}</p>
              <p className="text-xs text-amber-400 mt-2 font-bold uppercase tracking-widest">
                {callConnected ? `Connected (${callType.toUpperCase()} CALL)` : `Ringing & Dialing...`}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setActiveCallExpert(null)}
                className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-600/30"
              >
                <PhoneCall className="w-6 h-6 rotate-[135deg]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
