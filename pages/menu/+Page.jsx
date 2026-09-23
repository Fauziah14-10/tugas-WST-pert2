import Navbar from "../../components/Navbar";
import MenuCard from "../../components/MenuCard";

const menus = [
  {
    name: "Nasi Goreng Spesial",
    description: "Nasi goreng dengan telur, ayam, dan sayuran.",
    price: "Rp25.000",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b"
  },
  {
    name: "Ayam Bakar",
    description: "Ayam bakar dengan bumbu rempah khas Nusantara.",
    price: "Rp30.000",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6"
  },
  {
    name: "Mie Goreng",
    description: "Mie goreng dengan ayam, telur, dan sayuran.",
    price: "Rp22.000",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246"
  },
  {
    name: "Sate Ayam",
    description: "Sate ayam dengan bumbu kacang dan lontong.",
    price: "Rp28.000",
    image:
      "https://images.unsplash.com/photo-1529563021893-cc83c992d75d"
  },
  {
    name: "Es Teh Manis",
    description: "Teh manis dingin yang menyegarkan.",
    price: "Rp8.000",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc"
  },
  {
    name: "Jus Jeruk",
    description: "Jus jeruk segar tanpa tambahan pemanis berlebihan.",
    price: "Rp12.000",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba"
  }
];

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="menu-page">
        <div className="menu-header">
          <p className="subtitle">MENU RESTORAN</p>

          <h1>Menu Pilihan Kami</h1>

          <p>
            Pilih makanan dan minuman favoritmu.
          </p>
        </div>

        <div className="menu-grid">
          {menus.map((menu, index) => (
            <MenuCard
              key={index}
              image={menu.image}
              name={menu.name}
              description={menu.description}
              price={menu.price}
            />
          ))}
        </div>
      </main>
    </>
  );
}