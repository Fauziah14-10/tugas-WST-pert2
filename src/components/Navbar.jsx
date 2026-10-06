import { ChefHat, Heart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <ChefHat size={20} />
        <span>Rasa Nusantara</span>
      </div>

      <a href="/favorites" className="favorite-nav">
        <Heart size={18} />
        <span>Favorit</span>
      </a>
    </nav>
  );
}