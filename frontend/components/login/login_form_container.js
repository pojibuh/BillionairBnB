import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, clearErrors } from '../../actions/session_actions';
import { deactivateModal, activateModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.session.currentUser,
    errors: state.session.errors,
    formType: 'login'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    deactivate: (modalType) => dispatch(deactivateModal(modalType)),
    activate: (modalType) => dispatch(activateModal(modalType)),
    clear: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
