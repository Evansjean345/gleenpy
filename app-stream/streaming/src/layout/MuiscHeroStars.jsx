import React from "react";
import "../index.css";

export default function MusicHeroStars() {
  return (
    <>
      <div
        className="hero h-[60vh] relative"
        style={{
          backgroundImage: `url("https://media3.giphy.com/media/l4FGqV8mIeBm2HjLa/giphy.gif")`,
        }}
      >
        <div className=" absolute bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-12  pl-4 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]">
          <div id="div-trailer-movies-one">
            <h1 className="sm:text-3xl text-xl">
              <b>
                Retrouvez
                <br />
                Les meilleurs
                <br />
                sons de vos stars ici
              </b>
            </h1>
          </div>
          <div id="div-trailer-movies-two">
            <h1 className="sm:text-3xl text-xl">
              <b>
                Retrouvez les
                <br />
                les meilleurs sons de vos stars ici
              </b>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
