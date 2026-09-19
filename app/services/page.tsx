'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  // State untuk mengatur bahasa aktif (default: 'en' untuk target luar negeri)
  const [lang, setLang] = useState<'id' | 'en'>('en');

  // Konten Dwibahasa dengan Bahasa Pemasaran Tingkat Lanjut
  const content = {
    id: {
      backBtn: "← Kembali ke Beranda",
      title: "Layanan Kami",
      subtitle: "Solusi Data Spasial Presisi Tinggi untuk Membangun Masa Depan.",
      desc: "Kami menggabungkan teknologi mutakhir dan keahlian rekayasa untuk memberikan data yang akurat, cepat, dan dapat diandalkan untuk setiap fase proyek Anda.",
      services: [
        {
          id: "01",
          title: "Pemetaan Topografi Total Station",
          desc: "Pemetaan topografi presisi tinggi menggunakan teknologi Total Station mutakhir untuk rekayasa detail, tata letak konstruksi, dan survei kadastral. Kami memastikan akurasi tingkat milimeter untuk proyek infrastruktur kritis Anda."
        },
        {
          id: "02",
          title: "Pengukuran RTK Geodetik",
          desc: "Survei GNSS Real-Time Kinematic (RTK) untuk penetapan titik kontrol dan pemetaan batas yang sangat cepat dan akurat. Ideal untuk pengembangan lahan skala besar, pertambangan, dan perkebunan yang membutuhkan presisi tingkat sentimeter."
        },
        {
          id: "03",
          title: "Survei Batimetri (Pemetaan Bawah Air)",
          desc: "Survei topografi bawah air yang komprehensif untuk pelabuhan, sungai, dan waduk. Menggunakan echosounder single dan multibeam untuk menghasilkan peta navigasi yang aman, perhitungan pengerukan, dan pemrofilan bawah permukaan yang detail."
        },
        {
          id: "04",
          title: "Pembangunan Aplikasi GIS",
          desc: "Pengembangan aplikasi Sistem Informasi Geografis (GIS) kustom yang disesuaikan dengan kebutuhan alur kerja perusahaan Anda. Ubah data spasial mentah menjadi dasbor interaktif berbasis web untuk manajemen aset dan pengambilan keputusan cerdas."
        }
      ]
    },
    en: {
      backBtn: "← Back to Home",
      title: "Our Services",
      subtitle: "High-Precision Spatial Data Solutions to Build the Future.",
      desc: "We combine cutting-edge technology and engineering expertise to deliver accurate, rapid, and reliable data for every phase of your project.",
      services: [
        {
          id: "01",
          title: "Total Station Topographic Mapping",
          desc: "High-precision topographic mapping utilizing advanced Total Station technology for detailed engineering, construction layouts, and cadastral surveys. We guarantee millimeter-level accuracy for your critical infrastructure operations."
        },
        {
          id: "02",
          title: "RTK Geodetic Surveying",
          desc: "Real-Time Kinematic (RTK) GNSS surveying for rapid, highly accurate control point establishment and boundary mapping. Engineered for large-scale land development, mining, and plantation sectors requiring centimeter-level precision."
        },
        {
          id: "03",
          title: "Bathymetry Survey (Underwater Mapping)",
          desc: "Comprehensive underwater topographic surveying for ports, rivers, and reservoirs. Utilizing single and multibeam echosounders to deliver safe navigation charting, precise dredging calculations, and robust sub-surface profiling."
        },
        {
          id: "04",
          title: "GIS Application Development",
          desc: "Custom Geographic Information System (GIS) application development tailored to your enterprise workflow. Transform raw spatial data into interactive, web-based dashboards for powerful asset management and data-driven decision-making."
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 relative">
      
      {/* Tombol Kembali (Back to Home) - Muncul di setiap halaman */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200"
        >
          {currentContent.backBtn}
        </Link>
      </div>

      {/* Header Halaman & Toggle Bahasa */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="bg-slate-200 p-1 rounded-full inline-flex">
            <button 
              onClick={() => setLang('id')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${lang === 'id' ? 'bg-white shadow-md text-blue-700' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Indonesia
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${lang === 'en' ? 'bg-[#0b132b] shadow-md text-white' : 'text-slate-500 hover:text-slate-700'}`}
            >
              English
            </button>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b132b] mb-6 tracking-tight">
          {currentContent.title}
        </h1>
        <p className="text-xl font-medium text-slate-800 max-w-3xl mx-auto mb-4">
          {currentContent.subtitle}
        </p>
        <p className="text-slate-600 max-w-2xl mx-auto">
          {currentContent.desc}
        </p>
      </div>

      {/* Grid Layanan */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentContent.services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors mb-4">
                {service.id}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
