import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SliderCoupe() {
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
        const artistsCoupé = response.data.filter(
          (item) => item.type === "Coupé-decalé"
        );
        const shuffledSeries = shuffleArray(artistsCoupé); // Mélanger les films
        setArtist(shuffledSeries);
      } catch (error) {
        console.error("Erreur lors du chargement des series :", error);
      }
    };

    fetchSeries();
  }, [API_URL]);

  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Coupé Décalé
          <br />
          <br />
        </p>
        <div className="carousel carousel-end rounded-box cursor-pointer p-2 sm:p-6 ">
          {artist.map((items) => {
            return (
              <div className="carousel-item  pl-2 sm:pr-6 group rounded-xl relative">
                <Link to={`/songs/${items._id}/details`}>
                  <img
                    src={items.banner}
                    alt={``}
                    className="rounded-full h-[150px] w-[170px] sm:h-[220px] sm:w-[260px]  sm:transform sm:transition-all sm:group-hover:scale-90"
                  />
                  <div className="absolute pl-6 m-6 bottom-0 z-30 sm:group-hover:scale-90 ">
                    <h1 className="w-full text-xs sm:text-lg font-semibold leading-8 mt-2 text-white">
                      {items.name}
                    </h1>
                    <p className="mt-4 text-xs sm:text-base font-medium cursor-pointer leading-4 underline text-white">
                      {items.network}
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
