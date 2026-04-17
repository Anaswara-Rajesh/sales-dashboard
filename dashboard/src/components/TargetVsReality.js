import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { RiTicket2Line } from "react-icons/ri";

const TargetVsReality = () => {
  const data = [
    { month: "Jan", reality: 70, target: 95 },
    { month: "Feb", reality: 60, target: 85 },
    { month: "Mar", reality: 50, target: 105 },
    { month: "Apr", reality: 70, target: 85 },
    { month: "May", reality: 80, target: 120 },
    { month: "Jun", reality: 80, target: 120 },
    { month: "July", reality: 80, target: 120 },
  ];

  return (
    <div className="bg-white rounded-3xl border border-[#F5F5F7] p-4 w-full">
      <h3 className="text-base font-bold text-[#211B62] mb-4">
        Target vs Reality
      </h3>

      {/* Chart */}
      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={3}
            barCategoryGap="18%"
            margin={{ top: 5, right: 5, left: 10, bottom: 0 }}
          >
            <XAxis
              dataKey="month"
              tick={{ fontSize: 10, fill: "#9CA3AF" }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis hide />

            <Bar
              dataKey="reality"
              fill="#49C8A8"
              radius={[2, 2, 2, 2]}
              barSize={10}
              name="Reality Sales"
            />
            <Bar
              dataKey="target"
              fill="#F4C20D"
              radius={[2, 2, 2, 2]}
              barSize={10}
              name="Target Sales"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom cards */}
      <div className="mt-4 space-y-3 border-t border-gray-100 pt-3">
        {/* Reality */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E8FAF5] flex items-center justify-center">
              <ShoppingBagIcon className="w-4 h-4 text-[#49C8A8]" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-700">Reality Sales</p>
              <p className="text-[10px] text-gray-400">Global</p>
            </div>
          </div>
          <p className="text-sm font-bold text-[#49C8A8]">8.823</p>
        </div>

        {/* Target */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FFF8E1] flex items-center justify-center">
              <RiTicket2Line className="w-4 h-4 text-[#F4C20D]" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-700">Target Sales</p>
              <p className="text-[10px] text-gray-400">Commercial</p>
            </div>
          </div>
          <p className="text-sm font-bold text-[#F4C20D]">12.122</p>
        </div>
      </div>
    </div>
  );
};

export default TargetVsReality;