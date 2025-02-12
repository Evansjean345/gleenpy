import React from "react";
import HeroHome from "../components/HeroHome";
import SectionHeader from "../components/SectionHeader";
import SectionItems from "../components/SectionItems";
import SectionMusic from "../components/SectionMusic";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import SecondHero from "../layout/SecondHero";
import SlideHeader from "../layout/SlideHeader";
import SlidePlaylist from "../layout/SlidePlaylist";

export default function Home() {
  return (
    <div className="bg-black m-0 p-0 h-[100vh] w-full ">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-black">
        <HeroHome />
        <SecondHero />
        <SlideHeader />
        <SectionHeader />
        <SectionItems />
        <SlidePlaylist />
        <SectionMusic />
        <Footer />
      </div>
    </div>
  );
}
