import { React } from "react";
import { Link } from "react-router-dom";

const carousel = [
  {
    imgURL:
      "https://media2.ledevoir.com/images_galerie/nwd_525042_380313/image.jpg",
    imageAlt: "allEyesOnMe",
    smallTitle: "2 pac",
    overview: "All eyez one me",
    textUnderline: "1 Tome",
    to: "/movies/allEyezOnMe",
  },
  {
    imgURL:
      "https://i.pinimg.com/originals/d6/31/f5/d631f59cd09d33aa4b3072d69b07571d.jpg",
    imageAlt: "LaCitéDeDIEU",
    smallTitle: "la cité de Dieu",
    overview: "La cité de Dieu",
    textUnderline: "1 Tome",
    to: "/movies/theCityOfGod",
  },
  {
    imgURL: "https://fr.web.img6.acsta.net/pictures/19/07/09/11/04/5921608.jpg",
    imageAlt: "SAO",
    smallTitle: "aincrad",
    overview: " Sword Art Oline",
    textUnderline: "4 saisons",
    to: "/movies/anime/sao",
  },
  {
    imgURL:
      "https://cultureasiatique.fr/wp-content/uploads/2022/03/one-piece.webp",
    imageAlt: "One piece",
    smallTitle: "One piece",
    overview: "One piece",
    textUnderline: "20 saisons",
    to: "/movies/anime/luffy",
  },
  {
    imgURL: "https://gaak.fr/wp-content/uploads/2019/09/Fairy-Tail-1.jpg",
    imageAlt: "nicky larson",
    smallTitle: "city Hunter",
    overview: "Nicky Larson",
    textUnderline: "2 saisons",
    to: "/movies/anime/larson",
  },
  {
    imgURL:
      "https://www.troyes-obs.fr/wp-content/uploads/2021/03/lucifer-season-5-part-2.jpg",
    imageAlt: "lucifer",
    smallTitle: "lucifer",
    overview: " Lucifer",
    textUnderline: "6 saisons",
    to: "/movies/lucifer",
  },
  {
    imgURL:
      "https://www.animeunited.com.br/oomtumtu/2021/02/0be717d4bb1c6005ddaca95c6275a13d1612261404_main.jpg",
    imageAlt: "black clover",
    smallTitle: "Black clover",
    overview: "Black clover",
    textUnderline: "4 saisons",
    to: "/movies/anime/asta",
  },
  {
    imgURL: "https://www.denofgeek.com/wp-content/uploads/2020/02/sex-education-season-2-1-netflix.jpg?resize=768%2C432",
    imageAlt: "sex education",
    smallTitle: "sex education",
    overview: "Sex education",
    textUnderline: "3 saisons",
    to: "/movies/sexEducation",
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
    imgURL: "https://static.hitek.fr/img/up_m/152666370/fairytail.jpg",
    imageAlt: "fairy tail",
    smallTitle: "Fairy Tail",
    overview: "Fiary tail",
    textUnderline: "9 saisons",
    to: "/movies/anime/lucy",
  },
  { 
    imgURL:
      "https://2.bp.blogspot.com/-96r81ZnsZCI/VzRZGsUqsQI/AAAAAAAAkAI/qIGO9xD_bSkCLoj6Cd766pcal7kKWCcbACLcB/s1600/the-human-centipede-2-tom-six-photo-1.jpg",
    imageAlt: "",
    smallTitle: "The human centipede",
    overview: "The human centipede",
    textUnderline: "1 tome",
    to: "/movies/theHuman",
  },
  {
    imgURL:
      "https://media1.ledevoir.com/images_galerie/nwd_305670_206682/image.jpg",
    imageAlt: "50 nuances de grey",
    smallTitle: "50 nuances de grey",
    overview: "Cinquante nuances de grey",
    textUnderline: "3 tomes",
    to: "/movies/fiftyShadesOfGrey",
  },
  {
    imgURL:
      "https://www.premiere.fr/sites/default/files/styles/scale_crop_border_1280x720/public/2020-03/Kaguya.jpg",
    imageAlt: "",
    smallTitle: "le conte de la princesse Kaguya",
    overview: "Le conte de la princesse Kaguya",
    textUnderline: "Fiction d'apprentissage",
    to: "/movies/home/kaguya",
  },
  {
    imgURL:
      "https://imgr.cineserie.com/2020/08/annabelle-2-decouvrez-la-precaution-prise-sur-le-tournage-du-film-d-horreur-1.jpg?imgeng=/f_jpg/cmpr_0/w_1200/h_675/m_cropbox&ver=1",
    imageAlt: "",
    smallTitle: "annabelle",
    overview: "Annabelle",
    textUnderline: "1 tome",
    to: "/movies/annabelle",
  },
];

export default function SlideHeader() {
  return (
    <div className="bg-black sm:pr-20 sm:pl-20">
      <div className="carousel carousel-end rounded-box cursor-pointer sm:p-6">
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
  );
}
