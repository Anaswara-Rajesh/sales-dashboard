import React from "react";
import StatCard from "./StatCard";
import VisitorChart from "./VisitorChart";
import TotalRevenue from "./TotalRevenue";
import CustomerSatisfaction from "./CustomerSatisfaction";
import TargetVsReality from "./TargetVsReality";
import TopProducts from "./TopProducts";
import SalesMap from "./SalesMap";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { FaUserPlus } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import { BiSolidReport } from "react-icons/bi";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { BiExport } from "react-icons/bi";
import VolumeVsServiceLevel from "./VolumeVsServiceLevel";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Sales",
      value: "$1k",
      change: "+8%",
      changeText: "from yesterday",
      icon: <HiOutlineChartBarSquare color="white" className="w-3.5 h-3.5" />,
      color: '#FFE2E6',
      iconBgColor: '#FA5A7C'
    },
    {
      title: "Total Order",
      value: "300",
      change: "+5%",
      changeText: "from yesterday",
      icon: <BiSolidReport color="white" className="w-3.5 h-3.5" />,
      color: '#FFF4DE',
      iconBgColor: '#FE947A'
    },
    {
      title: "Product Sold",
      value: "5",
      change: "+1.2%",
      changeText: "from yesterday",
      icon: <IoPricetag color="white" className="w-3.5 h-3.5" />,
      color: '#DCFCE7',
      iconBgColor: '#3BD855'
    },
    {
      title: "New Customers",
      value: "8",
      change: "+0.5%",
      changeText: "from yesterday",
      icon: <FaUserPlus color="white" className="w-3.5 h-3.5" />,
      color: '#F4E8FF',
      iconBgColor: '#BF83FF'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Row 1: Today's Sales Card and Visitor Insights Card side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#F9F9FA] p-4">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-base font-bold text-[#211B62]">Today's Sales</h2>
              <p className="text-xs font-semibold pt-0.5 text-[#AEAFBE] mt-0.5">Sales Summary</p>
            </div>
            <button className="flex items-center space-x-2 px-3 py-1.5 bg-white border border-[#D4E1EB] rounded-lg text-xs font-medium text-[#4A6882] hover:bg-gray-50 transition-colors">
              <BiExport className="h-2.5 w-2.5" />
              <span>Export</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-white rounded-2xl border border-[#F9F9FA] p-4">
          <VisitorChart />
        </div>
      </div>

      {/* Row 2: Total Revenue (wider), Customer Satisfaction and Target vs Reality */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-4">

        <div className="col-span-1 lg:col-span-5">
          <TotalRevenue />
        </div>

        <div className="col-span-1 lg:col-span-4">
          <CustomerSatisfaction />
        </div>

        <div className="col-span-1 lg:col-span-3">
          <TargetVsReality />
        </div>

      </div>

      {/* Row 3: Top Products and Sales Map - 2 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 pt-4">
        <div className="col-span-1 lg:col-span-5">
          <TopProducts />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <SalesMap />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <VolumeVsServiceLevel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;