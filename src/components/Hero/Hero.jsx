import styles from "./Hero.module.css";
import image from "../../assets/images/hero-image.webp";
import CheckIcon from "../../ui/Icons/CheckIcon/CheckIcon";
const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.content}>
            <h1 className={styles.title}>Empowering Saudi Startups & SMEs</h1>
            <p className={styles.subtitle}>
              Your trusted partner in digital transformation. Comprehensive IT
              solutions from foundational infrastructure to cutting-edge AI and
              Cloud technologies.
            </p>
            <div className={styles.ctaContainer}>
              <button className={styles.mainBtn}>
                <span>Get a Free Consultation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right ml-2 w-5 h-5"
                  data-loc="client/src/pages/Home.tsx:134"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button className={styles.lightBtn}>Explore Our Services</button>
            </div>
            <div className={styles.badges}>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>
                  <CheckIcon />
                </span>
                <span className={styles.badgeText}>Vision 2030 Aligned</span>
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>
                  <CheckIcon />
                </span>
                <span className={styles.badgeText}>Local Expertise</span>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={image} alt="IT Services" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
