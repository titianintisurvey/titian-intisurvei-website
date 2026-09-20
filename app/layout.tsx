import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { company } from "./data";

export const metadata: Metadata = {
  title: `${company.name} | Survey dan Pemetaan`,
  description: "Perusahaan jasa survey, pemetaan, bathymetri, drone mapping, GIS, serta lidar dan scan 3D arsitektur di Pekanbaru.",
  verification: {
    google: "UIwnMVDRDYibT5ZBtOsIvOJ-n6SOokubGUUfcBC589Q",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-slate-50">
        
        {/* Top Banner */}
        <div className="bg-[#0b132b] text-white text-sm py-2 px-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 z-50 relative shadow-md">
          <span className="font-bold text-blue-400">INFO TERBARU &rarr;</span>
          <span className="text-center">Layanan Pemetaan Lidar dan 3D Presisi Tinggi kini tersedia untuk proyek Anda.</span>
          <Link href="/services" className="border border-white/40 hover:bg-white/20 px-4 py-1 rounded-full transition-colors text-xs font-semibold">
            Pelajari Lebih Lanjut
          </Link>
        </div>

        {/* Navbar Melayang dengan Gradasi */}
        <header className="absolute w-full z-40 text-white mt-10 bg-gradient-to-b from-[#0b132b]/95 via-[#0b132b]/60 to-transparent pt-2 pb-8 border-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex justify-between items-center py-3">
              
              {/* Logo & Brand dengan Efek 3D Timbul dan File Baru */}
              <Link href="/" className="flex flex-col items-center gap-3 group">
                <div className="relative p-3 rounded-full bg-gradient-to-br from-white via-slate-100 to-slate-300 shadow-[0_15px_30px_rgba(0,0,0,0.6)] border-t border-white/80 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300">
                  <Image
                    src="/tis-logo.png"
                    alt={`Logo ${company.name}`}
                    width={85} 
                    height={85} 
                    className="drop-shadow-md"
                    priority
                  />
                  {/* Efek pantulan cahaya ala 3D di bagian atas logo */}
                  <div className="absolute top-1 left-1/4 right-1/4 h-3 bg-white/60 rounded-full blur-[2px]"></div>
                </div>
                <strong className="text-xl md:text-2xl tracking-tight font-extrabold drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-center text-white group-hover:text-blue-100 transition-colors">
                  {company.name}
                </strong>
              </Link>

              {/* Menu Tengah */}
              <nav className="hidden md:flex space-x-8 font-medium drop-shadow-md items-center mt-2">
                <Link href="/#about" className="hover:text-blue-300 transition-colors">Profil</Link>
                <Link href="/services" className="hover:text-blue-300 transition-colors">Layanan</Link>
                <Link href="/portfolio" className="hover:text-blue-300 transition-colors">Portofolio</Link>
                <Link href="/#projects" className="hover:text-blue-300 transition-colors">Pengalaman</Link>
              </nav>

              {/* Tombol Aksi Kanan */}
              <div className="hidden md:flex items-center gap-5 drop-shadow-md mt-2">
                <Link href="/#contact" className="font-semibold hover:text-blue-300 transition-colors">
                  Log in
                </Link>
                <Link href="/#contact" className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  Hubungi Kami
                </Link>
              </div>

            </div>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-[#0b132b] text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <strong className="text-2xl block mb-2 font-bold">{company.name}</strong>
              <p className="text-slate-400 max-w-sm text-sm leading-relaxed">{company.address}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <Link href="/" className="hover:text-blue-400">Beranda</Link>
              <Link href="/services" className="hover:text-blue-400">Layanan</Link>
              <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="hover:text-blue-400">Google Maps</a>
              <a href={`mailto:${company.email}`} className="hover:text-blue-400">{company.email}</a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
