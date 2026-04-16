import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import DataTable from "./components/DataTable";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { IoSettingsOutline } from "react-icons/io5";
import { RiShoppingBag4Line, RiMessage2Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { PiChartLineLight } from "react-icons/pi";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;

      case "leaderboard":
        return <DataTable searchTerm={searchTerm} />;

      case "orders":
        return <OrdersPlaceholder />;

      case "products":
        return <ProductsPlaceholder />;

      case "sales":
        return <SalesPlaceholder />;

      case "messages":
        return <MessagesPlaceholder />;

      case "settings":
        return <SettingsPlaceholder />;

      default:
        return <Dashboard />;
    }
  };

  const SalesPlaceholder = () => (
    <div className="flex items-center justify-center h-96 bg-white rounded-xl">
      <div className="text-center">
        <PiChartLineLight className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 mt-2">Coming Soon</p>
      </div>
    </div>
  );

  const OrdersPlaceholder = () => (
    <div className="flex items-center justify-center h-96 bg-white rounded-xl">
      <div className="text-center">
        <BsCart3 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 mt-2">Coming Soon</p>
      </div>
    </div>
  );

  const ProductsPlaceholder = () => (
    <div className="flex items-center justify-center h-96 bg-white rounded-xl">
      <div className="text-center">
        <RiShoppingBag4Line className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 mt-2">Coming Soon</p>
      </div>
    </div>
  );

  const MessagesPlaceholder = () => (
    <div className="flex items-center justify-center h-96 bg-white rounded-xl">
      <div className="text-center">
        <RiMessage2Line className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 mt-2">Coming Soon</p>
      </div>
    </div>
  );

  const SettingsPlaceholder = () => (
    <div className="flex items-center justify-center h-96 bg-white rounded-xl">
      <div className="text-center">
        <IoSettingsOutline className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 mt-2">Coming Soon</p>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          activeTab={activeTab}
          setSidebarOpen={setSidebarOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;