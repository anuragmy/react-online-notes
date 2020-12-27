/* eslint-disable no-unused-vars*/

import React from "react";
import Note from "./Note";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import EmptyDashboard from "./EmptyDashboard";
import Filters from "./Filters";

const NotesList = ({ notes = [], check }) => {
  console.log(notes, check);
  return !notes.length ? (
    <EmptyDashboard />
  ) : (
    <React.Fragment>
      <Filters />
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = ({ notes }) => ({
  notes: notes.notes,
  check: notes,
});

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(NotesList);
