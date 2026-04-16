import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const TotalRevenue = () => {
  const data = [
    { day: "Monday", online: 14, offline: 13 },
    { day: "Tuesday", online: 17.5, offline: 12 },
    { day: "Wednesday", online: 6, offline: 23 },
    { day: "Thursday", online: 16, offline: 7 },
    { day: "Friday", online: 12, offline: 11 },
    { day: "Saturday", online: 17, offline: 14 },
    { day: "Sunday", online: 21, offline: 10.5 },
  ];

  const formatYAxis = (value) => {
    return `${value}k`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md">
          <p className="font-semibold text-sm text-gray-900 mb-2">{label}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl border border-[#F9F9FA] p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-bold text-[#211B62]">Total Revenue</h3>
      </div>

      {/* Bar Chart */}
      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 5 }}
            barGap={5}
            barCategoryGap={30}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#E5E7EB" 
              vertical={false}
              horizontal={true}
            />
            <XAxis 
              dataKey="day" 
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              axisLine={{ stroke: "#E5E7EB" }}
              tickLine={false}
              interval={0}
            />
            <YAxis 
              domain={[0, 25]}
              ticks={[0, 5, 10, 15, 20, 25]}
              tickFormatter={formatYAxis}
              tick={{ fontSize: 10, fill: "#9CA3AF" }}
              axisLine={false}
              tickLine={false}
              width={25}
              dy={5}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="online" 
              name="Online Sales"
              fill="#0094FE" 
              radius={[2, 2, 0, 0]}
              barSize={12}
            />
            <Bar 
              dataKey="offline" 
              name="Offline Sales"
              fill="#00E097" 
              radius={[2, 2, 0, 0]}
              barSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#0094FE]"></div>
          <span className="text-xs text-gray-600">Online Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00E097]"></div>
          <span className="text-xs text-gray-600">Offline Sales</span>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;