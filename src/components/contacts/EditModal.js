import React from "react";
import ReactQuill from 'react-quill';
import { Modal, Button, Form } from "semantic-ui-react";

const EditModal = ({ close, data }) => {


  const [description, setDescription] = React.useState(data.description)
  const [title, setTitle] = React.useState(data.title)

  const handleChange = e => setDescription(e.target.value);
  const handleChangeTitle = e => setTitle(e.target.value);

  return (
    <Modal dimmer="blurring" open onClose={close} style={{
      height: 'auto',
      top: 'auto',
      left: 'auto'
    }}>
      <Modal.Header>Edit Note</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field required>
            <label required>Title</label>
            <input placeholder='Title' onChange={handleChangeTitle} value={title} />
          </Form.Field>
          <ReactQuill value={description} placeholder="Enter your notes here!"
            onChange={handleChange} />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={close}>no</Button>
        <Button positive onClick={close}>yes</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditModal;
