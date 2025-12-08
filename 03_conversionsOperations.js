let score = 33

//console.log(typeof score);
//console.log(typeof (score));

let valueINNumber = Number(score) // explicit conversion
//console.log(typeof valueINNumber);
//console.log(valueINNumber);

//"33" => 33 - ye convert hota hai
//"33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn); // object

// 1 => true
// 0 => false
// "" => false
// "Lalitha" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);; // object

//  ****************** Operations ********************

let value = 3
let negValue = -value
//console.log(negValue);

console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2/2); // 1 
console.log(5%2); // 1 (remainder)
console.log(5**2); // 25 (exponentiation) 5*5

let str1 = "Hello "
let str2 = "Lalitha"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // "12"
// console.log(1 + "2"); // "12"
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // "32"

// console.log( 3 + 2 * 2 % 3 ); // 3 - Ye khafi exam ke liye important hai lekin ye code readability ke liye acha nahi hai

console.log(+true); // 1
console.log(+"");

let num1, num2, num3 = 2 + 2

let gameCounter = 100
gameCounter++;  // 101
console.log(gameCounter);

