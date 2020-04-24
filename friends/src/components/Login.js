import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/login`, { username, password })
      .then((res) => console.log(res));
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
