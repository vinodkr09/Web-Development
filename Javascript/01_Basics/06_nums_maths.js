// ################# Number in javascript ##################

const score = 400
console.log(score);  // output : 400

const balance = new Number(100)   // new is keyword  to create an object of a class, in this case it creates an object for the Number class with Output: 100
console.log(balance);  // output is [Number: 100]

console.log(balance.toString()); // output is 100
console.log(balance.toString().length);    // output is 3
console.log(balance.toFixed(2));     // output is 100.00  precision


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))   // output is 123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-In')); // output is 10,00,000      en-IN is indian value


// ################## Maths in JavaScript #######################

console.log(Math);  // output is Object [Math] {}
console.log(Math.abs(-4));  // abs stands for absolute value i.e it converts it into positive value so OUTPUT is 4
console.log(Math.round(4.6));  // output is 5
console.log(Math.ceil(4.2));  // ceiling means upper value so output is 5
console.log(Math.floor(4.9)); // floor means down value so output is 4
console.log(Math.min(4, 3, 6, 8)); // output is 3
console.log(Math.max(4,3,6,8));   // output is 8

console.log(Math.random()) ; // random number value is always between 0 and 1 so output is 0.9551714003655103
console.log((Math.random()*10) + 1);  // this will give us a random number between 1 to 11 because we multiply it by
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) ) + min ); // output is a random number between 10 to 20 used to find min and max value