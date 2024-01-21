import React from "react";
import { ChildAppA } from "./child-A-app";
import { ChildAppB } from "./child-B-app";
import ParentComponent from "./parent-app";

const LandingPage = () => {
  return (
    <div
      style={{ backgroundColor: "grey", height: "95vh", textAlign: "center" }}
    >
      <ParentComponent />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <ChildAppA />
        <ChildAppB />
      </div>
    </div>
  );
};

export default LandingPage;
