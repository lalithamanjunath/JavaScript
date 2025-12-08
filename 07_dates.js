// Dates

let myDate = new Date() // current date and time
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // date part only
// console.log(myDate.toLocalString());
// console.log(typeof myDate); // object

// let specificDate = new Date(2025, 11, 08) // specific date // month is 0-indexed (0=Jan, 11=Dec)
// let specificDate2 = new Date(2023, 0, 23, 5,3)
let specificDate3 = new Date("01-14-2025") // month-date-year format
//console.log(specificDate.toLocalString());

// let myTimeStamp = Date.now() // current timestamp in milliseconds
// console.log(myTimeStamp);
// console.log(myDate.getTime()); // timestamp from date object
// console.log(Math.floor(myDate.getTime() / 1000)); // timestamp in seconds

let newdate = new Date()
console.log(newdate.getFullYear()); // current year
console.log(newdate.getMonth() + 1);    // current month (0-11)
console.log(newdate.getDay());      // current day of week (0-6)

`${newdate.getDate()} and the time `

newdate.toLocaleString('default', {
    weekday: 'long',
} )