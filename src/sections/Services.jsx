import React from "react";
import photo1 from "../assets/photo-1.jpg";
import photo2 from "../assets/photo-2.jpg";
import photo3 from "../assets/photo3.jpg";
import handshake from "../assets/handshake.png";
import work from "../assets/work.png";
import onlinepresence from "../assets/online-presence.png";
import experience from "../assets/experience.png";

const Services = () => {

    const services = [
        {
          icon: experience,
          service: "A Decade of Expertise",
          eleboration:
            "With 10 years of nevigating the globe , our seasoned team has honed the art curating seamless travel experience . We know the ins and outs of each destination , ensuring every trip is a masterpiece",
        },
        {
          icon: onlinepresence,
          service: "Global Presence",
          eleboration:
            "With a global footprint, our reach extends to the far corners of the earth. wherever your heart desires, we're there to transform your travel aspirations into reality", 
        },
        {
          icon: work,
          service: "Tailored Experiences",
          eleboration:
            "Your travel dreams are unique. Our bespoke itineraries cater to diverse taste, ensuring a personalized journey that resonates with your wonderlust.",
        },
        {
          icon: handshake,
          service: "Trusted Partnership",
          eleboration:
            "Over the years, we've build lasting partnerships with hotels, airlines and local guides. These connectios translate into exclusive perks and  insider access , elevating your travel experience",
        },
      ];

  return (
    <div className="w-full px-5 lg:px-10 bg-[#121212] pt-40">
      <div className="flex flex-col bg-[#EEEEEE] rounded-tl-[4vmax] rounded-tr-[20vmax] rounded-b-[4vmax] pt-20 lg:pt-40">
        <div className="flex flex-col lg:flex-row w-full lg:w-[90%]  mx-auto items-center justify-between">
          <h2 className=" w-full lg:w-1/2 text-5xl lg:text-9xl font-semibold">
            Our <br /> Services
          </h2>
          <div className=" hidden  w-fit lg:flex flex-col mr-8 ">
            <div className="w-40 h-8 flex relative self-end">
              <div className="w-32 h-32 absolute z-40 top-0 -left-52 text-4xl rounded-full bg-blue-500 text-white flex items-center justify-center  overflow-hidden">
                90+
              </div>
              <div className="w-32 h-32 rounded-full z-30  overflow-hidden absolute top-0 -left-36">
                <img
                  src={photo1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-32 rounded-full z-20  overflow-hidden absolute top-0 -left-20">
                <img
                  src={photo2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-32 rounded-full z-10 overflow-hidden  absolute top-0 left-0">
                <img
                  src={photo3}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
            <p className="text-xl text-justify mt-32 mr-16  capitalize text-black">
              Embracing the latest in travel technology, we <br /> ensure that
              your journey is not seamless but <br /> also enhanced with
              cutting-edge feature that <br /> redefine your travel experience.
            </p>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="flex flex-wrap gap-6 w-[90%]  mx-auto items-center py-10 lg:py-36 justify-center">
          {services.map((card, i) => (
            <div
              key={i}
              className="card shrink-0 w-full lg:w-[45%] lg:h-[34vh] bg-white flex flex-col lg:flex-row justify-center rounded-3xl gap-8 p-8 "
            >
              <img src={card.icon} alt="" className="w-10 h-10" />
              <div className=" w-full lg:w-[70%] flex flex-col gap-3">
                <h2 className="text-3xl font-semibold">{card.service}</h2>
                <p className="text-base font-normal">{card.eleboration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
