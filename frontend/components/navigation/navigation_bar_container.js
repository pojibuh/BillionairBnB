import { connect } from 'react-redux';
import NavigationBar from './navigation_bar';
import { activateModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    activateModal: (modalType) => dispatch(activateModal(modalType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
