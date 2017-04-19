import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
    currentUser: null,
    errors: []
};

export default function SignupReducer(state = initialState, action) {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state);
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state);
      newState.currentUser = null;
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
}
