// For Loop

for(let i = 0; i <= 10; i++){
    const element = i;
    if (element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
}

for(let i = 0; i <= 10; i++){
    console.log(`outer loop value: ${i}`);
    for(let j = 0; j <= 10; j++){
        console.log(`Inner Loop value ${j} and inner loop ${i}`);
    }

}

let myArray = ["flash", "batman", "Superman"]
console.log(myArray.length);
for(let i =0; i < myArray.length; i++){
    const element = myArray[i];
    console.log(element);
}

// break keyword

for( let i =0; i <= 20; i++){
    if(i == 5){
        console.log(`Detected 5 `);
        break; // breaks out of the loop
    }
    console.log(`Value of i is ${i}`);
}

// Continue Keyword

for( let i =0; i <= 20; i++){
    if(i == 5){
        console.log(`Detected 5 `);
        continue;  // means 5  will be skipped in this iteration only
    }
    console.log(`Value of i is ${i}`);
}


