import { Activity, ArrowLeft, CircleAlert, Clock, Compass, DollarSign, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useLocation, useNavigate } from "react-router";

function RepairResults() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id") || "1";
  const issues = [
    {
      area: "Sole",
      severity: "high",
      issue: "Excessive Wear",
      description: "The sole shows 65% wear with visible cracks in the heel area",
      repairTime: "3-5 days",
      cost: "$45",
      icon: "🦶",
    },
    {
      area: "Stitching",
      severity: "medium",
      issue: "Thread Loosening",
      description: "Multiple stitching points showing signs of wear, particularly near toe box",
      repairTime: "1-2 days",
      cost: "$25",
      icon: "🧵",
    },
    {
      area: "Upper Leather",
      severity: "low",
      issue: "Minor Scuffing",
      description: "Surface scuffs detected, can be buffed and polished",
      repairTime: "Same day",
      cost: "$15",
      icon: "👞",
    },
  ];
  const totalCost = issues.reduce(
    (severity, issue) => severity + parseInt(issue.cost.replace("$", "")),
    0,
  );
  const getSeverityStyle = (severity) => {
    switch (severity) {
      case "high":
        return "border-red-200 bg-red-50";
      case "medium":
        return "border-orange-200 bg-orange-50";
      case "low":
        return "border-green-200 bg-green-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };
  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "high":
        return (
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            High Priority
          </span>
        );
      case "medium":
        return (
          <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Medium
          </span>
        );
      case "low":
        return (
          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Low
          </span>
        );
      default:
        return null;
    }
  };
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
            <h1 className="text-xl font-bold text-gray-900">Diagnostic Results</h1>
            <p className="text-xs text-gray-500">AI Analysis Complete</p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-4 mt-4 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-4 text-white shadow-lg"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold mb-1">AI Diagnosis Complete</h3>
            <p className="text-sm text-red-100">
              Overall Condition: <span className="font-bold text-white">65%</span> (Repair
              Recommended)
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-red-500/50 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-red-200" />
            <span className="text-xs text-red-100">Estimated Lifespan:</span>
          </div>
          <span className="text-sm font-bold">12-14 months</span>
        </div>
      </motion.div>
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Compass className="w-5 h-5 text-red-600" />
          {"Condition & Repairability"}
        </h2>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="text-center opacity-40">
            <div className="h-1.5 w-full bg-green-500 rounded-full mb-1" />
            <span className="text-[10px] font-bold text-gray-600">Still Good</span>
          </div>
          <div className="text-center opacity-40">
            <div className="h-1.5 w-full bg-blue-500 rounded-full mb-1" />
            <span className="text-[10px] font-bold text-gray-600">Needs Care</span>
          </div>
          <div className="text-center">
            <div className="h-1.5 w-full bg-orange-500 rounded-full mb-1" />
            <span className="text-[10px] font-bold text-orange-600">Repairable</span>
          </div>
          <div className="text-center opacity-40">
            <div className="h-1.5 w-full bg-gray-500 rounded-full mb-1" />
            <span className="text-[10px] font-bold text-gray-600">End of Life</span>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 className="font-bold text-orange-900 mb-1">Repairability: High</h3>
          <p className="text-sm text-orange-800">
            Your shoes have significant wear but are completely repairable. A standard sole and
            stitch repair can extend their life by an estimated 12-18 months.
          </p>
        </div>
      </div>
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-900 mb-4">Detected Issues</h2>
        <div className="space-y-4">
          {issues.map((severity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`border-2 rounded-2xl p-4 ${getSeverityStyle(severity.severity)}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{severity.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{severity.area}</h3>
                    <p className="text-sm text-gray-600">{severity.issue}</p>
                  </div>
                </div>
                {getSeverityBadge(severity.severity)}
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{severity.description}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-3">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-semibold">Repair Time</span>
                  </div>
                  <p className="text-sm font-bold text-gray-900">{severity.repairTime}</p>
                </div>
                <div className="bg-white rounded-xl p-3">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-xs font-semibold">Est. Cost</span>
                  </div>
                  <p className="text-sm font-bold text-gray-900">{severity.cost}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-4 mt-6 bg-white border-2 border-gray-200 rounded-2xl p-5"
      >
        <h3 className="font-bold text-gray-900 mb-4">Repair Summary</h3>
        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Issues</span>
            <span className="font-semibold text-gray-900">3 areas</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Estimated Time</span>
            <span className="font-semibold text-gray-900">3-5 days</span>
          </div>
          <div className="h-px bg-gray-200" />
          <div className="flex justify-between">
            <span className="font-semibold text-gray-900">Est. Repair Cost</span>
            <span className="text-2xl font-bold text-red-600">${totalCost}</span>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4">
          <div className="flex items-start gap-2">
            <CircleAlert className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-900">
              <span className="font-semibold">Recommendation:</span> Repair is possible, but given
              the cost vs current value, trade-in might be more economical.
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate(`/shoe/${id}/care-services`)}
          className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all mb-3"
        >
          Book Repair Services
        </button>
        <button
          onClick={() => navigate(`/trade-in?id=${id}&condition=65`)}
          className="w-full bg-white border-2 border-gray-300 text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <span className="text-purple-600">★</span>
          <span>
            Trade-in for <strong>50 Credits</strong>
          </span>
        </button>
      </motion.div>
    </div>
  );
}

export default RepairResults;
