'use client'; // Wajib karena menggunakan state interaktif

import { useState } from 'react';

export default function PortfolioPage() {
  // State untuk melacak posisi slider (0 hingga 100 persen)
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16 px-4 flex flex-col items-center">
      
      {/* Bagian Header Halaman */}
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Portofolio Pemetaan Interaktif</h1>
        <p className="text-slate-600">
          Geser garis di bawah ini untuk melihat perbandingan antara kondisi lapangan asli (Before) 
          dengan hasil pemetaan topografi dari tim PT. Titian Inti Survei (After).
        </p>
      </div>

      {/* Kontainer Utama Slider */}
      <div className="relative w-full max-w-4xl aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
        
        {/* Gambar 1: AFTER (Misal: Hasil Peta Topografi / Kontur) */}
        {/* Sebagai contoh, kita pakai gambar peta dari internet. Nanti ganti dengan URL gambar Anda */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
            alt="Peta Topografi (Sesudah)" 
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 text-sm rounded backdrop-blur-sm">
            Hasil Peta Kontur
          </div>
        </div>

        {/* Gambar 2: BEFORE (Misal: Foto Udara Drone Asli) */}
        {/* Gambar ini dipotong (clip-path) sesuai dengan posisi slider */}
        <div 
          className="absolute inset-0"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1464638681273-0962e9b53566?q=80&w=1200&auto=format&fit=crop" 
            alt="Foto Udara Asli (Sebelum)" 
            className="w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute bottom-4 left-4 bg-blue-600/80 text-white px-3 py-1 text-sm rounded backdrop-blur-sm">
            Foto Udara Asli
          </div>
        </div>

        {/* Garis Pemisah (Slider Line) */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        >
          {/* Ikon Pegangan (Handle) di tengah garis */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-500">
            {/* SVG Icon Panah Kiri Kanan */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180 absolute">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
        </div>

        {/* Input Range Tak Terlihat (Fungsi Inti Interaktif) */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
          aria-label="Geser untuk membandingkan gambar"
        />
      </div>

    </div>
  );
}
