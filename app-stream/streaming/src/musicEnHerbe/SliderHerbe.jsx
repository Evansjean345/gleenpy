import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SliderHerbe() {
  const navigate = useNavigate();
  const [artist, setArtist] = useState([]);
  const API_URL = `${process.env.REACT_APP_API_URL}/artists`;

  // Fonction pour mélanger les films aléatoirement
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get(API_URL);
        const artistsload = response.data;
        const shuffledSeries = shuffleArray(artistsload); // Mélanger les films
        const limitedMoovies = shuffledSeries.slice(0, 15); // Limiter à 10 films
        setArtist(limitedMoovies);
      } catch (error) {
        console.error("Erreur lors du chargement des series :", error);
      }
    };

    fetchSeries();
  }, [API_URL]);
  return (
    <>
      <div className="bg-black">
        <article>
          <div className="bg-black">
            <div className="max-w-2xl mx-auto py-8 px-4 sm:py-24 sm:px-12 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {artist.map((item) => (
                  <Link
                    key={item._id}
                    to={`/songs/${item._id}/details`}
                    className="group transform sm:hover:scale-125 transition-all  "
                  >
                    <h3 className="mt-4 text-sm text-gray-400">{item?.type}</h3>
                    <p className="mt-1 text-lg font-medium text-white">
                      {item?.name}
                    </p>
                    <br />
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-400 rounded-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8  relative ">
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
          </div>
        </article>
      </div>
    </>
  );
}

export default SliderHerbe;
