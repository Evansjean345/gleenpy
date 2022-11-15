import React from "react";
import { Link } from "react-router-dom";

const carousel = [
  {
    imgURL: "https://indiehoy.com/wp-content/uploads/2020/07/elite-netflix.jpg",
    imageAlt: "elite",
    smallTitle: "elite",
    overview: "Elite",
    textUnderline: "5 saisons",
    to: "/movies/elite",
  },
  {
    imgURL: "https://fr.web.img6.acsta.net/newsv7/20/03/18/14/27/3879878.jpg",
    imageAlt: "",
    smallTitle: "La Plateforme",
    overview: "La Plateforme",
    textUnderline: "1 Tome",
    to: "/movies/plateforme",
  },
  {
    imgURL:
      "https://resize.elle.fr/article/var/plain_site/storage/images/loisirs/series/sex-education-une-saison-4-pour-la-serie-de-netflix-3954321/95391833-1-fre-FR/Sex-Education-une-saison-4-pour-la-serie-de-Netflix.jpg",
    imageAlt: "sex education",
    smallTitle: "sex education",
    overview: "Sex education",
    textUnderline: "3 saisons",
    to: "/movies/sexEducation",
  },
  {
    textUnderline: "3 saisons",
    smallTitle: "You",
    imgURL:
      "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2019/01/you-elizabeth-lail-penn-badgley.jpg",
    overview: "You",
    to: "/movies/you",
  },
  {
    imgURL:
      "https://tvseriesfinale.com/wp-content/uploads/2019/10/daybreak02.jpg",
    duration: "1 saison",
    smallTitle: "DayBreak",
    imageAlt: "DayBreak",
    overview: "DayBreak",
    textUnderline: "1 saison",
    to: "/movies/daybreak",
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
      "https://focus.telerama.fr/967x550/100/2021/03/31/e80ad5a2-dde1-4f2d-b898-e0160a9cf850.jpg",
    imageAlt: "the 100",
    smallTitle: "the 100",
    overview: "The 100",
    textUnderline: "7 saisons",
    to: "/movies/theHundred",
  },
  {
    id: "6",
    textUnderline: "1 saison",
    to: "/movies/behindHerEyes",
    smallTitle: "Mon ami Adèle - Behind Her eyes",
    imgURL:
      "https://images.rtl.fr/~c/1200v800/rtl/www/1391555-adele-eve-hewson-et-louise-simona-brown-dans-mon-amie-adele.jpg",
    overview: "Mon ami Adèle - Behind Her eyes",
  },
  {
    imgURL:
      "https://occ-0-395-1007.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbFI2wcwiGkHDdGWaw58hWgLETOBsbqqv6GbKnZFn3s_Y4fjw0Ys9DNYD5txnfV3oj9tgsBeaSnPcBOwQqQnpHVqHeQr9FtvVzaL.jpg?r=776",
    imageAlt: "",
    smallTitle: "Breaking Bad",
    overview: "Breaking Bad",
    textUnderline: "5 saisons",
    to: "/movies/breaking",
  },
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
    id: "1",
    textUnderline: "3 saisons",
    to: "/movies/howToSellDrugsOnline",
    smallTitle: "How to sell Drugs Online (Fast)",
    imgURL:
      "https://www.serieslyawesome.tv/wp-content/uploads/2020/08/trio_720.jpg",
    overview: "How to sell Drugs Online (Fast)",
  },
  {
    imgURL:
      "https://linfotoutcourt.com/wp-content/uploads/2021/09/Critique-Rick-et-Morty-saison-5-de%CC%81licieuse-famille-dysfonctionnelle-2.jpg",
    imageAlt: "",
    smallTitle: "Ricky et Morty",
    overview: "6 saisons",
    textUnderline: "Drame",
    to: "/movies/ricky",
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
];
export default function SliderNetflix() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Netflix
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
