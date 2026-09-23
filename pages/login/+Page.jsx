import { useState } from "react";
import { navigate } from "vike/client/router";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Akun demo
    const correctEmail = "admin@rasanusantara.com";
    const correctPassword = "123456";

    // Cek email dan password
    if (
      email === correctEmail &&
      password === correctPassword
    ) {
      // Simpan status login
      localStorage.setItem("isLoggedIn", "true");

      // Masuk ke homepage
      navigate("/");
    } else {
      // Jika salah
      setError("Email atau password salah.");
    }
  };

  return (
    <div className="login-page">

      <div className="login-overlay"></div>

      <div className="login-content">

        <div className="login-card">

          {/* Logo */}
          <div className="login-logo">
            🍽️
          </div>

          {/* Judul */}
          <h1>Selamat Datang</h1>

          <p className="login-subtitle">
            Masuk ke akun Rasa Nusantara
          </p>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="input-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="input-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <a href="#">
                  Lupa password?
                </a>

              </div>

              <input
                id="password"
                type="password"
                placeholder="Masukkan password Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

            </div>

            {/* Pesan Error */}
            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            {/* Ingat Saya */}
            <div className="remember">

              <label>
                <input type="checkbox" />

                <span>
                  Ingat saya
                </span>
              </label>

            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              className="login-button"
            >
              Masuk
            </button>

          </form>

          {/* Divider */}
          <div className="divider">
            <span>atau</span>
          </div>

          {/* Register */}
          <p className="register-text">
            Belum punya akun?{" "}
            <a href="#">
              Daftar sekarang
            </a>
          </p>

        </div>

      </div>

    </div>
  );
}