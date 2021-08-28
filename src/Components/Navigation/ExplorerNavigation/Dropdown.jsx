import React from "react";

export const Dropdown = (props) => {
  return (
    <div className="group text-xl w-full relative z-10">
      {props.label}
      <ul className="ml-1 bg-gray-100 hidden rounded-lg group-hover:block absolute border ">
        {props.options.map((option, index) => (
          <li
            key={index}
            className="hover:bg-gray-200 rounded-lg whitespace-pre"
          >
            <button className="inline-block m-2 px-2">{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
