import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div>
        <h1>Login Below</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              type="password"
            />
          </div>
          <button>Login</button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = "http://localhost:3300/api/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/");
      })
      .catch(err => console.error(err));
  };
}

export default withRouter(Login);
