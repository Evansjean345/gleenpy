import React from "react";
import { Link } from "react-router-dom";

const carousel = [
    {
        id: "39",
        title: "Yee Molare",
        to: "/musics/molare",
        artist: "Molaré",
        imageSrc:
          "https://i.scdn.co/image/ab67616d0000b273b2766f5580722e93827f0c5b",
        imageAlt: "",
      },
    {
        id: "39",
        title: "C'est dosé",
        to: "/musics/dose",
        artist: "Serge Beynaud",
        imageSrc:
          "https://actupeople.net/wp-content/uploads/2022/03/Serge-Beynaud-cest-dose.jpg",
        imageAlt: "",
      },
      {
        id: "9",
        title: "Dosabado",
        to: "/musics/arafat",
        artist: "Dj Arafat",
        imageSrc:
          "https://ichef.bbci.co.uk/news/640/cpsprodpb/6430/production/_105484652_fat004.jpg",
        imageAlt: "",
      },
      {
        id: "",
        title: "le secret",
        to: "/musics/bebi",
        artist: "Bebi philip",
        imageSrc: "https://republiquedujapap.com/wp-content/uploads/2021/12/Cote-dIvoire-Bebi-Philip-fait-irruption-dans-une-reception-de-mariage-la-mariee-nen-revenait-pas-video-e1638669324566.jpg",
        imageAlt: "",
      },
      {
        id: "3",
        title: "Toffole",
        to: "/musics/ariel",
        artist: "Ariel Sheney X Olomide",
        imageSrc: "https://www.terre2buzz.com/File/MusicsAcceptees/Pochettes/Grand/3940_Ariel-Sheney-Feat-Koffi-Olomide-Toffole.JPG",
        imageAlt: "",
      },
      {
        id: "",
        title: "Skinny",
        to: "/musics/lewis",
        artist: "Dj Lewis",
        imageSrc: "https://media.afriqueshowbiz.com/2022/02/WhatsApp-Image-2021-07-01-at-11.18.39-700x470-1.jpeg",
        imageAlt: "",
      },
      {
        id: "3",
        title: "J'ai compris",
        to: "/musics/vetcho",
        artist: "Vetcho Lolas",
        imageSrc: "http://www.100pour100culture.com/wp-content/uploads/2021/07/Vetcho-Lolas.png",
        imageAlt: "",
      },
      {
        id: "3",
        title: "Detounounan",
        to: "/musics/debordo",
        artist: "Debordo Leekunfa",
        imageSrc: "https://cdn.afrique-sur7.ci/400x300/articles/2021/09/debord.jpg",
        imageAlt: "",
      },
      {
        id: "3",
        title: "SOUCOUSS MAKOSSA",
        to: "/musics/kedjevara",
        artist: "KEDJEVARA",
        imageSrc: "https://lifemag-ci.com/wp-content/uploads/2019/05/kedjavara-toucher-le-sol.jpg",
        imageAlt: "",
      },
      {
        id: "",
        title: "Anti Goumin",
        to: "/musics/mix",
        artist: "Mix premier",
        imageSrc: "https://yt3.ggpht.com/UoeUdomZhxz5sI-mysLSzEQ-PrzSGTf_suBZeeM6MlOqSCvCof5llfi7cqnLzAxL0kk4OLdUwQ=s900-c-k-c0x00ffffff-no-rj",
        imageAlt: "",
      },
];
export default function SliderCoupe() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Coupé Décalé
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
