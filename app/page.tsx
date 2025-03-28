import { useState } from "react";
import CalculatorForm from "@/components/CalculatorForm";
import Results from "@/components/Results";
import TradingPlan from "@/components/TradingPlan";

export default function Home() {
  const [results, setResults] = useState<any>(null);
  const [plan, setPlan] = useState<any[]>([]);

  const calculate = (data: any) => {
    const { balance, minDays, dailyLoss, trailingLoss, profitTarget, tradesPerDay } = data;

    const dailyLossAmt = balance * (dailyLoss / 100);
    const trailingLossAmt = balance * (trailingLoss / 100);
    const profitTargetAmt = balance * (profitTarget / 100);
    const rrNeeded = profitTargetAmt / (balance * 0.01);

    const dailyProfit = profitTargetAmt / minDays;
    let newPlan = [];

    for (let i = 1; i <= minDays; i++) {
      newPlan.push({
        day: i,
        profit: dailyProfit,
        lotSize: 0.25,
        rr: (dailyProfit / (balance * 0.01 * tradesPerDay)).toFixed(2),
      });
    }

    setResults({ dailyLoss: dailyLossAmt, trailingLoss: trailingLossAmt, profitTarget: profitTargetAmt, rrNeeded });
    setPlan(newPlan);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <CalculatorForm onCalculate={calculate} />
      {results && <Results results={results} />}
      {plan.length > 0 && <TradingPlan plan={plan} />}
    </div>
  );
}