function StatCard({ title, value, icon: Icon, trend, trendUp }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#DC143C]">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {trend && (
            <p className={`text-sm mt-2 ${trendUp ? "text-green-600" : "text-red-600"}`}>{trend}</p>
          )}
        </div>
        <div className="bg-red-50 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-[#DC143C]" />
        </div>
      </div>
    </div>
  );
}

export { StatCard };
