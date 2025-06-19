"use strict";
/**
 **  Advance Data Types
 **  Type Assertions,
 **/
// Assertions
let anything;
anything = "Next Level Typescript";
anything.length; // type assertions
// more example
let anything2;
anything2 = 22;
anything2.toFixed(); // type assertions
// more example
function kgToGram(val) {
    if (typeof val === "string") {
        const convertedData = parseFloat(val) * 1000;
        return `Convert result : ${convertedData}`;
    }
    else if (typeof val === "number") {
        const convertedData = val * 1000;
        return convertedData;
    }
}
const result1 = kgToGram(1000); // this result1 return number
const result2 = kgToGram("1000"); // this result2 return string
try {
}
catch (error) {
    error.message;
}
