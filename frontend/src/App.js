import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import User from './components/Add User/AddUser';
import Userdetails from './components/User Details/UserDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainhome" element={<Home />} />
        <Route path="/adduser" element={<User />} />
        <Route path="/userdetails" element={<Userdetails />} />
      </Routes>
    </div>
  );
}

export default App;
