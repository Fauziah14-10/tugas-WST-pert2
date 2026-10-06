import { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import MenuCard from "../../components/MenuCard";
import { useLanguage } from "../../components/LanguageContext";
import { menus, menuLikeCounts } from "../../data/menus.js";
import { menuTranslations } from "../../data/menuTranslations.js";

export default function Page() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Semua");
  const english = language === "en";
  const copy = english
    ? {
        heroSubtitle: "EXPLORE INDONESIAN CULINARY HERITAGE",
        heroDescription: "Discover Indonesia's signature dishes, from their origins to the stories behind their remarkable flavors.",
        explore: "Explore dishes",
        menuSubtitle: "INDONESIAN CULINARY COLLECTION",
        menuTitle: "Signature Indonesian Dishes",
        menuDescription: "Discover signature dishes from regions across Indonesia.",
        filterLabel: "Filter menu categories",
        all: "All",
        notFound: "No dishes found",
        tryAnother: "Try a different keyword or category.",
        aboutKicker: "ABOUT THE ARCHIPELAGO",
        aboutTitle: "More Than Just Food",
        aboutLead: "Every Indonesian dish carries stories of place, tradition, and the richness of ingredients passed down through generations.",
        storyOne: "From bold spices to simple recipes, Indonesian cuisine reflects the cultural diversity found throughout the country.",
        storyTwo: "Discover their origins, learn their stories, and find the flavors that make Indonesian dishes memorable.",
        authentic: "Authentic flavors",
        authenticText: "Traditional recipes with distinctive flavors from their regions of origin.",
        heritage: "Cultural heritage",
        heritageText: "Local techniques and ingredients that shape every dish.",
        together: "A place to gather",
        togetherText: "Food that is part of traditions, celebrations, and everyday life.",
        footer: "© 2026 Rasa Nusantara. Explore the richness of Indonesian cuisine.",
        origin: "Origin",
      }
    : {
        heroSubtitle: "JELAJAHI WARISAN KULINER",
        heroDescription: "Kenali ragam makanan khas Indonesia, dari asal daerah hingga cerita rasa yang membuatnya istimewa.",
        explore: "Jelajahi Makanan",
        menuSubtitle: "KOLEKSI KULINER INDONESIA",
        menuTitle: "Makanan Khas Nusantara",
        menuDescription: "Temukan makanan khas dari berbagai daerah di Indonesia.",
        filterLabel: "Filter kategori menu",
        all: "Semua",
        notFound: "Menu tidak ditemukan",
        tryAnother: "Coba gunakan kata kunci atau kategori yang berbeda.",
        aboutKicker: "TENTANG NUSANTARA",
        aboutTitle: "Lebih dari Sekadar Makanan",
        aboutLead: "Setiap hidangan khas Indonesia menyimpan cerita tentang daerah, tradisi, dan kekayaan bahan yang diwariskan dari generasi ke generasi.",
        storyOne: "Dari rempah yang kuat hingga racikan sederhana, kuliner Nusantara mencerminkan keragaman budaya yang hidup di setiap wilayah Indonesia.",
        storyTwo: "Kenali asalnya, pahami ceritanya, dan temukan rasa yang membuat setiap makanan Indonesia begitu berkesan.",
        authentic: "Rasa autentik",
        authenticText: "Resep tradisional dengan cita rasa yang khas dari daerah asalnya.",
        heritage: "Warisan budaya",
        heritageText: "Teknik dan bahan lokal yang membentuk karakter setiap hidangan.",
        together: "Tempat untuk bersama",
        togetherText: "Makanan yang menjadi bagian dari tradisi, perayaan, dan keseharian.",
        footer: "© 2026 Rasa Nusantara. Jelajahi kekayaan kuliner Indonesia.",
        origin: "Asal",
      };

  const handleCelebrate = () => {
    confetti({
      particleCount: 75,
      spread: 65,
      startVelocity: 32,
      origin: { y: 0.72 },
      colors: ["#f3c36b", "#fff4e8", "#c85a3f"],
      disableForReducedMotion: true,
    });
  };

  const categories = ["Semua", ...new Set(menus.map((menu) => menu.category))];
  const englishCategories = {
    "Makanan Berat": "Main dishes",
    "Mie & Sate": "Noodles & satay",
    Kudapan: "Snacks",
    "Makanan Berkuah": "Soups",
    Sayuran: "Vegetables",
  };

  const filteredMenus = menus.filter((menu) => {
    return activeCategory === "Semua" || menu.category === activeCategory;
  });

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">{copy.heroSubtitle}</p>

          <h1>Rasa Nusantara</h1>

          <p>
            {copy.heroDescription}
          </p>

          <div className="hero-actions">
            <a href="#menu" className="hero-button" onClick={handleCelebrate}>
              <span>{copy.explore}</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="menu-page" id="menu">
        <div className="menu-header">
          <p className="subtitle">{copy.menuSubtitle}</p>
          <h2>{copy.menuTitle}</h2>
          <p>{copy.menuDescription}</p>
        </div>

        <div className="menu-tools">
          <div
            className="category-filters"
            aria-label={copy.filterLabel}
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category === "Semua" ? copy.all : english ? englishCategories[category] || category : category}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-grid">
          {filteredMenus.length === 0 ? (
            <div className="menu-empty-state">
              <strong>{copy.notFound}</strong>
              <span>{copy.tryAnother}</span>
            </div>
          ) : (
            filteredMenus.map((menu, index) => (
              <MenuCard
                key={menu.name}
                image={menu.image}
                name={menu.name}
                origin={menu.origin}
                description={english ? menuTranslations[menu.slug]?.description || menu.description : menu.description}
                slug={menu.slug}
                revealIndex={index}
                originLabel={copy.origin}
                likeCount={menuLikeCounts[menu.slug]}
              />
            ))
          )}
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-heading">
          <p className="section-kicker">{copy.aboutKicker}</p>
          <h2>{copy.aboutTitle}</h2>
          <p className="section-lead">
            {copy.aboutLead}
          </p>
        </div>

        <div className="about-content">
          <div className="about-story">
            <p>
              {copy.storyOne}
            </p>

            <p>
              {copy.storyTwo}
            </p>
          </div>

          <div className="about-values">
            <div className="about-value">
              <span className="about-value-icon" aria-hidden="true">
                ✦
              </span>
              <div>
                <h3>{copy.authentic}</h3>
                <p>{copy.authenticText}</p>
              </div>
            </div>

            <div className="about-value">
              <span className="about-value-icon" aria-hidden="true">
                ♨
              </span>
              <div>
                <h3>{copy.heritage}</h3>
                <p>{copy.heritageText}</p>
              </div>
            </div>

            <div className="about-value">
              <span className="about-value-icon" aria-hidden="true">
                ⌂
              </span>
              <div>
                <h3>{copy.together}</h3>
                <p>{copy.togetherText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          {copy.footer}
        </p>
      </footer>
    </>
  );
}