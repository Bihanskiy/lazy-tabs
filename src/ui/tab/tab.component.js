import React from "react";
import "./style.css";

const Tab = ({
  id,
  onClick,
  isSelected,
  children,
}) => {
  return (
    <button
      className="tab"
      role="tab"
      id={`tab-${id}`}
      aria-selected={isSelected ? "true" : "false"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Tab;