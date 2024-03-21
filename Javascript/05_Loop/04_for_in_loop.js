// for in loop for object

const myobject = {
    js: 'Javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}
 for(const key in myobject){
    console.log(`${key} shortcut is for ${myobject[key]}`);  //prints the keys and values of an object 
 }
 //output will be : js shortcut is for Javascript
//                  cpp shortcut is for c++
//                  rb shortcut is for ruby
//                  swift shortcut is for swift by apple



// for in loop for Array
const programming = ["js", "rb", "py"]
for (const key in programming) {
    console.log(`The language ${programming[key]}`) 
}
// output will be : The language js
//                The language rb
//                The language py

// NOTE: Map me "for in loop" iterate nahi kar sakte