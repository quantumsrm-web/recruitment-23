import React from "react";
import Logo from "./Assests/Logo.png";

const Landing = () => {
  return (
    <div id="home" className="h-full bg-black">
      <div className="m-2 fixed flex items-center justify-between">
        <img
          src={Logo}
          alt="SQCC Club Logo"
          className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
        />
        <span className="ml-2 text-[#ffffff] font-bold text-xl">
          SRM QUANTUM COMPUTING CLUB
        </span>
      </div>
    </div>
  );
};

export default Landing;
