import React, { useState } from "react";
//el provider necesita saber sobre qué contexto actuar
import EcommerceContext from "./EcommerceContext";

function GlobalState({ children }) {
  const [userLogin, setUserLogin] = useState(localStorage.getItem("login"));

  const loginUser = () => {
    setUserLogin(true);
    localStorage.setItem("login", true);
  };
  const logoutUser = () => {
    setUserLogin(false);
    localStorage.removeItem("login");
    alert("Logged out");
  };

  return (
    <EcommerceContext.Provider
      value={{
        //ACÁ VAN LOS MÉTODOS O HOOKS QUE QUERRAMOS PROVEER A LOS CONSUMIDORES
        userLogin: userLogin,
        loginUser: loginUser,
        logoutUser: logoutUser,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
}
export default GlobalState;
