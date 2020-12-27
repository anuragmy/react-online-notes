/* eslint-disable no-unused-vars*/

import React, { Component } from "react";
import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { getContact, updateContact } from "../../actions/contactActions";

const EditNote = (props) => {
	const { id } = props.match.params;
	const { notes } = props;
	const [text, setText] = React.useState("");
	const [title, setTitle] = React.useState("");

	React.useEffect(() => {
		// setting the note based on ID
	}, []);

	const handleChange = (value) => setText(value);
	const handleChangeTitle = (e) => setTitle(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit clicked");
	};


	return (
		<React.Fragment>
			<Form style={{ marginTop: 20 }}>
				<Form.Field required>
					<label required>Title</label>
					<input placeholder="Title" onChange={handleChangeTitle} value={title} />
				</Form.Field>
				<ReactQuill
					value={text}
					placeholder="Enter your notes here!"
					onChange={handleChange}
				/>
				<Button
					primary
					type="submit"
					onClick={handleSubmit}
					content="Update"
					style={{ marginTop: 20 }}
				/>
			</Form>
		</React.Fragment>
	);
};

const mapStateToProps = ({ notes }) => ({
	notes: notes.notes,
});

export default connect(mapStateToProps)(EditNote);
