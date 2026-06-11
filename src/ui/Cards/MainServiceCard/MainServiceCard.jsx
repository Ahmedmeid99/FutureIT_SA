import styles from "./MainServiceCard.module.css";
const MainServiceCard = ({ icon, title, description, color }) => {
  return (
    <div className={styles.mainServiceCard}>
      <div className={`${styles.icon} ${styles[color]}`}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default MainServiceCard;
