import React from "react";
import "../index.css";
import Footer from "../layout/Footer";
import HeroLyrics from "../parole/HeroLyrics";
import LyricsItems from "../parole/LyricsItems";
import Navbar from "../layout/Navbar";

export default function LyricsHome() {
  return (
    <>
      <div className="bg-black m-0 p-0 h-[100vh] w-full">
        <Navbar />
        <HeroLyrics />
        <LyricsItems />
        <Footer />
      </div>
    </>
  );
}
