import { ChefHat } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <div className="logo">
        <ChefHat size={20} />
        <span>Rasa Nusantara</span>
      </div>

      <div className="navbar-actions">
        <div className="language-switch" role="group" aria-label="Pilih bahasa / Choose language">
          <button
            type="button"
            className={language === "id" ? "active" : ""}
            aria-pressed={language === "id"}
            onClick={() => setLanguage("id")}
          >
            ID
          </button>
          <button
            type="button"
            className={language === "en" ? "active" : ""}
            aria-pressed={language === "en"}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>

      </div>
    </nav>
  );
}