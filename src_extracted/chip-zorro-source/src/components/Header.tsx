import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Zap, Phone } from 'lucide-react';
import logoImg from '../assets/images/chip_zorro_logo.png';
import { SiteSettings } from '../types';

interface HeaderProps {
  activeTab: 'home' | 'booking' | 'dispatch' | 'reviews' | 'claims' | 'admin';
  setActiveTab: (tab: 'home' | 'booking' | 'dispatch' | 'reviews' | 'claims' | 'admin') => void;
  onOpenBooking: () => void;
  bookingCount: number;
  siteSettings?: SiteSettings;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
  siteSettings,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneDisplay = siteSettings?.phoneDisplay || '(800) 555-2447';
  const phoneRaw = siteSettings?.phone || '8005552447';
  const etaText = siteSettings?.dispatchEtaMinutes || '35–45 Min';
  const showAnnouncement = siteSettings ? siteSettings.announcementActive : true;

  return (
    <header className="sticky top-0 z-50 w-full max-w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg overflow-x-hidden">
      {/* Top Notification Announcement Bar */}
      {showAnnouncement && (
        <div className="w-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white text-[11px] font-bold py-1 px-2.5 sm:px-4 tracking-wide overflow-hidden">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between sm:justify-center gap-1.5 sm:gap-3 text-[10px] sm:text-[11px] min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 min-w-0 shrink">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse shrink-0" />
              <span className="font-extrabold truncate">Mobile Service Active</span>
              <span className="hidden sm:inline text-orange-200">·</span>
              <span className="hidden md:inline whitespace-nowrap">Current Dispatch: {etaText}</span>
              <span className="hidden md:inline text-orange-200">·</span>
              <span className="hidden xs:inline truncate text-orange-100">$0 Insurance Deductible</span>
            </div>
            <a
              href={`tel:${phoneRaw.replace(/\D/g, '')}`}
              className="flex items-center gap-1 text-white hover:text-orange-100 font-extrabold shrink-0 whitespace-nowrap text-[10px] sm:text-xs bg-black/20 sm:bg-transparent px-1.5 py-0.5 rounded sm:p-0"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
              <span>{phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2 sm:gap-6 px-2.5 sm:px-6 py-2 sm:py-2.5 min-w-0">
        {/* Zone 1: Authentic Uploaded Logo & Wordmark (Exactly As Is) */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 sm:gap-3 text-left shrink hover:opacity-95 transition-opacity cursor-pointer group min-w-0 bg-transparent border-0 p-0 shadow-none outline-none"
          aria-label="Chip Zorro Home"
        >
          <div className="bg-white rounded-xl p-1 sm:p-1.5 shadow-md flex items-center justify-center shrink-0 border border-slate-700/60 group-hover:border-orange-500/80 transition-colors">
            <img
              src={logoImg}
              alt="Chip Zorro Windshield Chip Repair"
              referrerPolicy="no-referrer"
              className="h-10 xs:h-11 sm:h-12 md:h-14 w-auto object-contain block"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight min-w-0 overflow-hidden">
            <span className="text-white font-black tracking-tight text-base sm:text-lg md:text-xl truncate">
              Chip <span className="text-orange-500">Zorro</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-slate-400 uppercase truncate">
              Mobile Windshield Repair
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Strictly No Duplicated "Online Booking" Link) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-300">
          <button
            onClick={() => {
              setActiveTab('home');
              const el = document.getElementById('services-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors whitespace-nowrap cursor-pointer hover:text-white ${
              activeTab === 'home' ? 'text-orange-400 font-extrabold' : 'text-slate-300'
            }`}
          >
            Services & Rates
          </button>
          <button
            onClick={() => {
              setActiveTab('home');
              const el = document.getElementById('how-it-works-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="transition-colors whitespace-nowrap cursor-pointer hover:text-white text-slate-300"
          >
            How It Works & Care Guide
          </button>
          <button
            onClick={() => setActiveTab('dispatch')}
            className={`transition-colors whitespace-nowrap cursor-pointer hover:text-white ${
              activeTab === 'dispatch' ? 'text-orange-400 font-extrabold' : 'text-slate-300'
            }`}
          >
            Track Mobile Tech
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`transition-colors whitespace-nowrap cursor-pointer hover:text-white ${
              activeTab === 'reviews' ? 'text-orange-400 font-extrabold' : 'text-slate-300'
            }`}
          >
            Customer Reviews
          </button>
          <button
            onClick={() => {
              setActiveTab('home');
              const el = document.getElementById('insurance-billing-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="transition-colors whitespace-nowrap cursor-pointer hover:text-white text-emerald-400 flex items-center gap-1 font-bold"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>$0 Insurance Claims</span>
          </button>

        </nav>

        {/* Zone 3: Primary Action & Quick Admin & Mobile Menu */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">


          <button
            onClick={onOpenBooking}
            className="px-2.5 xs:px-3 sm:px-5 py-1.5 xs:py-2 sm:py-2.5 text-[10px] xs:text-[11px] sm:text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 active:scale-95 rounded-lg xs:rounded-xl shadow-md hover:shadow-orange-500/20 transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1 sm:gap-2 border border-orange-500/30"
          >
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 animate-pulse shrink-0" />
            <span>Book <span className="hidden xs:inline">Chip </span>Repair</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 xs:w-10 xs:h-10 flex items-center justify-center rounded-lg xs:rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-6 py-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3 text-sm font-semibold">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
                const el = document.getElementById('services-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-left text-slate-300 hover:text-white py-1"
            >
              Services & Rates
            </button>
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
                const el = document.getElementById('how-it-works-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-left text-slate-300 hover:text-white py-1 flex items-center gap-1.5"
            >
              <span>How It Works & Care Guide</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('dispatch');
                setMobileMenuOpen(false);
              }}
              className="text-left text-slate-300 hover:text-white py-1"
            >
              Track Mobile Tech
            </button>
            <button
              onClick={() => {
                setActiveTab('reviews');
                setMobileMenuOpen(false);
              }}
              className="text-left text-slate-300 hover:text-white py-1"
            >
              Customer Reviews
            </button>
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
                const el = document.getElementById('insurance-billing-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-left text-emerald-400 font-bold py-1 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>$0 Insurance Claims (Direct Clearinghouse API)</span>
            </button>

          </div>

          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl shadow-md"
            >
              Book Chip Repair
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
