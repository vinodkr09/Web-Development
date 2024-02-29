// Immediately Invoked Function Expressions (IIFE)
// Basic syntax to write IIFE is ()()

(function chai(){  // Name IIFE
    console.log(`DataBase Connected`)
})();   // Remember to give Semicolon Here

//Arrow Function
(() =>{
    console.log(`Databse Two Connected`)
})();  // Remember to give Semicolon Here


((name) =>{     // UnName IIFE
    console.log(`DB Connected Three ${name}`);
})('Saket Annad');