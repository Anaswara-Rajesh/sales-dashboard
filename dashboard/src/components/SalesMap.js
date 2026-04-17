import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const SalesMap = () => {
  const countries = [
    { name: "United States of America", sales: 12450, color: "#F59E0B" },
    { name: "China", sales: 9800, color: "#8B5CF6" },
    { name: "Brazil", sales: 7200, color: "#F43F5E" },
    { name: "India", sales: 6500, color: "#14B8A6" },
    { name: "Australia", sales: 5000, color: "#10B981" },
    { name: "South Africa", sales: 4200, color: "#3B82F6" },
  ];

  const maxSales = Math.max(...countries.map((c) => c.sales));

  return (
    <div className="bg-white rounded-2xl border border-[#F1F1F4] p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-bold text-[#211B62] mb-4]">
          Sales Mapping by Country
        </h3>
      </div>

      {/* Map */}
      <div className="bg-gray-50 rounded-xl">
        <div className="h-[220px] w-full">
          <ComposableMap
            projectionConfig={{
              scale: 170,
              center: [70, -10],
            }}
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
              {({ geographies }) =>
                geographies.map((geo) => {
                  const country = countries.find(
                    (c) => c.name === geo.properties.name
                  );

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={country ? country.color : "#E5E7EB"}
                      stroke="#ffffff"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: {
                          fill: country ? "#6366F1" : "#D1D5DB",
                          outline: "none",
                        },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};

export default SalesMap;