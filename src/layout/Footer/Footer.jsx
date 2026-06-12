import styles from "./Footer.module.css";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.logo}>
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
                  className="lucide lucide-globe w-6 h-6 text-white"
                  data-loc="client/src/pages/Home.tsx:88"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </span>
              <span className={styles.text}>{t.header.brand}</span>
            </div>
            <p className={styles.text}>
              {t.footer.desc}
            </p>
          </div>
          <div className={styles.col}>
            <div className={styles.label}>{t.footer.services}</div>
            <ul>
              <li>
                <a href="#services">{t.footer.infra}</a>
              </li>
              <li>
                <a href="#services">{t.footer.dev}</a>
              </li>
              <li>
                <a href="#services">{t.footer.cloud}</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <div className={styles.label}>{t.footer.company}</div>
            <ul>
              <li>
                <a href="#about">{t.footer.about}</a>
              </li>
              <li>
                <a href="#contact">{t.footer.contact}</a>
              </li>
              <li>
                <a href="#">{t.footer.privacy}</a>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <div className={styles.label}>{t.footer.legal}</div>
            <ul>
              <li>
                <a href="#">{t.footer.terms}</a>
              </li>
              <li>
                <a href="#">{t.footer.privacyPolicy}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyRight}>
          {t.footer.copyright}
        </div>
      </div>
    </div>
  );
};

export default Footer;
