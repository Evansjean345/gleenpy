import { useState, useRef, useContext, useEffect } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import aigleLogo from "../assets/logo/aigle.png";
import { AuthContext } from "../services/account.service";
import axios from "axios";

export default function Invoice() {
  const receiptRef = useRef(null); // Référence pour capturer le div
  const [lastestTransaction, setLatestTransaction] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  //context
  const { isAuthenticated, getUserInfo, logout, user, token } =
    useContext(AuthContext);

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

  useEffect(() => {
    const fetchLatestTransaction = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/user/${userInfo._id}/transactions`
        );
        const data = await response.json();

        if (data.transactions && data.transactions.length > 0) {
          // Trier les transactions par date (décroissante)
          const sortedTransactions = data.transactions.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
          setLatestTransaction(sortedTransactions[0]);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la recuperation des transactions :",
          error
        );
      }
    };
    if (userInfo !== null) {
      fetchLatestTransaction();
    }
  }, [userInfo]);

  console.log("derniere transaction", lastestTransaction);

  const handleDownloadPDF = () => {
    const input = receiptRef.current;
    setTimeout(() => {
      html2canvas(input, {
        scale: 2,
        useCORS: true,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(
          imgData,
          "PNG",
          10,
          10,
          190,
          (canvas.height * 190) / canvas.width
        );
        pdf.save("Reçu_AigleSend.pdf");
      });
    }, 100); // Ajout d'un délai de 100ms pour donner le temps au DOM de se rendre
  };

  return (
    <div className="bg-white py-8 text-gray-600">
      <div data-overlay-container="true">
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handleDownloadPDF}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Télécharger PDF
          </button>
        </div>

        {/* Div contenant le reçu, qu'on va convertir en PDF */}
        <div
          ref={receiptRef}
          className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-6"
        >
          <div className="w-full flex-1 justify-center flex items-center">
            <img src={aigleLogo} alt="logo" className="w-20 h-20 p-2" />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col items-center mb-4">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Reçu de Paiement
              </h1>
              <p className="text-xs text-purple-500">
                --- Reçu n° généré par AIGLE SEND---
              </p>
              <div className="text-sm text-gray-600">04/02/2025</div>
            </div>

            <span className="text-sm font-semibold text-gray-700">
              Détails de la transaction
            </span>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Référence :</span>
                  <span className="text-sm font-bold">
                    {lastestTransaction?.transaction_id}
                  </span>
                </div>
                <hr
                  className="shrink-0 bg-gray-300 border-none w-full h-px my-1"
                  role="separator"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Date et heure de paiement :
                  </span>
                  <span className="text-sm font-bold">
                    {new Date(lastestTransaction?.created_at).toUTCString()}
                  </span>
                </div>
                <hr
                  className="shrink-0 bg-gray-300 border-none w-full h-px my-1"
                  role="separator"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Status :</span>
                  <span className="text-sm font-bold">
                    {lastestTransaction?.status}
                  </span>
                </div>
                {lastestTransaction?.status === "failed" ? (
                  <>
                    <hr
                      className="shrink-0 bg-gray-300 border-none w-full h-px my-1"
                      role="separator"
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        raison de l'echec :
                      </span>
                      <span className="text-sm font-bold">
                        {lastestTransaction?.failure_reason}
                      </span>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <span className="text-sm font-semibold text-gray-700">
              Informations du paiement
            </span>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Nom du client :</span>
                  <span className="text-sm font-bold">
                    {userInfo?.fullname}
                  </span>
                </div>
                <hr
                  className="shrink-0 bg-gray-300 border-none w-full h-px my-1"
                  role="separator"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Numéro du client :
                  </span>
                  <span className="text-sm font-bold">{userInfo?.phone}</span>
                </div>
                <hr
                  className="shrink-0 bg-gray-300 border-none w-full h-px my-1"
                  role="separator"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Mode de paiement :
                  </span>
                  <span className="text-sm font-bold">
                    {lastestTransaction?.operation_type}
                  </span>
                </div>
                <hr
                  className="shrink-0 bg-gray-300 border-none w-full h-px my-1"
                  role="separator"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Opérateur :</span>
                  <span className="text-sm font-bold">
                    {lastestTransaction?.provider}
                  </span>
                </div>
                <hr
                  className="shrink-0 bg-gray-300 border-none w-full h-px my-1"
                  role="separator"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Montant :</span>
                  <span className="text-sm font-bold">
                    {lastestTransaction?.amount} XOF
                  </span>
                </div>
                <hr
                  className="shrink-0 bg-gray-300 border-none w-full h-px my-1"
                  role="separator"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Nom du Marchand :
                  </span>
                  <span className="text-sm font-bold">Nextdeo</span>
                </div>
                <hr
                  className="shrink-0 bg-gray-300 border-none w-full h-px my-1"
                  role="separator"
                />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Motif de la transaction :
                  </span>
                  <span className="text-sm font-bold">Abonnement Nextdeo</span>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-600 mt-8 pt-4 max-w-xs mx-auto">
              <p className="text-xl font-semibold">
                Merci pour votre confiance
              </p>
              <div className="mt-2 mb-5 text-center text-sm text-gray-500">
                En cas de problème rencontré lors de la transaction, veuillez
                contacter le support technique :
                <br /> Tel : +225 07 00 60 60 79 | +225 27 22 25 62 77
                <br /> Mail : hotline@aiglesend.com
              </div>
              Copyright © FINTECH AIGLE 2025. Tous droits réservés.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
