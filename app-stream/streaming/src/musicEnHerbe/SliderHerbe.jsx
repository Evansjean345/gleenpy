import React from "react";
import { Link } from "react-router-dom";

function SliderHerbe() {
  const music = [
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
      title: "Anti Goumin",
      to: "/musics/mix",
      artist: "Mix premier",
      imageSrc:
        "https://yt3.ggpht.com/UoeUdomZhxz5sI-mysLSzEQ-PrzSGTf_suBZeeM6MlOqSCvCof5llfi7cqnLzAxL0kk4OLdUwQ=s900-c-k-c0x00ffffff-no-rj",
      imageAlt: "",
    },
    {
      id: "",
      title: "Party with A Jagaban",
      to: "/musics/jagaban",
      artist: "Midas the Jagaban",
      imageSrc:
        "https://yt3.ggpht.com/ytc/AMLnZu__YNXlIdILrCpU8fRw3cCPaEqTCmvMSBfWXvz2hg=s900-c-k-c0x00ffffff-no-rj",
      imageAlt: "",
    },
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
      id: "12",
      title: "Holy Spirit",
      to: "/musics/holy",
      artist: "Melodie NVT",
      imageSrc:
        "https://cdn.tiktokder.com/avatars/202110/melody.nvt_1635345292.jpg",
      imageAlt: "holy Spirit",
    },
    {
      id: "8",
      title: "Die",
      to: "/musics/gazo",
      artist: "Gazo",
      imageSrc:
        "https://media.gqmagazine.fr/photos/62e8f758b1f7a80c5920bad0/master/w_1600%2Cc_limit/Hype_Hype_Gazo5.jpg",
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
      id: "",
      title: "Dans ma tête",
      to: "/musics/suspect",
      artist: "Suspect 95",
      imageSrc:
        "https://l-frii.com/wp-content/uploads/2021/03/Syndicat-le-president-Suspect-95-insiste-sur-le-prix-du-transport-2.jpg",
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
    //////////
    {
      id: "2",
      title: "WILIKIDJONDJON",
      to: "/musics/fior",
      artist: "FIOR2BIOR X WIDGUNZ",
      imageSrc:
        "https://www.afromicro.com/File/Musics/Pochettes/Grand/1122_Fior-2-Bior-feat-Widgunz-Wilikidjondjon.jpg",
      imageAlt: "en haut",
    },
    {
      id: "29",
      title: "Dora",
      to: "/musics/dora",
      artist: "HIMRA X 3XDAV'S X JR",
      imageSrc: "https://i.ytimg.com/vi/DllhYcWBHKg/maxresdefault.jpg",
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
                Decouvrez les étoiles
                <br />
                montantes sur gleenpy
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

export default SliderHerbe;
