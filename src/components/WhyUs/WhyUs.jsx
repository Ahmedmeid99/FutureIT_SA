import HeroTitle from "../../ui/HeroTitle/HeroTitle";
import Section from "../../ui/Section/Section";
import WhyUsCard from "../../ui/Cards/WhyUsCard/WhyUsCard";
import styles from "./WhyUs.module.css";
import { useLanguage } from "../../context/LanguageContext";

const WhyUs = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.whyUs}>
      <Section>
        <div className="container">
          <HeroTitle title={t.whyUs.title} />

          <div className={styles.cards}>
            {t.whyUs.reasons.map((item, index) => (
              <WhyUsCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WhyUs;
