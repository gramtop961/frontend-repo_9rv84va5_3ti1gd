import React from 'react';
import { User, Image, CalendarDays, BadgeCheck, Phone } from 'lucide-react';

export default function PremiumNavbar({ onOpenLogin }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-blue-100/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white font-bold shadow-lg shadow-blue-500/30">K</div>
          <div className="leading-tight">
            <div className="text-base md:text-lg font-extrabold text-blue-900">Kos Nyaman Biru</div>
            <div className="text-xs text-blue-900/70">Premium Boarding House</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-900/80">
          <a href="#galeri" className="hover:text-blue-700 flex items-center gap-2"><Image size={16}/>Galeri</a>
          <a href="#fasilitas" className="hover:text-blue-700 flex items-center gap-2"><BadgeCheck size={16}/>Fasilitas & Harga</a>
          <a href="#ketersediaan" className="hover:text-blue-700 flex items-center gap-2"><CalendarDays size={16}/>Ketersediaan</a>
          <a href="#kontak" className="hover:text-blue-700 flex items-center gap-2"><Phone size={16}/>Kontak</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onOpenLogin} className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 text-blue-800 hover:bg-blue-50 transition-colors">
            <User size={18}/> Masuk
          </button>
          <a href="#ketersediaan" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow shadow-blue-600/30 hover:bg-blue-700">Pesan</a>
        </div>
      </div>
    </header>
  );
}
