import React from "react";
import "../index.css";
import Footer from "../layout/Footer";
import HeroLive from "../layout/HeroLive";
import ShareItems from "../layout/ShareItems";
import Navbar from "../layout/Navbar";

export default function DirectHome() {
  return (
    <div className="bg-black m-0 p-0 h-[100vh] w-full">
      <Navbar />
      <HeroLive />
      <ShareItems />
      <Footer />
    </div>
  );
}
