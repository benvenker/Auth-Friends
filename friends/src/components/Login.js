import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log({ username, password });
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
