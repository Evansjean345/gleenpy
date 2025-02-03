import Cookies from "js-cookie";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importation d'axios

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(Cookies.get("jwt") || null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/user`, {
          withCredentials: true, // Permet d'inclure les cookies
        });

        if (response.status === 200) {
          setUser(response.data);
        } else {
          setUser(null);
          Cookies.remove("jwt");
        }
      } catch (error) {
        console.error("Erreur lors de la vérification de l'utilisateur :", error);
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  const login = async ({ identifier, password, codepin }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        { identifier, password, codepin },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Inclure les cookies dans la requête
        }
      );

      if (response.status !== 200) {
        throw new Error("Échec de la connexion");
      }

      setUser(response.data.userId);
      setToken(response.data.token);
      Cookies.set("jwt", response.data.token);
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  const isAuthenticated = () => !!token;

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/${user?._id}`,
        {
          withCredentials: true, // Inclure les cookies dans la requête
        }
      );

      if (response.status !== 200) {
        throw new Error("Impossible de récupérer les informations de l'utilisateur");
      }
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des infos de l'utilisateur :", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/user/logout`, {}, {
        withCredentials: true, // Inclure les cookies dans la requête
      });
      setUser(null);
      setToken(null);
      Cookies.remove("jwt");
      //navigate("/")
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        isAuthenticated,
        getUserInfo,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
