/* eslint-disable no-unused-vars*/
/* eslint-disable eqeqeq*/
/* eslint-disable react/jsx-no-duplicate-props*/

import React from "react";
import { useDispatch } from "react-redux";
import { message, DatePicker } from "antd";
import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import moment from "moment";
import { useHistory, useLocation } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addNote, editNote } from "../../actions/notesActions";

const EditNote = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const { notes, match } = props;

  console.log("m", moment().format("DD-MM-YYYY"));
  // states
  const [description, setText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState(moment());
  const [id, setId] = React.useState("");
  const [submitType, setSubmitType] = React.useState("Update");
  const [type, setType] = React.useState("update");

  React.useEffect(() => {
    // checking type of form based on route
    if (location) {
      if (location.pathname === "/add") {
        setSubmitType("Add");
        setType("add");
      }

      if (match) {
        // setting the note based on ID or new note form
        const note = notes.filter((note) => note.id == match.params.id);
        if (!note.length) {
          history.push("/");
        } else {
          // formating html text to string,  coming from editor
          setId(note[0].id);
          setText(note[0].description.replace(/<[^>]+>/g, ""));
          setTitle(note[0].title);
        }
      }
    }
  }, [location, match]);

  const changeDate = (incomingDate) => {
    console.log("change date", incomingDate);
    // console.log(moment(incomingDate._d).format("YYYY-MM-DD"));
    setDate(incomingDate);
  };

  const handleChange = (value) => setText(value);
  const handleChangeTitle = (e) => setTitle(e.target.value);
  const Back = () => history.push("/");

  const modules = {
    toolbar: ["bold", "italic", "underline", "strike"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return message.error("Please add title!", 1);
    if (!description) return message.error("Please add description!", 1);
    if (!date) return message.error("Please add date!", 1);
    let finalDate = "";
    if (date instanceof moment) {
      finalDate = moment(date).format("YYYY-MM-DD");
      setDate(moment(date).format("YYYY-MM-DD"));
    } else finalDate = date;

    if (type === "add") {
      message.success("Note Added!");
      console.log("date form comp", date);
      dispatch(
        addNote({
          title,
          description: description.replace(/<[^>]+>/g, ""),
          date: finalDate,
        })
      );
    } else
      dispatch(
        editNote({
          title,
          date: finalDate,
          description: description.replace(/<[^>]+>/g, ""),
          id,
        })
      );
    history.push("/");
  };

  return (
    <React.Fragment>
      <label>Date</label>
      <DatePicker
        allowClear={false}
        defaultValue={date}
        format="DD/MM/YYYY"
        style={{ width: 220 }}
        onChange={changeDate}
        style={{ marginTop: 20, marginBottom: 20 }}
      />

      <Form style={{ marginTop: 20 }}>
        <Form.Field required>
          <label required>Title</label>
          <input
            placeholder="Title"
            onChange={handleChangeTitle}
            value={title}
          />
        </Form.Field>

        <ReactQuill
          value={description}
          placeholder="Enter your notes here!"
          onChange={handleChange}
          modules={modules}
        />
        <Button
          primary
          onClick={handleSubmit}
          content={submitType}
          style={{ marginTop: 20 }}
        />
        <Button
          negative
          onClick={Back}
          content="Cancel"
          style={{ marginTop: 20 }}
        />
      </Form>
      <style jsx="true">
        {`
          .ql-editor {
            min-height: 200px;
          }
        `}
      </style>
    </React.Fragment>
  );
};

const mapStateToProps = ({ notes }) => ({
  notes: notes.notes,
});

export default connect(mapStateToProps)(EditNote);
