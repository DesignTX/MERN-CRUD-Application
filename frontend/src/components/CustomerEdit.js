import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCustomer, updateCustomer } from '../actions/customer';

const EditCustomer = ({ customer: { customer }, addCustomer, updateCustomer, history }) => {
  // formData is your state, setFormData is same as this.setstate (Personal Learning Note)
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    phone: ''
  });

  const { name, dob, email, phone } = formData;


  const onChange = event => setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
    //Hardcoded, to grab customer id. Refactor when everythings working
    let { pathname } = history.location
    console.log(pathname.split('/'))
    let id = pathname.split('/')[2]
    updateCustomer(formData, id)
  }

  return (
    <>
      <p className="lead"><i className="fas fa-user"></i> Edit Customer</p>
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
        <input type="submit" className="btn btn-primary" value="Edit" to='/CustomerList' />
      </form>
    </>
  )
}

EditCustomer.propTypes = {
  addCustomer: PropTypes.func.isRequired,
  updateCustomer: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  customer: state.customer
});


export default connect(mapStateToProps, { addCustomer, updateCustomer })(withRouter(EditCustomer))
