import axios from 'axios';
import { setAlert } from './alert';
import { GET_CUSTOMERS, DELETE_CUSTOMER, CUSTOMER_ERROR } from './constants';

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