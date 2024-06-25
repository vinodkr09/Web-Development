// declare a promise with variable
const promiseOne = new Promise(function(resolve, reject){

    // DO an async task: Db calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 1000)

})

// consumption a promise
promiseOne.then(function(){    // resolve() is directly connected to .then()
    console.log('promise consumed');      
})


// another way to declare promise without variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 ")
        resolve()
    }, 1000)
}).then(function(){     // resolve() is directly connected to .then()
    console.log("promise 2 resolved");
})



const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function(){
         resolve({username: "chai", email: "chai@example.com"})   // resolve me data pass kiye hai as the parameter most of the time "object" hi hota hai.
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "hitesh", password: "123"})
        }else{
            reject("Error: Something Went wrong")
        }
    }, 1000)
   
})

// consumption of promise  
promiseFour.then((user) =>{
    console.log(user);
    return user.username;
}).then((username) =>{        // chaining it to get the value of username
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {      // "finally" yah to excute hoga hi hoga either resolve ya reject ho ya na ho
    console.log("The promise is either done resolved or rejected");
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        }else{
            reject("Error: javascript Went wrong")
        }
    }, 1000)

})

async function consumepromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumepromiseFive()


// NOTE: dono syantx then and catch wala ya phir try and catch wala koi bhi syantx use kar skata hai as for your convenince both are same.


// fetch data using try and catch
async function getallUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getallUsers()


// fetch data using then and catch method
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})


