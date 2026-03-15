import Link from "next/link";
import Image from "next/image";
import { company, projects, services, strengths } from "./data";

export default function HomePage() {
  return (
    <main>
      <section id="top" className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">{company.name}</div>
            <h1>Solusi survey dan pemetaan yang akurat untuk keputusan yang lebih tepat</h1>
            <p className="hero-text">
              Kami membantu perusahaan, kontraktor, dan instansi mendapatkan data lapangan yang presisi melalui layanan survey topografi, drone mapping, bathymetri, GIS, serta lidar dan scan 3D arsitektur.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">Hubungi Kami</a>
              <Link href="/services" className="button button-secondary">Lihat Semua Layanan</Link>
            </div>
            <div className="stat-grid">
              {[["Akurat", "Data terukur"],["Cepat", "Respons proyek"],["Profesional", "Tim lapangan"],["Modern", "Teknologi survey"]].map(([title, subtitle]) => (
                <div key={title} className="stat-card">
                  <strong>{title}</strong>
                  <span>{subtitle}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel company-card">
            <div className="company-top">
              <div className="hero-logo-wrap">
                <Image src="/logo.png" alt="Logo perusahaan" width={148} height={148} className="hero-logo" />
              </div>
              <div>
                <p className="section-mini">Company Profile</p>
                <h2>{company.name}</h2>
                <p className="muted">{company.tagline}</p>
              </div>
            </div>
            <div className="company-grid">
              <div className="mini-card">
                <p className="mini-label">Fokus</p>
                <p>Topografi, Drone Mapping, Bathymetri, GIS, Lidar</p>
              </div>
              <div className="mini-card">
                <p className="mini-label">Komitmen</p>
                <p>Data presisi, laporan rapi, pelayanan profesional</p>
              </div>
              <div className="mini-card full-width">
                <p className="mini-label">Keunggulan</p>
                <div className="strength-list">
                  {strengths.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid">
          <div className="card">
            <p className="section-mini">Tentang Perusahaan</p>
            <h2>Mitra survey yang mengutamakan akurasi dan kepercayaan</h2>
            <p>
              {company.name} adalah perusahaan yang bergerak di bidang jasa survey, pemetaan, dan pengolahan data spasial. Kami hadir untuk mendukung kebutuhan proyek dengan pendekatan kerja yang profesional, teknologi modern, dan hasil yang dapat dipertanggungjawabkan.
            </p>
            <p>
              Kami melayani berbagai kebutuhan pengukuran dan pemetaan untuk sektor infrastruktur, pertambangan, konstruksi, perkebunan, kawasan industri, hingga pengelolaan wilayah perairan dan dokumentasi 3D arsitektur.
            </p>
          </div>
          <div className="stack-col">
            <div className="card">
              <h3>Visi</h3>
              <p>Menjadi perusahaan survey dan pemetaan yang terpercaya, presisi, dan adaptif terhadap perkembangan teknologi di Indonesia.</p>
            </div>
            <div className="card">
              <h3>Misi</h3>
              <ul className="clean-list">
                <li>Memberikan hasil survey yang akurat dan berkualitas.</li>
                <li>Menggunakan teknologi dan metode kerja yang efektif.</li>
                <li>Menyediakan pelayanan profesional sesuai kebutuhan klien.</li>
                <li>Menjaga integritas, ketepatan waktu, dan keselamatan kerja.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="section-mini">Layanan Kami</p>
            <h2>Jasa survey dan pemetaan untuk berbagai kebutuhan proyek</h2>
            <p>
              Ringkasan layanan utama kami. Untuk melihat detail lengkap seluruh layanan, silakan buka halaman layanan terpisah.
            </p>
          </div>
          <div className="service-grid">
            {services.slice(0, 6).map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/services" className="button button-secondary">Buka Halaman Layanan</Link>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-head compact">
            <p className="section-mini">Pengalaman Kerja</p>
            <h2>Pengalaman proyek yang memperkuat kepercayaan</h2>
            <p>Contoh pengalaman kerja yang dapat ditampilkan untuk menunjukkan kapasitas perusahaan dalam menangani berbagai jenis proyek survey dan pemetaan.</p>
          </div>
          <div className="projects-table">
            <div className="projects-row projects-head">
              <div>Tahun</div><div>Proyek</div><div>Lokasi</div><div>Jenis Pekerjaan</div>
            </div>
            {projects.map((project) => (
              <div className="projects-row" key={`${project.title}-${project.year}`}>
                <div>{project.year}</div>
                <div>{project.title}</div>
                <div>{project.location}</div>
                <div>{project.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="container contact-grid">
          <div className="card">
            <p className="section-mini">Kontak Perusahaan</p>
            <h2>Mari diskusikan kebutuhan survey proyek Anda</h2>
            <div className="contact-list">
              <div><span>Alamat</span><strong>{company.address}</strong></div>
              <div><span>Nomor WhatsApp</span><strong>{company.whatsapp}</strong></div>
              <div><span>Email</span><strong>{company.email}</strong></div>
              <div><span>Google Maps</span><a href={company.mapsUrl} target="_blank" rel="noreferrer">Buka lokasi kantor</a></div>
            </div>
          </div>
          <div className="card map-card">
            <p className="section-mini">Lokasi Kantor</p>
            <h3>Google Maps</h3>
            <iframe
              title="Lokasi kantor PT. TITIAN INTI SURVEI"
              src="https://maps.google.com/maps?q=jalan%20Pias%20No.1%20Kelurahan%20Tangkerang%20barat%2C%20Kota%20Pekanbaru&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-frame"
            />
            <div className="map-actions">
              <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="button button-secondary">Buka di Google Maps</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
