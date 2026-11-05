import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import CustomerInsights from "./pages/CustomerInsights";
import Dashboard from "./pages/Dashboard";
import InsightsActions from "./pages/InsightsActions";
import ProductManagement from "./pages/ProductManagement";
import ProductsInDemand from "./pages/ProductsInDemand";
import QualityAnalysis from "./pages/QualityAnalysis";
import RegionalAnalytics from "./pages/RegionalAnalytics";
import Sustainability from "./pages/Sustainability";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "quality", Component: QualityAnalysis },
      { path: "customers", Component: CustomerInsights },
      { path: "products", Component: ProductManagement },
      { path: "regional", Component: RegionalAnalytics },
      { path: "demand", Component: ProductsInDemand },
      { path: "sustainability", Component: Sustainability },
      { path: "insights", Component: InsightsActions },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
