import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCustomer } from '../actions/customer';


const CustomerForm = ({ addCustomer, history }) => {
  // formData is your state, setFormData is same as this.setstate (Personal Learning Note)
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    phone: ''
  });

  const { name, dob, email, phone } = formData;

  // console.log('name', name)
  // console.log('dob', dob)
  // console.log('email', email)
  // console.log('phone', phone)

  const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
    addCustomer(formData, history)
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
        <input type="submit" className="btn btn-primary" value="Register" to='/CustomerList' />
      </form>
    </>
  )
}

CustomerForm.propTypes = {
  addCustomer: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  customer: state.customer
});


export default connect(mapStateToProps, { addCustomer })(CustomerForm)
