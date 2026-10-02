"use client";

import React, { useState } from "react";
import { Award, ShieldCheck, Check, ArrowRight, HelpCircle, Car, Bike } from "lucide-react";

export const NcdCheckerTool: React.FC = () => {
  const [vehicleCategory, setVehicleCategory] = useState<"car" | "motorcycle">("car");
  const [claimFreeYears, setClaimFreeYears] = useState<number>(5);

  const carTiers = [
    { year: 0, ncd: 0, text: "Brand new driver / after fault claim" },
    { year: 1, ncd: 25, text: "1 continuous claim-free year" },
    { year: 2, ncd: 30, text: "2 continuous claim-free years" },
    { year: 3, ncd: 38.33, text: "3 continuous claim-free years" },
    { year: 4, ncd: 45, text: "4 continuous claim-free years" },
    { year: 5, ncd: 55, text: "5+ years maximum legal discount" },
  ];

  const motorTiers = [
    { year: 0, ncd: 0, text: "New rider" },
    { year: 1, ncd: 15, text: "1 claim-free year" },
    { year: 2, ncd: 20, text: "2 claim-free years" },
    { year: 3, ncd: 25, text: "3+ years maximum motorcycle NCD" },
  ];

  const activeTiers = vehicleCategory === "car" ? carTiers : motorTiers;
  const currentTier =
    activeTiers.find((t) => t.year === Math.min(claimFreeYears, activeTiers.length - 1)) ||
    activeTiers[activeTiers.length - 1];

  const estimatedMarketBase = vehicleCategory === "car" ? 1520 : 380;
  const estimatedSavings = Math.round(estimatedMarketBase * (currentTier.ncd / 100));

  return (
    <section id="ncd-checker" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50/50 rounded-3xl p-6 sm:p-10 border border-blue-200/80 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-blue-600" />
                <span>Bank Negara Malaysia Tariff Scale</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                No Claim Discount (NCD) Entitlement Checker
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                NCD is a cumulative discount granted to vehicle owners who have not made
                any insurance claims. Select your claim-free years to calculate your exact
                savings before renewing.
              </p>

              {/* Vehicle Type Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setVehicleCategory("car");
                    setClaimFreeYears(5);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    vehicleCategory === "car"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200"
                  }`}
                >
                  <Car className="w-4 h-4" />
                  <span>Private Car (Up to 55%)</span>
                </button>
                <button
                  onClick={() => {
                    setVehicleCategory("motorcycle");
                    setClaimFreeYears(3);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    vehicleCategory === "motorcycle"
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200"
                  }`}
                >
                  <Bike className="w-4 h-4" />
                  <span>Motorcycle (Up to 25%)</span>
                </button>
              </div>

              {/* Year Selector Buttons */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 block mb-2">
                  Consecutive Claim-Free Years:
                </span>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {activeTiers.map((t) => (
                    <button
                      key={t.year}
                      onClick={() => setClaimFreeYears(t.year)}
                      className={`p-2 rounded-xl text-center border text-xs font-bold transition-all cursor-pointer ${
                        claimFreeYears === t.year
                          ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <div>Yr {t.year}</div>
                      <div className="text-[11px] font-mono font-extrabold text-blue-500">
                        {t.ncd}%
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Computed Savings Box */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Your Current NCD Status
                </span>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {currentTier.text}
                </span>
              </div>

              <div className="mt-6 flex items-baseline justify-between">
                <div>
                  <div className="text-5xl font-black font-mono text-slate-900">
                    {currentTier.ncd}%
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-1">
                    Off Total Gross Base Premium
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400">Estimated Ringgit Savings</div>
                  <div className="text-3xl font-black font-mono text-emerald-600">
                    -RM {estimatedSavings}
                  </div>
                </div>
              </div>

              {/* NCD Transfer Advice Box */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Selling or Buying a New Car?</span>
                </div>
                <p>
                  You can transfer your full <strong>{currentTier.ncd}% NCD</strong> from
                  your old vehicle to a newly purchased vehicle instantly during BJAK
                  checkout by simply entering your registration number.
                </p>
              </div>

              <a
                href="#quote-engine"
                className="mt-6 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <span>Apply {currentTier.ncd}% NCD to My Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
