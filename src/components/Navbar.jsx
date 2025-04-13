import { RiCloseLargeLine, RiMenu3Fill } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import { motion } from "motion/react";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [modelOpen, setModelOpen] = useState(false);

  const modalHandeler = () => {
    setModelOpen(!modelOpen);
  };

  useEffect(() => {
    if (modelOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [modelOpen]);

  return (
    <>
      {modelOpen && <BookingModal modalHandeler={modalHandeler} />}

      <motion.nav
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
      className="hidden w-full px-20 py-2 sm:flex justify-between mt-4 items-center fixed z-10  select-none">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">TO GO</h1>
        <ul className="flex text-sm md:text-base lg:text-xl font-normal text-[#868687] gap-4 md:gap-8 lg:gap-20 ml-16 p-2">
          {[
            { navItem: "Services", navLink: "#Services" },
            { navItem: "Case Studies", navLink: "#Reviews" },
            { navItem: "Contact", navLink: "#Contact" },
          ].map((nav) => {
            return (
              <li
                key={nav.navItem}
                className="cursor-pointer active:font-semibold active:scale-95"
              >
                {" "}
                <a href={nav.navLink}>{nav.navItem}</a>
              </li>
            );
          })}
          {/* <li className="cursor-pointer active:font-semibold active:scale-95">Services</li>
        <li className="cursor-pointer active:font-semibold active:scale-95">Case Studies</li>
        <li className="cursor-pointer active:font-semibold active:scale-95">Contact</li> */}
        </ul>
        <button
          onClick={modalHandeler}
          className="bg-blue-500 text-sm md:text-base lg:text-lg font-normal text-white px-5 md:px-8 lg:px-12 py-2 rounded-full cursor-pointer active:scale-95
       ease-linear "
        >
          Book A Call
        </button>
      </motion.nav>
      <div
        className={`sm:hidden w-[10%] ${
          sideBar ? "hidden" : "flex"
        } flex items-center fixed right-8 top-4 z-50`}
      >
        <button
          onClick={() => {
            setSideBar(!sideBar);
          }}
          className="px-3 py-3 lg:hidden rounded-full cursor-pointer active:scale-95"
        >
          <RiMenu3Fill size={25} />
        </button>
      </div>

      {sideBar && (
        <div className="sideBar w-[45%] h-screen bg-[#F8F7FC] bg-opacity-95 fixed top-0 right-0 flex flex-col gap-6 px-4 md:px-8 py-4 z-50">
          <button
            onClick={() => {
              setSideBar(!sideBar);
            }}
            className="w-fit h-fit px-3 py-3 mb-5 rounded-full cursor-pointer active:scale-95"
          >
            <RiCloseLargeLine size={25} />
          </button>
          {[
            { title: "Home", nav: "#Home" },
            { title: "Services", nav: "#Services" },
            { title: "Case Studies", nav: "#CaseStudies" },
            { title: "Contact", nav: "#Contact" },
          ].map((item) => {
            return (
              <span
                key={item.title}
                className="inline-block nav cursor-pointer text-lg md:text-lg w-fit hover:border-b-2"
              >
                <a
                  onClick={() => {
                    setSideBar(!sideBar);
                  }}
                  href={item.nav}
                >
                  {item.title}
                </a>
              </span>
            );
          })}

          <button
            onClick={()=>{
              modalHandeler()
              setSideBar(!sideBar);
            }}
            className="bg-blue-500 text-sm md:text-base lg:text-lg font-normal text-white px-5 md:px-8 lg:px-12 py-2 rounded-full cursor-pointer active:scale-95
       ease-linear "
          >
            Book A Call
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
