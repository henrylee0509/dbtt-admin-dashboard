import { ArrowLeft, DoorOpen, MapPin, Navigation, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

function InStoreMap() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const storeId = searchParams.get("storeId");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const stores = [
    {
      id: 1,
      name: "Bata Orchard Road",
      address: "313 Orchard Road, #02-26, Singapore 238895",
      floor: "Level 2",
    },
    {
      id: 2,
      name: "Bata VivoCity",
      address: "1 HarbourFront Walk, #02-123, Singapore 098585",
      floor: "Level 2",
    },
    {
      id: 3,
      name: "Bata Tampines Mall",
      address: "4 Tampines Central 5, #03-15, Singapore 529510",
      floor: "Level 3",
    },
    {
      id: 4,
      name: "Bata Jurong Point",
      address: "1 Jurong West Central 2, #03-28, Singapore 648886",
      floor: "Level 3",
    },
    {
      id: 5,
      name: "Bata Bugis Junction",
      address: "200 Victoria Street, #02-45, Singapore 188021",
      floor: "Level 2",
    },
  ];
  const store = stores.find((item) => item.id === Number(storeId)) || stores[0];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white max-w-[430px] mx-auto pb-8">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">In-Store Map</h1>
            <p className="text-xs text-gray-500">Find the Smart Bin</p>
          </div>
        </div>
      </div>
      <div className="px-4 mt-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-2 border-gray-200 rounded-2xl p-5 mb-6"
        >
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-1">{store.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{store.address}</p>
              <div className="flex items-center gap-2">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {store.floor}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white border-2 border-gray-200 rounded-2xl p-6 mb-6 overflow-hidden shadow-lg"
        >
          <h3 className="text-gray-900 font-bold mb-4 flex items-center gap-2">
            <Navigation className="w-5 h-5 text-red-600" />
            Store Blueprint
          </h3>
          <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
            <svg viewBox="0 0 360 500" className="w-full" style={{ maxHeight: "450px" }}>
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#bfdbfe" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="360" height="500" fill="url(#grid)" />
              <rect
                x="30"
                y="80"
                width="300"
                height="380"
                fill="none"
                stroke="#1e40af"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              <rect x="30" y="80" width="300" height="8" fill="#ef4444" />
              <text x="180" y="75" textAnchor="middle" className="text-xs font-bold" fill="#dc2626">
                BATA Store
              </text>
              <rect x="30" y="80" width="8" height="380" fill="#94a3b8" />
              <rect x="322" y="80" width="8" height="380" fill="#94a3b8" />
              <g>
                <rect
                  x="60"
                  y="120"
                  width="80"
                  height="60"
                  fill="#b45309"
                  stroke="#92400e"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="100"
                  y="155"
                  textAnchor="middle"
                  className="text-xs font-semibold"
                  fill="#ffffff"
                >
                  Shoes
                </text>
                <text x="100" y="170" textAnchor="middle" className="text-xs" fill="#fef3c7">
                  Display
                </text>
              </g>
              <g>
                <rect
                  x="220"
                  y="120"
                  width="80"
                  height="60"
                  fill="#b45309"
                  stroke="#92400e"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="260"
                  y="155"
                  textAnchor="middle"
                  className="text-xs font-semibold"
                  fill="#ffffff"
                >
                  Shoes
                </text>
                <text x="260" y="170" textAnchor="middle" className="text-xs" fill="#fef3c7">
                  Display
                </text>
              </g>
              <g>
                <rect
                  x="140"
                  y="220"
                  width="80"
                  height="80"
                  fill="#b45309"
                  stroke="#92400e"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="180"
                  y="255"
                  textAnchor="middle"
                  className="text-xs font-semibold"
                  fill="#ffffff"
                >
                  Featured
                </text>
                <text x="180" y="270" textAnchor="middle" className="text-xs" fill="#fef3c7">
                  Collection
                </text>
              </g>
              <g>
                <rect
                  x="60"
                  y="340"
                  width="60"
                  height="80"
                  fill="#e0e7ff"
                  stroke="#6366f1"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="90"
                  y="375"
                  textAnchor="middle"
                  className="text-xs font-semibold"
                  fill="#4338ca"
                >
                  Fitting
                </text>
                <text x="90" y="390" textAnchor="middle" className="text-xs" fill="#6366f1">
                  Area
                </text>
              </g>
              <g>
                <rect
                  x="200"
                  y="350"
                  width="100"
                  height="50"
                  fill="#475569"
                  stroke="#1e293b"
                  strokeWidth="2"
                  rx="4"
                />
                <text
                  x="250"
                  y="372"
                  textAnchor="middle"
                  className="text-xs font-semibold"
                  fill="#ffffff"
                >
                  Checkout
                </text>
                <text x="250" y="387" textAnchor="middle" className="text-xs" fill="#cbd5e1">
                  Counter
                </text>
              </g>
              <g>
                <circle cx="315" cy="375" r="20" fill="#fecaca" opacity="0.4">
                  <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite" />
                  <animate
                    attributeName="opacity"
                    values="0.4;0.2;0.4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="315" cy="375" r="15" fill="#fca5a5" opacity="0.6">
                  <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
                  <animate
                    attributeName="opacity"
                    values="0.6;0.3;0.6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <rect
                  x="295"
                  y="355"
                  width="40"
                  height="40"
                  fill="#dc2626"
                  stroke="#991b1b"
                  strokeWidth="3"
                  rx="6"
                />
                <g transform="translate(315, 375)">
                  <Trash2
                    className="w-5 h-5 text-white"
                    style={{ transform: "translate(-10px, -10px)" }}
                  />
                </g>
                <line
                  x1="315"
                  y1="340"
                  x2="315"
                  y2="320"
                  stroke="#dc2626"
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                />
                <text
                  x="315"
                  y="310"
                  textAnchor="middle"
                  className="text-sm font-bold"
                  fill="#dc2626"
                >
                  Smart Bin
                </text>
              </g>
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 5, 0 10" fill="#dc2626" />
                </marker>
              </defs>
              <g>
                <rect
                  x="150"
                  y="460"
                  width="60"
                  height="8"
                  fill="#22c55e"
                  stroke="#16a34a"
                  strokeWidth="2"
                  rx="2"
                />
                <text
                  x="180"
                  y="490"
                  textAnchor="middle"
                  className="text-sm font-bold"
                  fill="#16a34a"
                >
                  Entrance
                </text>
                <path
                  d="M 180 475 L 180 465 M 175 470 L 180 465 L 185 470"
                  stroke="#16a34a"
                  strokeWidth="2"
                  fill="none"
                />
              </g>
              <g opacity="0.5">
                <line
                  x1="180"
                  y1="450"
                  x2="250"
                  y2="400"
                  stroke="#94a3b8"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                />
                <text x="215" y="430" className="text-xs" fill="#64748b">
                  ~8m
                </text>
              </g>
              <g transform="translate(320, 110)">
                <circle cx="0" cy="0" r="15" fill="white" stroke="#64748b" strokeWidth="2" />
                <text x="0" y="-8" textAnchor="middle" className="text-xs font-bold" fill="#dc2626">
                  N
                </text>
                <text x="0" y="12" textAnchor="middle" className="text-xs" fill="#64748b">
                  S
                </text>
                <polygon points="0,-10 -2,0 0,10 2,0" fill="#dc2626" />
              </g>
              <g>
                <circle cx="180" cy="475" r="8" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
                <text
                  x="180"
                  y="505"
                  textAnchor="middle"
                  className="text-xs font-bold"
                  fill="#3b82f6"
                >
                  You Are Here
                </text>
              </g>
            </svg>
          </div>
          <div className="mt-4 bg-red-50 border-2 border-red-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <DoorOpen className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900 text-sm mb-1">Quick Directions:</p>
                <p className="text-sm text-red-800">
                  Walk straight from the entrance (8m) to the checkout counter at the back. The
                  Smart Bin is on the right side of the counter.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white border-2 border-gray-200 rounded-2xl p-5 mb-6"
        >
          <h3 className="font-bold text-gray-900 mb-4">Map Legend</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <Trash2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Smart Bin</p>
                <p className="text-xs text-gray-600">Drop off your shoes here</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-700 rounded-lg" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Checkout Counter</p>
                <p className="text-xs text-gray-600">Staff will assist you</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-700 rounded-lg" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Display Shelves</p>
                <p className="text-xs text-gray-600">Browse new shoes</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-5 text-white mb-6"
        >
          <h3 className="font-bold text-lg mb-3">Trade-In Instructions</h3>
          <ol className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </span>
              <span>Enter the store through the main entrance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </span>
              <span>Head to the checkout counter at the back</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </span>
              <span>Look for the red Smart Bin next to the counter</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </span>
              <span>Show this app to our staff to process your trade-in</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                5
              </span>
              <span>Receive your Bata Credits instantly!</span>
            </li>
          </ol>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigate(-1)}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Back to Store Locator
        </motion.button>
      </div>
    </div>
  );
}

export default InStoreMap;
