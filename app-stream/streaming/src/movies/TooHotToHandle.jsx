import { React, useState } from "react";
import "../index.css";
import Footer from "../layout/Footer";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const ObjTrailer = {
  videoTrailer: "https://media1.giphy.com/media/kdmLKh5svX542afixf/giphy.gif",
  title: "Too Hot To Handle",
  text: "Prémisse. Animé par une assistante virtuelle en forme de cône nommée <<Lana>>, l'émission tourne autour d'un groupe d'adultes ",
  videoModal: "https://www.dailymotion.com/embed/video/x876xtm" 
};

const saison1 = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <iframe
          class="rounded-lg h-64 w-full overflow-hidden"
          src="https://www.dailymotion.com/embed/video/x7t80de"
          title="too hot to handle"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
          allowfullscreen="true"
        ></iframe>
      </div>
      <Link to="#" class="text-red-700 text-xl inline-flex items-center mt-3">
        saison1
      </Link>
    </div>
  </div>
);
const saison2 = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <iframe
          class="rounded-lg h-64 w-full overflow-hidden"
          src="https://www.dailymotion.com/embed/video/x87iw55"
          title="too hot to handle"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
          allowfullscreen="true"
        ></iframe>
      </div>
      <Link to="#" class="text-red-700 text-xl inline-flex items-center mt-3">
        saison2
      </Link>
    </div>
  </div>
);
const saison3 = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <iframe
          class="rounded-lg h-64 w-full overflow-hidden"
          src="https://www.dailymotion.com/embed/video/x86ft2j"
          title="too hot to handle"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
          allowfullscreen="true"
        ></iframe>
      </div>
      <Link to="#" class="text-red-700 text-xl inline-flex items-center mt-3">
        saison3
      </Link>
    </div>
  </div>
);

const data = [
  {
    label: "saison 1",
    value: "action",
    desc: saison1,
  },
  {
    label: "saison 2",
    value: "drame",
    desc: saison2,
  },
  {
    label: "saison 3",
    value: "sf",
    desc: saison3,
  },
];

function TooHotToHandle() {
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
                  Séduction Haute Tension
                </h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  Pour gagner un grand prix de 100 000 $, ils devront renoncer
                  au sexe. L'émission prend 10 célibataires chauds qui sont des
                  phobes notoires en matière d'engagement en matière de
                  relations, et les réunit dans une villa insulaire pour ce
                  qu'ils pensent être une sexcation de quatre semaines.
                </p>
              </div>
            </div>
            {/*section Season Hero Start */}
            <section className="text-white body-font overflow-hidden">
              <div className="container px-5  pb-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <div className="w-20 h-20 relative ml-6">
                      </div>
                    </div>
                    <div className="md:flex-grow">
                    <h2 className="text-3xl font-bold text-red-700 title-font mb-2">
                    Gleenpy
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
                        Voir les autres saisons
                      </p>

                      <div className="text-red-600  text-xl  inline-flex items-center mt-4 animate-[bounce_1s_infinite]">
                        cliquer sur la saison
                        <AiOutlineArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*section Season Hero End */}
            {/*section Tabs Start  */}
            <section>
              <Tabs id="custom-animation" value="html" className="bg-black">
                <TabsHeader>
                  {data.map(({ label, value }) => (
                    <Tab
                      className="text-red-700 text-xl rounded-lg  hover:bg-white active:bg-red-700 active:text-white hover:text-red-700  hover:text-2xl transition-all"
                      key={value}
                      value={value}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
                >
                  {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </section>
            {/*section Tabs End  */}
          </div>
        </section>
        {/* Other Video End */}
      </>
      <Footer />
    </div>
  );
}

export default TooHotToHandle;
