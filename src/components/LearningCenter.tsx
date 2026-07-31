import React, { useState } from 'react';
import {
  BookOpen,
  Video,
  GraduationCap,
  FileText,
  Clock,
  User,
  PlayCircle
} from 'lucide-react';
import { LearningItem, Language } from '../types';
import { mockLearningItems } from '../data/mockData';
import { translations } from '../data/translations';

interface LearningCenterProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const LearningCenter: React.FC<LearningCenterProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  const [activeTab, setActiveTab] = useState<'All' | 'Blogs' | 'Video Tutorials' | 'Smart Farming Guides' | 'AI Courses'>('All');

  const filteredItems = mockLearningItems.filter(
    (item) => activeTab === 'All' || item.category === activeTab
  );

  return (
    <section id="learning" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs mb-3">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>AGRI AI SMART FARMING ACADEMY</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {t.learningTitle}
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Video courses, soil health guides, organic farming techniques, and drone flight tutorials.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {['All', 'Blogs', 'Video Tutorials', 'Smart Farming Guides', 'AI Courses'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat as any)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-emerald-600 to-amber-500 text-white shadow-lg'
                  : isDarkMode
                  ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-emerald-600'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl border overflow-hidden backdrop-blur-xl flex flex-col justify-between transition-all hover:-translate-y-1 ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div className="relative h-48 bg-slate-950">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-amber-400 text-slate-950 font-black text-[10px] uppercase">
                  {item.category}
                </span>
                <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <PlayCircle className="w-12 h-12 text-emerald-400" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.readTimeOrDuration}</span>
                    <span>•</span>
                    <User className="w-3.5 h-3.5" />
                    <span>{item.authorOrInstructor}</span>
                  </div>

                  <h3 className={`text-base font-black leading-snug ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white font-bold text-xs transition-colors mt-4">
                  Start Learning Free
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
