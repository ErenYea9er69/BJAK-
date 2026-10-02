"use client";

import React from "react";
import { Shield, PhoneCall, Mail, MapPin, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info & SSM Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-xl">
                B
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                BJAK
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              BJAK is Malaysia's premier digital financial aggregator, providing transparent
              insurance comparison from 16 licensed insurers and takaful operators. Trusted by
              over 9 million drivers nationwide.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5 text-[11px] text-slate-400">
              <div className="font-bold text-slate-200">
                BJAK Sdn. Bhd. (SSM No. 201901030483 / 1339813-K)
              </div>
              <div>
                Operating in compliance with Bank Negara Malaysia digital aggregator guidelines
                and Islamic Financial Services Act (IFSA).
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-400 pt-1">
              <a href="tel:0392131717" className="hover:text-white flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                <span>03-9213 1717 (24/7)</span>
              </a>
              <span>•</span>
              <a href="mailto:support@bjak.my" className="hover:text-white flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>support@bjak.my</span>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-3">
            <div className="font-extrabold text-white text-sm uppercase tracking-wider">
              Insurance Products
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#quote-engine" className="hover:text-blue-400 transition-colors">
                  Car Insurance & Takaful
                </a>
              </li>
              <li>
                <a href="#quote-engine" className="hover:text-blue-400 transition-colors">
                  Motorcycle Insurance
                </a>
              </li>
              <li>
                <a href="#quote-engine" className="hover:text-blue-400 transition-colors">
                  Umrah & Travel Takaful
                </a>
              </li>
              <li>
                <a href="#quote-engine" className="hover:text-blue-400 transition-colors">
                  Life & Medical Insurance
                </a>
              </li>
              <li>
                <a href="#quote-engine" className="hover:text-blue-400 transition-colors">
                  Personal Accident Coverage
                </a>
              </li>
              <li>
                <a href="#quote-engine" className="hover:text-blue-400 transition-colors">
                  Home Content & Fire
                </a>
              </li>
            </ul>
          </div>

          {/* JPJ Services Column */}
          <div className="space-y-3">
            <div className="font-extrabold text-white text-sm uppercase tracking-wider">
              JPJ Services & Tools
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#quote-engine" className="hover:text-blue-400 transition-colors">
                  JPJ Digital Road Tax Renewal
                </a>
              </li>
              <li>
                <a href="#ncd-checker" className="hover:text-blue-400 transition-colors">
                  NCD Discount Checker
                </a>
              </li>
              <li>
                <a href="#installments" className="hover:text-blue-400 transition-colors">
                  0% BNPL Installment Calculator
                </a>
              </li>
              <li>
                <a href="#vip-roadside" className="hover:text-blue-400 transition-colors">
                  24/7 Roadside Assistance
                </a>
              </li>
              <li>
                <a href="#quote-engine" className="hover:text-blue-400 transition-colors">
                  Vehicle Market Valuation
                </a>
              </li>
              <li>
                <a href="#quote-engine" className="hover:text-blue-400 transition-colors">
                  Claims Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="space-y-3">
            <div className="font-extrabold text-white text-sm uppercase tracking-wider">
              Company & Legal
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  About BJAK Malaysia
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Careers & Culture
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Privacy Policy & PDPA
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Security & Encryption
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  Whistleblowing Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} BJAK Sdn. Bhd. All rights reserved. Registered under
            Companies Commission of Malaysia.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" />
            <span>for Malaysian drivers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
