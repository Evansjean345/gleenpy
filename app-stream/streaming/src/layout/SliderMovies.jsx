import React from "react";
import { Link } from "react-router-dom";

const carousel = [
    {
    imgURL:
      "https://hips.hearstapps.com/hmg-prod/images/melinda-marvin-thth-edit-1625262681.jpg",
    imageAlt: "Too Hot To Handle",
    smallTitle: "too hot to handle",
    overview: "Too Hot To Handle",
    textUnderline: "3 saisons",
    to: "/movies/toHotToHandle",
  },
  {
    imgURL:"https://decider.com/wp-content/uploads/2019/10/daybreak_101_unit_01351rc-resize.jpg?quality=75&strip=all",
    duration: "1 saison",
    smallTitle: "DayBreak",
    imageAlt: "DayBreak",
    overview:"DayBreak",
    textUnderline: "1 saison",
    to: "/movies/daybreak",
  },
  {
    imgURL: "https://file1.telestar.fr/var/telestar/storage/images/3/2/5/8/3258087/elite.jpg?alias=original",
    imageAlt: "elite",
    smallTitle: "elite",
    overview: "Elite",
    textUnderline: "5 saisons",
    to: "/movies/elite",
  },
  {
    imgURL:
      "https://www.byrdie.com/thmb/7CO66RXo0ASDO7pGZp31vzwrAIM=/800x800/filters:fill(auto,1)/euphoriaoutfit-d240775f608c4a8eb874b2f129b931b4.png",
    imageAlt: "euphoria",
    smallTitle: "euphoria",
    overview: "Euphoria",
    textUnderline: "2 saisons",
    to: "/movies/euphoria",
  },
  {
    imgURL: "https://resize.elle.fr/article/var/plain_site/storage/images/loisirs/series/sex-education-une-saison-4-pour-la-serie-de-netflix-3954321/95391833-1-fre-FR/Sex-Education-une-saison-4-pour-la-serie-de-Netflix.jpg",
    imageAlt: "sex education",
    smallTitle: "sex education",
    overview: "Sex education",
    textUnderline: "3 saisons",
    to: "/movies/sexEducation",
  },
  {
    imgURL: "https://static1.ozap.com/articles/0/56/73/40/@/4602276-bande-annonce-de-la-nonne-vostfr-opengraph_1200-2.jpg",
    imageAlt: "la Nonne",
    smallTitle: "la nonne",
    overview: "La Nonne",
    textUnderline: "1 tome",
    to: "/movies/laNonne",
  },
  {
    imgURL:
      "https://media.vogue.es/photos/5dfce1614edabe00084eb441/1:1/w_922,h_922,c_limit/the-witcher-netflix.jpg",
    imageAlt: "The witcher",
    smallTitle: "the witcher",
    overview: "The Witcher",
    textUnderline: "2 saisons",
    to: "/movies/theWitcher",
  },
  {
    imgURL:
      "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/medias/2015/09/media_131721/the-100-une-serie-100-saignante%2CM257680.jpg?itok=EiGYxlk-",
    imageAlt: "the 100",
    smallTitle: "the 100",
    overview: "The 100",
    textUnderline: "7 saisons",
    to: "/movies/theHundred",
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
      "https://imgsrc.cineserie.com/2019/04/the-silence-netflix-un-ersatz-de-sans-un-bruit.jpg?ver=1",
    imageAlt: "the silence",
    smallTitle: "the silence",
    overview: "The silence",
    textUnderline: "1 tome",
    to: "/movies/theSilence",
  },
  {
    imgURL:
      "https://trouver-la-bonne-personne.fr/wp-content/uploads/2019/09/lucifer-chloe-ojo-temporada-4.jpg",
    imageAlt: "lucifer",
    smallTitle: "lucifer",
    overview: " Lucifer",
    textUnderline: "6 saisons",
    to: "/movies/lucifer",
  },
  {
    imgURL:
      "https://www.rollingstone.com/wp-content/uploads/2018/06/all-eyez-on-me-052h-aeom-09740r_rgb-d786dcc9-60d2-4f19-8369-50673dac270d.jpg",
    imageAlt: "allEyesOnMe",
    smallTitle: "2 pac",
    overview: "All eyez one me",
    textUnderline: "1 Tome",
    to: "/movies/allEyezOnMe",
  },
];
export default function SliderMovies() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Action et Drame
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
