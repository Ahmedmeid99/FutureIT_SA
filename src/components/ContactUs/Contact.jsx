import HeroTitle from "../../ui/HeroTitle/HeroTitle";
import Section from "../../ui/Section/Section";
import styles from "./Contact.module.css";
import { useLanguage } from "../../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.contact} id="contact">
      <div className="container">
        <Section>
          <HeroTitle
            style={{ marginBottom: "3.2rem" }}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
          <div className={styles.ctaContainer}>
            <button className={styles.mainBtn}>
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
                className="lucide lucide-message-square mr-2 w-5 h-5"
                data-loc="client/src/pages/Home.tsx:333"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>{t.contact.ctaTouch}</span>
            </button>
            <button className={styles.lightBtn}>{t.contact.ctaLearn}</button>
          </div>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h4 className={styles.label}>{t.contact.email}</h4>
              <div className={styles.text}>contact@itservices-sa.com</div>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.label}>{t.contact.phone}</h4>
              <div className={styles.text}>+966 (0) XXX XXXX XXX</div>
            </div>
            <div className={styles.infoItem}>
              <h4 className={styles.label}>{t.contact.location}</h4>
              <div className={styles.text}>{t.contact.locationVal}</div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Contact;
