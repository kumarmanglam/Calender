import React from "react";
import "./TooltipStyle.css";

function Tooltip({ children, content }) {
  return (
    <div className="tooltip-container">
      {children}
      <span className="tooltip-content">{content}</span>
    </div>
  );
}

export default Tooltip;
