import powerSportsImg from "../../assets/power-sports.png";
import weinbrennerImg from "../../assets/weinbrenner-leather.png";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { ArrowLeft, Calendar, Camera, Package, ShieldCheck, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router";

function ShoeDetail() {
  const navigate = useNavigate();
  const { shoeId } = useParams();
  const shoeCatalog = {
    1: {
      model: "Bata Red Label Oxford",
      color: "Brown Leather",
      size: "UK 9",
      purchaseDate: "2024-03-15",
      retailValue: 120,
      serialNumber: "BT-2024-RLC-8742",
      condition: "repair-recommended",
      conditionScore: 65,
      lifespanRemaining: "12-14 months (extendable with repair)",
      imageUrl:
        "https://images.unsplash.com/photo-1773021370310-7fe0b80838ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGxlYXRoZXIlMjBveGZvcmQlMjBkcmVzcyUyMHNob2VzfGVufDF8fHx8MTc3NDg2MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      timeline: [
        {
          date: "2026-03-20",
          event: "Condition Assessment",
          type: "assessment",
          description: "AI scan detected sole wear and stitching issues",
          status: "warning",
        },
        {
          date: "2025-08-12",
          event: "First Repair Service",
          type: "repair",
          description: "Heel replacement and polish service completed",
          status: "completed",
        },
        {
          date: "2024-12-05",
          event: "6-Month Check-up",
          type: "assessment",
          description: "Condition: Good (85%) - No repairs needed",
          status: "completed",
        },
        {
          date: "2024-03-15",
          event: "Purchase & Registration",
          type: "purchase",
          description: "Bata Store, Mumbai - Digital Passport Created",
          status: "completed",
        },
      ],
      conditionFactors: {
        sole: { score: 55, status: "Poor", needsRepair: true },
        heel: { score: 60, status: "Fair", needsRepair: true },
        upper: { score: 80, status: "Good", needsRepair: false },
        stitching: { score: 65, status: "Fair", needsRepair: true },
        insole: { score: 75, status: "Good", needsRepair: false },
        leather: { score: 70, status: "Good", needsRepair: false },
      },
    },
    2: {
      model: "Bata Comfit Slip-On",
      color: "Navy Blue",
      size: "UK 10",
      purchaseDate: "2025-08-22",
      retailValue: 95,
      serialNumber: "BT-2025-CFR-3921",
      condition: "good",
      conditionScore: 88,
      lifespanRemaining: "24-30 months",
      imageUrl:
        "https://images.unsplash.com/photo-1764155161021-bab07b550c01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzbGlwJTIwb24lMjBzaG9lc3xlbnwxfHx8fDE3NzQ5NjA3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      timeline: [
        {
          date: "2026-03-15",
          event: "Routine Check",
          type: "assessment",
          description: "Condition: Good (88%) - Regular maintenance recommended",
          status: "completed",
        },
        {
          date: "2025-08-22",
          event: "Purchase & Registration",
          type: "purchase",
          description: "Bata Store, Delhi - Digital Passport Created",
          status: "completed",
        },
      ],
      conditionFactors: {
        sole: { score: 85, status: "Good", needsRepair: false },
        heel: { score: 88, status: "Good", needsRepair: false },
        upper: { score: 90, status: "Excellent", needsRepair: false },
        stitching: { score: 92, status: "Excellent", needsRepair: false },
        insole: { score: 85, status: "Good", needsRepair: false },
        fabric: { score: 88, status: "Good", needsRepair: false },
      },
    },
    3: {
      model: "Bata Weinbrenner Leather",
      color: "Black Patent",
      size: "UK 9",
      purchaseDate: "2023-11-10",
      retailValue: 150,
      serialNumber: "BT-2023-FEL-7654",
      condition: "monitor",
      conditionScore: 78,
      lifespanRemaining: "18-20 months",
      imageUrl: weinbrennerImg,
      timeline: [
        {
          date: "2026-03-10",
          event: "Annual Check-up",
          type: "assessment",
          description: "Condition: Monitor (78%) - Monitor heel wear",
          status: "completed",
        },
        {
          date: "2025-06-20",
          event: "Second Repair Service",
          type: "repair",
          description: "Deep cleaning and leather conditioning completed",
          status: "completed",
        },
        {
          date: "2024-09-15",
          event: "First Repair Service",
          type: "repair",
          description: "Sole resurfacing and polish service completed",
          status: "completed",
        },
        {
          date: "2024-05-10",
          event: "6-Month Check-up",
          type: "assessment",
          description: "Condition: Excellent (92%) - No repairs needed",
          status: "completed",
        },
        {
          date: "2023-11-10",
          event: "Purchase & Registration",
          type: "purchase",
          description: "Bata Store, Singapore - Digital Passport Created",
          status: "completed",
        },
      ],
      conditionFactors: {
        sole: { score: 75, status: "Good", needsRepair: false },
        heel: { score: 65, status: "Fair", needsRepair: false },
        upper: { score: 85, status: "Good", needsRepair: false },
        stitching: { score: 88, status: "Good", needsRepair: false },
        insole: { score: 80, status: "Good", needsRepair: false },
        leather: { score: 78, status: "Good", needsRepair: false },
      },
    },
    4: {
      model: "Bata Power Sports",
      color: "Navy Blue",
      size: "UK 10",
      purchaseDate: "2025-01-05",
      retailValue: 85,
      serialNumber: "BT-2025-SPF-4429",
      condition: "trade-in",
      conditionScore: 42,
      lifespanRemaining: "< 3 months (End of life)",
      imageUrl: powerSportsImg,
      timeline: [
        {
          date: "2026-03-25",
          event: "Condition Assessment",
          type: "assessment",
          description: "AI scan detected significant sole wear and mesh damage",
          status: "warning",
        },
        {
          date: "2025-10-18",
          event: "3-Month Check-up",
          type: "assessment",
          description: "Condition: Good (78%) - Regular wear detected",
          status: "completed",
        },
        {
          date: "2025-01-05",
          event: "Purchase & Registration",
          type: "purchase",
          description: "Bata Store, Bangalore - Digital Passport Created",
          status: "completed",
        },
      ],
      conditionFactors: {
        sole: { score: 30, status: "Poor", needsRepair: true },
        heel: { score: 35, status: "Poor", needsRepair: true },
        upper: { score: 45, status: "Poor", needsRepair: true },
        stitching: { score: 50, status: "Fair", needsRepair: true },
        insole: { score: 40, status: "Poor", needsRepair: true },
        fabric: { score: 42, status: "Poor", needsRepair: true },
      },
    },
    5: {
      model: "Bata North Star Sneakers",
      color: "White/Grey",
      size: "UK 9",
      purchaseDate: "2022-06-12",
      retailValue: 65,
      serialNumber: "BT-2022-NSS-1188",
      condition: "retired",
      conditionScore: 0,
      lifespanRemaining: "Retired",
      imageUrl:
        "https://images.unsplash.com/photo-1717211192362-a7455a1b9a0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNwb3J0JTIwc2hvZXN8ZW58MXx8fHwxNzc0OTYwNzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      timeline: [
        {
          date: "2025-01-10",
          event: "Retired / Recycled",
          type: "assessment",
          description: "Shoe deposited for recycling at Bata Store",
          status: "completed",
        },
        {
          date: "2024-05-15",
          event: "Final Assessment",
          type: "assessment",
          description: "Condition: Poor (15%) - Recommended for recycling",
          status: "warning",
        },
        {
          date: "2022-06-12",
          event: "Purchase & Registration",
          type: "purchase",
          description: "Bata Store, Mumbai - Digital Passport Created",
          status: "completed",
        },
      ],
      conditionFactors: {
        sole: { score: 0, status: "Poor", needsRepair: false },
        heel: { score: 0, status: "Poor", needsRepair: false },
        upper: { score: 20, status: "Poor", needsRepair: false },
        stitching: { score: 10, status: "Poor", needsRepair: false },
        insole: { score: 5, status: "Poor", needsRepair: false },
        fabric: { score: 15, status: "Poor", needsRepair: false },
      },
    },
  };
  const shoe = shoeCatalog[shoeId] || shoeCatalog[1];
  const getTimelineIcon = (type) => {
    switch (type) {
      case "purchase":
        return <Package className="w-5 h-5" />;
      case "repair":
        return <Wrench className="w-5 h-5" />;
      case "assessment":
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };
  Object.values(shoe.conditionFactors).some((type) => type.needsRepair);
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
            <h1 className="text-xl font-bold text-gray-900">Digital Passport</h1>
            <p className="text-xs text-gray-500">{shoe.serialNumber}</p>
          </div>
        </div>
      </div>
      <div className="px-4 mt-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-2 border-gray-200 rounded-2xl p-6 mb-6"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center overflow-hidden">
              {shoe.imageUrl ? (
                <ImageWithFallback
                  src={shoe.imageUrl}
                  alt={shoe.model}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-3xl">{shoe.image}</span>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-1">{shoe.model}</h2>
              <p className="text-sm text-gray-600 mb-2">
                {shoe.color} • {shoe.size}
              </p>
              <p className="text-xs text-gray-500">
                Purchased {new Date(shoe.purchaseDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate(`/repair-scanner?id=${shoeId || 1}`)}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 mb-2"
          >
            <Camera className="w-6 h-6" />
            <span>Scan with AI for Care Options</span>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border-2 border-gray-200 rounded-2xl p-5 mb-6"
        >
          <h3 className="font-bold text-gray-900 mb-5">Lifespan Timeline</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-6">
              {shoe.timeline.map((type, index) => (
                <div key={index} className="relative pl-12">
                  <div
                    className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${type.type === "repair" ? "bg-blue-100 text-blue-600" : type.type === "purchase" ? "bg-green-100 text-green-600" : type.status === "warning" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"}`}
                  >
                    {getTimelineIcon(type.type)}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      {new Date(type.date).toLocaleDateString()}
                    </p>
                    <h4 className="font-semibold text-gray-900 mb-1">{type.event}</h4>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 text-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-bold">Passport Details</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Serial Number</span>
              <span className="font-mono">{shoe.serialNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Retail Value</span>
              <span className="font-semibold">${shoe.retailValue}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Purchase Date</span>
              <span>{new Date(shoe.purchaseDate).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Blockchain Verified</span>
              <span className="text-green-400">✓ Authentic</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ShoeDetail;
