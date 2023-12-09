let score = "33abc"
console.log(typeof score);
let valueInNumber = Number(score)     // it will convert any anything to Number, N should be in capital letter
console.log(typeof valueInNumber);  
console.log(valueInNumber)            // it will print NaN means "Not a Number"

// "33" => gives 33
// "33abc" => gives NaN
//  true => 1 ; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "Saket" => true
// "" => false  (i.e empty string)


let stringName = 33
let stringNumber = String(stringName)
console.log(stringName);
console.log(typeof stringNumber)