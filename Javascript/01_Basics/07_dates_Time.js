//Dates
// In javascript date is an Object
let myDate = new Date();
console.log(myDate); // output is: 2024-02-08T18:23:28.963Z
console.log(myDate.toString()); // output is: Thu Feb 08 2024 23:48:01 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //outputs only the date part of a date, not time i.e Thu Feb 08 2024
console.log(myDate.toLocaleDateString()) // outputs date according to local system settings i.e 8/2/2024
console.log(myDate.toLocaleString()); //displays date and time in user's browser language settings i.e 9/2/2024, 12:02:06 am
console.log(myDate.toISOString()); //converts date into ISO format which is in string format and it includes timezone offset too for me in US i.e 2024-02-08T18:27:18.244Z
console.log(myDate.toJSON()); //converts date into IST format i.e "2024-02-08T13:13:37
console.log(myDate.toLocaleString()); //displays date and time in user's browser language settings i.e 9/2/2024, 12:02:06 am
console.log(typeof  myDate); // returns object as it's a instance of Date class in JS i.e  MyDate : object


// Declartion of Dates
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); //  output is: Mon Jan 23 2023
let createdDate = new Date(2024, 2, 25)   
console.log(createdDate.toDateString());  // output is: Mon Mar 25 2024

// Another way to declare date
let meraDate = new Date(2024, 4, 9, 5, 3)
console.log(meraDate.toLocaleString());   // output is 9/5/2024, 5:03:00 am

let tarik = new Date("02-19-2024")
console.log(tarik.toLocaleString())  // output is 19/2/2024, 12:00:00 am


let myTimeStamp = Date.now()
console.log(myTimeStamp);     // Output timestamp like this : 1707419544937
console.log(tarik.getTime()); // Returns same value as above output: 1708281000000
console.log(Math.floor(myTimeStamp / 1000)); // Converting timestamp into seconds and removing milliseconds  from it, output: 1707419998


let newDate = new Date()
console.log(newDate.getMonth( ) + 1);  // This will return month from 0 - 11 so we need to add 1 for getting actual month so output is 2 (i.e febrary)
console.log(newDate.getDay());  //  Returns day of the week. 0 for Sunday, 1 for Monday, 2 for tuesday and so on.........

//customization way of writing date
newDate.toLocaleString('default', {
    weekday:'long',  //Narrow , Short , Long
    year: 'numeric', //2 digit or numeric
    month: 'long',   // Narrow, Short, Long
    day: 'numeric'  // 2 digit or numeric
    
})