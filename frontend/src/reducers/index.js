import { combineReducers } from 'redux';
import alert from './alert';
import customer from './customer';

export default combineReducers({
  alert,
  customer
});