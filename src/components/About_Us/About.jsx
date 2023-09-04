import React from "react";

const About = () => {
  return (
    <div className="min-h-screen max-h-auto flex flex-col items-center justify-center gap-12 bg-black">
      <div>
        <div className="flex text-[#ffffff] font-bold text-5xl lg:text-6xl justify-center text-shadow mb-8">
          ABOUT
        </div>
        <div className="max-w-[75%] leading-7 mx-auto text-[#ffffff] text-center text-base md:text-xl tracking-tighter sm:tracking-tight md:tracking-normal">
          Lorem ispum dolor sit amet, consecuter dispiscing elit, sed do eiusmod
          tempor indicutant ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud. Lorem ispum dolor sit amet, consecuter
          adispiscing elit, sed do eiusmod tempor indicutant ut labore et
          dolore.Lorem ispum dolor sit amet, consecuter dispiscing elit, sed do
          eiusmod tempor indicutant ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud. Lorem ispum dolor sit amet, consecuter
          adispiscing{" "}
        </div>
      </div>
    </div>
  );
};

export default About;