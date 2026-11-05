import {
  Activity,
  ChartColumn,
  Leaf,
  Lightbulb,
  Map as MapIcon,
  Package,
  TrendingUp,
  Users,
} from "lucide-react";
import { NavLink, Outlet } from "react-router";

const navItems = [
  { path: "/", label: "Dashboard", icon: ChartColumn },
  { path: "/quality", label: "Quality Analysis", icon: Activity },
  { path: "/customers", label: "Customer Insights", icon: Users },
  { path: "/products", label: "Product Management", icon: Package },
  { path: "/regional", label: "Regional Analytics", icon: MapIcon },
  { path: "/demand", label: "Products in Demand", icon: TrendingUp },
  { path: "/sustainability", label: "Sustainability", icon: Leaf },
  { path: "/insights", label: "Insights & Actions", icon: Lightbulb },
];

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#DC143C] to-red-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-lg">
              <Activity className="w-8 h-8 text-[#DC143C]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Bata Analytics Dashboard</h1>
              <p className="text-red-50 mt-1">Comprehensive Business Intelligence Platform</p>
            </div>
          </div>
        </div>
        <nav className="bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-0.5 overflow-x-auto">
              {navItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-3 text-xs font-medium whitespace-nowrap transition-all ${isActive ? "bg-white text-[#DC143C] border-b-2 border-[#DC143C]" : "text-white hover:bg-white/10"}`
                  }
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2026 Bata Analytics System | Data updated: March 31, 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
