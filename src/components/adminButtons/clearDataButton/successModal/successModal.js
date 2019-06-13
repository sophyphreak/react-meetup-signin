import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const SuccessModal = props => (
  <Modal isOpen={props.successModal} centered={true}>
    <ModalBody>Success! You cleared all data!</ModalBody>
  </Modal>
);

export default SuccessModal;
