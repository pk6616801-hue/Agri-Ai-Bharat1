import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  X
} from 'lucide-react';
import { JobPosition, Language } from '../types';
import { mockJobs } from '../data/mockData';
import { translations } from '../data/translations';

interface CareersProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const Careers: React.FC<CareersProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantResume, setApplicantResume] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantResume('');
    }, 2500);
  };

  return (
    <section id="career" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs mb-3">
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span>CAREERS & CAMPUS HIRING AT AGRI AI BHARAT</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {t.careersTitle}
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Build computer vision, AI drone fleets, and digital agriculture platforms for 140 million Indian farmers.
          </p>
        </div>

        {/* Job Openings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockJobs.map((job) => (
            <div
              key={job.id}
              className={`p-6 rounded-3xl border backdrop-blur-xl flex flex-col justify-between transition-all hover:border-emerald-500/50 ${
                isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 font-black text-[10px] uppercase">
                    {job.type}
                  </span>
                  <span className="text-xs text-emerald-400 font-bold">{job.experienceNeeded}</span>
                </div>

                <h3 className={`text-base font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {job.title}
                </h3>
                <p className="text-xs text-amber-500 font-semibold mt-1">{job.department}</p>
                <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/20 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  {job.location}
                </span>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div
            className={`w-full max-w-md p-6 rounded-3xl border shadow-2xl relative ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {appliedSuccess ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-black text-emerald-400">Application Submitted!</h3>
                <p className="text-xs text-slate-300">
                  Our Agri AI Bharat Talent Team will review your application for {selectedJob.title}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-3">
                <h3 className="text-base font-black">Apply for {selectedJob.title}</h3>
                <p className="text-xs text-slate-400">{selectedJob.department} • {selectedJob.location}</p>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Email Address:</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">LinkedIn Profile / Portfolio Link:</label>
                  <input
                    type="url"
                    required
                    placeholder="https://..."
                    value={applicantResume}
                    onChange={(e) => setApplicantResume(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-amber-500 text-white font-bold text-xs shadow-lg mt-2"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
