"use client";

import React, { useState } from "react";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Car,
  AlertTriangle,
  PhoneCall,
  Clock,
  Sparkles,
  CreditCard,
  Download,
  FileText,
  MapPin,
} from "lucide-react";
import { Insurer, VehicleSample } from "../data/bjakData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  quoteData: {
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
  } | null;
}

export const QuoteCheckoutModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  quoteData,
}) => {
  const [selectedTenure, setSelectedTenure] = useState<number>(6);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  if (!isOpen || !quoteData) return null;

  const monthlyPrice = Math.round(quoteData.finalPrice / selectedTenure);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-blue-900 to-indigo-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
              B
            </div>
            <div>
              <h3 className="text-base font-extrabold tracking-tight">
                Policy Checkout & Issuance
              </h3>
              <p className="text-xs text-blue-200 font-mono">
                Ref: BJK-{Math.floor(100000 + Math.random() * 900000)}
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isComplete ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900">
                  Policy Renewed Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Your official e-cover note with <strong>{quoteData.insurer.name}</strong>{" "}
                  has been issued. Your digital road tax is synced directly with MyJPJ.
                </p>
              </div>

              {/* Cover Note Details Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Vehicle Registration:</span>
                  <span className="font-mono font-bold text-slate-900">
                    {quoteData.vehicle.plate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Policyholder NCD:</span>
                  <span className="font-bold text-emerald-600">
                    {quoteData.ncd}% Verified
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Cover Note Number:</span>
                  <span className="font-mono text-blue-600 font-bold">
                    CN-{quoteData.insurer.id.toUpperCase()}-2026-98124
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">JPJ Road Tax Status:</span>
                  <span className="font-bold text-emerald-700">
                    Active (Digital in MyJPJ)
                  </span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors"
                >
                  Done / View Policy
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Selected Insurer Summary */}
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                    Underwriting Insurer
                  </span>
                  <div className="text-base font-black text-slate-900 mt-0.5">
                    {quoteData.insurer.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {quoteData.insurer.type} • Free {quoteData.insurer.freeTowingKm}km VIP Towing
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 line-through font-mono">
                    RM {(quoteData.finalPrice + quoteData.savings).toLocaleString()}
                  </div>
                  <div className="text-2xl font-black text-blue-600 font-mono">
                    RM {quoteData.finalPrice.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Vehicle & Coverage Details */}
              <div className="space-y-2 text-xs border border-slate-200 rounded-2xl p-4">
                <div className="font-bold text-slate-800 pb-1 border-b border-slate-100 flex items-center justify-between">
                  <span>Coverage & Add-ons Summary</span>
                  <span className="text-emerald-600 font-mono">
                    Saved RM {quoteData.savings.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600 pt-1">
                  <span>Vehicle:</span>
                  <span className="font-medium text-slate-900">
                    {quoteData.vehicle.make} {quoteData.vehicle.model} ({quoteData.vehicle.plate})
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Agreed Market Value:</span>
                  <span className="font-mono font-medium text-slate-900">
                    RM {quoteData.vehicle.marketValue.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>No Claim Discount (NCD):</span>
                  <span className="font-bold text-emerald-600">
                    {quoteData.ncd}% Discount Applied
                  </span>
                </div>
                {quoteData.addons.roadtax && (
                  <div className="flex justify-between text-slate-600">
                    <span>JPJ Digital Road Tax:</span>
                    <span className="font-medium text-slate-900">
                      Included (+RM {quoteData.vehicle.roadTaxAnnual})
                    </span>
                  </div>
                )}
                {quoteData.addons.windscreen && (
                  <div className="flex justify-between text-slate-600">
                    <span>Windscreen Coverage (RM 1,200):</span>
                    <span className="font-medium text-slate-900">Included (+RM 165)</span>
                  </div>
                )}
                {quoteData.addons.flood && (
                  <div className="flex justify-between text-slate-600">
                    <span>Special Perils (Flood Protection):</span>
                    <span className="font-medium text-slate-900">Included (+RM 120)</span>
                  </div>
                )}
              </div>

              {/* Installment Tenure Selector */}
              <div>
                <span className="text-xs font-bold text-slate-800 block mb-2">
                  Select 0% Installment Plan:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 3, 6, 12].map((tenure) => {
                    const pricePerMo = Math.round(quoteData.finalPrice / tenure);
                    return (
                      <button
                        key={tenure}
                        type="button"
                        onClick={() => setSelectedTenure(tenure)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          selectedTenure === tenure
                            ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <div className="text-xs font-bold">
                          {tenure === 1 ? "Full Payment" : `${tenure} Months`}
                        </div>
                        <div className="text-xs font-mono font-bold mt-0.5 text-blue-400">
                          RM {pricePerMo}
                          {tenure > 1 && "/mo"}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Confirmation CTA */}
              <button
                onClick={handlePay}
                disabled={isProcessing}
                className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transacting with Bank Negara Gateway...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>
                      {selectedTenure === 1
                        ? `Pay RM ${quoteData.finalPrice.toLocaleString()}`
                        : `Confirm RM ${monthlyPrice}/month (0% Installment)`}
                    </span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const EmergencySosModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [requested, setRequested] = useState(false);
  const [breakdownType, setBreakdownType] = useState("Tow Truck");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-5 bg-amber-500 text-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-base">
            <AlertTriangle className="w-5 h-5 fill-slate-950 text-amber-500" />
            <span>24/7 VIP Emergency Roadside SOS</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-900 hover:bg-black/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {requested ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-black text-slate-900">
                Rescue Truck Dispatched!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Driver <strong>Ahmad Fikri (Unit #BJ-408)</strong> is en route to your GPS
                position. Estimated arrival time: <strong>18 minutes</strong>.
              </p>
              <div className="pt-2">
                <a
                  href="tel:0392131717"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Driver Directly: 03-9213 1717</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Stranded or had an accident? We dispatch the nearest certified tow truck
                from our 450+ nationwide fleet immediately.
              </p>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Type of Emergency Assistance:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  {[
                    "Tow Truck (Accident / Breakdown)",
                    "Dead Battery / Jumpstart",
                    "Punctured Flat Tyre",
                    "Out of Petrol / Fuel",
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setBreakdownType(type)}
                      className={`p-2.5 rounded-xl border text-left transition-colors cursor-pointer ${
                        breakdownType === type
                          ? "bg-amber-500 text-slate-950 border-amber-500 font-extrabold"
                          : "bg-slate-50 text-slate-700 border-slate-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Vehicle Registration Number:
                </label>
                <input
                  type="text"
                  defaultValue="WUM 9922"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 font-mono text-xs uppercase"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span>GPS Location: Auto-detected (Federal Highway KM 12.4)</span>
              </div>

              <button
                onClick={() => setRequested(true)}
                className="w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-md transition-all cursor-pointer"
              >
                Dispatch Nearest Tow Truck Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const LoginModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<"phone" | "portal">("phone");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between">
          <div className="font-extrabold text-base">My Policies Portal</div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {step === "portal" ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                  ML
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Mohd Lokman Hakim
                  </div>
                  <div className="text-xs text-slate-500">IC: 920412-10-5843</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>WUM 9922 (Perodua Myvi)</span>
                  <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>
                <div className="text-slate-500">Insurer: Zurich General Takaful</div>
                <div className="text-slate-500">Road Tax Validity: 18 Nov 2026</div>
                <div className="pt-2 flex gap-2">
                  <button className="flex-1 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1">
                    <Download className="w-3.5 h-3.5" />
                    <span>Cover Note</span>
                  </button>
                  <button className="flex-1 py-1.5 rounded-lg border border-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    <span>MyJPJ Road Tax</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Enter your registered mobile number to receive a secure WhatsApp login link
                or view your active motor policies.
              </p>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Mobile Number:
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 012-3456789"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-mono"
                />
              </div>
              <button
                onClick={() => setStep("portal")}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                Send WhatsApp OTP & Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
