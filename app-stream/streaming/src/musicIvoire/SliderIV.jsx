import React from "react";
import { Link } from "react-router-dom";

const carousel = [
    {
        id: "2",
        title: "En haut",
        to: "/musics/haut",
        artist: "didi B X Jr Low",
        imageSrc:
          "https://i0.wp.com/bwelitribe.com/wp-content/uploads/2022/08/300635916_5217977094985429_1942704835354281072_n.jpg?fit=1080%2C1115&ssl=1",
        imageAlt: "en haut",
      },
      {
        id: "29",
        title: "Dora",
        to: "/musics/dora",
        artist: "HIMRA X 3XDAV'S X JR",
        imageSrc:
          "https://i.ytimg.com/vi/DllhYcWBHKg/maxresdefault.jpg",
        imageAlt: "",
      },
      {
        id: "11",
        title: "Marie Pierre",
        to: "/musics/elown",
        artist: "Elow'n",
        imageSrc:
          "https://i.scdn.co/image/ab6761610000e5eb19ea161f21b4929178589192",
        imageAlt: "Marie Pierre",
      },
      {
        id: "30",
        title: "Gnapka",
        to: "/musics/luck",
        artist: "Mr Luck",
        imageSrc:
          "https://lafropeen.fr/storage/app/articles/images/fO8xRAwmydyfMYaFk5pW5pCtjChDEyOckrQ9eCEE.png",
        imageAlt: "",
      },
      {
        id: "7",
        title: "Tala",
        to: "/musics/tala",
        artist: "didi B",
        imageSrc:
          "https://img.lemde.fr/2022/05/31/72/0/1440/960/1440/960/60/0/b25ea86_1653997058976-280302484-565771431584326-6645225032926849143-n.jpg",
        imageAlt: "",
      },
      {
        id: "7",
        title: "Decapo",
        to: "/musics/trippa",
        artist: "Trippa Gninin",
        imageSrc:
          "https://i0.wp.com/bwelitribe.com/wp-content/uploads/2021/08/Capture-1.png?fit=760%2C887&ssl=1&w=640",
        imageAlt: "",
      },
];
export default function SliderIV() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Rap Ivoire
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
