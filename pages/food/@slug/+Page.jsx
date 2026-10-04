import { ArrowLeft } from "lucide-react";
import { useData } from "vike-react/useData";
import Navbar from "../../../components/Navbar";
import { useLanguage } from "../../../components/LanguageContext";
import { menuTranslations } from "../../../data/menuTranslations.js";

export default function Page() {
  const { food } = useData();
  const { language } = useLanguage();
  const english = language === "en";
  const translatedFood = english ? menuTranslations[food.slug] : null;

  return (
    <>
      <Navbar />

      <main className="food-detail-page">
        <a className="food-back-link" href="/#menu" aria-label={english ? "Back to food collection" : "Kembali ke koleksi makanan"}>
          <ArrowLeft size={18} />
        </a>

        <article className="food-detail-card">
          <img src={food.image} alt={food.name} />

          <div className="food-detail-content">
            <p className="subtitle">{(translatedFood?.category || food.category).toUpperCase()}</p>
            <h1>{food.name}</h1>
            <p className="food-detail-origin">{english ? "Origin" : "Asal"}: {food.origin}</p>
            <p className="food-detail-description">{translatedFood?.description || food.description}</p>
            <p className="food-detail-story">{translatedFood?.story || food.story}</p>

            <section className="food-detail-section">
              <h2>{english ? "Main ingredients" : "Bahan utama"}</h2>
              <ul className="food-ingredients-list">
                {(translatedFood?.ingredients || food.ingredients.split(", ")).map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </section>

            <section className="food-detail-section">
              <h2>{english ? "Preparation" : "Cara pembuatan"}</h2>
              <p className="food-preparation-summary">{translatedFood?.preparation || food.preparation}</p>
              <ol className="food-steps-list">
                {(translatedFood?.steps || food.steps).map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}