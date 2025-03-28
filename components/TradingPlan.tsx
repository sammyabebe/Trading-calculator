import { motion } from "framer-motion";

interface DayPlan {
  day: string;
  profit: number;
  lotSize: number;
  rr: number;
}

interface TradingPlanProps {
  plan: DayPlan[];
}

const TradingPlan = ({ plan }: TradingPlanProps) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-indigo-900 to-black p-6">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-indigo-500/30 w-full max-w-2xl"
      >
        {/* Glowing Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-3xl opacity-40"></div>

        <h3 className="text-3xl font-bold text-white mb-8 text-center tracking-tight">
          📆 Daily Trading Plan
        </h3>

        <div className="overflow-hidden rounded-xl shadow-inner">
          <motion.table
            className="w-full border-collapse text-white bg-gray-800/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <thead>
              <tr className="bg-indigo-900/70 text-indigo-100">
                <th className="border border-indigo-500/50 p-4 font-semibold">Day</th>
                <th className="border border-indigo-500/50 p-4 font-semibold">Profit Target</th>
                <th className="border border-indigo-500/50 p-4 font-semibold">Lot Size</th>
                <th className="border border-indigo-500/50 p-4 font-semibold">RR Needed</th>
              </tr>
            </thead>
            <tbody>
              {plan.map((day, index) => (
                <motion.tr
                  key={index}
                  className="hover:bg-indigo-800/30 transition-all duration-200"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <td className="border border-indigo-500/50 p-4">{day.day}</td>
                  <td className="border border-indigo-500/50 p-4 text-green-400">
                    ${day.profit.toFixed(2)}
                  </td>
                  <td className="border border-indigo-500/50 p-4">{day.lotSize} lot</td>
                  <td className="border border-indigo-500/50 p-4 text-purple-400">
                    {day.rr}:1
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </motion.div>
    </div>
  );
};

export default TradingPlan;