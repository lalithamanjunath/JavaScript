// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a); // 10
}
 
for (let i = 0; i< Array.length; i++) {
    const element = array[i];
}

console.log(a); // 300
console.log(b); // b is not defined here
console.log(c); // c is not defined here