import React from "react";
import { Modal, Button } from "semantic-ui-react";

const DeleteModal = ({ close }) => {
  return (
    <Modal dimmer="blurring" basic open size="mini" onClose={close} style={{
      height: 'auto',
      top: 'auto',
      left: 'auto'
    }}>
      <Modal.Header>Delete Note</Modal.Header>
      <Modal.Content>Are you sure you want to delete ?</Modal.Content>
      <Modal.Actions>
        <Button negative onClick={close}>no</Button>
        <Button positive onClick={close}>yes</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteModal;
