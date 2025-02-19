import { useNavigate, Link, NavLink } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import aigleLogo from "../assets/logo/aigle.png";
import moovLogo from "../assets/logo/moov.png";
import mtnLogo from "../assets/logo/mtn.png";
import orangeLogo from "../assets/logo/orange.png";
import waveLogo from "../assets/logo/wave.png";
import carte from "../assets/logo/carte-de-credit.png";
import mobile from "../assets/logo/mobile-payment.png";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../services/account.service";
import axios from "axios";

const Pay = () => {
  //wallet
  const [selectedWallet, setSelectedWallet] = useState("");
  const [selectedOption, setSelectedOption] = useState("mobile");
  //context
  const { isAuthenticated, getUserInfo, logout, user, token } =
    useContext(AuthContext);
  //setinformation
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  //submit state
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [otp, setOtp] = useState("");
  const [waveUrl, setWaveUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const wallets = [
    { name: "Orange", logo: orangeLogo },
    { name: "MTN", logo: mtnLogo },
    { name: "Moov", logo: moovLogo },
    { name: "Wave", logo: waveLogo },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setSelectedOption("card"),
    onSwipedRight: () => setSelectedOption("mobile"),
  });

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

  const handlePayment = async () => {
    if (!selectedWallet || !phoneNumber || !amount) {
      setError2(true);
      return;
    }

    if (amount !== "1000") {
      setError(true);
      return;
    }

    const paymentData = {
      userId: userInfo?._id,
      amount,
      provider: selectedWallet.toLocaleLowerCase(),
      number: `225${phoneNumber}`,
      ...(selectedWallet === "Orange" && { otp }),
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/subscribe`,
        paymentData
      );
      if (response.status === 200) {
        if (selectedWallet === "Wave" && response.data.waveLaunchUrl) {
          setWaveUrl(response.data.waveLaunchUrl);
          setIsModalOpen(true);
        }
      } else {
        //navigate("/receipt")
      }
    } catch (error) {
      alert("Erreur lors du paiment");
      console.error(error);
    }
  };

  return (
    <div className="bg-white">
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
            </ul>
          </div>
        </div>
        {/* Nav mobile version End */}
        {/* Nav PC version Start */}
        <div id="nav" className="navbar-center hidden relative lg:flex w-[79%]">
          <div className="absolute right-52"></div>
        </div>
        {/* Nav PC version End */}
      </nav>
      <br />
      <br />
      <br />
      <Link to="/">
        <button className="sm:text-2xl pb-4 border my-8 mx-8 rounded-lg  border-gray-300 bg-gray-100 gap-x-1 cursor-pointer  text-2xl font-semibold py-2 px-2 text-red-600 flex items-center justify-center">
          <ChevronLeftIcon aria-hidden="true" className="size-7" />
          <span> Revenir sur Nextdeo</span>
        </button>
      </Link>
      <div data-overlay-container="true">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-col justify-center items-center my-4 w-full max-w-3xl mx-auto">
            <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border bg-content1 outline-none mb-4 test-xs text-center rounded-lg shadow-lg">
              <p className="text-center text-white text-base bg-blue-500 px-6 py-3 mx-auto w-fit mt-4 rounded-lg">
                Payer avec Aigle
              </p>
              <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased text-black">
                <div className="flex flex-col items-center justify-between">
                  <div className="w-full flex-1 justify-center flex items-center">
                    <img src={aigleLogo} alt="Logo" className="w-20 h-20" />
                  </div>
                  <p className="text-center ">
                    COMPAGNIE DES SERVICES NUMÉRIQUES
                  </p>
                  <p className="text-center"> Contact : +2250504921096</p>
                </div>
                <hr
                  className="shrink-0 bg-divider w-full  h-divider"
                  role="separator"
                />

                <p className="text-center mt-2 text-xs">
                  Vous vous apprêtez à effectuer un paiement marchand,
                  <br />
                  Veuillez choisir votre moyen de paiement :
                </p>

                <div className="inline-flex mx-auto ">
                  <div {...handlers} className="w-full max-w-md mx-auto mt-4">
                    <div className="relative flex items-center white-200 rounded-lg h-12 border-2 border-gray-500">
                      <div
                        className={`absolute top-0 left-0 h-full  rounded-lg transition-all duration-300 ${
                          selectedOption === "mobile"
                            ? "w-1/2 translate-x-0"
                            : "w-1/2 translate-x-full"
                        }`}
                      ></div>
                      <button
                        onClick={() => setSelectedOption("mobile")}
                        className={`z-10 flex-1 flex items-center rounded-lg justify-center font-medium text-xs transition-colors duration-300 px-2 py-2 ml-1 cursor-pointer ${
                          selectedOption === "mobile"
                            ? "!bg-blue-500 text-white"
                            : "text-gray-800"
                        }`}
                      >
                        <img
                          src={mobile} // Remplace par le chemin de ton image Carte Bancaire
                          alt="Carte Bancaire"
                          className="w-5 h-5 mr-2"
                        />
                        Mobile Money
                      </button>
                      <button
                        onClick={() => setSelectedOption("card")}
                        className={`z-10 flex-1 flex items-center rounded-lg justify-center font-medium text-xs transition-colors duration-300 px-4 py-2 mr-1 cursor-pointer ${
                          selectedOption === "card"
                            ? "!bg-blue-500 text-white "
                            : "text-gray-800"
                        }`}
                      >
                        <img
                          src={carte} // Remplace par le chemin de ton image Carte Bancaire
                          alt="Carte Bancaire"
                          className="w-5 h-5 mr-2"
                        />
                        Carte Bancaire
                      </button>
                    </div>

                    <div className="mt-6">
                      {selectedOption === "mobile" && (
                        <>
                          <div className="mt-6">
                            <p className="text-white font-medium float-left text-xs">
                              Choisissez votre operateur
                            </p>
                            <br />

                            <div className="flex flex-row gap-2 ">
                              {wallets.map((wallet) => (
                                <>
                                  <div
                                    key={wallet.name}
                                    onClick={() =>
                                      setSelectedWallet(wallet.name)
                                    }
                                    className={`flex flex-col items-center justify-center rounded-lg w-20 p-2 transition-all hover:bg-gray-200 cursor-pointer ${
                                      selectedWallet === wallet.name
                                        ? "bg-blue-300 text-blue-800"
                                        : "bg-gray-100 text-black"
                                    }`}
                                  >
                                    <div className="w-14 h-14 rounded-full overflow-hidden">
                                      <img
                                        src={wallet.logo}
                                        alt={wallet.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <span className="text-xs font-medium text-center line-clamp-1 mt-2 ">
                                      {wallet.name}
                                    </span>
                                  </div>
                                </>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6 space-y-6">
                            {/* Champ numéro de téléphone  */}

                            <div className="relative">
                              <div className="mb-4">
                                <input
                                  type="text"
                                  name="phone"
                                  value={phoneNumber}
                                  onChange={(e) =>
                                    setPhoneNumber(e.target.value)
                                  }
                                  placeholder="numéro de telephone"
                                  className="w-full px-4 py-2 bg-white text-gray-500 border border-gray-300 rounded-lg focus:border-red-700 focus:ring-red-700"
                                  required
                                />
                              </div>
                            </div>

                            {/* Champ montant */}
                            <div className="relative">
                              <div className="mb-4">
                                <input
                                  type="text"
                                  name="montant"
                                  value={amount}
                                  onChange={(e) => setAmount(e.target.value)}
                                  placeholder="ex: 5000 FCFA"
                                  className="w-full px-4 py-2 bg-white text-gray-500 border border-gray-300 rounded-lg focus:border-red-700 focus:ring-red-700"
                                  required
                                />
                              </div>
                            </div>

                            <div className="relative">
                              {selectedWallet === "Orange" && (
                                <>
                                  <div className="mb-4">
                                    <input
                                      type="text"
                                      name="otp"
                                      value={otp}
                                      onChange={(e) => setOtp(e.target.value)}
                                      placeholder="otp pour orange"
                                      className="w-full px-4 py-2 bg-white text-gray-500 border border-gray-300 rounded-lg focus:border-red-700 focus:ring-red-700"
                                      required
                                    />
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="mt-6">
                            <button
                              onClick={handlePayment}
                              className="w-full bg-blue-500 text-white p-3 text-xs rounded-lg font-medium transition-colors duration-300 hover:bg-blue-300 cursor-pointer"
                            >
                              Payer
                              {selectedWallet && (
                                <>
                                  <span> avec {selectedWallet} </span>
                                </>
                              )}
                            </button>
                          </div>
                          {/* valider le paiement avec wave */}

                          {isModalOpen && waveUrl && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                              <div className="bg-white p-5 rounded-lg w-3/4 h-3/4 relative">
                                <button
                                  onClick={() => setIsModalOpen(false)}
                                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
                                >
                                  Fermer
                                </button>
                                <iframe
                                  src={waveUrl}
                                  className="w-full h-full"
                                ></iframe>
                              </div>
                            </div>
                          )}
                          {error && (
                            <div
                              role="alert"
                              className="alert alert-error my-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 cursor-pointer stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                                onClick={() => {
                                  setError(false);
                                }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>Le montant doit etre égal à 1000 XOF</span>
                            </div>
                          )}
                          {error2 && (
                            <div
                              role="alert"
                              className="alert alert-error my-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 shrink-0 cursor-pointer stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                                onClick={() => {
                                  setError2(false);
                                }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span>Veuillez selectionnez l'operateur</span>
                            </div>
                          )}
                          {/* Texte en bas du bouton */}
                          <div className="text-center mt-4 text-slate-600 max-w-xs mx-auto">
                            <p className="text-sm">
                              En cas de problème, contactez le support technique{" "}
                              <br />
                              Tel : +225 07 00 60 60 79 | +225 27 22 25 62 77{" "}
                              <br />
                              mail : hotline@aiglesend.com
                            </p>
                            <p className="text-xs mt-2 text-slate-400">
                              Copyright © FINTECH AIGLE 2025. Tous droits
                              réservés.
                            </p>
                          </div>
                        </>
                      )}
                      {selectedOption === "card" && (
                        <>
                          <div className="mt-6 space-y-6">
                            {/* Champ numéro de téléphone  */}

                            <div className="relative">
                              <div className="mb-4">
                                <label className="block font-semibold mb-2">
                                  Nom de la carte
                                </label>
                                <input
                                  type="name"
                                  name="name"
                                  value={""}
                                  onChange={""}
                                  placeholder="Entrez le nom"
                                  className="w-full px-4 py-2 bg-white text-gray-500 border border-gray-300 rounded-lg focus:border-red-700 focus:ring-red-700"
                                  required
                                />
                              </div>
                            </div>

                            <div className="relative">
                              <div className="mb-4">
                                <label className="block font-semibold mb-2">
                                  4 derniers chiffres de la carte
                                </label>
                                <input
                                  type="number"
                                  name="name"
                                  value={""}
                                  onChange={""}
                                  placeholder="xxxxx"
                                  className="w-full px-4 py-2 bg-white text-gray-500 border border-gray-300 rounded-lg focus:border-red-700 focus:ring-red-700"
                                  required
                                />
                              </div>
                            </div>

                            <div className="relative">
                              <label className="block font-semibold mb-2">
                                cvv
                              </label>
                              <input
                                type="number"
                                name="name"
                                value={""}
                                onChange={""}
                                placeholder="xxxxx"
                                className="w-full px-4 py-2 bg-white text-gray-500 border border-gray-300 rounded-lg focus:border-red-700 focus:ring-red-700"
                                required
                              />
                            </div>

                            <div className="relative">
                              <div className="mb-4">
                                <label className="block font-semibold mb-2">
                                  Numéro de téléphone
                                </label>
                                <input
                                  type="text"
                                  name="phone"
                                  value={""}
                                  onChange={""}
                                  placeholder="numéro de telephone"
                                  className="w-full px-4 py-2 bg-white text-gray-500 border border-gray-300 rounded-lg focus:border-red-700 focus:ring-red-700"
                                  required
                                />
                              </div>
                            </div>

                            <div className="relative">
                              <div className="mb-4">
                                <label className="block font-semibold mb-2">
                                  Montant
                                </label>
                                <input
                                  type="text"
                                  name="montant"
                                  value={""}
                                  onChange={""}
                                  placeholder="ex: 5000 FCFA"
                                  className="w-full px-4 py-2 bg-white text-gray-500 border border-gray-300 rounded-lg focus:border-red-700 focus:ring-red-700"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <button className="w-full bg-blue-700 text-white p-3 rounded-lg font-medium transition-colors duration-300 cursor-pointer hover:bg-blue-300">
                              Payer
                            </button>

                            {/* Texte en bas du bouton */}
                            <div className="mt-4 text-center text-sm text-gray-800">
                              <p>
                                En cas de problème, contactez le support
                                technique
                              </p>
                              <p>
                                Tel : +225 07 00 60 60 79 | +225 27 22 25 62 77
                              </p>
                              <p>
                                Mail :{" "}
                                <a
                                  href="mailto:hotline@aiglesend.com"
                                  className="text-blue-500 underline"
                                >
                                  hotline@aiglesend.com
                                </a>
                              </p>
                            </div>

                            {/* Copyright */}
                            <div className="mt-4 text-center text-xs text-gray-500">
                              Copyright © FINTECH AIGLE 2025. Tous droits
                              réservés.
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
