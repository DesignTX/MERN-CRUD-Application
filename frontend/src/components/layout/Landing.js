import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <p className="lead">
            Cool Customer Management Application
          </p>
          <div className="buttons">
            <Link to='/registration' className="btn btn-primary">
              Add Customer
            </Link>
            <Link to='/edit' className="btn btn-light">
              Edit Customer
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing