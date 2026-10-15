import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Sparkles,
  Clock,
  Car
} from 'lucide-react';
import vanImg from '../assets/images/mobile_service_van_1791783617819.jpg';

interface ServicesSectionProps {
  onSelectDamage: (damageType: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectDamage }) => {
  return (
    <section id="services-section" className="py-14 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-orange-600" />
              <span>Transparent Rates · Mobile Driveway Service</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Specialized Rock Chip & Crack Repair Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We specialize strictly in mobile windshield repair—preserving your vehicle’s factory seal and saving you hundreds. All services are eligible for 100% $0 deductible insurance coverage.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Lifetime No-Spread Guarantee</span>
            </div>
          </div>
        </div>

        {/* 4 Core Chip Repair Services Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                Specialized Repair Services
              </h3>
              <p className="text-xs text-slate-500">
                Every repair includes our Lifetime No-Spread Guarantee and drive-away readiness in 25 minutes.
              </p>
            </div>
            <span className="text-xs font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200 shrink-0">
              $0 Insurance Deductible Eligible
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service 1: Bullseye Chip */}
            <div className="p-6 bg-slate-50 hover:bg-white border border-slate-200 hover:border-orange-400 rounded-2xl flex flex-col justify-between space-y-5 transition-all shadow-2xs hover:shadow-md group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-700">01. Service</span>
                  <span className="text-xs font-extrabold text-slate-900 tabular-nums">$79 / $0 Ins.</span>
                </div>
                <h4 className="text-base font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  Bullseye Rock Chip
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Smooth circular impact caused by highway gravel. We draw a 28 in-Hg vacuum to extract trapped air, then inject crystal-clear optical resin.
                </p>
                <div className="text-[11px] text-slate-500 font-medium">Duration: ~20 mins · 98%+ optical restoration</div>
              </div>
              <button
                onClick={() => onSelectDamage('rock_chip_bullseye')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-black uppercase tracking-wider text-orange-700 bg-orange-100/70 hover:bg-orange-600 hover:text-white rounded-xl transition-all cursor-pointer"
              >
                <span>Book Bullseye Fix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 2: Starburst Fracture */}
            <div className="p-6 bg-slate-50 hover:bg-white border border-slate-200 hover:border-orange-400 rounded-2xl flex flex-col justify-between space-y-5 transition-all shadow-2xs hover:shadow-md group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-700">02. Service</span>
                  <span className="text-xs font-extrabold text-slate-900 tabular-nums">$89 / $0 Ins.</span>
                </div>
                <h4 className="text-base font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  Starburst Fracture
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Impact point with micro-cracks radiating outwards. Hydraulic pressure forces resin into every microscopic leg, halting spreading permanently.
                </p>
                <div className="text-[11px] text-slate-500 font-medium">Duration: ~25 mins · Halts running cracks</div>
              </div>
              <button
                onClick={() => onSelectDamage('rock_chip_starburst')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-black uppercase tracking-wider text-orange-700 bg-orange-100/70 hover:bg-orange-600 hover:text-white rounded-xl transition-all cursor-pointer"
              >
                <span>Book Starburst Fix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 3: Short Crack Fix */}
            <div className="p-6 bg-slate-50 hover:bg-white border border-slate-200 hover:border-orange-400 rounded-2xl flex flex-col justify-between space-y-5 transition-all shadow-2xs hover:shadow-md group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-700">03. Service</span>
                  <span className="text-xs font-extrabold text-slate-900 tabular-nums">$99 / $0 Ins.</span>
                </div>
                <h4 className="text-base font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  Short Crack Stabilization
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Single linear cracks under 6 inches. We relieve structural stress at the terminal tip with a micro-drill pit, then infuse high-tensile glass resin.
                </p>
                <div className="text-[11px] text-slate-500 font-medium">Duration: ~30 mins · Prevents total windshield loss</div>
              </div>
              <button
                onClick={() => onSelectDamage('crack_small')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-black uppercase tracking-wider text-orange-700 bg-orange-100/70 hover:bg-orange-600 hover:text-white rounded-xl transition-all cursor-pointer"
              >
                <span>Book Crack Fix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 4: Multi-Chip Combo */}
            <div className="p-6 bg-slate-50 hover:bg-white border border-slate-200 hover:border-orange-400 rounded-2xl flex flex-col justify-between space-y-5 transition-all shadow-2xs hover:shadow-md group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-700">04. Service</span>
                  <span className="text-xs font-extrabold text-slate-900 tabular-nums">+$30 2nd chip</span>
                </div>
                <h4 className="text-base font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  Multi-Chip Combo
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hit by a gravel barrage? Fix your primary rock chip, and each additional chip on the same windshield is repaired for only $30 extra.
                </p>
                <div className="text-[11px] text-slate-500 font-medium">Duration: ~35 mins · Family & Fleet friendly</div>
              </div>
              <button
                onClick={() => onSelectDamage('multiple_chips')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-black uppercase tracking-wider text-orange-700 bg-orange-100/70 hover:bg-orange-600 hover:text-white rounded-xl transition-all cursor-pointer"
              >
                <span>Book Multi-Chip Fix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Van Driveway Dispatch Spotlight */}
        <div className="p-8 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
              <Zap className="w-3.5 h-3.5" />
              <span>The Chip Zorro Mobile Advantage</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              We Come Right to Your Driveway or Workplace
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              No taking time off work, fighting traffic, or waiting in an uncomfortable auto shop lobby. Our fully equipped mobile vans arrive with professional vacuum injector rigs and UV curing systems. Zero travel fee!
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-300 pt-1">
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="w-4 h-4" /> Free Mobile Dispatch
              </span>
              <span className="flex items-center gap-1 text-orange-400">
                <Check className="w-4 h-4" /> 25-Minute Repair
              </span>
              <span className="flex items-center gap-1 text-sky-400">
                <Check className="w-4 h-4" /> Lifetime Warranty
              </span>
            </div>
          </div>

          <div className="w-full md:w-80 rounded-2xl overflow-hidden border border-slate-700 shadow-xl shrink-0 aspect-[4/3] relative">
            <img
              src={vanImg}
              alt="Chip Zorro Mobile Repair Van outside home"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-bold text-white tracking-wide">
                Mobile Van #4 · On Active Duty
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
