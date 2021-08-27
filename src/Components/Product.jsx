import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import EcommerceContext from "../Context/EcommerceContext";

export const Product = (props) => {
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
    <div className="h-100 w-52 rounded border hover:shadow-lg transition duration-300 relative">
      <div>
        <img
          src={props.imageURL}
          alt=""
          className="rounded w-full object-cover h-2/3"
          style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
        />
        {props.discount && (
          <div className="text-sm h-10 w-10 flex items-center justify-center bg-yellow-500 rounded-full text-white p-2 absolute top-2 right-2 select-none">
            -{props.discount}%
          </div>
        )}
      </div>

      <div className="p-3 text-2xl gap-3 flex flex-col">
        {props.discount && (
          <div className="flex gap-2">
            <span className="text-gray-500 line-through">${props.price}</span>
            <span className="font-semibold">{Math.round(props.price - props.price * (props.discount / 100))}</span>
          </div>
        )}
        {!props.discount && <h2 className="font-semibold">${props.price}</h2>}

        <h2 className="text-lg">{props.name}</h2>
        <div className="flex justify-around gap-0.5 flex-wrap">
          {props.tags && <div className="text-xs whitespace-pre p-1 px-2.5 text-white bg-red-600 rounded-full">{props.tags}</div>}
        </div>
        <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded-full whitespace-pre" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
