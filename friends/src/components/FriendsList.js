import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(`/friends`)
      .then((res) => setFriends(res.data));
  }, []);
  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {friends.map((friend) => {
          return <li>{friend.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
