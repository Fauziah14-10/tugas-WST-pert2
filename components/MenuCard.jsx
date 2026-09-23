const formatMoney = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function MenuCard({
  image,
  name,
  description,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onOrder,
}) {
  const numericPrice = Number(String(price).replace(/[^\d]/g, ""));
  const totalPrice = numericPrice * quantity;

  return (
    <div className="menu-card">
      <img src={image} alt={name} />

      <div className="menu-content">
        <h3>{name}</h3>

        <p>{description}</p>

        <div className="menu-bottom">
          <span className="price">{price}</span>

          <div className="quantity-controls">
            <button type="button" onClick={onDecrease} aria-label={`Kurangi jumlah ${name}`}>
              -
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={onIncrease} aria-label={`Tambah jumlah ${name}`}>
              +
            </button>
          </div>

          <button type="button" className="order-button" onClick={onOrder}>
            Pesan
          </button>
        </div>
      </div>
    </div>
  );
}
