// Primitive Data Types

// 7 types : String, Number, BigInt, Boolean, Undefined, Symbol, Null, BigInt

const score = 100
const scoreValue = 99.9

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol("12345") // unique identifier
const anotherId = Symbol("12345")

//const bigNumber = 9007199254741991n

console.log(id === anotherId); // false

// Reference Data Types (non-primitive)

// 3 types : Object, Array, Function

const heros = ["Shaktiman", "Naagraj", "Doga"] // Array
let myObj = {
    name: "Lalitha",
    age: 19,
}

function myFunction(){
    console.log("Hello World");
}

console.log(typeof bigNumber); // object

console.log(typeof scoreValue); // number
console.log(typeof heros); // object
console.log(typeof myFunction); // function
console.log(typeof userEmail); // undefined
console.log(typeof anotherId); // symbol

