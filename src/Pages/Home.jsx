import React from "react";

// IMAGES
import landing from "../Images/landing.jpg";
import shirt1 from "../Images/shirt1.jpg";

export const Home = () => {
  return (
    <>
      <div className="flex items-center justify-start relative">
        <img
          className="filter brightness-40 opacity-20 "
          src={landing}
          alt=""
        />

        <div className="p-20 text-7xl font-bold w-full absolute">
          <ul>
            <li>buy, sell and gift at reasonable prices.</li>

            <li>International shipping.</li>

            <li>1 year warranty.</li>
          </ul>
        </div>
      </div>

      <div className="w-3/4 p-10 mx-auto">
        <h2 className="text-4xl text-center">Trending</h2>
        <div className="p-10 grid grid-cols-4 gap-4">
          <img src={shirt1} alt="" />
          <img src={shirt1} alt="" />
          <img src={shirt1} alt="" />
          <img src={shirt1} alt="" />
        </div>
      </div>
    </>
  );
};
