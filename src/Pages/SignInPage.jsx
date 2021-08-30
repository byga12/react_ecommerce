import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import EcommerceContext from "../Context/EcommerceContext";
import firebase from "../Config/firebase";

// COMPONENTS
import { FormInput } from "../Components/FormInput";

export default function Signin() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); //hook de react-hook-form
  const context = useContext(EcommerceContext);

  let history = useHistory(); //hook useHistory() permite redirigir a otra página del sitio sin recargarla.
  const onSubmit = async (data) => {
    //Firebase login, recibe datos y los valida, si son correctos se logea, caso contario tira una alerta de error.
    try {
      await firebase.auth.signInWithEmailAndPassword(data.email, data.password);
      context.loginUser();
      history.push("/explore");
      alert("Logged in succesfully");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="rounded border w-4/5 sm:w-3/5 lg:w-1/3 p-6 my-16 shadow-2xl"
      >
        <h2 className="text-3xl mb-6 font-bold">Sign in</h2>
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
        <button
          className="bg-blue-500 hover:bg-blue-300 active:bg-blue-400 py-3 px-6 text-white border rounded-full mt-4"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
