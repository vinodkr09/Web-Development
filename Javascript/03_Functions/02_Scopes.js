// {} this curle braces is called scope
let a = 300  // global scope
if(true){
    let a = 20   // local scope
    const b = 40
    console.log("Inner:", a)    // 20 local scope
}
console.log(a)// 300 because the variable 'a' in the if block has local scope and it does not exist outside of that block so it prints 300 which is the value of global scope.


// Nested Scopes
// In nested function, child function can access parent function variable, i.e chota bacha icecream mang sakta hai bada se but bada nahi mang sakta chota se

function one(){
    const username = "saket"

    function two(){
        const website = "Youtube"
        console.log(username)  // output: saket
    }
    // console.log(website)  This will give error bcz  website is not defined in the outer scope
    two()
    
}
one()



if (true){
    const username = "saket"
    if (username === "saket"){
        const website = "Youtube"
        console.log(username + website) // output: saketYoutube
    }
    // console.log(website); // this  will also give an error because website is not accessible outside of its block scope.
}
// console.log(username); // This will also give an error because username is not available outside of its scope


/*****************Intereseting **********/
// one way to write function
function addone(num){
    return num + 1
}
console.log(addone(5)) // output : 6

// another way to write function
const  addtwo = function(num){
    return num + 2
}
console.log(addtwo(5)) // output : 7 