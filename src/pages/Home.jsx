import Hero from "../components/Hero/Hero";
import MainServices from "../components/MainServices/MainServices";
import Header from "../layout/Header/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <MainServices />
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
