import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import EcommerceContext from "../Context/EcommerceContext";
import shirt1 from "../Images/shirt1.jpg";

export const Product = () => {
  const context = useContext(EcommerceContext);

  let history = useHistory();
  const handleAddToCart = () => {
    if (!context.userLogin) {
      history.push("/signin");
    } else {
      console.log("añadido al carrito");
    }
  };

  return (
    <div className="h-100 w-52 rounded border hover:shadow-lg transition duration-300">
      <img
        src={shirt1}
        alt=""
        className="rounded w-full object-cover h-2/3"
        style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
      />

      <div className="p-3 text-2xl flex flex-col h-1/3 justify-center items-center gap-3">
        <h2 className="font-semibold">$75.000</h2>
        <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded-full whitespace-pre" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
