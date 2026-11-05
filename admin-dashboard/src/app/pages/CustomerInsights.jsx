import { StatCard } from "../components/StatCard";
import {
  Briefcase,
  GraduationCap,
  Heart,
  House,
  ShoppingBag,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
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

const customerStats = {
  totalCustomers: 12500,
  loyalCustomers: 1200,
  totalPurchases: 17e3,
  avgPurchasesPerCustomer: 1.4,
  loyalCustomersCount: 1200,
  regularCustomersCount: 4375,
  newCustomersCount: 6250,
  workingAdults: 4200,
  families: 2800,
  students: 2100,
  seniors: 900,
  casualPurchases: 3283,
  sportsPurchases: 4705,
  formalPurchases: 2466,
};

function CustomerInsights() {
  const segmentData = [
    { name: "Loyal (5+ purchases)", value: customerStats.loyalCustomersCount, color: "#DC143C" },
    {
      name: "Regular (2-4 purchases)",
      value: customerStats.regularCustomersCount,
      color: "#F59E0B",
    },
    { name: "New (1 purchase)", value: customerStats.newCustomersCount, color: "#10B981" },
  ];
  const demographics = [
    { name: "Working Adults", value: customerStats.workingAdults, icon: Briefcase },
    { name: "Families", value: customerStats.families, icon: House },
    { name: "Students", value: customerStats.students, icon: GraduationCap },
    { name: "Seniors", value: customerStats.seniors, icon: User },
  ];
  const categoryData = [
    {
      name: "Sports",
      value: customerStats.sportsPurchases,
      percentage: ((customerStats.sportsPurchases / customerStats.totalPurchases) * 100).toFixed(1),
    },
    {
      name: "Casual",
      value: customerStats.casualPurchases,
      percentage: ((customerStats.casualPurchases / customerStats.totalPurchases) * 100).toFixed(1),
    },
    {
      name: "Formal",
      value: customerStats.formalPurchases,
      percentage: ((customerStats.formalPurchases / customerStats.totalPurchases) * 100).toFixed(1),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Customers"
          value={customerStats.totalCustomers.toLocaleString()}
          icon={Users}
        />
        <StatCard
          title="Loyal Customers"
          value={customerStats.loyalCustomers.toLocaleString()}
          icon={Heart}
          trend={`${((customerStats.loyalCustomers / customerStats.totalCustomers) * 100).toFixed(1)}% of total`}
          trendUp
        />
        <StatCard
          title="Total Purchases"
          value={customerStats.totalPurchases.toLocaleString()}
          icon={ShoppingBag}
        />
        <StatCard
          title="Avg Purchases/Customer"
          value={customerStats.avgPurchasesPerCustomer.toFixed(1)}
          icon={TrendingUp}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Customer Segmentation</h2>
          <p className="text-sm text-gray-600 mb-6">Distribution by purchase frequency</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={segmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name: name2, percent }) => `${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {segmentData.map((item, index) => (
                  <Cell key={`segment-${item.name}-${index}`} fill={item.color} />
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
            {segmentData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-medium text-gray-900">{item.name}</span>
                </div>
                <span className="text-lg font-bold text-gray-900">
                  {item.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Demographic Breakdown</h2>
          <p className="text-sm text-gray-600 mb-6">Customer distribution by demographic</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={demographics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "6px",
                }}
              />
              <Bar dataKey="value" fill="#DC143C" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Purchase Category Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoryData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-[#DC143C]"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-3xl font-bold text-[#DC143C] mb-2">
                {item.value.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">{item.percentage}% of total purchases</p>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#DC143C] h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Demographic Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demographics.map((demographic, index) => {
            const Icon = demographic.icon;
            const share = ((demographic.value / customerStats.totalCustomers) * 100).toFixed(1);
            return (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-[#DC143C]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{demographic.name}</h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold text-gray-900">
                      {demographic.value.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-600">({share}% of customers)</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#DC143C] to-red-600 rounded-lg shadow-md p-6 text-white">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 p-3 rounded-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Customer Loyalty Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div>
                <p className="text-red-100 text-sm">Loyal Customer Rate</p>
                <p className="text-3xl font-bold mt-1">
                  {((customerStats.loyalCustomers / customerStats.totalCustomers) * 100).toFixed(1)}
                  %
                </p>
              </div>
              <div>
                <p className="text-red-100 text-sm">Repeat Customer Rate</p>
                <p className="text-3xl font-bold mt-1">
                  {(
                    ((customerStats.loyalCustomersCount + customerStats.regularCustomersCount) /
                      customerStats.totalCustomers) *
                    100
                  ).toFixed(1)}
                  %
                </p>
              </div>
              <div>
                <p className="text-red-100 text-sm">New Customer Rate</p>
                <p className="text-3xl font-bold mt-1">
                  {((customerStats.newCustomersCount / customerStats.totalCustomers) * 100).toFixed(
                    1,
                  )}
                  %
                </p>
              </div>
            </div>
            <p className="text-red-50 text-sm mt-4">
              Focus on converting new customers to regular buyers and regular buyers to loyal
              customers to increase lifetime value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInsights;
