function sayMyName() {
   console.log("L");
   console.log("A");
   console.log("L");
   console.log("I");
   console.log("T");
   console.log("H");
   console.log("A");
}

sayMyName();

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

addTwoNumbers(3, 4); // function call or invoke

const result = addTwoNumbers(5, 7);
console.log("RESULT: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter username");
        return;
    }
    return `$(username) just logged in`;
}

// console.log(loginUserMessage("Lalitha"));
console.log(loginUserMessage("Lalitha"));

function calculateCartPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500)); // 200 

const user = {
    username: "Lalitha",
    price: 500,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}

// handleObject(user);
handleObject({
    username: "ChatGPT",
    price: 0,
});

const myNewArray = [200, 400 , 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 4000]));