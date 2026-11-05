import { createBrowserRouter, RouterProvider } from "react-router";
import CareServices from "./pages/CareServices";
import Home from "./pages/Home";
import InStoreMap from "./pages/InStoreMap";
import Login from "./pages/Login";
import Membership from "./pages/Membership";
import RepairResults from "./pages/RepairResults";
import RepairScanner from "./pages/RepairScanner";
import ShoeDetail from "./pages/ShoeDetail";
import ShoeQRCode from "./pages/ShoeQRCode";
import TradeIn from "./pages/TradeIn";
import Wallet from "./pages/Wallet";

const router = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "/home", Component: Home },
  { path: "/shoe/:shoeId", Component: ShoeDetail },
  { path: "/shoe/:shoeId/qr", Component: ShoeQRCode },
  { path: "/shoe/:shoeId/care-services", Component: CareServices },
  { path: "/repair-scanner", Component: RepairScanner },
  { path: "/repair-results", Component: RepairResults },
  { path: "/trade-in", Component: TradeIn },
  { path: "/membership", Component: Membership },
  { path: "/in-store-map", Component: InStoreMap },
  { path: "/wallet", Component: Wallet },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
