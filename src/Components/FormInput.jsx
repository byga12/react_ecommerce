import React from "react";

export const FormInput = (props) => {
  const element = props.register.name;
  const err = props.errors[element];
  return (
    <div className="mb-3">
      <label className="text-lg py-2 text-sm" htmlFor="">
        {props.label}
      </label>
      {err && <span className="italic text-sm text-red-500 ml-3">* {err.message}</span>}
      <input
        className="w-full p-2 outline-none focus:border-black focus:shadow border rounded"
        {...props.register}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};
