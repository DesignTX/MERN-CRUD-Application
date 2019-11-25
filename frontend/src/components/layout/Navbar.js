import React from 'react';
import { Link } from 'react-router-dom';

//Hardcoded Link to CustomerList, fix when other issues resolved
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to='/'> Navia Coding Challenge
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='CustomerForm'>Add Customer
          </Link>
        </li>
        <li>
          <a href='http://localhost:3000/CustomerList'>View Customers
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar