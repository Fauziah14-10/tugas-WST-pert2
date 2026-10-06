import { useEffect, useRef } from "react";
import { MapPin, Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function MenuCard({
  image,
  name,
  origin,
  description,
  slug,
  revealIndex,
  originLabel,
  likeCount = 0,
}) {
  const { language } = useLanguage();
  const english = language === "en";
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

      <span
        className="menu-popularity"
        aria-label={
          english
            ? `${likeCount} likes (sample data)`
            : `${likeCount} orang menyukai (data simulasi)`
        }
      >
        <Heart size={17} fill="currentColor" aria-hidden="true" />
        <span>{likeCount}</span>
      </span>

      <div className="menu-content">
        <h3>{name}</h3>

        <p className="menu-origin">
          <MapPin size={14} />
          <span>
            {originLabel || (english ? "Origin" : "Asal")}: {origin}
          </span>
        </p>

        <p>{description}</p>
      </div>
    </a>
  );
}