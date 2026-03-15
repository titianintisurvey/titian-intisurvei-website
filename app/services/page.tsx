import { company, services } from "../data";

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <div className="container narrow">
          <p className="section-mini">Halaman Layanan</p>
          <h1>Layanan PT. TITIAN INTI SURVEI</h1>
          <p className="hero-text">
            {company.name} menyediakan layanan survey dan pemetaan yang dirancang untuk memenuhi kebutuhan proyek lapangan, pengolahan data spasial, hingga dokumentasi 3D presisi tinggi.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card service-card-large">
                <div className="service-icon" />
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
