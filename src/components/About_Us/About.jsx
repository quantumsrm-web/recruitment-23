import React from "react";

const About = () => {
  return (
    <div className="min-h-screen h-full pb-40 md:pb-0 flex flex-col items-center justify-center gap-12 ">
      <div>
        <div className="flex text-[#ffffff] font-bold text-[36px] lg:text-[48px] justify-center text-shadow mb-8">
          ABOUT
        </div>
        <div className="max-w-[75vw]  leading-7 mx-auto p-4 md:p-14 text-[#ffffff] text-center text-base md:text-xl tracking-tighter sm:tracking-tight md:tracking-normal shadow-[0_0_10px_1px_rgba(0,0,0)] backdrop-blur-xl rounded-xl">
          The SRM Quantum Computing Club is a dynamic student organization at
          SRM University, united by a passion for quantum computing. Through
          engaging workshops and interactive sessions, we explore quantum
          mechanics, algorithms, and practical applications. Hands-on learning
          with cutting-edge platforms like Qiskit and Cirq enhances our
          problem-solving skills and understanding. Guest lectures and industry
          interactions keep us updated with the latest advancements. Our
          inclusive environment welcomes students from all disciplines,
          fostering lasting friendships and professional connections. We are
          excited about the potential of quantum computing to shape the future
          and drive innovation. Together, we embrace the challenges and
          opportunities on this inspiring journey.
        </div>
      </div>
    </div>
  );
};

export default About;
