'use client'; // Wajib karena memuat peta interaktif di sisi browser

import { useEffect, useRef } from 'react';

export default function PortfolioMapPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Memuat file CSS Peta
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // 2. Memuat file JavaScript Peta
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    
    script.onload = () => {
      const L = (window as any).L;
      // Memastikan peta hanya dimuat satu kali
      if (L && mapContainerRef.current && !(mapContainerRef.current as any)._leaflet_id) {
        
        // Inisialisasi Peta (Titik tengah diatur ke wilayah Riau/Sumatera)
        const map = L.map(mapContainerRef.current).setView([0.5071, 101.4478], 6);

        // Mengambil tampilan peta jalan (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Data Proyek PT. Titian Inti Survei
        const projects = [
          { lat: 0.5071, lng: 101.4478, title: 'Survey Perairan & Sedimentasi', year: '2024', loc: 'Pekanbaru, Riau', type: 'Bathymetri' },
          { lat: 1.6675, lng: 101.4452, title: 'Pengukuran Lahan dan Batas', year: '2023', loc: 'Dumai, Riau', type: 'Survey Lahan' },
          { lat: -0.9500, lng: 100.3531, title: 'Pemetaan Kawasan Infrastruktur', year: '2024', loc: 'Sumatera Barat', type: 'Topografi & GIS' },
          { lat: 0.3333, lng: 101.0000, title: 'Survey Topografi Area Tambang', year: '2025', loc: 'Kampar, Riau', type: 'Drone Mapping' }
        ];

        // Menambahkan Pin/Marker ke dalam Peta
        projects.forEach(p => {
          const popupContent = `
            <div style="font-family: sans-serif; min-width: 200px; padding: 5px;">
              <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold; color: #1e40af;">${p.title}</h3>
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #475569;"><b>Lokasi:</b> ${p.loc}</p>
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #475569;"><b>Layanan:</b> ${p.type}</p>
              <p style="margin: 0; font-size: 12px; color: #475569;"><b>Tahun:</b> ${p.year}</p>
            </div>
          `;
          L.marker([p.lat, p.lng])
            .bindPopup(popupContent)
            .addTo(map);
        });
      }
    };
    
    document.body.appendChild(script);

    return () => {
      // Membersihkan memori browser saat pengguna pindah halaman
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-16 px-4 flex flex-col items-center">
      <div className="text-center max-w-3xl mb-8 mt-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Peta Sebaran Proyek</h1>
        <p className="text-slate-600">
          Jelajahi lokasi berbagai proyek survei dan pemetaan yang telah diselesaikan oleh tim <b>PT. Titian Inti Survei</b>. Klik pada pin lokasi di peta untuk melihat detail pekerjaan.
        </p>
      </div>

      <div className="w-full max-w-5xl bg-white p-4 rounded-xl shadow-lg border border-slate-200">
        {/* Tempat Peta akan dirender */}
        <div 
          ref={mapContainerRef} 
          className="w-full h-[550px] rounded-lg relative"
          style={{ zIndex: 10 }}
        >
          {/* Teks sementara sebelum peta termuat */}
          <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400 rounded-lg -z-10">
            Memuat peta interaktif...
          </div>
        </div>
      </div>
    </div>
  );
}
