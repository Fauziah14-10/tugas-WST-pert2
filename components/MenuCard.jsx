export default function MenuCard({
  image,
  name,
  origin,
  description,
  slug,
}) {
  return (
    <a className="menu-card" href={`/food/${slug}`}>
      <img src={image} alt={name} />

      <div className="menu-content">
        <h3>{name}</h3>

        <p className="menu-origin">Asal: {origin}</p>

        <p>{description}</p>
      </div>
    </a>
  );
}
