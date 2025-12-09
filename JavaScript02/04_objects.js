// const tinderuser = new Object();
const tinderUser = {}; // Object literal syntax

tinderUser.id = "123abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Jeevith",
            lastName: "Gowda"
        }
    }
}

console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

//const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2}; // spread operator
console.log(obj3);


const users =[
    {
        userId: 1,
        email:"h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // get all keys
console.log(Object.values(tinderUser)); // get all values
console.log(Object.entries(tinderUser)); // get key-value pairs

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // check if property exists