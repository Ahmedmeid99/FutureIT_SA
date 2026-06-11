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
                Get a Free Consultation
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
