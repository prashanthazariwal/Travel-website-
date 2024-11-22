import React from "react";
import { createPortal } from "react-dom";
import BookACallForm from "./BookACallForm";
import { CgCloseR } from "react-icons/cg";

const BookingModal = ({ modalHandeler }) => {
  
 
    
  return createPortal(
    <>
      <div className="w-full h-screen  bg-slate-900 bg-opacity-70 z-10 fixed top-0 text-white">
        <div className="md:w-fit bg-slate-100 rounded-lg  h-screen md:h-fit overflow-scroll md:overflow-hidden fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ">
          <div className="w-full h-full p-4 flex flex-col gap-10">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-black text-base md:text-lg font-semibold">Travel your Dream Place!</h1>
              <button
                onClick={modalHandeler}
                className="px-3 py-1 text-sm md:text-base text-red-500 "
              >
                <CgCloseR size={25}/>
              </button>
            </div>

            <BookACallForm modalHandeler = {modalHandeler}/>
            
          </div>
        </div>
      </div>
    </>,
    document.querySelector("#bookingModal")
  );
};

export default BookingModal;
