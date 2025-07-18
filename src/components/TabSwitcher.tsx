"use client";

import React, { useState } from "react";

interface TabSwitcherProps {
  tabs: string[];
  defaultTab?: string;
  onTabChange?: (tab: string) => void;
  className?: string;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ 
  tabs, 
  defaultTab = "Overview", 
  onTabChange,
  className = ""
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className={`flex gap-6 border-b border-slate-700 mb-6 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 font-semibold transition-colors ${
            activeTab === tab 
              ? "text-teal-400 border-b-2 border-teal-400" 
              : "text-slate-400 hover:text-teal-300"
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher; 