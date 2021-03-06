import React from "react";
import Note from "../Note";
import PropTypes from "prop-types";
// import { Input } from "semantic-ui-react";
import { connect } from "react-redux";
import EmptyDashboard from "../EmptyDashboard";
import Filters from "../Filters";

const NotesList = ({ notes, filteredNotes = [], renderNotes }) => {
  console.log(notes);
  return !notes.length ? (
    <EmptyDashboard />
  ) : (
    <React.Fragment>
      <Filters />
      {!renderNotes
        ? filteredNotes.map((note) => <Note key={note.id} note={note} />)
        : notes.map((note) => <Note key={note.id} note={note} />)}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  notes: state.notes.notes,
  renderNotes: state.notes.renderNotes,
  filteredNotes: state.notes.filteredNotes,
});

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  filteredNotes: PropTypes.array,
};

export default connect(mapStateToProps)(NotesList);
