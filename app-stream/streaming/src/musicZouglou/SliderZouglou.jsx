import React from "react";
import { Link } from "react-router-dom";

const carousel = [
  {
    id: "39",
    title: "Anoumabo est joli",
    to: "/musics/magic",
    artist: "Magic System",
    imageSrc:
      "http://media.nrj.fr/436x327/2014/10/magic-system-fiche_4097.jpg",
    imageAlt: "",
  },
  {
    id: "39",
    title: "Les 49",
    to: "/musics/yode",
    artist: "Yode et Siro",
    imageSrc:
      "https://www.infoh24.info/wp-content/uploads/2020/12/Yode-et-Siro-@-Zouglou.jpg",
    imageAlt: "",
  },
  {
    id: "9",
    title: "le boss n'est pas méchant",
    to: "/musics/vda",
    artist: "VDA",
    imageSrc:
      "https://lifemag-ci.com/wp-content/uploads/2021/02/vda3.jpg",
    imageAlt: "",
  },
  {
    id: "",
    title: "Ennemi",
    to: "/musics/patron",
    artist: "Les patrons",
    imageSrc:
      "https://beninwebtv.com/wp-content/uploads/2022/11/les_patrons.png",
    imageAlt: "",
  },
  {
    id: "3",
    title: "Mon lieutenant",
    to: "/musics/denis",
    artist: "Petit Denis",
    imageSrc:
      "https://www.linfodrome.com/media/article/images/thumb/66627-denco_xl.webp",
    imageAlt: "",
  },
  {
    id: "",
    title: "le vieux est trop fort",
    to: "/musics/pro",
    artist: "Les pro du Zouglou",
    imageSrc:
      "https://yt3.ggpht.com/wvDAdsE50GLD6jmoy-a4BGncaAAo3NwrMa1AGaR3AKwN-C369IwNVj3LPB2VtMndsJR1eCzrUKI=s900-c-k-c0x00ffffff-no-rj",
    imageAlt: "",
  },
  {
    id: "3",
    title: "Amitié",
    to: "/musics/fashion",
    artist: "Zouglou Fashion",
    imageSrc:
      "https://www.terre2buzz.com/File/MusicsAcceptees/Pochettes/Grand/1883_Zouglou-Fashion-On-Veut-La-Paix.jpg",
    imageAlt: "",
  },
  {
    id: "3",
    title: "contrat sacrifice",
    to: "/musics/fitini",
    artist: "Fitini le créateur",
    imageSrc: "https://media-files.abidjan.net/photo/FITINI%20(23).JPG",
    imageAlt: "",
  },
  {
    id: "3",
    title: "Singah",
    to: "/musics/soum",
    artist: "Soum Bill",
    imageSrc:
      "https://i.scdn.co/image/ab6761610000e5eb42d932b6b89f08f133d44652",
    imageAlt: "",
  },
];
export default function SliderZouglou() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Zouglou
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
