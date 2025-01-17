import { React } from "react";
import { Link } from "react-router-dom";

export default function ShareItems() {
    const items = [
      {
        id: "1",
        to: "/share/makosso",
        title: `Général Makosso fait des révélations sur l'affaire "Paul Pogba"`,
        imageSrc: "https://lifemag-ci.com/wp-content/uploads/2019/05/makosso-camille-Copier.jpg",
        imageAlt: "",
      },
      {
        id: "2",
        to: "/share/apoutchou",
        title: "Apoutchou National est en direct",
        imageSrc: "https://i0.wp.com/l-frii.com/wp-content/uploads/2021/10/Cote-dIvoire-Apoutchou-National-annonce-une-tres-bonne-nouvelle-aux-blogueurs-et-influenceurs-africains.jpg?fit=720%2C683&ssl=1",
        imageAlt: "",
      },
      {
        id: "3",
        to: "/share/hamond",
        title: "Allô,je suis yougoss,sortez moi de là",
        imageSrc:
          "https://yt3.ggpht.com/HGes9hrn9xm1pv_2RiQsxHaGMvkH15wMVASJIXbIREhJYe_cF9UBnIwHPyAQ33UVN4qS6S2i=s900-c-k-c0x00ffffff-no-rj",
        imageAlt: "",
      },
      {
        id: "4",
        to: "/share/lohoues",
        title: "SORTEZZZ Emma Lohoues en colère répond à Carmen Sama en direct",
        imageSrc:
          "https://cdn.afrique-sur7.ci/700x400/articles/2022/05/emma-lohoues-son-pere-euge%CC%80ne-1er.jpg",
        imageAlt: "",
      },
     ]
  return (
    <>
          <article>
        <div className="bg-black">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Les derniers sorties
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
                  <br />
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-400 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8  relative ">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-full h-56 object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <br/>
                  <p className="mt-1 text-lg font-medium text-white">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
