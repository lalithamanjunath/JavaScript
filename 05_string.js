const name = "Lalitha"
const repoCount = 50

// console.log(name + repocount + "Value"); // ye old syntax hai 

// console.log(`Hello, I'm ${name} and my repo count is ${repoCount}`); // modern syntax hai aur khafi readable bhi 

 const gameName = new String("Chess-com") // string object

 console.log(gameName[0]); // C
 console.log(gameName.__proto__); // prototype of string object

// console.log(gameName.length); // 5
// console.log(gameName.toUpperCase()); // CHESS
// console.log(gameName.charAt(2)); // e
// console.log(gameName.indexOf('s')); // 3

 const newString = gameName.substring(0,4)
 console.log(newString); // Ches

const anotherString = gameName.slice(-8,4)
console.log(anotherString); // Ches

const newString2 = "    Lalitha    "
console.log(newString2); //     Lalitha
console.log(newString2.trim()); // Lalitha

const url = "www.lalithatutorials.com/"
console.log(url.replace("com", "in")); // www.lalithatutorials.in/

console.log(url.includes("lalitha")); // true
console.log(url.includes("youtube")); // false

console.log(gameName.split('')); // [ 'C', 'h', 'e', 's', 's', '-', 'c', 'o', 'm' ]