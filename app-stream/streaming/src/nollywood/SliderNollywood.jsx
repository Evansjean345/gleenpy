import React from "react";
import { Link } from "react-router-dom";

const carousel = [
  {
    imgURL: "https://i.ytimg.com/vi/f5uJ2FVdpRk/maxresdefault.jpg",
    imageAlt: "",
    smallTitle: "Entre deux",
    overview: "Entre deux",
    textUnderline: "télé-loisirs",
    to: "/movies/nollywood/deux",
  },
  {
    imgURL: "https://afrozitv.com/wp-content/uploads/2022/09/le-coeur-du-veritable-amour.jpg",
    imageAlt: "",
    smallTitle: "Coeur du véritable amour",
    overview: "Coeur du véritable amour",
    textUnderline: "Nollywood Tv",
    to: "/movies/nollywood/veritable",
  },
  {
    imgURL: "https://i.ytimg.com/vi/AZbnnMrbHHg/maxresdefault.jpg",
    smallTitle: "La règle",
    imageAlt: "",
    overview: "La règle",
    textUnderline: "télé-loisirs",
    to: "/movies/nollywood/regle",
  },
  {
    imgURL: "https://i.ytimg.com/vi/J-mtibpCJ-M/maxresdefault.jpg",
    imageAlt: "",
    smallTitle: "Le milliardaire et la vendeuse",
    overview: "Le milliardaire et la vendeuse",
    textUnderline: "Nollywood Tv",
    to: "/movies/nollywood/vendeuse",
  },
  {
    imgURL: "https://www.programme-tv.net/imgre/fit/~2~program~5f5f5694a58b7bb4.jpg/1160x500/crop-from/top/quality/80/cr/wqkgTm9sbHl3b29kIFRW/l-ange-noir.jpg",
    imageAlt: "",
    smallTitle: "Ange de l'amour",
    overview: "Ange de l'amour",
    textUnderline: "télé-loisirs",
    to: "/movies/nollywood/ange",
  },
  {
    imgURL: "https://i.ytimg.com/vi/yXTPdQVA7h8/maxresdefault.jpg",
    imageAlt: "",
    smallTitle: "Oliver Twist",
    overview: "Oliver Twist",
    textUnderline: "télé-loisirs",
    to: "/movies/nollywood/twist",
  },
  {
    imgURL:
      "https://i0.wp.com/taarifa.rw/wp-content/uploads/2020/07/Ibu-taarfa.jpg?fit=1000%2C563&ssl=1",
    imageAlt: " ",
    smallTitle: "Problème de vente",
    overview: "Problème de vente",
    textUnderline: "Nollywood Tv",
    to: "/movies/nollywood/vente",
  },
  {
    imgURL: "https://imgsrc.cineserie.com/2019/09/1562414.jpg?ver=1",
    imageAlt: " ",
    smallTitle: "The Wedding party",
    overview: "The Wedding party",
    textUnderline: "romance",
    to: "/movies/nollywood/wedding",
  },
  {
    imgURL:
      "https://thumb.canalplus.pro/http/unsafe/2560x1440/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/103279189",
    imageAlt: "",
    smallTitle: "cauchemar en entreprise",
    overview: "cauchemar en entreprise",
    textUnderline: "Drame",
    to: "/movies/nollywood/entreprise",
  },
  {
    imgURL: "https://s2.dmcdn.net/v/R0K7p1TQ3bah5qoS5/x1080",
    imageAlt: "",
    smallTitle: "Le journal de Jenifa",
    overview: "Le journal de Jenifa",
    textUnderline: "Nollywood Tv",
    to: "/movies/nollywood/jenifa",
  },
  {
    imgURL:
      "https://www.programme-tv.net/imgre/fit/~2~program~fb1808bd999d6001.jpg/630x355/quality/80/imparfaitement-parfait.jpg",
    imageAlt: "",
    smallTitle: "imparfaitement parfait",
    overview: "imparfaitement parfait",
    textUnderline: "Drame",
    to: "/movies/nollywood/parfait",
  },
];
export default function SliderNollywood() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Nollywood
          <br />
          <br />
        </p>
        <div className="carousel carousel-end rounded-box cursor-pointer sm:p-6 ">
          {carousel.map((items) => {
            return (
              <div className="carousel-item  pl-2 pr-6 rounded-xl relative">
                <Link to={items.to}>
                  <img
                    src={items.imgURL}
                    alt={items.imageAlt}
                    className="rounded-xl h-[300px] w-[340px] sm:transform sm:transition-all sm:hover:scale-90"
                  />
                  <div className="absolute m-6 bottom-0 z-30">
                    <p className="text-sm leading-none text-white">
                      {items.smallTitle}
                    </p>
                    <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                      {items.overview}
                    </h1>
                    <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                      {items.textUnderline}
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
