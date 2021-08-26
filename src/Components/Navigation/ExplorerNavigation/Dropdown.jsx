import React from "react";

export const Dropdown = (props) => {
  return (
    <div className="group text-xl w-full">
      <h2 className="bg-gray-100 select-none border py-2 px-6 mb-1 font-semibold whitespace-pre">{props.label}</h2>
      <ul className="bg-gray-100 hidden rounded-lg group-hover:block absolute border">
        {props.options.map((option) => (
          <li className="hover:bg-gray-200 rounded-lg">
            <button className="inline-block m-2 px-2">{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
