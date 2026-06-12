import styles from "./Footer.module.css";
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

const Footer = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          {/* Brand / Info column */}
          <div className={styles.info}>
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
            <p className={styles.text}>{t.footer.desc}</p>
          </div>

          {/* Services column */}
          <div className={styles.col}>
            <div className={styles.label}>{t.footer.services}</div>
            <ul>
              <li>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                >
                  {t.footer.infra}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                >
                  {t.footer.dev}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                >
                  {t.footer.cloud}
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div className={styles.col}>
            <div className={styles.label}>{t.footer.company}</div>
            <ul>
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
                >
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                >
                  {t.footer.contact}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                >
                  {t.footer.privacy}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div className={styles.col}>
            <div className={styles.label}>{t.footer.legal}</div>
            <ul>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {t.footer.privacyPolicy}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyRight}>{t.footer.copyright}</div>
      </div>
    </div>
  );
};

export default Footer;
