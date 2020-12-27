/* eslint-disable no-unused-vars*/

import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getContacts } from '../../actions/contactActions';


const Contacts = ({ contacts = [] }) => {

	return (
		<React.Fragment>
			<h1 className="display-4 mb-2">
				<span className="text-danger">My</span> Notes
				</h1>
			{contacts.map((contact) => <Contact key={contact.id} contact={contact} />)}
		</React.Fragment>
	);
}


const mapStateToProps = (state) => ({
	contacts: state.notes.notes
});

// Contacts.propTypes = {
// 	contacts: PropTypes.array.isRequired,
// 	getContacts: PropTypes.func.isRequired
// };

export default connect(mapStateToProps)(Contacts);
