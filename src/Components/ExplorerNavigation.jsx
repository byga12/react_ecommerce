import React from "react";
//DropdownMultiple es un componente que permite crear menús desplegables con la posibilidad de seleccionar múltiples opciones en simultáneo, además, con cada cambio en el menú (check/uncheck) puede enviar las opciones activas a un componente padre.
import { DropdownMultiple } from "./DropdownMultiple/DropdownMultiple";
import { DropdownSingle } from "./DropdownSingle/DropdownSingle";

export const ExplorerNavigation = (props) => {
  return (
    <div className="flex justify-around items-center relative">
      <DropdownSingle
        title="Sort by"
        options={["Highest price", "Lowest price", "A-Z"]}
        sortProductsBy={props.sortProductsBy}
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
