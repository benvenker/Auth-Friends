import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/friends`, { name, age, email })
      .then((res) => setFriends(res.data));
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/friends`)
      .then((res) => setFriends(res.data));
  }, []);

  return (
    <div>
      <h1>Friends Page</h1>
      <h3>Add a Friend</h3>
      <form>
        <label htmlFor="name">
          Name:
          <input onChange={(e) => setName(e.target.value)} type="text" />
        </label>
        <label htmlFor="age">
          Age:
          <input
            onChange={(e) => setAge(parseInt(e.target.value))}
            type="text"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </label>
        <button onClick={addFriend}>Submit</button>
      </form>
      <h3>Friends List</h3>
      <ul>
        {friends.map((friend) => {
          return <li key={friend.id}>{friend.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
