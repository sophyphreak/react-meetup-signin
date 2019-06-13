import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ClearDataModal = props => (
  <Modal isOpen={props.clearDataModal} centered={true}>
    <ModalHeader>Clear data</ModalHeader>
    <ModalBody>Do you really want to clear all data in this app?</ModalBody>
    <ModalFooter>
      <Button color="danger" onClick={() => props.triggerClearState()}>
        Yes, clear all data now
      </Button>
      <Button color="secondary" onClick={() => props.toggleClearDataModal()}>
        cancel
      </Button>
    </ModalFooter>
  </Modal>
);

export default ClearDataModal;
