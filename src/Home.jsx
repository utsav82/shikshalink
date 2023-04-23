import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Services from "./Services";
import Contact from "./Contact";
import WhyUsSection from "./Whyus";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyUsSection/>
      <Services />
      <Contact />
    </>
  );
};

export default Home;
