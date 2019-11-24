import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <a href="index.html"> Navia Coding Challenge</a>
      </h1>
      <ul>
        <li><a href="register.html">Add Customer</a></li>
        <li><a href="login.html">Edit Customer</a></li>
      </ul>
    </nav>
  )
}

export default Navbar