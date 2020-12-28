/* eslint-disable no-unused-vars*/
/* eslint-disable eqeqeq*/
/* eslint-disable array-callback-return*/
import moment from "moment";
import { connect } from 'react-redux'
import * as actionTypes from "../actions/types";

const initialState = {
  filteredNotes: [],
};

const FilterNotesReducer = (state = initialState, action = {}, notes) => {
  const { payload, type } = action;
  switch (type) {
    case actionTypes.FILTER_NOTES:
      const { startDate, endDate } = payload;
      const newStartDate = moment(startDate).format('YYYY-MM-DD')
      const newEndDate = moment(endDate).format('YYYY-MM-DD')
      const filterDates = notes.filter(note => (moment(note.date).isBetween(newStartDate, newEndDate, undefined, '[]')) ? note : '')
      console.log('dates', filterDates);
      return {
        ...state,
        filteredNotes: [],
      }

    default:
      return state;
  }
};

const mapStateToProps = state => ({
  notes: state.notes.notes
});

export default connect(mapStateToProps)(FilterNotesReducer);