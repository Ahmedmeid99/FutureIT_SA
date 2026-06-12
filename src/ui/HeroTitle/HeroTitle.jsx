import styles from "./HeroTitle.module.css";

const HeroTitle = ({ title, subtitle, style }) => {
  return (
    <div className={styles.heroTitleContainer} style={style}>
      <h2 className={styles.heroTitle}>{title}</h2>
      {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
    </div>
  );
};

export default HeroTitle;
