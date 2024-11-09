import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import MarqueSection from "./sections/MarqueSection";
import NatureAdventureSection from "./sections/NatureAdventureSection";
import Services from "./sections/Services";
import Reviews from "./sections/Reviews";
import WhyUs from "./sections/WhyUs";
import Footer from "./sections/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  // lenis code in useEffect
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="main overflow-hidden bg-[#121212]">
      <ToastContainer />
      <HeroSection />
      <AboutSection />
      <MarqueSection />
      <NatureAdventureSection />
      <Services />
      <Reviews />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default App;
