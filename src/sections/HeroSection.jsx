import React from "react";
import Navbar from "../components/Navbar";
import profile1 from "../assets/profilepic1.webp";
import profile2 from "../assets/profilepic2.jpg";
import profile3 from "../assets/profilepic3.jpg";
import profile4 from "../assets/profilepic4.webp";
import { RiArrowRightCircleFill, RiArrowRightFill } from "@remixicon/react";
import SplineMobile from "../components/SplineMobile";

const HeroSection = () => {
  return (
    <div className="bg-[#F8F7FC] w-full h-screen overflow-hidden relative">
      <Navbar />
      <h1 className="text-[33rem] font-bold absolute -top-[25%] -left-[30%] text-[#F3F3F5] leading-none ">
        TOGO
      </h1>

      <div className="w-full flex justify-end px-10">
        <div className="w-fit flex flex-col mt-[9%]">
          <div className="w-40 h-8 flex relative">
            <div className="w-10 h-10 rounded-full  overflow-hidden">
              <img
                src={profile1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full  overflow-hidden absolute top-0 left-7">
              <img
                src={profile2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full  overflow-hidden absolute top-0 left-14">
              <img
                src={profile3}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-10 h-10 rounded-full  overflow-hidden  absolute top-0 left-20">
              <img
                src={profile4}
                alt=""
                className="w-full h-full object-cover "
              />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#55A4F1] bg-[#F8F7FC] absolute top-0 left-[6.5rem] ">
              <RiArrowRightFill color="#55A4F1" />
            </div>
          </div>
          <p className="text-xs text-justify mt-3 capitalize text-[#868687]">
            transforming idea into impact. <br /> welcome to huge where
            creativity <br /> transforming ideas into impact
          </p>
        </div>
      </div>

      <div className="w-full h-fit bg-red-200">
        <SplineMobile/>
      </div>
    </div>
  );
};

export default HeroSection;
