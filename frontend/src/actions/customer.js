import axios from 'axios';
import { setAlert } from './alert';
import { GET_CUSTOMERS, GET_CUSTOMER, DELETE_CUSTOMER, CUSTOMER_ERROR } from './constants';

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

// Get Single Customer
export const getCurrentCustomer = (id) => async dispatch => {
  try {
    const response = await axios.get(`http://localhost:5000/routes/${id}`);

    dispatch({
      type: GET_CUSTOMER,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const addCustomer = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await axios.post('http://localhost:5000/routes/', formData, config);

    dispatch({
      type: GET_CUSTOMER,
      payload: response.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created'));

    if (!edit) {
      history.push('/CustomerList');
    }
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: CUSTOMER_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
}

// Update Customers
export const updateCustomer = (formData, id) => async dispatch => {
  console.log("here")
  console.log(id)
  console.log("asdasdasda")
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await axios.put(`http://localhost:5000/routes/${id}`, formData, config)
    console.log(response)

    dispatch({
      type: GET_CUSTOMERS,
      payload: response.data
    });

    dispatch(setAlert('Profile Update', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: CUSTOMER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Customer
export const deleteCustomer = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:5000/routes/${id}`);

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