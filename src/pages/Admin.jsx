import React, { useState } from "react";
import loginImg from "../assets/password.png";
import Users from "./Users";


const Admin = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [users, setUser] = useState([]);

  

  const handelSubmit = (e) => {
    e.preventDefault();
    setUser((prev) => [...prev, loginDetails]);
    
  };

  const foundUser = users.some(
    (user) =>
      user.email === "prashanthazariwal999@gmail.com" &&
      user.password === "123456"
  );

  return (
    <div className="h-screen font-bold">
      
      {foundUser ? (
        <Users/>
      ) : (
        <div
          id="login"
          className="w-1/4 text-left flex flex-col p-4 relative top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-lg bg-slate-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        >
          {/* <img src={loginImg} alt="" className="w-1/5 mx-auto mb-5" /> */}
          <h1 className="mb-10">TOGO</h1>
          <h2 className="text-4xl font-semibold">Welcome back</h2>
          <p className="my-5 text-2xl  font-semibold">Please enter your details to sign In..</p>

          <form onSubmit={handelSubmit} className="flex flex-col gap-2 ">
            <input
              value={loginDetails.email}
              onChange={(e) => {
                setLoginDetails((prev) => ({ ...prev, email: e.target.value }));
              }}
              type="email"
              name=""
              id="email"
              className="border-2 rounded-lg text-sm font-semibold px-3 py-2"
              placeholder="Enter Your Email..."
            />
            <input
              value={loginDetails.password}
              onChange={(e) => {
                setLoginDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
              type="password"
              name=""
              id="password"
              className="border-2 rounded-lg text-sm font-semibold px-3 py-2"
              placeholder="password..."
            />
            <input
              type="submit"
              value="Sign in"
              className="bg-neutral-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full rounded-lg px-2 py-1 mx-auto active:scale-95 text-white"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;
