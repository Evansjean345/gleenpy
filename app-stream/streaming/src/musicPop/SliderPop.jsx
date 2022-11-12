import React from "react";
import { Link } from "react-router-dom";

const carousel = [
    {
        id: "25",
        title: "Envolver",
        to: "/musics/anitta",
        artist: "Anitta",
        imageSrc:
          "https://static01.nyt.com/images/2022/04/10/arts/10anitta1/10anitta1-videoSixteenByNine3000-v2.jpg",
        imageAlt: "",
      },
      {
        id: "15",
        title: "Skoin Skoin",
        to: "/musics/bianca",
        artist: "Ckay X Bianca Costa",
        imageSrc:
          "https://www.melolive.fr/wp-content/uploads/2021/07/bianca-costa-09072021-milyclic-9.jpg",
        imageAlt: "skoin skoin",
      },
      {
        id: "30",
        title: "Obsessed with you",
        to: "/musics/obsessed",
        artist: "Central Cee",
        imageSrc:
          "https://images.sk-static.com/images/media/profile_images/artists/10154650/huge_avatar",
        imageAlt: "",
      },
      {
        id: "13",
        title: "Picture in my mind",
        to: "/musics/picture",
        artist: "PinkPantheress",
        imageSrc: "https://i.ytimg.com/vi/SIHS1lLzqOo/maxresdefault.jpg",
        imageAlt: "picture in my mind",
      },
      {
        id: "7",
        title: "Saoko",
        to: "/musics/rosalia",
        artist: "Rosalià",
        imageSrc:
          "https://www.objetivoreggaeton.com/wp-content/uploads/2022/02/motomami-es-el-album-de-rosalia.jpg",
        imageAlt: "Rosalià",
      },
      {
        id: "7",
        title: "Coffee",
        to: "/musics/coffee",
        artist: "Beabadoobee",
        imageSrc:
          "https://media.npr.org/assets/img/2020/03/01/beabadoobee---jordan-curtis-hughes2-8eb56be1a64ebccc6b704fa65166f7a38989394d.jpeg",
        imageAlt: "",
      },
];
export default function SliderPop() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Pop music
          <br />
          <br />
        </p>
        <div className="carousel carousel-end rounded-box cursor-pointer sm:p-6 ">
          {carousel.map((items) => {
            return (
              <div className="carousel-item  pl-2 pr-6 group rounded-xl relative">
                <Link to={items.to}>
                  <img
                    src={items.imageSrc}
                    alt={items.imageAlt}
                    className="rounded-full h-[220px] w-[260px]  sm:transform sm:transition-all sm:group-hover:scale-90"
                  />
                  <div className="absolute pl-6 m-6 bottom-0 z-30 sm:group-hover:scale-90 ">
                    <h1 className="w-64 text-lg font-semibold leading-8 mt-2 text-white">
                      {items.artist}
                    </h1>
                    <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                      {items.title}
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
