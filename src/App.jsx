import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "./sections/HeroSection";

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
    <>
      <HeroSection/>
      <div className="bg-[#121212] w-full h-screen">app</div>
    
    </>
  );
};

export default App;
