import { Map as MapIcon, Package, Star, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const demandData = [
  {
    product_name: "Bata Comfit",
    category: "Casual",
    purchase_count: 2876,
    strongest_region: "Central",
    note: "Top product overall; maintain stock and introduce comfort variants",
  },
  {
    product_name: "North Star Athletic",
    category: "Sports",
    purchase_count: 1829,
    strongest_region: "North-East",
    note: "Strong growth in North-East",
  },
  {
    product_name: "Power Sneakers",
    category: "Sports",
    purchase_count: 1685,
    strongest_region: "West",
    note: "Best seller in West region",
  },
  {
    product_name: "Bata Casual Sneakers",
    category: "Casual",
    purchase_count: 1598,
    strongest_region: "North",
    note: "Strong casual demand in North",
  },
  {
    product_name: "Bata Sandals",
    category: "Casual",
    purchase_count: 1456,
    strongest_region: "Mixed",
    note: "Stable demand",
  },
  {
    product_name: "Weinbrenner Formal",
    category: "Formal",
    purchase_count: 1342,
    strongest_region: "Mixed",
    note: "Steady performer",
  },
  {
    product_name: "North Star Running",
    category: "Sports",
    purchase_count: 1124,
    strongest_region: "East premium/sports",
    note: "Most durable product",
  },
  {
    product_name: "Bata Red Label Premium",
    category: "Formal",
    purchase_count: 950,
    strongest_region: "East",
    note: "Premium products perform better in East",
  },
];

function ProductsInDemand() {
  const totalPurchases = demandData.reduce((category, stats) => category + stats.purchase_count, 0);
  const categoryStats = demandData.reduce((category, stats) => {
    if (!category[stats.category]) {
      category[stats.category] = { count: 0, products: 0 };
    }
    category[stats.category].count += stats.purchase_count;
    category[stats.category].products += 1;
    return category;
  }, {});
  const getCategoryStyle = (category) => {
    switch (category) {
      case "Casual":
        return "bg-blue-100 text-blue-800";
      case "Sports":
        return "bg-green-100 text-green-800";
      case "Formal":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const chartData = demandData.map((category) => ({
    name: category.product_name,
    purchases: category.purchase_count,
  }));
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#DC143C]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Top Product</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">Bata Comfit</p>
              <p className="text-sm text-[#DC143C] font-semibold mt-1">2,876 purchases</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <Star className="w-6 h-6 text-[#DC143C]" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Purchases</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {totalPurchases.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">Across all products</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Top Category</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">Sports</p>
              <p className="text-sm text-green-600 font-semibold mt-1">
                {categoryStats.Sports?.count.toLocaleString()} purchases
              </p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <Package className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">Products Tracked</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{demandData.length}</p>
              <p className="text-sm text-gray-600 mt-1">High-demand items</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Product Purchase Volume</h2>
        <p className="text-sm text-gray-600 mb-6">Total purchases by product</p>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11 }}
              angle={-45}
              textAnchor="end"
              height={120}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              label={{ value: "Purchase Count", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #E5E7EB",
                borderRadius: "6px",
              }}
              formatter={(category) => [category.toLocaleString(), "Purchases"]}
            />
            <Bar dataKey="purchases" fill="#DC143C" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Category Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(categoryStats).map(([category, stats], share) => {
            const share2 = ((stats.count / totalPurchases) * 100).toFixed(1);
            return (
              <div
                key={share}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border-l-4 border-[#DC143C]"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category}</h3>
                <p className="text-3xl font-bold text-[#DC143C] mb-2">
                  {stats.count.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mb-3">{share2}% of total purchases</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#DC143C] h-2 rounded-full" style={{ width: `${share2}%` }} />
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  {stats.products} product{stats.products > 1 ? "s" : ""} in category
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#DC143C] to-red-600">
          <h2 className="text-xl font-bold text-white">High-Demand Products</h2>
          <p className="text-red-50 text-sm mt-1">Products ranked by purchase volume</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Purchase Count
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Market Share
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Strongest Region
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {demandData.map((category, stats) => {
                const share = ((category.purchase_count / totalPurchases) * 100).toFixed(1);
                return (
                  <tr
                    key={stats}
                    className={`hover:bg-gray-50 transition-colors ${stats === 0 ? "bg-yellow-50" : ""}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {stats === 0 && <Star className="w-4 h-4 text-yellow-500 mr-2" />}
                        <span className="font-bold text-gray-900">#{stats + 1}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-medium text-gray-900">{category.product_name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getCategoryStyle(category.category)}`}
                      >
                        {category.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-semibold text-[#DC143C] text-lg">
                        {category.purchase_count.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-semibold text-gray-900">{share}%</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapIcon className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-gray-700">{category.strongest_region}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{category.note}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6 border-l-4 border-green-500">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <TrendingUp className="w-8 h-8 text-green-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Strategic Recommendations</h2>
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                <p className="text-gray-700">
                  <span className="font-semibold">Bata Comfit:</span> Top performer with 2,876
                  purchases. Consider introducing comfort variants and expanding distribution in
                  Central region.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                <p className="text-gray-700">
                  <span className="font-semibold">North Star Athletic:</span> Strong growth in
                  North-East. Increase inventory and marketing efforts in this region.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                <p className="text-gray-700">
                  <span className="font-semibold">Power Sneakers:</span> Best seller in West region.
                  Leverage this success to address overall West region challenges.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                <p className="text-gray-700">
                  <span className="font-semibold">Premium Products:</span> Bata Red Label Premium
                  performs well in East. Focus premium marketing and product placement in affluent
                  areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsInDemand;
