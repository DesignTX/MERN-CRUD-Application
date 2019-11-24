import { SET_ALERT, REMOVE_ALERT } from '../actions/constants';

const initialState = [];

export default function (state = initialState, action) {
  // Destructure action
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    // REMOVE_ALERT filters through and returns all alerts except ones matching the payload
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload)
    default:
      return state;
  }
}