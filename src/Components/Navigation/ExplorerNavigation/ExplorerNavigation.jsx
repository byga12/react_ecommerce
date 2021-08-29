import React from "react";
import { Dropdown } from "./Dropdown";

export const ExplorerNavigation = (props) => {
  return (
    <div className="flex justify-around items-center relative">
      <Dropdown
        border={true}
        options={["Highest price", "Lowest price", "Trending", "Size", "A-Z"]}
        label={
          <h2 className="bg-gray-100 select-none border py-2 px-6 mb-1 font-semibold whitespace-pre">
            Sort by
          </h2>
        }
      />
      <Dropdown
        border={true}
        options={[
          "On sale",
          "Limited edition",
          "International shipping",
          "Free shipping",
          "Edición verano 2020",
          "Edición invierno",
        ]}
        label={
          <h2 className="bg-gray-100 select-none border py-2 px-6 mb-1 font-semibold whitespace-pre">
            Filter
          </h2>
        }
      />
    </div>
  );
};
