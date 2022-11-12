import { React, useState } from "react";
import "../index.css";
import Footer from "../layout/Footer";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import TabsMovies from "../layout/TabsMovies";

const ObjTrailer = {
  videoTrailer:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d3c0d45-37d0-4f8f-b61d-168797c9fb46/dcde4v4-b0e5e1cf-d1bf-4483-b20f-4cc7599963bb.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkM2MwZDQ1LTM3ZDAtNGY4Zi1iNjFkLTE2ODc5N2M5ZmI0NlwvZGNkZTR2NC1iMGU1ZTFjZi1kMWJmLTQ0ODMtYjIwZi00Y2M3NTk5OTYzYmIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.b2Smth-UvvNqL4wzPgXrtzQ2p0pxdnZBHm6ou9pq71Q",
  title: "Khumba",
  text: "Un zèbre demi-zébré est considéré par son troupeau comme la cause de la sécheresse persistante. Il décide de quitter leur lieu de retraite et part à la recherche de ses rayures perdues. ",
  videoModal: "https://www.dailymotion.com/embed/video/x4ogm29" ,
};

const SecondObj = {
  title: "Khumba",
  text: `Un zèbre demi-zébré est considéré par son troupeau comme la cause de la sécheresse persistante. Il décide de quitter leur lieu de retraite et part à la recherche de ses rayures perdues. Il est aidé dans sa quête par une vieille gnou et une autruche fashionable. C'est également pour trouver un moyen de sauver son troupeau de la sécheresse qu'il traversera maints dangers.
  `,
};

export default function Khumba() {
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  return (
    <div className="bg-black m-0 p-0 h-[100vh] w-full">
      <>
        {/*Video Trailer Start */}
        <header>
          <div className="relative h-full  w-full" id="video-container">
            <img
              id="video-trailer"
              alt=""
              src={ObjTrailer.videoTrailer}
              className="object-cover sm:h-[550px] w-full"
            />
            <div
              className=" absolute bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-20 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]"
              id="trailer-text"
            >
              <div>
                <h1 className="text-3xl">{ObjTrailer.title}</h1>
              </div>
              <br />
              <div>
                <p>{ObjTrailer.text}</p>
              </div>
              <br />
              <div>
                {/*Btn modal Start */}
                <label
                  id="toggler"
                  className="btn modal-button btn-wide rounded-full bg-red-700 hover:bg-white hover:text-black active:bg-red-900 focus:outline-none focus:ring focus:ring-red-900 transform hover:scale-125"
                  onClick={() => handleOpen("xl")}
                >
                  voir film
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
                      src={ObjTrailer.videoModal}
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
                <div class="w-[70%] h-full bg-red-700"></div>
                {/*progess bar */}
              </div>
              <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 class="sm:w-2/5 text-slate-100 font-medium title-font text-2xl mb-2 sm:mb-0">
                  {SecondObj.title}
                </h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  {SecondObj.text}
                </p>
              </div>
            </div>
            {/*section Season Hero Start */}
            <section className="text-white body-font overflow-hidden">
              <div className="container px-5  pb-12 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <div className="w-20 h-20 relative ml-6"></div>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-3xl font-bold text-red-700 title-font mb-2">
                      Gleenpy
                      </h2>
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
            {/*section Tabs End  */}
            <TabsMovies />
          </div>
        </section>
        {/* Other Video End */}
      </>
      <Footer />
    </div>
  );
}
