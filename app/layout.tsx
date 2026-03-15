import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { company } from "./data";

export const metadata: Metadata = {
  title: `${company.name} | Survey dan Pemetaan`,
  description:
    "Perusahaan jasa survey, pemetaan, bathymetri, drone mapping, GIS, serta lidar dan scan 3D arsitektur di Pekanbaru.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/" className="brand">
              <div className="brand-logo-wrap">
                <Image src="/logo.png" alt={`Logo ${company.name}`} width={56} height={56} className="brand-logo" priority />
              </div>
              <div className="brand-text">
                <strong>{company.name}</strong>
                <span>{company.tagline}</span>
              </div>
            </Link>
            <nav className="nav-links">
              <Link href="/#about">Profil</Link>
              <Link href="/services">Layanan</Link>
              <Link href="/#projects">Pengalaman</Link>
              <Link href="/#contact">Kontak</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="container footer-wrap">
            <div>
              <strong>{company.name}</strong>
              <p>{company.address}</p>
            </div>
            <div className="footer-links">
              <Link href="/">Beranda</Link>
              <Link href="/services">Layanan</Link>
              <a href={company.mapsUrl} target="_blank" rel="noreferrer">Google Maps</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
