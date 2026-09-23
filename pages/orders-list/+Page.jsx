import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const defaultOrders = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
    qty: 2,
    total: 50000,
    customerName: "Rina",
    address: "Jl. Merdeka No. 10, Bandung",
    status: "Sedang diantar",
    note: "Kurir sedang menuju lokasi.",
  },
  {
    id: 2,
    name: "Ayam Bakar",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6",
    qty: 1,
    total: 30000,
    customerName: "Dika",
    address: "Jl. Cendana No. 4, Bogor",
    status: "Diproses",
    note: "Pesanan sedang dibuat di dapur.",
  },
];

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
  const [orders, setOrders] = useState(defaultOrders);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    if (storedOrders.length > 0) {
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
              Kembali ke Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
