import React from "react";
import { FaFire } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiBarChartLine, RiShoppingBag4Line, RiMessage2Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { PiChartLineLight } from "react-icons/pi";
import { TbChartPieFilled, TbLogout } from "react-icons/tb";

const Sidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: TbChartPieFilled },
    { id: "leaderboard", name: "Leaderboard", icon: RiBarChartLine },
    { id: "orders", name: "Order", icon: BsCart3 },
    { id: "products", name: "Products", icon: RiShoppingBag4Line },
    { id: "sales", name: "Sales Report", icon: PiChartLineLight },
    { id: "messages", name: "Messages", icon: RiMessage2Line },
    { id: "settings", name: "Settings", icon: IoSettingsOutline },
    { id: "signout", name: "Sign Out", icon: TbLogout },
  ];

const handleMenuClick = (id) => {
  setActiveTab(id);
  setSidebarOpen(false);
};

 const isActive = (id) => activeTab === id;

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64 bg-white flex flex-col
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:flex shadow-xl lg:shadow-none
          overflow-y-auto
        `}
      >
        <div className="sticky top-0 z-10 bg-white pt-8 pb-6 px-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="h-9 w-9 bg-[#5D60EF] rounded-lg flex items-center justify-center">
              <FaFire className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#1A1F3F] tracking-tight">
              Dabang
            </span>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-6 py-4 space-y-2.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.id);

            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`
                  w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200
                  ${active
                    ? "bg-[#5D60EF] text-white"
                    : "text-[#6B6E8A] hover:bg-gray-50 hover:text-[#5D60EF]"
                  }
                `}
              >
                <Icon
                  className={`h-5 w-5 ${active ? "text-white" : "text-[#6B6E8A]"
                    }`}
                />
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Pro Card */}
        <div className="px-6 py-4 pb-10 mt-6 text-center">
          <div className="bg-gradient-to-br from-[#5D60EF] to-[#4A4DD6] rounded-2xl px-6 py-5 shadow-lg">

            <div className="flex items-center justify-center mb-3">
              <div className="h-9 w-9 bg-white rounded-xl flex items-center justify-center">
                <FaFire className="h-4 w-4 text-[#5D60EF]" />
              </div>
            </div>

            <span className="text-white font-semibold text-base">
              Dabang Pro
            </span>

            <p className="text-white/80 text-xs mb-4 mt-2 leading-relaxed">
              Get access to all features on tetumbas
            </p>

            <button className="w-full bg-white text-[#5D60EF] text-xs font-semibold py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Get Pro
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;