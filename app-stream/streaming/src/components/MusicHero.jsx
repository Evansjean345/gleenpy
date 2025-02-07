import React from "react";
import "../index.css";

export default function MusicHero() {
  return (
    <div
      className="hero h-[60vh] relative"
      style={{
        backgroundImage: `url("https://thefader-res.cloudinary.com/private_images/w_640,c_limit/mia4_vm2jgt/bad-bunny-drakes-mia-video-gifs.gif")`,
      }}
    >
      <div className=" absolute bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-12  pl-4 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]">
        <div id="div-trailer-movies-one">
          <h1 className="sm:text-3xl text-xl">
            <b>Ecouter les sons de vos artistes préférés sur NEXTDEO</b>
          </h1>
        </div>
        <div id="div-trailer-movies-two">
          <h1 className="sm:text-3xl text-xl">
            <b>
              Ecouter les sons de 
              <br />
              vos artistes préférés sur NEXTDEO
            </b>
          </h1>
        </div>
      </div>
    </div>
  );
}
