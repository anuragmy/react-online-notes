/* eslint-disable no-unused-vars*/
/* eslint-disable eqeqeq*/
import moment from "moment";
import { message } from "antd";
import * as actionTypes from "../actions/types";
import { checkIsDateBetween } from "../utils";

const initialState = {
  notes: [
    {
      id: 1,
      date: "2020-12-10",
      title: "My forst note",
      description: "Lorem I as good",
    },
    {
      id: 2,
      date: "2020-12-10",
      title: "My forst note",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
    },
    {
      id: 3,
      date: "2020-12-11",
      title: "My forst note",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
    },
    {
      id: 4,
      date: "2020-12-12",
      title: "My forst note",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
    },
    {
      id: 5,
      date: "2020-12-13",
      title: "My forst note",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
    },
    {
      id: 6,
      date: "2020-12-14",
      title: "My forst note",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
    },
    {
      id: 7,
      date: "2020-12-15",
      title: "My forst note",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
    },
    {
      id: 8,
      date: "2020-12-16",
      title: "My forst note",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
    },
    {
      id: 9,
      date: "2020-12-17",
      title: "My forst note",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
    },
    {
      id: 10,
      date: "2020-12-18",
      title: "My forst note",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
    },
    {
      id: 11,
      date: "2020-12-19",
      title: "My forst note",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
    },
  ],
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
            id: notes.length + 1,
            date: moment().format("Do MMM YYYY"),
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
    case actionTypes.CLEAR_DATE:
      console.log("clear state called");
      console.log(state);
      return state;

    case actionTypes.FILTER_NOTES:
      const { startDate, endDate } = payload;
      console.log(payload);
      const filteredNotes = notes.filter((note) =>
        moment(note.date).isBetween(startDate, endDate, undefined, "[]")
      );
      console.log(filteredNotes);
      return state;
    case actionTypes.SORT_NOTES:
      return {
        ...state,
        notes: payload === 'dsc' ?
          notes.sort((a, b) => new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1)
          :
          notes.sort((a, b) => new Date(a.date).getTime() > new Date(b.date).getTime() ? 1 : -1)
      }
    // return {
    //   ...state,
    //   notes:
    //     payload === "dsc"
    //       ? notes.sort((a, b) =>
    //         new Date(a.date) - new Date(b.date) ? -1 : 1
    //       )
    //       : notes.sort((a, b) =>
    //         new Date(a.date) - new Date(b.date) ? 1 : -1
    //       ),
    // };

    default:
      return state;
  }
};
