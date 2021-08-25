import React from "react";

// COMPONENTS
import { Product } from "../Components/Product";

// IMAGES
import landing from "../Images/landing.jpg";
import shirt1 from "../Images/shirt1.jpg";

export const Home = () => {
  return (
    <>
      <div className="flex items-center justify-start relative overflow-hidden">
        <img className="filter brightness-40 opacity-20 " src={landing} alt="" />

        <div className="p-20 text-7xl font-bold w-full absolute">
          <ul>
            <li>buy, sell and gift at reasonable prices.</li>

            <li>International shipping.</li>

            <li>1 year warranty.</li>
          </ul>
        </div>
      </div>

      <div className="w-4/5 p-10 mx-auto">
        <h2 className="text-4xl text-center mb-12">Trending</h2>

        <div className="flex flex-wrap justify-center gap-3">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};
