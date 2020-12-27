/* eslint-disable no-unused-vars*/

import React from "react";
import Note from "../Note";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import EmptyDashboard from "../EmptyDashboard";
import Filters from "../Filters";

const NotesList = ({ notes, check, filteredNotes }) => {
  console.log(' this calle on chegae', notes);
  return !notes.length ? (
    <EmptyDashboard />
  ) : (
      <React.Fragment>
        <Filters />
        {filteredNotes.length > 0 ? filteredNotes.map((note) => (
          <Note key={note.id} note={note} />
        )) : notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </React.Fragment>
    );
};

const mapStateToProps = ({ notes }) => ({
  notes: notes.notes,
  filteredNotes: notes.filteredNotes,
});

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  filteredNotes: PropTypes.array,
};

export default connect(mapStateToProps)(NotesList);
