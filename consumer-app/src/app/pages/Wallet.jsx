import {
  ArrowLeft,
  Clock,
  Gift,
  ShoppingBag,
  TrendingUp,
  Wallet as WalletIcon,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Wallet() {
  const navigate = useNavigate();
  const [credits, setCredits] = useState(0);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const storedCredits = localStorage.getItem("bata_credits");
    const storedTransactions = localStorage.getItem("bata_transactions");
    if (storedCredits) {
      setCredits(JSON.parse(storedCredits));
    }
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white max-w-[430px] mx-auto pb-8">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Bata Wallet</h1>
            <p className="text-xs text-gray-500">{"Your credits & transactions"}</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white mb-6 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-4 text-red-100">
            <WalletIcon className="w-5 h-5" />
            <span className="text-sm font-semibold">Available Balance</span>
          </div>
          <div className="text-5xl font-bold mb-1">{credits}</div>
          <p className="text-red-200 text-sm">Bata Credits • 1 Credit = $0.10</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center">
              <TrendingUp className="w-5 h-5 mx-auto mb-1" />
              <div className="text-lg font-bold">
                {transactions
                  .filter((transaction) => transaction.type === "earned")
                  .reduce((acc, transaction) => acc + transaction.amount, 0)}
              </div>
              <div className="text-[11px] text-red-200">Total Earned</div>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center">
              <ShoppingBag className="w-5 h-5 mx-auto mb-1" />
              <div className="text-lg font-bold">
                {transactions
                  .filter((transaction) => transaction.type === "spent")
                  .reduce((acc, transaction) => acc + transaction.amount, 0)}
              </div>
              <div className="text-[11px] text-red-200">Total Spent</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border-2 border-gray-200 rounded-2xl p-5 mb-6"
        >
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Gift className="w-5 h-5 text-red-600" />
            How to Earn Credits
          </h3>
          <div className="space-y-3">
            {[
              { label: "Trade-in shoes", detail: "Up to 50% retail value", icon: "♻️" },
              { label: "Loyalty bonus", detail: "+5 credits per trade-in", icon: "⭐" },
              { label: "Age bonus", detail: "+10 for shoes 1+ year old", icon: "🏆" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-red-600" />
            Transaction History
          </h3>
          {transactions.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center">
              <WalletIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-1">No transactions yet</h4>
              <p className="text-sm text-gray-500">
                Trade in your first shoe to earn Bata Credits!
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {transactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === "earned" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"}`}
                    >
                      {transaction.type === "earned" ? (
                        <TrendingUp className="w-5 h-5" />
                      ) : (
                        <ShoppingBag className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {transaction.description}
                      </p>
                      {transaction.shoeModel && (
                        <p className="text-xs text-gray-500">{transaction.shoeModel}</p>
                      )}
                      <p className="text-[11px] text-gray-400">
                        {new Date(transaction.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`font-bold ${transaction.type === "earned" ? "text-green-600" : "text-orange-600"}`}
                  >
                    {transaction.type === "earned" ? "+" : "-"}
                    {transaction.amount}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Wallet;
