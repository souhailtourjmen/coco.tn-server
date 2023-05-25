function addOneWeekToDate(date) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 7);
  return newDate;
}
module.exports = { addOneWeekToDate };
