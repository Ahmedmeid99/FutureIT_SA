import styles from "./Header.module.css";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header>
      <nav className={styles.navbar + " container"}>
        <a href="#" className={styles.logo} aria-label="Go to top">
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
        </a>

        <div className={styles.navActions}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#services" className={styles.link}>
                {t.header.services}
              </a>
            </li>
            <li>
              <a href="#about" className={styles.link}>
                {t.header.about}
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.link}>
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
