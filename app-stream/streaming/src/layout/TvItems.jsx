import React from 'react'
import { Link } from "react-router-dom";

export default function TvItems() {
    const callouts = [
        {
          id: "1",
          title: "NGM TV - l'impact des belles mères sur le mariage",
          imageSrc:
            "https://i.ytimg.com/vi/U4bM9jMOe78/maxresdefault.jpg",
          imageAlt: "",
          to: "/tv/impact",
        },
        {
          id: "2",
          title: "le battement de coeur : la suspicion dans le couple ",
          imageSrc:
            "https://i.ytimg.com/vi/D8Q39kXasDQ/maxresdefault.jpg",
          imageAlt: "",
          to: "/tv/battement",
        },
        {
          id: "3",
          title: "NGM TV - education scolaire",
          imageSrc:
            "https://i.ytimg.com/vi/TCJ0IJEJkUg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBzDuRLQRTugrGrOFJwcYtcPVMCeA",
          imageAlt: "",
          to: "/tv/school",
        },
      ];
  return (
    <>
      <figure>
        <div className="bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none bg-black">
              <h2 className="sm:text-3xl text-xl font-extrabold text-white">
                Programme Tv

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
  )
}
