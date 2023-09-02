import React from "react"
import Quantum from "../assets/Quantum.svg"
import AIML from "../assets/AI_ML.svg"
import webdev from "../assets/Web Dev.svg"
function Domain1() {
  return (
    <div className="bg-black text-white">
      <div className="w-full h-auto flex items-center justify-center text-5xl  pb-20">
        DOMAINS
      </div>
      {/* core quantum */}
      <div className=" text-center sm:text-center md:text-start flex flex-col sm:flex-col md:flex-row px-20 sm:px-20 md:px-32  gap-5 sm:gap-5 md:gap-52 justify-between items-center pb-20">
        <img
          src={Quantum}
          alt="quantum"
          className="h-auto sm:h-auto md:h-[30rem]"
        />
        <div>
          <div className="bold text-5xl pb-10">Quantum</div>
          <p>
            Lorem ispum dolor sit amet, consecuter dispiscing elit, sed do
            eiusmod tempor indicutant ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Lorem ispum dolor sit amet,
            consecuter adispiscing elit, sed do eiusmod tempor indicutant ut
            labore et dolore{" "}
          </p>
        </div>
      </div>
      {/* AI-ML */}
      <div className=" text-center sm:text-center md:text-start flex flex-col sm:flex-col md:flex-row-reverse px-20 sm:px-20 md:px-32  gap-10 sm:gap-10 md:gap-52 justify-between items-center pb-20">
        <img
          src={AIML}
          alt="quantum"
          className="h-auto sm:h-auto md:h-[30rem]"
        />
        <div>
          <div className="bold text-5xl pb-10">AI-ML</div>
          <p>
            Lorem ispum dolor sit amet, consecuter dispiscing elit, sed do
            eiusmod tempor indicutant ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Lorem ispum dolor sit amet,
            consecuter adispiscing elit, sed do eiusmod tempor indicutant ut
            labore et dolore
          </p>
        </div>
      </div>
      {/* Web Development */}
      <div className=" text-center sm:text-center md:text-start flex flex-col sm:flex-col md:flex-row px-20 sm:px-20 md:px-32  gap-10 sm:gap-10 md:gap-52 justify-between items-center">
        <img src={webdev} alt="quantum" className="w-[30rem]" />
        <div>
          <div className="bold text-5xl pb-10">Web Dev</div>
          <p>
            Lorem ispum dolor sit amet, consecuter dispiscing elit, sed do
            eiusmod tempor indicutant ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Lorem ispum dolor sit amet,
            consecuter adispiscing elit, sed do eiusmod tempor indicutant ut
            labore et dolore{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Domain1
