import { useEffect, useRef } from "react";
import { MapPin, Heart } from "lucide-react";

export default function MenuCard({
  image,
  name,
  origin,
  description,
  slug,
  revealIndex,
  originLabel = "Asal",
  isFavorite = false,
  onToggleFavorite,
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (!("IntersectionObserver" in window)) {
      card.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.classList.add("is-visible");
          observer.unobserve(card);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={cardRef}
      className="menu-card"
      href={`/food/${slug}`}
      style={{
        "--reveal-delay": `${Math.min(revealIndex, 5) * 65}ms`,
      }}
    >
      <img src={image} alt={name} />

      <button
        type="button"
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggleFavorite?.(slug);
        }}
        aria-label={
          isFavorite ? "Hapus dari favorit" : "Tambah ke favorit"
        }
      >
        <Heart
          size={21}
          fill={isFavorite ? "currentColor" : "none"}
        />
      </button>

      <div className="menu-content">
        <h3>{name}</h3>

        <p className="menu-origin">
          <MapPin size={14} />
          <span>
            {originLabel}: {origin}
          </span>
        </p>

        <p>{description}</p>
      </div>
    </a>
  );
}