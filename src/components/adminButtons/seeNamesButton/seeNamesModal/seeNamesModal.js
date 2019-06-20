import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import PersonNamesTable from './personNamesTable/personNamesTable';

const SeeDataModal = ({ personList, seeDataModal, toggleSeeDataModal }) => (
  <Modal isOpen={seeDataModal} toggle={toggleSeeDataModal}>
    <ModalHeader>
      <Button color="danger" onClick={() => toggleSeeDataModal()}>
        Close
      </Button>
    </ModalHeader>
    <ModalBody>
      <PersonNamesTable personList={personList} />
    </ModalBody>
    <ModalFooter>
      <Button color="danger" onClick={() => toggleSeeDataModal()}>
        Close
      </Button>
    </ModalFooter>
  </Modal>
);

export default SeeDataModal;
