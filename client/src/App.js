import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation.js";
import JokeList from "./components/JokeList.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import { GlobalStyle, Container } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Container>
        <Route exact path="/" component={JokeList} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Container>
    </>
  );
}

export default App;
