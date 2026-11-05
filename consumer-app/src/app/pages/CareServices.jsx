import {
  ArrowLeft,
  ChevronRight,
  CircleCheckBig,
  Clock,
  MapPin,
  Truck,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

function CareServices() {
  const navigate = useNavigate();
  const { shoeId } = useParams();
  const [step, setStep] = useState(1);
  const [selectedStoreId, setSelectedStoreId] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const stores = [
    { id: 1, name: "Bata Care Partner - Downtown", distance: "1.2 miles", address: "123 Main St" },
    { id: 2, name: "Bata VivoCity", distance: "2.5 miles", address: "1 HarbourFront Walk" },
    { id: 3, name: "Bata Tampines Mall", distance: "4.1 miles", address: "4 Tampines Central 5" },
  ];
  return (
    <div className="min-h-screen bg-gray-50 max-w-[430px] mx-auto flex flex-col pb-8">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => {
              if (step === 2) {
                setStep(1);
              } else {
                navigate(-1);
              }
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Book Repair</h1>
            <p className="text-xs text-gray-500">Bata Red Label Classic</p>
          </div>
        </div>
      </div>
      <div className="px-4 mt-6">
        <div className="bg-white border-2 border-red-100 rounded-2xl p-5 mb-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">Full Sole Replacement</h3>
              <p className="text-sm text-gray-600">
                Est. Cost: <span className="font-bold text-gray-900">$45 - $60</span>
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Est. Turnaround Time</p>
                <p className="text-xs text-gray-500">3-5 business days once dropped off</p>
              </div>
            </div>
          </div>
          {step === 1 ? (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h4 className="text-sm font-bold text-gray-900 mb-3">1. Choose Drop-off Store</h4>
              <div className="space-y-3 mb-6">
                {stores.map((targetShoeId) => (
                  <button
                    key={targetShoeId.id}
                    onClick={() => setSelectedStoreId(targetShoeId.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${selectedStoreId === targetShoeId.id ? "border-red-600 bg-red-50" : "border-gray-100 hover:border-gray-200 bg-white"}`}
                  >
                    <div className="text-left flex items-start gap-3">
                      <MapPin
                        className={`w-5 h-5 mt-0.5 ${selectedStoreId === targetShoeId.id ? "text-red-600" : "text-gray-400"}`}
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{targetShoeId.name}</p>
                        <p className="text-xs text-gray-500">
                          {targetShoeId.address} • {targetShoeId.distance}
                        </p>
                      </div>
                    </div>
                    {selectedStoreId === targetShoeId.id && (
                      <div className="w-4 h-4 rounded-full bg-red-600 border-4 border-red-200" />
                    )}
                  </button>
                ))}
              </div>
              <button
                disabled={!selectedStoreId}
                onClick={() => setStep(2)}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                <span>Continue</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-2 mb-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-700">
                  {stores.find((targetShoeId) => targetShoeId.id === selectedStoreId)?.name}
                </span>
                <button
                  onClick={() => setStep(1)}
                  className="ml-auto text-xs text-red-600 font-semibold"
                >
                  Change
                </button>
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-3">2. Select Drop-off Slot</h4>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  "Today, 2PM - 4PM",
                  "Today, 4PM - 6PM",
                  "Tomorrow, 10AM - 12PM",
                  "Tomorrow, 2PM - 4PM",
                ].map((targetShoeId) => (
                  <button
                    key={targetShoeId}
                    onClick={() => setSelectedSlot(targetShoeId)}
                    className={`py-3 px-2 rounded-lg border-2 text-sm font-medium transition-all ${selectedSlot === targetShoeId ? "border-red-600 text-red-700 bg-red-50" : "border-gray-200 text-gray-700 hover:border-red-300"}`}
                  >
                    {targetShoeId}
                  </button>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-6 flex items-start gap-2">
                <Truck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <p className="text-xs text-blue-900">
                  Drop off your shoes at the selected time. A staff member will receive your item
                  and begin the repair process.
                </p>
              </div>
              <button
                disabled={!selectedSlot}
                onClick={() => {
                  const targetShoeId = shoeId || "1";
                  const storedShoes = localStorage.getItem("bata_shoes");
                  if (storedShoes) {
                    const updatedShoes = JSON.parse(storedShoes).map((item) =>
                      item.id === targetShoeId ? { ...item, status: "repair-pending" } : item,
                    );
                    localStorage.setItem("bata_shoes", JSON.stringify(updatedShoes));
                  }
                  setIsBooked(true);
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Drop-off Booking
              </button>
            </motion.div>
          )}
        </div>
      </div>
      {isBooked && (
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
            <div className="py-8 flex flex-col items-center bg-gradient-to-b from-red-50 to-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", damping: 12 }}
                className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-4"
              >
                <CircleCheckBig className="w-10 h-10 text-red-600" />
              </motion.div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Repair Booked!</h2>
              <p className="text-sm text-gray-500 px-6 text-center">
                Your shoe has been scheduled for repair.
              </p>
            </div>
            <div className="px-6 pb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-red-800">Store</span>
                    <span className="font-semibold text-red-900">
                      {stores
                        .find((targetShoeId) => targetShoeId.id === selectedStoreId)
                        ?.name?.split(" - ")[1] || "Selected Store"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-800">Time Slot</span>
                    <span className="font-semibold text-red-900">{selectedSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-800">Next Step</span>
                    <span className="font-semibold text-red-900">Drop off at store</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsBooked(false);
                  navigate("/home", { state: { tab: "In Progress" } });
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                View In Progress
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default CareServices;
