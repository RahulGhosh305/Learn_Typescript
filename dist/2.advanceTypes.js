"use strict";
/**
 **  Advance Data Types
 **  Type Assertions
 **  Interface
 **  Generic Types
 **  Generic --> Interface, Function, Tuple
 **  Constraints
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
const poorDeveloper = {
    name: "Poor Dev",
    computer: {
        name: "HP",
        model: "ZBook",
        releaseYear: "2020",
    },
    smartWatch: {
        brand: "BitLock",
        model: "B22",
        display: "OLED",
    },
};
const richDeveloper = {
    name: "Rich Dev",
    computer: {
        name: "MacBook",
        model: "M4",
        releaseYear: "2025",
    },
    smartWatch: {
        brand: "Apple",
        model: "X-10",
        display: "Retina",
        heartBeat: true,
        so2: true,
    },
    bike: {
        name: "Royel Emfeild",
        model: "2025",
        cc: "400",
    },
};
// Generic in Function
const createArrayWithGeneric = (param) => {
    return [param];
};
const res1 = createArrayWithGeneric("Bangladesh");
const res2 = createArrayWithGeneric(100);
const res3 = createArrayWithGeneric({ name: "Mr. X", job: "SWE" });
// Generic in Tuple
const createTupleWithGeneric = (param1, param2) => {
    return [param1, param2];
};
const res4 = createTupleWithGeneric("Bangladesh", true);
const res5 = createTupleWithGeneric({ name: "Mr. X", job: "SWE" }, true);
// Generic with Fixed value
const addCourse = (params) => {
    const course = "Learn Typescript";
    return Object.assign(Object.assign({}, params), { course });
};
const student4 = addCourse({ name: "Mr. X", age: 20 });
// Constraints
const addCourseToStudent = (params) => {
    const course = " Typescript";
    return Object.assign(Object.assign({}, params), { course });
};
const student5 = addCourseToStudent({
    id: 1,
    name: "Mr. X",
    email: "x@gmail.com",
    hasWatch: true,
});
const student6 = addCourseToStudent({
    id: 1,
    name: "Mr. X",
    email: "x@gmail.com",
    hasMobile: true,
});
// More Example
const getPropertyValue = (obj, key) => {
    return obj[key];
};
const employee = {
    name: "Mr. X",
    age: 25,
    salary: 20000,
};
const car = {
    name: "X Corola",
    model: 2020,
};
const res6 = getPropertyValue(employee, "name");
const res7 = getPropertyValue(car, "model");
