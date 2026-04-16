import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";

const VolumeVsServiceLevel = () => {
    const data = [
        { name: "Jan", volume: 200, services: 120 },
        { name: "Feb", volume: 260, services: 140 },
        { name: "Mar", volume: 220, services: 110 },
        { name: "Apr", volume: 180, services: 90 },
        { name: "May", volume: 140, services: 80 },
        { name: "Jun", volume: 160, services: 100 },
    ];

    const totalVolume = data.reduce((sum, d) => sum + d.volume, 0);
    const totalServices = data.reduce((sum, d) => sum + d.services, 0);

    return (
        <div className="bg-white rounded-3xl border border-[#F5F5F7] p-4 w-full">
            <h3 className="text-base font-bold text-[#211B62] mb-4">
                Volume vs Service Level
            </h3>

            {/* Chart */}
            <div className="h-32 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barCategoryGap="30%">
                        <XAxis
                            hide
                        />
                        <YAxis hide />

                        <Bar
                            dataKey="services"
                            stackId="a"
                            fill="#49C8A8"
                            radius={[2, 2, 0, 0]}
                            barSize={10}
                        />

                        <Bar
                            dataKey="volume"
                            stackId="a"
                            fill="#3B82F6"
                            radius={[2, 2, 0, 0]}
                            barSize={10}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">

                <div className="flex flex-col items-center flex-1 gap-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                        <span className="text-xs text-gray-500">Volume</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700">
                        {totalVolume.toLocaleString()}
                    </span>
                </div>

                <div className="w-px h-8 bg-gray-200" />

                <div className="flex flex-col items-center flex-1 gap-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#49C8A8]" />
                        <span className="text-xs text-gray-500">Services</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-700">
                        {totalServices.toLocaleString()}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default VolumeVsServiceLevel;