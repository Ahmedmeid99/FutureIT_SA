import styles from "./Hero.module.css";
import image from "../../assets/images/hero-image.webp";
import CheckIcon from "../../ui/Icons/CheckIcon/CheckIcon";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const { t, lang } = useLanguage();

  return (
    <section className={styles.heroContainer}>
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.content}>
            <h1 className={styles.title}>{t.hero.title}</h1>
            <p className={styles.subtitle}>{t.hero.subtitle}</p>
            <div className={styles.ctaContainer}>
              <a href="#contact" className={styles.mainBtn}>
                <span>{t.hero.ctaConsultation}</span>
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
                  className="lucide lucide-arrow-right ml-2 w-5 h-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a href="#services" className={styles.lightBtn}>
                {t.hero.ctaServices}
              </a>
            </div>
            <div className={styles.badges}>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>
                  <CheckIcon />
                </span>
                <span className={styles.badgeText}>{t.hero.visionBadge}</span>
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>
                  <CheckIcon />
                </span>
                <span className={styles.badgeText}>{t.hero.localBadge}</span>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={image}
              alt={
                lang === "en"
                  ? "Empowering Saudi Startups & SMEs - IT Services SA"
                  : "تمكين الشركات السعودية الناشئة والصغيرة والمتوسطة - خدمات تقنية المعلومات SA"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
