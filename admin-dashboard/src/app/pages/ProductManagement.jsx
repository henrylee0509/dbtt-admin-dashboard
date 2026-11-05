import { CircleAlert, CircleCheckBig, Eye, RefreshCw, TriangleAlert, Wrench } from "lucide-react";

const productQualityData = [
  {
    product_name: "Bubblegummers Kids",
    quality: "Poor",
    sales: 1893,
    avg_lifecycle_days: 81,
    repairs: 473,
    trade_ins: 284,
    top_failure_part: "Velcro Closure",
    status: "URGENT",
    activity_rate: "40.0%",
  },
  {
    product_name: "Bata School Shoes",
    quality: "Poor",
    sales: 2247,
    avg_lifecycle_days: 85,
    repairs: 562,
    trade_ins: 337,
    top_failure_part: "General Wear",
    status: "URGENT",
    activity_rate: "40.0%",
  },
  {
    product_name: "Power Sneakers",
    quality: "Average",
    sales: 1685,
    avg_lifecycle_days: 169,
    repairs: 202,
    trade_ins: 135,
    top_failure_part: "General Wear",
    status: "Monitor",
    activity_rate: "20.0%",
  },
  {
    product_name: "Bata Red Label Premium",
    quality: "Average",
    sales: 950,
    avg_lifecycle_days: 172,
    repairs: 114,
    trade_ins: 76,
    top_failure_part: "General Wear",
    status: "Monitor",
    activity_rate: "20.0%",
  },
  {
    product_name: "North Star Athletic",
    quality: "Good",
    sales: 1829,
    avg_lifecycle_days: 196,
    repairs: 91,
    trade_ins: 55,
    top_failure_part: "General Wear",
    status: "Good",
    activity_rate: "8.0%",
  },
  {
    product_name: "Bata Sandals",
    quality: "Good",
    sales: 1456,
    avg_lifecycle_days: 201,
    repairs: 73,
    trade_ins: 44,
    top_failure_part: "General Wear",
    status: "Good",
    activity_rate: "8.0%",
  },
  {
    product_name: "Bata Casual Sneakers",
    quality: "Good",
    sales: 1598,
    avg_lifecycle_days: 207,
    repairs: 80,
    trade_ins: 48,
    top_failure_part: "General Wear",
    status: "Good",
    activity_rate: "8.0%",
  },
  {
    product_name: "Weinbrenner Formal",
    quality: "Good",
    sales: 1342,
    avg_lifecycle_days: 218,
    repairs: 67,
    trade_ins: 40,
    top_failure_part: "General Wear",
    status: "Good",
    activity_rate: "8.0%",
  },
  {
    product_name: "Bata Comfit",
    quality: "Good",
    sales: 2876,
    avg_lifecycle_days: 234,
    repairs: 144,
    trade_ins: 86,
    top_failure_part: "Insole Cushioning",
    status: "Good",
    activity_rate: "8.0%",
  },
  {
    product_name: "North Star Running",
    quality: "Good",
    sales: 1124,
    avg_lifecycle_days: 338,
    repairs: 56,
    trade_ins: 34,
    top_failure_part: "Outsole Tread",
    status: "Good",
    activity_rate: "8.0%",
  },
];

