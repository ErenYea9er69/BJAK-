"use client";

import React, { useState } from "react";
import { CreditCard, Sparkles, Check, HelpCircle, ShieldCheck } from "lucide-react";
import { BNPL_PARTNERS } from "../data/bjakData";

export const InstallmentCalculator: React.FC = () => {
  const [premiumAmount, setPremiumAmount] = useState<number>(850);
  const [selectedMethod, setSelectedMethod] = useState<"card" | "bnpl">("card");

  const m3 = Math.round(premiumAmount / 3);
  const m6 = Math.round(premiumAmount / 6);
  const m12 = Math.round(premiumAmount / 12);

  return (
    <section id="installments" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>0% Interest Easy Payment Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Split Your Premium Into Flexible Monthly Payments
          </h2>
          <p className="mt-3 text-base text-slate-600">
            No lump-sum burden. Choose between 0% bank credit card installments or
            instant Buy Now Pay Later (BNPL) with no credit card required.
          </p>
        </div>

        {/* Dynamic Calculator Box */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Interactive Slider */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-blue-300 font-extrabold mb-1">
                  Adjust Insurance + Road Tax Amount
                </div>
                <div className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight flex items-baseline gap-2">
                  <span>RM</span>
                  <span>{premiumAmount.toLocaleString()}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Drag the slider to test monthly payments for your policy
                </p>
              </div>

              {/* Slider Component */}
              <div>
                <input
                  type="range"
                  min="300"
                  max="3500"
                  step="50"
                  value={premiumAmount}
                  onChange={(e) => setPremiumAmount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 focus:outline-none"
                />
                <div className="flex justify-between text-xs text-slate-400 font-mono mt-2">
                  <span>RM 300</span>
                  <span>RM 1,500</span>
                  <span>RM 3,500</span>
                </div>
              </div>

              {/* Method Toggle */}
              <div className="bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700 flex gap-1">
                <button
                  onClick={() => setSelectedMethod("card")}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedMethod === "card"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Bank Credit Card (0%)
                </button>
                <button
                  onClick={() => setSelectedMethod("bnpl")}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedMethod === "bnpl"
                      ? "bg-emerald-600 text-white shadow-md"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  BNPL E-Wallet (No Card)
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  No paperwork or advance approval needed. Automatically applied during checkout.
                </span>
              </div>
            </div>

            {/* Right Column: 3 Tenure Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* 3 Months */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 hover:border-blue-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                    3 Months Plan
                  </div>
                  <div className="mt-2 text-3xl font-black font-mono text-white">
                    RM {m3}
                    <span className="text-xs font-normal text-slate-300">/mo</span>
                  </div>
                  <div className="mt-1 text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>0% Interest Free</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-300">
                  Total Payable: RM {premiumAmount.toLocaleString()}
                </div>
              </div>

              {/* 6 Months - Highlighted */}
              <div className="bg-blue-600/30 backdrop-blur-md rounded-2xl p-5 border-2 border-blue-400 relative flex flex-col justify-between shadow-lg shadow-blue-500/10">
                <div className="absolute -top-3 right-4 bg-amber-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                  Most Popular
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-200 uppercase tracking-wider">
                    6 Months Plan
                  </div>
                  <div className="mt-2 text-3xl font-black font-mono text-white">
                    RM {m6}
                    <span className="text-xs font-normal text-slate-300">/mo</span>
                  </div>
                  <div className="mt-1 text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>0% Easy Payment</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-200 font-medium">
                  Total Payable: RM {premiumAmount.toLocaleString()}
                </div>
              </div>

              {/* 12 Months */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 hover:border-blue-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                    12 Months Plan
                  </div>
                  <div className="mt-2 text-3xl font-black font-mono text-white">
                    RM {m12}
                    <span className="text-xs font-normal text-slate-300">/mo</span>
                  </div>
                  <div className="mt-1 text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Lowest Monthly Cost</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-300">
                  Total Payable: RM {premiumAmount.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Supported Partner Chips */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="text-xs text-slate-400 mb-3 font-semibold">
              Supported Banking & Payment Partners in Malaysia:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {BNPL_PARTNERS.map((p) => (
                <div
                  key={p.name}
                  className="bg-slate-800/90 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-xl text-xs flex items-center gap-2 font-medium"
                >
                  <span className="font-mono font-bold text-blue-400">{p.icon}</span>
                  <span>{p.name}</span>
                  <span className="text-[10px] text-slate-400">({p.tenure})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
