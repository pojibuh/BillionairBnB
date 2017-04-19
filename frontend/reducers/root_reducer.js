import { combineReducers } from 'redux';
import LoginReducer from './login_reducer';
import SignupReducer from './signup_reducer';

const RootReducer = combineReducers({
  login: LoginReducer,
  signup: SignupReducer
});

export default RootReducer;
