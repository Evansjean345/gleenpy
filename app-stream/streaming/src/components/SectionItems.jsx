import { React } from "react";
import { Link, useNavigate } from "react-router-dom";

function SectionItems() {
  const navigate = useNavigate();
  const items = [
    {
      duration: "1 tome",
      to: "/movies/prime/kombat",
      title: "Mortal Kombat",
      imageSrc:
        "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/373/mortal-kombat-affiche-imax-1373724.webp",
    },
    {
      imageSrc:
        "https://hips.hearstapps.com/hmg-prod/images/melinda-marvin-thth-edit-1625262681.jpg",
      title: "too hot to handle",
      duration: "3 saisons",
      to: "/movies/toHotToHandle",
    },
    {
      imageSrc:
        "https://thumb.canalplus.pro/http/unsafe/2560x1440/filters:quality(80)/img-hapi.canalplus.pro:80/ServiceImage/ImageID/103279189",
      imageAlt: "",
      title: "cauchemar en entreprise",
      duration: "1 Tome",
      to: "/movies/nollywood/entreprise",
    },
    {
      imageSrc:
        "https://occ-0-993-1433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABciz-LoOZltDxV04Q7SQq6iPsQl9yXG5iTQHNZtQQgl2sxw1wyzDmBuB312lz8dDfSNPcEf6-nqROmcM7DTh1NURZvl7pkN-gULy.jpg?r=c75",
      imageAlt: "",
      title: "On n'arrête plus les Kandasamys",
      duration: "comedie",
      to: "/movies/comedie/arrete",
    },
    {
      id: "4",
      duration: "20 saisons",
      to: "/movies/anime/naruto",
      title: "Naruto Shippuden",
      imageSrc:
        "https://static.posters.cz/image/1300/affiches-et-posters/naruto-shippuden-group-ninja-war-i97861.jpg",
      imageAlt: "Naruto Shippuden",
    },
    {
      id: "6",
      duration: "1 saison",
      to: "/movies/behindHerEyes",
      title: "Mon ami Adèle - Behind Her eyes",
      imageSrc:
        "https://images.rtl.fr/~c/1200v800/rtl/www/1391555-adele-eve-hewson-et-louise-simona-brown-dans-mon-amie-adele.jpg",
      imageAlt: "Mon ami Adèle - Behind Her eyes",
    },
    {
      imageSrc:
        "https://decider.com/wp-content/uploads/2020/07/SERIOUSLY-SINGLE-REVIEW.jpg?quality=75&strip=all",
      imageAlt: "",
      title: "Seriously Single",
      duration: "comedie",
      to: "/movies/comedie/single",
    },
    {
      id: "7",
      duration: "2 saisons",
      to: "/movies/euphoria",
      title: "Euphoria",
      imageSrc:
        "https://imgix.bustle.com/uploads/image/2022/1/14/6b0cf8f4-3081-4809-972f-ef6a79c476e4-0110_euphoria.jpeg?w=1200&h=1000&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.4093&fp-y=0.34",
      imageAlt: "Euphoria",
    },
  ];

  return (
    <>
      <article>
        <div className="bg-black">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Nos programmes
            </p>
            <br />
            <br />
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
              {items.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className="group transform sm:hover:scale-125 transition-all  "
                >
                  <h3 className="mt-4 text-sm text-gray-400">
                    {item.duration}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-white">
                    {item.title}
                  </p>
                  <br />
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-400 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8  relative ">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-full h-56 object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <br />
          <br />
          <div className="flex justify-center">
            <button
              onClick={() => {
                navigate("/moviesHome");
              }}
              id="toggler"
              className="btn btn-wide rounded-full bg-red-700 hover:bg-white hover:text-black active:bg-red-900 focus:outline-none focus:ring focus:ring-red-900 transform hover:scale-125"
            >
              voir Plus
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default SectionItems;
