// here function is a keyword
/***************************Function and Parameter************** */

function addTwoNumbers(num1, num2){   // here num1 and num2 are  parameters of the function.
    console.log(num1 + num2)
}
addTwoNumbers(5, 7);   // output: 12  here  we call the above defined function with two numbers as arguments.


function addThreeNumbers(num1, num2, num3){
    // let result = num1 + num2 + num3
    // return result  
    return num1 + num2 + num3;     // this line does the same thing as previous but in more readable way by using 'return' keyword.
}
const result = addThreeNumbers(4,6,8)
console.log("Result: ", result);     // Output: Result: 18


function loginUserMessage(username){
    return `${username} just LoggedIn`
}
console.log(loginUserMessage("saketanand09"))   // Output: saketanand09 just LoggedIn
console.log(loginUserMessage())  // output:  undefined just LoggedIn
 
//  ! this exaclamatory mark converts True into false and false into True


function CalculateCartPrice(...num1){   // here  ... before num1 is called Rest operator that it can take any number of argument in an array format
    return num1
}
console.log(CalculateCartPrice(200, 400, 500, 600))  // output: [ 200, 400, 500, 600 ]


function CalcUlatePrice(val1, val2, ...num2){  // val1  and val2 are normal parameter ,...num2 is rest parameter
    return num2
}
console.log(CalcUlatePrice(100, 200, 300, 400));  // Output: [ 300, 400 ]


// Function with Object
const user = {
    username: "Saket",
    price: "200"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)   output: Username is saket and price is 200
//        OR
handleObject({
    username: "Vinod",
    price: "543"
})       // output: Username is Vinod and price is 543


// Function with Array
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray))      // Output : 400
console.log(returnSecondValue([200, 400, 100, 600]))  // output: 400
