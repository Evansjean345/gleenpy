import { React, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../index.css";
import Footer from "../layout/Footer";
import { AiOutlineArrowDown } from "react-icons/ai";
import {
  Dialog,
  DialogBody,
  DialogFooter,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useEffect } from "react";
import Navbar from "../layout/Navbar";

/* Items value */

export default function SeriesHomeComponent() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);
  const [error, setError] = useState(null);
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/series/${id}/details`
        );
        if (!response.ok) {
          throw new Error(
            "une erreur s'est produite lors de la recuperation du film"
          );
        }
        const data = await response.json();

        // Transformer les données pour remplacer `_id` par `id`
        const transformedSeasons = data.seasons?.map((season, index) => ({
          id: season._id,
          ...season,
        }));

        // Mettre à jour les données de la série avec les saisons transformées
        setSerie({ ...data, seasons: transformedSeasons });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSeries();
  }, [id]);

  // Fonction pour récupérer l'index d'une saison par son id
  const getSeasonIndexById = (seasonId) => {
    return serie?.seasons?.findIndex((season) => season._id === seasonId);
  };

  console.log("series", serie);

  return (
    <div className="bg-black m-0 p-0 h-[100vh] w-full">
      <Navbar />
      <>
        {/*Video Trailer Start */}
        <header>
          <div className="relative h-full  w-full" id="video-container">
            <img
              id="video-trailer"
              alt=""
              src={serie?.videoTrailer}
              className="object-cover sm:h-[350px] w-full"
            />
            <div
              className=" absolute bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-20 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]"
              id="trailer-text"
            ></div>
          </div>
        </header>
        {/*Video Trailer End */}
        {/* Other Video Start */}
        <section class="text-white body-font bg-black">
          <div class="container px-5 py-8 mx-auto">
            <div class="flex flex-col">
              <div class="h-1 bg-gray-200 rounded overflow-hidden">
                <div class="w-[100%] h-full bg-red-700"></div>
                {/*progess bar */}
              </div>
              <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 class="sm:w-2/5 text-slate-100 font-semibold title-font text-4xl mb-2 sm:mb-0 uppercase">
                  {serie?.title}
                </h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  {serie?.synopsis}
                </p>
              </div>
            </div>
            {/* seasonTable */}
            <article>
              <div className="bg-black">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                  <p className=" text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Saisons
                  </p>
                  <br />
                  <br />
                  {serie?.seasons?.length > 0 ? (
                    <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                      {serie?.seasons?.map((season) => (
                        <Link
                          key={season?.id}
                          to={`/episodeHome/${id}/seasons/${season?.id}/episodes`}
                          className="group transform sm:hover:scale-125 transition-all  "
                        >
                          <h3 className="mt-4 text-sm text-gray-400">{""}</h3>
                          <p className="mt-1 text-lg font-medium text-white">
                            Saison {season?.seasonNumber}
                          </p>
                          <br />
                          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-400 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8  relative ">
                            <img
                              src={season?.banner}
                              alt={""}
                              className="w-full h-56 object-center object-cover group-hover:opacity-75"
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white text-lg font-medium">
                      Les saisons pour cette serie ne sont pas encore disponibles
                    </p>
                  )}
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* Other Video End */}
      </>
      <Footer />
    </div>
  );
}
