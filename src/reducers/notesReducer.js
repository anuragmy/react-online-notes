/* eslint-disable no-unused-vars*/
/* eslint-disable eqeqeq*/
/* eslint-disable array-callback-return*/
import moment from "moment";
import { message } from "antd";
import * as actionTypes from "../actions/types";
import key from 'react-key-string';


const initialState = {
  notes: [],
};

export default (state = initialState, action = {}) => {
  const { payload, type } = action;
  const { notes } = state;
  switch (type) {
    case actionTypes.DELETE_NOTE:
      message.success("Note deleted!");
      return {
        ...state,
        notes: notes.filter((contact) => contact.id !== payload),
      };

    case actionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [
          ...notes,
          {
            id: key.generate(),
            date: moment().format("YYYY-MM-DD"),
            ...payload,
          },
        ],
      };

    case actionTypes.EDIT_NOTE:
      message.success("Note Updated!");
      console.log("data", payload);
      return {
        ...state,
        notes: notes.map((note) =>
          note.id === payload.id
            ? (note = { ...payload, date: moment().format("YYYY-MM-DD") })
            : note
        ),
      };

    case actionTypes.SORT_NOTES:
      if (payload === 'desc') {
        const dec = notes.sort((a, b) => new moment(b.date).format('DD/MM/YYYY') - new moment(a.date).format('DD/MM/YYYY'));
        return {
          ...state,
          notes: dec.slice(0).reverse().map(note => note),
          filteredNotes: dec.slice(0).reverse().map(note => note),
        }
      }
      else if (payload === 'asc') {
        return {
          ...state,
          notes: notes.sort((a, b) => new moment(a.date).format('DD/MM/YYYY') - new moment(b.date).format('DD/MM/YYYY')),
          filteredNotes: notes.sort((a, b) => new moment(a.date).format('DD/MM/YYYY') - new moment(b.date).format('DD/MM/YYYY')),
        }
      }
      else return;
    case actionTypes.SEARCH_NOTE:
      console.log('pau', payload)
      return {
        ...state,
        notes: notes.filter(note => note.title.includes(payload)),
      }
    default:
      return state;
  }
};
