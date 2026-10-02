"use client";

import React, { useState, useMemo } from "react";
import {
  Car,
  Bike,
  Plane,
  HeartPulse,
  Home,
  Shield,
  Search,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Clock,
  Zap,
  Info,
  Sliders,
  Award,
} from "lucide-react";
import {
  SAMPLE_VEHICLES,
  INSURERS,
  TRANSLATIONS,
  VehicleSample,
  Insurer,
} from "../data/bjakData";

interface LiveQuoteEngineProps {
  lang: "en" | "ms";
  onSelectQuote: (quote: {
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
  }) => void;
}

export const LiveQuoteEngine: React.FC<LiveQuoteEngineProps> = ({
  lang,
  onSelectQuote,
}) => {
  const t = TRANSLATIONS[lang];

  // Active product category tab
  const [activeTab, setActiveTab] = useState<"car" | "motorcycle" | "travel" | "health" | "home">("car");

  // Selected vehicle & registration inputs
  const [plateInput, setPlateInput] = useState<string>("WUM 9922");
  const [nricInput, setNricInput] = useState<string>("940815-10-5321");
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleSample>(SAMPLE_VEHICLES[0]);

  // NCD percentage state
  const [ncdRate, setNcdRate] = useState<number>(55);

  // Policy add-ons state
  const [includeRoadtax, setIncludeRoadtax] = useState<boolean>(true);
  const [includeWindscreen, setIncludeWindscreen] = useState<boolean>(true);
  const [includeFlood, setIncludeFlood] = useState<boolean>(false);
  const [includeAllDrivers, setIncludeAllDrivers] = useState<boolean>(true);

  // Simulation loading state
  const [isComparing, setIsComparing] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(true);
  const [filterType, setFilterType] = useState<"all" | "takaful" | "conventional">("all");

  // Handle vehicle lookup
  const handleSelectSample = (sample: VehicleSample) => {
    setPlateInput(sample.plate);
    setSelectedVehicle(sample);
    setNcdRate(sample.standardNcd);
    setActiveTab(sample.type === "motorcycle" ? "motorcycle" : "car");
  };

  // Custom plate search
  const handlePlateChange = (val: string) => {
    const formatted = val.toUpperCase();
    setPlateInput(formatted);

    const match = SAMPLE_VEHICLES.find((v) =>
      v.plate.replace(/\s+/g, "") === formatted.replace(/\s+/g, "")
    );

    if (match) {
      setSelectedVehicle(match);
      setNcdRate(match.standardNcd);
    } else {
      // Dynamic fallback vehicle estimation
      setSelectedVehicle({
        plate: formatted || "BJK 8888",
        make: "Private",
        model: "Vehicle",
        variant: "Standard 1.5L Auto",
        year: 2022,
        cc: 1498,
        marketValue: 65000,
        standardNcd: 55,
        roadTaxAnnual: 90,
        type: activeTab === "motorcycle" ? "motorcycle" : "car",
      });
    }
  };

  // Trigger re-comparison animation
  const handleTriggerCompare = () => {
    setIsComparing(true);
    setShowResults(false);
    setTimeout(() => {
      setIsComparing(false);
      setShowResults(true);
    }, 850);
  };

  // Add-on cost calculations
  const roadtaxCost = includeRoadtax ? selectedVehicle.roadTaxAnnual : 0;
  const windscreenCost = includeWindscreen ? 165 : 0;
  const floodCost = includeFlood ? 120 : 0;
  const allDriversCost = includeAllDrivers ? 20 : 0;
  const totalAddons = roadtaxCost + windscreenCost + floodCost + allDriversCost;

  // Calculate live quotes for each insurer
  const calculatedQuotes = useMemo(() => {
    return INSURERS.map((ins) => {
      const baseGross = Math.round(selectedVehicle.marketValue * ins.baseRateMultiplier * 1.05);
      const ncdDiscountAmount = Math.round(baseGross * (ncdRate / 100));
      const netPremiumBeforeTax = baseGross - ncdDiscountAmount;
      const sst = Math.round(netPremiumBeforeTax * 0.08);
      const stampDuty = 10;
      const finalPrice = Math.max(120, netPremiumBeforeTax + sst + stampDuty + totalAddons);
      const maxMarketPrice = Math.round(baseGross + totalAddons + sst + stampDuty);
      const totalSavings = maxMarketPrice - finalPrice;

      return {
        insurer: ins,
        baseGross,
        ncdDiscountAmount,
        netPremiumBeforeTax,
        sst,
        stampDuty,
        finalPrice,
        totalSavings,
        monthly3: Math.round(finalPrice / 3),
        monthly6: Math.round(finalPrice / 6),
        monthly12: Math.round(finalPrice / 12),
      };
    })
      .filter((q) => {
        if (filterType === "takaful") return q.insurer.type === "Takaful";
        if (filterType === "conventional") return q.insurer.type === "Conventional";
        return true;
      })
      .sort((a, b) => a.finalPrice - b.finalPrice);
  }, [selectedVehicle, ncdRate, totalAddons, filterType]);

  return (
    <div id="quote-engine" className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Category Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-2 mb-6 scrollbar-none">
        <button
          onClick={() => {
            setActiveTab("car");
            handleSelectSample(SAMPLE_VEHICLES[0]);
          }}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer shadow-xs ${
            activeTab === "car"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-102"
              : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          <Car className="w-4 h-4" />
          <span>{t.tabCar}</span>
          <span className="text-[10px] bg-blue-500/30 text-white font-semibold px-2 py-0.5 rounded-full">
            55% NCD
          </span>
        </button>

        <button
          onClick={() => {
            setActiveTab("motorcycle");
            handleSelectSample(SAMPLE_VEHICLES[3]);
          }}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer shadow-xs ${
            activeTab === "motorcycle"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-102"
              : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          <Bike className="w-4 h-4" />
          <span>{t.tabMotor}</span>
        </button>

        <button
          onClick={() => setActiveTab("travel")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer shadow-xs ${
            activeTab === "travel"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-102"
              : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          <Plane className="w-4 h-4" />
          <span>{t.tabTravel}</span>
          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-full">
            Umrah
          </span>
        </button>

        <button
          onClick={() => setActiveTab("health")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer shadow-xs ${
            activeTab === "health"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-102"
              : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          <HeartPulse className="w-4 h-4" />
          <span>{t.tabHealth}</span>
        </button>

        <button
          onClick={() => setActiveTab("home")}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm transition-all whitespace-nowrap cursor-pointer shadow-xs ${
            activeTab === "home"
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-102"
              : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          <Home className="w-4 h-4" />
          <span>{t.tabHome}</span>
        </button>
      </div>

      {/* Main Interactive Quoting Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Instant Lookup & Configurator Form */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <span>Instant Quote Engine</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Direct ISM API connection • Official Bank Negara rates
              </p>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Live Rates</span>
            </div>
          </div>

          {/* Quick Sample Selector Pills */}
          <div className="mt-4">
            <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center justify-between">
              <span>Quick Test with Real Malaysian Vehicles:</span>
              <span className="text-[11px] text-blue-600 font-semibold cursor-pointer">Click any</span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {SAMPLE_VEHICLES.map((v) => (
                <button
                  key={v.plate}
                  type="button"
                  onClick={() => handleSelectSample(v)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-mono font-medium transition-colors cursor-pointer ${
                    plateInput === v.plate
                      ? "bg-blue-600 text-white font-bold shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/60"
                  }`}
                >
                  {v.plate} ({v.model})
                </button>
              ))}
            </div>
          </div>

          {/* Registration Input */}
          <div className="mt-4 space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.plateLabel}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={plateInput}
                  onChange={(e) => handlePlateChange(e.target.value)}
                  placeholder={t.platePlaceholder}
                  className="w-full pl-3.5 pr-10 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 font-mono font-extrabold text-slate-900 tracking-wider text-base uppercase transition-all"
                />
                <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.nricLabel}
                </label>
                <input
                  type="text"
                  value={nricInput}
                  onChange={(e) => setNricInput(e.target.value)}
                  placeholder={t.nricPlaceholder}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-3 focus:ring-blue-50 font-mono text-xs text-slate-800"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {t.phoneLabel}
                </label>
                <input
                  type="text"
                  defaultValue="012-3456789"
                  placeholder={t.phonePlaceholder}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-3 focus:ring-blue-50 font-mono text-xs text-slate-800"
                />
              </div>
            </div>

            {/* Detected Vehicle Spec Card */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-blue-100 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-[11px] text-blue-700 font-bold uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>ISM Verified Vehicle</span>
                </div>
                <div className="text-sm font-black text-slate-900">
                  {selectedVehicle.make} {selectedVehicle.model} {selectedVehicle.variant}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Year: {selectedVehicle.year} • {selectedVehicle.cc ? `${selectedVehicle.cc} cc` : "Electric EV"} • Sum Insured: RM{" "}
                  {selectedVehicle.marketValue.toLocaleString()}
                </div>
              </div>
            </div>

            {/* NCD (No Claim Discount) Slider / Selector */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>{t.ncdText}:</span>
                </span>
                <span className="text-sm font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  {ncdRate}% Discount
                </span>
              </div>
              <div className="grid grid-cols-6 gap-1.5">
                {[0, 25, 30, 38.33, 45, 55].map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => setNcdRate(rate)}
                    className={`py-1.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      ncdRate === rate
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                        : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    {rate === 38.33 ? "38%" : `${rate}%`}
                  </button>
                ))}
              </div>
            </div>

            {/* Coverage Add-ons */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-700 block">
                Recommended Add-ons & Road Tax:
              </span>

              {/* Roadtax */}
              <label className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer bg-white">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={includeRoadtax}
                    onChange={(e) => setIncludeRoadtax(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      {t.roadtaxInclude}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Direct digital sync to MyJPJ app
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold font-mono text-slate-900">
                  +RM {selectedVehicle.roadTaxAnnual}
                </span>
              </label>

              {/* Windscreen */}
              <label className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer bg-white">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={includeWindscreen}
                    onChange={(e) => setIncludeWindscreen(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      {t.windscreenInclude}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      No NCD deduction on repair
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold font-mono text-slate-900">+RM 165</span>
              </label>

              {/* Special Perils / Flood */}
              <label className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer bg-white">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={includeFlood}
                    onChange={(e) => setIncludeFlood(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      {t.floodInclude}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      100% full water & storm damage
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold font-mono text-slate-900">+RM 120</span>
              </label>
            </div>

            {/* Recalculate CTA */}
            <button
              onClick={handleTriggerCompare}
              disabled={isComparing}
              className="w-full py-3.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer mt-3"
            >
              {isComparing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{t.btnChecking}</span>
                </>
              ) : (
                <>
                  <span>{t.btnCompare}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Live Insurer Comparison Matrix */}
        <div className="lg:col-span-7 space-y-4">
          {/* Header Controls & Filter */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <div>
              <div className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                <span>Available Quotations</span>
                <span className="text-xs font-mono font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  {calculatedQuotes.length} Insurers
                </span>
              </div>
              <div className="text-xs text-slate-500">
                Sorted by best value • Bank Negara Malaysia approved
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setFilterType("all")}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filterType === "all"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All (16)
              </button>
              <button
                onClick={() => setFilterType("takaful")}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filterType === "takaful"
                    ? "bg-emerald-700 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Takaful (Islamic)
              </button>
              <button
                onClick={() => setFilterType("conventional")}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  filterType === "conventional"
                    ? "bg-blue-700 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Conventional
              </button>
            </div>
          </div>

          {/* Insurer Quote Cards Stream */}
          {isComparing ? (
            <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center space-y-4 shadow-sm">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
              <div>
                <h3 className="text-base font-extrabold text-slate-900">
                  Retrieving Real-Time Quotations...
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Cross-referencing ISM NCD records for plate {plateInput} across Zurich,
                  Allianz, Etiqa, Tokio Marine, and 12 other panel insurers.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {calculatedQuotes.map((q) => (
                <div
                  key={q.insurer.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Insurer Info */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900 text-base tracking-tight">
                          {q.insurer.name}
                        </span>
                        {q.insurer.type === "Takaful" && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full border border-emerald-200">
                            Islamic Takaful
                          </span>
                        )}
                        {q.insurer.badge && (
                          <span className="text-[10px] bg-blue-100 text-blue-800 font-extrabold px-2 py-0.5 rounded-full">
                            {q.insurer.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 font-medium">
                        {q.insurer.highlight}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 pt-1">
                        <span className="flex items-center gap-1 font-semibold text-slate-700">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          {q.insurer.claimSpeed}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-semibold text-slate-700">
                          <Shield className="w-3.5 h-3.5 text-emerald-600" />
                          Free {q.insurer.freeTowingKm}km Towing
                        </span>
                        <span>•</span>
                        <span className="text-amber-600 font-bold">
                          ★ {q.insurer.rating} ({q.insurer.reviewsCount.toLocaleString()} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1">
                      <div>
                        <div className="text-[11px] text-slate-400 line-through font-mono">
                          RM {(q.finalPrice + q.totalSavings).toLocaleString()}
                        </div>
                        <div className="text-2xl font-black text-blue-600 tracking-tight font-mono">
                          RM {q.finalPrice.toLocaleString()}
                        </div>
                        <div className="text-[11px] font-bold text-emerald-600 flex items-center justify-end gap-1">
                          <TrendingDown className="w-3 h-3" />
                          <span>Save RM {q.totalSavings.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="mt-2 text-right">
                        <button
                          onClick={() =>
                            onSelectQuote({
                              insurer: q.insurer,
                              vehicle: selectedVehicle,
                              ncd: ncdRate,
                              finalPrice: q.finalPrice,
                              savings: q.totalSavings,
                              addons: {
                                roadtax: includeRoadtax,
                                windscreen: includeWindscreen,
                                flood: includeFlood,
                                allDrivers: includeAllDrivers,
                              },
                            })
                          }
                          className="px-4 py-2 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                        >
                          <span>Renew Online</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <div className="text-[10px] text-slate-500 font-medium mt-1">
                          Or <strong className="text-slate-800">RM {q.monthly3}/mo</strong> (0% installment)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
