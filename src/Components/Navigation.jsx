import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import EcommerceContext from "../Context/EcommerceContext";
import s from "./Navigation.module.sass";
// COMPONENTS
import { UserDropdown } from "./UserDropdown";

export default function Navigation() {
  let history = useHistory(); //hook useHistory() permite redirigir a otra página del sitio sin recargarla.
  const signOut = () => {
    history.push("/"); //al cerrar sesión mediante el botón "Sign out", redirijo al index del sitio.
  };

  useEffect(() => {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("navLinks");
    burger.addEventListener("click", () => {
      burger.classList.toggle(s.toggle);
      navLinks.classList.toggle(s.active);
    });
  }, []);

  return (
    <EcommerceContext.Consumer>
      {(context) => (
        <nav className="bg-gray-100 ">
          <div
            style={{ maxWidth: "800px", margin: "auto" }}
            className="flex gap-3 p-4 justify-around items-center"
          >
            <div>
              <Link to="/">
                <span className="text-white text-xl bg-black max-w-xs px-3 py-1 rounded-md">
                  Element
                </span>
              </Link>
            </div>

            <div className={s.navLinks} id="navLinks">
              <div className="w-2/5 flex gap-10 items-center justify-start">
                <Link to="/explore">Explore</Link>
              </div>
              {/* Si el usuario no está logeado, muestro los botones para logearse y registrarse */}
              {!context.userLogin && (
                <div className={`flex gap-3 items-center ${s.loginButtons}`}>
                  <Link
                    to="/signin"
                    className="border border-black rounded-2xl py-0.5 px-3 hover:opacity-60 whitespace-pre"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/signup"
                    className="border border-black rounded-2xl py-0.5 px-3 hover:opacity-60 whitespace-pre"
                  >
                    Sign up
                  </Link>
                </div>
              )}
              {/* Si el usuario está logeado, muestro el botón de cerrar sesión y el icono para acceder al menú de usuario */}
              {context.userLogin && (
                <div className={`flex items-center gap-6 ${s.loginButtons}`}>
                  <button
                    className="border border-black rounded-2xl py-0.5 px-3 hover:opacity-60 whitespace-pre"
                    onClick={() => {
                      context.logoutUser();
                      localStorage.removeItem("cartItems");
                      signOut();
                    }}
                  >
                    Sign out
                  </button>
                  <UserDropdown />
                </div>
              )}
            </div>
            <div className={s.burger} id="burger">
              <div className={s.line1}></div>
              <div className={s.line2}></div>
              <div className={s.line3}></div>
            </div>
          </div>
        </nav>
      )}
    </EcommerceContext.Consumer>
  );
}
