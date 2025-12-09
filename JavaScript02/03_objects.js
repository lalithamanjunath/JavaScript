// Singleton Object
// object.create() method to create a singleton object

// Object literal syntax to create a singleton object
const mySymbol = Symbol("Key1"); // creating a symbol

const JsUser = {
    name: "Jeevith",
    [mySymbol]: "key1", // ✅ Symbol property
    age: 19,
    Location: "Bangaluru",
    email: "jeevith@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"],
    greeting: function() { // ✅ add methods before freeze
        console.log("Hello JsUser");
    },
    greetingTwo: function() {
        return `Hello ${this.name}! Welcome back`;
    }
};

// Accessing properties
console.log(JsUser.email);        // "jeevith@google.com"
console.log(JsUser["email"]);     // "jeevith@google.com"
console.log(JsUser[mySymbol]);    // "key1"

// Updating property
JsUser.email = "jeevith@chatgpt.com";

// Freezing object
Object.freeze(JsUser);

// This update will be ignored
JsUser.email = "jeevith@microsoft.com";
console.log(JsUser.email);        // "jeevith@chatgpt.com"

// Calling methods
JsUser.greeting();                // "Hello JsUser"
console.log(JsUser.greetingTwo()); // "Hello Jeevith! Welcome back"