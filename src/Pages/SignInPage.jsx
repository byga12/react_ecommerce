import React from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "../Components/FormInput";
import firebase from "../Config/firebase";
export default function Signin() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    //Firebase login
    try {
      const userData = await firebase.auth.signInWithEmailAndPassword(data.email, data.password);
      alert("Logged in succesfully");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={{
            ...register("email", {
              required: "this field is required",
            }),
          }}
          label="Email"
          placeholder="julian.dot@example.com"
          type="text"
          errors={errors}
        />
        <FormInput
          register={{
            ...register("password", {
              required: "this field is required",
            }),
          }}
          label="Password"
          placeholder="Type your password..."
          type="password"
          errors={errors}
        />
        <button className="border" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
