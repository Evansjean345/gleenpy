import { React } from "react";
import { Link, useNavigate } from "react-router-dom";

function SectionItems() {
  const navigate = useNavigate();
  const items = [
    {
      id: "1",
      duration: "3 saisons",
      to: "/movies/howToSellDrugsOnline",
      title: "How to sell Drugs Online (Fast)",
      imageSrc: "https://n-cdn.serienjunkies.de/hq/102266.jpg",
      imageAlt: "How to sell Drugs Online (Fast)",
    },
    {
      id: "2",
      duration: "1 saison",
      to: "/movies/daybreak",
      title: "Daybreak",
      imageSrc: "https://i.blogs.es/6d6fae/daybreak/1366_2000.jpeg",
      imageAlt: "Daybreak",
    },
    {
      id: "3",
      duration: "4 saisons",
      to: "/movies/anime/titan",
      title: "Attack on Titan",
      imageSrc:
        "https://furansujapon.com/wp-content/uploads/2021/05/Shingeki-no-Kyojin-Saison-4-Partie-2.jpg",
      imageAlt: "Attack on Titan",
    },
    {
      id: "4",
      duration: "20 saisons",
      to: "/movies/anime/naruto",
      title: "Naruto Shippuden",
      imageSrc:
        "https://animespider.com/wp-content/uploads/2021/03/Naruto-shippuden.png",
      imageAlt: "Naruto Shippuden",
    },
    {
      id: "5",
      duration: "5 saisons",
      to: "/movies/anime/soma",
      title: "Foods Wars",
      imageSrc:
        "https://fr.web.img2.acsta.net/pictures/19/09/02/16/43/5616917.jpg",
      imageAlt: "Foods Wars",
    },
    {
      id: "6",
      duration: "1 saison",
      to: "/movies/behindHerEyes",
      title: "Mon ami Adèle - Behind Her eyes",
      imageSrc:
        "https://images.rtl.fr/~c/1200v800/rtl/www/1391555-adele-eve-hewson-et-louise-simona-brown-dans-mon-amie-adele.jpg",
      imageAlt: "Mon ami Adèle - Behind Her eyes",
    },
    {
      id: "7",
      duration: "2 saisons",
      to: "/movies/euphoria",
      title: "Euphoria",
      imageSrc:
        "https://outwritenewsmag.org/wp-content/uploads/2022/02/IMG_5081.jpg",
      imageAlt: "Euphoria",
    },
    {
      id: "8",
      imageSrc:
        "https://img.lemde.fr/2018/09/17/19/186/1568/784/1440/720/60/0/bd2548b_I8SaNOIQgKXkQ3u_F-Zv-N2f.jpg",
      imageAlt: "la Nonne",
      title: "La Nonne",
      duration: "1 tome",
      to: "/movies/laNonne",
    },
  ];

  return (
    <>
      <article>
        <div className="bg-black">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Nos programmes
            </p>
            <br />
            <br />
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
              {items.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className="group transform sm:hover:scale-125 transition-all  "
                >
                  <h3 className="mt-4 text-sm text-gray-400">
                    {item.duration}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-white">
                    {item.title}
                  </p>
                  <br />
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-400 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8  relative ">
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
          <br />
          <br />
          <div className="flex justify-center">
            <button
              onClick={() => {
                navigate("/moviesHome");
              }}
              id="toggler"
              className="btn btn-wide rounded-full bg-red-700 hover:bg-white hover:text-black active:bg-red-900 focus:outline-none focus:ring focus:ring-red-900 transform hover:scale-125"
            >
              voir Plus
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default SectionItems;
