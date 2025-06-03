import React, { useEffect, useState } from "react";
import Lenis from "lenis";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NoMatch from "./pages/NoMatch";
import { Outlet, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

const App = () => {
  // lenis code in useEffect
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <div className="w-full font-Montserrat">
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/admin" element={<Admin />} />
          {/* Using path="*"" means "match anything", so this route
        acts like a catch-all for URLs that we don't have explicit
        routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
       
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
