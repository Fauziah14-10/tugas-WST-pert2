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
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConfirmOrder = (event) => {
    event.preventDefault();

    if (!customerName.trim() || !address.trim()) {
      return;
    }

    const normalizedUser = customerName.trim().toLowerCase();
    const orderKey = `orders_${normalizedUser}`;
    const savedOrders = JSON.parse(localStorage.getItem(orderKey) || "[]");
    const newOrder = {
      id: Date.now(),
      name: foodName,
      image,
      qty: quantity,
      total: totalPrice,
      customerName,
      address,
      paymentMethod,
      status: "Sedang diantar",
      note: "Pesanan sedang dalam perjalanan ke lokasi Anda.",
    };

    sessionStorage.setItem("currentUser", customerName.trim());
    localStorage.setItem(orderKey, JSON.stringify([newOrder, ...savedOrders]));
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

              <fieldset className="payment-fieldset">
                <legend>Metode Pembayaran</legend>
                <div className="payment-options">
                  {[
                    { value: "Cash", label: "Cash", detail: "Bayar saat pesanan diterima" },
                    { value: "Transfer", label: "Transfer", detail: "Transfer ke rekening restoran" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`payment-option ${paymentMethod === option.value ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={option.value}
                        checked={paymentMethod === option.value}
                        onChange={(event) => setPaymentMethod(event.target.value)}
                      />
                      <span>
                        <strong>{option.label}</strong>
                        <small>{option.detail}</small>
                      </span>
                    </label>
                  ))}
                </div>
                {paymentMethod === "Transfer" && (
                  <p className="payment-note">
                    Rekening BCA 123456789 a.n. Rasa Nusantara
                  </p>
                )}
              </fieldset>

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
