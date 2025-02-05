import { Link } from "react-router-dom";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "axios";

/* Items for a seaseon */

export default function TabsMovies() {
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
        const primeMoovies = response.data.filter(
          (moovie) => moovie.type === "primeVideo"
        );
        const shuffledMoovies = shuffleArray(primeMoovies); // Mélanger les films
        setMoovies(shuffledMoovies);
      } catch (error) {
        console.error("Erreur lors du chargement des films :", error);
      }
    };

    fetchMoovies();
  }, [API_URL]);

  const [moovies2, setMoovies2] = useState([]);

  // Fonction pour mélanger les films aléatoirement
  const shuffleArray2 = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchMoovies = async () => {
      try {
        const response = await axios.get(API_URL);
        const nollywoodMoovies = response.data.filter(
          (moovie) => moovie.type === "nollywood"
        );
        const shuffledMoovies = shuffleArray2(nollywoodMoovies); // Mélanger les films
        setMoovies2(shuffledMoovies);
      } catch (error) {
        console.error("Erreur lors du chargement des films :", error);
      }
    };

    fetchMoovies();
  }, [API_URL]);

  const [moovies3, setMoovies3] = useState([]);

  // Fonction pour mélanger les films aléatoirement
  const shuffleArray3 = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchMoovies = async () => {
      try {
        const response = await axios.get(API_URL);
        const horreurMoovies = response.data.filter(
          (moovie) => moovie.type === "horreur"
        );
        const shuffledMoovies = shuffleArray3(horreurMoovies); // Mélanger les films
        setMoovies3(shuffledMoovies);
      } catch (error) {
        console.error("Erreur lors du chargement des films :", error);
      }
    };

    fetchMoovies();
  }, [API_URL]);

  const itemsAction = (
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      {moovies.map((item) => {
        return (
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div
              key={item?._id}
              className="carousel-item  pl-2 pr-6 rounded-xl relative"
            >
              <Link to={`/mooviesHome/${item?._id}`}>
                <img
                  src={item?.banner}
                  alt={``}
                  className="rounded-xl h-[300px] w-[340px] sm:transform sm:transition-all sm:hover:scale-90"
                />
                <div className="absolute m-6 bottom-0 z-30">
                  <p className="text-sm leading-none text-white">
                    {item?.rating}/10
                  </p>
                  <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                    {item?.title}
                  </h1>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    {item?.network}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );

  const itemsDrame = (
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      {moovies2.map((item) => {
        return (
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div
              key={item?._id}
              className="carousel-item  pl-2 pr-6 rounded-xl relative"
            >
              <Link to={`/mooviesHome/${item?._id}`}>
                <img
                  src={item?.banner}
                  alt={``}
                  className="rounded-xl h-[300px] w-[340px] sm:transform sm:transition-all sm:hover:scale-90"
                />
                <div className="absolute m-6 bottom-0 z-30">
                  <p className="text-sm leading-none text-white">
                    {item?.rating}/10
                  </p>
                  <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                    {item?.title}
                  </h1>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    {item?.network}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );

  const [moovies4, setMoovies4] = useState([]);

  // Fonction pour mélanger les films aléatoirement
  const shuffleArray4 = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const fetchMoovies = async () => {
      try {
        const response = await axios.get(API_URL);
        const africanMoovies = response.data.filter(
          (moovie) => moovie.type === "africain"
        );
        const shuffledMoovies = shuffleArray4(africanMoovies); // Mélanger les films
        setMoovies4(shuffledMoovies);
      } catch (error) {
        console.error("Erreur lors du chargement des films :", error);
      }
    };

    fetchMoovies();
  }, [API_URL]);

  const itemsHorreur = (
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      {moovies3.map((item) => {
        return (
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div
              key={item?._id}
              className="carousel-item  pl-2 pr-6 rounded-xl relative"
            >
              <Link to={`/mooviesHome/${item?._id}`}>
                <img
                  src={item?.banner}
                  alt={``}
                  className="rounded-xl h-[300px] w-[340px] sm:transform sm:transition-all sm:hover:scale-90"
                />
                <div className="absolute m-6 bottom-0 z-30">
                  <p className="text-sm leading-none text-white">
                    {item?.rating}/10
                  </p>
                  <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                    {item?.title}
                  </h1>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    {item?.network}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );

  const itemsFantasy = (
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      {moovies4.map((item) => {
        return (
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div
              key={item?._id}
              className="carousel-item  pl-2 pr-6 rounded-xl relative"
            >
              <Link to={`/mooviesHome/${item?._id}`}>
                <img
                  src={item?.banner}
                  alt={``}
                  className="rounded-xl h-[300px] w-[340px] sm:transform sm:transition-all sm:hover:scale-90"
                />
                <div className="absolute m-6 bottom-0 z-30">
                  <p className="text-sm leading-none text-white">
                    {item?.rating}/10
                  </p>
                  <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                    {item?.title}
                  </h1>
                  <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
                    {item?.network}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );

  /* Tabs Value */

  const data = [
    {
      label: "action",
      value: "action",
      desc: itemsAction,
    },
    {
      label: "drame",
      value: "drame",
      desc: itemsDrame,
    },
    {
      label: "fantasy",
      value: "sf",
      desc: itemsFantasy,
    },
    {
      label: "Horreur",
      value: "anime",
      desc: itemsHorreur,
    },
  ];

  return (
    <section>
      <Tabs id="custom-animation" value="html" className="bg-black">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab
              className="text-red-700 text-xl rounded-lg  hover:bg-white active:bg-red-700 active:text-white hover:text-red-700  hover:text-2xl transition-all"
              key={value}
              value={value}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
}
