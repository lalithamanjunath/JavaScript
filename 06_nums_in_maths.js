const score = 100;

const balance = new Number(50); // number object

console.log(balance); // [Number: 50]

console.log(balance.toString().length); // 2
console.log(balance.toFixed(3)); 

const otherNumber = 123.4567;
console.log(otherNumber.toPrecision(4)); // 123.5 // rounds to 4 significant digits

const hundreds =1000000
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000

// +++++++++++++++++++ Math Object ++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8
console.log(Math.random()); // random number between 0 and 1
console.log((Math.random() * 10 ) + 1 ); // random number between 1 and 10
console.log(Math.floor((Math.random() * 10 ) + 1 )); // random integer between 1 and 10


const min = 10;
const max = 20;     

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 10 and 20

