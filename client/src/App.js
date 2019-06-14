import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation.js";
import JokeList from "./components/JokeList.js";
import Login from "./components/Login.js";

function App() {
  return (
    <>
      <Navigation />
      <Route exact path="/" component={JokeList} />
      <Route path="/login" component={Login} />
    </>
  );
}

export default App;
