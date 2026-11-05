import powerSportsImg from "../../assets/power-sports.png";
import weinbrennerImg from "../../assets/weinbrenner-leather.png";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Award, Clock, Package, Wallet as WalletIcon, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.tab || "My Shoes");
  const [credits, setCredits] = useState(0);
  useEffect(() => {
    const status = localStorage.getItem("bata_credits");
    if (status) {
      setCredits(JSON.parse(status));
    }
  }, []);
  const defaultShoes = [
    {
      id: "1",
      model: "Bata Red Label Oxford",
      purchaseDate: "2024-03-15",
      status: "active",
      lastScan: "2 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1773021370310-7fe0b80838ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGxlYXRoZXIlMjBveGZvcmQlMjBkcmVzcyUyMHNob2VzfGVufDF8fHx8MTc3NDg2MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "Brown Leather",
      repairs: 1,
    },
    {
      id: "2",
      model: "Bata Comfit Slip-On",
      purchaseDate: "2025-08-22",
      status: "active",
      lastScan: "1 week ago",
      imageUrl:
        "https://images.unsplash.com/photo-1764155161021-bab07b550c01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzbGlwJTIwb24lMjBzaG9lc3xlbnwxfHx8fDE3NzQ5NjA3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "Navy Blue",
      repairs: 0,
    },
    {
      id: "6",
      model: "Bata 3D Energy Sneakers",
      purchaseDate: "2025-02-10",
      status: "active",
      lastScan: "3 days ago",
      imageUrl:
        "https://images.unsplash.com/photo-1651371409956-20e79c06a8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzJTIwc2hvZXN8ZW58MXx8fHwxNzc0OTE4MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "White",
      repairs: 0,
    },
    {
      id: "7",
      model: "Bata Ambassador Formal",
      purchaseDate: "2023-05-20",
      status: "active",
      lastScan: "1 month ago",
      imageUrl:
        "https://images.unsplash.com/photo-1576133384936-ea17c54e9fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGxlYXRoZXIlMjBmb3JtYWwlMjBzaG9lc3xlbnwxfHx8fDE3NzQ4NzA4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "Black Leather",
      repairs: 1,
    },
    {
      id: "8",
      model: "Bata Power Running",
      purchaseDate: "2024-11-05",
      status: "active",
      lastScan: "2 weeks ago",
      imageUrl:
        "https://images.unsplash.com/photo-1739132268718-53d64165d29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc3BvcnQlMjBzaG9lc3xlbnwxfHx8fDE3NzQ4Njc3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "Grey/Neon",
      repairs: 0,
    },
    {
      id: "9",
      model: "Bata North Star Canvas",
      purchaseDate: "2024-08-15",
      status: "active",
      lastScan: "Just now",
      imageUrl:
        "https://images.unsplash.com/photo-1619344730659-430b7e73722c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW52YXMlMjBzaG9lcyUyMGJsdWV8ZW58MXx8fHwxNzc0OTYyODQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "Blue",
      repairs: 0,
    },
    {
      id: "10",
      model: "Bata Safari Boots",
      purchaseDate: "2023-01-10",
      status: "active",
      lastScan: "5 months ago",
      imageUrl:
        "https://images.unsplash.com/photo-1774112071355-e96575421bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGJvb3RzJTIwY2FzdWFsfGVufDF8fHx8MTc3NDk2MjgzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "Brown",
      repairs: 2,
    },
    {
      id: "3",
      model: "Bata Weinbrenner Leather",
      purchaseDate: "2023-11-10",
      status: "trade-in-pending",
      lastScan: "1 month ago",
      imageUrl: weinbrennerImg,
      color: "Black Patent",
      repairs: 2,
    },
    {
      id: "4",
      model: "Bata Power Sports",
      purchaseDate: "2025-01-05",
      status: "repair-pending",
      lastScan: "Just now",
      imageUrl: powerSportsImg,
      color: "White/Red",
      repairs: 0,
    },
    {
      id: "5",
      model: "Bata North Star Sneakers",
      purchaseDate: "2022-06-12",
      status: "traded-in",
      lastScan: "1 year ago",
      imageUrl:
        "https://images.unsplash.com/photo-1717211192362-a7455a1b9a0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNwb3J0JTIwc2hvZXN8ZW58MXx8fHwxNzc0OTYwNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "White/Grey",
      repairs: 3,
    },
  ];
  const [shoes, setShoes] = useState(() => {
    const status = localStorage.getItem("bata_shoes");
    if (status)
      try {
        const parsed = [...JSON.parse(status)];
        defaultShoes.forEach((defaultShoe) => {
          if (!parsed.find((item) => item.id === defaultShoe.id)) {
            parsed.push(defaultShoe);
          }
        });
        return parsed;
      } catch {
        return defaultShoes;
      }
    return defaultShoes;
  });
  useEffect(() => {
    localStorage.setItem("bata_shoes", JSON.stringify(shoes));
  }, [shoes]);
  const getStatusBadge = (status) => {
    switch (status) {
      case "trade-in-pending":
        return (
          <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide">
            <Package className="w-3 h-3" />
            <span>Trade-in Pending</span>
          </div>
        );
      case "repair-pending":
        return (
          <div className="flex items-center gap-1 bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide">
            <Wrench className="w-3 h-3" />
            <span>Repair Pending</span>
          </div>
        );
      case "traded-in":
      case "repaired":
        return (
          <div className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide">
            <Clock className="w-3 h-3" />
            <span>{status === "traded-in" ? "Traded In" : "Repaired"}</span>
          </div>
        );
      default:
        return null;
    }
  };
  const visibleShoes = shoes.filter((status) =>
    activeTab === "My Shoes"
      ? status.status === "active"
      : activeTab === "In Progress"
        ? status.status === "repair-pending" || status.status === "trade-in-pending"
        : activeTab === "History"
          ? status.status === "traded-in" || status.status === "repaired"
          : true,
  );
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white max-w-[430px] mx-auto pb-8">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-6 py-6 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-red-600 mb-1">BATA-CARE</h1>
            <p className="text-sm text-gray-600">My Digital Shoe Passports</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/wallet")}
              className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center ring-2 ring-amber-300 ring-offset-2">
                <WalletIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700">Credits</span>
            </button>
            <button
              onClick={() => navigate("/membership")}
              className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center ring-2 ring-red-300 ring-offset-2">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-700">Membership</span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1 px-4 pb-4 overflow-x-auto no-scrollbar">
          {["My Shoes", "In Progress", "History"].map((status) => (
            <button
              key={status}
              onClick={() => setActiveTab(status)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${activeTab === status ? "bg-red-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
      <div className="px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-5 text-white mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Package className="w-6 h-6" />
            <h2 className="text-lg font-bold">Your Collection</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-3xl font-bold">{shoes.length}</div>
              <div className="text-xs text-red-100">Total Shoes</div>
            </div>
            <div>
              <div className="text-3xl font-bold">
                {
                  shoes.filter(
                    (status) =>
                      status.status === "repair-pending" || status.status === "trade-in-pending",
                  ).length
                }
              </div>
              <div className="text-xs text-red-100">In Progress</div>
            </div>
            <div>
              <div className="text-3xl font-bold">
                {shoes.reduce((status, shoe) => status + shoe.repairs, 0)}
              </div>
              <div className="text-xs text-red-100">Total Repairs</div>
            </div>
          </div>
        </motion.div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">{activeTab}</h3>
        </div>
        {visibleShoes.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <Package className="w-12 h-12 text-gray-300 mb-3" />
            <h4 className="font-bold text-gray-900 mb-1">No shoes found</h4>
            <p className="text-sm text-gray-500">You don't have any shoes in this category yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {visibleShoes.map((status, index) => (
              <motion.div
                key={status.id}
                onClick={() => {
                  navigate(
                    activeTab === "In Progress" ? `/shoe/${status.id}/qr` : `/shoe/${status.id}`,
                  );
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full bg-white border-2 border-gray-200 rounded-2xl p-4 transition-all text-left group hover:border-red-300 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {status.imageUrl ? (
                      <ImageWithFallback
                        src={status.imageUrl}
                        alt={status.model}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl">👟</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{status.model}</h4>
                        <p className="text-xs text-gray-500">{status.color}</p>
                      </div>
                      {getStatusBadge(status.status)}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3 mt-2">
                      <span>Purchased: {new Date(status.purchaseDate).toLocaleDateString()}</span>
                      <span>
                        {status.repairs} repair{status.repairs !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
