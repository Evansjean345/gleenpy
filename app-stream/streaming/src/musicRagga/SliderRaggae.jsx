import React from "react";
import { Link } from "react-router-dom";

const carousel = [
  {
    id: "7",
    title: "Is This Love",
    to: "/musics/love",
    artist: "Bob Marley",
    imageSrc:
      "https://cdn.britannica.com/73/101873-050-D341E939/Bob-Marley-1978.jpg",
    imageAlt: "",
  },
  {
    id: "25",
    title: "Pompier Pyromane",
    to: "/musics/blondy",
    artist: "Alpha Blondy",
    imageSrc:
      "https://gdb.voanews.com/09690000-0a00-0242-b14c-08da66702ca3_w1200_r1.jpg",
    imageAlt: "",
  },
  {
    id: "15",
    title: "The music",
    to: "/musics/luciano",
    artist: "Luciano X Jesse Royal",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Luciano_%28Reggae_Awards%2C_2007%29.jpg",
    imageAlt: "",
  },
  {
    id: "30",
    title: "Blessed",
    to: "/musics/buju",
    artist: "Buju Banton",
    imageSrc:
      "https://www.billboard.com/wp-content/uploads/2020/07/buju-banton-2020-press-cr-Shawn-Theodore-billboard-1548-1594752810.jpg",

    imageAlt: "",
  },
  {
    id: "30",
    title: "Holding You Close",
    to: "/musics/marcia",
    artist: "Marcia Griffiths",
    imageSrc:
      "https://www.reggaeville.com/fileadmin/web-bilder2019/reggaegeel832019b/reggaegeel832019-CelineDiels-Reggaeville-40139.jpg",
    imageAlt: "",
  },
  {
    id: "13",
    title: "Legalize it",
    to: "/musics/tosh",
    artist: "Peter Tosh",
    imageSrc:
      "https://i.scdn.co/image/ff0dc4f22c8e5074d7996313d785785a555e46bb",
    imageAlt: "",
  },
];
export default function SliderRagga() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Raggae
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
