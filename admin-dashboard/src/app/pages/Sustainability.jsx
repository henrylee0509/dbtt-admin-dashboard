import { StatCard } from "../components/StatCard";
import { Award, Droplet, Leaf, Package, Recycle, Target, TreePine, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const sustainabilityStats = {
  totalShoesRepaired: 3847,
  totalShoesTradeIn: 2156,
  totalShoesSaved: 6003,
  wasteReductionKg: 18009,
  // avg 3kg per pair
  carbonSavedKg: 36018,
  // avg 6kg CO2 per pair
  waterSavedLiters: 540270,
  recyclingRate: 72,
  // percentage
  sustainabilityScore: 8.4,
  // out of 10
  treesEquivalent: 1800,
  // CO2 absorption equivalent
};

const monthlyCircularity = [
  { month: "Jan", repairs: 320, tradeIns: 180, disposed: 450 },
  { month: "Feb", repairs: 335, tradeIns: 195, disposed: 420 },
  { month: "Mar", repairs: 342, tradeIns: 205, disposed: 390 },
  { month: "Apr", repairs: 350, tradeIns: 210, disposed: 375 },
  { month: "May", repairs: 365, tradeIns: 220, disposed: 350 },
  { month: "Jun", repairs: 380, tradeIns: 235, disposed: 320 },
  { month: "Jul", repairs: 395, tradeIns: 245, disposed: 295 },
  { month: "Aug", repairs: 410, tradeIns: 255, disposed: 270 },
  { month: "Sep", repairs: 425, tradeIns: 265, disposed: 245 },
  { month: "Oct", repairs: 440, tradeIns: 280, disposed: 220 },
];

const lifecycleOutcomes = [
  { category: "Repaired & Extended", value: 3847, color: "#10B981" },
  { category: "Traded In & Reused", value: 2156, color: "#3B82F6" },
  { category: "Properly Recycled", value: 1250, color: "#F59E0B" },
  { category: "End of Life", value: 850, color: "#DC2626" },
];

const materialRecovery = [
  { material: "Rubber/Soles", recovered: 85, color: "#DC143C" },
  { material: "Leather", recovered: 78, color: "#8B4513" },
  { material: "Fabric/Textiles", recovered: 72, color: "#4169E1" },
  { material: "Metal Components", recovered: 92, color: "#708090" },
  { material: "Foam/Cushioning", recovered: 65, color: "#FF6347" },
];

const categorySustainability = [
  { category: "Casual", repairRate: 75, recycleRate: 68, avgLifecycle: 210 },
  { category: "Sports", repairRate: 82, recycleRate: 74, avgLifecycle: 195 },
  { category: "Formal", repairRate: 79, recycleRate: 71, avgLifecycle: 205 },
  { category: "Kids", repairRate: 68, recycleRate: 65, avgLifecycle: 85 },
];

function Sustainability() {
  const totalOutcomes = lifecycleOutcomes.reduce(
    (acc, lifecycleOutcome) => acc + lifecycleOutcome.value,
    0,
  );
  const savedPercentage = ((sustainabilityStats.totalShoesSaved / totalOutcomes) * 100).toFixed(1);
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg shadow-lg p-8 text-white">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 p-4 rounded-lg">
            <Leaf className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">Bata Sustainability Initiative</h2>
            <p className="text-green-50 text-lg mb-4">
              Leading the footwear industry towards a circular economy through repair, reuse, and
              recycling programs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-green-100 text-sm">Shoes Saved from Landfill</p>
                <p className="text-3xl font-bold mt-1">
                  {sustainabilityStats.totalShoesSaved.toLocaleString()}
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-green-100 text-sm">CO₂ Emissions Saved</p>
                <p className="text-3xl font-bold mt-1">
                  {(sustainabilityStats.carbonSavedKg / 1e3).toFixed(1)}T
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-green-100 text-sm">Circular Economy Rate</p>
                <p className="text-3xl font-bold mt-1">{savedPercentage}%</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-green-100 text-sm">Sustainability Score</p>
                <p className="text-3xl font-bold mt-1">
                  {sustainabilityStats.sustainabilityScore}/10
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Shoes Repaired"
          value={sustainabilityStats.totalShoesRepaired.toLocaleString()}
          icon={Package}
          trend="Lifecycle extended"
          trendUp
        />
        <StatCard
          title="Trade-In Program"
          value={sustainabilityStats.totalShoesTradeIn.toLocaleString()}
          icon={Recycle}
          trend={"Reused & resold"}
          trendUp
        />
        <StatCard
          title="Waste Reduction"
          value={`${(sustainabilityStats.wasteReductionKg / 1e3).toFixed(1)}T`}
          icon={TrendingUp}
          trend="Prevented from landfill"
          trendUp
        />
        <StatCard
          title="Water Saved"
          value={`${(sustainabilityStats.waterSavedLiters / 1e3).toFixed(0)}K L`}
          icon={Droplet}
          trend="vs new production"
          trendUp
        />
      </div>
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
        <div className="flex items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <TreePine className="w-8 h-8 text-blue-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Environmental Impact</h2>
            <p className="text-gray-700 mb-6">
              Our circular economy programs have prevented significant environmental impact
              equivalent to planting{" "}
              <span className="font-bold text-blue-600">
                {sustainabilityStats.treesEquivalent.toLocaleString()} trees
              </span>{" "}
              based on CO₂ absorption
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <p className="text-sm font-semibold text-gray-700">Carbon Footprint</p>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {(sustainabilityStats.carbonSavedKg / 1e3).toFixed(1)} Tons
                </p>
                <p className="text-xs text-gray-600 mt-1">CO₂ emissions prevented</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <p className="text-sm font-semibold text-gray-700">Water Conservation</p>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {(sustainabilityStats.waterSavedLiters / 1e3).toFixed(0)}K Liters
                </p>
                <p className="text-xs text-gray-600 mt-1">Fresh water saved</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <p className="text-sm font-semibold text-gray-700">Waste Diverted</p>
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {(sustainabilityStats.wasteReductionKg / 1e3).toFixed(1)} Tons
                </p>
                <p className="text-xs text-gray-600 mt-1">From landfills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Product Lifecycle Distribution</h2>
          <p className="text-sm text-gray-600 mb-6">How products are managed at end of use</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={lifecycleOutcomes}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name: name2, percent }) => `${name2}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {lifecycleOutcomes.map((lifecycleOutcome, index) => (
                  <Cell
                    key={`lifecycle-${lifecycleOutcome.category}-${index}`}
                    fill={lifecycleOutcome.color}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "6px",
                }}
                formatter={(value) => [value.toLocaleString(), "Units"]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {lifecycleOutcomes.map((lifecycleOutcome, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: lifecycleOutcome.color }}
                />
                <div className="flex-1">
                  <p className="text-xs text-gray-600">{lifecycleOutcome.category}</p>
                  <p className="text-sm font-bold text-gray-900">
                    {lifecycleOutcome.value.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Circular Economy Trend</h2>
          <p className="text-sm text-gray-600 mb-6">
            Monthly performance of sustainability programs
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyCircularity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "6px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="repairs"
                stroke="#10B981"
                strokeWidth={2}
                name="Repairs"
              />
              <Line
                type="monotone"
                dataKey="tradeIns"
                stroke="#3B82F6"
                strokeWidth={2}
                name="Trade-Ins"
              />
              <Line
                type="monotone"
                dataKey="disposed"
                stroke="#DC2626"
                strokeWidth={2}
                name="Disposed"
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">Circular programs increasing</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />
              <span className="text-gray-600">Disposal decreasing</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Material Recovery Rates</h2>
        <p className="text-sm text-gray-600 mb-6">
          Percentage of materials successfully recovered and recycled
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={materialRecovery}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="material"
              tick={{ fontSize: 11 }}
              angle={-15}
              textAnchor="end"
              height={80}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              label={{ value: "Recovery Rate (%)", angle: -90, position: "insideLeft" }}
              domain={[0, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E5E7EB",
                borderRadius: "6px",
              }}
              formatter={(value) => [`${value}%`, "Recovery Rate"]}
            />
            <Bar dataKey="recovered" radius={[8, 8, 0, 0]}>
              {materialRecovery.map((item, index) => (
                <Cell key={`material-${item.material}-${index}`} fill={item.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-green-700">Overall Recovery Rate:</span>{" "}
            {sustainabilityStats.recyclingRate}% of materials are successfully recovered and reused,
            exceeding industry average of 45%.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#DC143C] to-red-600">
          <h2 className="text-xl font-bold text-white">Sustainability by Product Category</h2>
          <p className="text-red-50 text-sm mt-1">
            Repair rates, recycling rates, and average lifecycle
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Repair Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Recycle Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Avg Lifecycle (Days)
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Sustainability Score
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categorySustainability.map((item, index) => {
                const score = (
                  (item.repairRate + item.recycleRate + item.avgLifecycle / 30) /
                  3
                ).toFixed(1);
                return (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-medium text-gray-900">{item.category}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${item.repairRate}%` }}
                          />
                        </div>
                        <span className="font-semibold text-green-600">{item.repairRate}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${item.recycleRate}%` }}
                          />
                        </div>
                        <span className="font-semibold text-blue-600">{item.recycleRate}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`font-semibold ${item.avgLifecycle > 180 ? "text-green-600" : item.avgLifecycle > 90 ? "text-orange-600" : "text-red-600"}`}
                      >
                        {item.avgLifecycle} days
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span className="font-bold text-gray-900">{score}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">2026 Sustainability Goals</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#DC143C]" />
                <span className="text-sm font-semibold text-gray-700">
                  Repair 5,000 shoes annually
                </span>
              </div>
              <span className="text-sm font-bold text-gray-900">77% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: "77%" }} />
            </div>
            <p className="text-xs text-gray-600 mt-1">3,847 / 5,000 shoes repaired</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#DC143C]" />
                <span className="text-sm font-semibold text-gray-700">
                  Achieve 80% material recovery rate
                </span>
              </div>
              <span className="text-sm font-bold text-gray-900">90% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: "90%" }} />
            </div>
            <p className="text-xs text-gray-600 mt-1">72% / 80% target achieved</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#DC143C]" />
                <span className="text-sm font-semibold text-gray-700">
                  Reduce CO₂ emissions by 40 tons
                </span>
              </div>
              <span className="text-sm font-bold text-gray-900">90% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: "90%" }} />
            </div>
            <p className="text-xs text-gray-600 mt-1">36 / 40 tons CO₂ saved</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#DC143C]" />
                <span className="text-sm font-semibold text-gray-700">
                  Expand trade-in program to 3,000 units
                </span>
              </div>
              <span className="text-sm font-bold text-gray-900">72% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-500 h-3 rounded-full" style={{ width: "72%" }} />
            </div>
            <p className="text-xs text-gray-600 mt-1">2,156 / 3,000 shoes traded in</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
          <div className="flex items-start gap-3">
            <Award className="w-8 h-8 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ISO 14001 Certified</h3>
              <p className="text-sm text-gray-700">
                Environmental Management System certification achieved
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-start gap-3">
            <Award className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Circular Economy Leader</h3>
              <p className="text-sm text-gray-700">
                {"Recognized for industry-leading repair & reuse programs"}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-start gap-3">
            <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Carbon Neutral Goal</h3>
              <p className="text-sm text-gray-700">
                Committed to achieving carbon neutrality by 2030
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sustainability;
