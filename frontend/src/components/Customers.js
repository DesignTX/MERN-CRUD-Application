import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getCustomers } from '../actions/customer';

const Customers = ({ getCustomers, customer: { customers, loading } }) => {
  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  return (
    <div>

    </div>
  )
}

Customers.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  customer: state.customer
})
export default connect(mapStateToProps, { getCustomers })(Customers);
