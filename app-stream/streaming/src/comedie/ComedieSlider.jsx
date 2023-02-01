import React from "react";
import { Link } from "react-router-dom";

const carousel = [
  {
    imgURL: "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_thenewyorker.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1435379180/thenewyorker_movie-of-the-week-touki-bouki.jpg",
    imageAlt: "",
    smallTitle: "Touki Bouki",
    overview: "Touki Bouki",
    textUnderline: "comedie/fiction",
    to: "/movies/comedie/touki",
  },
  {
    imgURL: "https://fr.web.img5.acsta.net/pictures/17/01/19/09/32/389842.jpg",
    imageAlt: "",
    smallTitle: "Bienvenue au Gondwana",
    overview: "Bienvenue au Gondwana",
    textUnderline: "comedie",
    to: "/movies/comedie/bienvenue",
  },
  {
    imgURL: "https://images-2.wuaki.tv/system/shots/190515/original/snapshot-1590661306.jpeg",
    smallTitle: "L'Africain",
    imageAlt: "",
    overview: "L'Africain",
    textUnderline: "Comedie/romance",
    to: "/movies/comedie/african",
  },
  {
    imgURL: "https://p0.storage.canalblog.com/08/85/849913/93838305_o.jpg",
    imageAlt: "",
    smallTitle: "Le Crocodile du Botswanga",
    overview: "Le Crocodile du Botswanga",
    textUnderline: "comedie",
    to: "/movies/comedie/crocodile",
  },
  {
    imgURL: "https://occ-0-993-1433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABciz-LoOZltDxV04Q7SQq6iPsQl9yXG5iTQHNZtQQgl2sxw1wyzDmBuB312lz8dDfSNPcEf6-nqROmcM7DTh1NURZvl7pkN-gULy.jpg?r=c75",
    imageAlt: "",
    smallTitle: "On n'arrête plus les Kandasamys",
    overview: "On n'arrête plus les Kandasamys",
    textUnderline: "comedie",
    to: "/movies/comedie/arrete",
  },
  {
    imgURL: "https://imgsrc.cineserie.com/2018/01/520697.jpg?ver=1",
    imageAlt: "",
    smallTitle: "Un Anglais sous les tropiques",
    overview: "Un Anglais sous les tropiques",
    textUnderline: "drame/comedie",
    to: "/movies/comedie/tropique",
  },
  {
    imgURL:
      "https://i.ytimg.com/vi/CZsIlI14SVk/maxresdefault.jpg",
    imageAlt: " ",
    smallTitle: "Laurent et Safi",
    overview: "Laurent et Safi",
    textUnderline: "musical",
    to: "/movies/comedie/safi",
  },
  {
    imgURL: "https://cdn.pmnewsnigeria.com/wp-content/uploads/2021/12/568B1516-F6DD-43BD-AABD-0E192F7685F1.jpeg",
    imageAlt: " ",
    smallTitle: "Aki and Pawpaw",
    overview: "Aki and Pawpaw",
    textUnderline: "comedie",
    to: "/movies/comedie/aki",
  },
  {
    imgURL:
      "https://decider.com/wp-content/uploads/2020/07/SERIOUSLY-SINGLE-REVIEW.jpg?quality=75&strip=all",
    imageAlt: "",
    smallTitle: "Seriously Single",
    overview: "Seriously Single",
    textUnderline: "comedie",
    to: "/movies/comedie/single",
  },
  {
    imgURL: "https://www.hewayasin.com/buckstop/wp-content/uploads/2018/11/zuluwedding.jpg",
    imageAlt: "",
    smallTitle: "Zulu Wedding",
    overview: "Zulu Wedding",
    textUnderline: "comedie/romance",
    to: "/movies/comedie/zulu",
  },
  {
    imgURL:
      "https://fr.web.img6.acsta.net/pictures/210/517/21051730_20131022160209899.jpg",
    imageAlt: "",
    smallTitle: "Afrik'aïoli",
    overview: "Afrik'aïoli",
    textUnderline: "comedie",
    to: "/movies/comedie/ai",
  },
];
export default function SliderComedie() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Comedie
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
