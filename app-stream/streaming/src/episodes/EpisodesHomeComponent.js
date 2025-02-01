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

export default function EpisodesHomeComponent() {
  const { serieId, seasonId } = useParams(); // Récupérer les paramètres d'URL
  const [season, setSeason] = useState(null);
  const [size, setSize] = useState(null);
  const [error, setError] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);

  useEffect(() => {
    const fetchSeasonDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/series/${serieId}/seasons/${seasonId}/details`
        );
        if (!response.ok) {
          throw new Error(
            "Une erreur s'est produite lors de la récupération des épisodes"
          );
        }
        const data = await response.json();
        setSeason(data); // Stocker les détails de la saison
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSeasonDetails();
  }, [serieId, seasonId]);

  const handleOpen = (value) => setSize(value);

  const openModal = (videoUrl) => {
    setModalVideo(videoUrl);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

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
              src={season?.videoTrailer}
              className="object-cover sm:h-[450px] w-full"
            />
            <div
              className=" absolute bottom-0 flex flex-col z-40 bg-[rgba(0, 0, 0, 0.5)] text-white w-full p-20 bg-gradient-to-t from-black to-[rgba(0, 0, 0, 0.667)]"
              id="trailer-text"
            >
              <div>
                <h1 className="text-3xl">{season?.title}</h1>
              </div>
              <br />
              <div>
                {/*
             <p>{ObjTrailer.text}</p> */}
              </div>
            </div>
          </div>
        </header>
        {/*Video Trailer End */}
        {/* Other Video Start */}
        <section class="text-white body-font bg-black">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col">
              <div class="h-1 bg-gray-200 rounded overflow-hidden">
                <div class="w-[100%] h-full bg-red-700"></div>
                {/*progess bar */}
              </div>
              <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 class="sm:w-2/5 text-slate-100 font-semibold title-font text-4xl mb-2 sm:mb-0">
                  saison {season?.seasonNumber}
                </h1>
                <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                  {season?.synopsis}
                </p>
              </div>
            </div>
            {/* Episodes components start here */}
            <article>
              <div className="bg-black">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                  <p className=" text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Liste des episodes
                  </p>
                  <br />
                  <br />
                  {season?.episodes?.length > 0 ? (
                    <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                      {season?.episodes?.map((episode) => (
                        <div
                          key={episode?.id}
                          className="group transform sm:hover:scale-95 transition-all  "
                        >
                          <h3 className="mt-4 text-sm text-gray-400">{""}</h3>
                          <p className="mt-1 text-lg font-medium text-white">
                            episode {episode?.episodeNumber}
                          </p>
                          <br />
                          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-400 rounded-lg overflow-hidden relative">
                            <img
                              src={episode?.banner}
                              alt={`Episode ${episode?.episodeNumber}`}
                              className="w-full h-56 object-center object-cover group-hover:opacity-75"
                            />
                            <button
                              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => openModal(episode?.video)}
                            >
                              Play
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white text-lg font-medium">
                      Les episodes pour cette saison ne sont pas encore
                      disponibles
                    </p>
                  )}
                </div>
              </div>
            </article>
          </div>
        </section>
        {/* Other Video End */}

        {/* Modal for Video */}
        <Dialog
          open={!!modalVideo}
          handler={closeModal}
          className="bg-black"
          size={size || "xl"}
        >
          <DialogBody
            divider
            className="p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center"
            style={{ height: "80vh" }} // Hauteur du contenu modal
          >
            {modalVideo && (
              <video
                controls
                className="w-full h-full rounded-xl object-contain"
                autoPlay
              >
                <source src={modalVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            )}
          </DialogBody>
          <DialogFooter className="flex justify-end">
            <button
              className="btn modal-button btn-wide rounded-full bg-red-700 hover:bg-white hover:text-black"
              onClick={closeModal}
            >
              Fermer
            </button>
          </DialogFooter>
        </Dialog>
      </>
      <Footer />
    </div>
  );
}
