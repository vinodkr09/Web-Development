// Declartion of Array
const myArr = [4, 6, 10, 3, 12, 5]
const myHeros = ["shaktiman", "saket", "chiks"]
console.log(myArr[0]);

// Another way to declare Array using new keyword
const myArr2 = new Array(1, 2, 3, 4, 5)

// Array Methods
myArr.push(9)  // push method is used to  Add element at last index
console.log(myArr); // output is: 4, 6, 10, 3, 12, 5,  9

myArr.pop()    // pop method is used to remove the last element from array
console.log(myArr); // output is: 4, 6, 10, 3, 12, 5

myArr.unshift(56) // unshift method is used to Add element at first index and shifts all elements to right side
console.log(myArr); // output is: 56,  4, 6, 10, 3, 12, 5

myArr.shift()   // shift method is used to remove first element from array
console.log(myArr); // output is : 4, 6, 10, 3, 12, 5

console.log(myArr.includes(10)); // includes method returns true if a specified value is present in an array otherwise it return false so here output is true

console.log(myArr.indexOf(10)); // Output will be 2 because 10 is at index  2 in array and if we don't find any matching element then it returns -1
console.log(myArr.indexOf(34)); // output will be -1 bcz  there is no such number present in array

const newArr = myArr.join() // join method is used to convert all elements into string and return as a single string
console.log(newArr); // output is: 4,6,10,3,12,5 which is string
console.log(typeof(newArr)); // output is string because we are passing string inside constructor

// Slice and  Splice methods
console.log("A", myArr)  // output: A [ 4, 6, 10, 3, 12, 5 ]

const myn1 =  myArr.slice(1, 4) // it returns elements starting from index 1 till index 4 so output is : 6, 10, 3

console.log(myn1); //output: [ 6, 10, 3 ]
console.log("B", myArr); // output: B [ 4, 6, 10, 3, 12, 5 ]

const myn2= myArr.splice(1, 2) // it removes the element from original array and return the removed element
console.log("C", myArr); //output: C [ 4, 3, 12, 5 ]
console.log(myn2); //output is [6, 10] as we have removed two elements starting from index 1 (i.e., 6 and 10) and return removed elements

// main Difference b/w slice() and splice() method
//  slice() method does not change the original array but returns a new array with given range elements
//  splice() method changes the original array by removing elements and returning the removed elements as an array