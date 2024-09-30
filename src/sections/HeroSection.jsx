import React from "react";
import Navbar from "../components/Navbar";

const HeroSection = () => {
  return (
    <div className="bg-[#F8F7FC] w-full h-screen overflow-hidden relative">
      <Navbar />
      <h1 className="text-[33rem] font-bold absolute -top-[25%] -left-[30%] text-[#F3F3F5] leading-none ">
        TOGO
      </h1>

      <div className="w-full flex justify-end px-10 mt-[9%]">
        <div className="w-56 bg-red-200 h-8"></div>
      </div>

    </div>
  );
};

export default HeroSection;
