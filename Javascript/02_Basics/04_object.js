// Constructor
//  const User = new Object()   declartion of object using constructor which is  signleton object and it is  empty
//  const tinderUser = {}   Non-singleton object which is also empty 

const tinderUser = {}
tinderUser.name = "Saket Anand"
tinderUser.id = "13244erb"
tinderUser.isLoggedIn = "False"
console.log(tinderUser); // output: { name: 'Saket Anand', id: '13244erb', isLoggedIn: 'False' }

// Nesting  objects in JavaScript
const regularUser = {
    email: "abc@gmail.com",
    Fullname: {
        userfullname: {
            firstname: "Saket",
            Lastname: "Anand"
        }
    }
}
console.log(regularUser.email);  // output: abc@gmail.com
console.log(regularUser.Fullname.userfullname.firstname) // output is Saket


//Objects with in object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3:"c", 4: "d"}
//const obj3 = {obj1, obj2}
//console.log(obj3); // output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3 = {...obj1, ...obj2}  // spread operator to merge two objects into one
console.log(obj3); // output: { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }

const obj4 = Object.assign({}, obj1, obj2) // using Object.assign() method to merge two objects into one
console.log(obj4); // same as above output i.e. { 1: 'a', 2: 'b', 3: 'c',  4: 'd' }
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// Syntax: Object.assign(target, source1, source2, source3...)



// when value comes from database, they come like this as Array of object
const User = [
    {
        id: 1,
        email: "saket@gmail.com"
    },
    {
        id: 1,
        email: "saket@gmail.com"
    }, 
    {
        id: 1,
        email: "saket@gmail.com"
    }
]
User[1].email
console.log(tinderUser); // output: { name: 'Saket Anand', id: '13244erb', isLoggedIn: 'False' }
console.log(Object.keys(tinderUser)); // gives the output index number of array i.e. [ 'name', 'id', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // gives the output all values of array i.e.  [ 'Saket Anand', '13244erb', 'False' ]
console.log(Object.entries(tinderUser)); // returns an array of arrays containing the key and its corresponding value i.e. [ 'name', 'Saket Anand' ],[ 'id', '13244erb' ],[ 'isLoggedIn', 'False' ]


console.log(tinderUser.hasOwnProperty('id')); // check if property exists or not so output: true