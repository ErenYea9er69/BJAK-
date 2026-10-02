"use client";

import React, { useState } from "react";
import { ShieldCheck, Award, CheckCircle } from "lucide-react";
import { INSURERS } from "../data/bjakData";

const EXTENDED_PARTNERS = [
  ...INSURERS,
  {
    id: "berjaya",
    name: "Berjaya Sompo Insurance",
    type: "Conventional" as const,
    logoText: "BERJAYA SOMPO",
    rating: 4.7,
    reviewsCount: 31200,
    highlight: "Sompo MotorSafe telematics discount",
    claimSpeed: "24-hour approval",
    freeTowingKm: 150,
    baseRateMultiplier: 0.0245,
  },
  {
    id: "greateastern",
    name: "Great Eastern General",
    type: "Conventional" as const,
    logoText: "Great Eastern",
    rating: 4.6,
    reviewsCount: 22100,
    highlight: "OCBC Bank affiliated motor protection",
    claimSpeed: "Direct claim settlement",
    freeTowingKm: 100,
    baseRateMultiplier: 0.0244,
  },
  {
    id: "lonpac",
    name: "Lonpac Insurance",
    type: "Conventional" as const,
    logoText: "LONPAC INSURANCE",
    rating: 4.7,
    reviewsCount: 28400,
    highlight: "Public Bank subsidiary partner",
    claimSpeed: "3-day turnaround",
    freeTowingKm: 150,
    baseRateMultiplier: 0.0246,
  },
  {
    id: "aig",
    name: "AIG Malaysia",
    type: "Conventional" as const,
    logoText: "AIG",
    rating: 4.8,
    reviewsCount: 45000,
    highlight: "Global reinsurance strength & roadside assist",
    claimSpeed: "Priority claims handling",
    freeTowingKm: 150,
    baseRateMultiplier: 0.0254,
  },
];

export const InsurerMarquee: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "takaful" | "conventional">("all");

  const displayedInsurers = EXTENDED_PARTNERS.filter((ins) => {
    if (activeTab === "takaful") return ins.type === "Takaful";
    if (activeTab === "conventional") return ins.type === "Conventional";
    return true;
  });

  return (
    <section className="w-full py-10 bg-slate-100/60 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Official Panel Insurers & Takaful Operators</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
              Compare 16 Bank Negara Malaysia Licensed Partners
            </h3>
          </div>

          {/* Filter options */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              All 16 Partners
            </button>
            <button
              onClick={() => setActiveTab("takaful")}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === "takaful"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              Islamic Takaful
            </button>
            <button
              onClick={() => setActiveTab("conventional")}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                activeTab === "conventional"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              Conventional
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden mask-gradient-x">
        <div className="flex gap-4 animate-marquee py-2">
          {[...displayedInsurers, ...displayedInsurers].map((ins, index) => (
            <div
              key={`${ins.id}-${index}`}
              className="flex-shrink-0 w-64 bg-white rounded-2xl p-4 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-sm text-slate-900 font-mono tracking-tight group-hover:text-blue-600 transition-colors">
                  {ins.logoText}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    ins.type === "Takaful"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {ins.type}
                </span>
              </div>
              <div className="text-xs text-slate-600 line-clamp-1 font-medium">
                {ins.name}
              </div>
              <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <CheckCircle className="w-3 h-3 text-blue-600" />
                  {ins.freeTowingKm}km Towing
                </span>
                <span className="text-amber-600 font-bold">★ {ins.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
