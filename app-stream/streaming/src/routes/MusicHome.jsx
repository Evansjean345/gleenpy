import { React, useState } from "react";
import MusicHero from "../components/MusicHero";
import Footer from "../layout/Footer";
import "../index.css";
import SliderUS from "../musicUS/SliderUS";
import SliderFR from "../musicFR/SliderFR";
import SliderPop from "../musicPop/SliderPop";
import SliderIV from "../musicIvoire/SliderIV";
import SliderAfro from "../musicAfro/SliderAfro";
import SliderCoupe from "../musicCoupe/SliderCoupe";
import SliderZouglou from "../musicZouglou/SliderZouglou";
import SliderRumba from "../musicRumba/SliderRumba";
import SliderGospel from "../musicGospel/SliderGospel";
import SliderRagga from "../musicRagga/SliderRaggae";
import SliderAll from "../musicAllStars/SliderAll";
import SliderHerbe from "../musicEnHerbe/SliderHerbe";
import MusicHeroStars from "../layout/MuiscHeroStars";
import MusicHeroGrass from "../layout/MusicHeroGrass";
import Navbar from "../layout/Navbar";

export default function MusicHome() {
  const [allstars, setAllstars] = useState(false);
  const [grass, setGrass] = useState(false);

  return (
    <>
      <div className="bg-black m-0 p-0 h-[100vh] w-full">
        <Navbar />
        <br />
        <br />
        <br />
        <div
          className="btn-group flex w-full justify-center  sm:gap-x-16 gap-x-20
         bg-black"
        >
          <div className="w-[50%] flex justify-end ">
            <button
              onClick={() => {
                setAllstars(!allstars);
                setGrass(false);
              }}
              className="bg-red-700 p-2 text-xs  rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              CLIP
            </button>
          </div>
          <div className="w-[50%] ">
            {" "}
            <button
              onClick={() => {
                setGrass(!grass);
                setAllstars(false);
              }}
              className="bg-red-700 p-2 text-xs  rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              MP3
            </button>
          </div>
        </div>
        <br />
        <div className="bg-black">
          {!allstars && !grass ? (
            <div>
              <MusicHero />
              <SliderCoupe />
              <br />
              <SliderZouglou />
              <br />
              <SliderRumba />
              <br />
              <SliderAfro />
              <br />
              <SliderIV />
              <br />
              <SliderGospel />
              <br />
              <SliderRagga />
              <br />
              <SliderUS />
              <br />
              <SliderFR />
              <br />
              <SliderPop />
            </div>
          ) : (
            <div className={grass ? "hidden" : ""}>
              <MusicHeroStars />
              <SliderAll />
            </div>
          )}
          {!grass ? (
            <div></div>
          ) : (
            <div>
              <MusicHeroGrass />
              <SliderHerbe />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
