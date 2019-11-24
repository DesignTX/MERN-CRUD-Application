import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteCustomer } from '../actions/customer';

const CustomerItem = ({
  deleteCustomer,
  customer: { _id, name, dob, email, phone } }) => {
  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p class="post-date">
          Phone: {phone}
        </p>
        <p class="post-date">
          Email: {email}
        </p>
        <p class="post-date">
          Date of Birth: <Moment format='DD/MM/YYYY'>{dob}</Moment>
        </p>
        <a href="post.html" class="btn btn-primary">
          Edit
        </a>
        <button onClick={event => deleteCustomer(_id)} type="button" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  )
}

CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
  deleteCustomer: PropTypes.func.isRequired
}

export default connect(null, { deleteCustomer })(CustomerItem)
