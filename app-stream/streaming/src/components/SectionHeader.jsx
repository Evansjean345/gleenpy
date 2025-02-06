import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SectionHeader() {
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
          (moovie) => moovie.type !== "ghibli" && moovie.type !== "africain"
        );
        const shuffledMoovies = shuffleArray(filteredMoovies); // Mélanger les films
        const limitedMoovies = shuffledMoovies.slice(0, 3); // Limiter à 10 films
        setMoovies(limitedMoovies);
      } catch (error) {
        console.error("Erreur lors du chargement des series :", error);
      }
    };

    fetchSeries();
  }, [API_URL]);
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
                {moovies.map((callout) => (
                  <Link to={`/mooviesHome/${callout?._id}`}>
                    <div key={callout?._id} className="group relative ">
                      <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 transform sm:group-hover:scale-90 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                        <img
                          src={callout?.banner}
                          alt={""}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      {/*description*/}
                      <h3 className="mt-6 text-sm text-gray-400">
                        <Link to={`/mooviesHome/${callout?._id}`}>
                          <span className="absolute inset-0" />
                          {callout?.title}
                        </Link>
                      </h3>
                      <p className="text-base font-semibold text-white">
                        {callout?.type}
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
