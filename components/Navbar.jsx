import { ChefHat } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <ChefHat size={20} />
        <span>Rasa Nusantara</span>
      </div>
    </nav>
  );
}

