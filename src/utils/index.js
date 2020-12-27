import moment from "moment";

export const checkIsDateBetween = (dates, checkDate) => {
  const { startDate, endDate } = dates;
  console.log("startDate", startDate);
  console.log("endDate", endDate);
  console.log("ceck", checkDate);
  return moment(checkDate).isBetween(startDate, endDate, undefined, "[]");
};
