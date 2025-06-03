import React from "react";
import innovation from "../assets/innovation.png";
import hour from "../assets/24hours.png";
import upcycling from "../assets/upcycling.png";

const WhyUs = () => {
  return (
    <div className="w-full  px-5 lg:px-20 py-20 bg-[#121212] flex  flex-col ">
      <h2 className="text-[8vmax] font-semibold text-white text-right mr-16">
        Why Us
      </h2>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-2 mt-10">
        {[
          {
            id: 1,
            icon: hour,
            h2: "personalized service",
            discription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odit minus voluptatum provident, repudiandae, deserunt laudantium dolorem ratione suscipit nihil culpa laboriosam debitis sit ipsa blanditiis necessitatibus temporibus ipsum quisquam. ",
          },
          {
            id: 2,
            icon: innovation,
            h2: "innovaton in  travel",
            discription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odit minus voluptatum provident, repudiandae, deserunt laudantium dolorem ratione suscipit nihil culpa laboriosam debitis sit ipsa blanditiis necessitatibus temporibus ipsum quisquam. ",
          },
          {
            id: 3,
            icon: upcycling,
            h2: "sustainable travel",
            discription:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odit minus voluptatum provident, repudiandae, deserunt laudantium dolorem ratione suscipit nihil culpa laboriosam debitis sit ipsa blanditiis necessitatibus temporibus ipsum quisquam. ",
          },
        ].map((item) => (
          <div
            key={item.id}
            className={` w-full lg:w-fit h-fit bg-[#0180F5] flex flex-col  py-10  px-10 rounded-tr-[8rem] rounded-[2rem] gap-4 lg:gap-8 ${
              item.id == 2 ? "relative top-32 bg-[#54ADFF] " : ""
            }  ${
              item.id == 3
                ? "relative top-60 bg-[#FFFFFF] text-black"
                : "text-white"
            }`}
          >
            <img src={item.icon} alt="" className="w-20 h-20 object-contain" />
            <h2 className="text-[3vmax] w-[20rem] leading-none font-semibold capitalize">
              {item.h2}
            </h2>
            <p className=" w-full lg:w-80 text-base text-justify font-medium">
              {item.discription}
            </p>
          </div>
        ))}
      </div>
      <p className=" w-full lg:w-1/2 text-justify text-sm font-normal text-white mt-72 lg:mt-40">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        assumenda aspernatur omnis, cum officiis consequuntur accusantium
        laboriosam perspiciatis aperiam expedita veniam distinctio dicta aliquid
        vitae, reprehenderit eaque laudantium corrupti iure ea ducimus nulla.
        Quisquam assumenda facere sint placeat aut commodi!
      </p>
    </div>
  );
};

export default WhyUs;
