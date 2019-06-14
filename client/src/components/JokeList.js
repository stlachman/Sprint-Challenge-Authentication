import React from "react";
import axios from "axios";

import requiresAuth from "../auth/requiresAuth.js";

class JokeList extends React.Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <div>
        <h1>Dad Jokes!</h1>
        <ul>
          {this.state.jokes &&
            this.state.jokes.map(j => {
              return <li key={j.id}>{j.joke}</li>;
            })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const endpoint = "/jokes";
    axios
      .get(endpoint)
      .then(res => {
        this.setState(() => ({ jokes: res.data }));
      })
      .catch(({ response }) => {
        console.error(response);
      });
  }
}

export default requiresAuth(JokeList);
