'use client';

import { useState } from 'react';
import Link from "next/link";

export default function Home() {
  // State untuk mengatur bahasa di halaman beranda
  const [lang, setLang] = useState<'id' | 'en'>('id');

  // Konten Dwibahasa untuk Beranda
  const content = {
    id: {
      heroTitle: "Pemetaan Presisi untuk Keputusan Cepat",
      heroDesc: "Lihat dan ukur lokasi proyek Anda dari berbagai sudut. Kami menghadirkan data lapangan yang presisi melalui teknologi drone, Lidar, dan GIS tingkat lanjut.",
      btnService: "Jelajahi Layanan",
      btnMap: "Lihat Peta Interaktif",
      aboutTitle: "Mitra Survey Terpercaya Anda",
      aboutDesc: "PT. TITIAN INTI SURVEI hadir untuk mendukung kebutuhan proyek infrastruktur, pertambangan, dan konstruksi dengan pendekatan profesional, metode kerja terukur, dan hasil data yang siap digunakan.",
      feat1Title: "Akurat",
      feat1Desc: "Data terukur dengan kalibrasi standar tinggi untuk perencanaan proyek.",
      feat2Title: "Teknologi Modern",
      feat2Desc: "Penggunaan UAV Drone, Bathymetri, dan Lidar untuk area yang kompleks.",
      feat3Title: "Profesional",
      feat3Desc: "Tim lapangan yang responsif, berdedikasi, dan mengutamakan Keselamatan & Kesehatan Kerja (K3)."
    },
    en: {
      heroTitle: "Precision Mapping for Rapid Decisions",
      heroDesc: "Visualize and measure your project site from every angle. We deliver precise field data through advanced drone, Lidar, and GIS technology.",
      btnService: "Explore Services",
      btnMap: "View Interactive Map",
      aboutTitle: "Your Trusted Surveying Partner",
      aboutDesc: "PT. TITIAN INTI SURVEI is here to support infrastructure, mining, and construction projects with a professional approach, measurable workflows, and ready-to-use data.",
      feat1Title: "Accurate",
      feat1Desc: "Measured data with high-standard calibration for critical project planning.",
      feat2Title: "Modern Technology",
      feat2Desc: "Utilization of UAV Drones, Bathymetry, and Lidar mapping for complex terrain.",
      feat3Title: "Professional",
      feat3Desc: "A responsive, dedicated field team that strictly prioritizes HSE (Health, Safety, and Environment)."
    }
  };

  const t = content[lang];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-start overflow-hidden">
        
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* POSISI BARU: Tombol Pemilih Bahasa ditarik ke pojok kanan atas (di atas tombol Hubungi Kami) */}
        <div className="absolute top-4 right-4 md:right-8 z-50 flex gap-1.5 bg-black/30 p-1 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
          <button 
            onClick={() => setLang('id')} 
            className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${lang === 'id' ? 'bg-white text-slate-900 shadow-sm' : 'bg-transparent text-white hover:bg-white/20'}`}
          >
            ID
          </button>
          <button 
            onClick={() => setLang('en')} 
            className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'bg-transparent text-white hover:bg-white/20'}`}
          >
            EN
          </button>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg transition-all">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 drop-shadow-md leading-relaxed max-w-2xl font-medium transition-all">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-center hover:bg-gray-100 transition-colors shadow-xl">
                {t.btnService}
              </Link>
              <Link href="/portfolio" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-center hover:bg-white/20 transition-colors shadow-xl">
                {t.btnMap}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TENTANG KAMI */}
      <section id="about" className="py-24 bg-white transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.aboutTitle}</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
            {t.aboutDesc}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t.feat1Title}</h3>
              <p className="text-slate-600">{t.feat1Desc}</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t.feat2Title}</h3>
              <p className="text-slate-600">{t.feat2Desc}</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t.feat3Title}</h3>
              <p className="text-slate-600">{t.feat3Desc}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
