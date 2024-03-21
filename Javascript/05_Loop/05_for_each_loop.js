// forEach loop
// forEach loop  is used to iterate over an array and perform some operation on each element of the array. 
// It is callback function so function name is not written on forEach loop

const coding = ["HTML", "CSS", "JavaScript"];
coding.forEach(function (skill) {
    console.log(skill);  // output: HTML  CSS JavaScript
})

// using Arrow function
coding.forEach((item) => {
    console.log(item);   // output: HTML  HTML CSS
})


const myCoding = [
    {
        language : 'Nodejs',
        year : 1995,
    },
    {
        language : 'Backend',
        year : 1996,
    },
    {
        language : 'frontend',
        year : 1997,
    }
]
myCoding.forEach( (item) => {
    console.log(item.language);    //  output: Nodejs Backend frontend

})