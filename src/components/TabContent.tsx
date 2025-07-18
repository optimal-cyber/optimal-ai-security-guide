"use client";

import React, { useState } from "react";

interface TabContentProps {
  tabs: string[];
  defaultTab?: string;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ 
  tabs, 
  defaultTab = "Overview",
  children 
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Find the content for the active tab
  const contentMap = React.Children.toArray(children).reduce((acc, child, index) => {
    if (React.isValidElement(child) && (child.props as any)['data-tab']) {
      acc[(child.props as any)['data-tab']] = child;
    }
    return acc;
  }, {} as Record<string, React.ReactElement>);

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-6 border-b border-slate-700 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 font-semibold transition-colors ${
              activeTab === tab 
                ? "text-teal-400 border-b-2 border-teal-400" 
                : "text-slate-400 hover:text-teal-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {contentMap[activeTab] || contentMap[tabs[0]]}
      </div>
    </div>
  );
};

export default TabContent; 