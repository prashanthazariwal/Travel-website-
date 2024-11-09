import React from "react";
import travel1 from "../assets/travel1.jpg";
import travel2 from "../assets/travel2.jpg";
import travel3 from "../assets/travel3.jpg";
import passport from "../assets/passport.png";
import suitcase from "../assets/suitcase.png";
import destination from "../assets/destination.png";

const AboutSection = () => {
  return (
    <div className="bg-[#121212] w-full  relative overflow-hidden">
      <h1 className=" text-[12rem] lg:text-[33rem] font-bold absolute -top-[10%] lg:-top-[35%] -right-[5%] text-[#eeeeef] opacity-70 leading-none select-none">
        TOGO
      </h1>

      <div className="lg:px-20">
        <div className="w-full  flex lg:flex-row flex-col mt-[40%] lg:mt-[30%] gap-4 lg:gap-20  justify-center items-center">
          <div className=" w-full lg:w-[30%] pl-8 h-full flex flex-col gap-3">
            <div className="w-full  h-fit flex relative ">
              <div className="w-14 lg:w-16 h-14 lg:h-16 rounded-full overflow-hidden">
                <img
                  src={travel1}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="w-14 lg:w-16 h-14 lg:h-16 rounded-full overflow-hidden absolute top-0 left-10 lg:left-10">
                <img
                  src={travel2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-14 lg:w-16 h-14 lg:h-16 rounded-full overflow-hidden absolute top-0 left-20 lg:left-20">
                <img
                  src={travel3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-3xl lg:text-6xl font-semibold text-[#027DEC] ">
              About Us
            </h2>
          </div>
          <div className="w-full lg:w-[60%] h-full px-2 text-white ">
            <p className="text-2xl   font-normal mt-7 ml-7 leading-tight lg:leading-loose">
              For the past 10 years , we've been your{" "}
              <span className="inline-block w-10 lg:w-14 relative">
                <img
                  src={passport}
                  className="absolute -top-8 lg:-top-12 right-0 w-10 lg:w-14 h-10 lg:h-14 object-cover"
                  alt=""
                />
              </span>
              passport to extraordinary adventures , crafting memories that
              linger long after the{" "}
              <span className="inline-block  w-10 lg:w-12  relative">
                <img
                  src={destination}
                  className="absolute -top-8 lg:-top-10 right-0 w-10 lg:w-12 h-10 lg:h-12 object-cover"
                  alt=""
                />
              </span>{" "}
              journey ends . As a seasoned traveler, you deserve a companion who
              understands the art of exploration, and{" "}
              <span className="inline-block w-10 lg:w-14  relative ">
                <img
                  src={suitcase}
                  className="absolute -top-8 lg:-top-12 right-0 w-10 lg:w-14 h-10 lg:h-14 object-cover"
                  alt=""
                />
              </span>{" "}
              thst's exactly what we've been providing since our inseption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
