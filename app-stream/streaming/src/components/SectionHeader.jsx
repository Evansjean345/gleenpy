import React from "react";
import { Link } from "react-router-dom";

function SectionHeader() {
  const callouts = [
    {
      id: "1",
      duration: "3 saisons",
      title: "Too hot to Handle",
      imageSrc:
        "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2021-06/PIP_207_Unit_00019_RT.jpg?h=c673cd1c&itok=YiEQcwVE",
      imageAlt: "Too hot to Handle",
      to: "/movies/toHotToHandle",
    },
    {
      id: "2",
      duration: "3 saisons",
      title: "You",
      imageSrc:
        "https://media.gqmagazine.fr/photos/616d49b5d4bd52e104c66b87/16:9/w_2560%2Cc_limit/you.jpeg",
      imageAlt: "You",
      to: "/movies/you",
    },
    {
      id: "3",
      duration: "5 saisons",
      title: "Elite",
      imageSrc:
        "https://pictures.betaseries.com/fonds/poster/00ef3a490e75ebdc66716656235b0cfd.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      to: "/movies/elite",
    },
  ];
  return (
    <>
      <figure>
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none bg-black">
              <h2 className="text-3xl font-extrabold text-white">
                Les plus vues
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
