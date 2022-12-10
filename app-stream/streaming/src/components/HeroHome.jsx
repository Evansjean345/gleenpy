import { useState, React } from "react";
import "../index.css";
import { Typewriter } from "react-simple-typewriter";




export default function HeroHome() {

  
  return (
    <>
      <header>
        <div className="relative h-full  w-full" id="video-container">
          <video
            id="video-trailer"
            className="object-cover sm:h-[510px] w-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/jck.mp4" type="video/mp4" />
          </video>
          <div
            className=" absolute  sm:pt-32 pt-64 sm:top-12 top-0 bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-20 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]"
            id="trailer-text"
          >
            <div className="  sm:pt-40 pt-16 sm:text-3xl text-xl font-semibold sm:font-bold">
              <Typewriter
                words={["EXCLUSIVITE SUR GLEENPY !"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              <br />
              <Typewriter
                words={[" SORTIE DU TOUT PREMIER SINGLE DE JCK BOSS"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
