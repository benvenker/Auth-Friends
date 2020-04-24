import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  const [username, setUsername] = useState("");

  return (
    <>
      <Route exact path="/">
        <Link to="/login">Login</Link>
        <Link to="/friendsList">Friends</Link>
      </Route>
      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route
        path="/friendsList"
        render={(props) => <FriendsList {...props} />}
      ></Route>
    </>
  );
}

export default App;
