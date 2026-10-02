"use client";

import React, { useState } from "react";
import {
  Truck,
  BatteryCharging,
  Wrench,
  Fuel,
  Car,
  MapPin,
  PhoneCall,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Clock,
  Sparkles,
  AlertCircle,
} from "lucide-react";

export const RoadsideAssistanceHub: React.FC<{ onOpenSos: () => void }> = ({
  onOpenSos,
}) => {
  const [simulationStep, setSimulationStep] = useState<"idle" | "locating" | "dispatched">("dispatched");

  const restartSimulation = () => {
    setSimulationStep("locating");
    setTimeout(() => {
      setSimulationStep("dispatched");
    }, 1200);
  };

  return (
    <section id="vip-roadside" className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Perks */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary with All Comprehensive Policies</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              BJAK VIP 24/7 Nationwide Roadside Assistance
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Never get stranded on Malaysian roads again. With over 450 certified tow
              trucks stationed across Peninsular and East Malaysia, our dispatch system
              reaches you in an average of 22 minutes.
            </p>

            {/* 5 Core Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Free 200km Towing</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Direct to your preferred workshop or home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <BatteryCharging className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Jumpstart & Battery</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    On-site battery test & emergency jump.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Tyre Change Service</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Punctured tyre swap to spare wheel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Fuel className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">10L Fuel Delivery</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Emergency petrol delivery if you run empty.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenSos}
                className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request Breakdown SOS (24/7)</span>
              </button>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Avg Response: 22 Minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live GPS Dispatcher Simulator */}
          <div className="lg:col-span-6">
            <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                    Live Dispatch Simulator
                  </span>
                </div>
                <button
                  onClick={restartSimulation}
                  className="text-xs text-blue-400 hover:text-blue-300 font-bold underline cursor-pointer"
                >
                  Test SOS Flow
                </button>
              </div>

              {simulationStep === "locating" ? (
                <div className="py-16 text-center space-y-3">
                  <div className="w-10 h-10 border-3 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-sm font-mono text-slate-300">
                    Triangulating GPS Highway Coordinates...
                  </p>
                </div>
              ) : (
                <div className="space-y-4 pt-4">
                  {/* Live Location Card */}
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Simulated Location</div>
                        <div className="text-sm font-bold text-white font-mono">
                          KM 294.5 PLUS Highway (Northbound, Kajang)
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md border border-emerald-500/30">
                      GPS Locked
                    </span>
                  </div>

                  {/* Assigned Tow Truck Driver Profile */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-sm">
                          AF
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-white">
                            Ahmad Fikri (BJAK Ranger #408)
                          </div>
                          <div className="text-xs text-blue-200">
                            Hino Flatbed Tow Unit • 4.9★ (380 rescues)
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black font-mono text-amber-400">
                          18m
                        </div>
                        <div className="text-[10px] text-slate-400">Estimated ETA</div>
                      </div>
                    </div>

                    {/* Progress Tracker Steps */}
                    <div className="mt-4 pt-3 border-t border-blue-500/20 grid grid-cols-3 gap-2 text-center text-xs font-medium">
                      <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Dispatched</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-blue-500/30 text-blue-200 font-bold border border-blue-400/50 animate-pulse flex items-center justify-center gap-1">
                        <Navigation className="w-3.5 h-3.5" />
                        <span>En Route</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-500">
                        <span>On Site</span>
                      </div>
                    </div>
                  </div>

                  {/* Live WhatsApp / Phone Direct Connect Bar */}
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-300">
                      Need immediate medical or police assistance?
                    </span>
                    <a
                      href="tel:0392131717"
                      className="font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 font-mono"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>03-9213 1717</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
