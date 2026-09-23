import Navbar from "../../components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">SELAMAT DATANG DI</p>

          <h1>Rasa Nusantara</h1>

          <p>
            Nikmati berbagai hidangan khas Indonesia dengan cita rasa yang autentik
            dan bahan-bahan berkualitas.
          </p>

          <a href="/menu" className="hero-button">
            Lihat Menu
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-heading">
          <p className="section-kicker">CERITA DI BALIK RASA</p>
          <h2>Tentang Kami</h2>
          <p className="section-lead">
            Rasa Nusantara adalah ruang makan hangat yang membawa kekayaan kuliner
            Indonesia ke meja Anda, satu hidangan penuh cerita dalam satu waktu.
          </p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <p>
              Kami percaya makanan Indonesia bukan sekadar hidangan, melainkan
              cara untuk berkumpul, berbagi, dan pulang dengan kenangan yang baik.
            </p>
            <p>
              Dari bumbu yang diracik perlahan hingga bahan segar pilihan, setiap
              sajian kami dibuat dengan rasa rumahan dan perhatian pada detail.
            </p>
          </div>

          <div className="about-values">
            <div className="about-value">
              <span className="about-value-icon" aria-hidden="true">✦</span>
              <div>
                <h3>Rasa autentik</h3>
                <p>Resep Nusantara yang akrab, kaya rempah, dan tetap terasa jujur.</p>
              </div>
            </div>
            <div className="about-value">
              <span className="about-value-icon" aria-hidden="true">♨</span>
              <div>
                <h3>Dimasak sepenuh hati</h3>
                <p>Diolah dengan bahan pilihan agar setiap suapan terasa istimewa.</p>
              </div>
            </div>
            <div className="about-value">
              <span className="about-value-icon" aria-hidden="true">⌂</span>
              <div>
                <h3>Tempat untuk bersama</h3>
                <p>Nyaman untuk makan santai, merayakan momen, atau sekadar singgah.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-heading">
          <p className="section-kicker">MARI BERSILATURAHMI</p>
          <h2>Temui Kami</h2>
          <p className="section-lead">
            Punya pertanyaan, ingin reservasi, atau sekadar ingin menyapa? Kami
            siap membantu dengan senang hati.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">⌖</span>
            <h3>Alamat</h3>
            <p>Jl. Nusantara No. 10, Bogor, Jawa Barat</p>
          </div>

          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">☎</span>
            <h3>Telepon</h3>
            <p><a href="tel:+6281234567890">0812-3456-7890</a></p>
          </div>

          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">✉</span>
            <h3>Email</h3>
            <p><a href="mailto:info@rasanusantara.com">info@rasanusantara.com</a></p>
          </div>

          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">◷</span>
            <h3>Jam Buka</h3>
            <p>
              Setiap hari
              <br />
              10.00 - 22.00 WIB
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Rasa Nusantara. Semua Hak Dilindungi.</p>
      </footer>
    </>
  );
}

