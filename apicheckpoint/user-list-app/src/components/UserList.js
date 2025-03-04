import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>User List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {listOfUsers.map((user) => (
          <li key={user.id} style={{ margin: "10px 0" }}>
            <Link
              to={`/user/${user.id}`}
              style={{
                textDecoration: "none",
                fontSize: "18px",
                color: "blue",
              }}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
