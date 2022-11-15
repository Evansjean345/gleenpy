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
      id: "3",
      title: "Soweto",
      to: "/musics/soweto",
      artist: "Victony X Tempoe",
      imageSrc: "https://mdundo.com/media/article-thumbs/t39362.jpg",
      imageAlt: "soweto",
    },
    {
      id: "39",
      title: "Les 49",
      to: "/musics/yode",
      artist: "Yode et Siro",
      imageSrc:
        "https://www.infoh24.info/wp-content/uploads/2020/12/Yode-et-Siro-@-Zouglou.jpg",
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
      id: "3",
      title: "J'ai compris",
      to: "/musics/vetcho",
      artist: "Vetcho Lolas",
      imageSrc: "http://www.100pour100culture.com/wp-content/uploads/2021/07/Vetcho-Lolas.png",
      imageAlt: "",
    },
    {
      id: "",
      title: "Anti Goumin",
      to: "/musics/mix",
      artist: "Mix premier",
      imageSrc: "https://yt3.ggpht.com/UoeUdomZhxz5sI-mysLSzEQ-PrzSGTf_suBZeeM6MlOqSCvCof5llfi7cqnLzAxL0kk4OLdUwQ=s900-c-k-c0x00ffffff-no-rj",
      imageAlt: "",
    },
    {
      id: "3",
      title: "Toffole",
      to: "/musics/ariel",
      artist: "Ariel Sheney X Olomide",
      imageSrc: "https://www.terre2buzz.com/File/MusicsAcceptees/Pochettes/Grand/3940_Ariel-Sheney-Feat-Koffi-Olomide-Toffole.JPG",
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
      title: "le secret",
      to: "/musics/bebi",
      artist: "Bebi philip",
      imageSrc: "https://republiquedujapap.com/wp-content/uploads/2021/12/Cote-dIvoire-Bebi-Philip-fait-irruption-dans-une-reception-de-mariage-la-mariee-nen-revenait-pas-video-e1638669324566.jpg",
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
      id: "12",
      title: "Holy Spirit",
      to: "/musics/holy",
      artist: "Melodie NVT",
      imageSrc:
        "https://cdn.tiktokder.com/avatars/202110/melody.nvt_1635345292.jpg",
      imageAlt: "holy Spirit",
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
      id: "13",
      title: "PinkPantheress X Sam Gellaitry",
      to: "/musics/picture",
      artist: "Picture in my mind",
      imageSrc: "https://i.ytimg.com/vi/SIHS1lLzqOo/maxresdefault.jpg",
      imageAlt: "picture in my mind",
    },
    {
      id: "9",
      title: "Dosabado",
      to: "/musics/arafat",
      artist: "Dj Arafat",
      imageSrc:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/6430/production/_105484652_fat004.jpg",
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
