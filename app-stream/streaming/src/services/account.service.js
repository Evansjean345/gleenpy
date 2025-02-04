import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const checkAuth = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) return false;

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        return true; // L'utilisateur est authentifié
      } else {
        return false; // Si le statut n'est pas 200, considérer comme non authentifié
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de l'utilisateur :", error);
      return false;
    }
  };

  const login = async ({ identifier, password, codepin }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        { identifier, password, codepin },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status !== 200) throw new Error("Échec de la connexion");

      const { token, userId } = response.data;

      // Stocker les informations
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      setToken(token);

      // Récupérer les informations de l'utilisateur après connexion
      const userInfo = await getUserInfo(userId);
      if (userInfo) {
        setUser(userInfo);
        localStorage.setItem("user", JSON.stringify(userInfo));
      }
      return { success: true };
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      return {
        success: false,
        error: "Identifiants incorrects ou erreur réseau.",
      };
    }
  };

  const isAuthenticated = () => !!token;

  const getUserInfo = async (userId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status !== 200)
        throw new Error("Impossible de récupérer les informations");
      return response.data;
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des infos utilisateur :",
        error
      );
      return null;
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/user/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("user");
      setUser(null);
      setToken(null);
      navigate("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        checkAuth,
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
