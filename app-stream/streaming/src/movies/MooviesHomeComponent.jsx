import { React, useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import Footer from "../layout/Footer";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import TabsMovies from "../layout/TabsMovies";
import { useEffect } from "react";
import Navbar from "../layout/Navbar";

/* Items value */

export default function MooviesHomeComponent() {
  const { id } = useParams();
  const [moovie, setMoovie] = useState(null);
  const [error, setError] = useState(null);
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  useEffect(() => {
    const fecthMoovie = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/moovies/${id}`
        );
        if (!response.ok) {
          throw new Error(
            "une erreur s'est produite lors de la recuperation du film"
          );
        }
        const data = await response.json();
        setMoovie(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fecthMoovie();
  }, [id]);

  return (
    <div className="bg-black m-0 p-0 h-[100vh] w-full">
      <Navbar />
      <>
        {/*Video Trailer Start */}
        <header>
          <div className="relative h-full  w-full" id="video-container">
            <img
              id="video-trailer"
              alt=""
              src={moovie?.videoTrailer}
              className="object-cover sm:h-[550px] w-full"
            />
            <div
              className=" absolute bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-20 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]"
              id="trailer-text"
            >
              <div>
                <h1 className="text-3xl">{moovie?.title}</h1>
              </div>
              <br />
              <div>
                {/*
                 <p>{ObjTrailer.text}</p> */}
              </div>
              <br />
              <div>
                {/*Btn modal Start */}
                <label
                  id="toggler"
                  className="btn modal-button btn-wide rounded-full bg-red-700 hover:bg-white hover:text-black active:bg-red-900 focus:outline-none focus:ring focus:ring-red-900 transform hover:scale-125"
                  onClick={() => handleOpen("xl")}
                >
                  voir Film
                </label>
                <Dialog
                  open={
                    size === "xs" ||
                    size === "sm" ||
                    size === "md" ||
                    size === "lg" ||
                    size === "xl" ||
                    size === "xxl"
                  }
                  size={size || "md"}
                  handler={handleOpen}
                  className="bg-black"
                >
                  <DialogBody divider>
                    <iframe
                      id="iframe-trailer"
                      className="rounded-xl w-full"
                      width="560"
                      height="500"
                      src={moovie?.iframesrc}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
                      allowfullscreen="true"
                    ></iframe>
                  </DialogBody>
                  <DialogFooter>
                    <label
                      id="modal-btn"
                      className="btn modal-button btn-wide rounded-full bg-red-700 hover:bg-white hover:text-black active:bg-red-900 focus:outline-none focus:ring focus:ring-red-900"
                      onClick={() => handleOpen(null)}
                    >
                      <span>exit</span>
                    </label>
                  </DialogFooter>
                </Dialog>
              </div>
              {/*Btn modal End */}
            </div>
          </div>
        </header>
        {/*Video Trailer End */}
        {/* Other Video Start */}
        <section class="text-white body-font bg-black">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col">
              <div class="h-1 bg-gray-200 rounded overflow-hidden">
                <div class="w-[100%] h-full bg-red-700"></div>
                {/*progess bar */}
              </div>
              <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 class="sm:w-2/5 text-slate-100 font-medium title-font text-2xl mb-2 sm:mb-0">
                  {moovie?.title}
                </h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  {moovie?.synopsis}
                </p>
              </div>
            </div>
            {/*section Season Hero Start */}
            <section className="text-white body-font overflow-hidden">
              <div className="container px-5  pb-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <div className="w-20 h-20 relative ml-6"></div>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-3xl font-bold text-red-700 title-font mb-2">
                        NEXTDEO
                      </h2>
                      {/*
                      <p class="leading-relaxed">
                        Glossier echo park pug, church-key sartorial biodiesel
                        vexillologist pop-up snackwave ramps cornhole. Marfa 3
                        wolf moon party messenger bag selfies, poke vaporware
                        kombucha lumbersexual pork belly polaroid hoodie
                        portland craft beer.
                      </p> */}
                      <p class="leading-relaxed text-lg">
                        découvrez d'autres films et series de genre differents
                      </p>

                      <div className="text-red-600  text-xl  inline-flex items-center mt-4 animate-[bounce_1s_infinite]">
                        cliquer sur le genre
                        <AiOutlineArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*section Season Hero End */}
            {/*section Tabs Start  */}
            <TabsMovies /> 
            {/*section Tabs End  */}
          </div>
        </section>
        {/* Other Video End */}
      </>
      <Footer />
    </div>
  );
}
