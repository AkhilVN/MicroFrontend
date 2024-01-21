import React from "react";
import data from "./data.json";

const ParentComponent = () => {
  return (
    <div style={{ backgroundColor: "grey", textAlign: "center" }}>
      <h1>Welcome to the Parent Page</h1>
      <h2>Name: {data.company.name}</h2>
    </div>
  );
};

export default ParentComponent;
