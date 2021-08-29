import React, { useState } from "react";

export const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
  );

  const deleteItem = (index) => {
    const newCart = cart.filter((_, i) => {
      if (index === i) return false;
      return true;
    });
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  return (
    <>
      <div
        style={{ minHeight: "85vh" }}
        className="flex justify-center items-center py-6"
      >
        {(!cart || !cart.length) && (
          <h2 className="text-xl">Your cart is empty</h2>
        )}
        {cart && (
          <div className="border h-5/6 w-2/3 lg:w-3/5">
            <h2 className="text-3xl font-bold m-6 text-center">Your Cart</h2>
            {cart.map((item, index) => (
              <div
                key={index}
                className="border p-3 flex gap-6 justify-between align-center"
              >
                <div className="flex gap-3 items-center">
                  <button
                    onClick={() => deleteItem(index)}
                    className="px-1.5 text-sm bg-red-400 text-white rounded-full"
                  >
                    X
                  </button>
                  <div className="text-xl font-bold">{item.name}</div>
                </div>
                <h3>${item.price}</h3>
              </div>
            ))}
            <div className="p-3 flex flex-col gap-6">
              <div className="flex font-bold text-2xl justify-between">
                <h3>Total:</h3>
                <h3>${cart.reduce((acc, item) => (acc += item.price), 0)}</h3>
              </div>
              <button
                onClick={() => {
                  alert("Purchase succesful");
                  localStorage.removeItem("cartItems");
                  setCart(false);
                }}
                className="font-bold text-lg self-center border bg-blue-400 rounded-full py-2 px-4 text-white"
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
