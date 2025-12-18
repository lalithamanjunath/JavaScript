// if

// const temperature = 42
// if (temperature <60) {
//   console.log("It is cold outside! so sit inside and enjoy coffee");
// } else{
//     console.log("It is hot outside! so go for a swim");
// }

// console.log("After if else block");


// <, >, <=, ==, !=, ===, !==

const score = 300

// if (score > 100){
//     const power = "fly"
//     console.log(`You have a super power to fly ${power}`)
// }

// console.log(`You have a super power to fly ${power}`) // ReferenceError: power is not defined

// short hand code

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // this will give error - aisa mat karna chahe

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less then 900")
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if ( userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
}

if ( loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User logged in")
}