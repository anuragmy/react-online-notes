/* eslint-disable no-unused-vars*/

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ShowMore from "react-show-more";
import moment from "moment";
import { Card } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../actions/notesActions";
import DeleteModal from "../DeleteModal";

const Note = (props) => {
  const { id, title, description, date } = props.note;
  const dispatch = useDispatch();
  const [modal, setModal] = React.useState(false);

  const open = () => setModal(true);
  const close = () => setModal(false);
  const response = () => {
    close();
    dispatch(deleteNote(id));
  };

  return (
    <React.Fragment>
      <Card raised style={{ width: "95%" }}>
        <Card.Content>
          <i
            className="fas fa-times"
            style={{
              cursor: "pointer",
              float: "right",
              color: "red",
              fontSize: 20,
            }}
            onClick={open}
          />
          <Link to={`/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                fontSize: 20,
                marginRight: "1rem",
              }}
            />
          </Link>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{date}</Card.Meta>
          <Card.Description>
            <ShowMore
              lines={1}
              more="...Show more"
              less="...Show less"
              anchorClass=""
            >
              {description}
            </ShowMore>
          </Card.Description>
        </Card.Content>
      </Card>
      {modal && <DeleteModal close={close} response={response} />}
    </React.Fragment>
  );
};

export default Note;
