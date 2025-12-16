const user = {
    username: "lalitha",
    price: 996,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
    }
}

user.welcomeMessage();  
// user.username = "Saam";
// user.welcomeMessage();

// console.log(this);


// function chai() {
//     let username = "manju";
//     console.log(this.username);
// }      // function ke andar this ko nahi use kar sakte hai

// chai();

// const chai = function() {
//     let username = "manju";
//     console.log(this.username);
// }

//chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username;"lalitha"})

// console.log(addTwo(4, 5));

// const myArray = [1,2,3,4,5]; 

// myArray.forEach()