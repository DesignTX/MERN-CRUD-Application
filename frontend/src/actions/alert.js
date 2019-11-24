import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './constants';


export const setAlert = (msg, alertType) => dispatch => {
  // UUID provides universal ID  
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    type: { message, alertType, id }
  });
}