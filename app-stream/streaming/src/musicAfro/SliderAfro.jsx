import React from "react";
import { Link } from "react-router-dom";

const carousel = [
    {
        id: "39",
        title: "It's plenty",
        to: "/musics/plenty",
        artist: "Burna Boy",
        imageSrc:
          "https://static.standard.co.uk/2021/02/23/17/Burna20Boy202.jpg?width=1200&auto=webp&quality=75",
        imageAlt: "",
      },
    {
        id: "39",
        title: "Emiliana",
        to: "/musics/emiliana",
        artist: "C kay",
        imageSrc:
          "https://cdns-images.dzcdn.net/images/artist/032e7d03d75414baf8b73411e6679a13/500x500.jpg",
        imageAlt: "",
      },
      {
        id: "9",
        title: "Calm down",
        to: "/musics/rema",
        artist: "Rema",
        imageSrc:
          "https://novice2star.com/wp-content/uploads/2022/02/rema-calm-down-lyrics-1000x600.jpg",
        imageAlt: "Calm down",
      },
      {
        id: "",
        title: "stand strong",
        to: "/musics/davido",
        artist: "Davido",
        imageSrc: "https://data.mothership.tools/mothershiptools-ukprod/wp-content/uploads/2021/12/profile.jpg",
        imageAlt: "",
      },
      {
        id: "3",
        title: "Soweto",
        to: "/musics/soweto",
        artist: "Victony X Tempoe",
        imageSrc: "https://mdundo.com/media/article-thumbs/t39362.jpg",
        imageAlt: "soweto",
      },
      {
        id: "",
        title: "Mood",
        to: "/musics/wizkid",
        artist: "Wizkid x BNXN",
        imageSrc: "https://www.thisdaystyle.ng/batman/2020/09/Wizkid02.jpg",
        imageAlt: "",
      },
      {
        id: "3",
        title: "isakaba",
        to: "/musics/wandae",
        artist: "wande coal",
        imageSrc: "https://trendybeatz.com/images/wande_coal.jpg",
        imageAlt: "",
      },
      {
        id: "3",
        title: "alcohol",
        to: "/musics/joeboy",
        artist: "Joeboy",
        imageSrc: "https://www.clashmusic.com/wp-content/uploads/2021/01/2-1_1.jpg",
        imageAlt: "",
      },
      {
        id: "3",
        title: "Last Last",
        to: "/musics/burna",
        artist: "Burna boy",
        imageSrc: "https://media.gq.com/photos/5e5ebb6de196b50008c072e5/master/w_3000,h_4500,c_limit/burna-boy-gq-style-spring-summer-2020-11.jpg",
        imageAlt: "",
      },
      {
        id: "",
        title: "Party with A Jagaban",
        to: "/musics/jagaban",
        artist: "Midas the Jagaban",
        imageSrc: "https://yt3.ggpht.com/ytc/AMLnZu__YNXlIdILrCpU8fRw3cCPaEqTCmvMSBfWXvz2hg=s900-c-k-c0x00ffffff-no-rj",
        imageAlt: "",
      },
];
export default function SliderAfro() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Afro Pop
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
