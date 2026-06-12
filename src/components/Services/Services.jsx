import CheckIcon from "../../ui/Icons/CheckIcon/CheckIcon";
import styles from "./Services.module.css";
import { useLanguage } from "../../context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="container">
      <section className={styles.services}>
        <h3 className={styles.title}>{t.services.title}</h3>

        <div className={styles.serviceCards}>
          {t.services.list.map((service, index) => (
            <Service key={index} title={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

const Service = ({ title }) => {
  return (
    <div className={styles.service}>
      <CheckIcon />
      <div className={styles.serviceText}>{title}</div>
    </div>
  );
};

export default Services;
