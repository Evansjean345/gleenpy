import React from "react";
import { Link } from "react-router-dom";

const carousel = [
  {
    imgURL:
      "https://www.billboard.com/wp-content/uploads/2021/12/brent-faiyaz-press-2021-cr-mark-peaced-billboard-1548.jpg",
    imageAlt: "16callsMissed",
    smallTitle: "Brent Faiyaz X baby Keem",
    overview: "16 calls missed",
    textUnderline: "R&B/SOUL",
    to:"/musics/brent"
  },
  {
    imgURL:
      "https://bazik.tv/wp-content/uploads/2021/07/summer-walker-1-e1570671184568.jpeg",
    imageAlt: "summer walker",
    smallTitle: "Summer Walker",
    overview: "Karma",
    textUnderline: "R&B/SOUL",
    to:"/musics/summer"
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
      "https://media.resources.festicket.com/www/artists/burna-boy-gq-style-spring-summer-2020-promo-min.jpeg",
    imageAlt: "BurnaBoy",
    smallTitle: "Burna boy",
    overview: "Last Last",
    textUnderline: "Afro Pop",
    to:"/musics/burna"
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
  {
    imgURL:
      "https://www.leparisien.fr/resizer/EW9yKuTxje7KyQWol5tRdwj2s5w=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/46RBYITAIZGUPIRXTKOLZ7OJ6U.jpg",
    imageAlt: "gazo",
    smallTitle: "Gazo",
    overview: "DIE",
    textUnderline: "French rap",
    to:'/musics/gazo'
  },
  {
    imgURL: "https://intrld.com/wp-content/uploads/2022/04/nekfeu-1000x600.png",
    imageAlt: "Nekfeu",
    smallTitle: "Nekfeu X Nemir",
    overview: "Elle pleut",
    textUnderline: "French rap",
    to:"/musics/nekfeu"
  },
  {
    imgURL:
      "https://lastfm.freetls.fastly.net/i/u/770x0/71b8da409adceffff81c48b7b07815f8.jpg",
    imageAlt: "dojaCat",
    smallTitle: "Doja Cat",
    overview: "Streets",
    textUnderline: "R&B",
    to:'/musics/streets'
  },
  {
    imgURL:
      "https://i.pinimg.com/564x/8b/c7/8d/8bc78dd6cd9586985485025e102c0826.jpg",
    imageAlt: "IceSpice",
    smallTitle: "Ice spice",
    overview: "Munch(Feelin'U)",
    textUnderline: "Hip-Hop/Rap",
    to:"/musics/munch"
  },
  {
    imgURL:
      "https://cdns-images.dzcdn.net/images/artist/34a786644e1e75a805c78741ad806483/500x500.jpg",
    imageAlt: "LilTecca",
    smallTitle: "Lil Tecca",
    overview: "Ransom",
    textUnderline: "Hip-Hop/Rap",
    to:'/musics/tecca'
  },
  {
    imgURL:
      "https://hiphopcorner.fr/wp-content/uploads/2019/04/image-21-savage-ball-wo-you-clip-1200x900.png",
    imageAlt: "21Savage",
    smallTitle: "21 Savage",
    overview: "Ball w/o you",
    textUnderline: "Hip-Hop/Rap",
    to:"/musics/savage"
  },
  {
    imgURL:
      "https://i1.sndcdn.com/artworks-W8UVjgP3HLQAalti-FguZ3A-t500x500.jpg",
    imageAlt: "PlayboiCarti",
    smallTitle: "Playboi Carti",
    overview: "SKY",
    textUnderline: "Hip-Hop/Rap",
    to:"/musics/carti"
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
