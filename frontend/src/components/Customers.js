import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import CustomerItem from './CustomerItem';
import { getCustomers } from '../actions/customer';

const Customers = ({ getCustomers, customer: { customers, loading } }) => {
  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  return loading ? <Fragment> Loading </Fragment> : <Fragment>
    <h1 className="large text-primary">Customers</h1>
    <p className="lead">
      <i className="fas fa-user"></i> Test
    </p>
    {/* {Customerlist} */}
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
