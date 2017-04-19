import { connect } from 'react-redux';
import Modal from './modal';
import { receiveComponent } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    isOpen: state.modals.isOpen,
    modalType: state.modals.modalType
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveComponent: (modalType) => dispatch(receiveComponent(modalType)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
