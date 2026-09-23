export default function MenuCard({ image, name, description, price }) {
  return (
    <div className="menu-card">
      <img src={image} alt={name} />

      <div className="menu-content">
        <h3>{name}</h3>

        <p>{description}</p>

        <div className="menu-bottom">
          <span className="price">{price}</span>

          <button>Pesan</button>
        </div>
      </div>
    </div>
  );
}
