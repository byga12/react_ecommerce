import React, { useState } from "react";
import { Link } from "react-router-dom";
export const UserDropdown = () => {
  const [isHidden, setisHidden] = useState(true);
  const toggleMenu = (e) => {
    e.preventDefault();
    setisHidden(!isHidden);
  };

  return (
    <div className="flex flex-col" style={{ direction: "rtl" }}>
      <button onClick={toggleMenu} className="whitespace-pre">
        <i className="fas fa-caret-down ml-1"></i>
        <i className="fas fa-user"></i>
      </button>

      {!isHidden && (
        <div className="relative z-10">
          <ul className="absolute bg-gray-100 rounded border mt-2">
            <li className="hover:bg-gray-200 flex justify-end ">
              <Link to="/profile">
                <div className="px-4 py-0.5">Profile</div>
              </Link>
            </li>
            <li className="hover:bg-gray-200 flex justify-end">
              <Link to="/cart">
                <div className="px-4 py-0.5">Cart</div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
