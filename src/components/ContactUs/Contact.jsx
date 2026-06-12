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
            <a href="mailto:info@monshaatech.com" className={styles.mainBtn}>
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
            </a>
            <a href="#services" className={styles.lightBtn}>
              {t.contact.ctaLearn}
            </a>
          </div>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h3 className={styles.label}>{t.contact.email}</h3>
              <a className={styles.text} href="mailto:info@monshaatech.com">
                info@monshaatech.com
              </a>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.label}>{t.contact.phone}</h3>
              <a className={styles.text} href="tel:+966562721190">
                +966 56 272 1190
              </a>
            </div>
            <div className={styles.infoItem}>
              <h3 className={styles.label}>{t.contact.location}</h3>
              <div className={styles.text}>{t.contact.locationVal}</div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Contact;
