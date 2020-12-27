import React from "react";
import { DatePicker } from "antd";
import { Button, Input, Select } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { sortNotes, filterNotes, clearDate } from "../../actions/notesActions";

const Filters = () => {
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;

  const [sort, setSort] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

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
        startDate: startDate
          ? startDate
          : moment(moment(value)._i[0]).format("YYYY-MM-DD"),
        endDate: endDate
          ? endDate
          : moment(moment(value)._i[1]).format("YYYY-MM-DD"),
      })
    );
  };

  const FilterOptions = [
    { key: 1, value: "days", text: "Filter By Days" },
    { key: 2, value: "month", text: "Filter By Month" },
    { key: 3, value: "year", text: "Filter By Year" },
    { key: 4, value: "clear", text: "Clear" },
  ];

  const changeFilter = (e, { value }) => setFilter(value);
  const displayFilter = () => {
    if (filter === "clear") {
      console.log("clear called");
    }
    switch (filter) {
      case "days":
        return <RangePicker onChange={filterDates} />;
      case "month":
        return <RangePicker picker="month" onChange={filterDates} />;
      case "year":
        return <RangePicker picker="year" onChange={filterDates} />;
      default:
        return "";
    }
  };

  const changeOrder = () => {
    setSort(!sort);
    const newSort = !sort;
    if (newSort === true) dispatch(sortNotes("asc"));
    else dispatch(sortNotes("desc"));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <Button
        style={{ marginTop: 10 }}
        primary
        content={`Sort ${sort ? "Ascending" : "Descending"}`}
        icon={`${sort ? "arrow up" : "arrow down"}`}
        labelPosition="right"
        onClick={changeOrder}
      />
      <br />
      <Select
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
