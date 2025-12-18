// Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log(`DB connected`);
}) (); // named function IIFE

(  (name) =>{
    console.log(`DB connected TWO ${name}`);
}) ('Lalitha'); // anonymous function IIFE