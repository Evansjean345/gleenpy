import React, { useState } from "react";
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
import ItemsNollywood from "../components/ItemsNollywood";
import ItemsPrime from "../components/ItemsPrime";
import ItemsComedie from "../components/ItemsComedie";
import ItemsNetflix from "../components/ItemsNetflix";
import ItemsChild from "../components/ItemsChild";

export default function HomeMovies() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>
      <div className="bg-black m-0 p-0 h-[100vh] w-full">
        <Navbar />
        <br />
        <br />
        <br />
        <div className="btn-group sm:mt-1 flex justify-center w-full sm:gap-x-10 gap-x-4   bg-black">
          <div className="rounded-md">
            <button
              className=" text-xs flex gap-[2px] sm:gap-1 items-center justify-center
               rounded-lg text-white hover:text-gray-100 sm:p-1  active:bg-white active:text-black"
            >
              <span className="font-bold">CI</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3054/3054001.png"
                alt=""
                className="h-4 w-4 rounded-full"
              />
            </button>
          </div>
          <div className="rounded-md">
            <button
              className=" text-xs flex gap-[2px] sm:gap-1 items-center justify-center
               rounded-lg text-white hover:text-gray-100 sm:p-1  active:bg-white active:text-black"
            >
              <span className="font-bold">BK</span>

              <img
                src="https://www.larousse.fr/encyclopedie/data/images/1009471-Drapeau_du_Burkina.jpg"
                alt=""
                className="h-4 w-4 rounded-full"
              />
            </button>
          </div>
          <div className="rounded-md">
            <button
              className=" text-xs flex gap-[2px] sm:gap-1 items-center justify-center
               rounded-lg text-white hover:text-gray-100 sm:p-1  active:bg-white active:text-black"
            >
              <span className="font-bold">SG</span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPsk2aAkade-UXP40fuWYrgkfd3brOBNkVg&s"
                alt=""
                className="h-4 w-4 rounded-full"
              />
            </button>
          </div>
          <div className="rounded-md">
            <button
              className=" text-xs flex gap-[2px] sm:gap-1 items-center justify-center
               rounded-lg text-white hover:text-gray-100 sm:p-1  active:bg-white active:text-black"
            >
              <span className="font-bold">NG</span>
              <img
                src="https://us.123rf.com/450wm/viktorijareut/viktorijareut1602/viktorijareut160200185/51954767-vector-illustration-vecteur-drapeau-nigeria-ic%C3%B4ne-drapeau-national-ronde-du-nigeria-nigeria-flag.jpg"
                alt=""
                className="h-4 w-4 rounded-full"
              />
            </button>
          </div>
          <div className="rounded-md">
            <button
              className=" text-xs flex gap-[2px] sm:gap-1 items-center justify-center
               rounded-lg text-white hover:text-gray-100 sm:p-1  active:bg-white active:text-black"
            >
              <span className="font-bold">GH</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/323/323274.png"
                alt=""
                className="h-4 w-4 rounded-full"
              />
            </button>
          </div>
          <div className="rounded-md">
            <button
              className=" text-xs flex gap-[2px] sm:gap-1 items-center justify-center
               rounded-lg text-white hover:text-gray-100 sm:p-1  active:bg-white active:text-black"
            >
              <span className="font-bold">SA</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3909/3909408.png"
                alt=""
                className="h-4 w-4 rounded-full"
              />
            </button>
          </div>
        </div>
        <div className="btn-group flex mt-2 sm:mt-1 justify-center w-full sm:gap-x-12 gap-x-1   bg-black">
          <div className="bg-red-700 rounded-md">
            <button
              onClick={() => {
                setActiveSection("netflix");
              }}
              className=" text-xs p-[2px]
               rounded-lg text-white hover:text-gray-100 sm:p-1  active:bg-white active:text-black"
            >
              NETFLIX
            </button>
          </div>
          <div className="bg-red-700 rounded-md">
            <button
              onClick={() => {
                setActiveSection("prime");
              }}
              className="hover:bg-red-900 text-xs p-[2px] sm:p-1  rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              PRIME
            </button>
          </div>
          <div className="bg-red-700 rounded-md">
            {" "}
            <button
              onClick={() => {
                setActiveSection("nollywood");
              }}
              className="hover:bg-red-900 text-xs p-[2px] sm:p-1   rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
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
              className="hover:bg-red-900 text-xs p-[2px] sm:p-1  rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              COMEDIE
            </button>
          </div>
          <div className="bg-red-700 rounded-md">
            {" "}
            <button
              onClick={() => {
                setActiveSection("child");
              }}
              className="hover:bg-red-900 text-xs p-[2px] sm:p-1  rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              ENFANTS
            </button>
          </div>
          <div className="bg-red-700 rounded-md">
            {" "}
            <button
              onClick={() => {
                setActiveSection(null);
              }}
              className="hover:bg-red-900 text-xs p-[2px] sm:p-1 rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
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
          {activeSection === "nollywood" && <ItemsNollywood />}
          {activeSection === "comedie" && <ItemsComedie />}
          {activeSection === "prime" && <ItemsPrime />}
          {activeSection === "netflix" && <ItemsNetflix />}
          {activeSection === "child" && <ItemsChild />}
          <Footer />
        </div>
      </div>
    </>
  );
}
