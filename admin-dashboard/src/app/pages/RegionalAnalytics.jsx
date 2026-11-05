import { DollarSign, Map as MapIcon, TrendingDown, TrendingUp, Users } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const regionalData = [
  {
    region: "Central",
    revenue_sgd: 352800,
    growth_pct: -8.5,
    customers: 4200,
    avg_order_value: 84,
    market_share: "28%",
    top_product: "Bata Comfit",
    top_product_sales: 2876,
    note: "Market leader, strong across demographics",
  },
  {
    region: "North-East",
    revenue_sgd: 306e3,
    growth_pct: -5.2,
    customers: 3400,
    avg_order_value: 90,
    market_share: "22%",
    top_product: "North Star Athletic",
    top_product_sales: 1829,
    note: "Strong growth potential",
  },
  {
    region: "East",
    revenue_sgd: 282900,
    growth_pct: -6,
    customers: 3100,
    avg_order_value: 91,
    market_share: "20%",
    top_product: "Bata Red Label Premium",
    top_product_sales: 950,
    note: "Premium products perform better here",
  },
  {
    region: "North",
    revenue_sgd: 235200,
    growth_pct: -12.1,
    customers: 2800,
    avg_order_value: 84,
    market_share: "18%",
    top_product: "Bata Casual Sneakers",
    top_product_sales: 1598,
    note: "Needs senior-focused assortment",
  },
  {
    region: "West",
    revenue_sgd: 144500,
    growth_pct: -23.8,
    customers: 1700,
    avg_order_value: 85,
    market_share: "12%",
    top_product: "Power Sneakers",
    top_product_sales: 1685,
    note: "Weakest region; store coverage and delivery issues",
  },
];

function RegionalAnalytics() {
  const totalRevenue = regionalData.reduce((value, item) => value + item.revenue_sgd, 0);
  const totalCustomers = regionalData.reduce((value, item) => value + item.customers, 0);
  const avgGrowth =
    regionalData.reduce((value, item) => value + item.growth_pct, 0) / regionalData.length;
  const getGrowthColor = (value) => (value < -15 ? "#DC2626" : value < -8 ? "#F59E0B" : "#10B981");
  const revenueChartData = regionalData.map((value) => ({
    region: value.region,
    revenue: value.revenue_sgd / 1e3,
    // Convert to thousands
  }));
  const growthChartData = regionalData.map((value) => ({
    region: value.region,
    growth: value.growth_pct,
  }));
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#DC143C]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                SGD {(totalRevenue / 1e3).toFixed(0)}K
              </p>
              <p className="text-sm text-red-600 mt-1">{avgGrowth.toFixed(1)}% avg growth</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-[#DC143C]" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Customers</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {totalCustomers.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">Across 5 regions</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Top Region</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">Central</p>
              <p className="text-sm text-gray-600 mt-1">28% market share</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <MapIcon className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Revenue by Region</h2>
        <p className="text-sm text-gray-600 mb-6">
          Revenue distribution across all regions (SGD thousands)
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="region" tick={{ fontSize: 12 }} />
            <YAxis
              label={{ value: "Revenue (SGD K)", angle: -90, position: "insideLeft" }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E5E7EB",
                borderRadius: "6px",
              }}
              formatter={(value) => [`SGD ${value.toFixed(0)}K`, "Revenue"]}
            />
            <Bar dataKey="revenue" fill="#DC143C" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Growth Rate by Region</h2>
        <p className="text-sm text-gray-600 mb-6">Year-over-year growth performance</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={growthChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="region" tick={{ fontSize: 12 }} />
            <YAxis
              label={{ value: "Growth %", angle: -90, position: "insideLeft" }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E5E7EB",
                borderRadius: "6px",
              }}
              formatter={(value) => [`${value.toFixed(1)}%`, "Growth"]}
            />
            <Bar dataKey="growth" radius={[8, 8, 0, 0]}>
              {growthChartData.map((value, index) => (
                <Cell key={`growth-${value.region}-${index}`} fill={getGrowthColor(value.growth)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-600" />
            <span className="text-sm text-gray-600">{"Critical (< -15%)"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-orange-500" />
            <span className="text-sm text-gray-600">Needs Attention (-15% to -8%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500" />
            <span className="text-sm text-gray-600">{"Stable (> -8%)"}</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#DC143C] to-red-600">
          <h2 className="text-xl font-bold text-white">Regional Performance Details</h2>
          <p className="text-red-50 text-sm mt-1">Comprehensive regional analysis</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Revenue (SGD)
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Growth %
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Customers
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Avg Order Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Market Share
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Top Product
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {regionalData.map((value, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 transition-colors ${value.growth_pct < -15 ? "bg-red-50" : ""}`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <MapIcon className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="font-medium text-gray-900">{value.region}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                    {value.revenue_sgd.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {value.growth_pct < 0 ? (
                        <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                      ) : (
                        <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                      )}
                      <span
                        className={`font-semibold ${value.growth_pct < -15 ? "text-red-600" : value.growth_pct < -8 ? "text-orange-600" : "text-green-600"}`}
                      >
                        {value.growth_pct.toFixed(1)}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    {value.customers.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    SGD {value.avg_order_value}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-[#DC143C]">{value.market_share}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{value.top_product}</p>
                      <p className="text-xs text-gray-500">
                        {value.top_product_sales.toLocaleString()} sales
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {regionalData.map((value, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${value.growth_pct < -15 ? "border-red-600" : value.growth_pct < -8 ? "border-orange-500" : "border-green-500"}`}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900">{value.region}</h3>
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${value.growth_pct < -15 ? "bg-red-100 text-red-800" : value.growth_pct < -8 ? "bg-orange-100 text-orange-800" : "bg-green-100 text-green-800"}`}
              >
                {value.growth_pct.toFixed(1)}%
              </span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Revenue:</span>
                <span className="font-semibold text-gray-900">
                  SGD {(value.revenue_sgd / 1e3).toFixed(0)}K
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Customers:</span>
                <span className="font-semibold text-gray-900">
                  {value.customers.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Market Share:</span>
                <span className="font-semibold text-[#DC143C]">{value.market_share}</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-2">
                Top Product:{" "}
                <span className="font-semibold text-gray-900">{value.top_product}</span>
              </p>
              <p className="text-xs text-gray-600 italic">{value.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegionalAnalytics;