function ProductManagement() {
  const poorProducts = productQualityData.filter((value) => value.quality === "Poor");
  const monitorProducts = productQualityData.filter((value) => value.quality === "Average");
  const goodProducts = productQualityData.filter((value) => value.quality === "Good");
  const totalSales = productQualityData.reduce((value, item) => value + item.sales, 0);
  productQualityData.reduce((value, item) => value + item.repairs, 0);
  productQualityData.reduce((value, item) => value + item.trade_ins, 0);
  productQualityData.reduce((value, item) => value + item.avg_lifecycle_days, 0) /
    productQualityData.length;
  const getActionStyle = (value) => {
    switch (value) {
      case "URGENT":
        return "bg-red-50 text-red-800 border-red-200";
      case "Monitor":
        return "bg-orange-50 text-orange-800 border-orange-200";
      case "Good":
        return "bg-green-50 text-green-800 border-green-200";
      default:
        return "bg-gray-50 text-gray-800 border-gray-200";
    }
  };
  const getQualityStyle = (value) => {
    switch (value) {
      case "Poor":
        return "bg-red-100 text-red-800";
      case "Average":
        return "bg-orange-100 text-orange-800";
      case "Good":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm font-medium">Total Products</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{productQualityData.length}</p>
          <p className="text-sm text-gray-600 mt-1">{totalSales.toLocaleString()} total sales</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <p className="text-gray-600 text-sm font-medium">Good Quality</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{goodProducts.length}</p>
          <p className="text-sm text-gray-600 mt-1">High performance products</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
          <p className="text-gray-600 text-sm font-medium">Need Monitoring</p>
          <p className="text-3xl font-bold text-orange-600 mt-2">{monitorProducts.length}</p>
          <p className="text-sm text-gray-600 mt-1">Average performance</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
          <p className="text-gray-600 text-sm font-medium">Critical Issues</p>
          <p className="text-3xl font-bold text-red-600 mt-2">{poorProducts.length}</p>
          <p className="text-sm text-gray-600 mt-1">Require urgent action</p>
        </div>
      </div>
      {poorProducts.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <TriangleAlert className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-red-900">Urgent Quality Issues Detected</h3>
              <p className="text-red-700 mt-1">
                {poorProducts.length} product(s) have critical quality issues with lifecycle below
                90 days and high activity rates (40%). Immediate action required to prevent revenue
                loss and brand damage.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#DC143C] to-red-600">
          <h2 className="text-xl font-bold text-white">Product Quality Management</h2>
          <p className="text-red-50 text-sm mt-1">Comprehensive product performance analysis</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Quality
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Sales
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Lifecycle (Days)
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Repairs
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Trade-ins
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Top Failure
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Activity Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {productQualityData.map((value, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 transition-colors ${value.status === "URGENT" ? "bg-red-50" : ""}`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {value.status === "URGENT" && (
                        <TriangleAlert className="w-4 h-4 text-red-600 mr-2" />
                      )}
                      <span className="font-medium text-gray-900">{value.product_name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getQualityStyle(value.quality)}`}
                    >
                      {value.quality}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">
                    {value.sales.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`font-semibold ${value.avg_lifecycle_days < 90 ? "text-red-600" : value.avg_lifecycle_days < 180 ? "text-orange-600" : "text-green-600"}`}
                    >
                      {value.avg_lifecycle_days}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-gray-500" />
                      <span
                        className={`font-medium ${value.repairs > 300 ? "text-red-600" : "text-gray-700"}`}
                      >
                        {value.repairs}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{value.trade_ins}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {value.top_failure_part}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`font-semibold ${parseFloat(value.activity_rate) > 30 ? "text-red-600" : parseFloat(value.activity_rate) > 15 ? "text-orange-600" : "text-green-600"}`}
                    >
                      {value.activity_rate}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getActionStyle(value.status)}`}
                    >
                      {value.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
          <div className="flex items-center gap-3 mb-4">
            <CircleAlert className="w-6 h-6 text-red-600" />
            <h3 className="text-lg font-bold text-gray-900">Critical Products</h3>
          </div>
          <div className="space-y-3">
            {poorProducts.map((value, index) => (
              <div key={index} className="p-3 bg-red-50 rounded-lg">
                <p className="font-semibold text-gray-900 text-sm">{value.product_name}</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-gray-600">
                    Lifecycle:{" "}
                    <span className="font-bold text-red-600">{value.avg_lifecycle_days}d</span>
                  </span>
                  <span className="text-gray-600">
                    Activity: <span className="font-bold text-red-600">{value.activity_rate}</span>
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Issue: {value.top_failure_part}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-orange-500" />
            <h3 className="text-lg font-bold text-gray-900">Monitor Closely</h3>
          </div>
          <div className="space-y-3">
            {monitorProducts.map((value, index) => (
              <div key={index} className="p-3 bg-orange-50 rounded-lg">
                <p className="font-semibold text-gray-900 text-sm">{value.product_name}</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-gray-600">
                    Lifecycle:{" "}
                    <span className="font-bold text-orange-600">{value.avg_lifecycle_days}d</span>
                  </span>
                  <span className="text-gray-600">
                    Activity:{" "}
                    <span className="font-bold text-orange-600">{value.activity_rate}</span>
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Sales: {value.sales.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
          <div className="flex items-center gap-3 mb-4">
            <CircleCheckBig className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-bold text-gray-900">Top Performers</h3>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {goodProducts.map((value, index) => (
              <div key={index} className="p-3 bg-green-50 rounded-lg">
                <p className="font-semibold text-gray-900 text-sm">{value.product_name}</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="text-gray-600">
                    Lifecycle:{" "}
                    <span className="font-bold text-green-600">{value.avg_lifecycle_days}d</span>
                  </span>
                  <span className="text-gray-600">
                    Activity:{" "}
                    <span className="font-bold text-green-600">{value.activity_rate}</span>
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Sales: {value.sales.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManagement;
