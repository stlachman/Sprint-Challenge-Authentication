import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation.js";
import JokeList from "./components/JokeList.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";

function App() {
  return (
    <>
      <Navigation />
      <Route exact path="/" component={JokeList} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </>
  );
}

export default App;
