import React from "react";

export default function SecondHero() {
  return (
    <div className="bg-black">
      <article>
        <div className="bg-[url('/nest_banner.png')] bg-cover">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-3xl">
              <span className="sm:block hidden">
                Retrouvez vos films et series préférés sur NEXTDEO
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0"></div>
          </div>
        </div>
      </article>
    </div>
  );
}
