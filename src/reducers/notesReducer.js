/* eslint-disable no-unused-vars*/

import {
	GET_CONTACTS,
	DELETE_CONTACT,
	ADD_CONTACT,
	GET_CONTACT,
	UPDATE_CONTACT,
} from "../actions/types";

const initialState = {
	notes: [
		{
			id: 1,
			title: "My forst note",
			description:
				"Lorem I as good",
		},
		{
			id: 2,
			title: "My forst note",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
		},
		{
			id: 3,
			title: "My forst note",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popu",
		},
	],
};

export default function (state = initialState, action = {}) {
	switch (action.type) {
		// case GET_CONTACTS:
		// 	return {
		// 		...state,
		// 		contacts: action.payload
		// 	};
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) => contact.id !== action.payload
				),
			};

		case ADD_CONTACT:
			return {
				...state,
				contacts: [action.payload, ...state.contacts],
			};
		case GET_CONTACT:
			return {
				...state,
				contact: action.payload,
			};

		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map((contact) =>
					contact.id === action.payload.id
						? (contact = action.payload)
						: contact
				),
			};

		default:
			return state;
	}
}
