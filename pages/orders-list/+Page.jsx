import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const formatMoney = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

const getStatusClass = (status) => {
  const normalized = status.toLowerCase();

  if (normalized.includes("diproses")) {
    return "status-diproses";
  }

  if (normalized.includes("diantar") || normalized.includes("antar")) {
    return "status-diantar";
  }

  if (normalized.includes("selesai")) {
    return "status-selesai";
  }

  return "status-diantar";
};

export default function Page() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const currentUser = sessionStorage.getItem("currentUser");

    if (currentUser) {
      const orderKey = `orders_${currentUser.trim().toLowerCase()}`;
      const storedOrders = JSON.parse(localStorage.getItem(orderKey) || "[]");
      setOrders(storedOrders);
    }
  }, []);

  return (
    <>
      <Navbar />

      <main className="orders-list-page">
        <div className="orders-list-card">
          <p className="subtitle">LIST PESANAN</p>
          <h1>Daftar Pesanan</h1>

          <div className="orders-list">
            {orders.length === 0 ? (
              <div className="empty-state">Belum ada pesanan yang sedang diproses.</div>
            ) : (
              orders.map((order) => (
                <div className="order-item" key={order.id}>
                  <img src={order.image} alt={order.name} />

                  <div className="order-item-content">
                    <h3>{order.name}</h3>
                    <p>
                      <strong>Pemesan:</strong> {order.customerName}
                    </p>
                    <p>
                      <strong>Alamat:</strong> {order.address}
                    </p>
                    <p>
                      <strong>Jumlah:</strong> {order.qty} pcs
                    </p>
                    <p>
                      <strong>Total:</strong> {formatMoney(order.total)}
                    </p>
                    <p>
                      <strong>Pembayaran:</strong> {order.paymentMethod || "Cash"}
                    </p>

                    <div className="order-meta">
                      <span className={`status-badge ${getStatusClass(order.status)}`}>
                        {order.status}
                      </span>
                      <span>{order.note}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="page-actions">
            <a href="/" className="back-home-button">
              Kembali ke Beranda
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
