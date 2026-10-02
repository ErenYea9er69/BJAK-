"use client";

import React, { useState } from "react";
import {
  Shield,
  PhoneCall,
  Globe,
  ChevronDown,
  User,
  Car,
  Bike,
  Plane,
  HeartPulse,
  Home,
  Menu,
  X,
  CreditCard,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

interface NavbarProps {
  lang: "en" | "ms";
  setLang: (lang: "en" | "ms") => void;
  onOpenSos: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  onOpenSos,
  onOpenLogin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = {
    en: {
      towBanner: "Need immediate roadside towing or jumpstart?",
      requestTow: "Request SOS Now",
      hotline: "24/7 Hotline: 03-9213 1717",
      products: "Insurance Products",
      roadtax: "Road Tax Renewal",
      installments: "0% Installments",
      vipRoadside: "VIP Roadside",
      ncdChecker: "NCD Checker",
      login: "My Policies / Login",
      bnmBadge: "BNM-Approved Aggregator",
      quoteFree: "Get Free Quote",
    },
    ms: {
      towBanner: "Perlukan bantuan tunda atau jumpstart segera?",
      requestTow: "Minta Bantuan SOS",
      hotline: "Talian 24/7: 03-9213 1717",
      products: "Produk Insurans",
      roadtax: "Cukai Jalan JPJ",
      installments: "Ansuran 0%",
      vipRoadside: "Bantuan VIP",
      ncdChecker: "Semak NCD",
      login: "Polisi Saya / Log Masuk",
      bnmBadge: "Agregator Berdaftar BNM",
      quoteFree: "Sebut Harga Percuma",
    },
  }[lang];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top VIP Roadside Assistance & Emergency Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white text-xs py-2 px-4 border-b border-blue-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[11px]">
              24/7 VIP Rescue
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-200 hidden md:inline">{t.towBanner}</span>
            <span className="font-mono text-blue-200 font-medium pl-1">
              {t.hotline}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSos}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded-full text-xs transition-transform active:scale-95 shadow-sm cursor-pointer"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-slate-950" />
              <span>{t.requestTow}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <div className="glass-nav bg-white/90 backdrop-blur-md border-b border-slate-200/90 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & BNM Trust Indicator */}
          <div className="flex items-center gap-4">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-600 flex items-center justify-center text-white font-extrabold text-2xl tracking-tighter shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                B
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1">
                  BJAK
                  <span className="text-blue-600 font-extrabold text-xs px-1.5 py-0.5 bg-blue-50 rounded border border-blue-200/60 uppercase">
                    PRO
                  </span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-tight -mt-0.5 hidden sm:block">
                  Malaysia's #1 Insurance Aggregator
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-1 text-[11px] bg-slate-100/80 text-slate-600 px-2.5 py-1 rounded-full border border-slate-200/70">
              <Shield className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.bnmBadge}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                onBlur={() => setTimeout(() => setProductsOpen(false), 200)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span>{t.products}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white shadow-xl shadow-slate-900/10 border border-slate-200/80 p-2 grid gap-1 z-50">
                  <a
                    href="#quote-engine"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Car Insurance & Takaful</div>
                      <div className="text-xs text-slate-500">16 panel insurers with 55% NCD discount</div>
                    </div>
                  </a>

                  <a
                    href="#quote-engine"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Bike className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Motorcycle Insurance</div>
                      <div className="text-xs text-slate-500">Instant JPJ road tax issuance</div>
                    </div>
                  </a>

                  <a
                    href="#quote-engine"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Umrah & Travel Takaful</div>
                      <div className="text-xs text-slate-500">Worldwide medical & flight protection</div>
                    </div>
                  </a>

                  <a
                    href="#quote-engine"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <HeartPulse className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Life & Medical Cover</div>
                      <div className="text-xs text-slate-500">Critical illness & hospital cash plans</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="#quote-engine"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {t.roadtax}
            </a>

            <a
              href="#installments"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <CreditCard className="w-4 h-4 text-emerald-600" />
              <span>{t.installments}</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.2 rounded-full">
                0%
              </span>
            </a>

            <a
              href="#vip-roadside"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
            >
              {t.vipRoadside}
            </a>

            <a
              href="#ncd-checker"
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1"
            >
              <FileCheck className="w-4 h-4 text-blue-600" />
              <span>{t.ncdChecker}</span>
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-bold text-slate-700 bg-white shadow-xs cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span className="uppercase">{lang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-xl bg-white shadow-lg border border-slate-200 py-1 z-50">
                  <button
                    onClick={() => {
                      setLang("en");
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between hover:bg-slate-50 ${
                      lang === "en" ? "text-blue-600 font-bold bg-blue-50/50" : "text-slate-700"
                    }`}
                  >
                    <span>English</span>
                    {lang === "en" && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                  <button
                    onClick={() => {
                      setLang("ms");
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between hover:bg-slate-50 ${
                      lang === "ms" ? "text-blue-600 font-bold bg-blue-50/50" : "text-slate-700"
                    }`}
                  >
                    <span>B. Malaysia</span>
                    {lang === "ms" && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                </div>
              )}
            </div>

            {/* Login / Policyholder Button */}
            <button
              onClick={onOpenLogin}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <User className="w-4 h-4 text-slate-500" />
              <span>{t.login}</span>
            </button>

            {/* Free Quote CTA */}
            <a
              href="#quote-engine"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all hover:scale-102 active:scale-98"
            >
              {t.quoteFree}
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid gap-2">
            <a
              href="#quote-engine"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 text-slate-800 font-semibold text-sm"
            >
              <Car className="w-4 h-4 text-blue-600" />
              <span>{t.products}</span>
            </a>
            <a
              href="#installments"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 text-slate-800 font-semibold text-sm"
            >
              <CreditCard className="w-4 h-4 text-emerald-600" />
              <span>{t.installments} (0%)</span>
            </a>
            <a
              href="#vip-roadside"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 text-slate-800 font-semibold text-sm"
            >
              <Shield className="w-4 h-4 text-amber-500" />
              <span>{t.vipRoadside}</span>
            </a>
            <a
              href="#ncd-checker"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 text-slate-800 font-semibold text-sm"
            >
              <FileCheck className="w-4 h-4 text-indigo-600" />
              <span>{t.ncdChecker}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-100 text-slate-800 font-semibold text-sm w-full text-left"
            >
              <User className="w-4 h-4 text-slate-600" />
              <span>{t.login}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
