import { useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/ContactUs/Contact";
import Hero from "../components/Hero/Hero";
import MainServices from "../components/MainServices/MainServices";
import Services from "../components/Services/Services";
import WhyUs from "../components/WhyUs/WhyUs";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import ScrollToTop from "../ui/ScrollToTop/ScrollToTop";
import SEO from "../components/SEO/SEO";
import { useLanguage } from "../context/LanguageContext";

const Home = () => {
  const { t, lang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 },
    );

    const animatedElements = document.querySelectorAll(".animate-view");
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [lang]);
  return (
    <div className="home">
      <SEO />
      <Header />
      <Hero />
      <MainServices />
      <Services />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
      <ScrollToTop />
      {/* 
    {Seactions}
    header
    hero section
    services 01
    services 02
    about us
    why choose us
    contact us
    footer
    */}
    </div>
  );
};

export default Home;
