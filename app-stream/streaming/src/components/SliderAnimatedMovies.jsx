import React from "react";
import { Link } from "react-router-dom";

const carousel = [
    {
    imgURL:
      "https://nefariousreviews.files.wordpress.com/2017/03/your-lie-in-april-featured.jpg",
    imageAlt: "",
    smallTitle: "Your lie in april",
    overview: "Your lie in April",
    textUnderline: "Drame",
    to: "/movies/home/april",
  },
  {
    imgURL:"https://s3.voyapon.com/wp-content/uploads/sites/2/2021/07/18211601/24.jpg",
    smallTitle: "your name",
    imageAlt: "",
    overview:"Your Name",
    textUnderline: "Romance",
    to: "/movies/home/your",
  },
  {
    imgURL:
      "https://www.gaijinjapan.org/wp-content/uploads/2016/10/Mon-voisin-Totoro.jpg",
    imageAlt: "",
    smallTitle: "mon voisin totoro",
    overview: "Mon voisin Totoro",
    textUnderline: "Thriller",
    to: "/movies/home/totoro",
  },
  {
    imgURL: "https://zupimages.net/up/20/02/449l.jpg",
    imageAlt: "",
    smallTitle: "les enfants du Temps",
    overview: "Les enfants du Temps",
    textUnderline: "Romance",
    to: "/movies/home/temps",
  },
  {
    imgURL:
      "https://japoncinema.com/wp-content/uploads/2021/05/v-evergarden.jpeg",
    imageAlt: "",
    smallTitle: "Violet Evergarden",
    overview: "Violet Evergarden",
    textUnderline: "Romance",
    to: "/movies/home/violet",
  },
  {
    imgURL: "https://fr.web.img3.acsta.net/newsv7/21/08/18/17/53/1276772.jpg",
    imageAlt: "",
    smallTitle: "silent voice",
    overview: "Silent Voice",
    textUnderline: "Drame",
    to: "/movies/home/silent",
  },
  {
    imgURL: "https://nefariousreviews.files.wordpress.com/2021/04/wonder-egg-priority-featured.jpg",
    imageAlt: " ",
    smallTitle: "Wonder eggs priority",
    overview: "Wonder eggs priority",
    textUnderline: "Horreur Psychologique",
    to: "/movies/home/wonder",
  },
  {
    imgURL:
      "https://www.cinelounge.org/imgfull/123177.jpg",
    imageAlt: " ",
    smallTitle: "5 centimètres par seconde",
    overview: "5 centimètres par seconde",
    textUnderline: "Romance",
    to: "/movies/home/second",
  },
  {
    imgURL: "https://www.studioghibli.fr/wp-content/uploads/2009/07/spirited_away1-1024x638.png",
    imageAlt: "",
    smallTitle: "Le voyage de chichiro",
    overview: "Le voyage de chichiro",
    textUnderline: "Film à énigme",
    to: "/movies/home/chichiro",
  },

  {
    imgURL:
      "https://www.kanpai.fr/sites/default/files/styles/og/public/uploads/2014/06/le-conte-de-la-princesse-kaguya-03.jpg",
    imageAlt: "",
    smallTitle: "le conte de la princesse Kaguya",
    overview: "Le conte de la princesse Kaguya",
    textUnderline: "Fiction d'apprentissage",
    to: "/movies/home/kaguya",
  },
  {
    imgURL:
      "https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/loisirs/cinema/dessin-anime-enfant/le-chateau-dans-le-ciel-1986/53839468-1-fre-FR/Le-Chateau-dans-le-ciel-1986.jpg",
    imageAlt: "",
    smallTitle: "le chateau dans le ciel",
    overview: "Le chateau dans le ciel",
    textUnderline: "Action",
    to: "/movies/home/castel",
  },
];
export default function SliderAnimatedMovies() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Ghibli
          <br/>
          <br/>
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
