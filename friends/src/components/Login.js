import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const { history } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/login`, { username, password })
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => console.log(`Error: ${err}`));
    history.push("/friendsList");
  };

  return (
    <div>
      <h1>Please Login</h1>
      <form>
        <label htmlFor="username">
          Username
          <input onChange={(e) => setUsername(e.target.value)} type="text" />
        </label>
        <label htmlFor="password">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default Login;
