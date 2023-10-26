import React from "react";

import "./style.css";

const TabPanel = ({ id, children }) => {
  return (
    <div
      className="tabpanel"
      role="tabpanel"
      id={`tab-panel-${id}`}
      aria-labelledby={`tab-${id}`}
    >
      {children}
    </div>
  );
};

export default TabPanel;