import { ArrowLeft, Award, Clock, Info, Map as MapIcon, MapPin, Navigation } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function TradeIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id") || "1";
  const condition = parseInt(query.get("condition") || "0");
  const [showStoreLocator, setShowStoreLocator] = useState(false);
  const [selectedStoreId, setSelectedStoreId] = useState(null);
  const [isBookingSlot, setIsBookingSlot] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (showStoreLocator) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showStoreLocator]);
  const stores = [
    {
      id: 1,
      name: "Bata Orchard Road",
      address: "313 Orchard Road, #02-26, Singapore 238895",
      distance: 0.8,
      hours: "10:00 AM - 10:00 PM",
      phone: "+65 6738 1234",
      // Map coordinates (relative positioning on SVG)
      x: 160,
      y: 80,
    },
    {
      id: 2,
      name: "Bata VivoCity",
      address: "1 HarbourFront Walk, #02-123, Singapore 098585",
      distance: 1.2,
      hours: "10:00 AM - 10:00 PM",
      phone: "+65 6377 5678",
      x: 140,
      y: 150,
    },
    {
      id: 3,
      name: "Bata Tampines Mall",
      address: "4 Tampines Central 5, #03-15, Singapore 529510",
      distance: 2.5,
      hours: "10:00 AM - 10:00 PM",
      phone: "+65 6789 9012",
      x: 280,
      y: 90,
    },
    {
      id: 4,
      name: "Bata Jurong Point",
      address: "1 Jurong West Central 2, #03-28, Singapore 648886",
      distance: 3.1,
      hours: "10:00 AM - 10:00 PM",
      phone: "+65 6794 5678",
      x: 60,
      y: 100,
    },
    {
      id: 5,
      name: "Bata Bugis Junction",
      address: "200 Victoria Street, #02-45, Singapore 188021",
      distance: 3.8,
      hours: "10:00 AM - 10:00 PM",
      phone: "+65 6334 2345",
      x: 190,
      y: 60,
    },
  ];
  const sortedStores = [...stores].sort((a, b) => a.distance - b.distance);
  const shoeInfo = {
    model: "Bata Red Label Classic",
    originalRetailValue: 120,
    category: "Dress Shoes",
    categoryMultiplier: 1.2,
    purchaseDate: "2024-03-15",
  };
  const conditionTiers = {
    excellent: { multiplier: 0.5, label: "Excellent", color: "bg-green-600", minScore: 80 },
    good: { multiplier: 0.35, label: "Good", color: "bg-blue-600", minScore: 50 },
    fair: { multiplier: 0.2, label: "Fair", color: "bg-orange-600", minScore: 30 },
    worn: { multiplier: 0.1, label: "Heavily Worn", color: "bg-red-600", minScore: 0 },
  };
  const getConditionTier = (score) =>
    score >= 80
      ? conditionTiers.excellent
      : score >= 50
        ? conditionTiers.good
        : score >= 30
          ? conditionTiers.fair
          : conditionTiers.worn;
  const conditionTier = condition > 0 ? getConditionTier(condition) : conditionTiers.good;
  const tradeInCredits = Math.round(
    shoeInfo.originalRetailValue * conditionTier.multiplier * shoeInfo.categoryMultiplier,
  );
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white max-w-[430px] mx-auto pb-8">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => {
              if (showStoreLocator) {
                setShowStoreLocator(false);
                setSelectedStoreId(null);
              } else {
                navigate(-1);
              }
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {showStoreLocator ? "Find Bata Store" : "Trade-In Credits"}
            </h1>
            <p className="text-xs text-gray-500">
              {showStoreLocator ? "Complete your trade-in" : "Get rewards for your shoes"}
            </p>
          </div>
        </div>
      </div>
      {showStoreLocator ? (
        <div className="px-4 mt-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6"
            style={{ height: "25vh" }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-green-50 to-blue-50">
              <svg
                className="w-full h-full"
                viewBox="0 0 320 180"
                preserveAspectRatio="xMidYMid slice"
              >
                <rect width="320" height="180" fill="#e8f5e9" />
                <path d="M 0 90 Q 160 80, 320 90" stroke="#cbd5e1" strokeWidth="3" fill="none" />
                <path d="M 160 0 L 160 180" stroke="#cbd5e1" strokeWidth="3" fill="none" />
                <circle cx="140" cy="150" r="25" fill="#bbdefb" opacity="0.5" />
                <rect x="240" y="70" width="60" height="40" fill="#c8e6c9" opacity="0.5" rx="5" />
                {stores.map((store) => (
                  <g
                    key={store.id}
                    onClick={() => setSelectedStoreId(store.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <rect
                      x={store.x - 15}
                      y={store.y - 20}
                      width="30"
                      height="40"
                      fill="transparent"
                    />
                    <ellipse
                      cx={store.x}
                      cy={store.y + 18}
                      rx="6"
                      ry="2"
                      fill="#000"
                      opacity="0.2"
                      style={{ pointerEvents: "none" }}
                    />
                    <path
                      d={`M ${store.x} ${store.y - 15} 
                          C ${store.x - 8} ${store.y - 15}, ${store.x - 12} ${store.y - 10}, ${store.x - 12} ${store.y - 5}
                          C ${store.x - 12} ${store.y + 2}, ${store.x} ${store.y + 8}, ${store.x} ${store.y + 15}
                          C ${store.x} ${store.y + 8}, ${store.x + 12} ${store.y + 2}, ${store.x + 12} ${store.y - 5}
                          C ${store.x + 12} ${store.y - 10}, ${store.x + 8} ${store.y - 15}, ${store.x} ${store.y - 15} Z`}
                      fill={selectedStoreId === store.id ? "#dc2626" : "#ef4444"}
                      stroke="#fff"
                      strokeWidth="2"
                      style={{ pointerEvents: "none" }}
                    />
                    <circle
                      cx={store.x}
                      cy={store.y - 6}
                      r="4"
                      fill="#fff"
                      style={{ pointerEvents: "none" }}
                    />
                  </g>
                ))}
                <g>
                  <circle cx="160" cy="90" r="8" fill="#3b82f6" opacity="0.3" />
                  <circle cx="160" cy="90" r="5" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </motion.div>
          {selectedStoreId && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-5 mb-6 text-white shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {stores.find((store) => store.id === selectedStoreId)?.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-red-100 mb-2">
                    <Navigation className="w-4 h-4" />
                    <span>
                      {stores.find((store) => store.id === selectedStoreId)?.distance} km away
                    </span>
                  </div>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                  Selected
                </div>
              </div>
              <div className="space-y-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">
                    {stores.find((store) => store.id === selectedStoreId)?.address}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <p className="text-sm">
                    {stores.find((store) => store.id === selectedStoreId)?.hours}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {isBookingSlot ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <div className="flex items-center justify-between mb-3 text-red-100">
                      <h4 className="font-bold text-white text-sm">Select Drop-off Slot</h4>
                      <button
                        onClick={() => setIsBookingSlot(false)}
                        className="text-xs underline hover:text-white"
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[
                        "Today, 2PM - 4PM",
                        "Today, 4PM - 6PM",
                        "Tomorrow, 10AM - 12PM",
                        "Tomorrow, 2PM - 4PM",
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => setSelectedSlot(item)}
                          className={`py-2 px-1 rounded-lg border-2 text-[11px] font-medium transition-all ${selectedSlot === item ? "border-white bg-white text-red-700" : "border-white/30 text-white hover:border-white/60"}`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    <button
                      disabled={!selectedSlot}
                      onClick={() => {
                        const storedShoes = localStorage.getItem("bata_shoes");
                        if (storedShoes) {
                          const shoes = JSON.parse(storedShoes);
                          const targetShoeId = id;
                          const updatedShoes = shoes.map((shoe) =>
                            shoe.id === targetShoeId
                              ? { ...shoe, status: "trade-in-pending" }
                              : shoe,
                          );
                          localStorage.setItem("bata_shoes", JSON.stringify(updatedShoes));
                        }
                        alert(
                          "Slot booked! Your shoe is now In Progress. Show your code when you arrive to skip the queue.",
                        );
                        navigate("/home", { state: { tab: "In Progress" } });
                      }}
                      className="w-full bg-white text-red-700 py-3 rounded-xl font-bold shadow-sm hover:shadow-md transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      Confirm Booking
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        const storedShoes = localStorage.getItem("bata_shoes");
                        if (storedShoes) {
                          const shoes = JSON.parse(storedShoes);
                          const targetShoeId = id;
                          const updatedShoes = shoes.map((shoe) =>
                            shoe.id === targetShoeId
                              ? { ...shoe, status: "trade-in-pending" }
                              : shoe,
                          );
                          localStorage.setItem("bata_shoes", JSON.stringify(updatedShoes));
                        }
                        alert(
                          "Walk-in confirmed! Your shoe has been moved to In Progress. Show your trade-in QR code at the store.",
                        );
                        navigate("/home", { state: { tab: "In Progress" } });
                      }}
                      className="w-full bg-white text-red-700 py-3 rounded-xl font-bold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      Walk-In Anytime (No booking)
                    </button>
                    <button
                      onClick={() => setIsBookingSlot(true)}
                      className="w-full bg-red-700 border border-white/30 text-white py-3 rounded-xl font-semibold shadow-sm hover:bg-red-800 transition-all flex items-center justify-center gap-2"
                    >
                      Book Drop-off Slot (Skip queue)
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapIcon className="w-5 h-5 text-red-600" />
              All Bata Stores
            </h3>
            <div className="space-y-3">
              {sortedStores.map((sortedStore, index) => (
                <motion.div
                  key={sortedStore.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white border-2 rounded-xl p-4 transition-all ${selectedStoreId === sortedStore.id ? "border-red-600 shadow-lg" : "border-gray-200 hover:border-gray-300"}`}
                  onClick={() => setSelectedStoreId(sortedStore.id)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-gray-900">{sortedStore.name}</h4>
                        {index === 0 && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                            Nearest
                          </span>
                        )}
                      </div>
                      <div className="space-y-1.5 mb-3">
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{sortedStore.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span>{sortedStore.hours}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                          <Navigation className="w-4 h-4 flex-shrink-0" />
                          <span>{sortedStore.distance} km away</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(targetShoeId) => {
                        targetShoeId.stopPropagation();
                        navigate(`/in-store-map?storeId=${sortedStore.id}`);
                      }}
                      className="bg-red-600 text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-red-700 transition-colors whitespace-nowrap flex items-center gap-1"
                    >
                      <MapIcon className="w-3 h-3" />
                      In-store Map
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4 mt-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-5 mb-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center">
                <span className="text-3xl">👟</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{shoeInfo.model}</h3>
                <p className="text-sm text-gray-500">
                  Purchased {new Date(shoeInfo.purchaseDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
              <span className="text-sm text-gray-600">Original Retail Value</span>
              <span className="text-lg font-bold text-gray-900">
                ${shoeInfo.originalRetailValue}
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 mb-6 text-white"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6" />
              <h2 className="text-lg font-bold">Your Trade-In Value</h2>
            </div>
            <div className="text-center mb-6">
              <p className="text-sm text-red-100 mb-2">You will receive</p>
              <div className="text-5xl font-bold mb-1">{tradeInCredits}</div>
              <p className="text-red-100">Bata Credits</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-red-100">Product Value</span>
                <span className="font-semibold">{shoeInfo.originalRetailValue}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-red-100">
                  Condition ({conditionTier.label}
                  {condition > 0 ? ` - ${condition}%` : ""})
                </span>
                <span className="font-semibold">x{conditionTier.multiplier.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-red-100">Category ({shoeInfo.category})</span>
                <span className="font-semibold">x{shoeInfo.categoryMultiplier}</span>
              </div>
              <div className="h-px bg-white/20 my-2" />
              <div className="flex justify-between font-bold">
                <span>Total Credits</span>
                <span>{tradeInCredits} credits</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-5 mb-6"
          >
            <h3 className="font-bold text-gray-900 mb-4">Condition Assessment</h3>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Current Condition</span>
                <span
                  className={`${conditionTier.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {conditionTier.label}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full ${conditionTier.color} transition-all`}
                  style={{
                    width: `${condition > 0 ? condition : conditionTier.multiplier * 100}%`,
                  }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {condition > 0
                  ? `${condition}% condition score from AI scan`
                  : `${conditionTier.multiplier * 100}% of original retail value`}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Sole Condition</span>
                <span className="font-semibold text-green-600">Good</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Stitching Integrity</span>
                <span className="font-semibold text-green-600">Good</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Upper Material</span>
                <span className="font-semibold text-blue-600">Excellent</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Overall Cleanliness</span>
                <span className="font-semibold text-green-600">Good</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-6"
          >
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">How Credits Work</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• 1 Bata Credit = $0.10 value</li>
                  <li>• Valid for 12 months from issue date</li>
                  <li>{"\u2022 Redeemable at all Bata stores & online"}</li>
                  <li>{"\u2022 Can be combined with sales & promotions"}</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-3 mb-8"
          >
            <button
              onClick={() => setShowStoreLocator(true)}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Find Drop-off Store</span>
              <MapPin className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate(-1)}
              className="w-full bg-white border-2 border-gray-300 text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default TradeIn;
