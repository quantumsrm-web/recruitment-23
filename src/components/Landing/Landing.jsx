import React from "react";
import Logo from "./Assests/Logo.png";
import { directive } from "@babel/types";

const Landing = () => {
  return (
    // <div id="home" className="h-full bg-black">
    //   <div className="m-2 fixed flex items-center justify-between">
    //     <img
    //       src={Logo}
    //       alt="SQCC Club Logo"
    //       className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
    //     />
    //     <span className="ml-2 text-[#ffffff] font-bold text-xl">
    //       SRM QUANTUM COMPUTING CLUB
    //     </span>
    //   </div>
    // </div>
    <div className="h-screen bg-black text-white p-10 mx-auto">
      <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <img
            src={Logo}
            alt="SQCC Club Logo"
            className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
          />
          <h2 className="ml-2  font-bold text-xl ">
            SRM QUANTUM COMPUTING CLUB
          </h2>
        </div>

        <a href="https://forms.gle/k2YQrn623WpfwiDN8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10">
          Apply Now
        </button>
        </a>
      </div>


        <div className="mt-60 mx-auto">
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">RECRUITMENTS 2023</h1>
        </div>

        


      </div>
    </div>
  );
};

export default Landing;
