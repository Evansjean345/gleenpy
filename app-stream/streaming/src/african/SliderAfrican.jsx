import React from "react";
import { Link } from "react-router-dom";

const carousel = [
    {
    imgURL:
      "https://www.francetvinfo.fr/pictures/VWHB00d6zPCXNrNofbIeNiLB1v8/1200x900/2019/12/26/phpk1MucH.jpg",
    imageAlt: "",
    smallTitle: "Kirikou",
    overview: "Kirikou",
    textUnderline: "aventure",
    to: "/movies/african/kirikou",
  },
  {
    imgURL:"https://medias.unifrance.org/medias/247/103/92151/format_page/aya-de-yopougon.jpg",
    smallTitle: "Aya de yopougon",
    imageAlt: "",
    overview:"Aya de yopougon",
    textUnderline: "Roman graphique",
    to: "/movies/african/aya",
  },
  {
    imgURL:
      "https://cdn-lejdd.lanmedia.fr/var/europe1/storage/images/lejdd/culture/cinema/actualite/zarafa-la-girafe-aventuriere-484255/38744192-2-fre-FR/Zarafa-la-girafe-aventuriere.jpg",
    imageAlt: "",
    smallTitle: "Zarafa",
    overview: "Zarafa",
    textUnderline: "Drame",
    to: "/movies/african/zarafa",
  },
  {
    imgURL: "https://www.afca.asso.fr/ressources/images/15/af4a4d,444,742x,00527.jpg",
    imageAlt: "",
    smallTitle: "La reine soleil",
    overview: "La reine soleil",
    textUnderline: "Animation d'image",
    to: "/movies/african/soleil",
  },
  {
    imgURL:
      "https://www.lereboot.com:2443/5fbce7adfe8da2130224e429bc793c79b55b8ff9/687474703a2f2f696d672e6f7665722d626c6f672d6b6977692e636f6d2f312f38382f31342f36302f32303136303830312f6f625f3162323932655f7072696e63652d642d6567797074652d313939382d30352d672e6a7067",
    imageAlt: "",
    smallTitle: "Le prince d'Egypte",
    overview: "Le prince d'Egypte",
    textUnderline: "Drama historique",
    to: "/movies/african/prince",
  },
  {
    imgURL: "https://fr.web.img3.acsta.net/newsv7/17/02/18/11/28/068401.jpg",
    imageAlt: "",
    smallTitle: "Le roi lion",
    overview: "Le roi lion",
    textUnderline: "Film musicale dramatique",
    to: "/movies/african/lion",
  },
  {
    imgURL: "https://thumb.canalplus.pro/http/unsafe/1280x720/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/106965784",
    imageAlt: " ",
    smallTitle: "Khumba",
    overview: "Khumba",
    textUnderline: "Animation d'image",
    to: "/movies/african/khumba",
  },
  {
    imgURL:
      "https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/filters:quality(%7BimageQualityPercentage%7D)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/70739420",
    imageAlt: " ",
    smallTitle: "Tarzan",
    overview: "Tarzan",
    textUnderline: "Aventure",
    to: "/movies/african/tarzan",
  },
  {
    imgURL: "https://i.ytimg.com/vi/Q-yTF_M1rhI/maxresdefault.jpg",
    imageAlt: "",
    smallTitle: "Adama",
    overview: "Adama",
    textUnderline: "Drame",
    to: "/movies/african/adama",
  },
  {
    imgURL: "https://fr.web.img2.acsta.net/pictures/15/11/10/21/32/095690.jpg",
    imageAlt: "",
    smallTitle: "Princesse Pokou",
    overview: "Princesse Pokou",
    textUnderline: "Aventure",
    to: "/movies/african/pokou",
  },
  {
    imgURL: "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/rythme_de_la_jungle_04_0.jpg?itok=VwVVK93C",
    imageAlt: "",
    smallTitle: "Le rythme de la jungle",
    overview: "Le rythme de la jungle",
    textUnderline: "Aventure",
    to: "/movies/african/jungle",
  },
];
export default function SliderAfrican() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Africain
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

