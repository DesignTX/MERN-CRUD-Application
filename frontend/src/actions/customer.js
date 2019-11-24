import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_CUSTOMERS,
  CUSTOMER_ERROR
} from './constants';

// Get customers
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
}