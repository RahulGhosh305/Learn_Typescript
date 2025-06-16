"use strict";
/**
 **  Basic Data Types
 **  Primitive Data Type: String, Number, Boolean, Null, Undefined, Symbol --> (Immutable)
 **  Non Primitive Data Type: Object, Array, Tuple, Function() --> (Mutable)
 **/
// Primitive Data Type
// String
const courseName = "Typescript";
// Number
const courseDuration = 6.5;
// Boolean
const isAdvance = true;
// Null
const noValue = null;
// Undefined
const x = undefined;
// Non Primitive Data Types
// Array
const employees = ["Rahul", "Joy"];
const employeesIds = [1, 2];
// Tuple
const cordinates = [12.233, 23.322];
const info = ["Rahul", 28, true];
// Object
let coder = {
    fName: "Rahul",
    lName: "Ghosh",
    companyName: "Google",
    position: "SWE",
    stack: "Web",
    experience: 3,
    isActiveLearner: true,
};
// Normal function
function normalFun(num1, num2 = 50) {
    return num1 + num2;
}
let total1 = normalFun(10, 20);
console.log(total1);
// Arrow function
const arrowFun = (num1, num2) => num1 + num2;
let total2 = arrowFun(15, 15);
console.log(total2);
// Methods
const user1 = {
    balance: 0,
    methodFun(balance) {
        return this.balance + balance;
    },
};
let total3 = user1.methodFun(100);
console.log(total3);
// Callback function
const arr1 = [1, 2, 3];
let callbackFun = arr1.map((elem) => elem * elem);
console.log(callbackFun);
// Array -> Spread
const brotherGroup1 = ["Sajib", "Rajib"];
const brotherGroup2 = ["Kishor", "Shakil"];
const brotherGroupList = [...brotherGroup1, ...brotherGroup2];
// Object -> Spread
const modarator1 = {
    typescript: "Mr. x",
    react: "Mr. y",
    redux: "Mr.z",
};
const modarator2 = {
    express: "Mr. a",
    node: "Mr. b",
    mongodb: "Mr.c",
};
const modaratorList = Object.assign(Object.assign({}, modarator1), modarator2);
// Rest
function friendsFun(...friends) {
    friends.forEach((friend) => {
        console.log(`Hi ${friend}.`);
    });
}
const friendsList = friendsFun("rahul", "joy", "sajib", "rajib");
// Array -> Destructureing
const arr2 = ["Sajib", "Rajib", "Rahul", "Rasel", "Karim", "Riaz", "Imam"];
const [, , joy, ...rest] = arr2;
console.log(joy); // output is "Rahul"
// Object -> Destructureing
const user2 = {
    name: {
        fName: "Rahul",
        mName: "Chandra",
        lName: "Ghosh",
    },
    contact: "01700000000",
    age: 28,
};
const { contact, name: { lName: lastName }, // type alias
 } = user2;
