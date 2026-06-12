import MainServiceCard from "../../ui/Cards/MainServiceCard/MainServiceCard";
import HeroTitle from "../../ui/HeroTitle/HeroTitle";
import Section from "../../ui/Section/Section";
import styles from "./MainServices.module.css";
import { useLanguage } from "../../context/LanguageContext";

const MainServices = () => {
  const { t } = useLanguage();

  return (
    <Section>
      <div className={styles.mainServices + " container"}>
        <HeroTitle
          title={t.mainServices.title}
          subtitle={t.mainServices.subtitle}
        />
        <div className={styles.serviceCards}>
          <MainServiceCard
            icon={
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
                className="lucide lucide-shield w-6 h-6 text-white"
                data-loc="client/src/pages/Home.tsx:196"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            }
            color="blue1"
            title={t.mainServices.servicesList.infra.title}
            description={t.mainServices.servicesList.infra.desc}
          />
          <MainServiceCard
            icon={
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
                className="lucide lucide-zap w-6 h-6 text-white"
                data-loc="client/src/pages/Home.tsx:196"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            }
            color="blue2"
            title={t.mainServices.servicesList.support.title}
            description={t.mainServices.servicesList.support.desc}
          />
          <MainServiceCard
            icon={
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
                className="lucide lucide-code w-6 h-6 text-white"
                data-loc="client/src/pages/Home.tsx:196"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            }
            color="blue3"
            title={t.mainServices.servicesList.dev.title}
            description={t.mainServices.servicesList.dev.desc}
          />{" "}
          <MainServiceCard
            icon={
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
                className="lucide lucide-cloud w-6 h-6 text-white"
                data-loc="client/src/pages/Home.tsx:196"
              >
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
              </svg>
            }
            color="cyan1"
            title={t.mainServices.servicesList.cloud.title}
            description={t.mainServices.servicesList.cloud.desc}
          />{" "}
          <MainServiceCard
            icon={
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
                className="lucide lucide-cpu w-6 h-6 text-white"
                data-loc="client/src/pages/Home.tsx:196"
              >
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                <path d="M15 2v2"></path>
                <path d="M15 20v2"></path>
                <path d="M2 15h2"></path>
                <path d="M2 9h2"></path>
                <path d="M20 15h2"></path>
                <path d="M20 9h2"></path>
                <path d="M9 2v2"></path>
                <path d="M9 20v2"></path>
              </svg>
            }
            color="teal1"
            title={t.mainServices.servicesList.ai.title}
            description={t.mainServices.servicesList.ai.desc}
          />{" "}
          <MainServiceCard
            icon={
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
                className="lucide lucide-database w-6 h-6 text-white"
                data-loc="client/src/pages/Home.tsx:196"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
            }
            color="green1"
            title={t.mainServices.servicesList.integration.title}
            description={t.mainServices.servicesList.integration.desc}
          />
        </div>
      </div>
    </Section>
  );
};

export default MainServices;
