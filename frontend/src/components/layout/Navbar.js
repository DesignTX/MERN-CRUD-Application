import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to='/'> Navia Coding Challenge
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='Registration'>Add Customer
          </Link>
        </li>
        <li>
          <Link to='/customers'>Edit Customer
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar