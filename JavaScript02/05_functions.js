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