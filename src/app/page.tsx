import React from "react";
import AboutSec from "./components/AboutSec";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <div className=" md:min-h-screen mx-auto bg-gradient-to-r from-cyan-200 bg-pink-200 to-blue-200 ">
      <HeroSection />

      <AboutSec />

      <Contact />
    </div>
  );
};

export default Home;
