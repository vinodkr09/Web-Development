// for of loop
// for of loop can be  used to iterate over any iterable objects like array , string etc.
// ["", "", ""]
// [{}, {}, {}]
// for (const iterator of object) {  // syntax of for of loop

// }

const arr = [1, 2, 3, 4, 5]  // Array
for(const num of arr ){
    console.log(num);
}

const greetings = "Hello world!"  // String
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}



// Maps
// A map is an object which hold key-value pairs where  keys are unique and values can be of any data type.
// A map remebers the original order in which elements were added to it, so you can access them by their index as well.

// Map Methods
// Method	       Description
// new Map()	Creates a new Map object
// set()	    Sets the value for a key in a Map
// get()	    Gets the value for a key in a Map
// clear()	    Removes all the elements from a Map
// delete()	    Removes a Map element specified by a key
// has()	    Returns true if a key exists in a Map
// forEach()	Invokes a callback for each key/value pair in a Map
// entries()	Returns an iterator object with the [key, value] pairs in a Map
// keys()	    Returns an iterator object with the keys in a Map
// values()	   Returns an iterator object of the values in a Map

const map = new Map()
map.set('In', "India")
map.set('USA', "United  States of America")
map.set('Fr', "France")
console.log(map)
//  Output: Map(3) {
//   'In' => 'India',
//   'USA' => 'United  States of America',
//   'Fr' => 'France'
// }

for (const [key, value] of map) {
    console.log(key, ':- ', value);
}
// Output: In :- India
//         USA :- United  States of America
//          Fr :- France

// NOTE: "for of loop" works on map but not on Object because it does not guarantee that properties  will come in sorted order.
//       So object to work we use: "for in loop".