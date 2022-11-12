import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mhum3tp",
        "template_0nyi8lg",
        form.current,
        "sBeL3XzbDMBnqqEin"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("votre demande a bien été prise en compte ");
    e.target.reset();
  };

  return (
    <>
      <div className="container px-5 py-12 mx-auto flex">
        <div className="lg:w-1/2 md:w-1/2 bg-[url('https://images.unsplash.com/photo-1664214073996-f9b856081c22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Partenariats
          </h2>
          <p className="leading-relaxed mb-5 text-white">
            Pour nous contacter veuillez remplir les champs suivants nous de
            notre mieux pour vous répondre rapidement.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-4">
              <label
                for="name"
                className=" font-bold leading-7 text-sm text-white"
              >
                name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="w-full bg-[#0a0a0a3d] rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="email"
                className="font-bold leading-7 text-sm text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#0a0a0a3d] rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="work"
                className="font-bold leading-7 text-sm text-white"
              >
                Profession
              </label>
              <select
                name="work"
                className="tex-white font-bold w-full bg-[#0a0a0a3d] rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="work"
              >
                <option value="rapper">rapper</option>
                <option value="rapper cloud">rapper cloud</option>
                <option value="videaste">videaste</option>
                <option value="entreprise">entreprise</option>
                <option value="autre">autre</option>
              </select>
            </div>
            <div className="relative mb-4">
              <label
                for="number"
                className="font-bold leading-7 text-sm text-white"
              >
                Tel
              </label>
              <input
                type="number"
                id="number"
                name="number"
                className="w-full bg-[#0a0a0a3d] rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label
                for="message"
                className="font-bold leading-7 text-sm text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-[#0a0a0a3d] rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-500 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              onClick={() => {
                sendEmail();
              }}
              className="text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-lg"
            >
              send
            </button>
          </form>
          <p className="text-xs text-white mt-3">
            NB: n'oubliez pas de precisez le motif soit pour une diffusion ou un
            partenariat
          </p>
        </div>
      </div>
    </>
  );
}
