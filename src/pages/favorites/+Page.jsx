import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import Navbar from "../../components/Navbar";
import MenuCard from "../../components/MenuCard";
import { menus } from "../../data/menus.js";

export default function Page() {
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

      setFavorites(savedFavorites);
    } catch {
      setFavorites([]);
    }

    setLoaded(true);
  }, []);

  const toggleFavorite = (slug) => {
    setFavorites((currentFavorites) => {
      const updatedFavorites = currentFavorites.includes(slug)
        ? currentFavorites.filter((item) => item !== slug)
        : [...currentFavorites, slug];

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  };

  const favoriteMenus = menus.filter((menu) =>
    favorites.includes(menu.slug)
  );

  return (
    <>
      <Navbar />

      <main className="favorite-page">
        <div className="favorite-header">
          <p className="subtitle">KOLEKSI PILIHANMU</p>
          <h1>Makanan Favorit</h1>
          <p>
            Makanan yang kamu simpan sebagai favorit akan muncul di sini.
          </p>
        </div>

        {!loaded ? null : favoriteMenus.length === 0 ? (
          <div className="favorite-empty">
            <Heart size={40} />
            <h2>Belum ada makanan favorit</h2>
            <p>Pilih makanan yang kamu suka dengan ikon ❤️.</p>
            <a href="/#menu">Jelajahi Makanan</a>
          </div>
        ) : (
          <div className="menu-grid">
            {favoriteMenus.map((menu) => (
              <MenuCard
                key={menu.slug}
                image={menu.image}
                name={menu.name}
                origin={menu.origin}
                description={menu.description}
                slug={menu.slug}
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}