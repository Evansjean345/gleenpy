import React from "react";
import { Link } from "react-router-dom";

function SectionGag() {
  const callouts = [
    {
      id: "1",
      title: "la bouteille - the bottle",
      imageSrc:
        "https://i.ytimg.com/vi/Hj8MdG6ZEFA/maxresdefault.jpg",
      imageAlt: "",
      to: "/gag/bottle",
    },
    {
      id: "2",
      title: "He burns shoes",
      imageSrc:
        "https://i.kym-cdn.com/photos/images/original/002/357/057/bc2.jpg",
      imageAlt: "",
      to: "/gag/shoes",
    },
    {
      id: "3",
      title: "Seann Bridon - La poisse",
      imageSrc:
        "https://sg-res.9appsdownloading.com/sg/res/jpg/68/20/8196d628f3fe69c4a818d3d4a4fe-hq11.jpg?x-oss-process=style/hq",
      imageAlt: "",
      to: "/gag/poisse",
    },
    {
      id: "4",
      title: "Le chien - The dog",
      imageSrc:
        "https://ticktockview.com/wp-content/uploads/2022/08/1660934337867.jpg",
      imageAlt: "",
      to: "/gag/dog",
    },
    {
      id: "5",
      title: "Fou rire - cuisse sécurisée",
      imageSrc:
        "https://i.ytimg.com/vi/-HSvJsg5sFQ/maxresdefault.jpg",
      imageAlt: "",
      to: "/gag/rire",
    },
    {
      id: "6",
      title: "Quand tu voles un oeuf ,tu voleras...",
      imageSrc:
        "https://i.ytimg.com/vi/ZcI3umagrOA/maxresdefault.jpg",
      imageAlt: "",
      to: "/gag/oeuf",
    },
    {
      id: "7",
      title: "Qui peut resister à ça",
      imageSrc:
        "https://i.ytimg.com/vi/7tRVcMo6l1w/maxresdefault.jpg",
      imageAlt: "",
      to: "/gag/qui",
    },
  ];
  return (
    <>
      <figure>
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none bg-black">
              <h2 className="sm:text-3xl text-xl font-extrabold text-white">
                Nos videos
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
                          {callout.duration}
                        </Link>
                      </h3>
                      <p className="text-base font-semibold text-white">
                        {callout.title}
                      </p>
                      <br/>
                      <br/>
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

export default SectionGag
