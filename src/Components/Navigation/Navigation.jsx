import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex gap-3 p-3 bg-gray-100 justify-around items-center">
      <div>
        <Link to="/">
          <span className="text-white text-xl bg-black max-w-xs px-3 py-1 rounded-md">
            Shop
          </span>
        </Link>
      </div>

      <div className="w-2/5 flex gap-10 items-center justify-start">
        <Link to="/explore">Explore</Link>

        <div className="flex gap-1 w-full">
          <input
            className="w-full focus:outline-none focus:ring rounded-full py-2 px-5"
            placeholder="Search products..."
          />
          <button className="bg-blue-500 text-white rounded-full p-px hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            Q
          </button>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <Link
          to="/signin"
          className="border border-black rounded-2xl py-0.5 px-3 hover:opacity-60"
        >
          Sign in
        </Link>
        <Link
          to="/signup"
          className="border border-black rounded-2xl py-0.5 px-3 hover:opacity-60"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
