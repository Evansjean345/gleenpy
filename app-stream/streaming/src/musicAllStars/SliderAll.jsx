import React from "react";
import { Link } from "react-router-dom";

function SliderAll() {
  const music = [
    {
      id: "39",
      title: "Anoumabo est joli",
      to: "/musics/magic",
      artist: "Magic System",
      imageSrc:
        "http://media.nrj.fr/436x327/2014/10/magic-system-fiche_4097.jpg",
      imageAlt: "",
    },
    {
      id: "7",
      title: "Is This Love",
      to: "/musics/love",
      artist: "Bob Marley",
      imageSrc:
        "https://cdn.britannica.com/73/101873-050-D341E939/Bob-Marley-1978.jpg",
      imageAlt: "",
    },
    {
      id: "",
      title: "VDA",
      to: "/musics/cadenas",
      artist: "Bloqué Cadenas",
      imageSrc: "https://lifemag-ci.com/wp-content/uploads/2021/02/vda3.jpg",
      imageAlt: "",
    },
    {
      id: "7",
      title: "Cherie coco",
      to: "/musics/coco",
      artist: "didi B X Black K X 3xdavs",
      imageSrc:
        "https://i0.wp.com/bwelitribe.com/wp-content/uploads/2022/10/312655164_660682315434304_2263490710166496575_n.jpeg?fit=1440%2C961&ssl=1",
      imageAlt: "",
    },
    {
      id: "",
      title: "le vieux est trop fort",
      to: "/musics/pro",
      artist: "Les pro du Zouglou",
      imageSrc:
        "https://yt3.ggpht.com/wvDAdsE50GLD6jmoy-a4BGncaAAo3NwrMa1AGaR3AKwN-C369IwNVj3LPB2VtMndsJR1eCzrUKI=s900-c-k-c0x00ffffff-no-rj",
      imageAlt: "",
    },
    {
      id: "15",
      title: "Femme",
      to: "/musics/femme",
      artist: "Koffi Olomide",
      imageSrc:
        "        https://ichef.bbci.co.uk/news/640/cpsprodpb/15F0A/production/_113566898_koffio.png",
      imageAlt: "",
    },
    {
      id: "",
      title: "Sans effet",
      to: "/musics/tayc",
      artist: "Tayc",
      imageSrc:
        "https://i.scdn.co/image/ab6761610000e5ebce9a6fa48c2beaf39ef9d599",
      imageAlt: "",
    },
    {
      id: "18",
      title: "Du mal à te dire",
      to: "/musics/dinos",
      artist: "Dinos X Damso",
      imageSrc:
        "https://images.genius.com/a26077803c9826045fc1b2c00c313820.1000x523x1.jpg",
      imageAlt: "",
    },
    {
      id: "7",
      title: "Université",
      to: "/musics/cindy",
      artist: "Cindy le Coeur",
      imageSrc:
        "https://i0.wp.com/mbote.cd/app/uploads/2020/12/images-3.jpeg?fit=739%2C415&ssl=1",
      imageAlt: "",
    },
    //////////
    {
      id: "1",
      title: "Ku lo sa",
      to: "/musics/oxlade",
      artist: "Oxlade",
      imageSrc: "https://i.ytimg.com/vi/1pDQjwaH3qk/maxresdefault.jpg",
      imageAlt: "Oxalde",
    },
    {
      id: "25",
      title: "Se Yo",
      to: "/musics/fally",
      artist: "fally Ipupa",
      imageSrc:
        "https://www.trendyhiphop.com/wp-content/uploads/2022/10/Fally-Ipupa-Se-Yo-MP3.webp",
      imageAlt: "",
    },

    {
      id: "33",
      title: "Tomorrow 2",
      to: "/musics/cardi",
      artist: "Glorilla X Cardi B",
      imageSrc:
        "https://www.billboard.com/wp-content/uploads/2022/09/GloRilla-Cardi-B-Tomorrow-2-billboard-1548.jpg",
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
      id: "25",
      title: "Envolver",
      to: "/musics/anitta",
      artist: "Anitta",
      imageSrc:
        "https://static01.nyt.com/images/2022/04/10/arts/10anitta1/10anitta1-videoSixteenByNine3000-v2.jpg",
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
      id: "11",
      title: "Marie Pierre",
      to: "/musics/elown",
      artist: "Elow'n",
      imageSrc:
        "https://i.scdn.co/image/ab6761610000e5eb19ea161f21b4929178589192",
      imageAlt: "Marie Pierre",
    },
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
      id: "40",
      title: "Emiliana",
      to: "/musics/emiliana",
      artist: "Ckay",
      imageSrc:
        "https://cdns-images.dzcdn.net/images/artist/032e7d03d75414baf8b73411e6679a13/500x500.jpg",
      imageAlt: "",
    },
  ];
  return (
    <>
      <div className="bg-black">
        <article>
          <div className="bg-black">
            <div className="max-w-2xl mx-auto py-8 px-4 sm:py-24 sm:px-12 lg:max-w-7xl lg:px-8">
              <p className="mt-2 text-xl leading-8 font-bold tracking-tight text-white sm:text-3xl">
                Retrouvez les meilleurs
                <br />
                hits de vos stars préférés sur gleenpy
              </p>
              <br />
              <br />
              <br />
              <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {music.map((item) => (
                  <Link
                    key={item.id}
                    to={item.to}
                    className="group transform sm:hover:scale-125 transition-all  "
                  >
                    <h3 className="mt-4 text-sm text-gray-400">{item.title}</h3>
                    <p className="mt-1 text-lg font-medium text-white">
                      {item.artist}
                    </p>
                    <br />
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-400 rounded-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8  relative ">
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="w-full lg:h-56 h-32 object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default SliderAll;
