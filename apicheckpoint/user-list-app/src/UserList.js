import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]); // State to store users

  useEffect(() => {
    // Fetch users from JSONPlaceholder API
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data); // Save data in state
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []); // Empty dependency array means it runs once on mount

  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
