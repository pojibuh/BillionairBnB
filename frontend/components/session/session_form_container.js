import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let formType;
  if (ownProps.location.pathname === '/login') {
    formType = 'login';
  } else {
    formType = 'signup';
  }
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;
  if (ownProps.location.pathname === '/login') {
    processForm = login;
  } else {
    processForm = signup;
  }
  return {
    processForm: (user) => dispatch(processForm(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
