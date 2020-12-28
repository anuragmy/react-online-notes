import { combineReducers } from 'redux';
import notesReducer from './notesReducer';
import notesFilterReducer from './notesFilterReducer';

export default combineReducers({
	notes: notesReducer,
	filter: notesFilterReducer,
});
