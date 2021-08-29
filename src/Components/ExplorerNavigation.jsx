import React from "react";
import { DropdownMultiple } from "./DropdownMultiple/DropdownMultiple";

export const ExplorerNavigation = (props) => {
  return (
    <div className="flex justify-around items-center relative">
      <DropdownMultiple
        title="Sort by"
        options={["Highest price", "Lowest price", "Trending", "Size", "A-Z"]}
        getActiveOptions={props.getActiveOptions}
      />
      <DropdownMultiple
        title="Filters"
        options={[
          "On sale",
          "Limited edition",
          "International shipping",
          "Free shipping",
          "Summer 2020 edition",
          "Winter edition",
        ]}
        getActiveOptions={props.getActiveOptions}
      />
    </div>
  );
};
