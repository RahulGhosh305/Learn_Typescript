/**
 **  Basic Data Types
 **  Primitive Data Type: String, Number, Boolean, Null, Undefined, Symbol --> (Immutable)
 **  Non Primitive Data Type: Object, Array, Tuple, Function() --> (Mutable)
 **/

// Primitive Data Type
// String
const courseName: string = "Typescript";

// Number
const courseDuration: number = 6.5;

// Boolean
const isAdvance: boolean = true;

// Null
const noValue: null = null;

// Undefined
const x: undefined = undefined;

// Non Primitive Data Types
// Array
const employees: string[] = ["Rahul", "Joy"];
const employeesIds: number[] = [1, 2];

// Tuple
const cordinates: [number, number] = [12.233, 23.322];
const info: [string, number, boolean] = ["Rahul", 28, true];

// Object
let coder: {
  fName: string;
  mName?: string; // Optional Type
  lName: string;
  companyName: string;
  position: "SWE"; // Literal Type
  stack: string;
  experience: number;
  isActiveLearner: boolean;
} = {
  fName: "Rahul",
  lName: "Ghosh",
  companyName: "Google",
  position: "SWE",
  stack: "Web",
  experience: 3,
  isActiveLearner: true,
};

// Normal function
function normalFun(num1: number, num2: number = 50): number {
  return num1 + num2;
}
let total1: number = normalFun(10, 20);
console.log(total1);

// Arrow function
const arrowFun = (num1: number, num2: number): number => num1 + num2;
let total2: number = arrowFun(15, 15);
console.log(total2);

// Methods
const user1 = {
  balance: 0,
  methodFun(balance: number): number {
    return this.balance + balance;
  },
};
let total3: number = user1.methodFun(100);
console.log(total3);

// Callback function
const arr1 = [1, 2, 3];
let callbackFun: number[] = arr1.map((elem: number) => elem * elem);
console.log(callbackFun);

// Array -> Spread
const brotherGroup1: string[] = ["Sajib", "Rajib"];
const brotherGroup2: string[] = ["Kishor", "Shakil"];
const brotherGroupList: string[] = [...brotherGroup1, ...brotherGroup2];

// Object -> Spread
const modarator1: {
  typescript: string;
  react: string;
  redux: string;
} = {
  typescript: "Mr. x",
  react: "Mr. y",
  redux: "Mr.z",
};

const modarator2: {
  express: string;
  node: string;
  mongodb: string;
} = {
  express: "Mr. a",
  node: "Mr. b",
  mongodb: "Mr.c",
};

const modaratorList: {
  express: string;
  node: string;
  mongodb: string;
  typescript: string;
  react: string;
  redux: string;
} = {
  ...modarator1,
  ...modarator2,
};

// Rest
function friendsFun(...friends: string[]) {
  friends.forEach((friend: string) => {
    console.log(`Hi ${friend}.`);
  });
}
const friendsList = friendsFun("rahul", "joy", "sajib", "rajib");

// Array -> Destructureing
const arr2 = ["Sajib", "Rajib", "Rahul", "Rasel", "Karim", "Riaz", "Imam"];
const [, , joy, ...rest] = arr2;
console.log(joy); // output is "Rahul"

// Object -> Destructureing
const user2: {
  name: {
    fName: string;
    mName: string;
    lName: string;
  };
  contact: string;
  age: number;
} = {
  name: {
    fName: "Rahul",
    mName: "Chandra",
    lName: "Ghosh",
  },
  contact: "01700000000",
  age: 28,
};

const {
  contact,
  name: { lName: lastName }, // type alias
} = user2;
