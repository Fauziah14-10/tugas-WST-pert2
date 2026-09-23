import { useEffect } from "react";
import { navigate } from "vike/client/router";
import Navbar from "../../components/Navbar";

export default function Page() {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Jika belum login, arahkan ke halaman login
    if (isLoggedIn !== "true") {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* =========================
          HERO
      ========================= */}
      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">
            SELAMAT DATANG DI
          </p>

          <h1>
            Rasa Nusantara
          </h1>

          <p>
            Nikmati berbagai hidangan khas Indonesia
            dengan cita rasa yang autentik dan
            bahan-bahan berkualitas.
          </p>

          <a
            href="/menu"
            className="hero-button"
          >
            Lihat Menu
          </a>
        </div>
      </section>


      {/* =========================
          ABOUT
      ========================= */}
      <section
        className="about"
        id="about"
      >
        <h2>
          Tentang Kami
        </h2>

        <p>
          Rasa Nusantara menyajikan berbagai makanan
          dan minuman khas Indonesia yang cocok untuk
          keluarga, teman, maupun acara spesial.
        </p>

        <p>
          Kami menghadirkan cita rasa Nusantara dengan
          bahan-bahan berkualitas dan proses pengolahan
          yang menjaga keaslian rasa setiap hidangan.
        </p>
      </section>


      {/* =========================
          CONTACT
      ========================= */}
      <section
        className="contact"
        id="contact"
      >
        <h2>
          Hubungi Kami
        </h2>

        <div className="contact-container">

          <div className="contact-item">
            <h3>📍 Alamat</h3>
            <p>
              Jl. Nusantara No. 10,
              Bogor, Jawa Barat
            </p>
          </div>

          <div className="contact-item">
            <h3>📞 Telepon</h3>
            <p>
              0812-3456-7890
            </p>
          </div>

          <div className="contact-item">
            <h3>✉️ Email</h3>
            <p>
              info@rasanusantara.com
            </p>
          </div>

          <div className="contact-item">
            <h3>🕐 Jam Buka</h3>
            <p>
              Senin - Minggu
              <br />
              10.00 - 22.00 WIB
            </p>
          </div>

        </div>
      </section>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="footer">
        <p>
          © 2026 Rasa Nusantara.
          Semua Hak Dilindungi.
        </p>
      </footer>
    </>
  );
}