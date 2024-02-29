// If And Else

const temperatrure = 41
if(temperatrure < 35){
    console.log("Temperature less than 50");
}else{
    console.log("Temperatrure greater than 50");
}
console.log("Execute");

// opeartor: <, >, <= , >= , == , != (not equal), ===  (strictly equal), !=== (strict not equal), || (OR) , && (AND)

const score = 300
if(score > 100){
    let power = "fly"
    console.log(`User power: ${power}`)  // output: User power: fly
}

// Short Hand Notation
const balance = 1000
if(balance > 500) console.log("Test"); // output: Test

// Nesting
if(balance < 500){
    console.log("Less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else if(balance < 900){
    console.log("less than 900")
} else{
    console.log("Less than 1200")
}
// Output will be : Less than 1200


const UserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
if (UserLoggedIn && debitCard){
    console.log("Allow to Buy clothes from Myntra")
}

if(LoggedInFromEmail || LoggedInFromGoogle){
    console.log("User Logged In")
}