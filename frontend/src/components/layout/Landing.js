import React from 'react'

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <p className="lead">
            Cool Customer Management Application
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">Add Customer</a>
            <a href="login.html" className="btn btn-light">Edit Customer</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing