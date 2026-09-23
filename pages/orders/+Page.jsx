import { useState } from "react";
import Navbar from "../../components/Navbar";

const formatMoney = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function Page() {
  const search = typeof window !== "undefined" ? window.location.search : "";
  const params = new URLSearchParams(search);

  const foodName = params.get("name") || "Nasi Goreng Spesial";
  const quantity = Math.max(1, Number(params.get("qty") || 1));
  const image =
    params.get("image") ||
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b";
  const unitPrice = Number(String(params.get("price") || "Rp25.000").replace(/[^\d]/g, ""));
  const totalPrice = unitPrice * quantity;

  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConfirmOrder = (event) => {
    event.preventDefault();

    if (!customerName.trim() || !address.trim()) {
      return;
    }

    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: Date.now(),
      name: foodName,
      image,
      qty: quantity,
      total: totalPrice,
      customerName,
      address,
      status: "Sedang diantar",
      note: "Pesanan sedang dalam perjalanan ke lokasi Anda.",
    };

    localStorage.setItem("orders", JSON.stringify([newOrder, ...savedOrders]));
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <main className="order-page">
        <div className="order-card">
          <p className="subtitle">PESANAN</p>
          <h1>Pesanan Anda</h1>

          <div className="order-summary">
            <img src={image} alt={foodName} />

            <div>
              <h2>{foodName}</h2>
              <p>Jumlah: {quantity}</p>
              <p>Total: {formatMoney(totalPrice)}</p>
            </div>
          </div>

          {!isSubmitted ? (
            <form className="order-form" onSubmit={handleConfirmOrder}>
              <label>
                Nama Pemesan
                <input
                  type="text"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                  placeholder="Masukkan nama Anda"
                />
              </label>

              <label>
                Alamat Pemesan
                <textarea
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  placeholder="Masukkan alamat pengiriman"
                  rows={4}
                />
              </label>

              <button type="submit" className="confirm-order">
                Konfirmasi Pesanan
              </button>
            </form>
          ) : (
            <div className="success-wrap">
              <div className="success-message">
                Pesanan anda akan diantar. Terima kasih, {customerName}. Pesanan Anda sedang dipersiapkan.
              </div>

              <div className="page-actions">
                <a href="/" className="back-home-button">
                  Kembali ke Home
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
