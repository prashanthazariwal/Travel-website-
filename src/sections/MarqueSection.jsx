import React from "react";
import flight from "../assets/flight.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MarqueSection = () => {
  useGSAP(function () {
    gsap.to(".marque", {
      x: "-100%",
      duration: 5,
      ease: "linear",
      repeat: -1,
    });
  });
  return (
    <div className="w-full bg-[#121212] flex py-10 lg:py-40 gap-2">
      <h2 className="marque text-[14vmax] font-bold text-[#EEEEEE] flex gap-4">
        ToGo{" "}
        <span className="inline-block w-[14vmax] relative">
          <img
            src={flight}
            alt=""
            className="w-[14vmax] absolute top-10 lg:top-14 right-0"
          />
        </span>{" "}
        <span className="font-semibold text-white">Places</span>{" "}
        <span className="inline-block w-[14vmax] relative">
          <img
            src={flight}
            alt=""
            className="w-[14vmax] absolute top-10 lg:top-14 right-0"
          />
        </span>{" "}
      </h2>
      <h2 className="marque text-[14vmax] font-bold text-[#EEEEEE] flex gap-2">
        ToGo{" "}
        <span className="inline-block w-[14vmax] relative">
          <img
            src={flight}
            alt=""
            className="w-[14vmax] absolute top-10 lg:top-14  right-0"
          />
        </span>{" "}
        <span className="font-semibold text-white">Places</span>{" "}
        <span className="inline-block w-[14vmax] relative">
          <img
            src={flight}
            alt=""
            className="w-[14vmax] absolute top-10 lg:top-14 right-0"
          />
        </span>{" "}
      </h2>
    </div>
  );
};

export default MarqueSection;
