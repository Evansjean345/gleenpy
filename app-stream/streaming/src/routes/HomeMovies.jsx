import React, { useRef, useState } from "react";
import HeroMovies from "../components/HeroMovies";
import SliderAnimatedMovies from "../components/SliderAnimatedMovies";
import SliderAnime from "../components/SliderAnime";
import SliderHF from "../components/SliderHF";
import Footer from "../layout/Footer";
import "../index.css";
import SliderNovelas from "../novelas/SliderNovelas";
import SliderAfrican from "../african/SliderAfrican";
import SliderNollywood from "../nollywood/SliderNollywood";
import SliderComedie from "../comedie/ComedieSlider";
import SliderNetflix from "../netflix/SliderNetflix";
import SliderPrime from "../prime/SliderPrime";
import Navbar from "../layout/Navbar";

export default function HomeMovies() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <div className="bg-black m-0 p-0 h-[100vh] w-full">
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <div className="btn-group flex justify-center w-full sm:gap-x-12 gap-x-2   bg-black">
          <div className="bg-red-700 rounded-md">
            <button
              onClick={() => {
                setActiveSection("netflix");
              }}
              className=" text-xs p-1
               rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              NETFLIX
            </button>
          </div>
          <div className="bg-red-700 rounded-md">
            <button
              onClick={() => {
                setActiveSection("prime");
              }}
              className="hover:bg-red-900 text-xs p-1 rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              PRIME
            </button>
          </div>
          <div className="bg-red-700 rounded-md">
            {" "}
            <button
              onClick={() => {
                setActiveSection("nollywod");
              }}
              className="hover:bg-red-900 text-xs p-1  rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              NOLLYWOOD
            </button>
          </div>
          <div className="bg-red-700 rounded-md">
            {" "}
            <button
              onClick={() => {
                setActiveSection("comedie");
              }}
              className="hover:bg-red-900 text-xs p-1 rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              COMEDIE
            </button>
          </div>
          <div className="bg-red-700 rounded-md">
            {" "}
            <button
              onClick={() => {
                setActiveSection(null);
              }}
              className="hover:bg-red-900 text-xs p-1 rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              TOUS LES FILMS
            </button>
          </div>
        </div>
        <br />
        <div className="bg-black">
          <HeroMovies />
          {activeSection === null && (
            <>
              <SliderNovelas />
              <br />
              <br />
              <section>
                <SliderNollywood />
              </section>
              <br />
              <br />
              <section>
                <SliderAfrican />
              </section>
              <br />
              <br />
              <section>
                <SliderComedie />
              </section>
              <br />
              <br />
              <section>
                <SliderNetflix />
              </section>
              <br />
              <br />
              <section>
                <SliderPrime />
              </section>
              <br />
              <br />
              {/*
          <SliderMovies />
          <br />
          <br /> */}
              <SliderHF />
              <br />
              <br />
              <SliderAnime />
              <br />
              <br />
              <SliderAnimatedMovies />
            </>
          )}
          {activeSection === "nollywod" && <SliderNollywood />}
          {activeSection === "comedie" && <SliderComedie />}
          {activeSection === "prime" && <SliderPrime />}
          {activeSection === "netflix" && <SliderNetflix />}
          <Footer />
        </div>
      </div>
    </>
  );
}
