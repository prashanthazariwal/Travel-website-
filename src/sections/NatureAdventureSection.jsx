import React from "react";
import leaf from "../assets/leaf.png";
import adventure from "../assets/adventure.png";
import photo1 from "../assets/photo-1.jpg";
import photo2 from "../assets/photo-2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";

const NatureAdventureSection = () => {
  return (
    <div className="w-full  h-fit flex flex-col gap-10 bg-[#121212] lg:px-10">
      <div className="flex flex-col lg:flex-row w-full justify-between px-10 py-2  gap-4 lg:gap-0">
        <div className="flex flex-col w-full lg:w-[25%] justify-center gap-4 ">
          <h2 className="text-5xl lg:text-6xl font-semibold text-white">
            Nature{" "}
            <span className="inline-block w-16 relative bg-yellow-200">
              <img src={leaf} alt="" className=" absolute -top-16  right-0" />
            </span>
          </h2>
          <p className="text-lg text-[#EEEEEE]">
            a compalling tagline that convays the idea of efficiency
            effectiveness in finding what you need. it suggests that instead of
            wasting time search aimlessly.{" "}
          </p>
        </div>
        <div className="w-full lg:w-[30%] h-[30vmax] bg-red-300 rounded-3xl overflow-hidden">
          <img src={photo2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-[40%] h-[30vmax] bg-green-300 rounded-3xl overflow-hidden">
          <img src={photo1} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between px-10 py-2 gap-4 lg:gap-0">
        <div className="w-full lg:w-[30%] h-[30vmax] bg-red-300 rounded-3xl overflow-hidden">
          <img src={photo4} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:w-[35%] h-[30vmax] bg-green-300 rounded-3xl overflow-hidden">
          <img src={photo3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col w-full lg:w-[30%] justify-center gap-4 ">
          <h2 className="text-5xl lg:text-6xl font-semibold text-white">
            Adventure{" "}
            <span className="inline-block w-16 relative bg-yellow-200">
              <img
                src={adventure}
                alt=""
                className=" absolute -top-8 lg:-top-16  right-0"
              />
            </span>
          </h2>
          <p className="text-lg text-[#EEEEEE] mt-4 lg:mt-0">
            a compalling tagline that convays the idea of efficiency
            effectiveness in finding what you need. it suggests that instead of
            wasting time search aimlessly.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NatureAdventureSection;
