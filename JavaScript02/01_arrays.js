// Array

const myArray = [1, 2, 3, 4, 5, true, "Hello", null] // array with mixed data types
const myHeroes = ["Shaktiman", "Superman", "Batman", "Spiderman"]

const myArray2 = new Array(1, 2, 3, 4, 5) // another way to create array

//console.log(myArray[0]); // access first element

// Array Methods
// myArray.push(6) // add element at the end
// myArray.push(8)
// myArray.pop() // remove last element
// myArray.unshift(12) // add element at the beginning
// myArray.shift() // remove first element

// console.log(myArray.includes(4)); // check if element exists
// console.log(myArray.indexOf(3)); // get index of element

const newArray = myArray.join(" - ") // join elements into a string
console.log(newArray);

console.log(myArray);

// Slice and Splice

console.log("A", myArray);

const myN1 = myArray.slice(1,3) // slice from index 1 to 3 (not inclusive)
console.log(myN1);
console.log("B", myArray);

const myN2 = myArray.splice(1,3) // splice from index 1, remove 3 elements
console.log(myN2);
console.log("C", myArray);