import React, { useState } from 'react';
import Nav from "../Nav/Nav";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    age: "",
    address: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", inputs);
      alert("User added successfully!");
      navigate("/userdetails"); // Redirect to home or user list
    } catch (err) {
      console.error(err);
      alert("Failed to add user.");
    }
  };

  return (
    <div>
      <Nav />
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Age:</label><br />
            <input
              type="number"
              name="age"
              value={inputs.age}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Address:</label><br />
            <input
              type="text"
              name="address"
              value={inputs.address}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
