import { StatCard } from "../components/StatCard";
import {
  CircleCheckBig,
  DollarSign,
  Package,
  RefreshCw,
  TrendingDown,
  TrendingUp,
  TriangleAlert,
  Users,
  Wrench,
} from "lucide-react";

const dashboardStats = {
  totalRevenue: 137e4,
  revenueChange: "-14.4%",
  mostPopularProduct: "Bata Comfit",
  mostPopularProductPurchases: 2876,
  loyalCustomers: 1200,
  loyalCustomerShare: "9.6%",
  mostDurableProduct: "North Star Running",
  mostDurableAvgLifecycleDays: 338,
  goodQualityProducts: 6,
  productsNeedAttention: 2,
  totalRepairs: 3847,
  totalTradeIns: 2156,
  repairRevenueSGD: 115410,
  repairMargin: "42%",
  tradeInRevenueSGD: 86240,
  tradeInMargin: "35%",
  circularProfitSGD: 78656,
};

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Performance Indicators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value={`SGD ${(dashboardStats.totalRevenue / 1e3).toFixed(0)}K`}
            icon={DollarSign}
            trend={dashboardStats.revenueChange}
            trendUp={false}
          />
          <StatCard
            title="Loyal Customers"
            value={dashboardStats.loyalCustomers}
            icon={Users}
            trend={`${dashboardStats.loyalCustomerShare} of total`}
            trendUp={false}
          />
          <StatCard
            title="Most Popular Product"
            value={dashboardStats.mostPopularProduct}
            icon={Package}
            trend={`${dashboardStats.mostPopularProductPurchases} purchases`}
            trendUp
          />
          <StatCard
            title="Most Durable Product"
            value={dashboardStats.mostDurableProduct}
            icon={CircleCheckBig}
            trend={`${dashboardStats.mostDurableAvgLifecycleDays} days avg lifecycle`}
            trendUp
          />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Product Quality Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Good Quality Products</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {dashboardStats.goodQualityProducts}
                </p>
              </div>
              <CircleCheckBig className="w-12 h-12 text-green-500 opacity-50" />
            </div>
          </div>
          <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Products Need Attention</p>
                <p className="text-3xl font-bold text-red-600 mt-2">
                  {dashboardStats.productsNeedAttention}
                </p>
              </div>
              <TriangleAlert className="w-12 h-12 text-red-500 opacity-50" />
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Repairs</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  {dashboardStats.totalRepairs.toLocaleString()}
                </p>
              </div>
              <Wrench className="w-12 h-12 text-blue-500 opacity-50" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6 border-l-4 border-green-500">
        <div className="flex items-start gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <RefreshCw className="w-8 h-8 text-green-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Circular Economy Performance</h2>
            <p className="text-gray-700 mb-6">
              Bata's repair and trade-in programs are generating significant revenue with strong
              margins.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-600 font-medium">Repair Revenue</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  SGD {dashboardStats.repairRevenueSGD.toLocaleString()}
                </p>
                <p className="text-sm text-green-600 font-semibold mt-1">
                  {dashboardStats.repairMargin} margin
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Trade-In Revenue</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  SGD {dashboardStats.tradeInRevenueSGD.toLocaleString()}
                </p>
                <p className="text-sm text-green-600 font-semibold mt-1">
                  {dashboardStats.tradeInMargin} margin
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Total Profit</p>
                <p className="text-2xl font-bold text-green-600 mt-1">
                  SGD {dashboardStats.circularProfitSGD.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mt-1">Combined programs</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">Trade-Ins Processed</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {dashboardStats.totalTradeIns.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 mt-1">Total units</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue Streams</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Product Sales</span>
                <span className="text-sm font-bold text-gray-900">
                  SGD{" "}
                  {(
                    (dashboardStats.totalRevenue -
                      dashboardStats.repairRevenueSGD -
                      dashboardStats.tradeInRevenueSGD) /
                    1e3
                  ).toFixed(0)}
                  K
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-[#DC143C] h-3 rounded-full"
                  style={{
                    width: `${(((dashboardStats.totalRevenue - dashboardStats.repairRevenueSGD - dashboardStats.tradeInRevenueSGD) / dashboardStats.totalRevenue) * 100).toFixed(0)}%`,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Repair Services</span>
                <span className="text-sm font-bold text-gray-900">
                  SGD {(dashboardStats.repairRevenueSGD / 1e3).toFixed(0)}K
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{
                    width: `${((dashboardStats.repairRevenueSGD / dashboardStats.totalRevenue) * 100).toFixed(0)}%`,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Trade-In Program</span>
                <span className="text-sm font-bold text-gray-900">
                  SGD {(dashboardStats.tradeInRevenueSGD / 1e3).toFixed(0)}K
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{
                    width: `${((dashboardStats.tradeInRevenueSGD / dashboardStats.totalRevenue) * 100).toFixed(0)}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Business Highlights</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Strong Circular Economy</p>
                <p className="text-sm text-gray-600">
                  38.5% profit margin on repair and trade-in programs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Product Excellence</p>
                <p className="text-sm text-gray-600">
                  North Star Running leads with 338-day avg lifecycle
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TriangleAlert className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Quality Attention Needed</p>
                <p className="text-sm text-gray-600">
                  2 products require immediate quality improvements
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingDown className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Revenue Challenges</p>
                <p className="text-sm text-gray-600">
                  14.4% decline vs last quarter - strategic action required
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
