
import React from "react";
import "./heading.css";

const Content = ({ content, color, size, className }) => {
  return (
    <h4 className={`medium-with-bold ${className || ""} ${color || ""} ${size||""}`}>
      {content}
    </h4>
  );
};

export default Content;
