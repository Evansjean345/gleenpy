import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-black fixed z-50">
        <div id="logo" className="navbar-end">
          <NavLink to="/" className="bg-black text-red-700 text-2xl font-bold">
            <img src="/logo.png" alt="logo" className="h-[64px] w-32" />
          </NavLink>
        </div>
        {/* Nav mobile version Start */}
        <div className="navbar-start">
          <div className="dropdown">
            {/* Burger icon start */}
            <label
              tabIndex={0}
              className="btn text-white btn-ghost xl:hidden bg-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Burger icon end */}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "bg-red-700" : "hover:bg-red-900"
                  }
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/moviesHome"
                  end
                  className={({ isActive }) =>
                    isActive ? "bg-red-700" : "hover:bg-red-900"
                  }
                >
                  Cinéma
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/musicsHome"
                  end
                  className={({ isActive }) =>
                    isActive ? "bg-red-700" : "hover:bg-red-900"
                  }
                >
                  Musique
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gagHome"
                  end
                  className={({ isActive }) =>
                    isActive ? "bg-red-700" : "hover:bg-red-900"
                  }
                >
                  Gag
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/directHome"
                  end
                  className={({ isActive }) =>
                    isActive ? "bg-red-700" : "hover:bg-red-900"
                  }
                >
                  Achat des œuvres
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tvHome"
                  end
                  className={({ isActive }) =>
                    isActive ? "bg-red-700" : "hover:bg-red-900"
                  }
                >
                  Mes émissions TV
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lyricsHome"
                  end
                  className={({ isActive }) =>
                    isActive ? "bg-red-700" : "hover:bg-red-900"
                  }
                >
                  Paroles de vie
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/abouts"
                  end
                  className={({ isActive }) =>
                    isActive ? "bg-red-700" : "hover:bg-red-900"
                  }
                >
                  Partenaires
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  end
                  className={({ isActive }) =>
                    isActive ? "bg-red-700" : "hover:bg-red-900"
                  }
                >
                  se connecter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Nav mobile version End */}
        {/* Nav PC version Start */}
        <div id="nav" className="navbar-center hidden  lg:flex w-[79%]">
          <ul className="menu menu-horizontal p-0 text-white">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "bg-red-700" : "hover:bg-red-900"
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/moviesHome"
                end
                className={({ isActive }) =>
                  isActive ? "bg-red-700" : "hover:bg-red-900"
                }
              >
                Cinéma
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/musicsHome"
                end
                className={({ isActive }) =>
                  isActive ? "bg-red-700" : "hover:bg-red-900"
                }
              >
                Musique
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gagHome"
                end
                className={({ isActive }) =>
                  isActive ? "bg-red-700" : "hover:bg-red-900"
                }
              >
                Gag
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/directHome"
                end
                className={({ isActive }) =>
                  isActive ? "bg-red-700" : "hover:bg-red-900"
                }
              >
                Achat des œuvres
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tvHome"
                end
                className={({ isActive }) =>
                  isActive ? "bg-red-700" : "hover:bg-red-900"
                }
              >
                Mes émissions TV
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lyricsHome"
                end
                className={({ isActive }) =>
                  isActive ? "bg-red-700" : "hover:bg-red-900"
                }
              >
                Paroles de vie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/abouts"
                end
                className={({ isActive }) =>
                  isActive ? "bg-red-700" : "hover:bg-red-900"
                }
              >
                Partenaires
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                end
                className={({ isActive }) =>
                  isActive ? "bg-red-700" : "hover:bg-red-900"
                }
              >
                se connecter
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Nav PC version End */}
      </nav>
    </>
  );
}

export default Navbar;
