import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle,
  Globe,
  Clock
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ContactSectionProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs mb-3">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>24/7 FARMER HELPLINE & REGIONAL AGRI HUBS</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {t.contactTitle}
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Reach our agricultural engineers and regional drone hubs across India.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Hubs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contacts */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl space-y-4 ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <h3 className={`text-lg font-black mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Headquarters & Toll-Free Helpline
              </h3>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block">HQ Address:</span>
                  <p className="text-xs text-slate-200 font-semibold">
                    Agri AI Bharat Innovation Tower, Pusa Road, New Delhi 110012
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-400/20 text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block">24/7 Farmer Toll-Free Helpline:</span>
                  <p className="text-xs text-amber-400 font-extrabold">
                    1800-180-1551 / +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-green-500/20 text-green-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block">WhatsApp Direct Helpline:</span>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-green-400 font-bold hover:underline"
                  >
                    Chat on WhatsApp (+91 98765 43210)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block">Official Support Email:</span>
                  <p className="text-xs text-slate-200 font-semibold">
                    support@agriaibharat.in / kisan@agriaibharat.in
                  </p>
                </div>
              </div>
            </div>

            {/* Regional Hubs */}
            <div
              className={`p-6 rounded-3xl border backdrop-blur-xl ${
                isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider mb-3">
                Regional Drone & KVK Field Hubs:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-300">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  📍 Patna, Bihar
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  📍 Ludhiana, Punjab
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  📍 Nashik, Maharashtra
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  📍 Hyderabad, Telangana
                </div>
              </div>
            </div>

          </div>

          {/* Right: Contact Form & Google Map Container */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Form */}
            <div
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl ${
                isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'
              }`}
            >
              <h3 className={`text-lg font-black mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Send Direct Message to Agri Scientist Team
              </h3>

              {submitted ? (
                <div className="py-8 text-center space-y-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-400">Message Received!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you {name}. An agronomist will call you back within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">Your Name:</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">Mobile Number:</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">Your Query / Farm Details:</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe your query, crop issue, or drone booking requirement..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs font-semibold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-amber-500 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Krishi Team</span>
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Google Map Visual Container */}
            <div className="rounded-3xl border border-slate-800 overflow-hidden h-64 bg-slate-950 relative">
              <iframe
                title="Agri AI Bharat Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.990263622081!2d77.162817!3d28.630058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02f82283a005%3A0x6b2e106954203253!2sPusa%2C%20New%20Delhi%2C%20Delhi%20110012!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full filter invert-[0.9] contrast-[1.2] opacity-80"
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
