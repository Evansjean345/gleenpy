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
  videoTrailer:
    "https://i.pinimg.com/originals/c4/1e/30/c41e304c90f23e849be92efcfe096b9e.gif",
  title: "One Piece",
  text:  "Monkey D. Luffy rêve de retrouver ce trésor légendaire et de devenir le nouveau Roi des Pirates.",
  videoModal:"https://www.dailymotion.com/embed/video/x2m30pn",
};

const SecondObj = {
  title: "One Piece",
  text: `Luffy, un jeune garçon, rêve de devenir le Roi des Pirates en trouvant le One Piece, le trésor ultime rassemblé par Gol D. Roger, le seul pirate à avoir jamais porté le titre de Roi des Pirates. Shanks le Roux, un pirate qui est hébergé par les villageois du village de Luffy, est le modèle de Luffy depuis que le pirate a sauvé la vie du garçon. Un jour, Luffy mange un des fruits du démon, qui était détenu par l'équipage de Shanks, ce qui fait de lui un homme-caoutchouc, pouvant étirer son corps à volonté. À son départ, Shanks donne à Luffy son chapeau de paille. Luffy ne doit lui rendre ce chapeau que lorsqu'il sera devenu un fier pirate.`
};

const naruto1_5 = [
  { url: "https://www.dailymotion.com/embed/video/x34od1h", season: "saison 1" },
  {
    url: "https://www.dailymotion.com/embed/video/xdpg5",
    season: "saison 2",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x27fdi" ,
    season: "saison 3",
  },
  {
    url:"https://www.dailymotion.com/embed/video/xwce6" ,
    season: "saison 4",
  },
  { url: "https://www.dailymotion.com/embed/video/x2k7l0e", season: "saison 5" },
];
const naruto6_10 = [
  {
    url: "https://www.dailymotion.com/embed/video/x1oqft",
    season: "saison 6",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x5ir0p4",
    season: "saison 7",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x59k74" ,
    season: "saison 8",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x2mdvpl",
    season: "saison 9",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x92ly4",
    season: "saison 10",
  },
];
const naruto11_15 = [
  {
    url:"https://www.dailymotion.com/embed/video/x8xoij",
    season: "saison 11",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x87gdnh",
    season: "saison 12",
  },
  {
    url: "https://www.dailymotion.com/embed/video/xe2jag" ,
    season: "saison 13",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x3wxatn",
    season: "saison 14",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x3wxatn",
    season: "saison 15",
  },
];
const naruto16_20 = [
  {
    url: "https://www.dailymotion.com/embed/video/x17v9n7" ,
    season: "saison 16",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x5l5zoc",
    season: "saison 17",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x2m30pn" ,
    season: "saison 18",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x51tlhj",
    season: "saison 19",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x6zwwlr",
    season: "saison 20",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x6zwwlr",
    season: "saison 20",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x7litw4" ,
    season: "saison 20",
  },
  {
    url: "https://www.dailymotion.com/embed/video/x86ej9q",
    season: "saison 20",
  },
];

const section1_5 = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    {naruto1_5.map((item) => {
      return (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <iframe
              class="rounded-lg h-64 w-full overflow-hidden"
              src={item.url}
              title="t"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
              allowfullscreen="true"
            ></iframe>
          </div>
          <Link
            to="#"
            class="text-red-700 text-xl inline-flex items-center mt-3"
          >
            {item.season}
          </Link>
        </div>
      );
    })}
  </div>
);
const section6_10 = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    {naruto6_10.map((item) => {
      return (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <iframe
              class="rounded-lg h-64 w-full overflow-hidden"
              src={item.url}
              title="t"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
              allowfullscreen="true"
            ></iframe>
          </div>
          <Link
            to="#"
            class="text-red-700 text-xl inline-flex items-center mt-3"
          >
            {item.season}
          </Link>
        </div>
      );
    })}
  </div>
);
const section11_15 = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    {naruto11_15.map((item) => {
      return (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <iframe
              class="rounded-lg h-64 w-full overflow-hidden"
              src={item.url}
              title="t"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
              allowfullscreen="true"
            ></iframe>
          </div>
          <Link
            to="#"
            class="text-red-700 text-xl inline-flex items-center mt-3"
          >
            {item.season}
          </Link>
        </div>
      );
    })}
  </div>
);
const section16_20 = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    {naruto16_20.map((item) => {
      return (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <iframe
              class="rounded-lg h-64 w-full overflow-hidden"
              src={item.url}
              title="t"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
              allowfullscreen="true"
            ></iframe>
          </div>
          <Link
            to="#"
            class="text-red-700 text-xl inline-flex items-center mt-3"
          >
            {item.season}
          </Link>
        </div>
      );
    })}
  </div>
);

const data = [
  {
    label: "saison1.5",
    value: "action",
    desc: section1_5,
  },
  {
    label: "saison6.10",
    value: "hh",
    desc: section6_10,
  },
  {
    label: "saison11.15",
    value: "h",
    desc: section11_15,
  },
  {
    label: "saison16.20",
    value: "o",
    desc: section16_20,
  },
];

function OnePiece() {
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
                  voir anime
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
                      className="text-red-700  rounded-lg  hover:bg-white active:bg-red-700 active:text-white hover:text-red-700  hover:text-2xl transition-all"
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

export default OnePiece;
