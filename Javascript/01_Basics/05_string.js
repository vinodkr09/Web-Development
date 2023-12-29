const name = "Saket Anand"
const repocount = 9
console.log(name + repocount); // output Saket Anand9
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// output is Hello my name is Saket Anand and my repo count is 9


const gamename = new String('Saket')
console.log(gamename[2]); // output is [String: 'Saket']

//Accessing of elements using index
console.log(gamename[2]);  //output is k

// converting string into uppercase() method
console.log(gamename.toUpperCase()); // output SAKET

//length of string
console.log(gamename.length)   // output 5

//character at index 
console.log(gamename.charAt(1)); // output a

//index of character 
console.log(gamename.indexOf('t'));  //output 4 

//using subtring() method
console.log(gamename.substring(0,4))    //output Sake

//using slice() method
console.log(gamename.slice(0,4));     //output Sake

//using slice() method negative index
console.log(gamename.slice(-4,-1));   //output ake

//using trim() method
const newStringOne = "      saketAnand       "
console.log(newStringOne);   // output with whitespace saketAnand
console.log(newStringOne.trim());  // output without whitespace(i.e it removes start and end space of string) saketAnand

// using replace() method
const url = "https://saketanand.com/saket%20anand"
console.log(url.replace('%20', '-'));   // output https://saketanand.com/saket-anand
console.log(url.includes('sundar'));    // false


// using split() method
const str = new String ('saket-anand-mast-insan-hai')
console.log(str.split("-"));    //output  [ 'saket', 'anand', 'mast', 'insan', 'hai' ]
