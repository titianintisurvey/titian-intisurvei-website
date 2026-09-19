import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION (Gaya DroneDeploy) */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-start overflow-hidden">
        
        {/* Latar Belakang Gambar (Memanggil hero-bg.jpg dari folder public) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          {/* Overlay Gelap Transparan (Membantu teks putih tetap terbaca meski gambar terang) */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Konten Teks & Tombol */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-3xl">
            
            {/* Judul Utama (Font sangat besar & tebal) */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Pemetaan Presisi untuk Keputusan Cepat
            </h1>
            
            {/* Sub-judul */}
            <p className="text-lg md:text-xl text-white/90 mb-10 drop-shadow-md leading-relaxed max-w-2xl font-medium">
              Lihat dan ukur lokasi proyek Anda dari berbagai sudut. Kami menghadirkan data lapangan yang presisi melalui teknologi drone, Lidar, dan GIS tingkat lanjut.
            </p>
            
            {/* Tombol Aksi (Bentuk Kapsul / Pill) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services" 
                className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-center hover:bg-gray-100 transition-colors shadow-xl"
              >
                Jelajahi Layanan
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-center hover:bg-white/20 transition-colors shadow-xl"
              >
                Lihat Peta Interaktif
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION TENTANG KAMI (Area putih di bawah gambar) */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mitra Survey Terpercaya Anda</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
            PT. TITIAN INTI SURVEI hadir untuk mendukung kebutuhan proyek infrastruktur, pertambangan, dan konstruksi dengan pendekatan profesional, metode kerja terukur, dan hasil data yang siap digunakan.
          </p>
          
          {/* Fitur Singkat */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Akurat</h3>
              <p className="text-slate-600">Data terukur dengan kalibrasi standar tinggi untuk perencanaan proyek.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Teknologi Modern</h3>
              <p className="text-slate-600">Penggunaan UAV Drone, Bathymetri, dan Lidar untuk area yang kompleks.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Profesional</h3>
              <p className="text-slate-600">Tim lapangan yang responsif, berdedikasi, dan mengutamakan K3.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
