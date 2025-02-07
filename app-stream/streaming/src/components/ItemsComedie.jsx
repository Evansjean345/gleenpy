import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ItemsComedie() {
  const [moovies, setMoovies] = useState([]);
  const API_URL = `${process.env.REACT_APP_API_URL}/moovies`;

  // Fonction pour mélanger les films aléatoirement
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get(API_URL);
        const loadMoovies = response.data;
        const filteredMoovies = loadMoovies.filter(
          (moovie) => moovie.type === "comedie"
        );
        const shuffledMoovies = shuffleArray(filteredMoovies); // Mélanger les films
        setMoovies(shuffledMoovies);
      } catch (error) {
        console.error("Erreur lors du chargement des series :", error);
      }
    };

    fetchSeries();
  }, [API_URL]);
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {moovies.map((item) => (
          <Link
            key={item._id}
            to={`/mooviesHome/${item?._id}`}
            className="group transform sm:hover:scale-90 transition-all  "
          >
            <h3 className="mt-4 text-sm text-gray-400">{item?.network}</h3>
            <p className="mt-1 text-lg font-medium text-white">{item?.title}</p>
            <br />
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-400 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8  relative ">
              <img
                src={item?.banner}
                alt={""}
                className="w-full h-56 object-center object-cover group-hover:opacity-75"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
