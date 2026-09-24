import { useState } from "react";
import Navbar from "../../components/Navbar";
import MenuCard from "../../components/MenuCard";
import { menus } from "../../data/menus.js";

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", ...new Set(menus.map((menu) => menu.category))];
  const filteredMenus = menus.filter((menu) => {
    return activeCategory === "Semua" || menu.category === activeCategory;
  });

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">JELAJAHI WARISAN KULINER</p>

          <h1>Rasa Nusantara</h1>

          <p>
            Kenali ragam makanan khas Indonesia, dari asal daerah hingga cerita rasa
            yang membuatnya istimewa.
          </p>

          <a href="#menu" className="hero-button">
            Jelajahi Makanan
          </a>
        </div>
      </section>

      <section className="menu-page" id="menu">
        <div className="menu-header">
          <p className="subtitle">KOLEKSI KULINER INDONESIA</p>
          <h2>Makanan Khas Nusantara</h2>
          <p>Temukan makanan khas dari berbagai daerah di Indonesia.</p>
        </div>

        <div className="menu-tools">
          <div className="category-filters" aria-label="Filter kategori menu">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-grid">
          {filteredMenus.length === 0 ? (
            <div className="menu-empty-state">
              <strong>Menu tidak ditemukan</strong>
              <span>Coba gunakan kata kunci atau kategori yang berbeda.</span>
            </div>
          ) : filteredMenus.map((menu) => (
            <MenuCard
              key={menu.name}
              image={menu.image}
              name={menu.name}
              origin={menu.origin}
              description={menu.description}
              slug={menu.slug}
            />
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-heading">
          <p className="section-kicker">TENTANG NUSANTARA</p>
          <h2>Lebih dari Sekadar Makanan</h2>
          <p className="section-lead">
            Setiap hidangan khas Indonesia menyimpan cerita tentang daerah, tradisi,
            dan kekayaan bahan yang diwariskan dari generasi ke generasi.
          </p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <p>
              Dari rempah yang kuat hingga racikan sederhana, kuliner Nusantara
              mencerminkan keragaman budaya yang hidup di setiap wilayah Indonesia.
            </p>
            <p>
              Kenali asalnya, pahami ceritanya, dan temukan rasa yang membuat setiap
              makanan Indonesia begitu berkesan.
            </p>
          </div>

          <div className="about-values">
            <div className="about-value">
              <span className="about-value-icon" aria-hidden="true">✦</span>
              <div>
                <h3>Rasa autentik</h3>
                <p>Resep tradisional dengan cita rasa yang khas dari daerah asalnya.</p>
              </div>
            </div>
            <div className="about-value">
              <span className="about-value-icon" aria-hidden="true">♨</span>
              <div>
                <h3>Warisan budaya</h3>
                <p>Teknik dan bahan lokal yang membentuk karakter setiap hidangan.</p>
              </div>
            </div>
            <div className="about-value">
              <span className="about-value-icon" aria-hidden="true">⌂</span>
              <div>
                <h3>Tempat untuk bersama</h3>
                <p>Makanan yang menjadi bagian dari tradisi, perayaan, dan keseharian.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Rasa Nusantara. Jelajahi kekayaan kuliner Indonesia.</p>
      </footer>
    </>
  );
}

