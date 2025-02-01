import React from "react";
import "../index.css";
import TvHero from "../layout/TvHero";
import TvItems from "../layout/TvItems";
import Navbar from "../layout/Navbar";

export default function TvHome() {
  return (
    <div className="bg-black m-0 p-0 h-[100vh] w-full">
      <Navbar />
      <TvHero />
      <TvItems />
    </div>
  );
}
