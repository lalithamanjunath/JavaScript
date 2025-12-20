// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

 const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

//  const newNums = myNums.filter( (num) => {
//      return num > 4
//  }) // yaha [] print hota hai

// const newNumbers = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2007 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1971, edition: 2004 },
    { title: 'Book Three', genre: 'Fiction', publish: 1989, edition: 2007 },
    { title: 'Book Four', genre: 'Science', publish: 1994, edition: 2003 },
    { title: 'Book Five', genre: 'Fiction', publish: 1979, edition: 2006 },
    { title: 'Book Six', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Seven', genre: 'Fiction', publish: 1986, edition: 2008 },
    { title: 'Book Eight', genre: 'History', publish: 1980, edition: 2009 },
    { title: 'Book Nine', genre: 'Fiction', publish: 1997, edition: 2005 },
    
];

let userBooks = books.filter( (bk) => bk.genre === 'History');
userBooks = books.filter( (bk) => {
    return bk.publish >= 1980 && bk.genre === 'History'
});

console.log(userBooks);