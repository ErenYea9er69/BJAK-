"use client";

import React from "react";
import {
  TrendingDown,
  FileCheck2,
  MessageSquare,
  ShieldAlert,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <TrendingDown className="w-6 h-6 text-blue-600" />,
      tag: "Algorithmic Pricing",
      title: "Save Up To RM 380 Instantly",
      description:
        "We compare rates across 16 licensed Malaysian insurers simultaneously so you always pay the true lowest market premium.",
      stat: "RM 380 Avg. Saved",
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-emerald-600" />,
      tag: "MOT / JPJ Integrated",
      title: "Digital Road Tax in 5 Minutes",
      description:
        "Skip the physical post office and JPJ branches. Your digital road tax is automatically registered with MyJPJ with zero hassle.",
      stat: "100% Paperless",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
      tag: "Instant Delivery",
      title: "WhatsApp Cover Note in 120s",
      description:
        "Your official e-cover note, policy schedule, and receipt are sent directly to your WhatsApp the moment payment is completed.",
      stat: "Under 2 Mins",
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-amber-600" />,
      tag: "Dedicated Concierge",
      title: "Zero-Stress Claims Support",
      description:
        "Got into an accident? Our dedicated claims officers assist with police reporting, workshop approvals, and insurance adjusters.",
      stat: "99.2% Payout Rate",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Millions Choose BJAK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            The Smarter, Faster Way to Protect Your Vehicle
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Pioneering digital motor insurance in Malaysia with transparent rates,
            instant JPJ road tax synchronization, and 24/7 VIP assistance.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                    {feat.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  {feat.stat}
                </span>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
