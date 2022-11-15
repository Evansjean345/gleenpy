import React from 'react'
import { Link } from "react-router-dom";

const carousel = [
    {
    imgURL:
      "https://www.clique.tv/wp-content/uploads/2017/03/naruto-shi.png",
    imageAlt: "",
    smallTitle: "Naruto Shippuden",
    overview: "Naruto Shippuden",
    textUnderline: "20 saisons",
    to: "/movies/anime/naruto",
  },
    {
    imgURL:
      "https://katsuuu.com/wp-content/uploads/2020/05/my-geek-actu-fullmetal-alchemist-top102.jpg",
    imageAlt: "",
    smallTitle: "full metal alchemist",
    overview: "Full Metal Alchemist Brotherhood",
    textUnderline: "5 saisons",
    to: "/movies/anime/metal",
  },
  {
    imgURL:"https://www.animeclick.it/immagini/anime/The_Promised_Neverland/cover/The_Promised_Neverland-cover.jpg",
    smallTitle: "the promised neverland",
    imageAlt: "",
    overview:"The Promised Neverland",
    textUnderline: "2 saisons",
    to: "/movies/anime/neverland",
  },
  {
    imgURL: "https://www.playcentral.de/wp-content/uploads/2020/06/Cowboy-Bebop.jpg",
    imageAlt: "",
    smallTitle: "cowboy bebop",
    overview: "Cowboy Bebop",
    textUnderline: "1 saison",
    to: "/movies/anime/bebop",
  },
  {
    imgURL:
      "https://i0.wp.com/undecent.fr/wp-content/uploads/2022/03/deathnote.jpg?resize=1024%2C990&ssl=1",
    imageAlt: "",
    smallTitle: "death note",
    overview: "Death Note",
    textUnderline: "2 saisons",
    to: "/movies/anime/note",
  },
  {
    imgURL: "https://images.squarespace-cdn.com/content/v1/574bec3527d4bdfe229ea099/1560454552605-33A62GQB2W2MJSH91VEK/66791-0-q80.jpg?format=1000w",
    imageAlt: "",
    smallTitle: "code geass",
    overview: "Code Geass",
    textUnderline: "2 saisons",
    to: "/movies/anime/geass",
  },
  {
    imgURL: "https://www.manga-news.com/public/images/dvd/food-wars-s4-anime.jpg",
    imageAlt: "",
    smallTitle: "foods wars",
    overview: "Foods Wars",
    textUnderline: "5 saisons",
    to: "/movies/anime/soma",
  },
  {
    imgURL: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/Q6WJ6FP72FAIVLHVABJD667HB4.jpg",
    imageAlt: "",
    smallTitle: "attack on titan",
    overview: "Attack on Titan",
    textUnderline: "4 saisons",
    to: "/movies/anime/titan",
  },
  {
    imgURL:
      "https://as01.epimg.net/meristation_en/imagenes/2022/07/17/news/1658069215_091445_1658069428_noticia_normal.jpg",
    imageAlt: "",
    smallTitle: "one piece",
    overview: "One Piece",
    textUnderline: "20 saisons",
    to: "/movies/anime/luffy",
  },
  {
    imgURL:
      "https://i0.wp.com/www.kearipan.com/wp-content/uploads/2022/07/black-clover-anime.jpg",
    imageAlt: "",
    smallTitle: "black clover",
    overview: "Black Clover",
    textUnderline: "4 saisons",
    to: "/movies/anime/asta",
  },
  {
    imgURL: "https://bleachmx.fr/wp-content/uploads/Sword-Art-Online-Alicization-War-of-Underworld-episode-8.jpg",
    imageAlt: "",
    smallTitle: "sword art online",
    overview: "Sword Art Online",
    textUnderline: "4 saisons",
    to: "/movies/anime/sao",
  },
  {
    imgURL:
      "https://www.squarepalace.com/sites/default/files/actualites/3881/3881.jpg",
    imageAlt: "",
    smallTitle: "nicky larson",
    overview: "Nicky Larson",
    textUnderline: "2 saisons",
    to: "/movies/anime/larson",
  },
  {
    imgURL:
      "https://www.nautiljon.com/images/anime/00/21/fairy_tail_2014_3012.jpg?1617738275",
    imageAlt: "",
    smallTitle: "fairy tail",
    overview: "Fairy Tail",
    textUnderline: "9 saisons",
    to: "/movies/anime/lucy",
  },
  {
    imgURL:
      "https://www.urban-fusions.fr/wp-content/uploads/2021/06/seven-deadly-sins-saison-6.jpg",
    imageAlt: "",
    smallTitle: "the seven deadly sins",
    overview: "The Seven Deadly Sins",
    textUnderline: "5 saisons",
    to: "/movies/anime/sins",
  },
  {
    imgURL:
      "https://furansujapon.com/wp-content/uploads/2021/05/Noragami-saison-3.jpg",
    imageAlt: "",
    smallTitle: "noragmi",
    overview: "Noragami",
    textUnderline: "2 saisons",
    to: "/movies/anime/yato",
  },
  {
    imgURL:
      "https://leclaireur.fnac.com/wp-content/uploads/2022/02/demon-slayer.jpeg",
    imageAlt: "",
    smallTitle: "demon slayer",
    overview: "Demon Slayer",
    textUnderline: "2 saisons",
    to: "/movies/anime/slayer",
  },
  {
    imgURL:
      "https://www.urban-fusions.fr/wp-content/uploads/2020/07/My-Hero-Academia-the-Movie-Heroes-Rising-2.jpg",
    imageAlt: "",
    smallTitle: "MHA",
    overview: "My Hero Academia",
    textUnderline: "6 saisons",
    to: "/movies/anime/mha",
  },
];
export default function SliderAnime() {
  return (
    <div className="bg-black sm:pr-20 sm:pl-20">
    <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
       Dessins animés
      <br/>
      <br/>
    </p>
    <div className="carousel carousel-end rounded-box cursor-pointer sm:p-6 ">
      {carousel.map((items) => {
        return (
          <div className="carousel-item pl-2 pr-6 rounded-xl relative">
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
