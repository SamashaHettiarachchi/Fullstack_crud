import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div>
      <ul>
        <li className='home-ul'>
          <Link to='/mainhome' className='home-link'>
            <h1>Home</h1>
          </Link>
        </li>
        <li className='home-ll'>
          <Link to='/adduser' className='home-link'>
            <h1>ADD user</h1>
          </Link>
        </li>
        <li className='home-ll'>
          <Link to='/userdetails' className='home-link'>
            <h1>User Details</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
