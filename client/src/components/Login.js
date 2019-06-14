import React from "react";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div>
        <form action="">
          <div>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
          <button>Login</button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
  };
}
