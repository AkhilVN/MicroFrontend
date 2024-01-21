import React from "react";
const ChildMFE = React.lazy(() => import("child_a/layout"));

export const ChildAppA = () => {
  return (
    <div>
      <ChildMFE />
    </div>
  );
};
