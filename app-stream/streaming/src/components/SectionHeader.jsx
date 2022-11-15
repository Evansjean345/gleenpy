import React from "react";
import { Link } from "react-router-dom";

function SectionHeader() {
  const callouts = [
    {
      duration: "1 tome",
      to: "/movies/prime/black",
      title: "BlacKkKlansman : J'ai infiltré le Ku Klux Klan",
      imageSrc:
      "https://musicart.xboxlive.com/7/d8d25000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    },
    {
      imageSrc:
        "https://tvseriesfinale.com/wp-content/uploads/2019/10/daybreak02.jpg",
      duration: "1 saison",
      title: "DayBreak",
      imageAlt: "DayBreak",
      to: "/movies/daybreak",
    },
    {
      imageSrc: "https://fr.web.img5.acsta.net/pictures/17/01/19/09/32/389842.jpg",
      imageAlt: "",
      title: "Bienvenue au Gondwana",
      duration: "comedie",
      to: "/movies/comedie/bienvenue",
    },
  ];
  return (
    <>
      <figure>
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none bg-black">
              <h2 className="sm:text-3xl text-xl font-extrabold text-white">
                Aperçu des programmes
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

export default SectionHeader;
