import { Formik } from "formik";
import React from "react";
import { createPortal } from "react-dom";
import BookACallForm from "./BookACallForm";

const BookingModal = ({ modalHandeler }) => {
  

  return createPortal(
    <>
      <div className="w-full h-screen bg-slate-900 bg-opacity-70 z-10 fixed top-0 text-white">
        <div className="w-fit bg-slate-100 rounded-lg h-fit fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <div className="w-full h-full p-4 flex flex-col gap-10">
            <div className="w-full flex  justify-between">
              <h1 className="text-blue-500 text-lg font-semibold">Travel your Dream Place!</h1>
              <button
                onClick={modalHandeler}
                className="px-3 py-1 rounded-lg bg-red-500 text-white"
              >
                close
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
