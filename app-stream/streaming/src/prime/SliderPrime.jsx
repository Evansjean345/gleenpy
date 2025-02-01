import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
{
  /*
  
const carousel = [
  {
    textUnderline: "1 Tome",
    to: "/movies/prime/man",
    smallTitle: "Spider-man: No-Way-Home",
    imgURL: "https://www.eklecty-city.fr/wp-content/uploads/2021/01/spider-man-andrew-garfield-tobey-maguire-tom-holland-1068x601.jpg",
    overview: "spiderman",
  },
  {
    textUnderline: "1 tome",
    to: "/movies/prime/uncharted",
    smallTitle: "Uncharted",
    imgURL: "https://www.tomsguide.fr/content/uploads/sites/2/2022/02/uncharted-le-film.jpg",
    overview: "Uncharted",
  },
  {
    textUnderline: "1 tome",
    to: "/movies/prime/kombat",
    overview: "Mortal Kombat",
    imgURL: "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/373/mortal-kombat-affiche-imax-1373724.webp",
    smallTitle: "mortal kombat",
  },
  {
    textUnderline: "3 tomes",
    to: "/movies/prime/dead",
    overview: "Deadpool",
    imgURL: "https://i.blogs.es/6b20c2/cartel-deadpool/1366_2000.jpg",
    smallTitle: "deadpool",
  },
  {
    textUnderline: "2 saisons",
    to: "/movies/euphoria",
    smallTitle: "Euphoria",
    imgURL:
      "https://imgix.bustle.com/uploads/image/2022/1/14/6b0cf8f4-3081-4809-972f-ef6a79c476e4-0110_euphoria.jpeg?w=1200&h=1000&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4093&fp-y=0.34",
    overview: "Euphoria",
  },
  {
    textUnderline: "2 Tomes",
    to: "/movies/prime/hell",
    overview: "Hellboy",
    imgURL: "https://images.rtl.fr/~c/2000v2000/rtl/www/1350036-hellboy-et-alice-monaghan-dans-le-film-hellboy.jpg",
    smallTitle: "hellboy",
  },
  {
    textUnderline: "1 tome",
    to: "/movies/prime/black",
    smallTitle: "BlacKkKlansman : J'ai infiltré le Ku Klux Klan",
    imgURL: "https://play-lh.googleusercontent.com/_bYFM5QvvmCHmvD57U0v_Rtia21yzJzRJu_YOX5WrZJtQyR04ko9oe5MA0VF-JufwGWxnw=w240-h480-rw",
    overview: "BlacKkKlansman ",
  },
  {
    textUnderline: "8 saisons",
    to: "/movies/prime/game",
    overview: "Game of Thrones",
    imgURL: "https://www.ilsuperuovo.it/wp-content/uploads/2021/06/game-of-thrones-pagella-1558605004.jpg",
    smallTitle: "game of throne",
  },
  {
    textUnderline: "5 saisons",
    to: "/movies/prime/misfits",
    overview: "Misfits",
    imgURL: "https://ic.c4assets.com/brands/misfits/eef47742-f9d5-44b9-b941-4137ee803f23.jpg?interpolation=progressive-bicubic&output-format=jpeg&output-quality=90&resize=1160px:*",
    smallTitle: "misfits",
  },
  {
    textUnderline: "9 tomes",
    to: "/movies/prime/fast",
    overview: "Fast & Furious",
    imgURL: "https://images.caradisiac.com/logos/2/9/8/7/272987/S0-les-habitants-de-los-angeles-s-opposent-a-fast-furious-197701.jpg",
    smallTitle: "fast & furious",
  },

  {
    textUnderline: "1 tome",
    to: "/movies/prime/bright",
    overview: "Bright",
    imgURL: "https://www.ecranlarge.com/uploads/image/001/002/bright-photo-will-smith-joel-edgerton-1002997.jpg",
    smallTitle: "bright",
  },
  {
    textUnderline: "5 saisons",
    to: "/movies/prime/break",
    overview: "Prison Break",
    imgURL: "https://thumb.canalplus.pro/http/unsafe/%7BresolutionXY%7D/smart/creativemedia-image.canalplus.pro/content/0001/25/1cf3e67b8e75694b42df9cbb791cd6ab26f36c3e.jpeg",
    smallTitle: "prison break",
  },
  {
    textUnderline: "9 saisons",
    to: "/movies/prime/mother",
    smallTitle: "How i meet your mother",
    imgURL: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BEA544D7476F6C33E23CB73494F462BAF5F9A247B41B335F74094773F4112C03/scale?width=1200&aspectRatio=1.78&format=jpeg",
    overview: "How i meet your mother",
  },
  {
    imgURL:
      "https://media2.ledevoir.com/images_galerie/nwd_525042_380313/image.jpg",
    imageAlt: "allEyesOnMe",
    smallTitle: "2 pac",
    overview: "All eyez one me",
    textUnderline: "1 Tome",
    to: "/movies/allEyezOnMe",
  },
]; */
}
export default function SliderPrime() {
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

  return (
    <>
      <div className="bg-black sm:pr-20 sm:pl-20">
        <p className="mt-2 p-4 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Prime video
          <br />
          <br />
        </p>
        <div className="carousel carousel-end rounded-box cursor-pointer sm:p-6 ">
          {moovies.map((items) => {
            return (
              <div
                key={items?._id}
                className="carousel-item  pl-2 pr-6 rounded-xl relative"
              >
                <Link to={`/mooviesHome/${items?._id}`}>
                  <img
                    src={items?.banner}
                    alt={``}
                    className="rounded-xl h-[300px] w-[340px] sm:transform sm:transition-all sm:hover:scale-90"
                  />
                  <div className="absolute m-6 bottom-0 z-30">
                    <p className="text-sm leading-none text-white">
                      {items?.rating}/10
                    </p>
                    <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
                      {items?.title}
                    </h1>
                    <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">
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
