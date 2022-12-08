import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
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

export default function HomeMovies() {
  const prime = useRef(null);
  const nollywood = useRef(null);
  const comedie = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
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
                    className="justify-between hover:bg-red-900 bg-red-700"
                  >
                    cinéma
                  </Link>
                </li>
                <li>
                  <Link to="/musicsHome" className="hover:bg-red-900 ">
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
                    partagez le direct
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
                <Link to="/moviesHome" className="hover:bg-red-900 bg-red-700">
                  cinéma
                </Link>
                <li className=" bg-black">
                  <Link to="/musicsHome" className="hover:bg-red-900">
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
                  partagez le direct
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
              Gleenpy
            </Link>
          </div>
        </NavLink>
        <br />
        <br />
        <br />
        <br />
        <div className="btn-group flex justify-center w-full sm:gap-x-20 gap-x-2 text-xs sm:text-base  bg-black">
          <div>
            <a
              href="https://www.netflix.com/ci/"
              className="flex items-center justify-center hover:bg-red-900 text-md lg:hover:text-lg rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              NETFLIX
            </a>
          </div>
          <div>
            <button
              onClick={() => {
                scrollToSection(prime);
              }}
              className="hover:bg-red-900 text-md lg:hover:text-lg rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              PRIME
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={() => {
                scrollToSection(nollywood);
              }}
              className="hover:bg-red-900 text-md lg:hover:text-lg rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              NOLLYWOOD
            </button>
          </div>
          <div>
            {" "}
            <button
              onClick={() => {
                scrollToSection(comedie);
              }}
              className="hover:bg-red-900 text-md lg:hover:text-lg rounded-lg text-white hover:text-gray-100 active:bg-white active:text-black"
            >
              COMEDIE
            </button>
          </div>
        </div>
        <br />
        <div className="bg-black">
          <HeroMovies />
          <SliderNovelas />
          <br />
          <br />
          <section ref={nollywood}>
            <SliderNollywood />
          </section>
          <br />
          <br />
          <section>
            <SliderAfrican />
          </section>
          <br />
          <br />
          <section ref={comedie}>
            <SliderComedie />
          </section>
          <br />
          <br />
          <section>
            <SliderNetflix />
          </section>
          <br />
          <br />
          <section ref={prime}>
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
          <Footer />
        </div>
      </div>
    </>
  );
}
