import { useState } from "react";
import Navbar from "../layout/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { Dialog, DialogBody } from "@material-tailwind/react";

export default function Signup() {
  const [formData, setFomData] = useState({
    fullname: "",
    email: "",
    phone: "",
    codepin: "",
    password: "",
    photo: null,
  });

  const [preview, setPreview] = useState(null); //aperçu de l'image
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  const handleChange = (e) => {
    setFomData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFomData({ ...formData, photo: file });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `${process.env.REACT_APP_API_URL}/user/signup`;

    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("codepin", formData.codepin);
    data.append("password", formData.password);
    if (formData.photo) {
      data.append("photo", formData.photo);
    }

    try {
      const response = await axios.post(apiUrl, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSize("md");
      console.log("Reponse :", response.data);
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      alert("Erreur lors de l'inscription");
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative m-0 p-4 md:p-20 w-full h-full flex items-center justify-center flex-col">
        {/* Arrière-plan flou */}
        <div className="absolute inset-0 bg-[url('/back.jpg')] bg-cover bg-center blur-sm"></div>
        {/* Contenu */}
        {/* Message de succès après l'inscription */}
        {/* Modal de confirmation */}
        <Dialog
          open={size !== null}
          size={size || "md"}
          handler={handleOpen}
          className="bg-black text-white"
        >
          <DialogBody divider>
            <div className="flex w-full flex-col items-center justify-center">
              <span>
                ✅ Votre compte a bien été enregistré. Cliquez sur le bouton
                suivant pour vous connecter.
              </span>
              <Link
                to="/login"
                className="w-1/2 px-6 py-3 mt-4 text-center rounded-lg text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-700 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-red-700 focus:ring-opacity-50"
              >
                Se connecter
              </Link>
            </div>
          </DialogBody>
        </Dialog>
        <div className="relative w-full py-10 px-8 mt-8 sm:mt-20 flex h-full justify-center items-center bg-black rounded-lg shadow-2xl lg:max-w-xl  shadow-black ">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-x-12 md:flex-row flex-col">
              <div>
                <div class="flex-1">
                  <label
                    class="block font-semibold mb-2 text-sm text-white "
                    for="name"
                  >
                    Nom et prénoms
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Entrez votre nom"
                    class="block w-full px-5 py-3 mt-2 rounded-lg text-white placeholder-gray-400 bg-red-700 border border-gray-200  dark:placeholder-gray-600 dark:text-white dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>

                <div class="flex-1 mt-2">
                  <label
                    for="email"
                    class="block font-semibold mb-2 text-sm text-white"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="entrez votre addresse mail"
                    class="block w-full px-5 rounded-lg py-3 mt-2 text-white placeholder-gray-400 bg-red-700  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>
                <div class="flex-1 mt-2">
                  <label
                    for="tel"
                    class="block font-semibold mb-2 text-sm text-white "
                  >
                    Telephone
                  </label>
                  <input
                    id="tel"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="entrez votre numero de telephone"
                    class="block w-full rounded-lg px-5 py-3 mt-2 text-white placeholder-gray-400 bg-red-700 dark:bg-red-700 border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="flex-1 mt-2">
                  <label
                    for="pass"
                    class="block font-semibold mb-2 text-sm text-white"
                  >
                    mot de passe
                  </label>
                  <input
                    id="pass"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="entrez votre numero de telephone"
                    class="block w-full rounded-lg px-5 py-3 mt-2 text-white placeholder-gray-400 bg-red-700  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>
                <div class="flex-1">
                  <label
                    for="pin"
                    class="block font-semibold mb-2 text-sm text-white "
                  >
                    code pin
                  </label>
                  <input
                    id="pin"
                    type="number"
                    name="codepin"
                    value={formData.codepin}
                    onChange={handleChange}
                    placeholder="entrez votre numero de telephone"
                    class="block w-full rounded-lg px-5 py-3 mt-2 text-white placeholder-gray-400 bg-red-700  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>
                <div class="flex-1 mt-2">
                  <label
                    for="profil"
                    class="block font-semibold mb-2 text-sm text-white "
                  >
                    photo de profil
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="photo"
                    onChange={handleFileChange}
                    id="profil"
                    className="file-input file-input-bordered   w-full max-w-xs"
                  />
                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="mt-2 rounded-lg w-32 h-32 object-cover border border-gray-200"
                    />
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="w-full px-6 py-3 rounded-lg mt-6 md:mt-12 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-700  hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-red-700 focus:ring-opacity-50"
            >
              S'inscrire
            </button>

            <div className="text-white w-full text-center mt-2">
              Vous avez déjà un compte ?
              <span className="underline">
                <Link to="/login">se connecter</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
