import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

import requiresAuth from "../auth/requiresAuth.js";

class JokeList extends React.Component {
  state = {
    jokes: [],
    isFetching: true,
    error: ""
  };

  render() {
    if (this.state.isFetching) {
      return (
        <div>
          <h1>Loading Dad Jokes</h1>
        </div>
      );
    }
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
        this.setState(() => ({
          jokes: res.data,
          error: "",
          isFetching: false
        }));
      })
      .catch(({ response }) => {
        this.setState(() => ({ error: response, isFetching: false }));
      });
  }
}

export default withRouter(requiresAuth(JokeList));
