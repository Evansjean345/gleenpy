import { PaperClipIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";
import { AuthContext } from "../services/account.service";

export default function Profile() {
  const { isAuthenticated, getUserInfo, logout, user, token } =
    useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (isAuthenticated() && !user) {
        const userId = localStorage.getItem("userId");
        const fetchedUserInfo = await getUserInfo(userId);
        if (fetchedUserInfo) {
          setUserInfo(fetchedUserInfo);
        }
      } else {
        setUserInfo(user);
      }
    };

    fetchUserInfo();
  }, [user, isAuthenticated, getUserInfo]);

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("fr-FR", options);
  }

  return (
    <>
      <nav className="navbar bg-black fixed z-50">
        <div id="logo" className="navbar-end">
          <NavLink to="/" className="bg-black text-red-700 text-2xl font-bold">
            <img src="/logo.png" alt="logo" className="h-[64px] w-[180px]" />
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
              {!isAuthenticated() ? (
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
              ) : (
                <li>
                  <details className="dropdown ">
                    <summary className="btn m-1">
                      <div className="avatar h-8 w-8">
                        <div className="ring-[red] ring-offset-base-100  rounded-full ring ring-offset-2">
                          <img
                            src={
                              userInfo?.photo === null
                                ? "/avatar.webp"
                                : userInfo?.photo
                            }
                            alt=""
                          />
                        </div>
                      </div>
                    </summary>
                    <ul className="menu bg-black dropdown-content bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                      <li>
                        <Link to="/profile">mon compte</Link>
                      </li>
                      <li>
                        <div onClick={logout}>se deconnecter</div>
                      </li>
                    </ul>
                  </details>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* Nav mobile version End */}
        {/* Nav PC version Start */}
        <div id="nav" className="navbar-center hidden relative lg:flex w-[79%]">
          <div className="absolute right-52">
            <div className="dropdown dropdown-hover">
              <div tabIndex={0}>
                <div className="avatar h-12 w-12">
                  <div className="ring-[red] ring-offset-base-100  rounded-full ring ring-offset-2">
                    <img
                      src={
                        userInfo?.photo === null
                          ? "/avatar.webp"
                          : userInfo?.photo
                      }
                    />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-black rounded-box z-[1] w-56 p-2 shadow"
              >
                <li>
                  <Link to="/">revenir sur Nextdeo </Link>
                </li>
                <li>
                  <div onClick={logout}>se deconnecter</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Nav PC version End */}
      </nav>
      <br />
      <br />
      <br />
      <div className="md:py-4 md:px-24 py-16 px-8 bg-white ">
        <Link to="/">
          <button className="sm:text-2xl rounded-lg  border-gray-300 bg-gray-100 my-8  py-2 px-2  gap-x-3 cursor-pointer  text-2xl font-semibold text-red-600 flex items-center">
            <ChevronLeftIcon aria-hidden="true" className="size-7" />
            <span> Revenir sur Nextdeo</span>
          </button>
        </Link>
        <div className="border-2 md:px-16 md:py-16 px-4 py-4 border-gray-300 rounded-md text-black">
          <div className="px-4 sm:px-0">
            <h3 className="sm::text-2xl text-xl font-semibold ">
              Informations personnelles
            </h3>
            <p className="mt-1 max-w-2xl text-sm/6 ">
              details du compte et abonnement
            </p>
          </div>
          <div className="mt-6 border-t border-gray-300">
            <dl className="divide-y divide-gray-300">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="flex items-center gap-x-2 border-2 rounded-md py-2 px-4 border-gray-200 bg-gray-100">
                  <img src="/profil_icon.png" alt="" className="w-8 h-8" />
                  <dt className="text-sm/6 font-medium ">Nom complet</dt>
                </div>

                <dd className="mt-1 text-sm/6  sm:col-span-2 py-2 px-1 sm:mt-0">
                  {userInfo?.fullname}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="flex items-center gap-x-2 border-2 rounded-md py-2 px-4 border-gray-200 bg-gray-100">
                  <img src="/mail_icon.png" alt="" className="w-8 h-8" />
                  <dt className="text-sm/6 font-medium ">Email de connexion</dt>
                </div>
                <dd className="mt-1 text-sm/6  sm:col-span-2 sm:mt-0 py-2 px-1">
                  {userInfo?.email}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="flex items-center gap-x-2 border-2 rounded-md py-2 px-4 border-gray-200 bg-gray-100">
                  <img src="/phone_icon.png" alt="" className="w-8 h-8" />
                  <dt className="text-sm/6 font-medium ">
                    numero de connexion (telephone)
                  </dt>
                </div>
                <dd className="mt-1 text-sm/6  sm:col-span-2 sm:mt-0 py-2 px-1">
                  {userInfo?.phone}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="flex items-center gap-x-2 border-2 rounded-md py-2 px-4 border-gray-200 bg-gray-100">
                  <img src="/password_icon.png" alt="" className="w-8 h-8" />
                  <dt className="text-sm/6 font-medium ">
                    code de connexion (code pin)
                  </dt>
                </div>

                <dd className="mt-1 text-sm/6  sm:col-span-2 sm:mt-0 py-2 px-1">
                  {userInfo?.codepin}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Photo de profil</dt>
                <dd className="mt-2 text-sm  sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-4 pr-5 pl-4 text-sm/6">
                      <div className="flex w-0 flex-1 items-center">
                        <PaperClipIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-400"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <img
                            src={
                              userInfo?.photo === null
                                ? "/avatar.webp"
                                : userInfo?.photo
                            }
                            alt=""
                            className="h-16 w-16 rounded-md"
                          />
                        </div>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="md:px-24 px-8 bg-white ">
        <div className="pb-4 gap-x-3 cursor-pointer sm:pb-8 text-2xl font-semibold text-red-600 flex items-center">
          <span className="sm:text-2xl rounded-lg  border-gray-300 bg-gray-100 py-2 px-2">
            {" "}
            Mon abonnement
          </span>
        </div>
        <div className="border-2 md:px-16 md:py-16 px-4 py-4 border-gray-300 rounded-md text-black">
          <div className="px-4 sm:px-0">
            <h3 className="sm::text-2xl text-xl font-semibold ">
              Mon abonnement
            </h3>
            <p className="mt-1 max-w-2xl text-sm/6">details de l'abonnement</p>
          </div>
          <div className="mt-6 border-t border-gray-300">
            <dl className="divide-y divide-gray-300">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <div className="flex items-center gap-x-2">
                  <dt className="text-sm/6 font-medium ">
                    {userInfo?.subscription_expiry !== null
                      ? "Abonnement actif"
                      : "Abonnement inactif"}
                  </dt>
                </div>
                <dd className="mt-1 text-sm/6  sm:col-span-2 sm:mt-0">
                  {userInfo?.fullname}
                </dd>
              </div>
            </dl>
          </div>
          <div className="flex justify-center sm:justify-between sm:flex-row flex-col">
            <div className="w-full sm:w-96 h-full bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl p-6 shadow-2xl relative overflow-hidden border border-gray-300">
              {/* Bank Name */}
              <div className="text-lg font-semibold flex items-center justify-between tracking-wide uppercase">
                <img
                  src="/aig-b.png"
                  alt=""
                  className="w-12 h-12 rounded-md shadow-md"
                />
                Aigle
              </div>

              {/* Card Number */}
              <div className="mt-8 text-base flex text-red-600 gap-x-2 font-mono tracking-widest">
                carte d'abonné nextdeo
                <img
                  src="icon.png"
                  alt=""
                  className="w-6 h-6 rounded-md shadow-md"
                />
              </div>

              {/* Beneficiary Info */}
              <div className="mt-4 text-gray-300">
                <div className="text-sm">
                  Nom: &nbsp;
                  <span className="font-semibold text-white">
                    {userInfo?.fullname}
                  </span>
                </div>
                <div className="text-sm">
                  Email: &nbsp;
                  <span className="font-semibold text-white">
                    {userInfo?.email}
                  </span>
                </div>
                <div className="text-sm">
                  Téléphone: &nbsp;
                  <span className="font-semibold text-white">
                    {userInfo?.phone}
                  </span>
                </div>
                <div className="text-sm">
                  Code PIN: &nbsp;
                  <span className="font-semibold text-white">
                    {" "}
                    {userInfo?.codepin}
                  </span>
                </div>
              </div>

              {/* Subscription Expiry */}
              {userInfo?.subscription_expiry !== null ? (
                <div className="mt-4 text-sm text-gray-300">
                  Date d'expiration :{" "}
                  <span className="font-semibold text-white">
                    {userInfo?.subscription_expiry}
                  </span>
                </div>
              ) : (
                <div className="mt-4 text-sm text-gray-300">
                  Aucun abonnment actif :{" "}
                  <span className="font-semibold text-white">0/00/0000</span>
                </div>
              )}
            </div>
            <div className="mt-6 sm:mt-0">
              <div className="flex items-center gap-x-2">
                <dt className="text-sm/6 font-medium ">
                  {userInfo?.subscription_expiry !== null
                    ? `Abonnement actif jusqu'au : ${formatDate(
                        userInfo?.subscription_expiry
                      )}`
                    : `Aucun abonnement`}
                </dt>
              </div>
              <Link
                className={
                  "w-full flex items-center border border-gray-300 gap-x-2 px-4 py-2 mt-4 rounded-lg font-semibold hover:bg-red-700 bg-gray-200 text-black hover:text-white"
                }
                to="/pay"
              >
                <img src="/card_icon2.png" alt="" className="w-8 h-8" />
                {userInfo?.subscription_expiry !== null
                  ? "Renouveler mon abonnement"
                  : "Acheter un abonnment"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
