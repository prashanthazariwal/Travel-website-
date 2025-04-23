import React from "react";
import Navbar from "../components/Navbar";
import profile1 from "../assets/profilepic1.webp";
import profile2 from "../assets/profilepic2.jpg";
import profile3 from "../assets/profilepic3.jpg";
import profile4 from "../assets/profilepic4.webp";
import lady from "../assets/ladywithbag.png";
import { RiArrowRightFill } from "@remixicon/react";
import SplineMobile from "../components/SplineMobile";
import { motion } from "motion/react";

const HeroSection = () => {

 
  return (
    <div className="bg-[#F8F7FC]  w-full h-fit lg:pb-20 overflow-hidden relative">
      <Navbar />
      <motion.h1 
       initial={{
        y:-10,
        opacity : 0
      }}
      animate={{
        y:0,
        opacity : 1
      }}
      transition={{
        duration : 0.3,
        ease : "easeInOut"
      }}
      className="text-[12rem] md:text-[25rem] lg:text-[40vmax]  font-bold absolute -top-[5%] -left-[75%] md:-top-[20%] md:-left-[40%] lg:-top-[25%] lg:-left-[30%] text-[#eeeeef] opacity-70 leading-none select-none">
        TOGO
      </motion.h1>

      {/* profiles of clients */}
      <div className="w-full  hidden lg:flex justify-end px-24 ">
        <motion.div
            initial={{
              x:10,
              opacity : 0
            }}
            animate={{
              x:0,
              opacity : 1
            }}
            transition={{
              duration : 0.3,
              delay:0.1,
              ease : "easeInOut"
            }}
        className="w-fit flex flex-col mt-[9%]">
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
        </motion.div>
      </div>

      {/* Title Headings container */}
      <div className="w-full px-10 flex flex-col lg:flex-row ">
        <motion.div
         initial={{
          x:-10,
          opacity : 0
        }}
        animate={{
          x:0,
          opacity : 1
        }}
        transition={{
          duration : 0.3,
          delay:0.1,
          ease : "easeInOut"
        }}
          id="leftDiv"
          className="w-full lg:w-1/2 flex flex-col gap-8  pt-20 lg:pt-0 lg:pl-20 "
        >
          <h2 className="text-[5rem] lg:text-[12rem] font-semibold leading-tight z-10">
            Enjoy
          </h2>
          <p className="text-4xl lg:text-[5rem] font-semibold leading-[1] ml-10">
            Realtime <br />
            <span className="text-[#057df7] inline-block ml-8">
              {" "}
              Best Deal
            </span>{" "}
            <br /> Travel <br /> The World
          </p>
        </motion.div>
        <motion.div
         initial={{
          x:10,
          opacity : 0
        }}
        animate={{
          x:0,
          opacity : 1
        }}
        transition={{
          duration : 0.3,
          delay:0.1,
          ease : "easeInOut"
        }}
          id="rightDiv"
          className="w-full lg:w-1/2 flex flex-col items-center pt-40 lg:pt-80 "
        >
          <div className="w-52 h-32 relative bg-blue-500">
            <div className="w-72 h-72 lg:w-96 lg:h-96 -translate-x-1/2 -translate-y-1/2 overflow-hidden absolute -top-[12%] lg:-top-[50%]  left-[50%] lg:left-[48%]">
              <img src={lady} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <h2 className="text-[5rem] lg:text-[12rem] font-semibold leading-none ml-32 ">
            TRIP
          </h2>
        </motion.div>
      </div>

      {/* spline Mobile container */}
      <div className="w-full h-[100vh] hidden  lg:flex right-0  absolute md:top-[10%]  top-[50%]">
        <SplineMobile />
      </div>
    </div>
  );
};

export default HeroSection;
