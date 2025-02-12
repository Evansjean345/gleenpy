import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SliderAnimatedMovies() {
  const [moovies, setMoovies] = useState([]);
  const API_URL = `${process.env.REACT_APP_API_URL}/moovies`;

  // Fonction pour mélanger les films aléatoirement
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchMoovies = async () => {
      try {
        const response = await axios.get(API_URL);
        const ghibliMoovies = response.data.filter(
          (moovie) => moovie.type === "ghibli"
        );
        const shuffledMoovies = shuffleArray(ghibliMoovies); // Mélanger les films
        setMoovies(shuffledMoovies);
      } catch (error) {
        console.error("Erreur lors du chargement des films :", error);
      }
    };

    fetchMoovies();
  }, [API_URL]);

  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Ghibli
          <br />
          <br />
        </p>
        <div className="carousel carousel-end rounded-box cursor-pointer sm:p-6 ">
          {moovies.map((items) => {
            return (
              <div
                key={items?._id}
                className="carousel-item  pl-2 pr-2 sm:pr-6 rounded-xl relative"
              >
                <Link to={`/mooviesHome/${items?._id}`}>
                  <img
                    src={items?.banner}
                    alt={``}
                    className="rounded-xl h-[150px] w-[170px] sm:h-[300px] sm:w-[340px] sm:transform sm:transition-all sm:hover:scale-90"
                  />
                  <div className="absolute m-6 bottom-0 z-30">
                    <p className="text-sm leading-none text-white">
                      {items?.rating}/10
                    </p>
                    <h1 className="w-full text-xs sm:text-2xl font-semibold leading-8 mt-2 text-white">
                      {items?.title}
                    </h1>
                    <p className="mt-4 text-xs sm:text-base font-medium cursor-pointer leading-4 underline text-white">
                      {items?.network}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
