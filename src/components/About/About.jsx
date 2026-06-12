import Section from "../../ui/Section/Section";
import image from "../../assets/images/about-image.webp";
import styles from "./About.module.css";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="container" id="about">
      <Section>
        <div className={styles.about}>
          <div className={styles.text}>
            <h2>{t.about.title}</h2>
            <article>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </article>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {t.about.satisfactionRate}
                </span>
                <span className={styles.statLabel}>
                  {t.about.satisfactionLabel}
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {t.about.categoriesCount}
                </span>
                <span className={styles.statLabel}>
                  {t.about.categoriesLabel}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={image} alt="IT Services" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
