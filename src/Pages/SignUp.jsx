import React from "react";

import { useForm } from "react-hook-form";
import { FormInput } from "../Components/FormInput";
export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} action="" className="rounded border w-4/5 sm:w-3/5 lg:w-1/3 p-6 my-16">
        <h2 className="text-3xl mb-6 font-bold">Sign up</h2>
        <FormInput
          register={{
            ...register("name", {
              required: "this field is required",
              minLength: { value: 3, message: "name must be at least 3 characters" },
            }),
          }}
          label="Name"
          placeholder="Julian Dot"
          type="text"
          errors={errors}
        />
        <FormInput
          register={{
            ...register("email", {
              required: "this field is required",
            }),
          }}
          label="Email"
          placeholder="julian.dot@example.com"
          type="email"
          errors={errors}
        />
        <FormInput
          register={{
            ...register("password", {
              required: "this field is required",
              minLength: { value: 6, message: "password must be at least 6 characters" },
            }),
          }}
          label="Password"
          placeholder="Type password..."
          type="password"
          errors={errors}
        />
        <FormInput
          register={{
            ...register("passwordConfirm", {
              required: "this field is required",
              minLength: { value: 6, message: "password must be at least 6 characters" },
              validate: (value) => value === watch("password") || "passwords don't match.",
            }),
          }}
          label="Confirm password"
          placeholder="Confirm password..."
          type="password"
          errors={errors}
        />
        <button
          className="bg-blue-400 hover:bg-blue-300 active:bg-blue-400 py-3 px-6 text-white border rounded-full mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
