/* eslint-disable no-unused-vars */
import React from "react";
import { DatePicker } from "antd";
import { Button, Select, Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { sortNotes, searchNote, filterNotes } from "../../actions/notesActions";

const Filters = () => {
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;

  const [sort, setSort] = React.useState(false);
  const [text, setText] = React.useState("");
  const [filter, setFilter] = React.useState("");
  const [, setStartDate] = React.useState("");
  const [, setEndDate] = React.useState("");

  const filterDates = (value) => {
    // moment conversion to date format
    // 'value' gives object with '_i' property
    // having array of moment date selected

    setStartDate(moment(moment(value)._i[0]).format("YYYY-MM-DD"));
    setEndDate(moment(moment(value)._i[1]).format("YYYY-MM-DD"));

    // not using startDate and endDate directly as they may not
    // update immidiately due to asynchronous nature of state update

    dispatch(
      filterNotes({
        startDate: moment(moment(value)._i[0]).format("YYYY-MM-DD"),
        endDate: moment(moment(value)._i[1]).format("YYYY-MM-DD"),
      })
    );
  };

  const FilterOptions = [
    { key: 1, value: "days", text: "Filter By Days" },
    { key: 2, value: "month", text: "Filter By Month" },
    { key: 3, value: "year", text: "Filter By Year" },
  ];

  const onChange = (e) => {
    setText(e.target.value);
    dispatch(searchNote(e.target.value));
  }

  const changeFilter = (e, { value }) => setFilter(value);
  const displayFilter = () => {
    switch (filter) {
      case "days":
        return <RangePicker style={{ marginTop: 10 }} onChange={filterDates} />;
      case "month":
        return (
          <RangePicker
            style={{ marginTop: 10 }}
            picker="month"
            onChange={filterDates}
          />
        );
      case "year":
        return (
          <RangePicker
            style={{ marginTop: 10 }}
            picker="year"
            onChange={filterDates}
          />
        );
      default:
        return "";
    }
  };

  const changeOrder = () => {
    setSort(!sort);
    if (!sort) dispatch(sortNotes("asc"));
    else dispatch(sortNotes("desc"));
  };

  return (
    <div style={{ marginTop: 10 }}>
      {/* <Input
        icon="search"
        placeholder="Title..."
        value={text}
        onChange={onChange}
        style={{ width: "70%", marginRight: 'auto' }}
      />
      <br /> */}
      <Button
        style={{ marginTop: 10 }}
        primary
        content={`${sort ? "old" : "new"} first`}
        icon={`${sort ? "arrow down" : "arrow up"}`}
        labelPosition="right"
        onClick={changeOrder}
      />
      <Select
        style={{ marginTop: 10 }}
        placeholder="Select Filter"
        options={FilterOptions}
        onChange={changeFilter}
      />
      <br />
      {displayFilter()}
    </div>
  );
};

export default Filters;
