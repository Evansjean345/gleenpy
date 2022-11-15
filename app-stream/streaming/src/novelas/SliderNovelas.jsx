import React from "react";
import { Link } from "react-router-dom";

const carousel = [
    {
    imgURL:
      "http://img.over-blog-kiwi.com/0/95/30/84/20171023/ob_550ca1_ladona-preview.jpg",
    imageAlt: "",
    smallTitle: "La Doña",
    overview: "La Doña",
    textUnderline: "Drame",
    to: "/movies/novelas/dona",
  },
  {
    imgURL:"https://www.megazap.fr/photo/art/grande/52624004-40067729.jpg?v=1609149648",
    smallTitle: "Corazón valiente",
    imageAlt: "",
    overview:"Corazón valiente",
    textUnderline: "Romance",
    to: "/movies/novelas/corazon",
  },
  {
    imgURL:
      "https://www.novelas.tv/wp-content/uploads/2020/04/el-diablo-site.png",
    imageAlt: "",
    smallTitle: "El diablo",
    overview: "El diablo",
    textUnderline: "Drame",
    to: "/movies/novelas/diablo",
  },
  {
    imgURL: "https://img.nbc.com/sites/nbcunbc/files/images/2022/8/18/TIERRADEREYES_S01_EP066_TLMD_1.jpeg",
    imageAlt: "",
    smallTitle: "Terre de passion",
    overview: "Terre de passion",
    textUnderline: "Telenovela",
    to: "/movies/novelas/passion",
  },
  {
    imgURL:
      "https://i.ytimg.com/vi/_y17d_W7fpo/maxresdefault.jpg",
    imageAlt: "",
    smallTitle: "La casa de al lado",
    overview: "La casa de al lado",
    textUnderline: "Soap Opera",
    to: "/movies/novelas/casa",
  },
  {
    imgURL: "https://1.bp.blogspot.com/-wkinVgO2hu4/YBYkpPc4eaI/AAAAAAAAAIA/Ritlj3f_NbotRp33pCXlDMu-CFzoPutrQCLcBGAsYHQ/s1080/catalina%2Bfinal.jpg",
    imageAlt: "",
    smallTitle: "Catalina",
    overview: "Catalina",
    textUnderline: "Telenovela",
    to: "/movies/novelas/catalina",
  },
  {
    imgURL: "https://p8.storage.canalblog.com/86/58/1306657/107251675_o.jpg",
    imageAlt: " ",
    smallTitle: "La patrona",
    overview: "La patrona",
    textUnderline: "Soap opera",
    to: "/movies/novelas/patrona",
  },
  {
    imgURL:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2020%2F08%2F12%2FLa-ley-del-corazon.jpg",
    imageAlt: " ",
    smallTitle: "La ley del corazón",
    overview: "La ley del corazón",
    textUnderline: "Telenovela",
    to: "/movies/novelas/ley",
  },
  {
    imgURL: "https://i.ytimg.com/vi/8J1bGZAe4Wc/maxresdefault.jpg",
    imageAlt: "",
    smallTitle: "Rubí ",
    overview: "Rubí ",
    textUnderline: "Drame",
    to: "/movies/novelas/rubi",
  },
  {
    imgURL: "https://images.6play.fr/v2/images/2658424/raw?blur=0&fit=scale_crop&format=jpeg&height=630&interlace=1&quality=60&width=1200&hash=6ea01dd4aebd344a1e9669e3c92d28cc7cc39bdd",
    imageAlt: "",
    smallTitle: "L'imposture",
    overview: "l'imposture",
    textUnderline: "Telenovela",
    to: "/movies/novelas/imposture",
  },
  {
    imgURL: "https://pictures.betaseries.com/fonds/poster/f5069008b3d1711ef755cce444645fac.jpg",
    imageAlt: "",
    smallTitle: "Teresa",
    overview: "Teresa",
    textUnderline: "Drame",
    to: "/movies/novelas/teresa",
  },
];
export default function SliderNovelas() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Novelas
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

