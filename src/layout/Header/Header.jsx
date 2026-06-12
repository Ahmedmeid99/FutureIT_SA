import styles from "./Header.module.css";
import { useLanguage } from "../../context/LanguageContext";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const Header = () => {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header>
      <nav className={styles.navbar + " container"}>
        {/* Logo — click scrolls to top */}
        <button
          className={styles.logo}
          onClick={scrollToTop}
          aria-label="Go to top"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <span className={styles.brand_mark}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
          </span>
          <span className={styles.text}>{t.header.brand}</span>
        </button>

        <div className={styles.navActions}>
          <ul className={styles.navLinks}>
            <li>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                className={styles.link}
              >
                {t.header.services}
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
                className={styles.link}
              >
                {t.header.about}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                className={styles.link}
              >
                {t.header.contact}
              </a>
            </li>
          </ul>

          <button
            onClick={toggleLanguage}
            className={styles.langBtn}
            aria-label="Toggle language"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.langIcon}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
              <path d="M2 12h20"></path>
            </svg>
            <span>{lang === "en" ? "العربية" : "English"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
