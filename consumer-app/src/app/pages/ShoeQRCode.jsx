import { ImageWithFallback } from "../components/ImageWithFallback";
import { ArrowLeft, CircleCheckBig, QrCode } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function ShoeQRCode() {
  const navigate = useNavigate();
  const { shoeId } = useParams();
  const [shoe, setShoe] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [completedAction, setCompletedAction] = useState("repair");
  useEffect(() => {
    const storedShoes = localStorage.getItem("bata_shoes");
    if (storedShoes) {
      const match = JSON.parse(storedShoes).find((isTradeIn) => isTradeIn.id === shoeId);
      if (match) {
        setShoe(match);
      }
    }
  }, [shoeId]);
  const handleStaffScan = () => {
    const storedShoes = localStorage.getItem("bata_shoes");
    if (storedShoes) {
      const shoes = JSON.parse(storedShoes);
      const shoe2 = shoes.find((item) => item.id === shoeId);
      const isTradeIn = shoe2?.status === "trade-in-pending";
      const updatedShoes = shoes.map((item) =>
        item.id === shoeId
          ? item.status === "trade-in-pending"
            ? { ...item, status: "traded-in" }
            : {
                ...item,
                status: "active",
                repairs: (item.repairs || 0) + 1,
              }
          : item,
      );
      localStorage.setItem("bata_shoes", JSON.stringify(updatedShoes));
      if (isTradeIn && shoe2) {
        const credits = JSON.parse(localStorage.getItem("bata_credits") || "0");
        localStorage.setItem("bata_credits", JSON.stringify(credits + 50));
        const transactions = JSON.parse(localStorage.getItem("bata_transactions") || "[]");
        const transaction = {
          id: `tx-${Date.now()}`,
          type: "earned",
          amount: 50,
          description: "Trade-in completed",
          date: new Date().toISOString(),
          shoeModel: shoe2.model,
        };
        localStorage.setItem("bata_transactions", JSON.stringify([transaction, ...transactions]));
      }
      setCompletedAction(isTradeIn ? "trade-in" : "repair");
      setShowSuccess(true);
    }
  };
  const handleDone = () => {
    setShowSuccess(false);
    if (completedAction === "trade-in") {
      navigate("/home", { state: { tab: "History" } });
    } else {
      navigate("/home", { state: { tab: "My Shoes" } });
    }
  };
  return shoe ? (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white max-w-[430px] mx-auto pb-8 flex flex-col">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">In-Store Staff Scan</h1>
            <p className="text-xs text-gray-500">
              {shoe.status === "trade-in-pending" ? "Trade-in Dropoff" : "Repair Dropoff/Pickup"}
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-8 flex-1 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
            {shoe.imageUrl ? (
              <ImageWithFallback
                src={shoe.imageUrl}
                alt={shoe.model}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-4xl">👟</span>
            )}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{shoe.model}</h2>
          <p className="text-gray-500 mb-8">{shoe.color}</p>
          <div className="bg-white border-4 border-gray-900 p-4 rounded-2xl mb-8 relative">
            <QrCode className="w-48 h-48 text-gray-900" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent flex items-end justify-center pb-4 pointer-events-none">
              <span className="font-mono text-sm font-bold bg-white px-2">BATA-{shoe.id}-09X</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-8">
            Please present this QR code to the Bata staff to proceed with your{" "}
            {shoe.status === "trade-in-pending" ? "trade-in" : "repair"} process.
          </p>
          <button
            onClick={handleStaffScan}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <CircleCheckBig className="w-6 h-6" />
            <span>Simulate Staff Scan (Done)</span>
          </button>
        </motion.div>
      </div>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden"
          >
            <div
              className={`py-8 flex flex-col items-center ${completedAction === "trade-in" ? "bg-gradient-to-b from-amber-50 to-white" : "bg-gradient-to-b from-green-50 to-white"}`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 12 }}
                className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${completedAction === "trade-in" ? "bg-amber-100" : "bg-green-100"}`}
              >
                <CircleCheckBig
                  className={`w-10 h-10 ${completedAction === "trade-in" ? "text-amber-600" : "text-green-600"}`}
                />
              </motion.div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {completedAction === "trade-in" ? "Trade-In Complete!" : "Repair Handed Over!"}
              </h2>
              <p className="text-sm text-gray-500 px-6 text-center">
                {completedAction === "trade-in"
                  ? "Your shoe has been traded in successfully."
                  : `Your ${shoe?.model || "shoe"} has been handed over for repair.`}
              </p>
            </div>
            <div className="px-6 pb-6">
              {completedAction === "trade-in" ? (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-center">
                  <p className="text-sm text-amber-800 mb-1">Credits Earned</p>
                  <p className="text-3xl font-bold text-amber-700">+50</p>
                  <p className="text-xs text-amber-600">Bata Credits added to your wallet</p>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-5">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-800">Status</span>
                      <span className="font-semibold text-green-900">Being Repaired</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-800">Est. Completion</span>
                      <span className="font-semibold text-green-900">3–5 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-800">Notification</span>
                      <span className="font-semibold text-green-900">We'll notify you</span>
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={handleDone}
                className={`w-full py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${completedAction === "trade-in" ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-xl" : "bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-xl"}`}
              >
                {completedAction === "trade-in" ? "View History" : "Back to My Shoes"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  ) : (
    <div className="min-h-screen bg-white max-w-[430px] mx-auto flex items-center justify-center">
      Loading...
    </div>
  );
}

export default ShoeQRCode;
