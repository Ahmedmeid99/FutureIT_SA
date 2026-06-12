import styles from "./HeroTitle.module.css";

const HeroTitle = ({ title, subtitle, style }) => {
  return (
    <div className={styles.heroTitleContainer} style={style}>
      <h1 className={styles.heroTitle}>{title}</h1>
      {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
    </div>
  );
};

export default HeroTitle;
