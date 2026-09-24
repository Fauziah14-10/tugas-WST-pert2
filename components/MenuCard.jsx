export default function MenuCard({
  image,
  name,
  origin,
  description,
  ingredients,
  preparation,
}) {
  return (
    <div className="menu-card">
      <img src={image} alt={name} />

      <div className="menu-content">
        <h3>{name}</h3>

        <p className="menu-origin">Asal: {origin}</p>

        <p>{description}</p>

        <p className="menu-detail"><strong>Bahan utama:</strong> {ingredients}</p>

        <p className="menu-detail"><strong>Cara memasak:</strong> {preparation}</p>
      </div>
    </div>
  );
}
