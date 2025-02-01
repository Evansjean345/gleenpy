import React from "react";
import ContactForm from "../api/ContactForm";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

export default function About() {
  return (
    <>
      <div className="bg-black m-0 p-0 h-[100vh] w-full">
      <Navbar/>
        <br />
        <br />
        <br />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
