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
function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact component={Home}></Route>
        <Route path="/signin" exact component={SignIn}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/explore" exact component={Explore}></Route>
        <Footer />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
