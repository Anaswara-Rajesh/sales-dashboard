import React from "react";
import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { IoSearch } from "react-icons/io5";

const Header = ({
  activeTab,
  setSidebarOpen,
  searchTerm,
  setSearchTerm,
}) => {
  const getTitle = (tab) => {
    switch (tab) {
      case "dashboard":
        return "Dashboard";
      case "leaderboard":
        return "Customers";
      case "orders":
        return "Orders";
      case "products":
        return "Products";
      case "sales":
        return "Sales Report";
      case "messages":
        return "Messages";
      case "settings":
        return "Settings";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="top-0 z-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">

          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <h1 className="text-xl font-semibold text-[#141D48]">
              {getTitle(activeTab)}
            </h1>
          </div>

          <div className="hidden sm:flex flex-1 justify-center">
            <div className="relative w-full max-w-sm">
              <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6466EF]" />
              <input
                type="text"
                placeholder={
                  activeTab === "leaderboard"
                    ? "Search by name or email..."
                    : "Search here..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm text-[#9196A9] rounded-lg focus:outline-none "
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#455161]">
              <div className="h-3.5 w-3.5 rounded-full overflow-hidden">
                <img
                  src="https://flagcdn.com/w20/us.png"
                  alt="USA"
                  className="h-full w-full object-cover"
                />
              </div>
              <span>Eng (US)</span>
              <ChevronDownIcon className="h-3 w-3 text-[#474749]" />
            </button>

            <button className="relative bg-[#FEF9F1] p-2 rounded-lg">
              <BellIcon className="h-4 w-4 text-[#FEBB4F]" />
              <span className="absolute top-1.5 right-1.5 h-1 w-1 bg-red-500 rounded-full"></span>
            </button>

            <button className="flex items-center gap-2 sm:gap-3">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="hidden sm:block text-left">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-gray-900">
                    Musfiq
                  </p>
                  <ChevronDownIcon className="h-3 w-3 text-[#474749]" />
                </div>
                <p className="text-xs text-[#A6A7BA]">Admin</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;