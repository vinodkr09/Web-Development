// This Keyword
// The This Keyeord in Javascript is used to refer the current object of a function. It is used to access the Properties and methods of the current object.

const user = {
    username: "Saket",
    price: 999,

WelcomeMessage: function(){
    console.log(`${this.username}, welcome to Website`);
    //console.log(this)
    }
}
user.WelcomeMessage(); // Saket, welcome to Website
user.username = "Shri Krishna"
user.WelcomeMessage(user.username) //  Shri Krishna, welcome to Website


function chai(){
    let userman = "Saket"
    console.log(this.userman);  // Output is  Undefined because 'this' refers to the global object (window in browser), so this keyword jo hai object andar kaam kar raha hai means iss tarh function banane par this keyword kaam nahi karta hai.
}
chai()


const coffee = function(){
    let userman = "Saket"
    console.log(this.userman);  // Output is  Undefined because 'this' refers to the global object (window in browser), so this keyword jo hai object andar kaam kar raha hai means iss tarh function banane par this keyword kaam nahi karta hai.
}
coffee()

  
// Arrow Function
//   () => {}  This is basic syntax of Arrow function

const addTwo = (num1, num2) => {
    return num1 + num2;  // Explicitly means mentioning the return keyword not necessary as arrow functions
}
console.log(addTwo(5,6))    // output: 11


// another way to write arrow function is by implicit function means by removing  the curly braces and just writing code after
const addThree = (num1, num2, num3) => num1 + num2 + num3
console.log(addThree(1,2,3))   //  output: 6

// const addThree = (num1, num2, num3) => (num1 + num2 + num3)
// console.log(addThree(1,2,3))   //  output: 6











