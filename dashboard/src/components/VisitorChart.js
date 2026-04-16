import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const VisitorChart = () => {
  const data = [
    { month: "Jan", loyal: 320, newCustomer: 250, unique: 300 },
    { month: "Feb", loyal: 340, newCustomer: 220, unique: 350 },
    { month: "Mar", loyal: 300, newCustomer: 180, unique: 360 },
    { month: "Apr", loyal: 230, newCustomer: 140, unique: 310 },
    { month: "May", loyal: 180, newCustomer: 160, unique: 240 },
    { month: "Jun", loyal: 200, newCustomer: 250, unique: 210 },
    { month: "Jul", loyal: 260, newCustomer: 340, unique: 220 },
    { month: "Aug", loyal: 310, newCustomer: 360, unique: 280 },
    { month: "Sep", loyal: 320, newCustomer: 330, unique: 320 },
    { month: "Oct", loyal: 280, newCustomer: 290, unique: 300 },
    { month: "Nov", loyal: 220, newCustomer: 220, unique: 250 },
    { month: "Dec", loyal: 150, newCustomer: 170, unique: 200 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md">
          <p className="font-semibold text-sm mb-2">{label}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm">
      <h3 className="text-base font-bold text-[#211B62] mb-4">
        Visitor Insights
      </h3>

      <div className="h-40 w-full translate-x-[-40px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Line
              type="natural"
              dataKey="loyal"
              stroke="#A600FE"
              strokeWidth={2.5}
              strokeLinecap="round"
              dot={false}
              activeDot={{
                r: 5,
                fill: "#A600FE",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />

            <Line
              type="natural"
              dataKey="newCustomer"
              stroke="#EF4444"
              strokeWidth={2.5}
              strokeLinecap="round"
              dot={false}
              activeDot={{
                r: 5,
                fill: "#EF4444",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />

            <Line
              type="natural"
              dataKey="unique"
              stroke="#22C55E"
              strokeWidth={2.5}
              strokeLinecap="round"
              dot={false}
              activeDot={{
                r: 5,
                fill: "#22C55E",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-3 text-xs text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#A600FE]"></span>
          Loyal Customers
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#F04444]"></span>
          New Customers
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-[#45DA5E]"></span>
          Unique Customers
        </div>
      </div>
    </div>
  );
};

export default VisitorChart;