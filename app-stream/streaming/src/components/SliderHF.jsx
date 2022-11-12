import React from 'react'
import { Link } from "react-router-dom";
const carousel = [
    {
    imgURL:
      "https://www.leparisien.fr/resizer/NvFHqiPkeiJP306naLx1ZYzhX-I=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/62G7R5W2M6GEZTO7BWE3BIPZ2A.jpg",
    imageAlt: "",
    smallTitle: "La malediction de la dame blanche",
    overview: "la malediction de la dame blanche",
    textUnderline: "1 tome",
    to: "/movies/laDameBlanche",
  },
  {
    imgURL:"https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/042/l-exorcisme-de-hannah-grace-photo-1042882.jpg",
    smallTitle: "L'Exorcisme de Hannah Grace",
    imageAlt: "",
    overview:"L'Exorcisme de Hannah Grace",
    textUnderline: "1 tome",
    to: "/movies/hannahGrace",
  },
  {
    imgURL: "https://m.media-amazon.com/images/M/MV5BMTc0OTY5NzYyOV5BMl5BanBnXkFtZTcwNjM2ODMzMw@@._V1_.jpg",
    imageAlt: "",
    smallTitle: "Jennifer Body",
    overview: "Jennifer Body",
    textUnderline: "1 tome",
    to: "/movies/jenniFer",
  },
  {
    imgURL:
      "https://www.on-mag.fr/images/stories/2021/10/DVD_La_Chapelle_du_diable_00.jpg",
    imageAlt: "",
    smallTitle: "La chapelle du diable",
    overview: "La chapelle du diable",
    textUnderline: "1 tome",
    to: "/movies/laChapelle",
  },
  {
    imgURL: "https://occ.a.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVovzQiVkfNwqVSpw9WNYMEo-fegY7UPk_mB1VwZfSIIFpCkWONH8CVY5xvqmQ-R-gEKv6IOkztSv_NVOb_tL3c2ma3oMJdvn0UG.jpg?r=495",
    imageAlt: "",
    smallTitle: "The Silence",
    overview: "The Silence",
    textUnderline: "1 tome",
    to: "/movies/theSilence",
  },
  {
    imgURL: "https://img.lemde.fr/2018/09/17/19/186/1568/784/1440/720/60/0/bd2548b_I8SaNOIQgKXkQ3u_F-Zv-N2f.jpg",
    imageAlt: "la Nonne",
    smallTitle: "la nonne",
    overview: "La Nonne",
    textUnderline: "1 tome",
    to: "/movies/laNonne",
  },
  { 
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Still8_Human_Centipede.jpg",
    imageAlt: "",
    smallTitle: "The human centipede",
    overview: "The human centipede",
    textUnderline: "1 tome",
    to: "/movies/theHuman",
  },
  {
    imgURL:
      "https://resize.elle.fr/article/var/plain_site/storage/images/loisirs/cinema/news/annabelle-le-film-d-horreur-deprogramme-apres-des-incidents-2847256/51181932-1-fre-FR/Annabelle-le-film-d-horreur-deprogramme-apres-des-incidents.jpg",
    imageAlt: "",
    smallTitle: "annabelle",
    overview: "Annabelle",
    textUnderline: "1 tome",
    to: "/movies/annabelle",
  },
  {
    imgURL: "https://img.static-rmg.be/a/view/q75/w620/h413/3381758/6462415-jpg.jpg",
    imageAlt: "truth or Dare",
    smallTitle: "truth or dare",
    overview: "Truth or Dare",
    textUnderline: "1 tome",
    to: "/movies/truthOrDare",
  },
  {
    imgURL:
      "https://www.comingsoon.net/assets/uploads/2021/08/malignant-trailer-e1630431276222.jpg",
    imageAlt: "",
    smallTitle: "Malignant",
    overview: "Malignant",
    textUnderline: "1 Tome",
    to: "/movies/malignant",
  },
];
export default function SliderHF() {
  return (
    <div className="bg-black sm:pr-20 sm:pl-20">
    <p className="mt-2 p-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
      Horreur
      <br/>
      <br/>
    </p>
    <div className="carousel carousel-end rounded-box cursor-pointer sm:p-6 ">
      {carousel.map((items) => {
        return (
          <div className="carousel-item pr-6 rounded-xl relative">
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
  )
}
