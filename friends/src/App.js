import React, { useState } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [username, setUsername] = useState("");

  return (
    <>
      <Route exact path="/">
        <Link to="/login">Login</Link>
        <Link to="/friendsList">Friends</Link>
      </Route>
      <Route path="/login" render={(props) => <Login {...props} />} />
      <PrivateRoute path="/friendsList" component={FriendsList} />
    </>
  );
}

export default App;
