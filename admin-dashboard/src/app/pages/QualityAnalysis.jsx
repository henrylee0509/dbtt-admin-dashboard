import { StatCard } from "../components/StatCard";
import { Calendar, Package, TrendingDown, TrendingUp, TriangleAlert } from "lucide-react";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ProductQualityTable({ products }) {
  const sortedProducts = [...products].sort((a, b) => a.avgLifecycle - b.avgLifecycle);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#DC143C] to-red-600">
        <h2 className="text-xl font-bold text-white">Product Quality Analysis</h2>
        <p className="text-red-50 text-sm mt-1">Products ranked by lifecycle performance</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Avg Lifecycle (Days)
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Total Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Avg Repairs
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Risk Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                High Risk %
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedProducts.map((sortedProduct, index) => (
              <tr
                key={sortedProduct.product_name}
                className={`hover:bg-gray-50 transition-colors ${sortedProduct.riskLevel === "Poor" ? "bg-red-50" : ""}`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {sortedProduct.riskLevel === "Poor" && (
                      <TriangleAlert className="w-4 h-4 text-red-600 mr-2" />
                    )}
                    <span className="font-medium text-gray-900">{sortedProduct.product_name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span
                      className={`font-semibold ${sortedProduct.avgLifecycle < 90 ? "text-red-600" : sortedProduct.avgLifecycle < 180 ? "text-orange-600" : "text-green-600"}`}
                    >
                      {sortedProduct.avgLifecycle.toFixed(0)}
                    </span>
                    {sortedProduct.avgLifecycle < 90 && (
                      <TrendingDown className="w-4 h-4 text-red-600 ml-2" />
                    )}
                    {sortedProduct.avgLifecycle >= 180 && (
                      <TrendingUp className="w-4 h-4 text-green-600 ml-2" />
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {sortedProduct.totalCount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`font-medium ${sortedProduct.avgRepairs > 1.5 ? "text-red-600" : "text-gray-700"}`}
                  >
                    {sortedProduct.avgRepairs.toFixed(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${sortedProduct.riskLevel === "Poor" ? "bg-red-100 text-red-800" : sortedProduct.riskLevel === "Average" ? "bg-orange-100 text-orange-800" : "bg-green-100 text-green-800"}`}
                  >
                    {sortedProduct.riskLevel}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`font-semibold ${sortedProduct.percentageHighRisk > 50 ? "text-red-600" : "text-gray-700"}`}
                  >
                    {sortedProduct.percentageHighRisk.toFixed(0)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LifecycleChart({ data }) {
  const getBarColor = (days) => (days < 90 ? "#DC2626" : days < 180 ? "#F59E0B" : "#10B981");
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Average Lifecycle by Product</h2>
      <p className="text-sm text-gray-600 mb-6">Lower lifecycle indicates quality issues</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="product_name"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={100}
          />
          <YAxis
            label={{ value: "Days", angle: -90, position: "insideLeft" }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
            }}
            formatter={(days) => [`${days.toFixed(0)} days`, "Avg Lifecycle"]}
          />
          <Bar dataKey="avgLifecycle" radius={[8, 8, 0, 0]}>
            {data.map((days, index) => (
              <Cell
                key={`lifecycle-${days.product_name}-${index}`}
                fill={getBarColor(days.avgLifecycle)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-600" />
          <span className="text-sm text-gray-600">{"Poor (<90 days)"}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-orange-500" />
          <span className="text-sm text-gray-600">Average (90-180 days)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-500" />
          <span className="text-sm text-gray-600">{"Good (>180 days)"}</span>
        </div>
      </div>
    </div>
  );
}

function RepairFrequencyChart({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Repair Frequency Analysis</h2>
      <p className="text-sm text-gray-600 mb-6">Higher repairs indicate potential quality issues</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="product_name"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={100}
          />
          <YAxis
            label={{ value: "Avg Repairs per Unit", angle: -90, position: "insideLeft" }}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
            }}
            formatter={(value) => [value.toFixed(2), "Avg Repairs"]}
          />
          <Bar dataKey="avgRepairs" fill="#DC143C" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const REGION_COLORS = ["#DC143C", "#EF4444", "#F87171", "#FCA5A5"];

function RegionalDistributionChart({ data }) {
  const chartData = data.map((item) => ({
    name: item.region,
    value: item.count,
    highRisk: item.highRiskCount,
  }));
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Regional Distribution</h2>
      <p className="text-sm text-gray-600 mb-6">Sales distribution across regions</p>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name: name2, percent }) => `${name2}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((item, index) => (
              <Cell
                key={`regional-${item.name}-${index}`}
                fill={REGION_COLORS[index % REGION_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-6 space-y-2">
        {data.map((item, index) => (
          <div key={item.region} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: REGION_COLORS[index % REGION_COLORS.length] }}
              />
              <span className="text-gray-700 font-medium">{item.region}</span>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold text-red-600">{item.highRiskCount}</span> high risk /{" "}
              {item.count} total
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function QualityClassificationChart({ poor, average, good }) {
  const chartData = [
    { name: "Poor (<90 days)", value: poor, color: "#DC2626" },
    { name: "Average (90-180 days)", value: average, color: "#F59E0B" },
    { name: "Good (>180 days)", value: good, color: "#10B981" },
  ].filter((item) => item.value > 0);
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Quality Classification</h2>
      <p className="text-sm text-gray-600 mb-6">Distribution of products by lifecycle category</p>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name: name2, percent }) =>
              `${name2.split(" ")[0]}: ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((item, index) => (
              <Cell key={`risk-${item.name}-${index}`} fill={item.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-600" />
            <span className="text-sm font-medium text-gray-900">Poor Quality</span>
          </div>
          <span className="text-lg font-bold text-red-600">{poor}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-orange-500" />
            <span className="text-sm font-medium text-gray-900">Average Quality</span>
          </div>
          <span className="text-lg font-bold text-orange-600">{average}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500" />
            <span className="text-sm font-medium text-gray-900">Good Quality</span>
          </div>
          <span className="text-lg font-bold text-green-600">{good}</span>
        </div>
      </div>
    </div>
  );
}

const purchaseRecords = [
  // Bubblegummers Kids - Poor quality
  {
    customer_id: "C001",
    product_id: "P001",
    product_name: "Bubblegummers Kids",
    price: 45.9,
    purchase_date: "2025-01-05",
    last_activity_date: "2025-03-27",
    repair_count: 2,
    trade_in: 1,
    region: "Central",
  },
  {
    customer_id: "C002",
    product_id: "P001",
    product_name: "Bubblegummers Kids",
    price: 45.9,
    purchase_date: "2025-01-10",
    last_activity_date: "2025-03-20",
    repair_count: 3,
    trade_in: 0,
    region: "North",
  },
  {
    customer_id: "C003",
    product_id: "P001",
    product_name: "Bubblegummers Kids",
    price: 45.9,
    purchase_date: "2025-02-01",
    last_activity_date: "2025-03-30",
    repair_count: 1,
    trade_in: 1,
    region: "East",
  },
  // Bata School Shoes - Poor quality
  {
    customer_id: "C004",
    product_id: "P002",
    product_name: "Bata School Shoes",
    price: 52.9,
    purchase_date: "2025-01-08",
    last_activity_date: "2025-04-02",
    repair_count: 2,
    trade_in: 1,
    region: "West",
  },
  {
    customer_id: "C005",
    product_id: "P002",
    product_name: "Bata School Shoes",
    price: 52.9,
    purchase_date: "2025-01-15",
    last_activity_date: "2025-03-25",
    repair_count: 3,
    trade_in: 0,
    region: "Central",
  },
  {
    customer_id: "C006",
    product_id: "P002",
    product_name: "Bata School Shoes",
    price: 52.9,
    purchase_date: "2025-02-05",
    last_activity_date: "2025-04-15",
    repair_count: 2,
    trade_in: 1,
    region: "North",
  },
  // Power Sneakers - Average quality
  {
    customer_id: "C007",
    product_id: "P003",
    product_name: "Power Sneakers",
    price: 68.9,
    purchase_date: "2025-01-10",
    last_activity_date: "2025-06-28",
    repair_count: 1,
    trade_in: 0,
    region: "West",
  },
  {
    customer_id: "C008",
    product_id: "P003",
    product_name: "Power Sneakers",
    price: 68.9,
    purchase_date: "2025-01-20",
    last_activity_date: "2025-07-08",
    repair_count: 0,
    trade_in: 1,
    region: "Central",
  },
  {
    customer_id: "C009",
    product_id: "P003",
    product_name: "Power Sneakers",
    price: 68.9,
    purchase_date: "2025-02-01",
    last_activity_date: "2025-07-15",
    repair_count: 1,
    trade_in: 0,
    region: "East",
  },
  // Bata Red Label Premium - Average quality
  {
    customer_id: "C010",
    product_id: "P004",
    product_name: "Bata Red Label Premium",
    price: 95.9,
    purchase_date: "2025-01-15",
    last_activity_date: "2025-07-05",
    repair_count: 1,
    trade_in: 0,
    region: "East",
  },
  {
    customer_id: "C011",
    product_id: "P004",
    product_name: "Bata Red Label Premium",
    price: 95.9,
    purchase_date: "2025-02-10",
    last_activity_date: "2025-07-30",
    repair_count: 0,
    trade_in: 1,
    region: "Central",
  },
  // North Star Athletic - Good quality
  {
    customer_id: "C012",
    product_id: "P005",
    product_name: "North Star Athletic",
    price: 72.9,
    purchase_date: "2025-01-05",
    last_activity_date: "2025-07-20",
    repair_count: 0,
    trade_in: 0,
    region: "North-East",
  },
  {
    customer_id: "C013",
    product_id: "P005",
    product_name: "North Star Athletic",
    price: 72.9,
    purchase_date: "2025-01-20",
    last_activity_date: "2025-08-05",
    repair_count: 1,
    trade_in: 0,
    region: "East",
  },
  {
    customer_id: "C014",
    product_id: "P005",
    product_name: "North Star Athletic",
    price: 72.9,
    purchase_date: "2025-02-01",
    last_activity_date: "2025-08-15",
    repair_count: 0,
    trade_in: 0,
    region: "Central",
  },
  // Bata Sandals - Good quality
  {
    customer_id: "C015",
    product_id: "P006",
    product_name: "Bata Sandals",
    price: 39.9,
    purchase_date: "2025-01-10",
    last_activity_date: "2025-08-05",
    repair_count: 0,
    trade_in: 0,
    region: "Central",
  },
  {
    customer_id: "C016",
    product_id: "P006",
    product_name: "Bata Sandals",
    price: 39.9,
    purchase_date: "2025-01-25",
    last_activity_date: "2025-08-20",
    repair_count: 1,
    trade_in: 0,
    region: "North",
  },
  {
    customer_id: "C017",
    product_id: "P006",
    product_name: "Bata Sandals",
    price: 39.9,
    purchase_date: "2025-02-05",
    last_activity_date: "2025-09-01",
    repair_count: 0,
    trade_in: 0,
    region: "East",
  },
  // Bata Casual Sneakers - Good quality
  {
    customer_id: "C018",
    product_id: "P007",
    product_name: "Bata Casual Sneakers",
    price: 65.9,
    purchase_date: "2025-01-08",
    last_activity_date: "2025-08-01",
    repair_count: 0,
    trade_in: 0,
    region: "North",
  },
  {
    customer_id: "C019",
    product_id: "P007",
    product_name: "Bata Casual Sneakers",
    price: 65.9,
    purchase_date: "2025-01-22",
    last_activity_date: "2025-08-18",
    repair_count: 1,
    trade_in: 0,
    region: "Central",
  },
  {
    customer_id: "C020",
    product_id: "P007",
    product_name: "Bata Casual Sneakers",
    price: 65.9,
    purchase_date: "2025-02-10",
    last_activity_date: "2025-09-05",
    repair_count: 0,
    trade_in: 0,
    region: "West",
  },
  // Weinbrenner Formal - Good quality
  {
    customer_id: "C021",
    product_id: "P008",
    product_name: "Weinbrenner Formal",
    price: 89.9,
    purchase_date: "2025-01-05",
    last_activity_date: "2025-08-10",
    repair_count: 0,
    trade_in: 0,
    region: "East",
  },
  {
    customer_id: "C022",
    product_id: "P008",
    product_name: "Weinbrenner Formal",
    price: 89.9,
    purchase_date: "2025-01-18",
    last_activity_date: "2025-08-25",
    repair_count: 1,
    trade_in: 0,
    region: "Central",
  },
  {
    customer_id: "C023",
    product_id: "P008",
    product_name: "Weinbrenner Formal",
    price: 89.9,
    purchase_date: "2025-02-02",
    last_activity_date: "2025-09-08",
    repair_count: 0,
    trade_in: 0,
    region: "North",
  },
  // Bata Comfit - Good quality (top product)
  {
    customer_id: "C024",
    product_id: "P009",
    product_name: "Bata Comfit",
    price: 75.9,
    purchase_date: "2025-01-03",
    last_activity_date: "2025-08-25",
    repair_count: 0,
    trade_in: 0,
    region: "Central",
  },
  {
    customer_id: "C025",
    product_id: "P009",
    product_name: "Bata Comfit",
    price: 75.9,
    purchase_date: "2025-01-12",
    last_activity_date: "2025-09-05",
    repair_count: 1,
    trade_in: 0,
    region: "North",
  },
  {
    customer_id: "C026",
    product_id: "P009",
    product_name: "Bata Comfit",
    price: 75.9,
    purchase_date: "2025-01-25",
    last_activity_date: "2025-09-18",
    repair_count: 0,
    trade_in: 0,
    region: "East",
  },
  {
    customer_id: "C027",
    product_id: "P009",
    product_name: "Bata Comfit",
    price: 75.9,
    purchase_date: "2025-02-08",
    last_activity_date: "2025-10-01",
    repair_count: 0,
    trade_in: 0,
    region: "Central",
  },
  // North Star Running - Good quality (most durable)
  {
    customer_id: "C028",
    product_id: "P010",
    product_name: "North Star Running",
    price: 98.9,
    purchase_date: "2025-01-02",
    last_activity_date: "2025-11-06",
    repair_count: 0,
    trade_in: 0,
    region: "East",
  },
  {
    customer_id: "C029",
    product_id: "P010",
    product_name: "North Star Running",
    price: 98.9,
    purchase_date: "2025-01-15",
    last_activity_date: "2025-11-20",
    repair_count: 0,
    trade_in: 0,
    region: "North-East",
  },
  {
    customer_id: "C030",
    product_id: "P010",
    product_name: "North Star Running",
    price: 98.9,
    purchase_date: "2025-02-01",
    last_activity_date: "2025-12-07",
    repair_count: 1,
    trade_in: 0,
    region: "Central",
  },
];

function QualityAnalysis() {
  const records = useMemo(
    () =>
      purchaseRecords.map((purchaseRecord) => {
        const purchaseDate = new Date(purchaseRecord.purchase_date);
        const lastActivityDate = new Date(purchaseRecord.last_activity_date);
        const lifecycleDays = Math.floor(
          (lastActivityDate.getTime() - purchaseDate.getTime()) / (1e3 * 60 * 60 * 24),
        );
        let category;
        if (lifecycleDays < 90) {
          category = "Poor";
        } else if (lifecycleDays < 180) {
          category = "Average";
        } else {
          category = "Good";
        }
        return {
          ...purchaseRecord,
          purchase_date: purchaseDate,
          last_activity_date: lastActivityDate,
          lifecycle_days: lifecycleDays,
          high_risk: lifecycleDays < 90,
          lifecycle_category: category,
        };
      }),
    [],
  );
  const summary = useMemo(() => {
    const total = records.length;
    const highRiskCount = records.filter((record) => record.high_risk).length;
    const avgLifecycle = records.reduce((acc, record) => acc + record.lifecycle_days, 0) / total;
    const totalRepairs = records.reduce((acc, record) => acc + record.repair_count, 0);
    return {
      totalProducts: total,
      highRiskCount,
      highRiskPercentage: ((highRiskCount / total) * 100).toFixed(1),
      avgLifecycle: avgLifecycle.toFixed(0),
      totalRepairs,
    };
  }, [records]);
  const productStats = useMemo(() => {
    const byProduct = records.reduce((acc, avgLifecycle) => {
      if (!acc[avgLifecycle.product_name]) {
        acc[avgLifecycle.product_name] = {
          product_name: avgLifecycle.product_name,
          lifecycles: [],
          repairs: [],
          count: 0,
          highRiskCount: 0,
        };
      }
      acc[avgLifecycle.product_name].lifecycles.push(avgLifecycle.lifecycle_days);
      acc[avgLifecycle.product_name].repairs.push(avgLifecycle.repair_count);
      acc[avgLifecycle.product_name].count += 1;
      if (avgLifecycle.high_risk) {
        acc[avgLifecycle.product_name].highRiskCount += 1;
      }
      return acc;
    }, {});
    return Object.values(byProduct).map((item) => {
      const avgLifecycle =
        item.lifecycles.reduce((acc, lifecycle) => acc + lifecycle, 0) / item.lifecycles.length;
      const avgRepairs =
        item.repairs.reduce((acc, repair) => acc + repair, 0) / item.repairs.length;
      let riskLevel;
      if (avgLifecycle < 90) {
        riskLevel = "Poor";
      } else if (avgLifecycle < 180) {
        riskLevel = "Average";
      } else {
        riskLevel = "Good";
      }
      return {
        product_name: item.product_name,
        avgLifecycle,
        totalCount: item.count,
        avgRepairs,
        riskLevel,
        percentageHighRisk: (item.highRiskCount / item.count) * 100,
      };
    });
  }, [records]);
  const regionStats = useMemo(() => {
    const byRegion = records.reduce((acc, record) => {
      if (!acc[record.region]) {
        acc[record.region] = { region: record.region, count: 0, highRiskCount: 0 };
      }
      acc[record.region].count += 1;
      if (record.high_risk) {
        acc[record.region].highRiskCount += 1;
      }
      return acc;
    }, {});
    return Object.values(byRegion);
  }, [records]);
  const qualityCounts = useMemo(() => {
    const poor = records.filter((record) => record.lifecycle_category === "Poor").length;
    const average = records.filter((record) => record.lifecycle_category === "Average").length;
    const good = records.filter((record) => record.lifecycle_category === "Good").length;
    return { poor, average, good };
  }, [records]);
  const lifecycleChartData = useMemo(
    () =>
      productStats.map((productStat) => ({
        product_name: productStat.product_name,
        avgLifecycle: productStat.avgLifecycle,
      })),
    [productStats],
  );
  const repairChartData = useMemo(
    () =>
      productStats.map((productStat) => ({
        product_name: productStat.product_name,
        avgRepairs: productStat.avgRepairs,
      })),
    [productStats],
  );
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Products Analyzed" value={summary.totalProducts} icon={Package} />
        <StatCard
          title="High Risk Products"
          value={summary.highRiskCount}
          icon={TriangleAlert}
          trend={`${summary.highRiskPercentage}% of total`}
          trendUp={false}
        />
        <StatCard
          title="Average Lifecycle"
          value={`${summary.avgLifecycle} days`}
          icon={Calendar}
        />
        <StatCard
          title="Total Repairs"
          value={summary.totalRepairs}
          icon={TrendingDown}
          trend={`${(summary.totalRepairs / summary.totalProducts).toFixed(1)} per unit`}
          trendUp={false}
        />
      </div>
      {summary.highRiskCount > 0 && (
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <TriangleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-red-900">Quality Alert</h3>
              <p className="text-red-700 mt-1">
                {summary.highRiskCount}
                {
                  " product(s) have been classified as high-risk (lifecycle < 90 days). Immediate quality improvement measures are recommended for products marked in red below."
                }
              </p>
            </div>
          </div>
        </div>
      )}
      <ProductQualityTable products={productStats} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LifecycleChart data={lifecycleChartData} />
        <RepairFrequencyChart data={repairChartData} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QualityClassificationChart
          poor={qualityCounts.poor}
          average={qualityCounts.average}
          good={qualityCounts.good}
        />
        <RegionalDistributionChart data={regionStats} />
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#DC143C]">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Quality Improvement Recommendations
        </h2>
        <div className="space-y-4">
          {productStats
            .filter((productStat) => productStat.riskLevel === "Poor")
            .map((productStat, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                <TriangleAlert className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">{productStat.product_name}</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Average lifecycle of only{" "}
                    <span className="font-bold text-red-600">
                      {productStat.avgLifecycle.toFixed(0)} days
                    </span>{" "}
                    with{" "}
                    <span className="font-bold text-red-600">
                      {productStat.avgRepairs.toFixed(1)} repairs per unit
                    </span>
                    . Priority quality assessment and material review required.
                  </p>
                </div>
              </div>
            ))}
          {productStats.filter((productStat) => productStat.riskLevel === "Poor").length === 0 && (
            <p className="text-gray-600">
              No critical quality issues identified. Continue monitoring product performance.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default QualityAnalysis;
