import axios from 'axios';
import { setAlert } from './alert';
import { GET_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER, CUSTOMER_ERROR } from './constants';

// Get Customers
export const getCustomers = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:5000/routes');

    dispatch({
      type: GET_CUSTOMERS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add Customer
export const addCustomer = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const response = await axios.post('http://localhost:5000/routes', formData, config);

    dispatch({
      type: ADD_CUSTOMER,
      payload: response.data
    });

    dispatch(setAlert('Customer Deleted', 'success'));
  } catch (err) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Customer
export const deleteCustomer = id => async dispatch => {
  try {
    const response = await axios.delete(`http://localhost:5000/routes/${id}`);

    dispatch({
      type: DELETE_CUSTOMER,
      payload: id
    });

    dispatch(setAlert('Customer Deleted', 'success'));
  } catch (err) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};