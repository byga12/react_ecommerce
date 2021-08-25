import React from "react";

import shirt1 from "../Images/shirt1.jpg";

export const Product = () => {
  return (
    <div className="h-80 w-52 rounded border hover:shadow-lg transition duration-300">
      <img
        src={shirt1}
        alt=""
        className="rounded w-full object-cover h-2/3"
        style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
      />

      <div className="p-3 text-2xl">
        <h2 className="">$75.000</h2>
        <button>Add to cart</button>
      </div>
    </div>
  );
};
