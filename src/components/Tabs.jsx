import React from 'react';
import '../styles/Tabs.css';

const Tabs = ({ tabs, activeTab, onTabChange , validatedTabs }) => {
  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        {tabs.map((tab) => (
         <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''} ${validatedTabs[tab.id] ? 'validated' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;