import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { setAlert } from '../actions/alert';
import PropTypes from 'prop-types';
import axios from 'axios';

const Registration = ({ setAlert }) => {
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

  const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = async event => {
    event.preventDefault();
    if (name == 'Tony') {
      setAlert('test', 'danger');
    } else {
      console.log('SUCCESS');
    }
    const newCustomer = {
      name,
      dob,
      email,
      phone
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify(newCustomer);

      const response = await axios.post('http://localhost:5000/routes', body, config);
      console.log(response.data)
    } catch (err) {
      console.error(err.response.data);
    }
    console.log(formData)
  }

  return (
    <>
      <p className="lead"><i className="fas fa-user"></i> New Customer</p>
      <form className="form" onSubmit={event => onSubmit(event)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={event => onChange(event)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            placeholder="Date of Birth"
            name="dob"
            value={dob}
            onChange={event => onChange(event)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={event => onChange(event)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={event => onChange(event)}
            minLength='8'
            maxLength='10'
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
    </>
  )
}

Registration.propTypes = {
  setAlert: PropTypes.func.isRequired,
}

export default connect(null, { setAlert })(Registration);
