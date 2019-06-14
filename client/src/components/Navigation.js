import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const logOut = (event, props) => {
  event.preventDefault();
  localStorage.removeItem("token");
  props.history.push("/login");
};

const Navigation = props => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={event => logOut(event, props)}>Log Out</button>
      </div>
    </nav>
  );
};

export default withRouter(Navigation);
