import React, { BrowserRouter, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import GlobalState from "./Context/GlobalState";
// COMPONENTS
import Navigation from "./Components/Navigation";
//PAGES
import { Home } from "./Pages/HomePage";
import SignIn from "./Pages/SignInPage";
import SignUp from "./Pages/SignUpPage";
import { Explore } from "./Pages/ExplorePage";
import { Cart } from "./Pages/CartPage";

// ESTO QUE ESTÁ COMENTADO ES PARA SUBIR ARRAY DE PRODUCTOS A FIREBASE
// import firebase from "./Config/firebase";
// import array from "./subirproductos";
// import { useEffect } from "react";
function App() {
  // useEffect(() => {
  //   array.map(
  //     async (product) =>
  //       await firebase.firestore
  //         .collection("products")
  //         .add(JSON.parse(JSON.stringify(product)))
  //   );
  // }, []);

  return (
    // GlobalState se encargará de administrar estados generales
    <GlobalState>
      {/* BrowserRouter permite navegar por el sitio sin necesidad de recargar la página, lo hace utilizando Route */}
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" exact component={SignIn}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/explore" exact component={Explore}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <Footer />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
