import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SlidePlaylist() {
  const [songsGroups, setSongsGroups] = useState([[], [], [], []]);
  const API_URL = `${process.env.REACT_APP_API_URL}/artists`;

  // Fonction pour mélanger les films aléatoirement
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(API_URL);
        const loadsongs = response.data;
        const shuffledSongs = shuffleArray(loadsongs);

        //Découper en 4 groupes distincts
        const chunkSize = Math.ceil(shuffledSongs.length / 4);
        const groups = [
          shuffledSongs.slice(0, chunkSize),
          shuffledSongs.slice(chunkSize, 2 * chunkSize),
          shuffledSongs.slice(2 * chunkSize, 3 * chunkSize),
          shuffledSongs.slice(3 * chunkSize),
        ];
        setSongsGroups(groups);
      } catch (error) {
        console.error("Erreur lors du chargement des series :", error);
      }
    };

    fetchSongs();
  }, [API_URL]);

  return (
    <>
      <div className="bg-black my-6 sm:my-24">
        <article>
          <div className="bg-[url('/music_banner.png')]  sm:h-96 bg-contain bg-no-repeat sm:bg-cover">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              {/*
             <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-3xl">
              <span className="sm:block hidden">
                Retrouvez vos films et series préférés sur NEXTDEO
              </span>
            </h2> */}
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0"></div>
            </div>
          </div>
        </article>
      </div>

      <div className="bg-black sm:pr-20 sm:pl-20">
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block ">
            Ecouter vos artistes péférés sur Nextdeo
          </span>
        </h2>
        {songsGroups.map((songs, index) => (
          <div
            key={index}
            className="carousel carousel-end rounded-box cursor-pointer p-2 py-6  sm:p-6"
          >
            {songs.map((items) => (
              <div
                key={items?._id}
                className="carousel-item pl-2 pr-2 sm:pr-6 rounded-xl relative"
              >
                <Link to={`/songs/${items._id}/details`}>
                  <img
                    src={items?.banner}
                    alt=""
                    className="rounded-xl h-[150px] w-[170px] sm:h-[300px] sm:w-[340px] sm:transform sm:transition-all sm:hover:scale-90"
                  />
                  <div className="absolute m-6 bottom-0 z-30">
                    <p className="text-xs sm:text-sm leading-none text-white">
                      {items?.type}
                    </p>
                    <h1 className="w-full text-xs sm:text-2xl font-semibold sm:leading-8 mt-2 text-white">
                      {items?.name}
                    </h1>
                    <p className="mt-4 text-xs sm:text-base font-medium cursor-pointer leading-4 underline text-white">
                      {items?.network}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
