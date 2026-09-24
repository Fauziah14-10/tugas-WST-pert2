import { useState } from "react";
import Navbar from "../../components/Navbar";
import MenuCard from "../../components/MenuCard";

const menus = [
  {
    name: "Nasi Goreng Spesial",
    category: "Makanan Berat",
    origin: "Jawa",
    description: "Hidangan nasi berbumbu gurih dengan aroma bawang dan kecap yang khas.",
    ingredients: "Nasi putih, telur, ayam, bawang merah, bawang putih, kecap manis, dan cabai.",
    preparation: "Bumbu ditumis, lalu nasi dan bahan pelengkap digoreng bersama hingga harum.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
  {
    name: "Ayam Bakar",
    category: "Makanan Berat",
    origin: "Jawa Barat",
    description: "Ayam berbumbu rempah dengan rasa manis gurih dan aroma bakaran yang kuat.",
    ingredients: "Ayam, bawang merah, bawang putih, ketumbar, kemiri, gula merah, dan kecap manis.",
    preparation: "Ayam diungkep bersama bumbu hingga meresap, lalu dibakar sambil diolesi sisa bumbu.",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6",
  },
  {
    name: "Rendang Daging",
    category: "Makanan Berat",
    origin: "Minangkabau, Sumatera Barat",
    description: "Daging sapi kaya rempah dengan kuah pekat yang berubah menjadi bumbu hitam gurih.",
    ingredients: "Daging sapi, santan, cabai merah, serai, lengkuas, jahe, kunyit, dan daun jeruk.",
    preparation: "Daging dimasak perlahan dalam santan dan bumbu hingga cairan menyusut serta bumbu meresap.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rendang_daging_sapi_asli_Padang.JPG?width=800",
  },
  {
    name: "Gudeg",
    category: "Makanan Berat",
    origin: "Yogyakarta, Jawa Tengah",
    description: "Olahan nangka muda bercita rasa manis gurih yang biasanya disajikan dengan nasi.",
    ingredients: "Nangka muda, santan, gula merah, daun salam, lengkuas, telur, dan krecek.",
    preparation: "Nangka direbus lama bersama santan dan bumbu hingga empuk, berwarna cokelat, dan meresap.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gudeg_Jogja.jpg?width=800",
  },
  {
    name: "Sate Ayam",
    category: "Mie & Sate",
    origin: "Madura, Jawa Timur",
    description: "Potongan ayam berbumbu yang dibakar dan disiram saus kacang gurih.",
    ingredients: "Daging ayam, bawang putih, ketumbar, kecap manis, kacang tanah, cabai, dan jeruk limau.",
    preparation: "Ayam dimarinasi, ditusuk, lalu dibakar hingga matang dan disajikan dengan bumbu kacang.",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d",
  },
  {
    name: "Pempek",
    category: "Kudapan",
    origin: "Palembang, Sumatera Selatan",
    description: "Olahan ikan dan sagu dengan tekstur kenyal yang disajikan bersama kuah cuko asam pedas.",
    ingredients: "Ikan tenggiri, tepung tapioka, bawang putih, telur, gula merah, cabai, dan cuka.",
    preparation: "Adonan ikan dibentuk, direbus atau digoreng, lalu disajikan dengan kuah cuko.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pempek_Palembang.jpg?width=800",
  },
  {
    name: "Rawon",
    category: "Makanan Berkuah",
    origin: "Jawa Timur",
    description: "Sup daging berkuah hitam dengan rasa gurih, hangat, dan aroma kluwek yang khas.",
    ingredients: "Daging sapi, kluwek, bawang merah, bawang putih, serai, lengkuas, dan daun jeruk.",
    preparation: "Bumbu halus ditumis, direbus bersama daging hingga empuk, lalu disajikan dengan kuahnya.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nasi_Rawon.jpg?width=800",
  },
  {
    name: "Gado-Gado",
    category: "Sayuran",
    origin: "Betawi, Jakarta",
    description: "Racikan sayuran rebus dan pelengkap dengan siraman saus kacang yang lembut.",
    ingredients: "Kangkung, tauge, kol, kentang, tahu, tempe, telur, kacang tanah, dan jeruk limau.",
    preparation: "Sayuran direbus sebentar, kemudian disusun bersama pelengkap dan saus kacang.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gado_gado.jpg?width=800",
  },
  {
    name: "Papeda",
    category: "Makanan Berkuah",
    origin: "Papua dan Maluku",
    description: "Bubur sagu bertekstur kenyal yang biasa disantap dengan kuah ikan berbumbu.",
    ingredients: "Tepung sagu, ikan, kunyit, serai, jeruk nipis, cabai, dan bawang.",
    preparation: "Sagu diseduh air panas sambil diaduk hingga bening dan mengental, lalu disajikan dengan ikan kuah.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Papeda_dari_Indonesia_bagian_timur.jpg?width=1200",
  },
];

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
              ingredients={menu.ingredients}
              preparation={menu.preparation}
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

