// Switch Case
// basic Syntax:
// switch (expression) {
//     case value1:
//         statement1;
//         break;
//         case value2:
//             statement2;
//             break;
//          default:
//             break;
// }

const month = 4  // Integer
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febrarury");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid Month")
        break;
}

// Output will be  "April" because the expression is equal to  one of the cases, so it executes that code block and then breaks out of the switch construct.

const months = "march"  // String
switch (months) {
    case "jan":
        console.log("January");
        break;
    case "Feb":
        console.log("Febrarury");
        break;
    case "march":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;

    default:
        console.log("Invalid Month")
        break;
}
// Output  : March
