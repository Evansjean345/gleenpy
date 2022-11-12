import { React } from "react";
import { Link, useNavigate } from "react-router-dom";

function SectionMusic() {
  const navigate = useNavigate();
  const music = [
    {
      id: "1",
      title: "Ku lo sa",
      to: "/musics/oxlade",
      artist: "Oxlade",
      imageSrc: "https://i.ytimg.com/vi/1pDQjwaH3qk/maxresdefault.jpg",
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
      imageSrc:
        "https://tecoapple.com/wp-content/uploads/2022/06/stevelacybadhabitv022.jpg",
      imageAlt: "bhad habit",
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
      id: "6",
      title: "Tomorrow 2",
      to: "/musics/cardi",
      artist: "Glorilla X Cardi B",
      imageSrc:
        "https://www.billboard.com/wp-content/uploads/2022/09/GloRilla-Cardi-B-Tomorrow-2-billboard-1548.jpg",
      imageAlt: "",
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
      id: "10",
      title: "City girls",
      to: "/musics/girls",
      artist: "YNW melly",
      imageSrc: "https://i.ytimg.com/vi/Ex4vjtFhiKg/maxresdefault.jpg",
      imageAlt: "city girls",
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
      title: "PinkPantheress X Sam Gellaitry",
      to: "/musics/picture",
      artist: "Picture in my mind",
      imageSrc: "https://i.ytimg.com/vi/SIHS1lLzqOo/maxresdefault.jpg",
      imageAlt: "picture in my mind",
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
      id: "15",
      title: "Skoin Skoin",
      to: "/musics/bianca",
      artist: "Ckay X Bianca Costa",
      imageSrc:
        "https://www.melolive.fr/wp-content/uploads/2021/07/bianca-costa-09072021-milyclic-9.jpg",
      imageAlt: "skoin skoin",
    },
    {
      id: "16",
      title: "Reine",
      to: "/musics/reine",
      artist: "Angèle",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ang%C3%A8le_Cannes_2019.jpg/800px-Ang%C3%A8le_Cannes_2019.jpg",
      imageAlt: "Ta Reine",
    },
  ];
  return (
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
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate("/musicsHome");
                }}
                id='toggler'
                className="btn btn-wide rounded-full bg-red-700 hover:bg-white hover:text-black active:bg-red-900 focus:outline-none focus:ring focus:ring-red-900 transform hover:scale-125"
              >
                voir Plus
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default SectionMusic;
