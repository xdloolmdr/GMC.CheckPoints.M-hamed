import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams(); // Get user ID from URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, [id]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>
        Address: {user.address.city}, {user.address.street}
      </p>
      <Link to="/">
        <button
          style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default UserDetails;
