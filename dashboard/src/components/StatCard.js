import React from "react";

const StatCard = ({
  title,
  value,
  change,
  changeText,
  icon,
  color,
  iconBgColor,
}) => {

  return (
    <div
      style={{ backgroundColor: color }}
      className="rounded-xl p-3 sm:p-4 border border-gray-100 min-w-0"
    >
      <div
        style={{ backgroundColor: iconBgColor }}
        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mb-2 sm:mb-3"
      >
        <span className="text-sm sm:text-base">{icon}</span>
      </div>

      {/* value */}
      <p className="text-base sm:text-lg lg:text-xl font-bold text-[#202750] mb-1 leading-tight break-words">
        {value}
      </p>

      {/* title */}
      <p className="text-[10px] sm:text-xs font-medium text-[#6D7183] mb-2 leading-snug break-words">
        {title}
      </p>

      {/* change */}
      <div className="flex flex-wrap items-center gap-x-1">
        <span
          className={`text-[10px] sm:text-xs font-semibold text-[#A2AEE8]`}
        >
          {change}
        </span>
        <span className="text-[10px] sm:text-xs text-[#A2AEE8]">
          {changeText}
        </span>
      </div>
    </div>
  );
};

export default StatCard;