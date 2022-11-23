import React from "react";
import { Link } from "react-router-dom";

const carousel = [
  {
    id: "25",
    title: "Se Yo",
    to: "/musics/fally",
    artist: "fally Ipupa",
    imageSrc:
      "https://www.trendyhiphop.com/wp-content/uploads/2022/10/Fally-Ipupa-Se-Yo-MP3.webp",
    imageAlt: "",
  },
  {
    id: "15",
    title: "Femme",
    to: "/musics/femme",
    artist: "Koffi Olomide",
    imageSrc:
      "        https://ichef.bbci.co.uk/news/640/cpsprodpb/15F0A/production/_113566898_koffio.png",
    imageAlt: "",
  },
  {
    id: "30",
    title: "Marathon",
    to: "/musics/fere",
    artist: "Fere Gola",
    imageSrc:
      "https://yt3.ggpht.com/WddLNkyEBLYMb4swN4CNQnLPWX9iOs3kSCjpGoNfbQezUrsBC5cO9vijN1qLg0JMPHgVwmKZtA=s900-c-k-c0x00ffffff-no-rj",
    imageAlt: "",
  },
  {
    id: "13",
    title: "Proteger Base",
    to: "/musics/werrason",
    artist: "Werrason",
    imageSrc: "https://allo-kinculture.com/wp-content/uploads/2022/01/20220124_154618.jpg",
    imageAlt: "",
  },
  {
    id: "7",
    title: "Université",
    to: "/musics/cindy",
    artist: "Cindy le Coeur",
    imageSrc:
    "https://i0.wp.com/mbote.cd/app/uploads/2020/12/images-3.jpeg?fit=739%2C415&ssl=1",
    imageAlt: "",
  },
  {
    id: "7",
    title: "Pardonne-moi",
    to: "/musics/sorry",
    artist: "Ninita X Mbilia Bel",
    imageSrc:
      "https://5000hits.com/files/images/covers/2019/04/329esykQ.jpg",
    imageAlt: "",
  },
];
export default function SliderRumba() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Rumba
          <br />
          <br />
        </p>
        <div className="carousel carousel-end rounded-box cursor-pointer sm:p-6 ">
          {carousel.map((items) => {
            return (
              <div className="carousel-item  pl-2 pr-6 group rounded-xl relative">
                <Link to={items.to}>
                  <img
                    src={items.imageSrc}
                    alt={items.imageAlt}
                    className="rounded-full h-[220px] w-[260px]  sm:transform sm:transition-all sm:group-hover:scale-90"
                  />
                  <div className="absolute pl-6 m-6 bottom-0 z-30 sm:group-hover:scale-90 ">
                    <h1 className="w-64 text-lg font-semibold leading-8 mt-2 text-white">
                      {items.artist}
                    </h1>
                    <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                      {items.title}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
