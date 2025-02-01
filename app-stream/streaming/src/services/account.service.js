import Cookies from "js-cookie";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(Cookies.get("jwt") || null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setUser(null);
          Cookies.remove("jwt");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la verification de l'utilisateur :",
          error
        );
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  const login = async ({ identifier, password, codepin }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ identifier, password, codepin }),
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Echec de la connexion");
      }

      const data = await response.json();
      setUser(data.userId);
      setToken(data.token);
      Cookies.set("jwt", data.token);
    } catch (error) {
      console.error("Erreur lors de la connexion : ", error);
    }
  };

  const isAuthenticated = () => !!token;

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/${user?._id}`,
        {
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Impossible de recuperer les informations de l'utilisateur "
        );
      }
      return await response.json();
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des infos de l'utilisateur :",
        error
      );
    }
  };

  const logout = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/user/logout`, {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      setToken(null);
      Cookies.remove("jwt");
      //navigate("/")
    } catch (error) {
      console.error("Erreur lors de la deconnexion :", error);
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
