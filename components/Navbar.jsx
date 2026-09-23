function Navbar() {
  const handleLogout = () => {
    // Hapus status login
    localStorage.removeItem("isLoggedIn");

    // Kembali ke halaman login
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        🍽️ Rasa Nusantara
      </div>

      {/* Menu Navigasi */}
      <div className="nav-menu">

        <a href="/">
          Home
        </a>

        <a href="/menu">
          Menu
        </a>

        <a href="/#about">
          Tentang
        </a>

        <a href="/#contact">
          Kontak
        </a>

        <button
          type="button"
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;