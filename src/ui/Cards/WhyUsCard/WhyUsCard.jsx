import CheckIcon from "../../Icons/CheckIcon/CheckIcon";
import styles from "./WhyUsCard.module.css";

const WhyUsCard = ({ title, description }) => {
  return (
    <div className={styles.ServiceCard}>
      <div className={styles.title}>
        <CheckIcon />
        <span>{title}</span>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default WhyUsCard;
