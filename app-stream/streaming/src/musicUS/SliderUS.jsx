import React from "react";
import { Link } from "react-router-dom";

const carousel = [
    {
        id: "20",
        title: "munch(feelin'U)",
        to: "/musics/munch",
        artist: "ice spice",
        imageSrc:
          "https://i.pinimg.com/564x/8b/c7/8d/8bc78dd6cd9586985485025e102c0826.jpg",
        imageAlt: "",
      },
    {
        id: "20",
        title: "In a minute",
        to: "/musics/baby",
        artist: "Lil Baby",
        imageSrc:
          "https://hiphopcorner.fr/wp-content/uploads/2021/08/01-Lil-Baby-Kenneth-Cappello-2020-billboard-1548-1593440487-compressed.jpg",
        imageAlt: "",
      },
    {
        id: "20",
        title: "ransom",
        to: "/musics/tecca",
        artist: "Lil tecca",
        imageSrc:
          "https://townsquare.media/site/812/files/2019/07/LIL-TECCA-PIC.jpg",
        imageAlt: "",
      },
    {
        id: "20",
        title: "16 missed calls",
        to: "/musics/brent",
        artist: "brent faiyaz",
        imageSrc:
          "https://assets.vogue.com/photos/62c5e16903b6d9a4fdd6b839/master/pass/20220618_VOGUE_BRENT-FAIYAZ_LOOK_03_090.jpg",
        imageAlt: "",
      },
      {
        id: "33",
        title: "Tomorrow 2",
        to: "/musics/cardi",
        artist: "Glorilla X Cardi B",
        imageSrc: "https://www.billboard.com/wp-content/uploads/2022/09/GloRilla-Cardi-B-Tomorrow-2-billboard-1548.jpg",
        imageAlt: "",
      },
      {
        id: "14",
        title: "Doja",
        to: "/musics/central",
        artist: "Central Cee",
        imageSrc:
          "https://intrld.com/wp-content/uploads/2022/08/central-cee-radio-edit.png",
        imageAlt: "Doja",
      },
      {
        id: "19",
        title: "Donda",
        to: "/musics/donda",
        artist: "Kanye West",
        imageSrc:
          "https://www.castanet.net/content/2022/10/bang_74587_p.jpg",
        imageAlt: "",
      },
      {
        id: "21",
        title: "Champage Poetry",
        to: "/musics/drake",
        artist: "Drake",
        imageSrc:
          "https://focus.telerama.fr/2022/06/20/0/0/2686/3500/1200/0/60/0/0cf2c6c_416318856-005050800011.jpg",
        imageAlt: "",
      },
      {
        id: "32",
        title: "Where i belong",
        to: "/musics/joey",
        artist: "Joey Bada$$ ",
        imageSrc:
          "https://i.scdn.co/image/ab6761610000e5ebf1d35b11bc9729630dda0bae",
        imageAlt: "",
      },
      {
        id: "34",
        title: "Spin",
        to: "/musics/kodak",
        artist: "Kodak Black",
        imageSrc:
          "https://i.guim.co.uk/img/media/a8777218c65057792cb2e3c47ffa8dc8961d2e2f/0_528_3550_2127/master/3550.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=00c86ad4b01cf39faf75b3111b7d9c3f",
        imageAlt: "",
      },
      {
        id: "10",
        title: "City girls",
        to: "/musics/girls",
        artist: "YNW melly",
        imageSrc: "https://i.ytimg.com/vi/Ex4vjtFhiKg/maxresdefault.jpg",
        imageAlt: "city girls",
      },
      {
        id: "24",
        title: "Champion",
        to: "/musics/nav",
        artist: "Nav",
        imageSrc:
          "https://laklika.net/wp-content/uploads/2020/05/Nav2.jpg",
        imageAlt: "",
      },
      {
        id: "13",
        title: "Stop Breathing",
        to: "/musics/roddy",
        artist: "Roddy Ricch",
        imageSrc: "https://pbs.twimg.com/profile_images/1542873041348198401/jqHvYoLR_400x400.jpg",
        imageAlt: "",
      },
      {
        id: "31",
        title: "Wifey",
        to: "/musics/rubi",
        artist: "Rubi Rose",
        imageSrc:
          "https://64.media.tumblr.com/a42fd1f11fc5664e06bae22702fb8711/b777442f32b7869d-63/s540x810/1346773521e8de2cc9f756e7623fef22a8bed742.jpg",
        imageAlt: "Oxalde",
      },
      {
        id: "35",
        title: "Save me,Please",
        to: "/musics/trippie",
        artist: "Trippie Red",
        imageSrc:
          "https://pbs.twimg.com/media/FboU8T4UcAEugmT.jpg",
        imageAlt: "",
      },
      {
        id: "23",
        title: "Single Again",
        to: "/musics/seann",
        artist: "Big Seann",
        imageSrc:
          "https://images.genius.com/4130f40ae9251235db1c9b5a27d321d7.1000x1000x1.png",
        imageAlt: "",
      },
      {
        id: "6",
        title: "Novocane",
        to: "/musics/shiloh",
        artist: "Shiloh dynasty",
        imageSrc:
          "https://c.saavncdn.com/950/Shiloh-Dynasty-Remixes-Pt-2--English-2018-20180713003830-500x500.jpg",
        imageAlt: "Novocane",
      },
      {
        id: "5",
        title: "#miles",
        to: "/musics/miles",
        artist: "Skaiwater",
        imageSrc:
          "https://rapwithus.com/wp-content/uploads/2022/01/Skaiwater-1-1-819x1024.jpg",
        imageAlt: "#miles",
      },
      {
        id: "4",
        title: "Bad habit",
        to: "/musics/habit",
        artist: "Steve Lacy",
        imageSrc: "https://tecoapple.com/wp-content/uploads/2022/06/stevelacybadhabitv022.jpg",
        imageAlt: "bhad habit",
      },
      {
        id: "38",
        title: "Thot Shit",
        to: "/musics/thot",
        artist: "Megan Thee Stalion",
        imageSrc:
          "https://media.glamour.com/photos/5fbb16bf5d9d61b31c7b9881/6:7/w_1998,h_2331,c_limit/GettyImages-1270370151.jpg",
        imageAlt: "Doja",
      },
      {
        id: "36",
        title: "Beats The Odds",
        to: "/musics/tjay",
        artist: "Lil Tjay",
        imageSrc: "https://generations.fr/media/news/lil-tjay-s-est-fait-tirer-dessus-lors-d-une-attaque-a-mains-armees_62b41cf9d2ca9.jpg",
        imageAlt: "",
      },
      {
        id: "22",
        title: "Escape Plan",
        to: "/musics/travis",
        artist: "Travis Scott",
        imageSrc:
          "https://images.bfmtv.com/bPn3vP76RwQsgUSa80XZlcZJ34U=/0x87:2048x1239/2048x0/images/Travis-Scott-a-New-York-en-septembre-2021-1162351.jpg",
        imageAlt: "",
      },
];
export default function SliderUS() {
  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Rap US
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
