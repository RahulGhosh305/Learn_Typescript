"use strict";
/**
 **  Advance Data Types
 **  Type Assertions
 **  Interface
 **  Generic Types
 **/
// Type Assertions
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
// For Object Recommened Interface
const person1 = {
    name: "Mr,. X",
    age: 30,
    gender: "Male",
    address: "Bangladesh",
};
let rollList = [1, 2, 3]; // For Array Recommended Type Alias
const sum = (num1, num2) => num1 + num2; // For Function Recommended Type Alias
const arr4 = [1, 2, 3];
const arr5 = ["Mr. X", "Mr. Y", "Mr. Z"];
const arr6 = [true, false, true, true];
const arr7 = [
    {
        name: "Mr. X",
        details: {
            age: 25,
            gender: "Female",
        },
    },
];
const arr8 = [
    "Mr.X",
    { age: 30, gender: "Male" },
];
