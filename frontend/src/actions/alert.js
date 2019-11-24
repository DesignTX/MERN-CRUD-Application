import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './constants';


export const setAlert = (msg, alertType, timeout = 8000) => dispatch => {
  // UUID provides universal ID  
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  // Time outs alert notification
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}