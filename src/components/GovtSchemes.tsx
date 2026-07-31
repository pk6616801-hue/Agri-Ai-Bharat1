import React, { useState } from 'react';
import {
  ShieldCheck,
  FileText,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  Calculator,
  Building2
} from 'lucide-react';
import { GovernmentScheme, Language } from '../types';
import { mockSchemes } from '../data/mockData';
import { translations } from '../data/translations';

interface GovtSchemesProps {
  currentLang: Language;
  isDarkMode: boolean;
}

export const GovtSchemes: React.FC<GovtSchemesProps> = ({ currentLang, isDarkMode }) => {
  const t = translations[currentLang];

  const [selectedScheme, setSelectedScheme] = useState<GovernmentScheme>(mockSchemes[0]);
  const [landAcres, setLandAcres] = useState<number>(2);
  const [eligibilityChecked, setEligibilityChecked] = useState(false);

  return (
    <section id="govt-schemes" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs mb-3">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>DIRECT BENEFIT TRANSFER & SUBSIDY PORTAL</span>
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {t.govtTitle}
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Check eligibility, documents required, and claim direct income & equipment subsidies.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Scheme Cards */}
          <div className="lg:col-span-5 space-y-4">
            {mockSchemes.map((scheme) => {
              const isSelected = selectedScheme.id === scheme.id;
              return (
                <div
                  key={scheme.id}
                  onClick={() => setSelectedScheme(scheme)}
                  className={`p-6 rounded-3xl border cursor-pointer backdrop-blur-xl transition-all ${
                    isSelected
                      ? 'bg-emerald-950/60 border-2 border-emerald-500 shadow-2xl'
                      : isDarkMode
                      ? 'bg-slate-900/80 border-slate-800 hover:border-emerald-700'
                      : 'bg-white border-slate-200 shadow-md hover:border-emerald-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 font-black text-[10px] uppercase">
                      {scheme.category}
                    </span>
                    <span className="text-xs font-black text-emerald-400">{scheme.financialBenefit}</span>
                  </div>

                  <h3 className={`text-base font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {scheme.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {scheme.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Scheme Details & Eligibility Wizard */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl space-y-6 ${
                isDarkMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white border-slate-200 shadow-2xl text-slate-900'
              }`}
            >
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">
                  {selectedScheme.ministry}
                </span>
                <h3 className="text-2xl font-black mt-1 text-amber-400">
                  {selectedScheme.name}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {selectedScheme.shortDescription}
                </p>
              </div>

              {/* Eligibility Criteria */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-2">
                  Key Eligibility Criteria:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {selectedScheme.eligibility.map((crit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Documents */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-400 mb-2">
                  Documents Required for Verification:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedScheme.documentsRequired.map((doc, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-bold text-slate-300"
                    >
                      📄 {doc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instant Application Link */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <Calculator className="w-4 h-4" />
                  <span>Calculated Benefit: {selectedScheme.financialBenefit}</span>
                </div>

                <a
                  href={selectedScheme.applyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-green-600 to-amber-500 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <span>Apply on Official Gov Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
