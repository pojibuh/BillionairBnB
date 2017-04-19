import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
    currentUser: null,
    errors: []
};

export default function SessionReducer(state = initialState, action) {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state);
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      newState = Object.assign({}, state, { errors });
      debugger
      return newState;
    default:
      return state;
  }
}
