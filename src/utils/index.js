import moment from "moment";

export const checkIsDateBetween = (dates, checkDate) => {
  const { startDate, endDate } = dates;
  return moment(checkDate).isBetween(startDate, endDate, undefined, "[]");
};
