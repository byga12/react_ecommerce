import React from "react";
import { ExplorerNavigation } from "../Components/Navigation/ExplorerNavigation/ExplorerNavigation";
import { Product } from "../Components/Product";
export const Explore = () => {
  return (
    <>
      <div className="p-7 bg-black text-white sm:p-20">
        <h2 className="mb-6 text-5xl text-center">Explore</h2>
        <h3 className="text-center text-2xl">+5.000 handmade products from people around the globe.</h3>
      </div>

      <ExplorerNavigation />

      <div className="p-10 m-auto w-4/5">
        <div className="flex flex-wrap gap-6 justify-center">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};
