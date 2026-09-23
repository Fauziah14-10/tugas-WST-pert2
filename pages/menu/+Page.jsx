import { useState } from "react";
import Navbar from "../../components/Navbar";
import MenuCard from "../../components/MenuCard";

const menus = [
  {
    name: "Nasi Goreng Spesial",
    category: "Makanan Berat",
    description: "Nasi goreng dengan telur, ayam, dan sayuran.",
    price: "Rp25.000",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
  {
    name: "Ayam Bakar",
    category: "Makanan Berat",
    description: "Ayam bakar dengan bumbu rempah khas Nusantara.",
    price: "Rp30.000",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6",
  },
  {
    name: "Mie Goreng",
    category: "Mie & Sate",
    description: "Mie goreng dengan ayam, telur, dan sayuran.",
    price: "Rp22.000",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
  },
  {
    name: "Sate Ayam",
    category: "Mie & Sate",
    description: "Sate ayam dengan bumbu kacang dan lontong.",
    price: "Rp28.000",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d",
  },
  {
    name: "Es Teh Manis",
    category: "Minuman",
    description: "Teh manis dingin yang menyegarkan.",
    price: "Rp8.000",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
  },
  {
    name: "Jus Jeruk",
    category: "Minuman",
    description: "Jus jeruk segar tanpa tambahan pemanis berlebihan.",
    price: "Rp12.000",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
  },
];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(menus.map((menu) => [menu.name, 1]))
  );

  const categories = ["Semua", ...new Set(menus.map((menu) => menu.category))];
  const filteredMenus = menus.filter((menu) => {
    const matchesCategory = activeCategory === "Semua" || menu.category === activeCategory;
    const searchableText = `${menu.name} ${menu.description}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchTerm.toLowerCase().trim());

    return matchesCategory && matchesSearch;
  });

  const updateQuantity = (menuName, change) => {
    setQuantities((previous) => {
      const current = previous[menuName] ?? 1;
      const nextValue = Math.max(1, current + change);

      return {
        ...previous,
        [menuName]: nextValue,
      };
    });
  };

  const handleOrder = (menu) => {
    const qty = quantities[menu.name] ?? 1;
    const params = new URLSearchParams({
      name: menu.name,
      qty: String(qty),
      image: menu.image,
      price: menu.price,
    });

    window.location.href = `/orders?${params.toString()}`;
  };

  return (
    <>
      <Navbar />

      <main className="menu-page">
        <div className="menu-header">
          <p className="subtitle">MENU RESTORAN</p>
          <h1>Menu Pilihan Kami</h1>
          <p>Pilih makanan dan minuman favoritmu.</p>
        </div>

        <div className="menu-tools">
          <label className="menu-search">
            <span className="menu-tool-icon" aria-hidden="true">⌕</span>
            <span className="sr-only">Cari menu</span>
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Cari makanan atau minuman..."
            />
          </label>

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
              description={menu.description}
              price={menu.price}
              quantity={quantities[menu.name] ?? 1}
              onIncrease={() => updateQuantity(menu.name, 1)}
              onDecrease={() => updateQuantity(menu.name, -1)}
              onOrder={() => handleOrder(menu)}
            />
          ))}
        </div>
      </main>
    </>
  );
}