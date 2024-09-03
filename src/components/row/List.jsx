
import React from "react";
import "./row.css";
import Cards from "../cards/Cards";

const List = ({ title, data }) => {
  return (
    <div className="result-padding">
      <h1 className="result-heading">{title}</h1>
      <div className="wish-list-items">
        {data?.map((item) => (
          <Cards movie={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
