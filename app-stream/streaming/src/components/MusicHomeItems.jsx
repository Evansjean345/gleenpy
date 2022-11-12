import React from 'react'
import { Link } from "react-router-dom";

export default function MusicHomeItems() {
  const music = [
    {
      id: "28",
      title: "La Clé",
      to: "/musics/cle",
      artist: "Etincelle(Maradona)",
      imageSrc:
        "https://i.scdn.co/image/ab6761610000e5eb21b01a74c97830972f4f5813",
      imageAlt: "",
    },
    {
      id: "31",
      title: "Fixette",
      to: "/musics/ziak",
      artist: "Ziak",
      imageSrc:
        "https://generations.fr/media/news/thumb/1110x624_618fb7c5d93bf-ziak.webp",
      imageAlt: "",
    },
    {
      id: "",
      title: "VDA",
      to: "/musics/cadenas",
      artist: "Bloqué Cadenas",
      imageSrc:
        "https://lifemag-ci.com/wp-content/uploads/2021/02/vda3.jpg",
      imageAlt: "",
    },
    {
      id: "30",
      title: "Gnapka",
      to: "/musics/luck",
      artist: "Mr Luck",
      imageSrc:
        "https://lafropeen.fr/storage/app/articles/images/fO8xRAwmydyfMYaFk5pW5pCtjChDEyOckrQ9eCEE.png",
      imageAlt: "",
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
      id: "",
      title: "Sans effet",
      to: "/musics/tayc",
      artist: "Tayc",
      imageSrc:
        "https://i.scdn.co/image/ab6761610000e5ebce9a6fa48c2beaf39ef9d599",
      imageAlt: "",
    },
    {
      id: "29",
      title: "Dora",
      to: "/musics/dora",
      artist: "HIMRA X 3XDAV'S X JR",
      imageSrc:
        "https://i.ytimg.com/vi/DllhYcWBHKg/maxresdefault.jpg",
      imageAlt: "",
    },
    {
      id: "17",
      title: "Pas bête",
      to: "/musics/bendo",
      artist: "Beendo Z",
      imageSrc:
        "https://d8g8m9w5.rocketcdn.me/wp-content/uploads/2022/02/le-soleil-scaled.jpg",
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
      id: "19",
      title: "Donda",
      to: "/musics/donda",
      artist: "Kanye West",
      imageSrc:
        "https://www.castanet.net/content/2022/10/bang_74587_p.jpg",
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
    //////////
    {
      id: "1",
      title: "Ku lo sa",
      to: "/musics/oxlade",
      artist: "Oxlade",
      imageSrc:
        "https://i.ytimg.com/vi/1pDQjwaH3qk/maxresdefault.jpg",
      imageAlt: "Oxalde",
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
      id: "2",
      title: "En haut",
      to: "/musics/haut",
      artist: "didi B X Jr Low",
      imageSrc:
        "https://i0.wp.com/bwelitribe.com/wp-content/uploads/2022/08/300635916_5217977094985429_1942704835354281072_n.jpg?fit=1080%2C1115&ssl=1",
      imageAlt: "en haut",
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
      id: "3",
      title: "Soweto",
      to: "/musics/soweto",
      artist: "Victony X Tempoe",
      imageSrc: "https://mdundo.com/media/article-thumbs/t39362.jpg",
      imageAlt: "soweto",
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
      id: "33",
      title: "Tomorrow 2",
      to: "/musics/cardi",
      artist: "Glorilla X Cardi B",
      imageSrc: "https://www.billboard.com/wp-content/uploads/2022/09/GloRilla-Cardi-B-Tomorrow-2-billboard-1548.jpg",
      imageAlt: "",
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
      id: "32",
      title: "Where i belong",
      to: "/musics/joey",
      artist: "Joey Bada$$ ",
      imageSrc:
        "https://i.scdn.co/image/ab6761610000e5ebf1d35b11bc9729630dda0bae",
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
      id: "7",
      title: "Saoko",
      to: "/musics/rosalia",
      artist: "Rosalià",
      imageSrc:
        "https://www.objetivoreggaeton.com/wp-content/uploads/2022/02/motomami-es-el-album-de-rosalia.jpg",
      imageAlt: "Rosalià",
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
      id: "22",
      title: "Escape Plan",
      to: "/musics/travis",
      artist: "Travis Scott",
      imageSrc:
        "https://images.bfmtv.com/bPn3vP76RwQsgUSa80XZlcZJ34U=/0x87:2048x1239/2048x0/images/Travis-Scott-a-New-York-en-septembre-2021-1162351.jpg",
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
      id: "24",
      title: "Champion",
      to: "/musics/nav",
      artist: "Nav",
      imageSrc:
        "https://laklika.net/wp-content/uploads/2020/05/Nav2.jpg",
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
      id: "26",
      title: "Coffee",
      to: "/musics/coffee",
      artist: "Beabadoobee",
      imageSrc:
        "https://popspoken.com/wp-content/uploads/2020/09/beabadoobee-jordan-curtis-hughes2-8eb56be1a64ebccc6b704fa65166f7a38989394d-s1600-c85-1.jpg",
      imageAlt: "",
    },
    {
      id: "26",
      title: "Le Six",
      to: "/musics/kodes",
      artist: "Kodes",
      imageSrc:
        "https://yt3.ggpht.com/9ueZQeCDjUoi7PVwmsQafYr_fJAnN5Lo1n0OGDhEeu_8I7d3A_j2eBccb7m-X27HU3817iPb-w=s900-c-k-c0x00ffffff-no-rj",
      imageAlt: "",
    },
    {
      id: "27",
      title: "Fly",
      to: "/musics/leto",
      artist: "Leto X Guy2Bezbar",
      imageSrc:
        "https://www.booska-p.com/wp-content/uploads/2022/03/leto-et-guy2bezbar-sont-tropfrais-news-visu.jpg",
      imageAlt: "",
    },
    {
      id: "8",
      title: "Rencontre",
      to: "/musics/damso",
      artist: "Damso X Disiz",
      imageSrc: "https://intrld.com/wp-content/uploads/2022/03/Disiz-Damso.jpg",
      imageAlt: "Rencontre",
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
      id: "35",
      title: "Save me,Please",
      to: "/musics/trippie",
      artist: "Trippie Red",
      imageSrc:
        "https://pbs.twimg.com/media/FboU8T4UcAEugmT.jpg",
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
      id: "36",
      title: "Beats The Odds",
      to: "/musics/tjay",
      artist: "Lil Tjay",
      imageSrc: "https://generations.fr/media/news/lil-tjay-s-est-fait-tirer-dessus-lors-d-une-attaque-a-mains-armees_62b41cf9d2ca9.jpg",
      imageAlt: "",
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
      id: "37",
      title: "Signer pour 10K",
      to: "/musics/pour",
      artist: "Beendo Z",
      imageSrc:
        "https://yt3.ggpht.com/S5DTTv06ZztNvt9CfzcQRfnJIZSWiO8G2xTdrbqHUVhx7gVWxWjcrjCeKqV8_wUZyIKjYmM6Ig=s900-c-k-c0x00ffffff-no-rj",
      imageAlt: "Marie Pierre",
    },
    {
      id: "12",
      title: "Holy Spirit",
      to: "/musics/holy",
      artist: "Melodie NVT",
      imageSrc:
        "https://cdn.tiktokder.com/avatars/202110/melody.nvt_1635345292.jpg",
      imageAlt: "holy Spirit",
    },
    {
      id: "13",
      title: "Picture in my mind",
      to: "/musics/picture",
      artist: "PinkPantheress X Sam Gellaitry",
      imageSrc: "https://i.ytimg.com/vi/SIHS1lLzqOo/maxresdefault.jpg",
      imageAlt: "picture in my mind",
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
      id: "14",
      title: "Doja",
      to: "/musics/central",
      artist: "Central Cee",
      imageSrc:
        "https://intrld.com/wp-content/uploads/2022/08/central-cee-radio-edit.png",
      imageAlt: "Doja",
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
      id: "15",
      title: "Skoin Skoin",
      to: "/musics/bianca",
      artist: "Ckay X Bianca Costa",
      imageSrc:
        "https://www.melolive.fr/wp-content/uploads/2021/07/bianca-costa-09072021-milyclic-9.jpg",
      imageAlt: "skoin skoin",
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
      id: "16",
      title: "Ta Reine",
      to: "/musics/reine",
      artist: "Angèle",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ang%C3%A8le_Cannes_2019.jpg/800px-Ang%C3%A8le_Cannes_2019.jpg",
      imageAlt: "Ta Reine",
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
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Notre Playlist
            </p>
            <br />
            <br />
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
                      className="w-full h-56 object-center object-cover group-hover:opacity-75"
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
  )
}
