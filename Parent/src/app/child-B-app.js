import React from "react";
const ChildMFE = React.lazy(() => import("child_b/layout"));

export const ChildAppB = () => {
  return (
    <div>
      <ChildMFE />
    </div>
  );
};
