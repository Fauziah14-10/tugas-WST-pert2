import { useData } from "vike-react/useData";
import Navbar from "../../../components/Navbar";

export default function Page() {
  const { food } = useData();

  return (
    <>
      <Navbar />

      <main className="food-detail-page">
        <a className="food-back-link" href="/#menu">
          Kembali ke koleksi makanan
        </a>

        <article className="food-detail-card">
          <img src={food.image} alt={food.name} />

          <div className="food-detail-content">
            <p className="subtitle">{food.category.toUpperCase()}</p>
            <h1>{food.name}</h1>
            <p className="food-detail-origin">Asal: {food.origin}</p>
            <p className="food-detail-description">{food.description}</p>
            <p className="food-detail-story">{food.story}</p>

            <section className="food-detail-section">
              <h2>Bahan utama</h2>
              <ul className="food-ingredients-list">
                {food.ingredients.split(", ").map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </section>

            <section className="food-detail-section">
              <h2>Cara pembuatan</h2>
              <p className="food-preparation-summary">{food.preparation}</p>
              <ol className="food-steps-list">
                {food.steps.map((step) => (
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
