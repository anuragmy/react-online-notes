/* eslint-disable no-unused-vars*/
/* eslint-disable eqeqeq*/
/* eslint-disable array-callback-return*/
import moment from "moment";
import { message } from "antd";
import * as actionTypes from "../actions/types";
import key from "react-key-string";

const initialState = {
  notes: [],
  renderNotes: true,
  filteredNotes: [],
};

export default (state = initialState, action = {}) => {
  const { payload, type } = action;
  const { notes, renderNotes } = state;
  switch (type) {
    case actionTypes.DELETE_NOTE:
      message.success("Note deleted!");
      return {
        ...state,
        notes: notes.filter((note) => note.id !== payload),
      };

    case actionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [
          ...notes,
          {
            id: key.generate(),
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
          note.id === payload.id ? (note = payload) : note
        ),
      };

    case actionTypes.SORT_NOTES:
      if (payload === "desc") {
        const dec = renderNotes
          ? notes.sort(
              (a, b) =>
                new moment(b.date).format("YYYY-MM-DD") -
                new moment(a.date).format("YYYY-MM-DD")
            )
          : state.filteredNotes.sort(
              (a, b) =>
                new moment(b.date).format("YYYY-MM-DD") -
                new moment(a.date).format("YYYY-MM-DD")
            );
        if (renderNotes)
          return {
            ...state,
            notes: dec
              .slice(0)
              .reverse()
              .map((note) => note),
          };
        else
          return {
            ...state,
            filteredNotes: dec
              .slice(0)
              .reverse()
              .map((note) => note),
          };
      } else {
        if (renderNotes)
          return {
            ...state,
            notes: notes.sort(
              (a, b) =>
                new moment(a.date).format("YYYY-MM-DD") -
                new moment(b.date).format("YYYY-MM-DD")
            ),
          };
        else {
          console.log("render false and lenght", state.filteredNotes.length);
          return {
            ...state,
            filteredNotes: state.filteredNotes.sort(
              (a, b) =>
                new moment(a.date).format("YYYY-MM-DD") -
                new moment(b.date).format("YYYY-MM-DD")
            ),
          };
        }
      }
    case actionTypes.SEARCH_NOTE:
      console.log("pau", payload);
      return {
        ...state,
        notes: notes.filter((note) => note.title.includes(payload)),
      };
    case actionTypes.FILTER_NOTES:
      const { startDate, endDate } = payload;
      console.log(startDate, endDate);
      const ns = moment(startDate, "YYYY-MM-DD").format("YYYY-MM-DD");
      const ed = moment(endDate, "YYYY-MM-DD").format("YYYY-MM-DD");

      console.log(ns, ed);
      const filteredNotes = notes.filter((note) =>
        moment(note.date).isBetween(ns, ed, undefined, "[]") ? note : ""
      );
      console.log("fil", filteredNotes);
      return {
        ...state,
        filteredNotes,
      };
    case actionTypes.RENDER_NOTES:
      return {
        ...state,
        renderNotes: payload,
        filteredNotes: [],
      };

    default:
      return state;
  }
};
