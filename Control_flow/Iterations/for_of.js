// for of

// ["", "", "", ""]
// [{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num)
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value );
}
// const myObject = {
//     game1 : 'NFS'
//     game2 : 'Spiderman'
// };

// for (const [key, value] of myObject) {
//     console.log(KeyboardEvent, ':-', value);
//} // A plain object ({}) is not iterable... for of works only on iterables (arrays, strings, Maps, Sets, etc.)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swifft: 'swift by apple'
}

for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
// }   // We cannot iterate map using for in loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
     {
        languageName: "Java",
        languageFileName: "java"
    },
     {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})