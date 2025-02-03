import { useState, useContext } from "react";
import Navbar from "../layout/Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../services/account.service"; // Import du contexte d'authentification

export default function Login() {
  const { login, isAuthenticated } = useContext(AuthContext); // Utilisation du contexte pour login
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    codepin: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginMode, setLoginMode] = useState(null); // Mode sélectionné : "password" ou "codepin"

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Convertir `codepin` en Number si c'est un PIN
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

    // Préparer les données à envoyer à l'API
    const loginData = {
      identifier: formData.identifier,
      ...(loginMode === "password" ? { password: formData.password } : {}),
      ...(loginMode === "codepin" ? { codepin: formData.codepin } : {}),
    };

    // URL de l'API pour la connexion
    const apiUrl = `${process.env.REACT_APP_API_URL}/user/login`;

    try {
      // Envoi des données à l'API avec la méthode POST
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
        credentials: "include", // Permet d'envoyer les cookies (si nécessaire)
      });

      if (!response.ok) {
        throw new Error("Identifiants incorrects ou problème de connexion.");
      }

      // Récupérer la réponse de l'API
      const data = await response.json();

      // Enregistrer l'utilisateur et le token via le contexte AuthContext
      await login(data); // Cette fonction utilise le context pour stocker le token et l'utilisateur

      // Si l'utilisateur est authentifié, on le redirige vers la page d'accueil
      if (isAuthenticated()) {
        alert("Connexion réussie !");
        navigate("/"); // Redirection vers la page d'accueil après succès
      } else {
        setError("Identifiants incorrects");
      }
    } catch (err) {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
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

          {/* Boutons de choix du mode de connexion */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                loginMode === "password"
                  ? "bg-red-700 text-white"
                  : "bg-gray-700 hover:bg-red-700"
              }`}
              onClick={() => {
                setLoginMode("password");
                setFormData({ ...formData, codepin: "" });
              }}
            >
              Se connecter avec Mot de Passe
            </button>

            <button
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                loginMode === "codepin"
                  ? "bg-red-700 text-white"
                  : "bg-gray-700 hover:bg-red-700"
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
            className="bg-gray-900 p-8 rounded-lg shadow-lg w-96"
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
          </form>
        </div>
      </div>
    </>
  );
}
