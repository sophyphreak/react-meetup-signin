import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ClearStateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearDataModal: false,
      successModal: false
    };

    this.toggleClearDataModal = this.toggleClearDataModal.bind(this);
  }
  triggerClearState() {
    this.toggleClearDataModal();
    this.setState({ successModal: true });
    this.props.clearState();
    setTimeout(() => {
      this.setState({ successModal: false });
    }, 3000);
  }
  toggleClearDataModal() {
    this.setState(prevState => ({
      clearDataModal: !prevState.clearDataModal
    }));
  }
  render() {
    return (
      <div>
        <Button color="warning" onClick={() => this.toggleClearDataModal()}>
          Clear data
        </Button>
        <Modal isOpen={this.state.clearDataModal} centered={true}>
          <ModalHeader>Clear data</ModalHeader>
          <ModalBody>
            Do you really want to clear all data in this app?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={() => this.triggerClearState()}>
              Yes, clear all data now
            </Button>
            <Button
              color="secondary"
              onClick={() => this.toggleClearDataModal()}
            >
              cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.successModal} centered={true}>
          <ModalBody>Success! You cleared all data!</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ClearStateButton;
