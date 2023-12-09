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
console.log(stringNumber);
console.log(typeof stringNumber)



//    **************************OPERATIONS*************************************
let value =3
let negvalue = -value
console.log(negvalue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%3)

// String
let str1 = "Saket"
let str2 = " Anand"
let str3 = str1 + str2
console.log(str3)


console.log("1" + 2)        // Agar string phele hai to sara value as a string treat hoga
console.log(1 + "2")        // Agar string last me tb phele normal jo evalutation hai jo jayega phir baad me string ka hoga
console.log("2"+2+2)        // Agar string phele hai to sara value as a string treat hoga
console.log(1 + 2 + "2")     // Agar string last me tb phele normal jo evalutation hai jo jayega phir baad me string ka hoga 
console.log((3+4) * 5 % 3);    // best way to write in brackets


console.log(+true)  // It gives output as 1
console.log(+"")   //It Gives output as 0



let gameCounter = 100
gameCounter++;
console.log(gameCounter);   // output will be 101