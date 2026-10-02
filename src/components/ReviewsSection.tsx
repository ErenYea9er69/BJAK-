"use client";

import React, { useState } from "react";
import { Star, CheckCircle, ThumbsUp, MessageSquare, Sparkles } from "lucide-react";
import { VERIFIED_REVIEWS } from "../data/bjakData";

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [helpfulCounts, setHelpfulCounts] = useState<{ [key: string]: number }>({
    r1: 42,
    r2: 128,
    r3: 31,
    r4: 56,
  });

  const handleHelpful = (id: string) => {
    setHelpfulCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Malaysian Driver Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Trusted By 9+ Million Vehicle Owners
            </h2>
          </div>

          {/* Google 4.8 Star Metric Card */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center font-black text-2xl text-blue-600">
              G
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="font-mono font-black text-slate-900 ml-1 text-base">
                  4.8 / 5.0
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Based on <strong>367,521</strong> verified Google & app reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-sm">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        {rev.verified && (
                          <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded-full border border-emerald-200 flex items-center gap-0.5">
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            Verified Policyholder
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400">
                        {rev.date} • {rev.vehicle}
                      </div>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <h4 className="text-base font-bold text-slate-900 mt-2">
                  "{rev.title}"
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {rev.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-[11px] text-slate-400">
                  Renewed via BJAK Online
                </span>
                <button
                  onClick={() => handleHelpful(rev.id)}
                  className="flex items-center gap-1.5 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({helpfulCounts[rev.id]})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
