const marvalHeroes = ["Thor", "Ironman", "Spiderman", "Hulk"];
const dcHeroes = ["Batman", "Superman", "Flash"]

marvalHeroes.push(dcHeroes); // adds the entire dcHeroes array as the last element

// console.log(marvalHeroes);
// console.log(marvalHeroes[3] [1]); // accessing "Superman" from the nested array

 const allHeroes = marvalHeroes.concat(dcHeroes); // this does not modify marvalHeroes, it returns a new array
 console.log(allHeroes);

 const allnewHeroes = [...marvalHeroes, ...dcHeroes]; // spread operator to merge arrays
 console.log(allnewHeroes);

 const anotherArray = [1,2,3,[4,5,[6,4],7,8]];
 const flatArray = anotherArray.flat(Infinity); // flattening nested arrays
 console.log(flatArray);

 console.log(Array.isArray("Hello")); // false
 console.log(Array.from("Hello")); // ['H', 'e', 'l', 'l', 'o']
 console.log(Array.from({name: "Jeeva"})) ; // [undefined] khafi intresting hai 

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
 