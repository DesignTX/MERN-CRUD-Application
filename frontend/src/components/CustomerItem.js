import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const CustomerItem = ({ customer: { _id, name, dob, email, phone } }) => {
  return (
    <div class="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img class="round-img" alt="" />
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
        <button
          type="button"
          class="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired
}

export default connect(null, {})(CustomerItem)
