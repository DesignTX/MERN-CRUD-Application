import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import CustomerItem from './CustomerItem.js';
import { getCustomers } from '../actions/customer';

const Customers = ({ getCustomers, customer: { customers, loading } }) => {
  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  return loading ? <Fragment> Loading Customer List... </Fragment> : <Fragment>
    <h1 className="large text-primary fas fa-user">
      &nbsp;&nbsp;Customer List</h1>
    {/* {CustomersItem} */}
    <div className="customers">
      {customers.map(customer => (
        < CustomerItem key={customer._id} customer={customer} />
      ))}
    </div>
  </Fragment>

};

Customers.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  customer: state.customer
})
export default connect(mapStateToProps, { getCustomers })(Customers);
