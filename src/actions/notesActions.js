import * as actionTypes from "./types";

export const addNote = (data) => ({
  type: actionTypes.ADD_NOTE,
  payload: data,
});

export const editNote = (data) => ({
  type: actionTypes.EDIT_NOTE,
  payload: data,
});

export const deleteNote = (id) => ({
  type: actionTypes.DELETE_NOTE,
  payload: id,
});

export const searchNote = (data) => ({
  type: actionTypes.SEARCH_NOTE,
  payload: data,
});

export const sortNotes = (data) => ({
  type: actionTypes.SORT_NOTES,
  payload: data,
});

export const filterNotes = (data) => ({
  type: actionTypes.FILTER_NOTES,
  payload: data,
});

export const clearDate = () => ({
  type: actionTypes.CLEAR_DATE,
});
