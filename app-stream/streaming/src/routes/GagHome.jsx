import React from "react";
import "../index.css";
import Footer from "../layout/Footer";
import HeroGag from "../layout/HeroGag";
import SectionGag from "../layout/SectionGag";
import Navbar from "../layout/Navbar";

export default function GagHome() {
  return (
    <div className="bg-black m-0 p-0 h-[100vh] w-full">
      <Navbar />
      <HeroGag />
      <SectionGag />
      <Footer />
    </div>
  );
}
