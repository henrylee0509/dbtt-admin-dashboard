import {
  ArrowLeft,
  Award,
  ChevronLeft,
  ChevronRight,
  Gift,
  Leaf,
  Lock,
  LockOpen,
  QrCode,
  Recycle,
  Star,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Membership() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("tiers");
  const [showQRCode, setShowQRCode] = useState(false);
  const [selectedTier, setSelectedTier] = useState(1);
  const [showTierPicker, setShowTierPicker] = useState(false);
  const currentTierIndex = 1;
  const currentSpending = 450;
  const platinumThreshold = 750;
  const progressPercent = (currentSpending / platinumThreshold) * 100;
  const impactStats = {
    shoesTraded: 3,
    wasteReduced: 3.2,
    // kg
    carbonSaved: 8.5,
    // kg CO2
    treesEquivalent: 0.3,
    rank: "Top 15%",
  };
  const tiers = [
    {
      name: "Silver",
      icon: "🥈",
      color: "from-gray-300 to-gray-400",
      textColor: "text-gray-600",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-300",
      spending: "$0 - $249",
      benefits: [
        { text: "5% Trade-in Bonus", multiplier: "1.05x", unlocked: true },
        { text: "Birthday Discount", unlocked: true },
        { text: "Early Sale Access", unlocked: true },
      ],
    },
    {
      name: "Gold",
      icon: "🥇",
      color: "from-amber-400 to-amber-600",
      textColor: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-300",
      spending: "$250 - $749",
      current: true,
      benefits: [
        { text: "15% Trade-in Bonus", multiplier: "1.15x", unlocked: true },
        { text: "Free Standard Repairs", unlocked: true },
        { text: "Priority Support", unlocked: true },
        { text: "Seasonal Gift Box", unlocked: true },
      ],
    },
    {
      name: "Platinum",
      icon: "💎",
      color: "from-slate-300 via-slate-400 to-slate-500",
      textColor: "text-slate-700",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-400",
      spending: "$750+",
      benefits: [
        { text: "25% Trade-in Bonus", multiplier: "1.25x", unlocked: false },
        { text: "1 Free Annual Deep Clean", unlocked: false },
        { text: "Exclusive Products Access", unlocked: false },
        { text: "Concierge Service", unlocked: false },
        { text: "VIP Events Invites", unlocked: false },
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white max-w-[430px] mx-auto pb-8">
      <div className="bg-white shadow-sm sticky top-0 z-20">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Membership Hub</h1>
            <p className="text-xs text-gray-500">{"Rewards & Impact"}</p>
          </div>
        </div>
        <div className="flex border-t border-gray-200">
          <button
            onClick={() => setActiveTab("tiers")}
            className={`flex-1 py-3 text-sm font-semibold transition-colors relative ${activeTab === "tiers" ? "text-red-600" : "text-gray-500"}`}
          >
            <Award className="w-4 h-4 inline mr-1" />
            Tier Benefits
            {activeTab === "tiers" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("impact")}
            className={`flex-1 py-3 text-sm font-semibold transition-colors relative ${activeTab === "impact" ? "text-green-600" : "text-gray-500"}`}
          >
            <Leaf className="w-4 h-4 inline mr-1" />
            My Impact
            {activeTab === "impact" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
              />
            )}
          </button>
        </div>
      </div>
      {activeTab === "tiers" ? (
        <div className="px-4 mt-6">
          {showTierPicker ? (
            <motion.div
              key={selectedTier}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-gradient-to-br ${tiers[selectedTier].color} rounded-2xl p-6 text-white relative overflow-hidden shadow-lg`}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
              <div className="relative z-10">
                <button
                  onClick={() => {
                    setShowTierPicker(false);
                    setSelectedTier(currentTierIndex);
                  }}
                  className="absolute -top-2 -right-2 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-between mb-4 pr-8">
                  <div>
                    <p className="text-sm opacity-90 mb-1">
                      {selectedTier === currentTierIndex
                        ? "Current Tier"
                        : selectedTier < currentTierIndex
                          ? "Previous Tier"
                          : "Future Tier"}
                    </p>
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      {tiers[selectedTier].icon} {tiers[selectedTier].name} Member
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-90">Spending Range</p>
                    <p className="text-lg font-bold">{tiers[selectedTier].spending}</p>
                  </div>
                </div>
                {selectedTier === currentTierIndex && (
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold">Progress to Platinum</span>
                      <span className="text-sm">${platinumThreshold - currentSpending} to go</span>
                    </div>
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="rgba(255,255,255,0.2)"
                          strokeWidth="12"
                          fill="none"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="url(#metallicGradient)"
                          strokeWidth="12"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${2 * Math.PI * 56 * (1 - progressPercent / 100)}`}
                          strokeLinecap="round"
                          className="transition-all duration-1000"
                        />
                        <defs>
                          <linearGradient id="metallicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e2e8f0" />
                            <stop offset="50%" stopColor="#94a3b8" />
                            <stop offset="100%" stopColor="#64748b" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold">{Math.round(progressPercent)}%</div>
                          <div className="text-xs opacity-80">Complete</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={() => setShowQRCode(true)}
                        className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
                      >
                        <div className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center">
                          <QrCode className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-semibold">Show QR Code</span>
                      </button>
                    </div>
                  </div>
                )}
                {selectedTier < currentTierIndex && (
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm mb-4 text-center">
                    <div className="text-4xl mb-3">🎉</div>
                    <h3 className="font-bold text-lg mb-2">Congratulations!</h3>
                    <p className="text-sm opacity-90">You've passed this level</p>
                  </div>
                )}
                {selectedTier > currentTierIndex && (
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm mb-4 text-center">
                    <div className="text-4xl mb-3">
                      <Lock className="w-12 h-12 mx-auto" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">You have not unlocked this tier</h3>
                    <p className="text-sm opacity-90">
                      Spend ${(selectedTier === 2 ? platinumThreshold : 250) - currentSpending} more
                      to unlock
                    </p>
                  </div>
                )}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold">Tier Benefits</h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedTier(Math.max(0, selectedTier - 1))}
                        disabled={selectedTier === 0}
                        className={`p-1 rounded-full transition-all ${selectedTier === 0 ? "opacity-30 cursor-not-allowed" : "bg-white/20 hover:bg-white/30"}`}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() =>
                          setSelectedTier(Math.min(tiers.length - 1, selectedTier + 1))
                        }
                        disabled={selectedTier === tiers.length - 1}
                        className={`p-1 rounded-full transition-all ${selectedTier === tiers.length - 1 ? "opacity-30 cursor-not-allowed" : "bg-white/20 hover:bg-white/30"}`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedTier}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className={`${selectedTier > currentTierIndex ? "opacity-60 pointer-events-none" : ""}`}
                      >
                        <div className="space-y-2">
                          {tiers[selectedTier].benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-2 rounded-lg bg-white/10"
                            >
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${selectedTier <= currentTierIndex ? "bg-white/20 text-white" : "bg-gray-400/30 text-white/50"}`}
                              >
                                {selectedTier <= currentTierIndex ? (
                                  <LockOpen className="w-4 h-4" />
                                ) : (
                                  <Lock className="w-4 h-4" />
                                )}
                              </div>
                              <div className="flex-1">
                                <span
                                  className={`text-sm font-semibold ${selectedTier <= currentTierIndex ? "text-white" : "text-white/50"}`}
                                >
                                  {benefit.text}
                                </span>
                                {benefit.multiplier && (
                                  <span
                                    className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${selectedTier <= currentTierIndex ? "bg-white/20 text-white" : "bg-gray-400/20 text-white/50"}`}
                                  >
                                    {benefit.multiplier}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="flex justify-center gap-2 mt-4">
                    {tiers.map((tier, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTier(index)}
                        className={`h-1.5 rounded-full transition-all ${index === selectedTier ? "w-6 bg-white" : "w-1.5 bg-white/30"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-5 text-white relative overflow-hidden shadow-lg"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm text-amber-100 mb-1">Current Tier</p>
                    <h2 className="text-2xl font-bold flex items-center gap-2">🥇 Gold Member</h2>
                    <p className="text-sm text-amber-100 mt-1">
                      Annual Spending: ${currentSpending}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        setShowQRCode(true);
                      }}
                      className="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center hover:bg-white/40 transition-colors"
                    >
                      <QrCode className="w-6 h-6 text-white" />
                    </button>
                    <span className="text-xs font-semibold">QR Code</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowTierPicker(true)}
                  className="mt-4 w-full text-center text-sm bg-white/20 rounded-lg py-2 backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                  Tap to view all tier benefits
                </button>
              </div>
            </motion.div>
          )}
          {showQRCode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
              onClick={() => setShowQRCode(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-3xl p-6 max-w-sm w-full relative"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  onClick={() => setShowQRCode(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">Gold Member</h3>
                  <p className="text-sm text-gray-600">Show this to store associates</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 mb-4">
                  <div className="bg-white p-4 rounded-xl">
                    <svg width="100%" height="100%" viewBox="0 0 200 200" className="w-full h-auto">
                      <rect width="200" height="200" fill="white" />
                      <rect x="10" y="10" width="60" height="60" fill="black" />
                      <rect x="20" y="20" width="40" height="40" fill="white" />
                      <rect x="30" y="30" width="20" height="20" fill="black" />
                      <rect x="130" y="10" width="60" height="60" fill="black" />
                      <rect x="140" y="20" width="40" height="40" fill="white" />
                      <rect x="150" y="30" width="20" height="20" fill="black" />
                      <rect x="10" y="130" width="60" height="60" fill="black" />
                      <rect x="20" y="140" width="40" height="40" fill="white" />
                      <rect x="30" y="150" width="20" height="20" fill="black" />
                      <rect x="80" y="10" width="10" height="10" fill="black" />
                      <rect x="100" y="10" width="10" height="10" fill="black" />
                      <rect x="80" y="30" width="10" height="10" fill="black" />
                      <rect x="110" y="30" width="10" height="10" fill="black" />
                      <rect x="10" y="80" width="10" height="10" fill="black" />
                      <rect x="30" y="80" width="10" height="10" fill="black" />
                      <rect x="50" y="80" width="10" height="10" fill="black" />
                      <rect x="10" y="100" width="10" height="10" fill="black" />
                      <rect x="40" y="100" width="10" height="10" fill="black" />
                      <rect x="60" y="100" width="10" height="10" fill="black" />
                      <rect x="80" y="80" width="10" height="10" fill="black" />
                      <rect x="100" y="80" width="10" height="10" fill="black" />
                      <rect x="120" y="80" width="10" height="10" fill="black" />
                      <rect x="140" y="80" width="10" height="10" fill="black" />
                      <rect x="160" y="80" width="10" height="10" fill="black" />
                      <rect x="180" y="80" width="10" height="10" fill="black" />
                      <rect x="90" y="100" width="10" height="10" fill="black" />
                      <rect x="110" y="100" width="10" height="10" fill="black" />
                      <rect x="130" y="100" width="10" height="10" fill="black" />
                      <rect x="170" y="100" width="10" height="10" fill="black" />
                      <rect x="80" y="130" width="10" height="10" fill="black" />
                      <rect x="100" y="130" width="10" height="10" fill="black" />
                      <rect x="120" y="130" width="10" height="10" fill="black" />
                      <rect x="160" y="130" width="10" height="10" fill="black" />
                      <rect x="180" y="130" width="10" height="10" fill="black" />
                      <rect x="80" y="150" width="10" height="10" fill="black" />
                      <rect x="110" y="150" width="10" height="10" fill="black" />
                      <rect x="140" y="150" width="10" height="10" fill="black" />
                      <rect x="170" y="150" width="10" height="10" fill="black" />
                      <rect x="90" y="170" width="10" height="10" fill="black" />
                      <rect x="110" y="170" width="10" height="10" fill="black" />
                      <rect x="130" y="170" width="10" height="10" fill="black" />
                      <rect x="150" y="170" width="10" height="10" fill="black" />
                      <rect x="180" y="170" width="10" height="10" fill="black" />
                    </svg>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <p className="text-xs text-amber-800 text-center">
                    <strong>Member ID:</strong> BATA-GOLD-450982
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-5 mt-6"
          >
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-red-600" />
              Trade-in Multiplier Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 text-sm font-semibold text-gray-600">Tier</th>
                    <th className="text-center py-3 text-sm font-semibold text-gray-600">
                      Multiplier
                    </th>
                    <th className="text-right py-3 text-sm font-semibold text-gray-600">
                      Example*
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-sm">🥈 Silver</td>
                    <td className="text-center py-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-bold">
                        1.05x
                      </span>
                    </td>
                    <td className="text-right py-3 text-sm font-semibold">$52.50</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-amber-50">
                    <td className="py-3 text-sm font-bold">🥇 Gold</td>
                    <td className="text-center py-3">
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        1.15x
                      </span>
                    </td>
                    <td className="text-right py-3 text-sm font-bold">$57.50</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm">💎 Platinum</td>
                    <td className="text-center py-3">
                      <span className="bg-gradient-to-r from-slate-400 to-slate-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        1.25x
                      </span>
                    </td>
                    <td className="text-right py-3 text-sm font-semibold">$62.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">*Based on 50 base credits from trade-in</p>
          </motion.div>
        </div>
      ) : (
        <div className="px-4 mt-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 mb-6 text-white relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Your Impact</h2>
                  <p className="text-sm text-green-100">Making a difference together</p>
                </div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{impactStats.shoesTraded}</div>
                    <div className="text-xs text-green-100">Shoes Traded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{impactStats.wasteReduced}kg</div>
                    <div className="text-xs text-green-100">Waste Reduced</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-blue-200 rounded-xl p-4"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Recycle className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {impactStats.carbonSaved}kg
              </div>
              <div className="text-xs text-gray-600">CO₂ Saved</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-green-200 rounded-xl p-4"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Leaf className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {impactStats.treesEquivalent}
              </div>
              <div className="text-xs text-gray-600">Trees Equivalent</div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 mb-6 text-white"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-100 mb-1">Community Ranking</p>
                <h3 className="text-3xl font-bold">{impactStats.rank}</h3>
                <p className="text-sm text-purple-100 mt-1">of all Bata members</p>
              </div>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Star className="w-10 h-10" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white border-2 border-gray-200 rounded-2xl p-5"
          >
            <h3 className="font-bold text-gray-900 mb-4">Impact Breakdown</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Recycle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Landfill Waste Diverted</h4>
                  <p className="text-sm text-gray-600">
                    By trading in {impactStats.shoesTraded} pairs of shoes, you've prevented{" "}
                    <span className="font-bold text-green-600">{impactStats.wasteReduced}kg</span>{" "}
                    of materials from ending up in landfills.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Carbon Footprint Reduced</h4>
                  <p className="text-sm text-gray-600">
                    Your trade-ins helped reduce carbon emissions by{" "}
                    <span className="font-bold text-blue-600">{impactStats.carbonSaved}kg CO₂</span>
                    , equivalent to driving 35km less.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">Circular Economy</h4>
                  <p className="text-sm text-gray-600">
                    Your shoes are being repurposed, refurbished, or recycled responsibly, giving
                    them a second life and promoting sustainability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 mt-6 text-white"
          >
            <h3 className="font-bold mb-2">Keep Making an Impact!</h3>
            <p className="text-sm text-gray-300 mb-4">
              Trade in more shoes to increase your environmental contribution and earn more credits.
            </p>
            <button
              onClick={() => navigate("/trade-in")}
              className="w-full bg-white text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Start a Trade-In
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Membership;
