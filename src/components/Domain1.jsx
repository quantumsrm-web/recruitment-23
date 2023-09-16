import React from "react";
import AIML from "../assets/AI_ML.svg";
import corporate from "../assets/Corporate.svg";
import creatives from "../assets/Creatives.svg";
import Quantum from "../assets/Quantum.svg";
import webdev from "../assets/Web Dev.svg";

function Domain1() {
  return (
    <div className=" text-white">
      <div className="mx-auto font-bold flex text-3xl md:text-5xl items-center justify-center pb-20 bold">
        DOMAINS
      </div>
      <div className="flex flex-col w-screen h-auto items-center justify-center">
        {/* core quantum */}
        <div className=" text-center md:text-start flex flex-col sm:flex-col md:flex-row w-[90vw] sm:w-[80vw] md:w-[70vw] gap-20 my-20 items-center mb-20 shadow-[0_0_10px_1px_rgba(0,0,0)] backdrop-blur-xl rounded-xl p-4">
          <img src={Quantum} alt="quantum" className="sm:w-40 md:w-80" />
          <div>
            <div className="text-3xl p-2 pb-10 md:text-5xl">Quantum</div>
            <p>
              Our club is a quantum hub where technical expertise meets
              curiosity. We explore quantum computing intricacies, dissect
              complex algorithms, and delve into quantum mechanics. As a
              collective, we experiment with quantum tools and languages, aiming
              for quantum supremacy in the NISQ era. Through workshops,
              challenges, and research, we seek quantum enlightenment.
            </p>
          </div>
        </div>

        {/* AI-ML */}
        <div className=" text-center md:text-start flex flex-col sm:flex-col md:flex-row-reverse w-[90vw] sm:w-[80vw] md:w-[70vw] gap-20 my-20 items-center mb-20 shadow-[0_0_10px_1px_rgba(0,0,0)] backdrop-blur-xl rounded-xl p-4 md:py-10">
          <img src={AIML} alt="quantum" className="sm:w-40 md:w-80" />
          <div>
            <div className="text-3xl p-2 pb-10 md:text-5xl">AI - ML</div>
            <p>
              In our AI-ML domain, we explore Quantum Machine Learning (QML),
              where quantum computing intersects with machine learning. Quantum
              machines operate under quantum theory, unlocking new possibilities
              in data processing and algorithm development. Our platform
              provides a unique avenue for members to delve into quantum
              algorithms, optimization, and data analysis, with the collective
              goal of harnessing this technology's full potential for a
              transformative shift in artificial intelligence and machine
              learning.
            </p>
          </div>
        </div>

        {/* Web Development */}
        <div className=" text-center md:text-start flex flex-col sm:flex-col md:flex-row w-[90vw] sm:w-[80vw] md:w-[70vw] gap-20 my-20 items-center mb-20 shadow-[0_0_10px_1px_rgba(0,0,0)] backdrop-blur-xl rounded-xl p-4">
          <img src={webdev} alt="quantum" className="sm:w-40 md:w-80" />
          <div>
            <div className="text-3xl p-2 pb-10 md:text-5xl">
              Web Development
            </div>
            <p>
              In our Web Development Domain, we focus on shaping our digital
              presence through design, maintenance, and optimization for
              user-friendly experiences. As a member, you'll collaborate on
              integrating visuals, technical content, and promotions, nurturing
              web development skills that benefit both the club and your
              personal growth.
            </p>
          </div>
        </div>

        {/* Corporate */}
        <div className=" text-center md:text-start flex flex-col sm:flex-col md:flex-row w-[90vw] sm:w-[80vw] md:w-[70vw] gap-20 my-20 items-center mb-20 shadow-[0_0_10px_1px_rgba(0,0,0)] backdrop-blur-xl rounded-xl p-4 md:py-10">
          <img src={corporate} alt="quantum" className="sm:w-40 md:w-80" />
          <div>
            <div className="text-3xl p-2 pb-10 md:text-5xl">Corporate</div>
            <p>
              In our Corporate Domain, we secure funding and industry
              connections, bridging our club with partners, sponsors, and
              donors. This support ensures our financial stability and
              professional networks. Whether you're into fundraising,
              networking, or corporate relationships, this domain lets you make
              a significant impact and gain valuable career experience.
            </p>
          </div>
        </div>

        {/* Creatives */}
        <div className=" text-center md:text-start flex flex-col sm:flex-col md:flex-row-reverse w-[90vw] sm:w-[80vw] md:w-[70vw] gap-20 my-20 items-center mb-20 shadow-[0_0_10px_1px_rgba(0,0,0)] backdrop-blur-xl rounded-xl p-4">
          <img src={creatives} alt="quantum" className="sm:w-40 md:w-80" />
          <div>
            <div className="text-3xl p-2 pb-10 md:text-5xl">Editorial</div>
            <p>
              Our Editorial Domain is a creative hub where members curate
              diverse content in two sub-domains. In the 'Creative subdomain,'
              we design visually stunning materials to promote club events. In
              the 'content' subdomain, we provide in-depth analyses and
              technical content on quantum computing for our social media
              presence. Whether your interest lies in design or technical
              content, our Editorial Domain welcomes your contributions to our
              creative and technical community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domain1;
