const days = ["Sun", "Mon", "Tue", "Wed", " Thur", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const d = new Date();
export const day = d.getDate();
export const dayInWords = days[d.getDay()];
export const month = months[d.getMonth()];
