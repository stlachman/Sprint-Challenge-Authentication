import React from "react";
import axios from "axios";

const token = localStorage.getItem("token");

//  Could be process.env.API_URL
axios.defaults.baseURL = "http://localhost:3300/api";

axios.interceptors.request.use(
  config => {
    config.headers.authorization = token;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const notLoggedIn = (
        <div>
          <p>Please login to see the jokes</p>
        </div>
      );

      return <> {token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
