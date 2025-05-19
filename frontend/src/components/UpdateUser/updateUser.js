import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../Nav/Nav";

const UpdateUsers = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setInputs(response.data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${id}`, inputs);
      alert("User updated successfully!");
      navigate("/userdetails");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div>
      <Nav />
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        <h1>Update User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Age:</label>
            <br />
            <input
              type="number"
              name="age"
              value={inputs.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <br />
            <input
              type="text"
              name="address"
              value={inputs.address}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <button type="submit">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUsers;
