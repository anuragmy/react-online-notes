import React from "react";
import { Modal, Button } from "semantic-ui-react";

const DeleteModal = ({ close, response }) => {
  return (
    <Modal
      dimmer="blurring"
      basic
      open
      size="mini"
      onClose={close}
      style={{
        height: "auto",
        top: "auto",
        left: "auto",
        width: 'initial',
      }}
    >
      <Modal.Header>Delete Note</Modal.Header>
      <Modal.Content>Are you sure you want to delete ?</Modal.Content>
      <Modal.Actions>
        <Button negative onClick={close}>
          No
        </Button>
        <Button positive onClick={response}>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteModal;
