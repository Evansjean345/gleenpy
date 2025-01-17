import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

export default function MusicHome() {
  const [allstars, setAllstars] = useState(false);
  const [grass, setGrass] = useState(false);

  return (
    <>
      <div className="bg-black m-0 p-0 h-[100vh] w-full">
        <NavLink
          className="navbar bg-black fixed z-50
"
        >
          {/*Nav mobile version Start */}
          <div className="navbar-start">
            <div className="dropdown">
              {/*burger icon start */}
              <label
                tabIndex={0}
                className="btn text-white btn-ghost xl:hidden bg-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              {/*burger icon end*/}
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52"
              >
                <li>
                  <Link to="/" className="hover:bg-red-900">
                    Accueil
                  </Link>
                </li>
                <li tabIndex={0}>
                  <Link
                    to="/moviesHome"
                    className="justify-between hover:bg-red-900"
                  >
                    cinéma
                  </Link>
                </li>
                <li>
                  <Link
                    to="/musicsHome"
                    className="hover:bg-red-900 bg-red-700"
                  >
                    musique
                  </Link>
                </li>
                <li>
                  <Link to="/gagHome" className="hover:bg-red-900">
                    gag
                  </Link>
                </li>
                <li>
                  <Link to="/directHome" className="hover:bg-red-900">
                  Achat des oeuvres
                  </Link>
                </li>
                <li>
                  <Link to="/tvHome" className="hover:bg-red-900">
                    mes émissions TV
                  </Link>
                </li>
                <li>
                  <Link to="/lyricsHome" className="hover:bg-red-900">
                    paroles de vie
                  </Link>
                </li>
                <li>
                  <Link to="/abouts" className="hover:bg-red-900">
                    Partenaires
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/*Nav mobile version End */}

          {/*Nav PC version Start */}
          <div id="nav" className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 text-white">
              <li>
                <Link to="/" className="hover:bg-red-900">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/moviesHome" className="hover:bg-red-900">
                  cinéma
                </Link>
                <li className=" bg-black">
                  <Link
                    to="/musicsHome"
                    className="hover:bg-red-900 bg-red-700"
                  >
                    musique
                  </Link>
                </li>
              </li>
              <li>
                <Link to="/gagHome" className="hover:bg-red-900">
                  gag
                </Link>
              </li>
              <li>
                <Link to="/directHome" className="hover:bg-red-900">
                Achat des oeuvres
                </Link>
              </li>
              <li>
                <Link to="/tvHome" className="hover:bg-red-900">
                  mes Emissions TV
                </Link>
              </li>
              <li>
                <Link to="/lyricsHome" className="hover:bg-red-900">
                  Paroles de vie
                </Link>
              </li>
              <li>
                <Link to="/abouts" className="hover:bg-red-900">
                  Partenaires
                </Link>
              </li>
            </ul>
          </div>
          {/*Nav PC version End */}
          <div id="logo" className="navbar-end">
            <Link to="" className=" bg-black text-red-700 text-2xl font-bold ">
            NEXTDEO
            </Link>
          </div>
        </NavLink>
        <br />
        <br />
        <br />
        <br />
        <div className="btn-group flex w-full justify-center  sm:gap-x-16 gap-x-20
         bg-black">
          <div className="w-[45%] flex justify-end ">
            <button
              onClick={() => {
                setAllstars(!allstars);
                setGrass(false);
              }}
              className="hover:bg-red-900 text-md lg:hover:text-lg rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              All STARS
            </button>
          </div>
          <div className="w-[55%] ">
            {" "}
            <button
              onClick={() => {
                setGrass(!grass);
                setAllstars(false);
              }}
              className="hover:bg-red-900 text-md lg:hover:text-lg rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              EN HERBE
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
