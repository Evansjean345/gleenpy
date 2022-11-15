import { React } from "react";
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
    imgURL:
      "https://i.pinimg.com/originals/d6/31/f5/d631f59cd09d33aa4b3072d69b07571d.jpg",
    imageAlt: "LaCitéDeDIEU",
    smallTitle: "la cité de Dieu",
    overview: "La cité de Dieu",
    textUnderline: "1 Tome",
    to: "/movies/theCityOfGod",
  },
  {
    imgURL:
      "https://medias.unifrance.org/medias/247/103/92151/format_page/aya-de-yopougon.jpg",
    smallTitle: "Aya de yopougon",
    imageAlt: "",
    overview: "Aya de yopougon",
    textUnderline: "Roman graphique",
    to: "/movies/african/aya",
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
    imgURL: "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_thenewyorker.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1435379180/thenewyorker_movie-of-the-week-touki-bouki.jpg",
    imageAlt: "",
    smallTitle: "Touki Bouki",
    overview: "Touki Bouki",
    textUnderline: "comedie/fiction",
    to: "/movies/comedie/touki",
  },
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
    imgURL:
      "https://www.denofgeek.com/wp-content/uploads/2020/02/sex-education-season-2-1-netflix.jpg?resize=768%2C432",
    imageAlt: "sex education",
    smallTitle: "sex education",
    overview: "Sex education",
    textUnderline: "3 saisons",
    to: "/movies/sexEducation",
  },
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
      "https://www.studioghibli.fr/wp-content/uploads/2009/07/spirited_away1-1024x638.png",
    imageAlt: "",
    smallTitle: "Le voyage de chichiro",
    overview: "Le voyage de chichiro",
    textUnderline: "Film à énigme",
    to: "/movies/home/chichiro",
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
      "https://2.bp.blogspot.com/-96r81ZnsZCI/VzRZGsUqsQI/AAAAAAAAkAI/qIGO9xD_bSkCLoj6Cd766pcal7kKWCcbACLcB/s1600/the-human-centipede-2-tom-six-photo-1.jpg",
    imageAlt: "",
    smallTitle: "The human centipede",
    overview: "The human centipede",
    textUnderline: "1 tome",
    to: "/movies/theHuman",
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
