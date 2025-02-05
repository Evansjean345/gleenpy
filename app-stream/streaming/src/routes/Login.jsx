import { useState, useContext } from "react";
import Navbar from "../layout/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../services/account.service";
import { Dialog, DialogBody } from "@material-tailwind/react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [size, setSize] = useState(null);

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    codepin: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginMode, setLoginMode] = useState(null); // "password" ou "codepin"

  const handleOpen = (value) => setSize(value);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "codepin") {
      value = value.replace(/\D/g, ""); // Supprime les caractères non numériques
      setFormData({ ...formData, codepin: value ? Number(value) : "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!loginMode) {
      setError("Veuillez choisir une méthode de connexion.");
      setLoading(false);
      return;
    }

    const loginData = {
      identifier: formData.identifier,
      ...(loginMode === "password" ? { password: formData.password } : {}),
      ...(loginMode === "codepin" ? { codepin: formData.codepin } : {}),
    };

    console.log("Tentative de connexion avec :", loginData);

    const response = await login(loginData);

    if (response.success) {
      setSize("xl");
    } else {
      setError(response.error || "Erreur de connexion.");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="relative m-0 p-4 md:p-20 w-full h-full flex items-center justify-center flex-col">
        {/* Arrière-plan flou */}
        <div className="absolute inset-0 bg-[url('/back.jpg')] bg-cover bg-center blur-sm"></div>
        {/* Contenu */}
        <div className="relative w-full py-10 px-8 mt-8 sm:mt-20 flex flex-col h-full justify-center items-center bg-black rounded-lg shadow-2xl lg:max-w-xl  shadow-black ">
          <h1 className="text-3xl font-bold text-red-700 mb-6">Connexion</h1>

          {/* Message de succès après la connexion */}
          {/* Modal de confirmation */}
          <Dialog
            open={size !== null}
            size={size || "xl"}
            handler={handleOpen}
            className="bg-black text-white"
          >
            <DialogBody divider>
              <div className="flex w-full flex-col items-center justify-center">
                <span>
                  ✅ Connexion réussie cliquez sur le bouton suivant pour
                  commencer à regarder vos films préférés sur NEXTDEO
                </span>
                <Link
                  to="/moviesHome"
                  className="w-1/2 px-6 py-3 mt-4 text-center rounded-lg text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-700 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-red-700 focus:ring-opacity-50"
                >
                  streaming
                </Link>
              </div>
            </DialogBody>
          </Dialog>

          {/* Boutons de choix du mode de connexion */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded-lg text-white font-semibold transition-colors ${
                loginMode === "password"
                  ? "bg-gray-700 text-white"
                  : "bg-red-700 hover:bg-gray-700"
              }`}
              onClick={() => {
                setLoginMode("password");
                setFormData({ ...formData, codepin: "" });
              }}
            >
              Se connecter avec Mot de Passe
            </button>

            <button
              className={`px-4 py-2 rounded-lg  text-white font-semibold transition-colors ${
                loginMode === "codepin"
                  ? "bg-gray-700 text-white"
                  : "bg-red-700 hover:bg-gray-700"
              }`}
              onClick={() => {
                setLoginMode("codepin");
                setFormData({ ...formData, password: "" });
              }}
            >
              Se connecter avec Code PIN
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-balck p-8 rounded-lg shadow-lg w-full"
          >
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Identifiant : Email ou Téléphone */}
            <div className="mb-4">
              <label className="block font-semibold mb-2">
                Email ou Téléphone
              </label>
              <input
                type="text"
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                placeholder="Entrez votre email ou téléphone"
                className="w-full px-4 py-2 bg-black text-white border border-gray-700 rounded-lg focus:border-red-700 focus:ring-red-700"
                required
              />
            </div>

            {/* Champ Mot de Passe ou Code PIN selon le mode sélectionné */}
            {loginMode === "password" && (
              <div className="mb-4">
                <label className="block font-semibold mb-2">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Entrez votre mot de passe"
                  className="w-full px-4 py-2 bg-black text-white border border-gray-700 rounded-lg focus:border-red-700 focus:ring-red-700"
                  required
                />
              </div>
            )}

            {loginMode === "codepin" && (
              <div className="mb-4">
                <label className="block font-semibold mb-2">Code PIN</label>
                <input
                  type="number"
                  name="codepin"
                  value={formData.codepin}
                  onChange={handleChange}
                  placeholder="Entrez votre code PIN"
                  className="w-full px-4 py-2 bg-black text-white border border-gray-700 rounded-lg focus:border-red-700 focus:ring-red-700"
                  required
                />
              </div>
            )}

            {/* Bouton de connexion */}
            <button
              type="submit"
              className={`w-full px-4 py-2 mt-4 rounded-lg font-semibold ${
                loginMode
                  ? "bg-red-700 hover:bg-white hover:text-black"
                  : "bg-gray-500 cursor-not-allowed"
              }`}
              disabled={!loginMode || loading}
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
            <div className="text-white w-full text-center mt-2">
              Vous avez n'avez pas de compte ?
              <span className="underline">
                <Link to="/signup">s'inscrire</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
