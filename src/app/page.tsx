"use client";

import React, { useState } from "react";
import {
  Shield,
  Star,
  Zap,
  TrendingDown,
  PhoneCall,
  MessageSquare,
  CheckCircle,
  Award,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { LiveQuoteEngine } from "../components/LiveQuoteEngine";
import { InsurerMarquee } from "../components/InsurerMarquee";
import { InstallmentCalculator } from "../components/InstallmentCalculator";
import { RoadsideAssistanceHub } from "../components/RoadsideAssistanceHub";
import { FeatureGrid } from "../components/FeatureGrid";
import { NcdCheckerTool } from "../components/NcdCheckerTool";
import { ReviewsSection } from "../components/ReviewsSection";
import { FaqSection } from "../components/FaqSection";
import { Footer } from "../components/Footer";
import {
  QuoteCheckoutModal,
  EmergencySosModal,
  LoginModal,
} from "../components/Modals";
import { Insurer, VehicleSample, TRANSLATIONS } from "../data/bjakData";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ms">("en");
  const [sosModalOpen, setSosModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<{
    insurer: Insurer;
    vehicle: VehicleSample;
    ncd: number;
    finalPrice: number;
    savings: number;
    addons: {
      roadtax: boolean;
      windscreen: boolean;
      flood: boolean;
      allDrivers: boolean;
    };
  } | null>(null);

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenSos={() => setSosModalOpen(true)}
        onOpenLogin={() => setLoginModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative pt-8 pb-4 overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-100/50 via-indigo-50/20 to-transparent pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 pb-2">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-4">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-800">
                Over 9,000,000 Malaysian Drivers Covered
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-extrabold text-blue-600">
                16 Panel Insurers
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
              <span>{t.heroTitle} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {t.heroHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Key Value Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-5 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>BNM-Compliant Aggregator</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Instant JPJ Digital Road Tax</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>4.8★ (367k+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* Interactive Live Quote Engine */}
          <LiveQuoteEngine
            lang={lang}
            onSelectQuote={(quote) => setSelectedQuote(quote)}
          />
        </section>

        {/* Insurer Marquee & Trust Bar */}
        <InsurerMarquee />

        {/* 0% Installment & BNPL Calculator */}
        <InstallmentCalculator />

        {/* 24/7 VIP Roadside Assistance Hub */}
        <RoadsideAssistanceHub onOpenSos={() => setSosModalOpen(true)} />

        {/* Why Choose BJAK Pillars */}
        <FeatureGrid />

        {/* NCD Checker Tool */}
        <NcdCheckerTool />

        {/* Customer Reviews & Social Proof */}
        <ReviewsSection />

        {/* FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Emergency / WhatsApp Action Hub */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={() => setSosModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-xl shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
          </span>
          <span>SOS Roadside</span>
        </button>

        <a
          href="https://wa.me/60392131717"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 group"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp Support</span>
        </a>
      </div>

      {/* Interactive Modals */}
      <QuoteCheckoutModal
        isOpen={!!selectedQuote}
        onClose={() => setSelectedQuote(null)}
        quoteData={selectedQuote}
      />

      <EmergencySosModal
        isOpen={sosModalOpen}
        onClose={() => setSosModalOpen(false)}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
}
