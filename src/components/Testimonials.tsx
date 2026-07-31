import React from 'react';
import { Star, Quote, TrendingUp, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface TestimonialsProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  const farmerStories = [
    {
      id: 't1',
      name: 'Harpreet Singh Sandhu',
      location: 'Ludhiana, Punjab',
      crop: 'Wheat & Paddy (50 Acres)',
      rating: 5,
      story: 'Using Agri AI Bharat Drone spraying saved me over ₹45,000 in labor costs last season. The AI Crop Doctor identified Yellow Rust before it could spread!',
      yieldIncrease: '+18% Wheat Yield',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: 't2',
      name: 'Sardar Baldev Mahato',
      location: 'Samastipur, Bihar',
      crop: 'Maize & Basmati Rice',
      rating: 5,
      story: 'Sold 120 Quintals of Paddy directly through Agri AI Bharat Mandi Bidding to buyers in Delhi at ₹4,520/Qtl without paying a single rupee to middlemen.',
      yieldIncrease: '₹62,000 Extra Income',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: 't3',
      name: 'Vijayrao Patil',
      location: 'Nashik, Maharashtra',
      crop: 'Onion & Grape Vineyard',
      rating: 5,
      story: 'The AI Weather Spraying Advisor accurately alerted me about humidity spikes, preventing fungal mildew on my grape farm. Truly revolucionary!',
      yieldIncrease: '100% Crop Protected',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs mb-3">
            <Quote className="w-4 h-4 text-amber-400" />
            <span>INDIAN FARMERS TRANSFORMING THEIR INCOME</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {t.testimonialsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {farmerStories.map((story) => (
            <div
              key={story.id}
              className={`p-8 rounded-3xl border backdrop-blur-xl flex flex-col justify-between transition-all hover:scale-[1.02] ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800 text-white' : 'bg-white border-slate-200 shadow-xl text-slate-900'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-black text-xs border border-emerald-500/30">
                    {story.yieldIncrease}
                  </span>
                </div>

                <p className="text-sm italic text-slate-300 leading-relaxed mb-6">
                  "{story.story}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
                />
                <div>
                  <h3 className="text-sm font-black">{story.name}</h3>
                  <p className="text-xs text-slate-400">{story.location} • {story.crop}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
