import { useState } from "react";
import Navbar from "../../components/Navbar";
import MenuCard from "../../components/MenuCard";

const menus = [
  {
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan telur, ayam, dan sayuran.",
    price: "Rp25.000",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
  },
  {
    name: "Ayam Bakar",
    description: "Ayam bakar dengan bumbu rempah khas Nusantara.",
    price: "Rp30.000",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6",
  },
  {
    name: "Mie Goreng",
    description: "Mie goreng dengan ayam, telur, dan sayuran.",
    price: "Rp22.000",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246",
  },
  {
    name: "Sate Ayam",
    description: "Sate ayam dengan bumbu kacang dan lontong.",
    price: "Rp28.000",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d",
  },
  {
    name: "Es Teh Manis",
    description: "Teh manis dingin yang menyegarkan.",
    price: "Rp8.000",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
  },
  {
    name: "Jus Jeruk",
    description: "Jus jeruk segar tanpa tambahan pemanis berlebihan.",
    price: "Rp12.000",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba",
  },
];

export default function Page() {
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(menus.map((menu) => [menu.name, 1]))
  );

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

        <div className="menu-grid">
          {menus.map((menu) => (
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