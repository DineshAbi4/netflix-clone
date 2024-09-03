import React from "react";
import "./heading.css";

const Heading = ({ title, size, align, color,content }) => {
  return (
    <h1 className={`${size || ""} ${align || ""} ${color || ""}`}>{title}
    {content}
    </h1>
  );
};

export default Heading;