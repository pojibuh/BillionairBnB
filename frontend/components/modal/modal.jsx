import React from 'react';
import LoginFormContainer from '../login/login_form_container';
import SignupFormContainer from '../signup/signup_form_container';

class Modal extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveComponent();
  }

  render() {
    const form = this.props.modalType === 'login' ? <LoginFormContainer/> : <SignupFormContainer/>;
    if (this.props.isOpen) {
      return (
        <div>
          <div className="modal-screen" onClick={() => this.props.deactivateModal(this.props.modalType)}></div>
          <div className="modal-content">
            { form }
          </div>
        </div>
      );
    } else {
      return (
        <div className="modal-not-active"></div>
      );
    }
  }
}

export default Modal;
