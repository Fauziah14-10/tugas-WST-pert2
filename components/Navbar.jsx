export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Rasa Nusantara</div>

      <div className="nav-menu">
        <a href="/orders-list" className="order-list-link" aria-label="List pesanan">
          📋 List Pesanan
        </a>
      </div>
    </nav>
  );
}

