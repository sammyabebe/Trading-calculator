import { motion } from "framer-motion";

interface ResultsProps {
  results: any;
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-indigo-900 to-black p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-indigo-500/30 w-full max-w-lg"
      >
        {/* Glowing Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-3xl opacity-40"></div>

        <h3 className="text-3xl font-bold text-white mb-8 text-center tracking-tight">
          🎯 Trading Results
        </h3>

        <div className="space-y-5 text-lg">
          {[
            { label: "📉 Max Daily Loss", value: results.dailyLoss, color: "text-red-400" },
            { label: "🚨 Max Trailing Loss", value: results.trailingLoss, color: "text-orange-400" },
            { label: "💰 Profit Target", value: results.profitTarget, color: "text-green-400" },
            { label: "⚖️ RR Needed", value: results.rrNeeded, color: "text-purple-400", suffix: ":1" },
          ].map((item, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="text-indigo-200 font-medium"
            >
              {item.label}:{" "}
              <span className={`${item.color} font-bold`}>
                ${item.value.toFixed(2)}
                {item.suffix || ""}
              </span>
            </motion.p>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 w-full py-3 bg-gradient-to-r from-pink-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          🔄 Recalculate
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Results;