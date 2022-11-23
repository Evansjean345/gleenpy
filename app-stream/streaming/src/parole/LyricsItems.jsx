import React from "react";
import { Link } from "react-router-dom";

export default function LyricsItems() {
  const callouts = [
    {
      to: "/lyrics/kodja",
      title: "Archevêque Kodja : Lorsque tu as la grandeur en toi",
      imageSrc: "https://media-files.abidjan.net/photo/Archeveque-Kodja.jpg",
    },
    {
      imageSrc: "https://i.ytimg.com/vi/_7ifwncvnNw/maxresdefault.jpg",
      title:
        "Gedeon de la tchetchouvah: redevons-nous vierges lorsque nous sommes",
      imageAlt: "",
      to: "/lyrics/gede",
    },
    {
      imageSrc:
        "https://bishopomi.org/wp-content/uploads/2022/04/279245466_663242511667073_9003293616523581450_n.jpeg",
      imageAlt: "",
      title:
        "Bishop Mohemed Idriss : La destruction des réclamations liées à la destinée",
      to: "/lyrics/bishop",
    },
    {
      imageSrc:
        "https://marcellotunasi.org/wp-content/uploads/2021/07/Pasteur-Marcello.jpeg",
      imageAlt: "",
      title: "Pasteur Marcello Tunasi : Le feu étranger BUNDA 21 | Le Feu Brûlera Continuellement",
      to: "/lyrics/tunasi",
    },
    {
      imageSrc:
        "https://www.enseignemoi-files.com/site/view/images/dyn-cache/emission/cover/img/25/67/1582810235_256718_1200x667x0.jpg?v=2022022101",
      imageAlt: "",
      title: "Pasteur Mohammed Sanogo : Reconnaitre et maximmiser son don",
      to: "/lyrics/sanogo",
    },
  ];
  return (
    <>
      <figure>
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none bg-black">
              <h2 className="sm:text-3xl text-xl font-extrabold text-white">
                Paroles de vie
              </h2>
              <br />
              <br />
              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {callouts.map((callout) => (
                  <Link to={callout.to}>
                    <div key={callout.id} className="group relative ">
                      <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 transform sm:group-hover:scale-90 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                        <img
                          src={callout.imageSrc}
                          alt={callout.imageAlt}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      {/*description*/}
                      <h3 className="mt-6 text-sm text-gray-400">
                        <Link to={callout.to}>
                          <span className="absolute inset-0" />
                        </Link>
                      </h3>
                      <p className="text-base font-semibold text-white">
                        {callout.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </figure>
    </>
  );
}
