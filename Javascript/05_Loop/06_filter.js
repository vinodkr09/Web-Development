// filter
// filter() method creates a new array filled with elements that pass a test provided by a function.
// filter is also callback function
// syntax: array.filter(callbackFunction)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {
    return num > 4   // when we using the scope then write return  keyword otherwise it will show error because of arrow functions and if you are not using scope the directly write: num > 4
})
console.log(newNums); // [5, 6, 7, 8, 9, 10]


const books = [
    {
        title: 'Book one', genre: 'fiction', publish: 1981, edition: 2004 },
    {
        title: 'Book two', genre: 'science', publish: 1982, edition: 2005 },
    {
       title: 'Book three', genre: 'fiction', publish: 1983, edition: 2006},
    {
        title: 'Book four', genre: 'history', publish: 1984, edition: 2007},
     {
        title: 'Book five', genre: 'non-fiction', publish: 1985, edition: 2008} 
];
let userBooks = books.filter( (bk) => bk.genre === 'fiction') //output
userBooks = books.filter( (bk) => {
    return bk.publish >= 1982 })  //output
console.log(userBooks);


const numbers = [1, 2, 3, 4, 5, 6]
const newNumber = numbers.map( (num) => {
    return num + 5;  
})
console.log(newNumber); //[6, 7,  8, 9, 10, 11]

// chaining
const result = numbers
                      .map( (num) => num * 10)
                      .map((num) => num + 1)
                      .filter((num) => num >= 4)

console.log(result)                    