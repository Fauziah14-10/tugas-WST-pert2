import { MapPin, Heart } from "lucide-react";

export default function MenuCard({
  image,
  name,
  origin,
  description,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <a className="menu-card" href={`/food/${slug}`}>
      <img src={image} alt={name} />

      <button
        type="button"
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggleFavorite(slug);
        }}
        aria-label={
          isFavorite ? "Hapus dari favorit" : "Tambah ke favorit"
        }
      >
        <Heart
          size={20}
          fill={isFavorite ? "currentColor" : "none"}
        />
      </button>

      <div className="menu-content">
        <h3>{name}</h3>

        <p className="menu-origin">
          <MapPin size={14} />
          <span>Asal: {origin}</span>
        </p>

        <p>{description}</p>
      </div>
    </a>
  );
}