// Truthy and falsy value

const UserEmail = "saketanand@gmail.com"
if(UserEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email")
}
// output: Got user email

// Falsy Value: false, 0, -0, BigInt 0n, "" (empty string), null, undefined, and NaN are all falsy values in JavaScript.

// Truthy value: [] (Empty Array), "0" (String), 'false'(String), " ", {} (Object), function(){} (Empty function) 

const EmptyArray = []
if (EmptyArray.length === 0){
    console.log("Array is empty");  //  This will be logged if the array is empty
}

const EmptyObject = {}
if(Object.keys(EmptyObject).length == 0) {
    console.log("The object is empty");   //This will be  logged if the object is empty
}



// Nullish Coalescing Operator (??)
 //It returns the first operand if it is not null or undefined , otherwise it returns the second operand.

 let val1;
 //val1 = 5 ?? 10       // Output : 5
 //val1 = null ?? 10    // output : 10
 //val1 = undefined ?? 15  // output 15
 val1 = null ?? 30 ?? 15  // output 30
 console.log(val1); 

 // Terniary Operator
 // Syntax: condition  ? exprIfTrue : exprIfFalse

 const iceCreamPrice = 100
 iceCreamPrice >= 80 ? console.log("Affordable") : console.log("Not  Affordable");   // output: Affordable
 iceCreamPrice <= 60 ?  console.log("Affordable") : console.log("Not  Affordable");  // output: Not Affordable
