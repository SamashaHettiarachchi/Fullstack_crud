import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const User = ({ user, onDelete }) => {
  const navigate = useNavigate();

  if (!user) return null;

  const { _id, name, email, age, address } = user;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/users/${_id}`);
        alert("User deleted successfully");
        if (onDelete) onDelete(_id); // Optional callback to update UI
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleUpdate = () => {
    navigate(`/update/${_id}`);
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{name}</h3>
      <p>
        <strong>ID:</strong> {_id}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <Link to={`/update/${_id}`}>
        <button>Update</button>
      </Link>
      <button
        onClick={handleDelete}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete
      </button>
    </div>
  );
};

export default User;
