import React from "react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const CustomerSatisfaction = () => {
  const data = [
    { name: "1", lastMonth: 2800, thisMonth: 3900 },
    { name: "2", lastMonth: 3100, thisMonth: 3500 },
    { name: "3", lastMonth: 2300, thisMonth: 3700 },
    { name: "4", lastMonth: 2300, thisMonth: 3200 },
    { name: "5", lastMonth: 2800, thisMonth: 3800 },
    { name: "6", lastMonth: 2750, thisMonth: 2900 },
    { name: "7", lastMonth: 3300, thisMonth: 4504 },
  ];

  return (
    <div className="bg-white rounded-3xl p-4 shadow-sm w-full">
      <h3 className="text-base font-bold text-[#211B62]">
        Customer Satisfaction
      </h3>

      <div className="h-36 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 5, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34D399" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#34D399" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="blueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis hide />
            <YAxis hide domain={[2000, 5000]} />

            {/* Green*/}
            <Area
              type="natural"
              dataKey="thisMonth"
              stroke="#34D399"
              strokeWidth={2}
              fill="url(#greenFill)"
              dot={{ r: 2.5, fill: "#34D399" }}
              activeDot={{ r: 4 }}
              name="This Month"
            />

            {/* Blue*/}
            <Area
              type="natural"
              dataKey="lastMonth"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#blueFill)"
              dot={{ r: 2.5, fill: "#3B82F6" }}
              activeDot={{ r: 4 }}
              name="Last Month"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="border-t border-gray-100 mt-6 pt-4 flex justify-center gap-8">
        {/* Last Month */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <div className="relative w-5 h-2 flex items-center">
              <span className="w-full h-[2px] bg-[#0495FC] rounded-full"></span>
              <span className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0495FC]"></span>
            </div>
            <span>Last Month</span>
          </div>
          <p className="text-sm font-bold text-gray-700 mt-1">$3,004</p>
        </div>

        {/* This Month */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <div className="relative w-5 h-2 flex items-center">
              <span className="w-full h-[2px] bg-[#0DE09B] rounded-full"></span>
              <span className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#0DE09B]"></span>
            </div>
            <span>This Month</span>
          </div>
          <p className="text-sm font-bold text-gray-700 mt-1">$4,504</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;