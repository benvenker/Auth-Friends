import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Login from "./components/Login";

function App() {
  const [username, setUsername] = useState("");

  return (
    <>
      <Route exact path="/">
        <Link to="/login">Login</Link>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </>
  );
}

export default App;
