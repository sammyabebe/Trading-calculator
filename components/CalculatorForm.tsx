import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onCalculate: (data: any) => void;
}

const CalculatorForm: React.FC<Props> = ({ onCalculate }) => {
  const [balance, setBalance] = useState(2500);
  const [minDays, setMinDays] = useState(2);
  const [dailyLoss, setDailyLoss] = useState(4);
  const [trailingLoss, setTrailingLoss] = useState(6);
  const [profitTarget, setProfitTarget] = useState(10);
  const [tradesPerDay, setTradesPerDay] = useState(2);

  const handleCalculate = () => {
    onCalculate({
      balance,
      minDays,
      dailyLoss,
      trailingLoss,
      profitTarget,
      tradesPerDay,
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-indigo-500/30 w-full max-w-md"
      >
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl opacity-50"></div>

        <h2 className="text-3xl font-bold text-white text-center mb-8 tracking-tight">
          🚀 Trading Calculator
        </h2>

        <div className="flex flex-col space-y-6">
          {[
            { label: "Account Balance ($)", value: balance, setter: setBalance },
            { label: "Min Trading Days", value: minDays, setter: setMinDays },
            { label: "Max Daily Loss (%)", value: dailyLoss, setter: setDailyLoss },
            { label: "Max Trailing Loss (%)", value: trailingLoss, setter: setTrailingLoss },
            { label: "Profit Target (%)", value: profitTarget, setter: setProfitTarget },
            { label: "Trades Per Day", value: tradesPerDay, setter: setTradesPerDay },
          ].map((field, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <label className="text-indigo-200 font-medium mb-2">{field.label}</label>
              <input
                type="number"
                value={field.value}
                onChange={(e) => field.setter(Number(e.target.value))}
                className="p-3 rounded-xl bg-gray-800/50 text-white border border-indigo-500/50 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all duration-300 placeholder-gray-500"
                placeholder={field.label}
              />
            </motion.div>
          ))}
        </div>

        <motion.button
          onClick={handleCalculate}
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 w-full py-3 bg-gradient-to-r from-pink-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          ⚡ Calculate
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CalculatorForm;