'use client'; 

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
      
      if (L && mapContainerRef.current && !(mapContainerRef.current as any)._leaflet_id) {
        // Inisialisasi Peta (Zoom level diubah ke 7 agar langsung fokus ke Riau/Sumatera)
        const map = L.map(mapContainerRef.current).setView([0.5071, 101.4478], 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Data Proyek 
        const projects = [
          { lat: 0.5071, lng: 101.4478, title: 'Survey Perairan & Sedimentasi', year: '2024', loc: 'Pekanbaru, Riau', type: 'Bathymetri' },
          { lat: 1.6675, lng: 101.4452, title: 'Pengukuran Lahan dan Batas', year: '2023', loc: 'Dumai, Riau', type: 'Survey Lahan' },
          { lat: -0.9500, lng: 100.3531, title: 'Pemetaan Kawasan Infrastruktur', year: '2024', loc: 'Sumatera Barat', type: 'Topografi & GIS' },
          { lat: 0.3333, lng: 101.0000, title: 'Survey Topografi Area Tambang', year: '2025', loc: 'Kampar, Riau', type: 'Drone Mapping' }
        ];

        // Menambahkan Pin ke Peta
        projects.forEach(p => {
          const popupContent = `
            <div style="font-family: sans-serif; min-width: 200px; padding: 5px;">
              <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold; color: #1e40af;">${p.title}</h3>
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #475569;"><b>Lokasi:</b> ${p.loc}</p>
              <p style="margin: 0 0 4px 0; font-size: 12px; color: #475569;"><b>Layanan:</b> ${p.type}</p>
              <p style="margin: 0; font-size: 12px; color: #475569;"><b>Tahun:</b> ${p.year}</p>
            </div>
          `;
          L.marker([p.lat, p.lng]).bindPopup(popupContent).addTo(map);
        });

        // Memaksa kalkulasi ulang layar
        setTimeout(() => {
          map.invalidateSize();
        }, 500);
      }
    };
    
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    // Padding atas disesuaikan agar tidak menabrak Header (pt-24 = 96px)
    <div className="pt-24 pb-6 px-4 md:px-8 flex flex-col items-center justify-center w-full">
      
      {/* Judul dibuat lebih ringkas agar menghemat ruang vertikal */}
      <div className="text-center max-w-4xl mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Peta Sebaran Proyek</h1>
        <p className="text-slate-600 text-sm md:text-base">
          Jelajahi lokasi survei <b>PT. Titian Inti Survei</b>. Klik pin lokasi untuk melihat detail.
        </p>
      </div>

      <div className="w-full max-w-6xl bg-white p-2 rounded-xl shadow-md border border-slate-200">
        <div 
          ref={mapContainerRef} 
          // Tinggi dinamis: 100% tinggi layar dikurangi 320px (untuk Header, Teks, dan Footer)
          style={{ height: 'calc(100vh - 320px)', minHeight: '400px', width: '100%', zIndex: 1 }}
          className="rounded-lg relative bg-slate-100 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 -z-10">
            Memuat peta interaktif...
          </div>
        </div>
      </div>

    </div>
  );
}
