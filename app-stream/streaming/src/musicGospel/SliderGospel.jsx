import React from "react";
import { Link } from "react-router-dom";

const carousel = [
  {
    id: "7",
    title: "Commando",
    to: "/musics/ks",
    artist: "Ks Bloom",
    imageSrc:
      "https://organe.pressecotedivoire.fr/img/article/1668756603-15231.jpg",
    imageAlt: "",
  },
  {
    id: "25",
    title: "Dena Mwana",
    to: "/musics/Dena",
    artist: "Je Bénirai L'Éternel",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/DenaMwana2020.jpg",
    imageAlt: "",
  },
  {
    id: "15",
    title: "Bless Me",
    to: "/musics/kirk",
    artist: "Kirk Franklin ",
    imageSrc:
      "https://media.npr.org/assets/img/2016/01/29/kf_publicity1_wide-471c1203928aff225f9d084b65ca05c9b9ad8612-s1100-c50.jpg",
    imageAlt: "",
  },
  {
    id: "30",
    title: "Igo",
    to: "/musics/okit",
    artist: "David Okit",
    imageSrc:
      "https://i.scdn.co/image/ab6761610000e5ebc286b4736d8247c665538613",
    imageAlt: "",
  },
  {
    id: "30",
    title: "Bilaka ya bo mwana",
    to: "/musics/mbiye",
    artist: "Moise Mbiye",
    imageSrc:
      "https://www.journaldekinshasa.com/wp-content/uploads/2022/05/MBIYE-121.jpeg",
    imageAlt: "",
  },
  {
    id: "13",
    title: "I Made It",
    to: "/musics/debo",
    artist: "Deborah Lukalu",
    imageSrc:
      "https://www.musicinafrica.net/sites/default/files/images/artist_profile/201901/deborahlukalu.jpg",
    imageAlt: "",
  },
  {
    id: "7",
    title: "Goodness of GOD",
    to: "/musics/cece",
    artist: "Cece Winans",
    imageSrc:
      "https://yt3.ggpht.com/C3y7W-8bi_-ag9AVf8dTyokY2HGH0wjpWk6PhiMsULu96VC_Enr0IqbeiNtGCqnHWhk3sbEB=s900-c-k-c0x00ffffff-no-rj",
    imageAlt: "",
  },
];
export default function SliderGospel() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Gospel
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
