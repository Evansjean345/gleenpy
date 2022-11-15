import React from "react";
import { Link } from "react-router-dom";

const carousel = [
  {
    textUnderline: "Coupé décalé",
    overview: "C'est dosé",
    to: "/musics/dose",
    smallTitle: "Serge Beynaud",
    imgURL:
      "https://actupeople.net/wp-content/uploads/2022/03/Serge-Beynaud-cest-dose.jpg",
    imageAlt: "",
  },
  {
    imgURL:
      "https://i0.wp.com/bwelitribe.com/wp-content/uploads/2021/08/Capture-1.png?fit=760%2C887&ssl=1",
    imageAlt: "trippa",
    smallTitle: "Tripa GNINNIN",
    overview: "DECAPO",
    textUnderline: "RAP ivoire",
    to:'/musics/trippa'
  },
  {
    imgURL:
      "https://www.terre2buzz.com/File/MusicsAcceptees/Pochettes/Grand/2364_DiDi-B-Big-Boss.jpg",
    imageAlt: "didi B",
    smallTitle: "didi B",
    overview: "TALA",
    textUnderline: "RAP ivoire",
    to:"musics/tala"
  },
  {
    id: "39",
    overview: "Yee Molare",
    to: "/musics/molare",
    smallTitle: "Molaré",
    imgURL:
      "https://i.scdn.co/image/ab67616d0000b273b2766f5580722e93827f0c5b",
    textUnderline: "Coupé décalé",
  },
  {
    id: "2",
    overview: "En haut",
    to: "/musics/haut",
    smallTitle: "didi B X Jr Low",
    imgURL:
      "https://i0.wp.com/bwelitribe.com/wp-content/uploads/2022/08/300635916_5217977094985429_1942704835354281072_n.jpg?fit=1080%2C1115&ssl=1",
    textUnderline: "Rap ivoire",
  },
  {
    id: "39",
    overview: "Emiliana",
    to: "/musics/emiliana",
    smallTitle: "C kay",
    imgURL:
      "https://cdns-images.dzcdn.net/images/artist/032e7d03d75414baf8b73411e6679a13/500x500.jpg",
    textUnderline: "Afro Pop",
  },
  {
    id: "",
    overview: "stand strong",
    to: "/musics/davido",
    smallTitle: "Davido",
    imgURL: "https://data.mothership.tools/mothershiptools-ukprod/wp-content/uploads/2021/12/profile.jpg",
    textUnderline: "Afro Pop",
  },
  {
    imgURL:
      "https://media.resources.festicket.com/www/artists/burna-boy-gq-style-spring-summer-2020-promo-min.jpeg",
    imageAlt: "BurnaBoy",
    smallTitle: "Burna boy",
    overview: "Last Last",
    textUnderline: "Afro Pop",
    to:"/musics/burna"
  },
  {
    id: "",
    overview: "Skinny",
    to: "/musics/lewis",
    smallTitle: "Dj Lewis",
    imgURL: "https://media.afriqueshowbiz.com/2022/02/WhatsApp-Image-2021-07-01-at-11.18.39-700x470-1.jpeg",
    textUnderline: "Coupé décalé",
  },
  {
    id: "39",
    overview: "Anoumabo est joli",
    to: "/musics/magic",
    smallTitle: "Magic System",
    imgURL:
      "http://media.nrj.fr/436x327/2014/10/magic-system-fiche_4097.jpg",
    textUnderline: "Zouglou",
  },
  {
    id: "3",
    overview: "SOUCOUSS MAKOSSA",
    to: "/musics/kedjevara",
    smallTitle: "KEDJEVARA",
    imgURL: "https://lifemag-ci.com/wp-content/uploads/2019/05/kedjavara-toucher-le-sol.jpg",
    textUnderline: "Coupé décalé",
  },
  {
    id: "9",
    overview: "le boss n'est pas méchant",
    to: "/musics/vda",
    smallTitle: "VDA",
    imgURL:
      "https://lifemag-ci.com/wp-content/uploads/2021/02/vda3.jpg",
    textUnderline: "Zouglou",
  },
  {
    imgURL:
      "https://www.letelegramme.fr/images/2020/07/22/en-2019-josman-avait-fait-salle-comble-a-brest-son-retour_5237179.jpg",
    imageAlt: "JOS",
    smallTitle: "Josman",
    overview: "INTRO",
    textUnderline: "French rap",
    to:'/musics/intro'
  },
  {
    imgURL:
      "https://leclaireur.fnac.com/wp-content/uploads/2022/06/tiakola.jpg",
    imageAlt: "Tiakola",
    smallTitle: "Tiakola",
    overview: "Si j'savais",
    textUnderline: "French rap",
    to:'musics/tiakola'
  },
];

export default function SlidePlaylist() {
  return (
    <div className="bg-black sm:pr-20 sm:pl-20">
      <div className="carousel carousel-end rounded-box cursor-pointer sm:p-6">
        {carousel.map((items) => {
          return (
            <div className="carousel-item pr-6  rounded-xl relative">
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
