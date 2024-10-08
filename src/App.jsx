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
      <div className="bg-[#121212] w-full h-screen relative overflow-hidden">
      <h1 className="text-[33rem] font-bold absolute -top-[35%] -right-[5%] text-[#eeeeef] opacity-70 leading-none select-none">
        TOGO
      </h1>

      <div className="px-10">
        <div className="w-full bg-red-200 h-52 flex mt-[30%]">
          <div className="w-[20%] h-full bg-green-400">
          <div className="w-fit h-8 flex relative bg-blue-300">
            <div className="w-28 h-28 rounded-full border overflow-hidden">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover "
              />
            </div>
            <div className="w-28 h-28 rounded-full border overflow-hidden absolute top-0 left-14">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-28 h-28 rounded-full border overflow-hidden absolute top-0 left-32">
              <img
                src=""
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          </div>
          <div className="w-[80%] h-full "></div>
        </div>
      </div>
      </div>
    
    </>
  );
};

export default App;
