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


        <div className="mt-60 mx-auto"> 
          <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">RECRUITMENTS 2023</h1>
          <p className="mt-16 w-2/3 ">Lorem ispum dolor sit amet, consecuter dispiscing elit, sed do eiusmod tempor indicutant ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem ispum dolor sit amet, consecuter adispiscing elit, sed do eiusmod tempor indicutant ut labore et dolore 

</p>
        </div>


      </div>
    </div>
  );
};

export default Landing;
