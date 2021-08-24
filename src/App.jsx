import React, { BrowserRouter, Route } from "react-router-dom";
import { Footer } from "./Components/Navigation/Footer";

// COMPONENTS
import Navigation from "./Components/Navigation/Navigation";
import { Home } from "./Pages/Home";
//PAGES
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact component={Home}></Route>
      <Route path="/signin" exact component={SignIn}></Route>
      <Route path="/signup" exact component={SignUp}></Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
