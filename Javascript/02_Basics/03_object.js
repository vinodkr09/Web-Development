// using object Literals 
//const person = {}; This is Empty object declared

//Adding properties to the object
const person = {
    name: "Saket",
    "Full name": "Saket Anand",
    age:  24,
    location: "Bhubaneswer",
    email: "saketanandcs99@gmail.com"
};
console.log(person.email); //way to access object using dot operator and Output : saketanandcs99@gmail.com
console.log(person["email"]) // Another way to access object 
console.log(person["Full name"])  // Accessing with string Data Type and output is  Saket Anand
console.log(person["age"]) // output is 24

//Updating or modifying the existing Property of Objects
person.email="vinod.krmahi@gmailcom"; //We can add new property to the existing object by just assigning a new value to it .
//Object.freeze(person) //  It will make the object immutable . Object can't be changed after freezing it.
// freeze method Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
person.email = "vinod.google98@gmail.com"
console.log(person); // output is name: 'Saket','Full name': 'Saket Anand', age: 24, location: 'Bhubaneswer', email: 'vinod.krmahi@gmailcom'


person.greetings = function(){
    console.log("Hello js user");
}

person.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.location}`) // when you want to reference the same object then we can write "this"
}
console.log(person.greetings()); //Output Hello Js User
console.log(person.greetingsTwo()) // Output Hello JS User Bhubaneswer

/* IMPORTANT FOR INTERVIEW PURPOSE */
const mysym = Symbol("key1")  // here symbol is datatype
let object = {
   [mysym]: "mykey2"    // Here we are adding key value pair to the empty object using Symbol data type.
};
console.log(object[mysym]); // Output: mykey2
// Remember how to access symbol  property in JavaScript for interview purpose
// In JavaScript, you can access a symbol property of an object using the square bracket notation and the symbol value as the property name.
