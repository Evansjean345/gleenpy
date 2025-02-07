import React from "react";
import "../index.css";

export default function HeroLyrics() {
  return (
    <>
      <div
        className="hero h-[60vh] relative"
        style={{
          backgroundImage: `url("https://www.lebabi.net/mfupdata/1483613783img7219.jpg")`,
        }}
      >
        <div className=" absolute bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-12  pl-4 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]">
          <div id="div-trailer-movies-one">
            <h1 className="sm:text-3xl text-xl">
              <b>
                Découvrez les dernières tendances des hommes de DIEU en exclu
                sur NEXTDEO
              </b>
            </h1>
          </div>
          <div id="div-trailer-movies-two">
            <h1 className="sm:text-3xl text-xl">
              <b>
                Découvrez les dernières tendances
                <br />
                des hommes de DIEU en exclu sur NEXTDEO
              </b>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
