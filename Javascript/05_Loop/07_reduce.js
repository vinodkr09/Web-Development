// Reduce() method
//  The reduce() is a predefined method used in JavaScript  to reduce an array to a single value by passing a callback function on element of the array.

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue,);
console.log(sumWithInitial);
// Expected output: 10


const myNums = [1,2,3]
const myTotal = myNums.reduce(function (accumulator, currentValue){
    console.log(`accumulator: ${accumulator} and currentValue ${currentValue}`)  // output: accumulator: 0 and currentValue 1
                                                                                           // accumulator: 1 and currentValue 2
                                                                                            //accumulator: 3 and currentValue 3
    return accumulator + currentValue
}, 0)
console.log(myTotal); // output: 6


// using Arror function
const myName = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(myName) // output: 6


const shoppingCart = [
    {
        itemName: "js course",
        Price: 2999
    },

    {
        itemName: "python course",
        Price: 3999
    },

    {
        itemName: "App development course",
        Price: 5999
    },

    {
        itemName: "Data science course",
        Price: 6999
    }
]

const priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.Price, 0 )
console.log(priceToPay) // Output: 19996