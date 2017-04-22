import { connect } from 'react-redux';
import NavigationBar from './navigation_bar';
import { activateModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activateModal: (modalType) => dispatch(activateModal(modalType)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
