import React, { useState, useEffect } from "react";
import s from "./DropdownSingle.module.sass";

export const DropdownSingle = (props) => {
  const [activeOption, setActiveOption] = useState("");
  const { title, options } = props;
  const id = (Math.random() * 10).toString();

  useEffect(() => {
    props.sortProductsBy(activeOption);
  }, [activeOption]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={s.container}
      onMouseLeave={() =>
        document.getElementById(id).classList.remove(s.dropdownShow)
      }
    >
      <h2
        onMouseOver={() =>
          document.getElementById(id).classList.add(s.dropdownShow)
        }
        className={s.title}
      >
        {title}
      </h2>
      <ul className={s.dropdown} id={id}>
        {options.map((option, index) => (
          <li key={index}>
            {activeOption === option && (
              <label
                className={s.optionSelected}
                onClick={(e) => setActiveOption(e.target.textContent)}
              >
                {option}
              </label>
            )}
            {activeOption !== option && (
              <label
                className={s.option}
                onClick={(e) => setActiveOption(e.target.textContent)}
              >
                {option}
              </label>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
