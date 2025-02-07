import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ItemsChild() {
  const [series, setSeries] = useState([]);
  const [moovies, setMoovies] = useState([]);
  const API_URL = `${process.env.REACT_APP_API_URL}/series`;
  const API_URL2 = `${process.env.REACT_APP_API_URL}/moovies`;

  // Fonction pour mélanger les films aléatoirement
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  // Fonction pour mélanger les films aléatoirement
  const shuffleArray2 = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get(API_URL);
        const response2 = await axios.get(API_URL2);
        const AnimeSeries = response.data.filter(
          (serie) => serie.type === "anime"
        );
        const AnimeMoovies = response2.data.filter(
          (moovie) => moovie.type === "ghibli"
        );
        const shuffledSeries = shuffleArray(AnimeSeries); // Mélanger les films
        const shuffledMoovies = shuffleArray2(AnimeMoovies); // Mélanger les films
        setSeries(shuffledSeries);
        setMoovies(shuffledMoovies);
      } catch (error) {
        console.error("Erreur lors du chargement des series :", error);
      }
    };

    fetchSeries();
  }, [API_URL, API_URL2]);
  return (
    <>
      {" "}
      <div className="p-4">
        <p className="mt-2  text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Series d'animations
          <br />
          <br />
        </p>
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {series.map((item) => (
            <Link
              key={item._id}
              to={`/seriesHome/${item?._id}/details`}
              className="group transform sm:hover:scale-90 transition-all  "
            >
              <h3 className="mt-4 text-sm text-gray-400">{item?.network}</h3>
              <p className="mt-1 text-lg font-medium text-white">
                {item?.title}
              </p>
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
      </div>{" "}
      <div className="p-4">
        <p className="mt-2  text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Films d'animations
          <br />
          <br />
        </p>
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {moovies.map((item) => (
            <Link
              key={item._id}
              to={`/mooviesHome/${item?._id}`}
              className="group transform sm:hover:scale-90 transition-all  "
            >
              <h3 className="mt-4 text-sm text-gray-400">{item?.network}</h3>
              <p className="mt-1 text-lg font-medium text-white">
                {item?.title}
              </p>
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
    </>
  );
}
