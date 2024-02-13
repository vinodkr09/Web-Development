const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros= ["Batman","Superman","Wonder Woman"];
const allHeros = marvel_heros.concat(dc_heros)  // concat methods Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(allHeros); //output: ['thor','Ironman','Spiderman','Batman','Superman','Wonder Woman']

const all_new_heros = [...marvel_heros, ...dc_heros]  // here  we are using the spread operator(i.e. dot dot dot) to combine two arrays into one array like concat method
console.log(allHeros); // output: ['thor','Ironman','Spiderman','Batman','Superman','Wonder Woman']


const another_array =[1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]] //  array within an array
const first_array = another_array.flat(Infinity) //  flattening the entire array into one single dimension 
console.log(first_array); //  output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// flat method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// infinity is used  to make sure it will go on until there are no more nested arrays inside of other arrays.


console.log(Array.isArray("Saket")) //  output false because 'Saket' is not an Array but a string
console.log(Array.from("Saket"))  // output  ['S', 'a', 'k', 'e', 't'] because we converted the string
console.log(Array.from({name: "Saket"})) //  output: [] , because we passed an object instead of a string   

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));   // output [100, 200, 300] It creates an array with all the arguments given to it.