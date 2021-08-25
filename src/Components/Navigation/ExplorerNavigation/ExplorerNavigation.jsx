import React from "react";
import { Dropdown } from "./Dropdown";

export const ExplorerNavigation = () => {
  return (
    <div className="flex justify-around items-center relative">
      <Dropdown label="Sort by" options={["Highest price", "Lowest price", "Trending", "Size", "A-Z"]} />
      <Dropdown label="Filter" options={["On sale", "Limited edition", "HOT", "International shipping"]} />
    </div>
  );
};
