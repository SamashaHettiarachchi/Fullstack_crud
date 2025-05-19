import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import User from "../User/user"; // Adjust the import path as necessary

// Use relative path if proxy is set in package.json
const URL = "http://localhost:5000/users";
// assuming backend is on port 5000

// Fetch function
const fetchHandler = async () => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching users:", err);
    return { users: [] }; // return empty to avoid breaking map
  }
};

const UserDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => {
      console.log("Fetched users:", data); // Debug log
      setUsers(data.users || []); // Safety fallback
    });
  }, []);

  return (
    <div>
      <Nav />
      <h1>User Details Display Page</h1>
      <div>
        {users.map((user, i) => (
          <div key={i}>
            <User user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
