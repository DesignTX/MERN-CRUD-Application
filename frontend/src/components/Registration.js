import React, { useState } from 'react';

const Registration = () => {
  // formData is your state, setFormData is same as this.setstate (Personal Learning Note)
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    phone: ''
  });

  const { name, dob, email, phone } = formData;
  console.log('name', name)
  console.log('dob', dob)
  console.log('email', email)
  console.log('phone', phone)
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <>
      <p className="lead"><i className="fas fa-user"></i> New Customer</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            placeholder="Date of Birth"
            name="dob"
            value={dob}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={e => onChange(e)}
            minLength='8'
            maxLength='10'
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
    </>
  )
}

export default Registration;