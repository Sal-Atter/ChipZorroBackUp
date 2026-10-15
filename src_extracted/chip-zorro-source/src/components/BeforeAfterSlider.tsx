import React, { useState } from 'react';
import { Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl text-white space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-xs font-black text-orange-400 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>Interactive Glass Clarity Simulator</span>
        </div>
        <span className="text-[11px] text-slate-400 font-mono bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
          ◀ Drag slider to compare ▶
        </span>
      </div>

      {/* Slider Viewport */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none border border-slate-700 bg-slate-950 shadow-inner">
        {/* Layer 1: AFTER CHIP ZORRO REPAIR (Clean crystal view through windshield) */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/30 via-slate-900 to-slate-950 flex flex-col justify-between p-4 sm:p-6">
          {/* Realistic windshield scenery behind clear glass */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/20 via-transparent to-transparent pointer-events-none" />
          
          {/* Subtle wiper arch sweep marking */}
          <div className="absolute inset-x-8 top-4 bottom-4 rounded-t-full border-t border-sky-400/20 pointer-events-none" />

          {/* Micro restored point (99% invisible optical blemish) */}
          <div className="absolute inset-0 m-auto w-5 h-5 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white/20 blur-[0.5px] border border-white/30" />
            <div className="absolute -top-6 whitespace-nowrap text-[10px] font-mono text-emerald-400 bg-slate-900/90 px-2 py-0.5 rounded-md border border-emerald-500/40 shadow-md">
              ✓ Optical Polymer: 99% Refractive Match
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-900/80 px-2 py-1 rounded-md border border-slate-800">
              AFTER (25 MIN CURE)
            </span>
          </div>

          <div className="relative z-10 self-end bg-emerald-500/95 text-slate-950 text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-950 shrink-0" />
            <span>99% OPTICAL CLARITY · LIFETIME GUARANTEE</span>
          </div>
        </div>

        {/* Layer 2: BEFORE REPAIR (Damaged rock chip fracture) - Clipped to slider position */}
        <div
          className="absolute inset-0 bg-slate-950 flex flex-col justify-between p-4 sm:p-6"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          {/* Fracture graphic with realistic impact core and stress legs */}
          <div className="absolute inset-0 m-auto w-24 h-24 flex items-center justify-center pointer-events-none">
            {/* White crushed impact pit */}
            <div className="w-7 h-7 rounded-full bg-white/90 border-2 border-slate-950 shadow-xl shadow-rose-950/80 z-10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-400" />
            </div>
            {/* Concentric conic bullseye fracture */}
            <div className="absolute w-14 h-14 rounded-full border-2 border-slate-300/80 bg-slate-800/40" />
            <div className="absolute w-20 h-20 rounded-full border border-slate-400/50" />
            {/* Radiating sharp stress cracks */}
            <div className="absolute w-20 h-0.5 bg-white/95 rotate-45 shadow-sm" />
            <div className="absolute w-22 h-0.5 bg-white/90 -rotate-30 shadow-sm" />
            <div className="absolute w-16 h-0.5 bg-white/80 rotate-80 shadow-sm" />
            <div className="absolute w-18 h-0.5 bg-white/85 -rotate-75 shadow-sm" />
            <div className="absolute -top-7 whitespace-nowrap text-[10px] font-mono text-rose-400 bg-slate-900/95 px-2 py-0.5 rounded-md border border-rose-500/50 shadow-md">
              ⚠ Air-filled fracture spreading under stress
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold text-rose-300 bg-rose-950/80 px-2 py-1 rounded-md border border-rose-800">
              BEFORE (RAW BREAK)
            </span>
          </div>

          <div className="relative z-10 self-start bg-rose-600/95 text-white text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-lg shadow-lg">
            UNREPAIRED: HIGH RISK OF SPREADING
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute inset-y-0 w-1 bg-gradient-to-b from-orange-400 via-white to-orange-400 cursor-ew-resize z-20 flex items-center justify-center pointer-events-none shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="w-8 h-8 -ml-3.5 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-xl border-2 border-white flex items-center justify-center text-xs font-black">
            ↔
          </div>
        </div>

        {/* Range Input for dragging with mobile touch support */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full touch-none"
          aria-label="Drag before and after clarity comparison slider"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-[11px] sm:text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Factory Seal Kept</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
          <span>No ADAS Recalibration</span>
        </div>
        <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1 text-emerald-300 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>$0 Insurance Deductible</span>
        </div>
      </div>
    </div>
  );
};
