const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNums = myNumbers.map( (num) => { return num + 10});

// const newNums = myNumbers
//                 .map((num) => num * 10)
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)

//  console.log(newNums);



 // Reduce

  const myNums = [1, 2, 3]
//   const myTotal = myNums.reduce(function (acc , currval){
//     console.log(`acc val: ${acc} and curr val ${currval}`);
//     return acc + currval
//   }, 0)
  
const myTotal = myNums.reduce( (acc, curr) => (acc+curr), 0 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python",
        price: 3999
    },
    {
        itemName: "rust",
        price: 4999
    },
    {
        itemName: "go",
        price: 6999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);