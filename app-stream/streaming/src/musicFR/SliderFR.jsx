import React from "react";
import { Link } from "react-router-dom";

const carousel = [
    {
        id: "28",
        title: "La Clé",
        to: "/musics/cle",
        artist: "Etincelle(Maradona)",
        imageSrc:
          "https://i.scdn.co/image/ab6761610000e5eb21b01a74c97830972f4f5813",
        imageAlt: "",
      },
      {
        id: "17",
        title: "Pas bête",
        to: "/musics/bendo",
        artist: "Beendo Z",
        imageSrc:
          "https://d8g8m9w5.rocketcdn.me/wp-content/uploads/2022/02/le-soleil-scaled.jpg",
        imageAlt: "",
      },
      {
        id: "",
        title: "Sans effet",
        to: "/musics/tayc",
        artist: "Tayc",
        imageSrc:
          "https://i.scdn.co/image/ab6761610000e5ebce9a6fa48c2beaf39ef9d599",
        imageAlt: "",
      },
      {
        id: "18",
        title: "Du mal à te dire",
        to: "/musics/dinos",
        artist: "Dinos X Damso",
        imageSrc:
          "https://images.genius.com/a26077803c9826045fc1b2c00c313820.1000x523x1.jpg",
        imageAlt: "",
      },
      {
        id: "18",
        title: "Elle pleut",
        to: "/musics/nekfeu",
        artist: "Nekfeu",
        imageSrc:
          "https://www.letelegramme.fr/images/2018/02/01/festival-nekfeu-annonce-a-bobital_3802402_676x413p.jpg?v=1",
        imageAlt: "",
      },
      {
        id: "12",
        title: "Holy Spirit",
        to: "/musics/holy",
        artist: "Melodie NVT",
        imageSrc:
          "https://cdn.tiktokder.com/avatars/202110/melody.nvt_1635345292.jpg",
        imageAlt: "holy Spirit",
      },
      {
        id: "26",
        title: "Le Six",
        to: "/musics/kodes",
        artist: "Kodes",
        imageSrc:
          "https://yt3.ggpht.com/9ueZQeCDjUoi7PVwmsQafYr_fJAnN5Lo1n0OGDhEeu_8I7d3A_j2eBccb7m-X27HU3817iPb-w=s900-c-k-c0x00ffffff-no-rj",
        imageAlt: "",
      },
      {
        id: "27",
        title: "Fly",
        to: "/musics/leto",
        artist: "Leto X Guy2Bezbar",
        imageSrc:
          "https://www.booska-p.com/wp-content/uploads/2022/03/leto-et-guy2bezbar-sont-tropfrais-news-visu.jpg",
        imageAlt: "",
      },
      {
        id: "37",
        title: "Signer pour 10K",
        to: "/musics/pour",
        artist: "Beendo Z",
        imageSrc:
          "https://yt3.ggpht.com/S5DTTv06ZztNvt9CfzcQRfnJIZSWiO8G2xTdrbqHUVhx7gVWxWjcrjCeKqV8_wUZyIKjYmM6Ig=s900-c-k-c0x00ffffff-no-rj",
        imageAlt: "Marie Pierre",
      },
      {
        id: "31",
        title: "Fixette",
        to: "/musics/ziak",
        artist: "Ziak",
        imageSrc:
          "https://generations.fr/media/news/thumb/1110x624_618fb7c5d93bf-ziak.webp",
        imageAlt: "",
      },
      {
        id: "8",
        title: "Rencontre",
        to: "/musics/damso",
        artist: "Damso X Disiz",
        imageSrc: "https://intrld.com/wp-content/uploads/2022/03/Disiz-Damso.jpg",
        imageAlt: "Rencontre",
      },
      {
        id: "8",
        title: "Ta reine",
        to: "/musics/reine",
        artist: "Angèle",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ang%C3%A8le_Cannes_2019.jpg/260px-Ang%C3%A8le_Cannes_2019.jpg",
        imageAlt: "",
      },
      {
        id: "8",
        title: "Die",
        to: "/musics/gazo",
        artist: "Gazo",
        imageSrc: "https://media.gqmagazine.fr/photos/62e8f758b1f7a80c5920bad0/master/w_1600%2Cc_limit/Hype_Hype_Gazo5.jpg",
        imageAlt: "",
      },
];
export default function SliderFR() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Rap FR
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
