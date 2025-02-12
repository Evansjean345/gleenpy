import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SlideHeader() {
  const navigate = useNavigate();
  const [mooviesGroups, setMooviesGroups] = useState([[], [], [], []]);
  const API_URL = `${process.env.REACT_APP_API_URL}/moovies`;

  // Fonction pour mélanger les films aléatoirement
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get(API_URL);
        const loadMoovies = response.data;
        const filteredMoovies = loadMoovies.filter(
          (moovie) => moovie.type !== "ghibli" && moovie.type !== "africain"
        );
        const shuffledMoovies = shuffleArray(filteredMoovies);

        //Découper en 4 groupes distincts
        const chunkSize = Math.ceil(shuffledMoovies.length / 4);
        const groups = [
          shuffledMoovies.slice(0, chunkSize),
          shuffledMoovies.slice(chunkSize, 2 * chunkSize),
          shuffledMoovies.slice(2 * chunkSize, 3 * chunkSize),
          shuffledMoovies.slice(3 * chunkSize),
        ];
        setMooviesGroups(groups);
      } catch (error) {
        console.error("Erreur lors du chargement des series :", error);
      }
    };

    fetchSeries();
  }, [API_URL]);

  return (
    <div className="bg-black sm:pr-20 sm:pl-20">
      <h2 className="text-xl font-extrabold tracking-tight p-6 text-white sm:text-3xl">
        <span>Cinema</span>
      </h2>

      {mooviesGroups.map((moovies, index) => (
        <div
          key={index}
          className="carousel carousel-end rounded-box cursor-pointer p-2 py-6  sm:p-6"
        >
          {moovies.map((items) => (
            <div
              key={items?._id}
              className="carousel-item pl-2 pr-2 sm:pr-6 rounded-xl relative"
            >
              <Link to={`/mooviesHome/${items?._id}`}>
                <img
                  src={items?.banner}
                  alt=""
                  className="rounded-xl h-[150px] w-[170px] sm:h-[300px] sm:w-[340px] sm:transform sm:transition-all sm:hover:scale-90"
                />
                <div className="absolute m-6 bottom-0 z-30">
                  <p className="text-xs sm:text-sm leading-none text-white">
                    {items?.rating}/10
                  </p>
                  <h1 className="w-full text-xs sm:text-2xl font-semibold sm:leading-8 mt-2 text-white">
                    {items?.title}
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

      <br />
      <br />
      <div className="flex justify-center sm:justify-end">
        <button
          onClick={() => {
            navigate("/moviesHome");
          }}
          id="toggler"
          className="btn btn-wide text-white rounded-full bg-red-700 hover:bg-white hover:text-black active:bg-red-900 focus:outline-none focus:ring focus:ring-red-900 transform hover:scale-125"
        >
          voir Plus
        </button>
      </div>
    </div>
  );
}
