import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
// import CustomerListActions from './CustomerListActions';
import { getCurrentCustomer, deleteCustomer } from '../actions/customer';

const CustomerItem = ({
  getCurrentCustomer,
  deleteCustomer,
  customer: { _id, name, dob, email, phone } }) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p className="post-date">
          Phone: {phone}
        </p>
        <p className="post-date">
          Email: {email}
        </p>
        <p className="post-date">
          Date of Birth: <Moment format='DD/MM/YYYY'>{dob}</Moment>
        </p>
        <Link to="CustomerEdit" type="button" className="btn btn-primary">
          Edit
        </Link>
        <button onClick={event => deleteCustomer(_id)} type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div >
  )
}

CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  getCurrentCustomer: PropTypes.func.isRequired,
}


export default connect(null, { deleteCustomer, getCurrentCustomer })(CustomerItem)
