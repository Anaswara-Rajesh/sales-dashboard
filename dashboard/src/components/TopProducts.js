import React from "react";

const TopProducts = () => {
  const products = [
    {
      id: "01",
      name: "Home Decor Range",
      popularity: 45,
      color: "#34A4F4",
      bg: "#EAF6FE",
      badgeBg: "#EAF6FE",
      badgeText: "#34A4F4",
    },
    {
      id: "02",
      name: "Disney Princess Pink Bag 18'",
      popularity: 29,
      color: "#36D6A3",
      bg: "#EAFBF5",
      badgeBg: "#EAFBF5",
      badgeText: "#36D6A3",
    },
    {
      id: "03",
      name: "Bathroom Essentials",
      popularity: 18,
      color: "#A855F7",
      bg: "#F5ECFE",
      badgeBg: "#F5ECFE",
      badgeText: "#A855F7",
    },
    {
      id: "04",
      name: "Apple Smartwatches",
      popularity: 25,
      color: "#F59E0B",
      bg: "#FFF7E8",
      badgeBg: "#FFF7E8",
      badgeText: "#F59E0B",
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-[#F5F5F7] p-5 w-full">
      <h3 className="text-base font-bold text-[#211B62] mb-5">Top Products</h3>

      <div className="w-full">
        {/* Header */}
        <div className="grid grid-cols-[30px_1.6fr_1.3fr_60px] items-center text-[11px] text-gray-400 pb-3">
          <span>#</span>
          <span>Name</span>
          <span>Popularity</span>
          <span className="text-right">Sales</span>
        </div>

        {/* Rows */}
        <div className="space-y-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-[30px_1.6fr_1.3fr_60px] items-center"
            >
              {/* Index */}
              <span className="text-xs text-gray-400">{product.id}</span>

              {/* Name */}
              <p className="text-xs text-gray-600 leading-4 pr-3">
                {product.name}
              </p>

              {/* Popularity bar */}
              <div className="pr-4">
                <div
                  className="w-full h-[5px] rounded-full overflow-hidden"
                  style={{ backgroundColor: product.bg }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${product.popularity}%`,
                      backgroundColor: product.color,
                    }}
                  />
                </div>
              </div>

              {/* Sales badge */}
              <div className="flex justify-end">
                <span
                  className="text-[10px] font-medium px-2 py-[2px] rounded-md border"
                  style={{
                    color: product.badgeText,
                    backgroundColor: product.badgeBg,
                    borderColor: product.badgeText + "40",
                  }}
                >
                  {product.popularity}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;