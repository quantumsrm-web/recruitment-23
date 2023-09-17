import React from "react";
import Logo from "./Assests/Logo.png";

const Landing = () => {
  return (
    <div className="text-white mx-auto" name="landing">
      <div className="flex justify-between absolute top-0 left-auto right-auto w-screen p-7">
        <div className="flex items-center">
          <span>
            <img
              src={Logo}
              alt="SQCC Club Logo"
              className="w-16"
              // h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14
            />
          </span>
          <span>
            <h2 className="ml-4 lg:text-[24px] font-bold hidden sm:block">
              SRM QUANTUM COMPUTING CLUB
            </h2>
          </span>
        </div>
        <div
          className="flex items-center justify-center"
          onClick={() =>
            window.open("https://forms.gle/k2YQrn623WpfwiDN8", "_blank")
          }
        >
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-5 py-2 md:py-2 md:px-8 cursor-pointer border-b-4 border-blue-700 hover:border-blue-500 rounded-lg appearance-none duration-150">
            APPLY
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="text-[48px] md:text-4xl lg:text-[85px] font-bold  text-center">
          RECRUITMENTS 2023
        </h1>

      </div>

    
    </div>
  );
};

export default Landing;
